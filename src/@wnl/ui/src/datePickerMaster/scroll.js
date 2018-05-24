/* eslint-disable */

function Scroll(el, params) {
  this.scroller = document.querySelector(el);
  this.childNode = this.scroller.children[0];
  this.options = {
    step: true,// 是否开启步长模式
    defaultPlace: 0,// 默认列表位置
    callback: null
  };

  this.startPageY = 0;
  this.startTime = 0;
  this.endTime = 0;
  this.offsetTop = 0;//上一次滚动位置

  this.scrollerHeight = this.scroller.clientHeight;//scroller高度
  this.childNodeHeight = this.childNode.clientHeight;//scroller子元素的高度
  this.scrollHeight = this.childNodeHeight - this.scrollerHeight;//滚动高度

  var childNodes = this.childNode.childNodes;
  this.stepLen = childNodes.length > 0 ? childNodes[0].clientHeight : 0;// 步长

  // 设置参数
  for (var i in params) {
    this.options[i] = params[i];
  }

  // 默认列表位置
  var defaultPlace = this.options.defaultPlace ? this.options.defaultPlace : 0;
  this.scrollTo(0, defaultPlace);

  this._start();
  this._move();
  this._end();
  // console.log(this);
}

Scroll.prototype = {
  _start: function () {
    var self = this;
    self.scroller.addEventListener('touchstart', function (e) {
      e.stopPropagation();
      e.preventDefault();

      self.startTime = self.getTime();
      var touches = e.touches ? e.touches[0] : e;
      self.startPageY = touches.pageY;//起始触摸点

      self.browserVendor('transition', 'none');
    }, false);
  },

  _move: function () {
    var self = this;
    self.scroller.addEventListener('touchmove', function (e) {
      e.stopPropagation();
      e.preventDefault();

      var timestamp = self.getTime();
      var touches = e.touches ? e.touches[0] : e;

      // 滚动高度
      var diffPageY = touches.pageY - self.startPageY;
      var movePageY = diffPageY + self.offsetTop;

      // 最少移动10px
      if (timestamp - self.endTime > 300 && Math.abs(diffPageY) < 10) {
        return;
      }

      // 超过边缘滚动有阻力
      if (movePageY > 0) {
        movePageY /= 3;
      } else if (Math.abs(movePageY) > Math.abs(self.scrollHeight)) {
        movePageY = Math.abs(self.scrollHeight) - Math.abs(movePageY);
        movePageY = movePageY / 3 - self.scrollHeight;
      }

      self.browserVendor('transform', 'translate(0, ' + movePageY + 'px)');
    }, false);
  },

  _end: function () {
    var self = this;
    self.scroller.addEventListener('touchend', function (e) {
      e.stopPropagation();
      e.preventDefault();

      self.endTime = self.getTime();
      var duration = self.endTime - self.startTime;

      var touches = e.changedTouches ? e.changedTouches[0] : e;
      var offsetHeight = touches.pageY - self.startPageY;//本次滚动偏移位置
      self.offsetTop += offsetHeight;//记录总偏移位置

      if ((self.offsetTop > 0) || (Math.abs(self.offsetTop) > Math.abs(self.scrollHeight))) {
        //上边缘&下边缘
        self.browserVendor('transition', 'all 500ms');
      } else if (duration < 300) { // 惯性滚动
        var speed = Math.abs(offsetHeight) / duration;// 惯性移动速度
        var moveTime = duration * speed * 20;// 惯性滚动时间(动画)
        moveTime = moveTime > 2000 ? 2000 : moveTime;
        self.offsetTop += offsetHeight * speed * 10;// 惯性移动距离

        self.browserVendor('transitionProperty', 'all');
        self.browserVendor('transitionDuration', moveTime + 'ms');
        self.browserVendor('transitionTimingFunction', 'cubic-bezier(0.1, 0.57, 0.1, 1)');
      } else {
        self.browserVendor('transition', 'all 500ms');
      }

      if (self.offsetTop > 0) {
        self.offsetTop = 0;
      } else if (Math.abs(self.offsetTop) > Math.abs(self.scrollHeight)) {
        self.offsetTop = -self.scrollHeight;
      }

      // 步长模式
      if (self.options.step && self.stepLen > 0) {
        var nowEndY = self.offsetTop;
        var h = Math.abs(nowEndY % self.stepLen);//滚动多余不足step的高度
        var halfHeight = self.stepLen / 2;//step一半的高度

        //超过行一半的高度，则滚动一行
        var moveY = (h >= halfHeight) ? (nowEndY - self.stepLen + h) : (nowEndY + h);

        var index = parseInt(Math.abs(moveY) / self.stepLen);
        self.options.callback({
          index: index,
          node: self.childNode.childNodes
        });
        self.offsetTop = moveY;
      }

      self.browserVendor('transform', 'translate(0, ' + self.offsetTop + 'px)');

    }, false);
  },

  // 滚动到指定位置
  scrollTo: function (x, y, time) {
    var self = this;

    if (time && time > 0) {
      self.browserVendor('transitionProperty', 'all');
      self.browserVendor('transitionDuration', time + 'ms');
      self.browserVendor('transitionTimingFunction', 'cubic-bezier(0.1, 0.57, 0.1, 1)');
    } else {
      self.browserVendor('transition', 'none');
    }

    y = -y;
    self.offsetTop = y;
    self.browserVendor('transform', 'translate(0, ' + y + 'px)');
  },

  // 刷新
  refresh: function () {
    this.childNode = this.scroller.children[0];
    this.startPageY = 0;
    this.startTime = 0;
    this.endTime = 0;
    this.offsetTop = 0;

    this.scrollerHeight = this.scroller.clientHeight;//scroller高度
    this.childNodeHeight = this.childNode.clientHeight;//scroller子元素的高度
    this.scrollHeight = this.childNodeHeight - this.scrollerHeight;//滚动高度

    var childNodes = this.childNode.childNodes;
    this.stepLen = childNodes.length > 0 ? childNodes[0].clientHeight : 0;// 步长

    this.scrollTo(0, 0, 500);
  },

  // 浏览器兼容
  browserVendor: function (styleStr, value) {
    var self = this;
    var vendors = ['t', 'WebkitT', 'MozT', 'msT', 'OT'],
      styleObj,
      len = vendors.length;
    var elementStyle = self.childNode.style;

    for (var i = 0; i < len; i++) {
      styleObj = vendors[i] + styleStr.substr(1);
      if (styleObj in elementStyle) {
        elementStyle[styleObj] = value;
        // console.log(styleObj + ' = ' + value);
      }
    }
  },

  // 获取当前时间
  getTime: function () {
    return parseInt(new Date().getTime());
  }
};

export default Scroll;
