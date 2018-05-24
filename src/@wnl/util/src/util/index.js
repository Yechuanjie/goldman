// device
const ua = window.navigator.userAgent.toLowerCase();
/**
 * 获得ios的系统版本
 */
function GetIOSVersion() {
  if (window.MSStream) {
    return false;
  }
  let match = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
  if (match !== undefined && match !== null) {
    let version = [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3] || 0, 10)];
    return parseFloat(version.join('.'));
  }
  return false;
}
/**
 * 获得安卓的系统版本
 */
function getAndroidVersion() {
  //eslint-disable-next-line
  let match = ua.match(/android\s([0-9\.]*)/);
  return match ? parseFloat(match[1]) : false;
}
/**
 * 是否在微信浏览器环境中
 */
const isWeixin = /micromessenger/i.test(ua);
/**
 * 是否在小程序webview环境中
 */
let isMiniprogram = false;
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
const isWnl = /wnl/i.test(ua);
/**
 * 万年历app版本号，整数值，如：457
 */
const appVersion = parseInt(ua.substr(ua.indexOf('wnl ') + 4, 5).replace(/\./g, ''));
/**
 * 万年历app版本字符，如：4.5.7
 */
const appVersionString = ua.substr(ua.indexOf('wnl ') + 4, 5);
/**
 * ios的系统版本
 */
const iOSVersion = GetIOSVersion();
/**
 * 安卓的系统版本
 */
const androidVersion = getAndroidVersion();
/**
 * 是否安卓系统
 */
const isAndroid = /android|htc/i.test(ua) || (window.navigator.platform + '').match(/linux/i);
/**
 * 是否ipad设备
 */
const isIPad = !isAndroid && /iPad/i.test(ua);
/**
 * 是否iphone设备
 */
const isIPhone = !isAndroid && /iPod|iPhone/i.test(ua);
/**
 * 是否iphoneX
 */
const isIphoneX = isIPhone && window.innerWidth === 375 && window.devicePixelRatio === 3;
/**
 * 是否ios系统
 */
const isIOS = isIPad || isIPhone;

/**
 * 将json对象转换成url的查询字符串：?a=5&b=2
 *
 * @param {Object} json 需要转换的json对象:{a:5,b:2}
 * @returns 转换成url的查询字符串
 */
function jsonToQueryString(json) {
  return (
    '?' +
    Object.keys(json)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(json[key]))
      .join('&')
  );
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
  let dateFormateObj = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  Object.keys(dateFormateObj).forEach(key => {
    if (new RegExp('(' + key + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? dateFormateObj[key]
          : ('00' + dateFormateObj[key]).substr(('' + dateFormateObj[key]).length)
      );
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
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r = window.location.search.substr(1).match(reg) || window.location.hash.substr(1).match(reg);
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
  if (!source || typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone');
  }
  let targetObj = source.constructor === Array ? [] : {};
  for (let keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
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
  let timer = null;
  let previous = null;
  return function(args) {
    let now = +new Date();
    if (!previous) previous = now;
    if (atleast && now - previous > atleast) {
      fn(args);
      // 重置上一次开始时间为本次结束时间
      previous = now;
      clearTimeout(timer);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
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
  let starttimes = startDate.getTime();
  let endtimes = endDate.getTime();
  let intervalTime = starttimes - endtimes; //两个日期相差的毫秒数 一天86400000毫秒
  let InterDays = Math.floor(intervalTime.toFixed(2) / 86400000); //加1，是让同一天的两个日期返回一天
  return InterDays;
}
/**
 * 根据间隔的天数获取描述
 * @param {int} distance 间隔的天数
 * @returns 天数描述
 */
function getDayDistanceString(distance) {
  let dayDistance = '';
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
    let testElem = document.createElement('div');
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
  return obj !== null && typeof obj === 'object';
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
  let appPackgeName = appInfo.appPackgeName;
  let iosSchema = appInfo.iosSchema;
  let apkLink = appInfo.apkLink;
  let thirdPartyLink = appInfo.thirdPartyLink;
  let itunesLink = appInfo.itunesLink;

  if (isAndroid) {
    if (isWnl) {
      if (window.ylwindow && appPackgeName) {
        let isInstalled = window.ylwindow.checkInstall(appPackgeName);
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
        window.appDidInstalled = function(retObj) {
          window.location.href = parseInt(retObj.value) ? iosSchema : itunesLink;
          // return;
        };
        setTimeout(() => {
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
  let inputDom = outDom.children[0];
  if (isIOS && !isIphoneX) {
    // ios11.x, 在QQ和safari下，页面会被顶起键盘的高度; 是由下面的适配导致的
    if ((/ qq/i.test(ua) || /safari/i.test(ua)) && iOSVersion > 11) {
      return;
    }
    setInterval(() => {
      document.body.scrollTop = document.body.scrollHeight;
    }, 100);
  }
  inputDom.onfocus = () => {
    if (isIphoneX) {
      outDom.style.bottom = '40px';
    }
  };
  inputDom.onblur = () => {
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
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  let uuidList = [];
  radix = radix || chars.length;
  if (len) {
    // Compact form
    for (let i = 0; i < len; i += 1) {
      uuidList[i] = chars[0 | (Math.random() * radix)]; //eslint-disable-line
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
    for (let i = 0; i < 36; i += 1) {
      if (!uuidList[i]) {
        // rfc4122, version 4 form
        let r = 0 | (Math.random() * 16); //eslint-disable-line
        uuidList[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]; //eslint-disable-line
      }
    }
  }
  return uuidList.join('');
}

const util = {
  isWnl,
  isWeixin,
  isMiniprogram,
  isIOS,
  isAndroid,
  isObject,
  isEmptyObject,
  isNum,
  appVersion,
  appVersionString,
  iOSVersion,
  androidVersion,
  isIphoneX,
  jsonToQueryString,
  formatNumber,
  formatDate,
  str2Int,
  deepCopy,
  getQueryValue,
  throttle,
  getDayDistance,
  getDayDistanceString,
  setHairlines,
  // infoReport,
  checkAppInstall,
  fitInputBottom,
  uuid
};

export default util;
