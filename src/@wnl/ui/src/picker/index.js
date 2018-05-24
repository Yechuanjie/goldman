import { util } from '@wnl/util';
import './picker.css';
import $ from '../util/dom';
import pickerTpl from './picker.html';
import pickerItem from '../pickerItem/index';

let cacheConfirmObj = {}; //缓存上次确定选择的位置

export default class picker {
  constructor() {
    this.itemList = [];
    this.changeItemList = [];
    this.isNest = false;
    /* eslint-disable */
    // 配置项
    const options = arguments[arguments.length - 1];
    this.$picker = null;
    this.isShow = true;
    this.isDisabled = true;
    this.defaults = $.extend(
      {
        id: 'picker',
        className: '',
        container: 'body',
        onChange: $.noop,
        onCancel: $.noop,
        onConfirm: $.noop,
        modal: true
      },
      options
    );
    this.defaultIndexList = cacheConfirmObj[this.defaults.id]
      ? util.deepCopy(cacheConfirmObj[this.defaults.id])
      : this.defaults.defaultIndex || [];
    this.pickerItemGroups = [];
    // 数据处理
    this.isMulti = false; // 是否多列的类型
    if (arguments.length > 2) {
      let i = 0;
      while (i < arguments.length - 1) {
        this.itemList.push(arguments[i++]);
      }
      this.isMulti = true;
    } else {
      this.itemList.push(arguments[0]);
    }
    this.changeItemList = util.deepCopy(this.itemList);
    let depth = options.depth || (this.isMulti ? this.itemList.length : this.getItemDepth(this.itemList[0][0]));
    this.resultList = new Array(depth);
    //嵌套级联选择
    if (!this.isMulti && depth > 1) {
      this.isNest = true;
      this.getDepthList(0);
    }
    /* eslint-enable */
    this.$picker = $($.render(pickerTpl, this.defaults));
    this.$picker
      .on('click', '.wnlui_mask', () => {
        this.hide();
        this.defaults.onCancel(this.defaults.resultType === 'value' ? this.resultList : this.defaultIndexList);
      })
      .on('click', '.wnlui_picker__action', () => {
        this.hide();
        this.defaults.onCancel(this.defaults.resultType === 'value' ? this.resultList : this.defaultIndexList);
      })
      .on('click', '#wnlui_picker-confirm', () => {
        cacheConfirmObj[this.defaults.id] = util.deepCopy(this.defaultIndexList);
        this.defaults.onConfirm(this.defaults.resultType === 'value' ? this.resultList : this.defaultIndexList);
      })
      .on('click', '.date_l_btn', () => {
        this.dateLunarTap();
      });
    this.generatePickers();
    this.setResultList();
    this.show();
  }
  getItemDepth(object) {
    let depth = 1;
    if (object.children && object.children[0]) {
      depth = this.getItemDepth(object.children[0]) + 1;
    }
    return depth;
  }
  getDepthList(groupIndex) {
    this.changeItemList.length = groupIndex + 1;
    if (this.changeItemList[groupIndex][this.defaultIndexList[groupIndex]].children) {
      this.getNestList(this.changeItemList[groupIndex][this.defaultIndexList[groupIndex]]);
    }
  }
  getNestList(itemObj) {
    if (itemObj && itemObj.children) {
      this.changeItemList.push(itemObj.children);
      if (itemObj.children[this.defaultIndexList[this.changeItemList.length - 1]]) {
        this.getNestList(itemObj.children[this.defaultIndexList[this.changeItemList.length - 1]]);
      }
    }
  }
  disableScroll() {
    this.oldonwheel = window.onwheel;
    window.onwheel = this.preventDefault;
    this.oldonmousewheel = window.onmousewheel;
    window.onmousewheel = this.preventDefault;
    this.oldontouchmove = window.ontouchmove;
    window.ontouchmove = this.preventDefault;
    this.isDisabled = true;
  }
  preventDefault(e) {
    e = e || window.event;
    e.preventDefault();
    e.returnValue = false;
  }
  enableScroll() {
    if (!this.isDisabled) {
      return;
    }
    window.onwheel = this.oldonwheel;
    window.onmousewheel = this.oldonmousewheel;
    document.onkeydown = this.oldonkeydown;
    window.ontouchmove = this.oldontouchmove;
    this.isDisabled = false;
  }
  generatePickers() {
    this.changeItemList.forEach((item, i) => {
      let newItem = new pickerItem(item, {
        onChange: this.handleChange.bind(this),
        defaultIndex: this.defaultIndexList[i],
        groupIndex: i
      });
      this.pickerItemGroups.push(newItem);
      this.$picker.find('.wnlui_picker__bd').append(newItem.$item);
    });
  }
  setResultList() {
    this.changeItemList.forEach((item, i) => {
      this.resultList[i] = util.deepCopy(item[this.defaultIndexList[i]]);
      this.resultList[i].children = null;
      delete this.resultList[i].children;
    });
  }
  show() {
    if (this.defaults.showLunar) {
      this.$picker.find('.date_select_footer').removeClass('hidden');
    } else {
      this.$picker.find('.date_select_footer').addClass('hidden');
    }
    $(this.defaults.container).append(this.$picker);
    // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题
    $.getStyle(this.$picker[0], 'transform');
    this.$picker.find('.wnlui_mask').addClass('wnlui_animate-fade-in');
    this.$picker.find('.wnlui_picker').addClass('wnlui_animate-slide-up');
    this.isShow = true;
    if (this.defaults.modal) {
      this.disableScroll();
    }
  }
  _hide(callback) {
    // this._hide = $.noop; // 防止二次调用导致报错
    this.$picker.find('.wnlui_mask').addClass('wnlui_animate-fade-out');
    this.$picker
      .find('.wnlui_picker')
      .addClass('wnlui_animate-slide-down')
      .on('animationend webkitAnimationEnd', () => {
        if (!this.isShow && this.$picker && document.querySelector('.wnlui_mask')) {
          this.$picker.find('.wnlui_mask').removeClass('wnlui_animate-fade-out');
          this.$picker.find('.wnlui_picker').removeClass('wnlui_animate-slide-down');
          this.$picker.remove();
          if (callback) callback();
        }
      });
    this.isShow = false;
  }
  hide(callback) {
    this.enableScroll();
    this._hide(callback);
  }
  handleChange(groupIndex, i, item) {
    let lastIndex = this.defaultIndexList[groupIndex];
    if (lastIndex === i) {
      return;
    }
    this.resultList[groupIndex] = item;
    this.defaultIndexList[groupIndex] = i;
    setTimeout(() => {
      if (this.isNest) this.onSelectChange(groupIndex, i);
      if (this.defaults.onChange) {
        this.defaults.onChange(this.defaults.resultType === 'value' ? this.resultList : this.defaultIndexList);
      }
    }, 0);
  }
  onSelectChange(groupIndex, i) {
    this.getDepthList(groupIndex, i);
    this.changeItemList.forEach((item, index) => {
      if (index > groupIndex) {
        this.defaultIndexList[index] = 0;
        this.pickerItemGroups[index].items = item;
        this.pickerItemGroups[index].render();
        this.pickerItemGroups[index].adjustPosition(0);
      }
    });
    this.setResultList();
  }
}
