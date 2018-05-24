import './vscroll.css';
import $ from '../util/dom';
import HScrollerCore from './core';
import getContentRender from './render';
import htmlTplDefault from './default.html';
import htmlTplPull from './pull.html';
import htmlTplLoad from './load.html';

// status of pull down
const STATUS_ERROR = -1;
const STATUS_START = 0;
const STATUS_READY = 1;
const STATUS_REFRESH = 2;
// labels of pull down
const LABELS = ['数据异常', '下拉刷新数据', '松开刷新数据', '数据刷新中...'];
const PULL_DOWN_HEIGHT = 67;

class Vscroll {
  /**
   * Creates an instance of Vscroll.
   * @param {Element|Element[]} $initDom 需要初始化的dom
   * @param {Object} options 设置
   * @memberof Vscroll
   */
  constructor($initDom, options) {
    if (!$initDom) {
      throw new Error(`no dom's class named '${$initDom.className}`);
    }
    this.config = {
      errorLabel: '数据异常',
      startLabel: '下拉刷新数据',
      readyLaebl: '松开刷新数据',
      loadingLabel: '数据刷新中...',
      loadMoreLable: '正在加载...'
    };
    this.pullDown = {
      status: 0,
      height: 0,
      msg: ''
    };
    this.touchPosition = {
      startY: 0,
      lastMoveY: 0,
      distance: 0,
      moveStartY: 0,
      __lastTouchTop: 0,
      _touchDirection: 0,
      _directionSatartTimeStamp: 0
    };
    this.direction = 0;
    this.scrollTop = 0;
    this.currentScrollTop = 0;
    this.maxScrollTop = 0;
    this.pullTimer = undefined;
    this.loadingTimer = undefined;
    this.pullImgList = [];
    this.loadingImgList = [];

    this.enablePullDown = true;
    this.isTouchTransform = true;

    this.__clientWidth = 0;
    this.__clientHeight = 0;
    this.__contentWidth = 0;
    this.__contentHeight = 0;
    this.maxScrollLeft = 0;
    this.maxScrollTop = 0;

    this.isRefreshDisabled = false;
    this.isLoadMoreEnd = true;
    this.__initType = options.type || 'default';
    this.$initDom = $initDom;
    this.initHtmlTemp();
    this.$el = document.querySelector('.pull-main-content');
    if (this.__initType === 'load' || this.__initType === 'default') {
      this.$el.querySelector('.load-more-content--lable').innerHTML = this.config.loadMoreLable; // 初始化文案
    }
    this.$pullDom = document.querySelector('.pull-down-container');
    this.onPullRefreshCallback = options.onPullRefreshCallback || null;
    this.onTouchDirectionCallback = options.onTouchDirectionCallback || null;
    this.onScrollChangeCallback = options.onScrollChangeCallback || null;
    this.onLoadMoreCallback = options.onLoadMoreCallback || null;
    this.pullDownHeader = this.$el.querySelector('.pull-down-header');
    if (this.pullDownHeader) {
      this.icon = this.pullDownHeader.querySelector('.pull-down-content--icon');
    }
    let render = getContentRender(this.$pullDom);
    if (this.getAndroidVersion() && this.getAndroidVersion() < 4.4) {
      render = getContentRender(this.$pullDom, 2);
    }
    this.scroller = new HScrollerCore(render);
    this.$el.addEventListener('touchstart', this.doTouchStart.bind(this));
    this.$el.addEventListener('touchmove', this.doTouchMove.bind(this));
    this.$el.addEventListener('touchend', this.doTouchEnd.bind(this));
    this.$el.addEventListener('scroll', this.doScroll.bind(this));
    this.resize();
  }
  initHtmlTemp() {
    let htmlTpl;
    if (this.__initType === 'pull') {
      htmlTpl = htmlTplPull;
    } else if (this.__initType === 'load') {
      htmlTpl = htmlTplLoad;
    } else {
      htmlTpl = htmlTplDefault;
    }
    // 输出html到父节点
    let scrollContainer = $($.render(htmlTpl, {}));

    // 兼容没有class的情况
    if ($('.' + this.$initDom.className)[0].parentNode.className === '') {
      let tag = $('.' + this.$initDom.className)[0].parentNode.tagName.toLowerCase();
      $(tag).append(scrollContainer);
    } else {
      let parentNode = $('.' + this.$initDom.className)[0].parentNode.className;
      $('.' + parentNode).append(scrollContainer);
    }
    // 将原本的内容插入到load-content之前
    let pullDownContainer = document.querySelector('.pull-down-container');
    let loadContentNode = document.querySelector('.load-content');
    pullDownContainer.insertBefore(this.$initDom, loadContentNode);
  }
  label() {
    // label of pull down
    if (this.pullDown.status === STATUS_ERROR) {
      return this.pullDown.msg;
    }
    let customLabels = this.customLabels();
    return customLabels[this.pullDown.status + 1];
  }
  customLabels() {
    let errorLabel = this.config.errorLabel || LABELS[0];
    let startLabel = this.config.startLabel || LABELS[1];
    let readyLaebl = this.config.readyLabel || LABELS[2];
    let loadingLabel = this.config.loadingLabel || LABELS[3];
    return [errorLabel, startLabel, readyLaebl, loadingLabel];
  }
  iconClass() {
    // icon of pull down
    if (this.pullDown.status === STATUS_REFRESH) {
      return 'pull-down-refresh';
    } else if (this.pullDown.status === STATUS_ERROR) {
      return 'pull-down-error';
    }
    return '';
  }
  resetPullDown() {
    this.pullDown.status = STATUS_START;
    this.$el.querySelector('.pull-down-content--icon').className = 'pull-down-content--icon ' + this.iconClass();
    this.$el.querySelector('.pull-down-content--label').innerHTML = this.label();
    this.scroller.finishPullToRefresh();
  }
  resize() {
    let container = this.$el;
    this.setDimensions(container.clientWidth, container.clientHeight, this.$el.offsetWidth, this.$el.offsetHeight);
  }
  setEnablePullDown(isEnable) {
    this.enablePullDown = isEnable;
  }
  setTouchTransform(isTouchTransform) {
    this.isTouchTransform = isTouchTransform;
  }
  setDimensions(clientWidth, clientHeight, contentWidth, contentHeight) {
    // Only update values which are defined
    if (clientWidth === +clientWidth) {
      this.__clientWidth = clientWidth;
    }
    if (clientHeight === +clientHeight) {
      this.__clientHeight = clientHeight;
    }
    if (contentWidth === +contentWidth) {
      this.__contentWidth = contentWidth;
    }
    if (contentHeight === +contentHeight) {
      this.__contentHeight = contentHeight;
    }
    // Refresh maximums
    this.__computeScrollMax();
  }
  /**
   * Recomputes scroll minimum values based on client dimensions and content dimensions.
   */
  __computeScrollMax() {
    this.maxScrollLeft = Math.max(this.__contentWidth - this.__clientWidth, 0);
    this.maxScrollTop = Math.max(this.__contentHeight - this.__clientHeight, 0);
  }
  doScroll() {
    this.currentScrollTop = this.$el.scrollTop || 0;
    if (this.onScrollChangeCallback) {
      this.onScrollChangeCallback(this.direction, this.currentScrollTop);
    }
    // 当初始化类型为loadmore才执行
    if (this.__initType === 'load' || this.__initType === 'default') {
      if (
        this.currentScrollTop + document.documentElement.clientHeight + 40 >=
        document.querySelector('.' + this.$initDom.className).offsetHeight +
          document.querySelector('.load-content').offsetHeight +
          10
      ) {
        if (this.onLoadMoreCallback && this.isLoadMoreEnd) {
          this.onLoadMoreCallback(this.setLoadMoreStatus.bind(this));
          this.isLoadMoreEnd = false;
        }
      }
    }
    if (this.onTouchDirectionCallback && this.direction !== 1 && this.currentScrollTop <= 15) {
      this.onTouchDirectionCallback(this.direction, this.currentScrollTop);
    }
  }
  setLoadMoreStatus(done) {
    this.isLoadMoreEnd = !!done;
    this.resize();
  }
  doTouchStart(e) {
    if (this.isRefreshDisabled) {
      e = e || window.event;
      e.preventDefault();
      e.returnValue = false;
      return;
    }
    this.touchPosition.startY = e.touches[0].pageY;
    this.touchPosition.moveStartY = e.touches[0].pageY;
    this.touchPosition.__lastTouchTop = e.touches[0].pageY;
    this.scrollTop = this.$el.scrollTop || 0;
    this.currentScrollTop = this.$el.scrollTop || 0;
    this.touchPosition._touchDirection = 0;
    this.isTouchTransform = true;
  }
  doTouchMove(e) {
    if (this.isRefreshDisabled) {
      e = e || window.event;
      e.preventDefault();
      e.returnValue = false;
      return;
    }
    this.currentScrollTop = this.$el.scrollTop || 0;
    let distance = e.touches[0].pageY - this.touchPosition.startY;
    let moveDistance = e.touches[0].pageY - this.touchPosition.moveStartY;
    let moveY = e.touches[0].pageY - this.touchPosition.__lastTouchTop;
    let currentDirection = moveY < 0 ? 1 : -1; //1:上滑  -1：下滑
    if (this.onScrollChangeCallback) {
      this.onScrollChangeCallback(currentDirection, this.currentScrollTop);
    }
    if (
      this.onTouchDirectionCallback &&
      window.navigator.userAgent.toLowerCase().indexOf('ylna') > -2 &&
      this.getAndroidVersion() &&
      this.getAndroidVersion() < 5
    ) {
      this.onTouchDirectionCallback(currentDirection, this.currentScrollTop, e.target);
    }
    if (this.touchPosition._touchDirection === 0) {
      this.touchPosition._touchDirection = currentDirection;
    } else if (this.onTouchDirectionCallback && this.touchPosition._touchDirection === currentDirection) {
      if (Math.abs(moveDistance) > 30) {
        if (this.direction !== currentDirection) {
          this.onTouchDirectionCallback(currentDirection, this.currentScrollTop, e.target);
        }
        if (this.isTouchTransform) {
          this.direction = currentDirection;
        }
      }
    } else {
      this.touchPosition.moveStartY = e.touches[0].pageY;
      this.touchPosition._touchDirection = 0;
    }
    this.touchPosition.__lastTouchTop = e.touches[0].pageY;
    if (distance < this.scrollTop) {
      //小于滚动距离的时候系统行为
      return;
    }
    if (!this.enablePullDown || this.__initType === 'load') {
      //不允许下拉
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    distance -= this.scrollTop;
    // limit the height of pull down to 180
    if (distance <= 180) {
      this.scroller.__publish(0, -distance);
    } else {
      distance = 180;
    }
    // update touchPosition and the height of pull down
    this.touchPosition.distance = distance;
    /**
     * if distance is bigger than the height of pull down
     * set the status of pull down to STATUS_READY
     */
    if (distance > PULL_DOWN_HEIGHT) {
      this.pullDown.status = STATUS_READY;
      this.$el.querySelector('.pull-down-content--icon').className = 'pull-down-content--icon ' + this.iconClass();
      this.$el.querySelector('.pull-down-content--label').innerHTML = this.label();
      if (this.icon) {
        this.icon.style.transform = 'rotate(180deg)';
      }
    } else {
      /**
       * else set the status of pull down to STATUS_START
       * and rotate the icon based on distance
       */
      this.pullDown.status = STATUS_START;
      this.$el.querySelector('.pull-down-content--icon').className = 'pull-down-content--icon ' + this.iconClass();
      this.$el.querySelector('.pull-down-content--label').innerHTML = this.label();
      if (this.icon) {
        this.icon.style.transform = 'rotate(' + distance / PULL_DOWN_HEIGHT * 180 + 'deg)';
      }
    }
    // return false;
  }
  doTouchEnd() {
    if (!this.enablePullDown || this.__initType === 'load') {
      //不允许下拉
      return;
    }
    // reset icon rotate
    if (this.icon) {
      this.icon.style.transform = '';
    }
    // if distance is bigger than 60
    if (this.touchPosition.distance > PULL_DOWN_HEIGHT) {
      this.pullDown.status = STATUS_REFRESH;
      this.$el.querySelector('.pull-down-content--icon').className = 'pull-down-content--icon ' + this.iconClass();
      this.$el.querySelector('.pull-down-content--label').innerHTML = this.label();
      // trigger refresh callback
      if (this.onPullRefreshCallback && typeof this.onPullRefreshCallback === 'function') {
        this.onPullRefreshCallback(this.setRefreshStatus.bind(this));
        this.scroller.__publish(0, -PULL_DOWN_HEIGHT, true);
        this.isRefreshDisabled = true;
      } else {
        this.resetPullDown();
        console.warn('please use :on-refresh to pass onPullRefreshCallback callback');
      }
    } else {
      this.resetPullDown();
    }
    // reset touchPosition
    this.touchPosition.distance = 0;
  }
  setRefreshStatus(done) {
    if (done) {
      this.resetPullDown();
      this.isRefreshDisabled = false;
    } else {
      // show error and hide the pull down after 1 second
      this.pullDown.msg = this.customLabels[0];
      this.pullDown.status = STATUS_ERROR;
      this.$el.querySelector('.pull-down-content--icon').className = 'pull-down-content--icon ' + this.iconClass();
      this.$el.querySelector('.pull-down-content--label').innerHTML = this.label();
      setTimeout(() => {
        this.resetPullDown();
      }, 1000);
    }
  }
  formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  }
  getAndroidVersion() {
    let ua = window.navigator.userAgent.toLowerCase();
    let match = ua.match(/android\s([0-9\.]*)/); //eslint-disable-line
    return match ? parseFloat(match[1]) : false;
  }
}
export default Vscroll;
