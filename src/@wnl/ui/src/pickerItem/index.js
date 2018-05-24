import $ from '../util/dom';
import itemTpl from './item.html';

export default class pickerItem {
  constructor(items, options) {
    this.items = items;
    this.height = 238;
    this.itemHeight = 34;
    this.indicatorTop = 102;
    this.indicatorHeight = 34;
    this.onChange = $.noop;
    this.groupIndex = -1;
    this.defaultIndex = -1;
    this.$item = null;
    this.touching = false;
    this.ogY = 0;
    this.ogTranslate = 0;
    this.touchId = undefined;
    this.translate = 0;
    this.totalHeight = 0;
    this.animating = true;
    if (options.onChange) this.onChange = options.onChange;
    this.defaultIndex = options.defaultIndex || 0;
    this.groupIndex = options.groupIndex;
    this.$item = $($.render(itemTpl, {}));
    this.$item.on('touchstart', '.wnlui_picker__group', this.handleTouchStart.bind(this));
    this.$item.on('touchmove', '.wnlui_picker__group', this.handleTouchMove.bind(this));
    this.$item.on('touchend', '.wnlui_picker__group', this.handleTouchEnd.bind(this));
    if (this.items.length > 0) this.render();
  }
  render() {
    let groups = '';
    for (let index = 0; index < this.items.length; index += 1) {
      let item = this.items[index];
      groups += '<div v-for="item in items" class="wnlui_picker__item">' + item.label + '</div>';
    }
    this.$item.find('.wnlui_picker__content').html(groups);
    this.adjustPosition();
  }
  adjustPosition(defaultIndex) {
    if ((defaultIndex && defaultIndex > -1) || defaultIndex === 0) {
      this.defaultIndex = defaultIndex;
    } else {
      defaultIndex = this.defaultIndex;
    }
    let items = this.items;
    let indicatorTop = this.indicatorTop;
    let itemHeight = this.itemHeight;
    const totalHeight = items.length * itemHeight;
    let translate = totalHeight <= indicatorTop ? indicatorTop : 0;
    if (defaultIndex > -1) {
      if (translate === 0) {
        let upperCount = Math.floor(indicatorTop / itemHeight);
        if (defaultIndex > upperCount) {
          //over
          let overCount = defaultIndex - upperCount;
          translate -= overCount * itemHeight;
        } else if (defaultIndex === upperCount) {
          translate = 0;
        } else {
          //less
          translate += Math.abs(upperCount - defaultIndex) * itemHeight;
        }
      } else {
        //total item less than indicator height
        translate -= itemHeight * defaultIndex;
      }
    }
    this.ogTranslate = translate;
    this.totalHeight = totalHeight;
    this.translate = translate;
    setTimeout(() => {
      this.updateSelected(defaultIndex > -1);
    }, 0);
    this.setTransition(this.$item.find('.wnlui_picker__content'), 0.3);
    this.setTranslate(this.$item.find('.wnlui_picker__content'), this.translate);
  }
  handleTouchStart(e) {
    if (this.touching || this.items.length <= 1) return;
    this.touching = true;
    this.ogTranslate = this.translate;
    this.touchId = e.targetTouches[0].identifier;
    this.ogY = this.translate === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.translate;
    this.animating = false;
    this.setTransition(this.$item.find('.wnlui_picker__content'), 0.3);
    e.stopPropagation();
    e.preventDefault();
  }
  handleTouchMove(e) {
    if (!this.touching || this.items.length <= 1) return;
    if (e.targetTouches[0].identifier !== this.touchId) return;
    const pageY = e.targetTouches[0].pageY;
    const diffY = pageY - this.ogY;
    this.translate = diffY;
    this.setTranslate(this.$item.find('.wnlui_picker__content'), this.translate);
    e.stopPropagation();
    e.preventDefault();
  }
  handleTouchEnd() {
    if (!this.touching || this.items.length <= 1) return;
    let indicatorTop = this.indicatorTop;
    let indicatorHeight = this.indicatorHeight;
    let itemHeight = this.itemHeight;
    let translate = this.translate;
    if (Math.abs(translate - this.ogTranslate) < itemHeight * 0.51) {
      translate = this.ogTranslate;
    } else if (translate > indicatorTop) {
      //top boundry
      translate = indicatorTop;
    } else if (translate + this.totalHeight < indicatorTop + indicatorHeight) {
      //bottom
      translate = indicatorTop + indicatorHeight - this.totalHeight;
    } else {
      //pass single item range but not exceed boundry
      let step = 0;
      let adjust = 0;
      let diff = (translate - this.ogTranslate) / itemHeight;
      if (Math.abs(diff) < 1) {
        step = diff > 0 ? 1 : -1;
      } else {
        adjust = Math.abs((diff % 1) * 100) > 50 ? 1 : 0;
        step = diff > 0 ? Math.floor(diff) + adjust : Math.ceil(diff) - adjust;
      }

      translate = this.ogTranslate + step * itemHeight;
    }
    this.touching = false;
    this.ogY = 0;
    this.touchId = undefined;
    this.ogTranslate = 0;
    this.animating = true;
    this.translate = translate;
    setTimeout(() => {
      this.updateSelected();
    }, 0);
    this.setTransition(this.$item.find('.wnlui_picker__content'), 0.3);
    this.setTranslate(this.$item.find('.wnlui_picker__content'), this.translate);
  }
  setTransition($target, time) {
    if (this.animating) {
      return $target.css({
        '-webkit-transition': `all ${time}s`,
        transition: `all ${time}s`
      });
    }
    return $target.css({
      '-webkit-transition': 'none',
      transition: 'none'
    });
  }
  setTranslate($target, diff) {
    return $target.css({
      '-webkit-transform': `translate3d(0, ${diff}px, 0)`,
      transform: `translate3d(0, ${diff}px, 0)`
    });
  }
  updateSelected(propagate = true) {
    let selected = 0;
    for (let i = 0; i < this.items.length; i += 1) {
      let item = this.items[i];
      if (
        !item.disabled &&
        this.translate + this.itemHeight * i >= this.indicatorTop &&
        this.translate + this.itemHeight * i + this.itemHeight <= this.indicatorTop + this.indicatorHeight
      ) {
        selected = i;
      }
    }
    this.selectIndex = selected;
    if (this.onChange && propagate) {
      this.onChange(this.groupIndex, selected, this.items[selected]);
    }
  }
}
