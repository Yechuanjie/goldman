/*eslint-disable*/
import './share.css';
/*
万年历客户端分享js库
2016/11/15 create by liuyu
update Wed Oct 11 2017 liuyu
*/
(function () {
  "use strict";
  //设备判断
  let device = {},
    ua = window.navigator.userAgent,
    android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
    ios = ua.match(/(iPhone\sOS)\s([\d_]+)/);
  device.ios = device.android = false;

  if (android) {
    device.android = true;
  }

  if (ios) {
    device.ios = true;
  }

  device.weixin = /MicroMessenger/i.test(ua);
  device.wnl = /wnl/i.test(ua);

  let appVersion = parseInt(
    ua.split(' ').pop().replace(/\./g, '')
  );
  let offsetHeight = '';
  /*==================================================================
    分享参数
    ===================================================================*/
  let args = {};

  let params = {
    //是否直接发送分享信息，默认为true
    direct: true,
    //发送分享信息后的回调函数名
    callback: 'shareCallback',
    //分享平台名
    platform: '',
    //分享数据对象
    shareData: {}
  };
  /*==================================================================
    image设为0，并且不填imageURL的情况下，客户端只分享text设置的文字，
    image设为0，并设置了imageURL地址，客户端分享的图标为imageURL设置的图片
    image设为1，分享的链接图标为系统截图，并且imageURL参数无效
    ===================================================================*/
  let iosLegacyParams = {
    //分享标题
    pureText: '',
    //截图或者使用自定义图片
    image: '0',
    // 链接地址
    url: '',
    //自定义图片地址
    imageURL: ''
  };

  let androidLegacyParams = {
    //分享标题
    title: args.title || '',
    //分享内容
    text: args.text || '',
    //截图或者使用自定义图片
    image: '0',
    // 链接地址
    targetUrl: args.url || '',
    //自定义图片地址
    imageURL: args.image || ''
  };
  //判断参数是否是对象
  function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  }
  //设置分享参数
  function setParams(param, platform) {
    let shareData = {};
    let perload = false;
    if (param.image === undefined || param.image === null || param.image === '' || param.image === 'shot') {
      perload = false;
    } else {
      perload = true;
    }
    shareData[platform] = platform;
    shareData[platform] = {
      //分享标题
      title: param.title,
      //分享文本
      text: param.text,
      //分享链接图标或者图片
      image: param.image,
      //分享链接
      url: param.url,
      //是否预加载
      preload: perload
    };
    params.shareData = shareData;
    params.platform = platform;
  }
  //平台数组
  window.wnlShare = {
    version: '1.2.0',
    appVersion,
    device,
    callback: 'shareCallback',
    //设置旧版分享数据
    setShareData(param) {
      if (isObject(param)) {
        if (device.ios) {
          iosLegacyParams.pureText = param.title;
          iosLegacyParams.url = param.url;
          iosLegacyParams.imageURL = param.image;
        } else {
          androidLegacyParams.title = param.title;
          androidLegacyParams.text = param.text;
          androidLegacyParams.targetUrl = param.url;
          androidLegacyParams.imageURL = param.image;
        }
        args = param;
      } else {
        throw new Error('param is not an object');
      }
    },
    /*==================================================================
        设置分享平台和分享参数
        不设置image地址，默认分享图标为万年历图标
        设置image为shot，默认分享图标为屏幕截图
        设置image参数为shot，不设置title和text,默认直接分享屏幕截图
        设置image参数为链接地址，不设置title和text,默认直接分享链接图片
        ===================================================================*/
    //设置只分享图片
    shareImage(platform, param) {
      // let shareData = {},
      // 	perload = false;
      // if (param === undefined || param === null || param === '' || param === 'shot') {
      // 	perload = false;
      // } else {
      // 	perload = true;
      // }
      // shareData[platform] = {
      // 	image: param,
      // 	preload: perload
      // };
      // shareObject = new ShareObject(wnlShare.callback, platform, shareData);
      showSharePlatform();
    },
    //显示分享组件
    showSharePlatform() {
      showSharePlatform();
    },
    //设置直接分享
    singleShare(platform) {
      setParams(args, platform);
      commitShare();
    }
  };
  //向客户端发送分享请求
  window.appCallback_share = function () {
    // (device.iso && appVersion < 450) || (device.android && appVersion < 451)
    if ((device.iso && appVersion < 450) || (device.android && appVersion < 451)) {
      try {
        if (window.ylwindow) {
          ylwindow.reportHasShare(true);
          location.href = 'protocol://share:' + encodeURI(JSON.stringify(androidLegacyParams));
        } else {
          location.href = 'protocol://share#' + encodeURI(JSON.stringify(iosLegacyParams));
        }
      } catch (e) { }
      return 1;
    } else {
      if (window.ylwindow) {
        ylwindow.reportHasShare(true);
        showSharePlatform();
      } else {
        showSharePlatform();
      }
    }
    return 1;
  };
  //新版向客户端发送分享请求
  function commitShare() {
    try {
      if (window.ylwindow) {
        ylwindow.reportHasShare(true);
        window.location.href = 'protocol://share#' + encodeURIComponent(JSON.stringify(params));
        hiddenPlatForm(offsetHeight);
      } else {
        window.location.href = 'protocol://share#' + encodeURIComponent(JSON.stringify(params));
        hiddenPlatForm(offsetHeight);
        return 1;
      }
    } catch (e) {
      alert(e);
    }
    return 1;
  }

  //添加分享组件
  window.addEventListener('load', function () {
    insertShareElement();
  });

  function insertShareElement() {
    let node = '<div class="wnlshare-platform">\
        <div class="wnlshare-mask"></div>\
            <div class="wnlshare-wrap">\
                <div class="wnlshare-list">' + getShareItem() + '</div>\
                <div class="wnlshare-line"></div>\
                <div class="wnlshare-button">取消分享</div>\
            </div>\
		</div>';
    document.body.insertAdjacentHTML('beforeend', node);

    _$('.wnlshare-list').addEventListener('click', function (e) {
      if (e.target.dataset.name) {
        setParams(args, e.target.dataset.name);
        // console.log(params)
        commitShare();
      }
    });

    let platformListWrap = _$('.wnlshare-wrap');
    let platformMask = _$('.wnlshare-mask');
    let platformBtn = _$('.wnlshare-button');
    offsetHeight = platformListWrap.getBoundingClientRect().height;
    platformListWrap.style.transform = 'translateY(' + offsetHeight + 'px)';
    platformMask.addEventListener('click', function () {
      hiddenPlatForm(offsetHeight);
    });

    platformBtn.addEventListener('click', function () {
      hiddenPlatForm(offsetHeight);
    });
  }

  function getShareItem() {
    let html = '';
    let list = [
      { name: 'weixin', text: '微信好友' },
      { name: 'weixin_circle', text: '微信朋友圈' },
      { name: 'qq', text: 'QQ' },
      { name: 'qzone', text: 'QQ空间' },
      { name: 'sina', text: '新浪微博' }
    ];
    list.forEach(function (v, k) {
      html += '<div class="wnlshare-item wnlshare-' + v.name + '">\
                <div class="wnlshare-item-icon" data-name="' + v.name + '"></div>\
                <div class="wnlshare-item-name">' + v.text + '</div>\
              </div>';
    });
    return html;
  }
  //显示分享组件
  function showSharePlatform() {
    _$('.wnlshare-platform').style.visibility = 'visible';
    _$('.wnlshare-wrap').style.transform = 'translateY(0)';
    _$('.wnlshare-mask').style.opacity = '0.3';
  }

  function hiddenPlatForm(offsetHeight) {
    _$('.wnlshare-platform').style.visibility = 'hidden';
    _$('.wnlshare-wrap').style.transform = 'translateY(' + offsetHeight + 'px)';
    _$('.wnlshare-mask').style.opacity = '0';
  }

  function _$(element) {
    let el = document.querySelectorAll(element);
    return el.length > 1 ? el : el[0];
  }
})();
/*==================
模块导入支持
====================*/
export default window.wnlShare;
