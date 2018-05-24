
/**
 * @移动端日期选择组件
 * @Author  liuyu
 * @Time    2018-03-30
 * @Version 1.0.0
 */

import './style.css';
import calendar from './calendar';
import Scroll from './scroll';

class DatePicker {
  constructor(options) {
    let that = this;

    if (!options) {
      options = {};
    }
    //渲染html结构
    if (!select('.date-picker')) {
      renderDatePicker();
    }
    //默认日期
    let defaultDateTime = [1990, 1, 1, 0, 0];

    if (options && options.dateTime) {
      options.dateTime.forEach((v, k) => {
        defaultDateTime[k] = v;
      });
    }
    //0:公历，1农历
    this.calendarType = options.calendarType || 0;
    if (this.calendarType == 0) {
      select('.dp-solar-btn').classList.add('active');
    } else {
      select('.dp-lunar-btn').classList.add('active');
    }

    //结束年份
    this.endYear = options.endYear || new Date().getFullYear();

    //日期对象
    this.dateTime = {
      year: defaultDateTime[0],
      month: defaultDateTime[1],
      day: defaultDateTime[2],
      hour: defaultDateTime[3],
      minute: defaultDateTime[4]
    };

    //取消回调
    this.onCancel = options.onCancel || null;
    //确定回调
    this.onConfirm = options.onConfirm || null;

    let days = calendar.solarDays(that.dateTime.year, that.dateTime.month);
    this.renderYearScroller();
    this.rednerMonthScroller();
    this.renderDayScroller(days);
    this.renderHourScroller();
    this.rednerMinuteScroller();

    //获取单个item高度
    this.itemHeight = select('.year-wrapper .dp-row')[0].clientHeight;

    //初始化位置
    let yearPosition = this.dateTime.year - 1910;
    let dayPosition = this.dateTime.day - 1;
    let monthPosition = this.dateTime.month - 1;
    let hourPosition = this.dateTime.hour;
    let minutePosition = this.dateTime.minute;

    this.yearScroll = new Scroll('.year-wrapper', {
      //步长（每次滚动固定距离）
      step: that.itemHeight,
      // 列表默认位置(默认为0)
      defaultPlace: that.itemHeight * yearPosition,
      callback: function(params) {
        let item = params.node[params.index + 2];
        that.dateTime.year = parseInt(item.dataset.value);
        //农历闰年重新渲染月份列表
        let days = calendar.solarDays(that.dateTime.year, that.dateTime.month);
        if (that.calendarType === 1 && calendar.leapMonth(that.dateTime.year) !== 0) {
          let leapMonth = calendar.leapMonth(that.dateTime.year);
          that.rednerMonthScroller(leapMonth);
          //农历闰月
          if (leapMonth == that.dateTime.month - 1) {
            days = calendar.leapDays(that.dateTime.year);
          } else {
            //农历非闰月
            days = calendar.monthDays(that.dateTime.year, that.dateTime.month);
          }
        } else if (that.calendarType === 1) {
          that.rednerMonthScroller();
          days = calendar.monthDays(that.dateTime.year, that.dateTime.month);
        }

        //农历月定位
        monthPosition = that.dateTime.month - 1;
        that.monthScroll.refresh();
        that.monthScroll.scrollTo(0, that.itemHeight * monthPosition, 0);

        that.renderDayScroller(days);
        if (that.dateTime.day > days) {
          that.dateTime.day = days;
          dayPosition = days - 1;
        }
        that.dayScroll.refresh();
        that.dayScroll.scrollTo(0, that.itemHeight * dayPosition, 0);
      }
    });

    this.monthScroll = new Scroll('.month-wrapper', {
      step: that.itemHeight,
      defaultPlace: that.itemHeight * monthPosition,
      callback: function(params) {
        let item = params.node[params.index + 2];
        that.dateTime.month = parseInt(item.dataset.value);
        let isLeapMonth = item.innerText.indexOf('闰') > -1;
        let days = calendar.solarDays(that.dateTime.year, that.dateTime.month);
        //农历闰月
        if (that.calendarType === 1 && calendar.leapMonth(that.dateTime.year) !== 0) {
          let leapMonth = calendar.leapMonth(that.dateTime.year);
          if (leapMonth == that.dateTime.month && isLeapMonth) {
            days = calendar.leapDays(that.dateTime.year);
          } else {
            days = calendar.monthDays(that.dateTime.year, that.dateTime.month);
          }
          //农历非闰月
        } else if (that.calendarType === 1) {
          days = calendar.monthDays(that.dateTime.year, that.dateTime.month);
        }
        that.renderDayScroller(days);
        if (that.dateTime.day > days) {
          that.dateTime.day = days;
          dayPosition = days - 1;
        }
        that.dayScroll.refresh();
        that.dayScroll.scrollTo(0, that.itemHeight * dayPosition, 0);
      }
    });

    this.dayScroll = new Scroll('.day-wrapper', {
      step: that.itemHeight,
      defaultPlace: that.itemHeight * dayPosition,
      callback: function(params) {
        dayPosition = params.index;
        let item = params.node[params.index + 2];
        that.dateTime.day = parseInt(item.dataset.value);
      }
    });

    this.hourScroll = new Scroll('.hour-wrapper', {
      step: that.itemHeight,
      defaultPlace: that.itemHeight * hourPosition,
      callback: function(params) {
        let item = params.node[params.index + 2];
        that.dateTime.hour = parseInt(item.dataset.value);
        if (that.dateTime.hour == 24) {
          that.dateTime.hour = '不清楚';
        }
      }
    });

    this.minuteScroll = new Scroll('.minute-wrapper', {
      step: that.itemHeight,
      defaultPlace: that.itemHeight * minutePosition,
      callback: function(params) {
        let item = params.node[params.index + 2];
        that.dateTime.minute = parseInt(item.dataset.value);
        if (that.dateTime.minute == 60) {
          that.dateTime.minute = '不清楚';
        }
      }
    });

    this.clickEvent();
  }

  renderScrollerItem(start, end, type, leapMonth = 0) {
    let leapFlag = leapMonth != 0 ? true : false;
    let html = '';
    for (let i = start - 2; i <= end + 2; i++) {
      let text = i;
      if (type === 'month' && this.calendarType === 1) {
        if (leapMonth === i - 1 && leapFlag) {
          i = i - 1;
          text = '闰' + calendar.toChinaMonth(i);
          leapFlag = false;
        } else {
          text = calendar.toChinaMonth(i);
        }
      }
      if (type === 'day' && this.calendarType === 1) {
        text = calendar.toChinaDay(i);
      }
      let li = `<li data-value="${i}" class="dp-row">${text}</li>`;
      if (i < start) {
        li = '<li data-value="-1" class="dp-row">&nbsp</li>';
      }
      if (i > end) {
        li = '<li data-value="-1" class="dp-row">&nbsp</li>';
      }
      html += li;
    }
    return html;
  }

  renderScrollerItemTime(start, end) {
    let html = '';
    for (let i = start - 2; i <= end + 3; i++) {
      let time = i < 10 ? '0' + i : i;
      let li = '<li data-value="' + i + '" class="dp-row">' + time + '</li>';
      if (i < start) {
        li = '<li data-value="-1" class="dp-row">&nbsp</li>';
      }
      if (i === end + 1) {
        li = '<li data-value="' + i + '" class="dp-row">不清楚</li>';
      }
      if (i > end + 1) {
        li = '<li data-value="-1" class="dp-row">&nbsp</li>';
      }
      html += li;
    }
    return html;
  }

  //渲染年滚动组件
  renderYearScroller(startYear = 1910) {
    let yearWrapper = select('.year-wrapper .wrapper-ul');
    yearWrapper.innerHTML = this.renderScrollerItem(startYear, this.endYear, 'year');
  }

  //渲染月滚动组件
  rednerMonthScroller(leapMonth = 0) {
    let monthWrapper = select('.month-wrapper .wrapper-ul');
    monthWrapper.innerHTML = this.renderScrollerItem(1, 12, 'month', leapMonth);
  }

  //渲染天滚动组件
  renderDayScroller(days) {
    let dayWrapper = select('.day-wrapper .wrapper-ul');
    dayWrapper.innerHTML = this.renderScrollerItem(1, days, 'day');
  }

  //渲染小时滚动组件
  renderHourScroller() {
    let hourWrapper = select('.hour-wrapper .wrapper-ul');
    hourWrapper.innerHTML = this.renderScrollerItemTime(0, 23);
  }

  //渲染分钟滚动组件
  rednerMinuteScroller() {
    let minuteWrapper = select('.minute-wrapper .wrapper-ul');
    minuteWrapper.innerHTML = this.renderScrollerItemTime(0, 59);
  }

  //公历农历转换
  transformCalendarType(type) {
    let dateTime = this.dateTime;
    this.calendarType = type;

    //转换为农历
    if (type === 1) {
      var lunar = calendar.solar2lunar(dateTime.year, dateTime.month, dateTime.day);
      var days = calendar.monthDays(lunar.lYear, lunar.lMonth);

      this.dateTime.year = lunar.lYear;
      this.dateTime.month = lunar.lMonth;
      this.dateTime.day = lunar.lDay;

      //闰年
      if (calendar.leapMonth(lunar.lYear) !== 0) {
        let leapMonth = calendar.leapMonth(lunar.lYear);
        this.rednerMonthScroller(leapMonth);
      } else {
        this.rednerMonthScroller();
      }

      this.renderDayScroller(days);
      this.monthScroll.refresh();
      this.dayScroll.refresh();

      this.yearScroll.scrollTo(0, (lunar.lYear - 1910) * this.itemHeight, 500);
      this.monthScroll.scrollTo(0, (lunar.lMonth - 1) * this.itemHeight, 500);
      this.dayScroll.scrollTo(0, (lunar.lDay - 1) * this.itemHeight, 500);
    }

    //转换为公历
    if (type === 0) {
      let solar = calendar.lunar2solar(dateTime.year, dateTime.month, dateTime.day);
      let days = calendar.solarDays(solar.cYear, solar.cMonth);

      this.dateTime.year = solar.cYear;
      this.dateTime.month = solar.cMonth;
      this.dateTime.day = solar.cDay;

      this.rednerMonthScroller();
      this.renderDayScroller(days);
      this.monthScroll.refresh();
      this.dayScroll.refresh();

      this.yearScroll.scrollTo(0, (solar.cYear - 1910) * this.itemHeight, 500);
      this.monthScroll.scrollTo(0, (solar.cMonth - 1) * this.itemHeight, 500);
      this.dayScroll.scrollTo(0, (solar.cDay - 1) * this.itemHeight, 500);
    }
  }

  //显示组件
  show() {
    select('.dp-mask').classList.remove('leave');
    select('.dp-layout').classList.remove('leave');
  }

  //隐藏组件
  hide() {
    select('.dp-mask').classList.add('leave');
    select('.dp-layout').classList.add('leave');
  }

  clickEvent() {
    let that = this;
    let mask = select('.dp-mask');
    let lunarButton = select('.dp-lunar-btn');
    let solarButton = select('.dp-solar-btn');

    select('.dp-panel').addEventListener('click', function(e) {
      let className = e.target.className;
      //切换农历
      if (/dp-lunar-btn/gi.test(className)) {
        if (lunarButton.classList.contains('active')) return false;
        removeClassAll(select('.dp-btn'), 'active');
        lunarButton.classList.add('active');
        that.transformCalendarType(1);
      }
      //切换公历
      if (/dp-solar-btn/gi.test(className)) {
        if (solarButton.classList.contains('active')) return false;
        removeClassAll(select('.dp-btn'), 'active');
        solarButton.classList.add('active');
        that.transformCalendarType(0);
      }
      //确定返回日期对象
      if (/dp-confirm/gi.test(className)) {
        let dateTime =
          that.calendarType == 0
            ? calendar.solar2lunar(that.dateTime.year, that.dateTime.month, that.dateTime.day)
            : calendar.lunar2solar(that.dateTime.year, that.dateTime.month, that.dateTime.day);
        dateTime.hour = that.dateTime.hour;
        dateTime.minute = that.dateTime.minute;

        dateTime.calendarType = that.calendarType;
        typeof that.onConfirm === 'function' && that.onConfirm(dateTime);
        that.hide();
      }
    });

    mask.addEventListener('click', function() {
      typeof that.onCancel === 'function' && that.onCancel(that.dateTime);
      that.hide();
    });

    mask.addEventListener('touchmove', function(e) {
      e.stopPropagation();
      e.preventDefault();
    });

    select('.dp-layout').addEventListener('touchmove', function(e) {
      e.stopPropagation();
      e.preventDefault();
    });
  }
}

function select(element) {
  let el = document.querySelectorAll(element);
  return el.length > 1 ? el : el[0];
}

function removeClassAll(nodeList, className) {
  let list = Array.prototype.slice.call(nodeList);
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove(className);
  }
  return nodeList;
}

function renderDatePicker() {
  let html = '';
  let dateList = ['year', 'month', 'day', 'hour', 'minute'];

  html = `<div class="date-picker">
              <div class="dp-mask leave"></div>
              <div class="dp-layout leave">
                  <div class="dp-panel">
                      <div class="dp-btn-group">
                          <div class="dp-solar-btn dp-btn">公历</div>
                          <div class="dp-lunar-btn dp-btn">农历</div>
                      </div>
                      <div class="dp-confirm">确定</div>
                  </div>
                  <div class="dp-container">
                  </div>
              </div>
          </div>`;
  document.body.insertAdjacentHTML('beforeend', html);
  let dateHTML = '';
  dateList.forEach(v => {
    dateHTML += renderDateItem(v);
  });
  document.querySelector('.date-picker .dp-container').insertAdjacentHTML('beforeend', dateHTML);
}

function renderDateItem(name) {
  let html = `<div class="dp-wrapper ${name}-wrapper">
                <ul class="wrapper-ul"></ul>
              </div>`;
  return html;
}

export default DatePicker;
