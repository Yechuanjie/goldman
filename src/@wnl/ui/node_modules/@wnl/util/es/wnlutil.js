function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

/* eslint-disable */
var _Base64 = window.Base64;
var version = '2.1.7';
var buffer;
if (typeof module !== 'undefined' && module.exports) {
  buffer = require('buffer').Buffer;
}
var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var b64tab = function (bin) {
  var t = {};
  for (var i = 0, l = bin.length; i < l; i++) {
    t[bin.charAt(i)] = i;
  }return t;
}(b64chars);
var fromCharCode = String.fromCharCode;
var cb_utob = function cb_utob(c) {
  if (c.length < 2) {
    var cc = c.charCodeAt(0);
    return cc < 128 ? c : cc < 2048 ? fromCharCode(192 | cc >>> 6) + fromCharCode(128 | cc & 63) : fromCharCode(224 | cc >>> 12 & 15) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63);
  } else {
    var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
    return fromCharCode(240 | cc >>> 18 & 7) + fromCharCode(128 | cc >>> 12 & 63) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63);
  }
};
var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
var utob = function utob(u) {
  return u.replace(re_utob, cb_utob);
};
var cb_encode = function cb_encode(ccc) {
  var padlen = [0, 2, 1][ccc.length % 3],
      ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0),
      chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];
  return chars.join('');
};
var btoa = window.btoa ? function (b) {
  return window.btoa(b);
} : function (b) {
  return b.replace(/[\s\S]{1,3}/g, cb_encode);
};
var _encode = buffer ? function (u) {
  return (u.constructor === buffer.constructor ? u : new buffer(u)).toString('base64');
} : function (u) {
  return btoa(utob(u));
};
var encode = function encode(u, urisafe) {
  return !urisafe ? _encode(String(u)) : _encode(String(u)).replace(/[+\/]/g, function (m0) {
    return m0 == '+' ? '-' : '_';
  }).replace(/=/g, '');
};
var encodeURI = function encodeURI(u) {
  return encode(u, true);
};
var re_btou = new RegExp(['[À-ß][-¿]', '[à-ï][-¿]{2}', '[ð-÷][-¿]{3}'].join('|'), 'g');
var cb_btou = function cb_btou(cccc) {
  switch (cccc.length) {
    case 4:
      var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3),
          offset = cp - 65536;
      return fromCharCode((offset >>> 10) + 55296) + fromCharCode((offset & 1023) + 56320);
    case 3:
      return fromCharCode((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
    default:
      return fromCharCode((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
  }
};
var btou = function btou(b) {
  return b.replace(re_btou, cb_btou);
};
var cb_decode = function cb_decode(cccc) {
  var len = cccc.length,
      padlen = len % 4,
      n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
      chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 255), fromCharCode(n & 255)];
  chars.length -= [0, 0, 2, 1][padlen];
  return chars.join('');
};
var atob = window.atob ? function (a) {
  return window.atob(a);
} : function (a) {
  return a.replace(/[\s\S]{1,4}/g, cb_decode);
};
var _decode = buffer ? function (a) {
  return (a.constructor === buffer.constructor ? a : new buffer(a, 'base64')).toString();
} : function (a) {
  return btou(atob(a));
};
var decode = function decode(a) {
  return _decode(String(a).replace(/[-_]/g, function (m0) {
    return m0 == '-' ? '+' : '/';
  }).replace(/[^A-Za-z0-9\+\/]/g, ''));
};
var noConflict = function noConflict() {
  var Base64 = window.Base64;
  window.Base64 = _Base64;
  return Base64;
};
window.Base64 = {
  VERSION: version,
  atob: atob,
  btoa: btoa,
  fromBase64: decode,
  toBase64: encode,
  utob: utob,
  encode: encode,
  encodeURI: encodeURI,
  btou: btou,
  decode: decode,
  noConflict: noConflict
};
if (typeof Object.defineProperty === 'function') {
  var noEnum = function noEnum(v) {
    return { value: v, enumerable: false, writable: true, configurable: true };
  };
  window.Base64.extendString = function () {
    Object.defineProperty(String.prototype, 'fromBase64', noEnum(function () {
      return decode(this);
    }));
    Object.defineProperty(String.prototype, 'toBase64', noEnum(function (urisafe) {
      return encode(this, urisafe);
    }));
    Object.defineProperty(String.prototype, 'toBase64URI', noEnum(function () {
      return encode(this, true);
    }));
  };
}
var base64 = window.Base64;

var _calendar;

/*eslint-disable*/
/**
 * @1900-2100区间内的公历',农历互转
 * @charset UTF-8
 * @Author  Jea杨(JJonline@JJonline.Cn)
 * @Time    2014-7-21
 * @Time    2016-8-13 Fixed 2033hex',Attribution Annals
 * @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
 * @Version 1.0.2
 * @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
 * @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
 */

var calendar = (_calendar = {
  /**
   * 农历1900-2100的润大小信息表
   * @Array Of Property
   * @return Hex
   */
  lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, //1900-1909
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, //1910-1919
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, //1920-1929
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, //1930-1939
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, //1940-1949
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, //1950-1959
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, //1960-1969
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, //1970-1979
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, //1980-1989
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, //1990-1999
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, //2000-2009
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, //2010-2019
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, //2020-2029
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, //2030-2039
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, //2040-2049
  /**Add By JJonline@JJonline.Cn**/
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, //2050-2059
  0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, //2060-2069
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, //2070-2079
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, //2080-2089
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, //2090-2099
  0x0d520], //2100

  /**
   * 公历每个月份的天数普通表
   * @Array Of Property
   * @return Number
   */
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

  /**
   * 天干地支之天干速查表
   * @Array Of Property trans['甲','乙','丙','丁','戊','己','庚','辛','壬','癸']
   * @return Cn string
   */
  Gan: ['\u7532', '\u4E59', '\u4E19', '\u4E01', '\u620A', '\u5DF1', '\u5E9A', '\u8F9B', '\u58EC', '\u7678'],

  /**
   * 天干地支之地支速查表
   * @Array Of Property
   * @trans['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥']
   * @return Cn string
   */
  Zhi: ['\u5B50', '\u4E11', '\u5BC5', '\u536F', '\u8FB0', '\u5DF3', '\u5348', '\u672A', '\u7533', '\u9149', '\u620C', '\u4EA5'],

  /**
   * 天干地支之地支速查表<=>生肖
   * @Array Of Property
   * @trans['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪']
   * @return Cn string
   */
  Animals: ['\u9F20', '\u725B', '\u864E', '\u5154', '\u9F99', '\u86C7', '\u9A6C', '\u7F8A', '\u7334', '\u9E21', '\u72D7', '\u732A'],

  /**
   * 24节气速查表
   * @Array Of Property
   * @trans['小寒','大寒','立春','雨水','惊蛰','春分','清明','谷雨','立夏','小满','芒种','夏至','小暑','大暑','立秋','处暑','白露','秋分','寒露','霜降','立冬','小雪','大雪','冬至']
   * @return Cn string
   */
  solarTerm: ['\u5C0F\u5BD2', '\u5927\u5BD2', '\u7ACB\u6625', '\u96E8\u6C34', '\u60CA\u86F0', '\u6625\u5206', '\u6E05\u660E', '\u8C37\u96E8', '\u7ACB\u590F', '\u5C0F\u6EE1', '\u8292\u79CD', '\u590F\u81F3', '\u5C0F\u6691', '\u5927\u6691', '\u7ACB\u79CB', '\u5904\u6691', '\u767D\u9732', '\u79CB\u5206', '\u5BD2\u9732', '\u971C\u964D', '\u7ACB\u51AC', '\u5C0F\u96EA', '\u5927\u96EA', '\u51AC\u81F3'],

  /**
   * 数字转中文速查表
   * @Array Of Property
   * @trans ['日','一','二','三','四','五','六','七','八','九','十']
   * @return Cn string
   */
  nStr1: ['\u65E5', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D', '\u4E03', '\u516B', '\u4E5D', '\u5341'],

  /**
   * 日期转农历称呼速查表
   * @Array Of Property
   * @trans ['初','十','廿','卅']
   * @return Cn string
   */
  nStr2: ['\u521D', '\u5341', '\u5EFF', '\u5345'],

  /**
   * 月份转农历称呼速查表
   * @Array Of Property
   * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
   * @return Cn string
   */
  nStr3: ['\u6B63', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D', '\u4E03', '\u516B', '\u4E5D', '\u5341', '\u51AC', '\u814A'],

  /**
   * 返回农历年一整年的总天数
   *
   * @param {Number} year 农历年
   * @returns 总天数
   */
  lYearDays: function lYearDays(year) {
    var i,
        sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
      sum += calendar.lunarInfo[year - 1900] & i ? 1 : 0;
    }
    return sum + calendar.leapDays(year);
  },
  /**
   * 返回农历年闰月是哪个月；若该年没有闰月 则返回0
   *
   * @param {Number} year 农历年
   * @returns 闰月月份(0-12)
   */
  leapMonth: function leapMonth(year) {
    //闰字编码 \u95f0
    return calendar.lunarInfo[year - 1900] & 0xf;
  },
  /**
   *返回农历年闰月的天数 若该年没有闰月则返回0
   *
   * @param {Number} year 农历年
   * @returns 闰月天数(0,29,30)
   */
  leapDays: function leapDays(year) {
    if (calendar.leapMonth(year)) {
      return calendar.lunarInfo[year - 1900] & 0x10000 ? 30 : 29;
    }
    return 0;
  },
  /**
   * 返回农历year年month月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
   *
   * @param {Number} year 农历年份
   * @param {Number} month 农历月份
   * @returns 天数(-1,29,30)
   */
  monthDays: function monthDays(year, month) {
    if (month > 12 || month < 1) {
      return -1;
    } //月份参数从1至12，参数错误返回-1
    return calendar.lunarInfo[year - 1900] & 0x10000 >> month ? 30 : 29;
  },
  /**
   * 获取公历year年month月的天数
   *
   * @param {Number} year 公历年份
   * @param {Number} month 公历月份
   * @returns 公历月天数(-1,28,29,30,31)
   */
  solarDays: function solarDays(year, month) {
    if (month > 12 || month < 0) {
      return -1;
    } //若参数错误 返回-1
    var ms = month;
    if (ms == 1) {
      //2月份的闰平规律测算后确认返回28或29
      return year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28;
    } else {
      return calendar.solarMonth[ms];
    }
  },
  /**
   * 农历日期转换为干支纪年
   *
   * @param {Number} year 农历年
   * @param {Number} month 农历月
   * @param {Number} day 农历日
   * @returns 干支纪年
   */
  toGanZhiYear: function toGanZhiYear(year, month, day) {
    var cY = '';
    if (month < 2) {
      cY = calendar.cyclical(year - 1900 + 36 - 1);
    } else {
      cY = calendar.cyclical(year - 1900 + 36);
    }
    var term2 = calendar.getTerm(year, 3); //立春日期
    if (month === 1 && day >= term2) {
      cY = calendar.cyclical(year - 1900 + 36);
    }
    return cY;
  },
  //传入 offset 返回干支, 0=甲子
  cyclical: function cyclical(num) {
    return calendar.Gan[num % 10] + calendar.Zhi[num % 12];
  },
  /**
   *公历月日获取所属星座
   *
   * @param {Number} cMonth 公历月
   * @param {Number} cDay 公历日
   * @returns 星座名称
   */
  toAstro: function toAstro(cMonth, cDay) {
    var s = '\u6469\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u6469\u7FAF';
    var arr = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + '\u5EA7'; //座
    // return s.substr(month * 2 - (day < '102223444433'.charAt(month - 1) - -19) * 2, 2) + '\u5ea7';
  },

  /**
   * 传入offset偏移量返回干支
   * @param offset 相对甲子的偏移量
   * @return Cn string
   */
  toGanZhi: function toGanZhi(offset) {
    return calendar.Gan[offset % 10] + calendar.Zhi[offset % 12];
  },
  /**
   *传入公历年获得该年第n个节气的公历在那个月的日期
   *
   * @param {Number} year 公历年
   * @param {Number} n 二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
   * @returns 日期数值
   */
  getTerm: function getTerm(year, n) {
    var offset = calendar.getOffsetByTerm(year, n - 1);
    var dateObj = calendar.getDateObjByOffset(year, offset);
    return dateObj.getDate();
  },
  /**
   * 第n个节气的偏移日期 n从0开始
   */
  getOffsetByTerm: function getOffsetByTerm(year, n) {
    if (n < 0) {
      return -1;
    }
    return TermTable[(year - 1900) * 24 + n];
  },
  //根据年份和偏移日期获得data对象
  getDateObjByOffset: function getDateObjByOffset(year, offset) {
    var dateObj = new Date(year, 0, 1, 0, 0, 0, 0);
    dateObj.setDate(dateObj.getDate() + offset);
    return dateObj;
  },
  /**
   *传入农历数字月份返回汉语通俗表示法
   *
   * @param {Number} month 农历月份
   * @returns 农历月份的汉语通俗表示法(腊月)
   */
  toChinaMonth: function toChinaMonth(month) {
    // 月 => \u6708
    if (month > 12 || month < 1) {
      return -1;
    } //若参数错误 返回-1
    var s = calendar.nStr3[month - 1];
    s += '\u6708'; //加上月字
    return s;
  },
  /**
   *传入农历日期数字返回汉字表示法
   *
   * @param {Number} day 农历日期
   * @returns 农历日期的汉字表示法(廿一)
   */
  toChinaDay: function toChinaDay(day) {
    //日 => \u65e5
    var s;
    switch (day) {
      case 10:
        s = '\u521D\u5341';
        break;
      case 20:
        s = '\u4E8C\u5341';
        break;
      case 30:
        s = '\u4E09\u5341';
        break;
      default:
        s = calendar.nStr2[Math.floor(day / 10)];
        s += calendar.nStr1[day % 10];
    }
    return s;
  },
  /**
   *农历年份的生肖-农历正月初一
   *
   * @param {Number} year 农历年
   * @returns 生肖(兔)
   */
  getAnimal: function getAnimal(year) {
    //, month, day   year：农历年
    // month--;  //生肖分界线是“立春”
    // var start = 1900,
    // 	value = '';
    // var x = (year - start) % 12;
    // if (x !== 0 && calendar.getLichunOffset(year, month, day) < 0) {
    // 	x -= 1;
    // }
    // value = calendar.Animals[x];
    // return value;
    var start = 1900,
        value = '';
    var x = (year - start) % 12;
    value = calendar.Animals[x];
    return value;
  },
  //立春偏移
  getLichunOffset: function getLichunOffset(year, month, day) {
    var lichunDate = new Date(year, 0, 1);
    lichunDate.setDate(lichunDate.getDate() + TermTable[(year - 1900) * 24 + 2]);
    var calDate = new Date(year, month, day);
    return calDate - lichunDate;
  },
  /**
   * 计算当前公历日期是当前年的第几周
   *
   * @param {Number} year 公历年
   * @param {Number} month 公历月(从0开始)
   * @param {Number} day 公历日
   * @returns
   */
  getYearWeek: function getYearWeek(year, month, day) {
    var d1 = new Date(year, month, day),
        d2 = new Date(year, 0, 1),
        day = calendar.dayOfYear(d1);
    var num = Math.ceil((day + (d2.getDay() + 1 - 1)) / 7);
    if (num > 1 && month === 11) {
      var nextYearDate = new Date(year + 1, 0, 1);
      var interval = nextYearDate.getDay();
      if (interval > 0 && calendar.getIntervalDays(d1, nextYearDate) <= interval) {
        num = 1;
      }
    }
    return num;
  },
  /**
   * 是否复活节
   *
   * @param {Number} year 公历年
   * @param {Number} month 公历月(从0开始)
   * @param {Number} day 公历日
   * @returns 是否复活节
   */
  isEaster: function isEaster(year, month, day) {
    var C = Math.floor(year / 100);
    var N = year - 19 * Math.floor(year / 19);
    var K = Math.floor((C - 17) / 25);
    var I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
    I = I - 30 * Math.floor(I / 30);
    I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));
    var J = year + Math.floor(year / 4) + I + 2 - C + Math.floor(C / 4);
    J = J - 7 * Math.floor(J / 7);
    var L = I - J;
    var M = 3 + Math.floor((L + 40) / 44);
    var D = L + 28 - 31 * Math.floor(M / 4);
    return month === M && day === D;
  },
  /**
   * 传入公历年月日获得详细的公历农历object数据(1900.1.31~2100.12.31)
   *
   * @param {Number} year 公历年
   * @param {Number} month 公历月(从0开始)
   * @param {Number} day 公历日
   * @returns 详细的公历农历数据
   */
  solar2lunar: function solar2lunar(year, month, day) {
    //参数区间1900.1.31~2100.12.31
    if (year < 1900 || year > 2100) {
      //年份限定',上限
      return -1;
    }
    if (year == 1900 && month == 0 && day < 31) {
      //下限
      return -1;
    }
    var objDate = new Date();
    if (!year) {
      //未传参  获得当天
      objDate = new Date();
    } else {
      objDate = new Date(year, parseInt(month), day);
    }
    var i,
        leap = 0,
        temp = 0;
    //修正ymd参数
    year = objDate.getFullYear();
    month = objDate.getMonth();
    day = objDate.getDate();
    month++;
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = calendar.lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;
      i--;
    }
    //是否今天
    var isTodayObj = new Date(),
        isToday = false;
    if (isTodayObj.getFullYear() == year && isTodayObj.getMonth() + 1 == month && isTodayObj.getDate() == day) {
      isToday = true;
    }
    //星期几
    var nWeek = objDate.getDay(),
        cWeek = calendar.nStr1[nWeek];
    //农历年
    var lyear = i;
    leap = calendar.leapMonth(i); //闰哪个月
    var isLeap = false;

    //效验闰月
    for (i = 1; i < 13 && offset > 0; i++) {
      //闰月
      if (leap > 0 && i == leap + 1 && isLeap == false) {
        --i;
        isLeap = true;
        temp = calendar.leapDays(lyear); //计算农历闰月天数
      } else {
        temp = calendar.monthDays(lyear, i); //计算农历普通月天数
      }
      //解除闰月
      if (isLeap == true && i == leap + 1) {
        isLeap = false;
      }
      offset -= temp;
    }

    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;
        --i;
      }
    }
    if (offset < 0) {
      offset += temp;
      --i;
    }
    //农历月
    var lmonth = i;
    //农历日
    var lday = offset + 1;
    //天干地支处理
    var sm = month - 1;
    var gzY = calendar.toGanZhiYear(year, month - 1, day);
    //月柱 1900年1月小寒以前为 丙子月(60进制12)
    var firstNode = calendar.getTerm(year, month * 2 - 1); //返回当月「节」为几日开始
    var secondNode = calendar.getTerm(year, month * 2); //返回当月「节」为几日开始
    //依据12节气修正干支月
    var gzM = calendar.toGanZhi((year - 1900) * 12 + month + 11);
    if (day >= firstNode) {
      gzM = calendar.toGanZhi((year - 1900) * 12 + month + 12);
    }
    //传入的日期的节气与否
    var isTerm = false;
    var Term = null;
    if (firstNode === day) {
      isTerm = true;
      Term = calendar.solarTerm[month * 2 - 2];
    }
    if (secondNode === day) {
      isTerm = true;
      Term = calendar.solarTerm[month * 2 - 1];
    }
    //日柱 当月一日与 1900/1/1 相差天数
    var dayCyclical = Date.UTC(year, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    var gzD = calendar.toGanZhi(dayCyclical + day - 1);
    //该日期所属的星座
    var astro = calendar.toAstro(month, day);

    return {
      lYear: lyear,
      lMonth: lmonth,
      lDay: lday,
      Animal: calendar.getAnimal(lyear),
      IMonthCn: (isLeap ? '\u95F0' : '') + calendar.toChinaMonth(lmonth),
      IDayCn: calendar.toChinaDay(lday),
      cYear: year,
      cMonth: month,
      cDay: day,
      gzYear: gzY,
      gzMonth: gzM,
      gzDay: gzD,
      isToday: isToday,
      isLeap: isLeap,
      nWeek: nWeek,
      ncWeek: '\u661F\u671F' + cWeek,
      isTerm: isTerm,
      Term: Term,
      astro: astro
    };
  },
  /**
   * 传入农历年月日以及传入的月份是否闰月获得详细的公历农历数据
   *
   * @param {Number} year 农历年
   * @param {Number} month 农历月
   * @param {Number} day 农历日
   * @param {Number} isLeapMonth 农历月份是否闰月
   * @returns 详细的公历农历数据
   */
  lunar2solar: function lunar2solar(year, month, day, isLeapMonth) {
    //参数区间1900.1.31~2100.12.1
    isLeapMonth = !!isLeapMonth;
    // var leapOffset = 0;
    var leapMonth = calendar.leapMonth(year);
    // var leapDay = calendar.leapDays(year);
    if (isLeapMonth && leapMonth != month) {
      //传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
      return -1;
    }
    if (year == 2100 && month == 12 && day > 1 || year == 1900 && month == 1 && day < 31) {
      //超出了最大极限值
      return -1;
    }
    var monthDay = calendar.monthDays(year, month);
    var _day = monthDay;
    //bugFix 2016-9-25
    //if month is leap, _day use leapDays method
    if (isLeapMonth) {
      _day = calendar.leapDays(year, month);
    }
    if (year < 1900 || year > 2100 || day > _day) {
      //参数合法性效验
      return -1;
    }
    //计算农历的时间差
    var offset = 0;
    for (var i = 1900; i < year; i++) {
      offset += calendar.lYearDays(i);
    }
    var leap = 0,
        isAdd = false;
    for (i = 1; i < month; i++) {
      leap = calendar.leapMonth(year);
      if (!isAdd) {
        //处理闰月
        if (leap <= i && leap > 0) {
          offset += calendar.leapDays(year);
          isAdd = true;
        }
      }
      offset += calendar.monthDays(year, i);
    }
    //转换闰月农历 需补充该年闰月的前一个月的时差
    if (isLeapMonth) {
      offset += monthDay;
    }
    //1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + day - 31) * 86400000 + stmap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth();
    var cD = calObj.getUTCDate();
    return calendar.solar2lunar(cY, cM, cD);
  },

  BASE_STEMS_DATE: new Date(1899, 1, 4, 0, 0),
  BASE_STEMS_YEAR: 1899,
  JXNames: ['吉', '凶'],
  JXStatusUnknown: -1,
  JXStatusJi: 0,
  JXStatusXiong: 1,
  JXTable: [0xd2c, 0x34b, 0xcd2, 0xb34, 0x2cd, 0x4b3, 0xd2c, 0x34b, 0xcd2, 0xb34, //甲子，乙丑，丙寅，丁卯，戊辰，己巳，庚午，辛未，壬申，癸酉
  0x2dd, 0x4a3, 0xd2c, 0x34b, 0xcd2, 0xb34, 0x2c5, 0x4b2, 0xd2c, 0x34b, //甲戌，乙亥，丙子，丁丑，戊寅，己卯，庚辰，辛巳，壬午，癸未
  0xcd2, 0xb34, 0x2cd, 0x4b3, 0xd2c, 0x34a, 0xcd2, 0xb34, 0x2cd, 0x4b3, //甲申，乙酉，丙戌，丁亥，戊子，己丑，庚寅，辛卯，壬辰，癸巳
  0xd2c, 0x34b, 0xcd2, 0xb34, 0x2cd, 0x4b3, 0xd2c, 0x34b, 0xcd2, 0xb24, //甲午，乙未，丙申，丁酉，戊戌，己亥，庚子，辛丑，壬寅，癸卯
  0x2cd, 0x4a3, 0xd28, 0x34b, 0xcd2, 0xb34, 0x2cd, 0x4a3, 0xd2c, 0x34b, //甲辰，乙巳，丙午，丁未，戊申，己酉，庚戌，辛亥，壬子，癸丑
  0xcd2, 0xb34, 0x2cd, 0x4b3, 0xd2c, 0x34b, 0xcf2, 0xb34, 0x2cd, 0x4b3 //甲寅，乙卯，丙辰，丁巳，戊午，己未，庚申，辛酉，壬戌，癸亥
  ],
  mPzStemArray: ['甲不开仓财物耗散', '乙不栽植千株不长', '丙不修灶必见灾殃', '丁不剃头头必生疮', '戊不受田田主不祥', '己不破券二比并亡', '庚不经络织机虚张', '辛不合酱主人不尝', '壬不汲水更难提防', '癸不词讼理弱敌强'],

  mPzBranchArray: ['子不问卜自惹祸殃', '丑不冠带主不还乡', '寅不祭祀神鬼不尝', '卯不穿井水泉不香', '辰不哭泣必主重丧', '巳不远行财物伏藏', '午不苫盖屋主更张', '未不服药毒气入肠', '申不安床鬼祟入房', '酉不宴客醉坐颠狂', '戌不吃犬作怪上床', '亥不嫁娶不利新郎'],
  CompassUnknown: -1,
  CompassNorth: 0,
  CompassNortheast: 1,
  CompassEast: 2,
  CompassSoutheast: 3,
  CompassSouth: 4,
  CompassSouthwest: 5,
  CompassWest: 6,
  CompassNorthwest: 7,
  CompassNames: ['正北', '东北', '正东', '东南', '正南', '西南', '正西', '西北'],
  ANIMAL: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],
  mWxMap: {
    甲子: '海中金',
    乙丑: '海中金',
    丙寅: '炉中火',
    丁卯: '炉中火',
    戊辰: '大林木',
    己巳: '大林木',
    庚午: '路旁土',
    辛未: '路旁土',
    壬申: '剑锋金',
    癸酉: '剑锋金',
    甲戌: '山头火',
    乙亥: '山头火',
    丙子: '涧下水',
    丁丑: '涧下水',
    戊寅: '城头土',
    己卯: '城头土',
    庚辰: '白腊金',
    辛巳: '白腊金',
    壬午: '杨柳木',
    癸未: '杨柳木',
    甲申: '泉中水',
    乙酉: '泉中水',
    丙戌: '屋上土',
    丁亥: '屋上土',
    戊子: '霹雳火',
    己丑: '霹雳火',
    庚寅: '松柏木',
    辛卯: '松柏木',
    壬辰: '长流水',
    癸巳: '长流水',
    甲午: '沙中金',
    乙未: '沙中金',
    丙申: '山下火',
    丁酉: '山下火',
    戊戌: '平地木',
    己亥: '平地木',
    庚子: '壁上土',
    辛丑: '壁上土',
    壬寅: '金箔金',
    癸卯: '金箔金',
    甲辰: '覆灯火',
    乙巳: '覆灯火',
    丙午: '天河水',
    丁未: '天河水',
    戊申: '大驿土',
    己酉: '大驿土',
    庚戌: '钗钏金',
    辛亥: '钗钏金',
    壬子: '桑拓木',
    癸丑: '桑拓木',
    甲寅: '大溪水',
    乙卯: '大溪水',
    丙辰: '沙中土',
    丁巳: '沙中土',
    戊午: '天上火',
    己未: '天上火',
    庚申: '石榴木',
    辛酉: '石榴木',
    壬戌: '大海水',
    癸亥: '大海水'
  },
  /**
   *
   *
   * @param {Date} date 日期对象
   * @param {Json} jxData 吉凶数据Json
   * @param {Json} fetusData 胎神数据Json
   * @returns 五行、冲煞、值神等万年历黄历页的数据
   */
  querySAByDay: function querySAByDay(date, jxData, fetusData) {
    var hlObj = {};
    var gzDay = calendar.getStemsBranchDay(date);
    var gzMonth = calendar.getStemsBranchMonth(date.getFullYear(), calendar.dayOfYear(date) - 1);
    var gzStr = calendar.getStemsBranchDayAsString(date);
    var dayTg = gzDay % 10;
    var dayDz = gzDay % 12;
    var pzbj = calendar.mPzStemArray[dayTg] + ' ' + calendar.mPzBranchArray[dayDz];
    hlObj.pzbj = pzbj; //彭祖百忌
    var jsyq = '';
    var xsyj = '';
    var value = (gzMonth + 10) % 12 + 1;
    if (jxData[value + '-' + gzStr]) {
      jsyq = jxData[value + '-' + gzStr].JSYQ;
      xsyj = jxData[value + '-' + gzStr].XSYJ;
      hlObj.jsyq = jsyq; //吉神宜趋
      hlObj.xsyj = xsyj; //凶神宜忌
    }
    var wx = '';
    if (calendar.mWxMap[gzStr]) {
      wx = calendar.mWxMap[gzStr];
      hlObj.wx = wx; //五行
    }
    var cs = calendar.cxInfoOfDateTime(date, -2);
    hlObj.cs = cs; //冲煞
    var zhishen = calendar.zhiShenOfMonth(gzMonth % 12, gzDay % 12);
    hlObj.zhishen = zhishen; //值神
    var jianchu = calendar.jianChuOfDate(date);
    hlObj.jianchu = jianchu; //建除十二神
    var stars28 = calendar.stars28OfDate(date);
    hlObj.stars28 = stars28; //二十八星宿
    var monthDizhiString = calendar.getStemsBranchMonthAsString(date.getFullYear(), calendar.dayOfYear(date) - 1);
    var dayDzString = calendar.getStemsBranchDayAsString(date);
    var taishen = calendar.taiShenOfMonthDiZhi(monthDizhiString, dayDzString, fetusData);
    hlObj.taishen = taishen; //今日胎神
    return hlObj;
  },
  /**
   * 干支纪日字符串
   *
   * @param {Date} date 日期对象
   * @returns 干支纪日字符串
   */
  getStemsBranchDayAsString: function getStemsBranchDayAsString(date) {
    return calendar.formatStemsBranchString(calendar.getStemsBranchDay(date));
  },
  getStemsBranchDay: function getStemsBranchDay(date) {
    var dayOffset = calendar.getIntervalDays(calendar.BASE_STEMS_DATE, date);
    if (dayOffset > 0) {
      var t = parseInt((dayOffset + 9) % 10);
      var b = parseInt((dayOffset + 3) % 12);
      return (6 * t - 5 * b + 60) % 60;
    }
    return -1;
  },
  jianChuOfDate: function jianChuOfDate(date) {
    var baseDate = new Date(1901, 0, 1);
    var thisDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var arr = calendar.twentyFourTermdaysOf(thisDate);
    var jx = -1;
    if (arr.length == 2) {
      var a = parseInt(arr[0]);
      var b = parseInt(arr[arr.length - 1]);
      var offsetDayCount = a % 2 == 0 ? a / 2 : a / 2 + 1;
      if (b && a % 2 == 0) {
        offsetDayCount += 1;
      }
      var interval = Math.abs((thisDate.getTime() - baseDate.getTime()) / 1000);
      var day = interval / (24 * 60 * 60);
      jx = Math.ceil((5 + day - offsetDayCount) % 12);
    }
    var jianchuIndex = 0;
    if (jx >= 2) {
      jianchuIndex = jx - 2;
    } else {
      jianchuIndex = jx + 10;
    }
    var jianchuArray = ['建日', '除日', '满日', '平日', '定日', '执日', '破日', '危日', '成日', '收日', '开日', '闭日'];

    return jianchuArray[jianchuIndex];
  },
  stars28OfDate: function stars28OfDate(date) {
    var B = (date.getFullYear() - 1) * 365;
    for (var i = 0; i < date.getMonth(); i++) {
      B += calendar.dayCountOfMonth(i, 0);
    }
    B += date.getDate();
    var fixValue1 = 0; //常值为0，，切在3月1日以后(31+29+1)，则为1，其他仍然为0
    var fixValue2 = 13; //1900-1999年修正值为13，2000-2099的修正值也为13
    if (calendar.isLeapYear(date.getFullYear())) {
      if (date.getMonth() + 1 > 3 || date.getMonth() + 1 == 3 && date.getDate() >= 1) {
        fixValue1 = 1;
      }
    }
    var C = Math.floor((date.getFullYear() - 1) / 4 - fixValue2 + fixValue1);
    var A = B + C;
    var index_28Stars = (A + 23) % 28;
    var star28Arr = ['轸水蚓宿星', '角木蛟宿星', '亢金龙宿星', '氐土貉宿星', '房日兔宿星', '心月狐宿星', '尾火虎宿星', '箕水豹宿星', '斗木獬宿星', '牛金牛宿星', '女土蝠宿星', '虚日鼠宿星', '危月燕宿星', '室火猪宿星', '壁水貐宿星', '奎木狼宿星', '娄金狗宿星', '胃土雉宿星', '昴日鸡宿星', '毕月乌宿星', '觜火猴宿星', '参水猿宿星', '井木犴宿星', '鬼金羊宿星', '柳土獐宿星', '星日马宿星', '张月鹿宿星', '翼火蛇宿星'];
    return star28Arr[index_28Stars];
  },
  /**
   * 判断公历年是否闰年
   *
   * @param {Number} year 公历年
   * @returns 是否闰年
   */
  isLeapYear: function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      return true;
    } else {
      return false;
    }
  },
  /**
   *某一公历月份的天数
   *
   * @param {Number} month 公历月份(0-11)
   * @param {Boolean} isLeap 是否闰年
   * @returns 天数
   */
  dayCountOfMonth: function dayCountOfMonth(month, isLeap) {
    switch (month + 1) {
      case 1:
        return 31;
      case 2:
        if (!isLeap) {
          return 28;
        }
        return 29;
      case 3:
        return 31;
      case 4:
        return 30;
      case 5:
        return 31;
      case 6:
        return 30;
      case 7:
        return 31;
      case 8:
        return 31;
      case 9:
        return 30;
      case 10:
        return 31;
      case 11:
        return 30;
      case 12:
        return 31;
      default:
        break;
    }
    return 0;
  },
  taiShenOfMonthDiZhi: function taiShenOfMonthDiZhi(monthDizhi, tgdzDay, fetusData) {
    var code = calendar.codeForMonthDizhi(monthDizhi);
    var result = calendar.taiShenWithCode(code, tgdzDay, fetusData);
    return result;
  },
  codeForMonthDizhi: function codeForMonthDizhi(monthDizhi) {
    var zhiCode = {
      子: 11,
      丑: 12,
      寅: 1,
      卯: 2,
      辰: 3,
      巳: 4,
      午: 5,
      未: 6,
      申: 7,
      酉: 8,
      戌: 9,
      亥: 10
    };
    return zhiCode[monthDizhi];
  },
  taiShenWithCode: function taiShenWithCode(code, tgdzDay, fetusData) {
    var codeString = code + '-' + tgdzDay;
    var taishen = fetusData[codeString];
    return taishen ? taishen : '暂无';
  },
  /**
   * 地支月字符串
   *
   * @param {Number} year 公历年份
   * @param {Number} dayInYear 一年中的第几天
   * @returns 地支月字符串
   */
  getStemsBranchMonthAsString: function getStemsBranchMonthAsString(year, dayInYear) {
    return calendar.formatBranchMonthString(calendar.getStemsBranchMonth(year, dayInYear));
  },
  formatBranchMonthString: function formatBranchMonthString(index) {
    if (index < 0) {
      return '';
    }
    return calendar.Zhi[index % 12];
  },
  getStemsBranchMonth: function getStemsBranchMonth(year, dayInYear) {
    var term = calendar.findPreTerm(year, dayInYear);
    var monthOffset = Math.floor((year - calendar.BASE_STEMS_YEAR) * 12 + (term + 2) / 2 - 2);
    var t = (monthOffset + 2) % 10;
    var b = (monthOffset + 2) % 12;
    return (6 * t - 5 * b + 60) % 60;
  },
  /**
   * 冲煞
   *
   * @param solar
   * @param lunar
   * @return
   */
  cxInfoOfDateTime: function cxInfoOfDateTime(solar, lunar) {
    var branchIndex = calendar.branchIndexOfSolar(solar, lunar);
    var cindex = calendar.chongIndexOfDateTime(branchIndex);
    var sindex = calendar.shaDirectionOfDateTime(branchIndex);
    try {
      return '冲' + calendar.ANIMAL[cindex] + '煞' + calendar.CompassNames[sindex].replace('正', '');
    } catch (e) {
      return '';
    }
  },
  /**
   * branchIndex
   *
   * @param solar
   * @param hour  -2:ignoreTime -1:currenttime
   * @return
   */
  branchIndexOfSolar: function branchIndexOfSolar(solar, hour) {
    var branchIndex = -1;
    if (hour == -2) {
      return calendar.getBranchDay(solar);
    } else {
      branchIndex = calendar.getStemBranchHour(solar, hour) % 12;
    }
    return branchIndex;
  },
  getBranchDay: function getBranchDay(solar) {
    var dayOffset = calendar.getIntervalDays(calendar.BASE_STEMS_DATE, solar);
    if (dayOffset > 0) {
      return Math.floor((dayOffset + 3) % 12);
    }
    return 0;
  },
  /*
  子午相冲，丑未相冲，寅申相冲，辰戌相冲，巳亥相冲，卯酉相冲
  */
  chongIndexOfDateTime: function chongIndexOfDateTime(branchIndex) {
    var value = -1;
    switch (branchIndex) {
      case 0:
        value = 6;
        break;
      case 1:
        value = 7;
        break;
      case 2:
        value = 8;
        break;
      case 3:
        value = 9;
        break;
      case 4:
        value = 10;
        break;
      case 5:
        value = 11;
        break;
      case 6:
        value = 0;
        break;
      case 7:
        value = 1;
        break;
      case 8:
        value = 2;
        break;
      case 9:
        value = 3;
        break;
      case 10:
        value = 4;
        break;
      case 11:
        value = 5;
        break;
      default:
        break;
    }
    return value;
  },
  /*
  逢巳日、酉日、丑日必是“煞东”；亥日、卯日、未日必“煞西”；申日、子日、辰日必“煞南”；寅日、午日、戌日必“煞北”
  */
  shaDirectionOfDateTime: function shaDirectionOfDateTime(branchIndex) {
    var value = calendar.CompassUnknown;
    switch (branchIndex) {
      case 0: //子
      case 4: //辰
      case 8:
        //申
        value = calendar.CompassSouth;
        break;
      case 1: //丑
      case 5: //巳
      case 9:
        //酉
        value = calendar.CompassEast;
        break;
      case 2: //寅
      case 6: //午
      case 10:
        //戌
        value = calendar.CompassNorth;
        break;
      case 3: //卯
      case 7: //未
      case 11:
        //亥
        value = calendar.CompassWest;
        break;
      default:
        break;
    }
    return value;
  },
  /*
  * 干支计时
  *
  * @param _date
  * @param lunarHour
  * @return
  */

  /**
   * 干支计时字符串
   *
   * @param {Date} date 日期对象
   * @param {Nunber} hourIndex 小时(24小时制)
   * @returns 干支计时字符串
   */
  getStemsBranchHourAsString: function getStemsBranchHourAsString(date, hourIndex) {
    var lunarHour = calendar.getLunarHourIndex(hourIndex);
    return calendar.formatStemsBranchString(calendar.getStemBranchHour(date, lunarHour));
  },
  /**
   *根据小时获取时辰
   *
   * @param {Number} hourIndex 小时(24小时制)
   * @returns 时辰
   */
  getLunarHourIndex: function getLunarHourIndex(hourIndex) {
    return (Math.floor(hourIndex / 2) + hourIndex % 2) % 12;
  },
  getStemBranchHour: function getStemBranchHour(_date, lunarHour) {
    var dayOffset = calendar.getIntervalDays(calendar.BASE_STEMS_DATE, _date);
    var dt = parseInt((dayOffset + 9) % 10);
    var hb = lunarHour;
    var ht = (hb + (dt > 4 ? dt - 5 : dt) * 2) % 10;
    var termHour = (6 * ht - 5 * hb + 60) % 60;
    return termHour;
  },
  formatStemsBranchString: function formatStemsBranchString(index) {
    if (index < 0) {
      return '';
    }
    return calendar.Gan[index % 10] + calendar.Zhi[index % 12];
  },
  getIntervalDays: function getIntervalDays(base_date, _date) {
    _date.setHours(0);
    _date.setMinutes(0);
    _date.setSeconds(0);
    _date.setMilliseconds(0);
    return Math.floor((_date - base_date) / (1000 * 60 * 60 * 24));
  },
  /**
   *根据日期获取宜忌查询需要的参数
   *
   * @param {Date} dateObj 日期对象
   * @returns 宜忌查询需要的参数
   */
  getYJSqlFields: function getYJSqlFields(dateObj) {
    var field = ['-1', '-1'];
    var arr = calendar.twentyFourTermdaysOf(dateObj);
    if (arr.length == 2) {
      var a = arr[0];
      var b = arr[1];
      var offsetDayCount = Math.floor(a % 2 == 0 ? a / 2 : a / 2 + 1);
      if (b > 0 && a % 2 == 0) {
        offsetDayCount += 1;
      }
      // 计算当前日期距离1901-1-1多少天
      var baseDate = new Date(1901, 0, 1);
      var day = Math.abs(calendar.getIntervalDays(baseDate, dateObj));
      field[0] = (15 + day) % 60 + '';
      field[1] = Math.floor(Math.abs((5 + day - offsetDayCount) % 12)) + '';
    }
    return field;
  },
  twentyFourTermdaysOf: function twentyFourTermdaysOf(dateObj) {
    try {
      var year = dateObj.getFullYear();
      var yearOffset = year - 1900;
      var offset = calendar.dayOfYear(dateObj) - 1;
      var index = 0;
      var st = 0; // 改日是否为24节气
      for (var i = 0; i < 24; i++) {
        var num = TermTable[yearOffset * 24 + i];
        if (num > offset) {
          index = i;
          st = 0;
          break;
        } else if (num == offset) {
          index = i;
          st = 1;
          break;
        }
      }
      var a = index + yearOffset * 24 - 24; // 莫日之前的节气数目
      var b = st;

      return [a, b];
    } catch (e) {
      return null;
    }
  },

  /**
   * 根据日期对象获得是当前年份的第几天
   *
   * @param {any} 日期对象
   * @returns
   */
  dayOfYear: function dayOfYear(date) {
    var dateArr = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var day = date.getDate();
    var month = date.getMonth(); //getMonth()是从0开始
    var year = date.getFullYear();
    var result = 0;
    for (var i = 0; i < month; i++) {
      result += dateArr[i];
    }
    result += day;
    //判断是否闰年
    if (month > 1 && year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      result += 1;
    }
    return result;
  },
  /**
   *计算时辰吉凶
   *
   * @param {Date} dateObj 日期
   * @param {Number} hourIndex 小时数(24小时制)
   * @returns 吉凶
   */
  jixiongStatusOfDateTime: function jixiongStatusOfDateTime(dateObj, hourIndex) {
    var status = calendar.JXStatusUnknown;
    var stemIndex = calendar.getStemsBranchDay(dateObj);
    if (stemIndex > -1 && stemIndex < 60) {
      var hexValue = calendar.JXTable[stemIndex];
      var chineseHour = calendar.getLunarHourIndex(hourIndex);
      var moveCount = 11 - chineseHour;
      var value = hexValue >> moveCount & 0x1;
      status = value > 0 ? calendar.JXStatusJi : calendar.JXStatusXiong;
    }
    return calendar.getJXName(status);
  },
  /**
   * 吉凶名称
   *
   * @param value
   * @return
   */
  getJXName: function getJXName(value) {
    if (value < 0 || value > calendar.JXNames.length) {
      return '';
    }
    return calendar.JXNames[value];
  },
  zhiShenOfMonth: function zhiShenOfMonth(monthDz, dayDz) {
    var beginIndex = monthDz;
    var qinglongBeginIndex = 0;
    if (beginIndex == 0 || beginIndex == 6) {
      qinglongBeginIndex = 8;
    } else if (beginIndex == 1 || beginIndex == 7) {
      qinglongBeginIndex = 10;
    } else if (beginIndex == 2 || beginIndex == 8) {
      qinglongBeginIndex = 0;
    } else if (beginIndex == 3 || beginIndex == 9) {
      qinglongBeginIndex = 2;
    } else if (beginIndex == 4 || beginIndex == 10) {
      qinglongBeginIndex = 4;
    } else if (beginIndex == 5 || beginIndex == 11) {
      qinglongBeginIndex = 6;
    }

    var ishen_12 = dayDz - qinglongBeginIndex;
    if (ishen_12 < 0) {
      ishen_12 += 12;
    }
    var shiershenArr = ['青龙', '明堂', '天刑', '朱雀', '金匮', '天德', '白虎', '玉堂', '天牢', '玄武', '司命', '勾陈'];
    var shen_12 = shiershenArr[ishen_12];
    return shen_12;
  },

  findPreTerm: function findPreTerm(year, dayInYear) {
    var index = year - calendar.MIN_YEAR;
    if (index > 0 && index < TermTable.length / 24) {
      var begin = index * 24;
      return calendar.findPreTerm1(TermTable, dayInYear, begin);
    }
    return -1;
  },
  findPreTerm1: function findPreTerm1(termTable, dayInYear, begin) {
    var value = new Array(24);
    for (var j = begin; j <= begin + 23; j++) {
      value[j - begin] = termTable[j];
    }
    var index = -1,
        i = 0;
    for (i = 0; i < value.length; i++) {
      if (dayInYear === value[i]) {
        index = i;
        break;
      } else if (dayInYear < value[i]) {
        index = i - 1;
        break;
      }
    }
    if (i === value.length && index === -1) {
      index = i - 1;
    }
    return index;
  },

  /**
   * 获取传入日期的伏天信息
   *
   * @param {Date} dateObj 传入日期
   * @returns 伏天信息(初伏第一天),如不是伏天则返回空字符串
   */
  getDogDayInfo: function getDogDayInfo(dateObj) {
    var dogDays = calendar.getDogDaysBeginDates(dateObj.getFullYear());
    if (dogDays == null || dogDays.length < 3) {
      return '';
    }
    var DOG_FIRST_FORMATE = '初伏第';
    var DOG_SECOND_FORMATE = '中伏第';
    var DOG_THIRD_FORMATE = '末伏第';
    var interval1 = calendar.getIntervalDays(dogDays[0], dateObj);
    var interval2 = calendar.getIntervalDays(dogDays[1], dateObj);
    var interval3 = calendar.getIntervalDays(dogDays[2], dateObj);
    if (interval1 >= 0 && interval2 < 0) {
      return DOG_FIRST_FORMATE + (interval1 + 1) + '天';
    } else if (interval2 >= 0 && interval3 < 0) {
      return DOG_SECOND_FORMATE + (interval2 + 1) + '天';
    } else if (interval3 >= 0 && interval3 < 10) {
      return DOG_THIRD_FORMATE + (interval3 + 1) + '天';
    }
    return '';
  },
  /**
   * 获取三伏开始时间
   */
  getDogDaysBeginDates: function getDogDaysBeginDates(year) {
    var offsetTerm = calendar.getOffsetByTerm(year, StemsBranch.TERMS_XZ);
    if (offsetTerm < 0) {
      return null;
    }
    var begindates = new Array(3);
    var termDate = calendar.getDateObjByOffset(year, offsetTerm);
    var baseDay = calendar.getStemsDay(termDate);
    begindates[0] = calendar.getNextDay(termDate, 20 + (baseDay > 6 ? 16 - baseDay : 6 - baseDay));
    begindates[1] = calendar.getNextDay(begindates[0], 10);
    offsetTerm = calendar.getOffsetByTerm(year, StemsBranch.TERMS_LQ);
    if (offsetTerm < 0) {
      return null;
    }
    termDate = calendar.getDateObjByOffset(year, offsetTerm);
    baseDay = calendar.getStemsDay(termDate);
    begindates[2] = calendar.getNextDay(termDate, baseDay > 6 ? 16 - baseDay : 6 - baseDay);
    return begindates;
  }
}, _calendar['getOffsetByTerm'] = function getOffsetByTerm(year, n) {
  if (n < 0) {
    return -1;
  }
  return TermTable[(year - 1900) * 24 + n];
}, _calendar.getStemsDay = function getStemsDay(date) {
  var dayOffset = calendar.getIntervalDays(calendar.BASE_STEMS_DATE, date);
  if (dayOffset > 0) {
    return Math.floor((dayOffset + 9) % 10);
  }
  return 0;
}, _calendar['getDateObjByOffset'] = function getDateObjByOffset(year, offset) {
  var dateObj = new Date(year, 0, 1, 0, 0, 0, 0);
  dateObj.setDate(dateObj.getDate() + offset);
  return dateObj;
}, _calendar.getNextDay = function getNextDay(dateObj, day) {
  var resultObj = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
  resultObj.setDate(resultObj.getDate() + day);
  return resultObj;
}, _calendar.MIN_YEAR = 1900, _calendar.MAX_YEAR = 2135, _calendar.CHINESE_NUM = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'], _calendar.getColdInfo = function getColdInfo(dateObj) {
  var COLD_FORMATE = '九第';
  var daysInterval = calendar.getIntervalDays(calendar.getColdBeginDate(dateObj), dateObj);
  if (daysInterval >= 0) {
    var section = Math.floor(daysInterval / 9);
    var row = Math.floor(daysInterval % 9 + 1);
    if (section >= 0 && section < 9) {
      return calendar.CHINESE_NUM[section + 1] + COLD_FORMATE + row + '天';
    }
  }
  return '';
}, _calendar.getColdBeginDate = function getColdBeginDate(dateObj) {
  var year = dateObj.getFullYear();
  if (year >= calendar.MIN_YEAR && year <= calendar.MAX_YEAR) {
    var days = calendar.dayOfYear(dateObj);
    var offset = 0;
    if (days < 100) {
      offset = calendar.getOffsetByTerm(year - 1, StemsBranch.STEMS_DZ); // 23表示九九开始
      return calendar.getDateObjByOffset(year - 1, offset);
    } else {
      offset = calendar.getOffsetByTerm(year, StemsBranch.STEMS_DZ);
      return calendar.getDateObjByOffset(year, offset);
    }
  }
  return null;
}, _calendar);
var StemsBranch = {
  TERMS_XZ: 11,
  TERMS_LQ: 14,
  STEMS_DZ: 23
};
/**
 * 24节气在每一年的第几天
 */
var TermTable = [5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //1900
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1901
5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1902
5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 172, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1903
6, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 173, 188, 204, 220, 235, 251, 266, 282, 297, 312, 327, 341, 356, //1904
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1905
5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1906
5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 172, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1907
6, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 173, 188, 204, 220, 235, 251, 266, 282, 297, 312, 327, 341, 356, //1908
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1909
5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1910
5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 172, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1911
6, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 173, 188, 204, 220, 235, 251, 266, 282, 297, 312, 326, 341, 356, //1912
5, 19, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, //1913
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1914
5, 20, 35, 50, 64, 80, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1915
5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 173, 188, 204, 220, 235, 251, 266, 281, 297, 312, 326, 341, 356, //1916
5, 19, 34, 49, 64, 79, 94, 110, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, //1917
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1918
5, 20, 35, 50, 64, 80, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1919
5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 173, 188, 204, 220, 235, 251, 266, 281, 297, 312, 326, 341, 356, //1920
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 340, 355, //1921
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1922
5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1923
5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 173, 188, 204, 220, 235, 251, 266, 281, 297, 312, 326, 341, 356, //1924
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 340, 355, //1925
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1926
5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1927
5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 173, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1928
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //1929
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1930
5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1931
5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 172, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1932
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //1933
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1934
5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1935
5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 172, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1936
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //1937
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1938
5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1939
5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 172, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1940
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //1941
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1942
5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1943
5, 20, 35, 50, 65, 80, 95, 110, 125, 141, 157, 172, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1944
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //1945
5, 19, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, //1946
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1947
5, 20, 35, 50, 64, 80, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1948
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //1949
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, //1950
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1951
5, 20, 35, 50, 64, 80, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1952
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //1953
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 340, 355, //1954
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1955
5, 20, 35, 50, 64, 79, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 251, 266, 281, 296, 311, 326, 341, 356, //1956
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //1957
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //1958
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1959
5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1960
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, //1961
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //1962
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1963
5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1964
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, //1965
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //1966
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1967
5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1968
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, //1969
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //1970
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1971
5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1972
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, //1973
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //1974
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, //1975
5, 20, 35, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1976
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //1977
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 326, 340, 355, //1978
5, 19, 34, 49, 64, 79, 94, 110, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, //1979
5, 20, 35, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1980
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //1981
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //1982
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, //1983
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //1984
4, 19, 34, 49, 63, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //1985
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //1986
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 235, 250, 265, 281, 296, 311, 326, 340, 355, //1987
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1988
4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //1989
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //1990
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //1991
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1992
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //1993
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, //1994
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //1995
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //1996
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //1997
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, //1998
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //1999
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //2000
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2001
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2002
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //2003
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //2004
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2005
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2006
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //2007
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, //2008
4, 19, 34, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2009
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2010
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 326, 340, 355, //2011
5, 20, 34, 49, 64, 79, 94, 110, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, //2012
4, 19, 34, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2013
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2014
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //2015
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, //2016
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2017
4, 19, 34, 49, 63, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2018
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //2019
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 341, 355, //2020
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, //2021
4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2022
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //2023
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //2024
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, //2025
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2026
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2027
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //2028
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, //2029
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2030
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2031
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //2032
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, //2033
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2034
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2035
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //2036
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, //2037
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2038
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2039
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //2040
4, 19, 33, 48, 63, 78, 93, 109, 124, 139, 155, 171, 187, 202, 218, 234, 249, 264, 280, 295, 310, 325, 340, 354, //2041
4, 19, 34, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2042
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2043
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 326, 340, 355, //2044
4, 19, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 187, 202, 218, 234, 249, 264, 280, 295, 310, 325, 340, 354, //2045
4, 19, 34, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2046
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2047
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //2048
4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 340, 354, //2049
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2050
4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2051
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //2052
4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 340, 354, //2053
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2054
4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2055
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //2056
4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 339, 354, //2057
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, //2058
4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2059
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2060
4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 339, 354, //2061
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, //2062
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2063
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2064
4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 339, 354, //2065
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, //2066
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2067
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2068
4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 339, 354, //2069
4, 19, 33, 48, 63, 78, 93, 109, 124, 139, 155, 171, 187, 202, 218, 234, 249, 264, 280, 295, 310, 325, 340, 354, //2070
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2071
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2072
4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 279, 295, 310, 325, 339, 354, //2073
4, 19, 33, 48, 63, 78, 93, 109, 124, 139, 155, 171, 187, 202, 218, 234, 249, 264, 280, 295, 310, 325, 340, 354, //2074
4, 19, 34, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2075
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2076
4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 279, 295, 310, 325, 339, 354, //2077
4, 19, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 234, 249, 264, 280, 295, 310, 325, 340, 354, //2078
4, 19, 34, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2079
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2080
4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 170, 186, 202, 218, 233, 249, 264, 279, 295, 310, 324, 339, 354, //2081
4, 19, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 340, 354, //2082
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2083
4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2084
3, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 170, 186, 202, 218, 233, 249, 264, 279, 295, 310, 324, 339, 354, //2085
4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 340, 354, //2086
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2087
4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2088
3, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 170, 186, 202, 218, 233, 249, 264, 279, 295, 310, 324, 339, 354, //2089
4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 339, 354, //2090
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, //2091
4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2092
3, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 170, 186, 202, 218, 233, 249, 264, 279, 294, 309, 324, 339, 354, //2093
4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 339, 354, //2094
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, //2095
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2096
3, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 170, 186, 202, 217, 233, 249, 264, 279, 294, 309, 324, 339, 354, //2097
4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 339, 354, //2098
4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, //2099
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2100
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2101
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //2102
5, 20, 34, 49, 64, 79, 94, 110, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, //2103
5, 20, 35, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //2104
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2105
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 326, 340, 355, //2106
5, 20, 34, 49, 64, 79, 94, 110, 125, 140, 156, 172, 187, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, //2107
5, 20, 35, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //2108
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2109
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 326, 340, 355, //2110
5, 20, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 341, 355, //2111
5, 20, 35, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //2112
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2113
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //2114
5, 20, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 341, 355, //2115
5, 20, 35, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //2116
4, 19, 34, 49, 63, 79, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2117
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, //2118
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 341, 355, //2119
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, //2120
4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2121
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 311, 325, 340, 355, //2122
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //2123
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //2124
4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2125
4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2126
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //2127
5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, //2128
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2129
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2130
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, //2131
5, 20, 34, 49, 64, 79, 94, 110, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, //2132
4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, //2133
4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, //2134
5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355 //2135
];

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

// device
var ua = window.navigator.userAgent.toLowerCase();
/**
 * 获得ios的系统版本
 */
function GetIOSVersion() {
  if (window.MSStream) {
    return false;
  }
  var match = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
  if (match !== undefined && match !== null) {
    var version = [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3] || 0, 10)];
    return parseFloat(version.join('.'));
  }
  return false;
}
/**
 * 获得安卓的系统版本
 */
function getAndroidVersion() {
  //eslint-disable-next-line
  var match = ua.match(/android\s([0-9\.]*)/);
  return match ? parseFloat(match[1]) : false;
}
/**
 * 是否在微信浏览器环境中
 */
var isWeixin = /micromessenger/i.test(ua);
/**
 * 是否在小程序webview环境中
 */
var isMiniprogram = false;
function ready() {
  isMiniprogram = window.__wxjs_environment === 'miniprogram';
}
if (!window.WeixinJSBridge || !window.WeixinJSBridge.invoke) {
  document.addEventListener('WeixinJSBridgeReady', ready, false);
} else {
  ready();
}
/**
 * 是否在万年历环境中
 */
var isWnl = /wnl/i.test(ua);
/**
 * 万年历app版本号，整数值，如：457
 */
var appVersion = parseInt(ua.substr(ua.indexOf('wnl ') + 4, 5).replace(/\./g, ''));
/**
 * 万年历app版本字符，如：4.5.7
 */
var appVersionString = ua.substr(ua.indexOf('wnl ') + 4, 5);
/**
 * ios的系统版本
 */
var iOSVersion = GetIOSVersion();
/**
 * 安卓的系统版本
 */
var androidVersion = getAndroidVersion();
/**
 * 是否安卓系统
 */
var isAndroid = /android|htc/i.test(ua) || (window.navigator.platform + '').match(/linux/i);
/**
 * 是否ipad设备
 */
var isIPad = !isAndroid && /iPad/i.test(ua);
/**
 * 是否iphone设备
 */
var isIPhone = !isAndroid && /iPod|iPhone/i.test(ua);
/**
 * 是否iphoneX
 */
var isIphoneX = isIPhone && window.innerWidth === 375 && window.devicePixelRatio === 3;
/**
 * 是否ios系统
 */
var isIOS = isIPad || isIPhone;

/**
 * 将json对象转换成url的查询字符串：?a=5&b=2
 *
 * @param {Object} json 需要转换的json对象:{a:5,b:2}
 * @returns 转换成url的查询字符串
 */
function jsonToQueryString(json) {
  return '?' + Object.keys(json).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
  }).join('&');
}
/**
 * 格式化数字，小于10则补零
 *
 * @param {Number} n 需要格式化的数字
 * @returns 格式化后的字符
 */
function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}
/**
 *将时间对象转换为指定格式的字符串
 * @param {Date} date 时间对象
 * @param {String} fmt 需要转换的格式：yyyy-MM-dd
 * @returns 指定格式的字符串
 */
function formatDate(date, fmt) {
  var dateFormateObj = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  Object.keys(dateFormateObj).forEach(function (key) {
    if (new RegExp('(' + key + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? dateFormateObj[key] : ('00' + dateFormateObj[key]).substr(('' + dateFormateObj[key]).length));
    }
  });
  return fmt;
}
/**
 *将字符转换成数字，因为在某些低版本的安卓中parseInt('02')会转成0的bug
 * @param {String} str 需要转换成数字的字符
 * @returns 数字
 */
function str2Int(str) {
  str = str.replace(/^0+/g, '');
  if (str.length === 0) {
    return 0;
  }
  return parseInt(str);
}
/**
 * 获取url查询字符串的值
 * @param {String} name 需要查询的值的key
 * @returns 查询字符串的值
 */
function getQueryValue(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg) || window.location.hash.substr(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}

/* eslint-disable */
/**
 *对象深拷贝
 * @param {object} source 深拷贝的原始对象
 * @returns 深拷贝后的对象
 */
function deepCopy(source) {
  if (!source || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) !== 'object') {
    throw new Error('error arguments', 'shallowClone');
  }
  var targetObj = source.constructor === Array ? [] : {};
  for (var keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && _typeof(source[keys]) === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepCopy(source[keys]);
      } else {
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
}
/* eslint-enable */
/**
 * 函数节流方法，多用于scroll及input的延时执行
 * @param Function fn 延时调用函数
 * @param Number delay 延迟多长时间
 * @param Number atleast 至少多长时间触发一次
 * @return Function 延迟执行的方法
 */
function throttle(fn, delay, atleast) {
  var timer = null;
  var previous = null;
  return function (args) {
    var now = +new Date();
    if (!previous) previous = now;
    if (atleast && now - previous > atleast) {
      fn(args);
      // 重置上一次开始时间为本次结束时间
      previous = now;
      clearTimeout(timer);
    } else {
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn(args);
        previous = null;
      }, delay);
    }
  };
}
// let inputCallback = throttle((event) => {
//   let target = event.currentTarget;
//   associateAction(target.value.trim());
// }, 100);
// $(document).on('input', '.search_txt', inputCallback);
/**
 * 获取两个日期之前间隔的天数
 * @param {Date} startDate 开始日期对象
 * @param {Date} endDate 结束日期对象
 * @returns 间隔的天数
 */
function getDayDistance(startDate, endDate) {
  var starttimes = startDate.getTime();
  var endtimes = endDate.getTime();
  var intervalTime = starttimes - endtimes; //两个日期相差的毫秒数 一天86400000毫秒
  var InterDays = Math.floor(intervalTime.toFixed(2) / 86400000); //加1，是让同一天的两个日期返回一天
  return InterDays;
}
/**
 * 根据间隔的天数获取描述
 * @param {int} distance 间隔的天数
 * @returns 天数描述
 */
function getDayDistanceString(distance) {
  var dayDistance = '';
  if (distance === 0) {
    dayDistance = '今天';
  } else if (distance === -1) {
    dayDistance = '明天';
  } else if (distance === 1) {
    dayDistance = '昨天';
  } else if (distance < -1) {
    dayDistance = Math.abs(distance) + '天后';
  } else if (distance > 1) {
    dayDistance = distance + '天前';
  }
  return dayDistance;
}
/**
 * 判断设备是否支持0.5px的边框，如支持则在根目录的html中添加hairlines的class
 */
function setHairlines() {
  if (window.devicePixelRatio && devicePixelRatio >= 2) {
    var testElem = document.createElement('div');
    testElem.style.border = '.5px solid transparent';
    document.body.appendChild(testElem);
    if (testElem.offsetHeight === 1) {
      document.querySelector('html').classList.add('hairlines');
    }
    document.body.removeChild(testElem);
  }
}
/**
 * 是否是object
 *
 * @param {any} obj 传入判断的值
 * @returns 是否
 */
function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}
/**
 * 是否空对象
 *
 * @param {Object} obj 传入判断的值
 * @returns 是否
 */
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
/**
 * 判断是否为数字
 *
 * @param {any} s 传入判断的值
 * @returns 是否
 */
function isNum(s) {
  if (s != null && s !== '') {
    return !Number.isNaN(s);
  }
  return false;
}
/**
 * 信息上报，会自动读取url中设备占位符参数及微信登陆后url信息，如果url中包含这些则这些参数不用传，具体参数解释见：http://192.168.1.80:82/doku.php?id=h5%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E4%B8%8A%E6%8A%A5
 *
 * @param {any} {
 *   Productid = '', //产品的ID，用于区分不同产品
 *   Producttype = 0, // 活动（1：测算）
 *   Producttype2 = '', // 具体项目如中秋节，双11
 *   Source = 4,
 *   Reporttime = '',
 *   Name = '',
 *   Sex = 0, // 0=男，1=女
 *   Birthcity = '',
 *   Birthprovince = '',
 *   Age = '',
 *   Birthdate = '1900-1-1',
 *   Birthtime = '',
 *   Zodiac = '', //生肖
 *   Horoscope = '', //星座
 *   QQ = '',
 *   Mobile = '',
 *   Mail = '',
 *   IDFA = '',
 *   IMEI = '',
 *   Deviceid = '',
 *   Userid = '',
 *   Citycode = '',
 *   Wxopenid = '',
 *   Wxnickname = '',
 *   Wxsex = 0,
 *   Wxprovince = '',
 *   Wxcity = '',
 *   Wxcountry = '',
 *   Wxunionid = ''
 * }
 */
// function infoReport({
//   Productid = '', //产品的ID，用于区分不同产品
//   Producttype = 0, // 活动（1：测算）
//   Producttype2 = '', // 具体项目如中秋节，双11
//   Source = 4,
//   Reporttime = '',
//   Name = '',
//   Sex = 0, // 0=男，1=女
//   Birthcity = '',
//   Birthprovince = '',
//   Age = '',
//   Birthdate = '1900-1-1',
//   Birthtime = '',
//   Zodiac = '',
//   Horoscope = '',
//   QQ = '',
//   Mobile = '',
//   Mail = '',
//   IDFA = '',
//   IMEI = '',
//   Deviceid = '',
//   Userid = '',
//   Citycode = '',
//   Wxopenid = '',
//   Wxnickname = '',
//   Wxsex = 0,
//   Wxprovince = '',
//   Wxcity = '',
//   Wxcountry = '',
//   Wxunionid = ''
// }) {
//   if (getQueryValue('idfa')) {
//     IDFA = getQueryValue('idfa');
//   }
//   if (getQueryValue('imei')) {
//     IMEI = getQueryValue('imei');
//   }
//   if (getQueryValue('deviceId')) {
//     Deviceid = getQueryValue('deviceId');
//   }
//   if (getQueryValue('userId')) {
//     Userid = getQueryValue('userId');
//   }
//   if (getQueryValue('userId')) {
//     Citycode = getQueryValue('cityId');
//   }
//   if (isWeixin) {
//     if (getQueryValue('openid')) {
//       Wxopenid = decodeURIComponent(getQueryValue('openid'));
//     }
//     if (getQueryValue('nickname')) {
//       Wxnickname = decodeURIComponent(getQueryValue('nickname'));
//     }
//     if (getQueryValue('sex')) {
//       Wxsex = parseInt(decodeURIComponent(getQueryValue('sex'))); // 微信的值为1时是男性，值为2时是女性，值为0时是未知
//     }
//     if (getQueryValue('province')) {
//       Wxprovince = decodeURIComponent(getQueryValue('province'));
//     }
//     if (getQueryValue('city')) {
//       Wxcity = decodeURIComponent(getQueryValue('city'));
//     }
//     if (getQueryValue('country')) {
//       Wxcountry = decodeURIComponent(getQueryValue('country'));
//     }
//     if (getQueryValue('unionid')) {
//       Wxunionid = decodeURIComponent(getQueryValue('unionid'));
//     }
//   }
//   Reporttime = new Date().getTime();
//   let ajaxData = {
//     Productid,
//     Producttype,
//     Producttype2,
//     Source,
//     Reporttime,
//     Name,
//     Sex,
//     Birthcity,
//     Birthprovince,
//     Age,
//     Birthdate,
//     Birthtime,
//     Zodiac,
//     Horoscope,
//     QQ,
//     Mobile,
//     Mail,
//     IDFA,
//     IMEI,
//     Deviceid,
//     Userid,
//     Citycode,
//     Wxopenid,
//     Wxnickname,
//     Wxsex,
//     Wxprovince,
//     Wxcity,
//     Wxcountry,
//     Wxunionid
//   };
//   $.ajax({
//     url: '//192.168.1.110:9631/api/data/Report',
//     type: 'POST',
//     contentType: 'application/json;charset=UTF-8',
//     data: JSON.stringify(ajaxData),
//     success: res => {
//       console.log(res, '成功');
//     },
//     error: xhr => {
//       console.log(xhr, '数据错误');
//     }
//   });
// }
/**
 * 检查app安装状态，已安装则打开，未安装则下载或跳转下载链接
 *
 * @param {any} appInfo // 需要检查的app信息
 * 需要以下属性
 * @argument appPackgeName 该应用的安卓包名 //需要的包名可以找客户端
 * @argument iosSchaema  该应用的ios schema //ios万年历中查看是否安装某应用，需要在客户端开发时配置相应的schema协议才能正常使用
 * @argument apkLink 该应用的安卓apk下载链接
 * @argument thirdPartyLink 该应用的安卓第三方(应用宝，小米应用商店等)下载链接
 * @argument itunesLink 该应用的iTunes链接
 *
 */
function checkAppInstall(appInfo) {
  var appPackgeName = appInfo.appPackgeName;
  var iosSchema = appInfo.iosSchema;
  var apkLink = appInfo.apkLink;
  var thirdPartyLink = appInfo.thirdPartyLink;
  var itunesLink = appInfo.itunesLink;

  if (isAndroid) {
    if (isWnl) {
      if (window.ylwindow && appPackgeName) {
        var isInstalled = window.ylwindow.checkInstall(appPackgeName);
        if (isInstalled <= 0) {
          window.location.href = apkLink;
        } else {
          window.ylwindow.bootApp(appPackgeName);
        }
      } else {
        window.location.href = apkLink;
      }
    } else if (isWeixin) {
      window.location.href = thirdPartyLink;
    } else {
      window.location.href = apkLink;
    }
  }

  if (isIOS) {
    if (iOSVersion < 9) {
      window.location.href = itunesLink;
      return;
    }
    if (isWnl) {
      if (iosSchema) {
        window.appDidInstalled = function (retObj) {
          window.location.href = parseInt(retObj.value) ? iosSchema : itunesLink;
          // return;
        };
        setTimeout(function () {
          window.location.href = 'protocol://checkstatusofapp:#' + iosSchema;
        }, 0);
      }
    } else {
      window.location.href = itunesLink;
    }
  }
}

/**
 * 适应底部输入框的方法
 *
 * @param {any} outDom input输入框外层dom
 */
function fitInputBottom(outDom) {
  var inputDom = outDom.children[0];
  if (isIOS && !isIphoneX) {
    // ios11.x, 在QQ和safari下，页面会被顶起键盘的高度; 是由下面的适配导致的
    if ((/ qq/i.test(ua) || /safari/i.test(ua)) && iOSVersion > 11) {
      return;
    }
    setInterval(function () {
      document.body.scrollTop = document.body.scrollHeight;
    }, 100);
  }
  inputDom.onfocus = function () {
    if (isIphoneX) {
      outDom.style.bottom = '40px';
    }
  };
  inputDom.onblur = function () {
    outDom.style.bottom = '0';
  };
}
/**
 * 生成uuid的函数
 *
 * @param {any} len 生成的字符的长度
 * @param {any} radix
 * @returns  生成的uuid字符串
 */
function uuid(len, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuidList = [];
  radix = radix || chars.length;
  if (len) {
    // Compact form
    for (var i = 0; i < len; i += 1) {
      uuidList[i] = chars[0 | Math.random() * radix]; //eslint-disable-line
    }
  } else {
    // rfc4122 requires these characters
    uuidList[8] = '-';
    uuidList[13] = '-';
    uuidList[18] = '-';
    uuidList[23] = '-';
    uuidList[14] = '4';
    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (var _i = 0; _i < 36; _i += 1) {
      if (!uuidList[_i]) {
        // rfc4122, version 4 form
        var r = 0 | Math.random() * 16; //eslint-disable-line
        uuidList[_i] = chars[_i === 19 ? r & 0x3 | 0x8 : r]; //eslint-disable-line
      }
    }
  }
  return uuidList.join('');
}

var util = {
  isWnl: isWnl,
  isWeixin: isWeixin,
  isMiniprogram: isMiniprogram,
  isIOS: isIOS,
  isAndroid: isAndroid,
  isObject: isObject,
  isEmptyObject: isEmptyObject,
  isNum: isNum,
  appVersion: appVersion,
  appVersionString: appVersionString,
  iOSVersion: iOSVersion,
  androidVersion: androidVersion,
  isIphoneX: isIphoneX,
  jsonToQueryString: jsonToQueryString,
  formatNumber: formatNumber,
  formatDate: formatDate,
  str2Int: str2Int,
  deepCopy: deepCopy,
  getQueryValue: getQueryValue,
  throttle: throttle,
  getDayDistance: getDayDistance,
  getDayDistanceString: getDayDistanceString,
  setHairlines: setHairlines,
  // infoReport,
  checkAppInstall: checkAppInstall,
  fitInputBottom: fitInputBottom,
  uuid: uuid
};

__$styleInject("img:not([src]){visibility:hidden}.main-content{position:absolute;top:0;left:0;bottom:0;width:100%;overflow-x:hidden;overflow-y:auto;-webkit-user-select:none;-o-user-select:none;user-select:none;-webkit-overflow-scrolling:touch}.load-content{width:100%;height:30px;text-align:center;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#d5d5d5;font-family:noto-thin,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;padding-bottom:10px}.load-content .pull-down-content--icon{margin-left:0}.pull-down-container{-webkit-transform:translateZ(0);transform:translateZ(0)}.pull-down-header{width:100%;height:60px;margin-top:-60px;overflow:hidden;position:relative;text-align:center;font-size:16px;color:#aaa}.pull-down-content{position:absolute;max-width:90%;bottom:10px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);height:40px;color:#d5d5d5;text-align:center;border-left:20px solid transparent;font-family:noto-thin,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px}.pull-down-content--icon{float:left;height:20px;width:20px;margin-top:10px;background:url(//qiniu.image.cq-wnl.com/Fmh9f_NKldOMsId9ZZRbCq2I-JwC) no-repeat 50%;background-size:20px 20px}.pull-down-content--icon.pull-down-refresh{background:url(//qiniu.image.cq-wnl.com/FrA77QSYfCDcM58EHFoZG5caH67x) no-repeat 50%;background-size:20px 20px;-webkit-animation:rotate 2s infinite;animation:rotate 2s infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.pull-down-content--icon.pull-down-error{background:url(//qiniu.image.cq-wnl.com/Fihc8c7yafpEKgtqMQ_-jKSGGdcs) no-repeat 50%;background-size:20px 20px}.pull-down-content--label{float:left;height:20px;line-height:20px;margin-left:10px;margin-top:10px}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.pull-to-refresh-layer{width:100%;text-align:center;font-size:16px;color:#aaa;height:60px;margin-top:-60px}.loading-layer .spinner-holder,.pull-to-refresh-layer .spinner-holder{text-align:center;-webkit-font-smoothing:antialiased}.spinner-holder #spinner-img{width:39px;height:47px;margin:0 auto}", undefined);

/* eslint-disable */
(function (global) {
	var time = Date.now || function () {
		return +new Date();
	};
	var desiredFrames = 60;
	var millisecondsPerSecond = 1000;
	var running = {};
	var counter = 1;
	// Create namespaces
	if (!global.core) {
		global.core = {
			effect: {}
		};
	} else if (!core.effect) {
		core.effect = {};
	}

	core.effect.Animate = {
		/**
   * A requestAnimationFrame wrapper / polyfill.
   *
   * @param callback {Function} The callback to be invoked before the next repaint.
   * @param root {HTMLElement} The root element for the repaint
   */
		requestAnimationFrame: function () {
			// Check for request animation Frame support
			var requestFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame;
			var isNative = !!requestFrame;
			if (requestFrame && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(requestFrame.toString())) {
				isNative = false;
			}
			if (isNative) {
				return function (callback, root) {
					requestFrame(callback, root);
				};
			}
			var TARGET_FPS = 60;
			var requests = {};
			var rafHandle = 1;
			var intervalHandle = null;
			var lastActive = +new Date();
			return function (callback, root) {
				var callbackHandle = rafHandle++;
				// Store callback
				requests[callbackHandle] = callback;
				// Create timeout at first request
				if (intervalHandle === null) {
					intervalHandle = setInterval(function () {
						var time = +new Date();
						var currentRequests = requests;
						// Reset data structure before executing callbacks
						requests = {};
						for (var key in currentRequests) {
							if (currentRequests.hasOwnProperty(key)) {
								currentRequests[key](time);
								lastActive = time;
							}
						}
						// Disable the timeout when nothing happens for a certain
						// period of time
						if (time - lastActive > 2500) {
							clearInterval(intervalHandle);
							intervalHandle = null;
						}
					}, 1000 / TARGET_FPS);
				}
				return callbackHandle;
			};
		}(),
		/**
   * Stops the given animation.
   *
   * @param id {Integer} Unique animation ID
   * @return {Boolean} Whether the animation was stopped (aka, was running before)
   */
		stop: function stop(id) {
			var cleared = running[id] != null;
			if (cleared) {
				running[id] = null;
			}

			return cleared;
		},
		/**
   * Whether the given animation is still running.
   *
   * @param id {Integer} Unique animation ID
   * @return {Boolean} Whether the animation is still running
   */
		isRunning: function isRunning(id) {
			return running[id] != null;
		},
		/**
   * Start the animation.
   *
   * @param stepCallback {Function} Pointer to function which is executed on every step.
   *   Signature of the method should be `function(percent, now, virtual) { return continueWithAnimation; }`
   * @param verifyCallback {Function} Executed before every animation step.
   *   Signature of the method should be `function() { return continueWithAnimation; }`
   * @param completedCallback {Function}
   *   Signature of the method should be `function(droppedFrames, finishedAnimation) {}`
   * @param duration {Integer} Milliseconds to run the animation
   * @param easingMethod {Function} Pointer to easing function
   *   Signature of the method should be `function(percent) { return modifiedValue; }`
   * @param root {Element ? document.body} Render root, when available. Used for internal
   *   usage of requestAnimationFrame.
   * @return {Integer} Identifier of animation. Can be used to stop it any time.
   */
		start: function start(stepCallback, verifyCallback, completedCallback, duration, easingMethod, root) {
			var start = time();
			var lastFrame = start;
			var percent = 0;
			var dropCounter = 0;
			var id = counter += 1;
			if (!root) {
				root = document.body;
			}
			// Compacting running db automatically every few new animations
			if (id % 20 === 0) {
				var newRunning = {};
				for (var usedId in running) {
					newRunning[usedId] = true;
				}
				running = newRunning;
			}
			// This is the internal step method which is called every few milliseconds
			var step = function step(virtual) {
				// Normalize virtual value
				var render = virtual !== true;
				// Get current time
				var now = time();
				// Verification is executed before next animation step
				if (!running[id] || verifyCallback && !verifyCallback(id)) {

					running[id] = null;
					completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, false);
					return;
				}
				// For the current rendering to apply let's update omitted steps in memory.
				// This is important to bring internal state variables up-to-date with progress in time.
				if (render) {
					var droppedFrames = Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;
					for (var j = 0; j < Math.min(droppedFrames, 4); j++) {
						step(true);
						dropCounter++;
					}
				}
				// Compute percent value
				if (duration) {
					percent = (now - start) / duration;
					if (percent > 1) {
						percent = 1;
					}
				}
				// Execute step callback, then...
				var value = easingMethod ? easingMethod(percent) : percent;
				if ((stepCallback(value, now, render) === false || percent === 1) && render) {
					running[id] = null;
					completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, percent === 1 || duration == null);
				} else if (render) {
					lastFrame = now;
					core.effect.Animate.requestAnimationFrame(step, root);
				}
			};
			// Mark as running
			running[id] = true;
			// Init first step
			core.effect.Animate.requestAnimationFrame(step, root);
			// Return unique animation ID
			return id;
		}
	};
})(window);
var _Scroller;
(function (window) {
	/**
  * A pure logic 'component' for 'virtual' scrolling/zooming.
  */
	_Scroller = function Scroller(callback, options) {
		this.__callback = callback;
		this.options = {
			/** Multiply or decrease scrolling speed **/
			speedMultiplier: 1,
			bouncing: true
		};
		for (var key in options) {
			this.options[key] = options[key];
		}
		var members = {
			__isAnimating: false,
			/** duration for animations triggered by scrollTo/zoomTo */
			animationDuration: 250,
			/* {Number} Scheduled left position (final position when animating) */
			__scheduledLeft: 0,
			/* {Number} Scheduled top position (final position when animating) */
			__scheduledTop: 0,
			/** {Number} Scroll position on x-axis */
			__scrollLeft: 0,
			/** {Number} Scroll position on y-axis */
			__scrollTop: 0,
			/**
    * Applies the scroll position to the content element
    *
    * @param left {Number} Left scroll position
    * @param top {Number} Top scroll position
    * @param animate {Boolean?false} Whether animation should be used to move to the new coordinates
    */
			__publish: function __publish(left, top, animate) {
				var self = this;
				// Remember whether we had an animation, then we try to continue based on the current "drive" of the animation
				var wasAnimating = self.__isAnimating;
				if (wasAnimating) {
					core.effect.Animate.stop(wasAnimating);
					self.__isAnimating = false;
				}
				if (animate) {
					self.__scheduledLeft = left;
					self.__scheduledTop = top;
					var oldLeft = self.__scrollLeft;
					var oldTop = self.__scrollTop;
					var diffLeft = left - oldLeft;
					var diffTop = top - oldTop;
					var step = function step(percent, now, render) {
						if (render) {
							self.__scrollLeft = oldLeft + diffLeft * percent;
							self.__scrollTop = oldTop + diffTop * percent;
							// Push values out
							if (self.__callback) {
								self.__callback(self.__scrollLeft, self.__scrollTop);
							}
						}
					};
					var verify = function verify(id) {
						return self.__isAnimating === id;
					};
					var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
						if (animationId === self.__isAnimating) {
							self.__isAnimating = false;
						}
						if (wasFinished && self.scrollingComplete) {
							self.scrollingComplete();
						}
					};
					// When continuing based on previous animation we choose an ease-out animation instead of ease-in-out
					self.__isAnimating = core.effect.Animate.start(step, verify, completed, self.animationDuration, wasAnimating ? easeOutCubic : easeInOutCubic);
				} else {
					self.__scheduledLeft = self.__scrollLeft = left;
					self.__scheduledTop = self.__scrollTop = top;
					// Push values out
					if (self.__callback) {
						self.__callback(left, top);
					}
				}
			},
			/**
    * Signalizes that pull-to-refresh is finished.
    */
			finishPullToRefresh: function finishPullToRefresh() {
				var self = this;
				self.__publish(0, 0, true);
			}
			/**
    * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
    **/
		};var easeOutCubic = function easeOutCubic(pos) {
			return Math.pow(pos - 1, 3) + 1;
		};
		/**
   * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
   **/
		var easeInOutCubic = function easeInOutCubic(pos) {
			if ((pos /= 0.5) < 1) {
				return 0.5 * Math.pow(pos, 3);
			}
			return 0.5 * (Math.pow(pos - 2, 3) + 2);
		};
		// Copy over members to prototype
		for (var key in members) {
			_Scroller.prototype[key] = members[key];
		}
	};
	// if (typeof module != 'undefined' && module.exports) {
	// 	module.exports = Scroller;
	// }
	// else if (typeof define == 'function' && define.amd) {
	// 	define(function() {
	// 		return Scroller;
	// 	});
	// }
	// else {
	// 	window.Scroller = Scroller;
	// }
})(window);
var HScrollerCore = _Scroller;

/* eslint-disable */
function getContentRender(content, dimension) {
	var global = window;

	var docStyle = document.documentElement.style;

	var engine;
	if (global.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
		engine = 'presto';
	} else if ('MozAppearance' in docStyle) {
		engine = 'gecko';
	} else if ('WebkitAppearance' in docStyle) {
		engine = 'webkit';
	} else if (typeof navigator.cpuClass === 'string') {
		engine = 'trident';
	}

	var vendorPrefix = {
		trident: 'ms',
		gecko: 'Moz',
		webkit: 'Webkit',
		presto: 'O'
	}[engine];

	var helperElem = document.createElement("div");
	document.body.insertBefore(helperElem, null);
	var undef;
	var perspectiveProperty = vendorPrefix + "Perspective";
	var transformProperty = vendorPrefix + "Transform";
	if (dimension === 2) {
		return function (left, top) {
			content.style[transformProperty] = 'translate(' + -left + 'px,' + -top + 'px)';
		};
	} else if (dimension === 3) {
		return function (left, top) {
			content.style[transformProperty] = 'translate3d(' + -left + 'px,' + -top + 'px,0)';
		};
	} else if (helperElem.style[perspectiveProperty] !== undef) {
		return function (left, top) {
			content.style[transformProperty] = 'translate3d(' + -left + 'px,' + -top + 'px,0)';
		};
	} else if (helperElem.style[transformProperty] !== undef) {
		return function (left, top) {
			content.style[transformProperty] = 'translate(' + -left + 'px,' + -top + 'px)';
		};
	}
	// else {
	// 	return function(left, top,zoom) {
	// 		content.style.marginLeft = left ? (-left / zoom) + 'px' : '';
	// 		content.style.marginTop = top ? (-top / zoom) + 'px' : '';
	// 		content.style.zoom = zoom || '';
	// 	};
	// }
}

// status of pull down
var STATUS_ERROR = -1;
var STATUS_START = 0;
var STATUS_READY = 1;
var STATUS_REFRESH = 2;
// labels of pull down
var LABELS = ['数据异常', '下拉刷新数据', '松开刷新数据', '数据刷新中...'];
var PULL_DOWN_HEIGHT = 67;

var vscroll = function () {
  /**
   * Creates an instance of Vscroll.
   * @param {Element|Element[]} $initDom 需要初始化的dom
   * @param {Object} options 设置
   * @memberof Vscroll
   */
  function vscroll($initDom, options) {
    classCallCheck(this, vscroll);
    this.$el = null;
    this.pullDownHeader = null;
    this.icon = null;
    this.scroller = null;
    this.__initType = 'default';
    this.$initDom = null;
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
    this.isScrollToBottom = false;
    this.__clientWidth = 0;
    this.__clientHeight = 0;
    this.__contentWidth = 0;
    this.__contentHeight = 0;
    this.maxScrollLeft = 0;
    this.maxScrollTop = 0;
    this.onPullRefreshCallback = null;
    this.onTouchDirectionCallback = null;
    this.onScrollChangeCallback = null;
    this.isDisabled = false;
    this.isScrollActioned = false;

    if (!$initDom) {
      throw new Error('no dom\'s class named \'' + $initDom.className);
    }
    this.__initType = options.type;
    this.$initDom = $initDom;
    this.initHtmlTemp();
    this.$el = document.querySelector('.main-content');
    if (options.type === 'loadmore' || options.type === 'default') {
      this.$el.querySelector('.load-more-content--lable').innerHTML = this.config.loadMoreLable; // 初始化文案
    }
    this.$pullDom = document.querySelector('.pull-down-container');
    this.onPullRefreshCallback = options.onPullRefreshCallback;
    this.onTouchDirectionCallback = options.onTouchDirectionCallback;
    this.onScrollChangeCallback = options.onScrollChangeCallback;
    this.pullDownHeader = this.$el.querySelector('.pull-down-header');
    if (this.pullDownHeader) {
      this.icon = this.pullDownHeader.querySelector('.pull-down-content--icon');
    }
    var render = getContentRender(this.$pullDom);
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

  vscroll.prototype.initHtmlTemp = function initHtmlTemp() {
    var htmlTplDefault = '<div class="main-content">' + '<div class="pull-down-container">' + '<div class="pull-down-header">' + '<div class="pull-down-content">' + '<i class="pull-down-content--icon"></i>' + '<span class="pull-down-content--label"></span>' + '</div>' + '</div>' + '<div class="load-content">' + '<i class="pull-down-content--icon pull-down-refresh"></i>' + '<span class="pull-down-content--label load-more-content--lable"></span>' + '</div>' + '</div>' + '</div>';
    var htmlTplWithoutLoad = '<div class="main-content">' + '<div class="pull-down-container">' + '<div class="pull-down-header">' + '<div class="pull-down-content">' + '<i class="pull-down-content--icon"></i>' + '<span class="pull-down-content--label"></span>' + '</div>' + '</div>' + '</div>' + '</div>';
    var htmlTpl = void 0;
    if (this.__initType === 'pull') {
      htmlTpl = htmlTplWithoutLoad;
    } else {
      htmlTpl = htmlTplDefault;
    }
    // 兼容没有class的情况
    if (document.querySelector('.' + this.$initDom.className).parentNode.className === '') {
      var tag = document.querySelector('.' + this.$initDom.className).parentNode.tagName.toLowerCase();
      document.querySelectorAll(tag)[0].innerHTML = htmlTpl;
    } else {
      var parentNode = document.querySelector('.' + this.$initDom.className).parentNode.className;
      document.querySelector('.' + parentNode).innerHTML = htmlTpl;
    }
    // 将原本的内容插入到load-content之前
    var pullDownContainer = document.querySelector('.pull-down-container');
    var loadContentNode = document.querySelector('.load-content');
    pullDownContainer.insertBefore(this.$initDom, loadContentNode);
  };

  vscroll.prototype.label = function label() {
    // label of pull down
    if (this.pullDown.status === STATUS_ERROR) {
      return this.pullDown.msg;
    }
    var customLabels = this.customLabels();
    return customLabels[this.pullDown.status + 1];
  };

  vscroll.prototype.customLabels = function customLabels() {
    var errorLabel = this.config.errorLabel || LABELS[0];
    var startLabel = this.config.startLabel || LABELS[1];
    var readyLaebl = this.config.readyLabel || LABELS[2];
    var loadingLabel = this.config.loadingLabel || LABELS[3];
    return [errorLabel, startLabel, readyLaebl, loadingLabel];
  };

  vscroll.prototype.iconClass = function iconClass() {
    // icon of pull down
    if (this.pullDown.status === STATUS_REFRESH) {
      return 'pull-down-refresh';
    } else if (this.pullDown.status === STATUS_ERROR) {
      return 'pull-down-error';
    }
    return '';
  };

  vscroll.prototype.resetPullDown = function resetPullDown() {
    this.pullDown.status = STATUS_START;
    this.$el.querySelector('.pull-down-content--icon').className = 'pull-down-content--icon ' + this.iconClass();
    this.$el.querySelector('.pull-down-content--label').innerHTML = this.label();
    this.scroller.finishPullToRefresh();
    this.pullDeactiveCallback();
  };

  vscroll.prototype.resize = function resize() {
    var container = this.$el;
    this.setDimensions(container.clientWidth, container.clientHeight, this.$el.offsetWidth, this.$el.offsetHeight);
  };

  vscroll.prototype.setEnablePullDown = function setEnablePullDown(isEnable) {
    this.enablePullDown = isEnable;
  };

  vscroll.prototype.setTouchTransform = function setTouchTransform(isTouchTransform) {
    this.isTouchTransform = isTouchTransform;
  };

  vscroll.prototype.setDimensions = function setDimensions(clientWidth, clientHeight, contentWidth, contentHeight) {
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
  };
  /**
   * Recomputes scroll minimum values based on client dimensions and content dimensions.
   */


  vscroll.prototype.__computeScrollMax = function __computeScrollMax() {
    this.maxScrollLeft = Math.max(this.__contentWidth - this.__clientWidth, 0);
    this.maxScrollTop = Math.max(this.__contentHeight - this.__clientHeight, 0);
  };

  vscroll.prototype.doScroll = function doScroll() {
    this.currentScrollTop = this.$el.scrollTop || 0;
    // if (this.currentScrollTop + this.__clientHeight >=
    // (document.querySelector('.' + this.$initDom.className).offsetHeight)) {
    // 	console.log('即将到达底部');
    // 当初始化类型为loadmore才执行
    if (this.__initType === 'loadmore' || this.__initType === 'default') {
      if (this.currentScrollTop + this.__clientHeight === document.querySelector('.' + this.$initDom.className).offsetHeight + document.querySelector('.load-content').offsetHeight) {
        // console.log('滚动到底部');
        this.isScrollToBottom = true;
        if (this.onScrollChangeCallback) {
          this.onScrollChangeCallback(this.direction, this.currentScrollTop, this.isScrollToBottom);
        }
      }
    }
    // }
    if (this.onTouchDirectionCallback && this.direction !== 1 && this.currentScrollTop <= 15) {
      this.onTouchDirectionCallback(this.direction, this.currentScrollTop);
    }
  };

  vscroll.prototype.doTouchStart = function doTouchStart(e) {
    if (this.isDisabled) {
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
  };

  vscroll.prototype.doTouchMove = function doTouchMove(e) {
    if (this.isDisabled) {
      e = e || window.event;
      e.preventDefault();
      e.returnValue = false;
      return;
    }
    this.currentScrollTop = this.$el.scrollTop || 0;
    var distance = e.touches[0].pageY - this.touchPosition.startY;
    var moveDistance = e.touches[0].pageY - this.touchPosition.moveStartY;
    var moveY = e.touches[0].pageY - this.touchPosition.__lastTouchTop;
    var currentDirection = moveY < 0 ? 1 : -1; //1:上滑  -1：下滑
    if (this.onScrollChangeCallback && currentDirection === -1) {
      this.onScrollChangeCallback(currentDirection, this.currentScrollTop);
    }
    if (this.onTouchDirectionCallback && window.navigator.userAgent.toLowerCase().indexOf('ylna') > -2 && this.getAndroidVersion() && this.getAndroidVersion() < 5) {
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
    // this.currentScrollTop = this.$el.scrollTop || 0;
    // console.log(this.currentScrollTop);
    this.touchPosition.__lastTouchTop = e.touches[0].pageY;
    if (distance < this.scrollTop) {
      //小于滚动距离的时候系统行为
      return;
    }
    if (!this.enablePullDown) {
      //不允许下拉
      return;
    }
    // if (this.direction === -1 && this.currentScrollTop <= 0) {
    //     return false;
    // }
    e.preventDefault();
    e.stopPropagation();
    this.pullActiveCallback();
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
  };

  vscroll.prototype.doTouchEnd = function doTouchEnd() {
    // reset icon rotate
    if (this.icon) {
      this.icon.style.transform = '';
    }
    // if distance is bigger than 60
    if (this.touchPosition.distance > PULL_DOWN_HEIGHT) {
      this.pullDown.status = STATUS_REFRESH;
      this.$el.querySelector('.pull-down-content--icon').className = 'pull-down-content--icon ' + this.iconClass();
      this.$el.querySelector('.pull-down-content--label').innerHTML = this.label();
      this.pullReadyCallback(); //todo: 回弹后改变动画
      // trigger refresh callback
      if (this.onPullRefreshCallback && typeof this.onPullRefreshCallback === 'function') {
        this.onPullRefreshCallback(this.finishRefresh.bind(this));
        this.scroller.__publish(0, -PULL_DOWN_HEIGHT, true);
        this.isDisabled = true;
      } else {
        this.resetPullDown();
        console.warn('please use :on-refresh to pass onPullRefreshCallback callback');
      }
    } else {
      this.resetPullDown();
    }
    // reset touchPosition
    this.touchPosition.distance = 0;
  };

  vscroll.prototype.finishRefresh = function finishRefresh(done) {
    var _this = this;

    if (done) {
      this.resetPullDown();
      this.isDisabled = false;
    } else {
      // show error and hide the pull down after 1 second
      this.pullDown.msg = this.customLabels[0];
      this.pullDown.status = STATUS_ERROR;
      this.$el.querySelector('.pull-down-content--icon').className = 'pull-down-content--icon ' + this.iconClass();
      this.$el.querySelector('.pull-down-content--label').innerHTML = this.label();
      setTimeout(function () {
        _this.resetPullDown();
      }, 1000);
    }
  };

  vscroll.prototype.formatNumber = function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  };

  vscroll.prototype.getAndroidVersion = function getAndroidVersion() {
    var ua = window.navigator.userAgent.toLowerCase();
    var match = ua.match(/android\s([0-9\.]*)/); //eslint-disable-line
    return match ? parseFloat(match[1]) : false;
  };

  vscroll.prototype.pullActiveCallback = function pullActiveCallback() {
    // this.spinnerAniamte(0);
  };

  vscroll.prototype.pullReadyCallback = function pullReadyCallback() {
    // this.spinnerAniamte(1);
  };

  vscroll.prototype.pullDeactiveCallback = function pullDeactiveCallback() {
    if (this.pullTimer) {
      clearInterval(this.pullTimer);
      this.pullTimer = undefined;
    }
    if (this.loadingTimer) {
      clearInterval(this.loadingTimer);
      this.loadingTimer = undefined;
    }
  };

  return vscroll;
}();

function getJSON(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText, this);
        } else {
          var resJson = { code: this.status, response: this.response };
          reject(resJson, this);
        }
      }
    };

    xhr.send();
  });
}
function postJSON(url, data) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText), this);
        } else {
          var resJson = { code: this.status, response: this.response };
          reject(resJson, this);
        }
      }
    };

    xhr.send(JSON.stringify(data));
  });
}
function loadScript(url) {
  return new Promise(function (resolve) {
    var script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    document.querySelector('head').insertAdjacentElement('beforeend', script);
    script.addEventListener('load', function (e) {
      resolve(e);
    });
  });
}
var ajax = {
  getJSON: getJSON,
  postJSON: postJSON,
  loadScript: loadScript
};

// import lrz from './lrz';
var ua$1 = window.navigator.userAgent.toLowerCase();
var isWnl$1 = /wnl/i.test(ua$1);
var isAndroid$1 = /android|htc/i.test(ua$1) || (window.navigator.platform + '').match(/linux/i);
var tokenUrl = 'https://msg.51wnl.com/api/Active/qintoken';
/**
 * 图片上传组件
 * @export imgupload
 * @class imgupload
 */

var imgupload = function () {
  /**
   * Creates an instance of imgupload.
   * @param {Element} $el input输入框元素
   * @param {Object} options 配置回调
   * @memberof imgupload
   */
  function imgupload($el, options) {
    classCallCheck(this, imgupload);
    this.$el = null;
    this.uploadCallback = null;

    this.$el = $el;
    this.uploadCallback = options.uploadCallback;
    ajax.loadScript('//c.51wnl.com/wnl_feedback_new/js/lrz.all.bundle.js').then(this.getDeviceType());
  }

  imgupload.prototype.getDeviceType = function getDeviceType() {
    console.log(window.lrz);
    return (isAndroid$1 && isWnl$1) === true ? this.dealWithAndroidWnl() : this.dealWithOther();
  };

  imgupload.prototype.dealWithAndroidWnl = function dealWithAndroidWnl() {
    var _this = this;

    this.$el.onclick = function (event) {
      event.preventDefault();
      console.log('protocol://getfilecode#filecodecallback');
      window.location.href = 'protocol://getfilecode#filecodecallback';
    };
    window.filecodecallback = function (data) {
      _this.getImgSrc(data);
    };
  };

  imgupload.prototype.getImgSrc = function getImgSrc(base64) {
    var _this2 = this;

    ajax.getJSON(tokenUrl).then(function (res) {
      var token = JSON.parse(res).token;
      _this2.uptoQiniu(token, base64);
    }).catch(function (err) {
      console.log(err);
    });
  };

  imgupload.prototype.dealWithOther = function dealWithOther() {
    var _this3 = this;

    this.$el.addEventListener('change', function () {
      lrz(_this3.$el.files[0], { //eslint-disable-line
        width: 512,
        quality: 1
      }).then(function (rst) {
        // 处理成功会执行
        // console.log(rst);
        var base64 = rst.base64.substr(rst.base64.indexOf('base64,') + 7);
        _this3.getImgSrc(base64);
      }).catch(function (err) {
        // 处理失败会执行
        console.log(err);
      }).always(function () {
        // 不管是成功失败，都会执行
      });
    });
  };
  /**
   *
   * @param {string} token //获取的token响应
   * @param {string} base64 // 获取到图片的base64值
   * @memberof imgUpload
   */


  imgupload.prototype.uptoQiniu = function uptoQiniu(token, base64) {
    var _this4 = this;

    var url = '//upload.qiniu.com/putb64/-1'; //非华东空间需要根据注意事项 1 修改上传域名
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        var resData = JSON.parse(xhr.responseText);
        var resultImg = new Image();
        resultImg.src = 'https://qiniu.image.cq-wnl.com/' + resData.key;
        resultImg.onload = function () {
          //执行操作
          if (_this4.uploadCallback) {
            _this4.uploadCallback(resultImg.src);
          }
        };
      }
    };
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.setRequestHeader('Authorization', 'UpToken ' + token);
    xhr.send(base64);
  };

  return imgupload;
}();

export { base64, calendar, util, vscroll, imgupload };
