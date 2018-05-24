import { calendar } from '@wnl/util';
import PickerItem from '../pickerItem/index';
import $ from '../util/dom';
import pickerTpl from './picker.html';

let cacheDateObj = {}; //缓存上次确定选择的日期
let lunarType = false; //false:公历  true:农历
let viewDate = new Date();
export default class datePicker {
  constructor(options) {
    this.minDate = new Date(1901, 1, 19); //公历最小支持日期
    this.maxDate = new Date(2099, 11, 31); //公历最大支持日期
    this.minLDate = [1901, 0, 1]; //农历最小支持日期    月份从0开始 日期从1开始
    this.maxLDate = [2099, 11, 20]; //农历最大支持日期
    this.defaultIndexList = [];
    this.dateNow = new Date();
    this.dateGroups = [];
    this.pickerItemGroups = [];
    this.$picker = null;
    this.isShow = true;
    this.isDisabled = true;
    this.defaults = $.extend(
      {
        id: 'datepicker',
        className: '',
        container: 'body',
        onChange: $.noop,
        onCancel: $.noop,
        onConfirm: $.noop,
        showLunar: false,
        modal: true
      },
      options
    );
    this.$picker = $($.render(pickerTpl, this.defaults));
    this.$picker
      .on('click', '.wnlui_mask', () => {
        this.hide();
        this.defaults.onCancel(this.defaultIndexList);
      })
      .on('click', '.wnlui_picker__action', () => {
        this.hide();
        this.defaults.onCancel(this.defaultIndexList);
      })
      .on('click', '#wnlui_picker-confirm', () => {
        this.resultDateObj.isSolar = !lunarType;
        lunarType = false;
        cacheDateObj[this.defaults.id] = new Date(
          this.resultDateObj.dateObj.cYear,
          this.resultDateObj.dateObj.cMonth - 1,
          this.resultDateObj.dateObj.cDay
        );
        this.defaults.onConfirm(this.resultDateObj);
      })
      .on('click', '.date_l_btn', () => {
        this.dateLunarTap();
      });
    if (this.defaults.defaultValue) {
      viewDate = new Date(
        this.defaults.defaultValue[0],
        this.defaults.defaultValue[1] - 1,
        this.defaults.defaultValue[2]
      );
    }
    viewDate = cacheDateObj[this.defaults.id] || viewDate;
    this.initSolarDateSelect();
    this.generatePickers();
    this.resultDateObj = this.getChangeDateObj();
    this.show();
  }
  getChangeDateObj() {
    let confirmObj = {
      dateObj: [],
      isSolar: !lunarType
    };
    if (confirmObj.isSolar) {
      let year = this.defaultIndexList[0] + this.minDate.getFullYear();
      let month = this.defaultIndexList[1];
      let day = this.defaultIndexList[2] + 1;
      confirmObj.dateObj = calendar.solar2lunar(year, month, day);
    } else {
      let year = this.defaultIndexList[0] + this.minLDate[0];
      let month = this.defaultIndexList[1];
      let day = this.defaultIndexList[2] + 1;
      let solarObj;
      if (calendar.leapMonth(year) > 0) {
        if (month < calendar.leapMonth(year)) {
          month += 1;
          solarObj = calendar.lunar2solar(year, month, day);
        } else if (month === calendar.leapMonth(year)) {
          solarObj = calendar.lunar2solar(year, month, day, true);
        } else {
          solarObj = calendar.lunar2solar(year, month, day);
        }
      } else {
        month += 1;
        solarObj = calendar.lunar2solar(year, month, day);
      }
      confirmObj.dateObj = solarObj;
    }
    return confirmObj;
  }
  disableScroll() {
    this.oldonwheel = window.onwheel;
    window.onwheel = this.preventDefault;
    this.oldonmousewheel = window.onmousewheel;
    window.onmousewheel = this.preventDefault;
    this.oldontouchmove = window.ontouchmove;
    window.ontouchmove = this.preventDefault;
    // document.body.addEventListener('touchmove',this.preventDefault);
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
    // document.body.removeEventListener('touchmove',this.preventDefault);
    this.isDisabled = false;
  }
  dateLunarTap() {
    //当前是农历，转公历
    console.log(lunarType, this.defaultIndexList);
    if (lunarType) {
      this.$picker.find('.date_l_btn').removeClass('active');
      let isLeap = false;
      let year = this.defaultIndexList[0] + this.minLDate[0];
      let month = this.defaultIndexList[1];
      let day = this.defaultIndexList[2] + 1;
      if (calendar.leapMonth(year) > 0) {
        if (month < calendar.leapMonth(year)) {
          month += 1;
        } else if (month === calendar.leapMonth(year)) {
          isLeap = true;
        }
      } else {
        month += 1;
      }
      let solarObj = calendar.lunar2solar(year, month, day, isLeap);
      if (solarObj.cMonth - 1 < 0) {
        this.initSolarDateSelect(solarObj.cYear - 1, 11, solarObj.cDay);
      } else {
        this.initSolarDateSelect(solarObj.cYear, solarObj.cMonth - 1, solarObj.cDay);
      }
    } else {
      //当前是公历，转农历
      this.$picker.find('.date_l_btn').addClass('active');
      let year = this.defaultIndexList[0] + this.minDate.getFullYear();
      let month = this.defaultIndexList[1];
      let day = this.defaultIndexList[2] + 1;
      this.initLunarDateSelect(year, month, day);
    }
    lunarType = !lunarType;
  }
  generatePickers() {
    for (let i = 0; i < this.dateGroups.length; i += 1) {
      let pickerItem = new PickerItem(this.dateGroups[i].items, {
        onChange: this.handleChange.bind(this),
        defaultIndex: this.defaultIndexList[i],
        groupIndex: i
      });
      this.pickerItemGroups.push(pickerItem);
      this.$picker.find('.wnlui_picker__bd').append(pickerItem.$item);
    }
  }
  show() {
    if (this.defaults.showLunar) {
      this.$picker.find('.date_select_footer').removeClass('hidden');
    } else {
      this.$picker.find('.date_select_footer').addClass('hidden');
    }
    lunarType = false;
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
    this.defaultIndexList[groupIndex] = i;
    setTimeout(() => {
      this.onSelectChange(item, this.defaultIndexList[groupIndex], groupIndex, lastIndex);
      if (this.defaults.onChange) {
        this.resultDateObj = this.getChangeDateObj();
        this.defaults.onChange(this.resultDateObj);
      }
    }, 0);
  }
  initSolarDateSelect(year, month, day) {
    year = year || viewDate.getFullYear();
    month = month || month === 0 ? month : viewDate.getMonth();
    day = day || viewDate.getDate();
    let i = 0;
    let yearList = {
      items: []
    };
    let yearToView = 0;
    let monthList = {
      items: []
    };
    let monthToView = 0;
    let dayList = {
      items: []
    };
    let dayToView = 0;
    for (i = this.minDate.getFullYear(); i <= this.maxDate.getFullYear(); i += 1) {
      if (year === i) {
        yearToView = i - this.minDate.getFullYear();
      }
      yearList.items.push({
        label: i + '年'
      });
    }
    if (year < this.minDate.getFullYear()) {
      yearToView = 0;
    }
    if (year > this.maxDate.getFullYear()) {
      yearToView = this.maxDate.getFullYear() - this.minDate.getFullYear();
    }
    for (i = 0; i <= 11; i += 1) {
      if (month === i) {
        monthToView = i;
      }
      let valueString = i + 1 + '月';
      monthList.items.push({
        label: valueString
      });
    }
    let dayCount = calendar.solarDays(year, month);
    let dateObj = new Date(year, month, 1);
    for (i = 1; i <= dayCount; i += 1) {
      if (day === i) {
        dayToView = i - 1;
      }
      dateObj.setDate(i);
      if (year === this.dateNow.getFullYear() && month === this.dateNow.getMonth() && i === this.dateNow.getDate()) {
        dayList.items.push({
          label: '今天'
        });
      } else {
        dayList.items.push({
          label: i + '日周' + calendar.nStr1[dateObj.getDay()]
        });
      }
    }
    if (day > dayCount) {
      dayToView = dayCount - 1;
    }
    this.dateGroups[0] = yearList;
    this.dateGroups[1] = monthList;
    this.dateGroups[2] = dayList;
    this.defaultIndexList[0] = yearToView;
    this.defaultIndexList[1] = monthToView;
    this.defaultIndexList[2] = dayToView;
    this.renderPickerGroups();
  }
  initLunarDateSelect(year, month, day) {
    let i = 0;
    let lunarObj = calendar.solar2lunar(year, month, day);
    let yearList = {
      items: []
    };
    let yearToView = 0;
    let monthList = {
      items: []
    };
    let monthToView = 0;
    let monthCount = 11;
    let dayList = {
      items: []
    };
    let dayToView = 0;
    let solarObj = {};
    for (i = this.minLDate[0]; i <= this.maxLDate[0]; i += 1) {
      if (lunarObj.lYear === i) {
        yearToView = i - this.minLDate[0];
      }
      yearList.items.push({
        label: i + '年'
      });
    }
    let leapMonth = calendar.leapMonth(lunarObj.lYear);
    if (leapMonth > 0) {
      monthCount += 1;
    }
    for (i = 0; i <= monthCount; i += 1) {
      if (lunarObj.lMonth - 1 === i) {
        monthToView = i;
        if (leapMonth > 0 && lunarObj.lMonth > leapMonth) {
          monthToView += 1;
        }
      }
      if (leapMonth > 0) {
        if (i < leapMonth) {
          monthList.items.push({
            label: calendar.toChinaMonth(i + 1)
          });
        } else if (i === leapMonth) {
          monthList.items.push({
            label: '闰' + calendar.toChinaMonth(leapMonth)
          });
        } else {
          monthList.items.push({
            label: calendar.toChinaMonth(i)
          });
        }
      } else {
        monthList.items.push({
          label: calendar.toChinaMonth(i + 1)
        });
      }
    }
    if (lunarObj.isLeap) {
      monthToView = leapMonth;
    }
    let dayCount =
      leapMonth === lunarObj.lMonth
        ? calendar.leapDays(lunarObj.lYear)
        : calendar.monthDays(lunarObj.lYear, lunarObj.lMonth);
    for (i = 1; i <= dayCount; i += 1) {
      if (lunarObj.lDay === i) {
        dayToView = i - 1;
      }
      solarObj = calendar.lunar2solar(lunarObj.lYear, lunarObj.lMonth, i, lunarObj.isLeap);
      if (
        solarObj.cYear === this.dateNow.getFullYear() &&
        solarObj.cMonth - 1 === this.dateNow.getMonth() &&
        solarObj.cDay === this.dateNow.getDate()
      ) {
        dayList.items.push({
          label: '今天'
        });
      } else {
        dayList.items.push({
          label: calendar.toChinaDay(i) + '周' + calendar.nStr1[solarObj.nWeek]
        });
      }
    }
    this.dateGroups[0] = yearList;
    this.dateGroups[1] = monthList;
    this.dateGroups[2] = dayList;
    this.defaultIndexList[0] = yearToView;
    this.defaultIndexList[1] = monthToView;
    this.defaultIndexList[2] = dayToView;
    this.renderPickerGroups();
  }
  renderPickerGroups() {
    if (!this.dateGroups || !this.pickerItemGroups || this.pickerItemGroups.length === 0) {
      return;
    }
    for (let i = 0; i < this.dateGroups.length; i += 1) {
      this.pickerItemGroups[i].items = this.dateGroups[i].items;
      this.pickerItemGroups[i].render();
      this.pickerItemGroups[i].adjustPosition(this.defaultIndexList[i]);
    }
  }
  onSelectChange(item, selectIndex, groupIndex, lastIndex) {
    if (groupIndex === 0 && selectIndex < this.dateGroups[0].items.length) {
      this.defaultIndexList[0] = selectIndex;
      this.getDateSelectMonthInfo(lastIndex);
      this.getDateSelectDayInfo();
    } else if (groupIndex === 1 && this.defaultIndexList[1] < this.dateGroups[1].items.length) {
      //公历
      if (!lunarType) {
        if (this.defaultIndexList[0] === 0 && selectIndex < this.minDate.getMonth()) {
          this.defaultIndexList[1] = this.minDate.getMonth();
          this.pickerItemGroups[groupIndex].adjustPosition(this.defaultIndexList[1]);
        } else {
          this.defaultIndexList[1] = selectIndex;
        }
        this.getDateSelectDayInfo();
        return;
      }
      //农历
      if (this.defaultIndexList[0] === 0 && selectIndex > this.maxLDate[1]) {
        this.defaultIndexList[1] = this.maxLDate[1];
        this.pickerItemGroups[groupIndex].adjustPosition(this.defaultIndexList[1]);
      } else {
        this.defaultIndexList[1] = selectIndex;
      }
      this.getDateSelectDayInfo();
    } else if (groupIndex === 2 && this.defaultIndexList[2] + 1 < this.dateGroups[2].items.length) {
      //公历
      if (!lunarType) {
        if (
          this.defaultIndexList[0] === 0 &&
          this.defaultIndexList[1] === this.minDate.getMonth() &&
          selectIndex < this.minDate.getDate()
        ) {
          this.defaultIndexList[2] = this.minDate.getDate() - 1;
          this.pickerItemGroups[groupIndex].adjustPosition(this.defaultIndexList[2]);
        } else {
          this.defaultIndexList[2] = selectIndex;
        }
        return;
      }
      //农历
      if (
        this.defaultIndexList[0] === this.maxLDate[0] - this.minLDate[0] &&
        this.defaultIndexList[1] === this.maxLDate[1] &&
        selectIndex + 1 > this.maxLDate[2]
      ) {
        this.defaultIndexList[2] = this.maxLDate[2] - 1;
        this.pickerItemGroups[groupIndex].adjustPosition(this.defaultIndexList[2]);
      } else {
        this.defaultIndexList[2] = selectIndex;
      }
    }
  }
  getDateSelectMonthInfo(lastIndex) {
    let monthList = {
      items: []
    };
    let monthToView = 0;
    let year = viewDate.getFullYear();
    let month = viewDate.getMonth();
    let i = 0;
    //公历
    if (!lunarType) {
      year = this.defaultIndexList[0] + this.minDate.getFullYear();
      month = this.defaultIndexList[1];
      for (i = 0; i <= 11; i += 1) {
        if (month === i) {
          monthToView = i;
        }
        let valueString = i + 1 + '月';
        monthList.items.push({
          index: valueString,
          label: valueString
        });
      }
    } else {
      //农历
      year = this.defaultIndexList[0] + this.minLDate[0];
      month = this.defaultIndexList[1];
      let leapMonth = calendar.leapMonth(year);
      let monthCount = 11;
      if (leapMonth > 0) {
        monthCount += 1;
      }
      for (i = 0; i <= monthCount; i += 1) {
        if (month === i) {
          monthToView = i;
          //现在选择的年月是有闰月的
          if (leapMonth > 0) {
            if (month >= leapMonth) {
              monthToView += 1;
            }
          } else {
            //现在选择的是没有闰月的
            //判断之前的选择是否有闰月
            let prevLeapMonth = lastIndex ? calendar.leapMonth(lastIndex + +this.minLDate[0]) : 0;
            if (prevLeapMonth > 0 && month >= prevLeapMonth) {
              monthToView -= 1;
            }
          }
        }
        if (leapMonth > 0) {
          if (i < leapMonth) {
            monthList.items.push({
              index: i,
              label: calendar.toChinaMonth(i + 1)
            });
          } else if (i === leapMonth) {
            monthList.items.push({
              index: i,
              label: '闰' + calendar.toChinaMonth(leapMonth)
            });
          } else {
            monthList.items.push({
              index: i,
              label: calendar.toChinaMonth(i)
            });
          }
        } else {
          monthList.items.push({
            index: i,
            label: calendar.toChinaMonth(i + 1)
          });
        }
      }
    }
    this.dateGroups[1] = monthList;
    this.defaultIndexList[1] = monthToView;
    this.pickerItemGroups[1].items = monthList.items;
    // this.pickerItemGroups[1].defaultIndex = monthToView;
    this.pickerItemGroups[1].render();
    this.pickerItemGroups[1].adjustPosition(this.defaultIndexList[1]);
  }
  getDateSelectDayInfo() {
    let dayList = {
      items: []
    };
    let dayToView = 0;
    let i = 0;
    //公历
    if (!lunarType) {
      let year = this.defaultIndexList[0] + this.minDate.getFullYear();
      let month = this.defaultIndexList[1];
      let day = this.defaultIndexList[2] + 1;
      let dayCount = calendar.solarDays(year, month);
      let dateObj = new Date(year, month, 1);
      for (i = 1; i <= dayCount; i += 1) {
        if (day === i) {
          dayToView = i - 1;
        }
        dateObj.setDate(i);
        if (year === this.dateNow.getFullYear() && month === this.dateNow.getMonth() && i === this.dateNow.getDate()) {
          dayList.items.push({
            index: i,
            label: '今天'
          });
        } else {
          dayList.items.push({
            index: i,
            label: i + '日周' + calendar.nStr1[dateObj.getDay()]
          });
        }
      }
      if (day > dayCount) {
        dayToView = dayCount - 1;
      }
    } else {
      //农历
      let isLeap = false;
      let year = this.defaultIndexList[0] + this.minLDate[0];
      let month = this.defaultIndexList[1];
      let day = this.defaultIndexList[2] + 1;
      if (calendar.leapMonth(year) > 0) {
        if (month < calendar.leapMonth(year)) {
          month += 1;
        } else if (month === calendar.leapMonth(year)) {
          isLeap = true;
        }
      } else {
        month += 1;
      }
      let dayCount = isLeap ? calendar.leapDays(year) : calendar.monthDays(year, month);
      let solarObj = {};
      for (i = 1; i <= dayCount; i += 1) {
        if (day === i) {
          dayToView = i - 1;
        }
        solarObj = calendar.lunar2solar(year, month, i, isLeap);
        dayList.items.push({
          index: i,
          label: calendar.toChinaDay(i) + '周' + calendar.nStr1[solarObj.nWeek]
        });
      }
    }
    this.dateGroups[2] = dayList;
    this.defaultIndexList[2] = dayToView;
    this.pickerItemGroups[2].items = dayList.items;
    this.pickerItemGroups[2].render();
    this.pickerItemGroups[2].adjustPosition(this.defaultIndexList[2]);
  }
}
