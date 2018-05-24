/*eslint-disable*/
/**
 * created by liuyu january 05 2018
 */
getPromise();
var jweixinUrl = 'https://res.wx.qq.com/open/js/jweixin-1.2.0.js';
var wxParams = {};
function loadScript(url) {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    document.querySelector('head').insertAdjacentElement('beforeend', script);
    script.addEventListener('load', e => {
      resolve(e);
    });
  });
}

loadScript(jweixinUrl).then(e => {
  return window.promise
    .get('//b.cqyouloft.com/interface/API/weixinhandler.ashx', {
      requesturl: location.href
      // appId: 'wxf4d12340380e3252',
    })
    .then((error, text, xhr) => {
      var result = JSON.parse(text);
      console.log('result', result)
      wx.config({
        /**
         * 开启调试模式,调用的所有api的返回值会在客户端alert出来，
         * 若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，
         * 仅在pc端时才会打印。
         */
        debug: false,
        appId: result.appid, // 必填，公众号的唯一标识
        timestamp: result.timestamp, // 必填，生成签名的时间戳
        nonceStr: result.nonceStr, // 必填，生成签名的随机串
        signature: result.signature, // 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
      wx.ready(function () {
        console.log('wxshare is ready');
        setWxParams(wxParams);
      });
      // console.log(wx)
      wx.error(function (e) {
        // alert(JSON.stringify(e));
        console.error(e);
      });
    });
});

function setWxParams(params) {
  wx.onMenuShareTimeline({
    title: params.title, // 分享标题
    link: params.url, // 分享链接
    imgUrl: params.imgUrl, // 分享图标
    success: function (e) {
      // 用户确认分享后执行的回调函数
      typeof params.callback === 'function' && params.callback(e);
    },
    cancel: function (e) {
      typeof params.callback === 'function' && params.callback(e);
      // 用户取消分享后执行的回调函数
    }
  });
  //获取“分享给朋友”按钮点击状态及自定义分享内容接口
  wx.onMenuShareAppMessage({
    title: params.title, // 分享标题
    desc: params.text, // 分享描述
    link: params.url, // 分享链接
    imgUrl: params.imgUrl, // 分享图标
    success: function (e) {
      // 用户确认分享后执行的回调函数
      typeof params.callback === 'function' && params.callback(e);
    },
    cancel: function (e) {
      typeof params.callback === 'function' && params.callback(e);
      // 用户取消分享后执行的回调函数
    }
  });
  //获取“分享到QQ”按钮点击状态及自定义分享内容接口
  wx.onMenuShareQQ({
    title: params.title, // 分享标题
    desc: params.text, // 分享描述
    link: params.url, // 分享链接
    imgUrl: params.imgUrl, // 分享图标
    success: function (e) {
      // 用户确认分享后执行的回调函数
      typeof params.callback === 'function' && params.callback(e);
    },
    cancel: function (e) {
      typeof params.callback === 'function' && params.callback(e);
      // 用户取消分享后执行的回调函数
    }
  });
}

function setShareParams(params) {
  wxParams = params;
  if (window.wx) {
    wx.ready(function () {
      console.log('wxshare is ready');
      setWxParams(wxParams);
    });
  }
}

function getPromise() {
  (function (exports) {
    function Promise() {
      this._callbacks = [];
    }

    Promise.prototype.then = function (func, context) {
      var p;
      if (this._isdone) {
        p = func.apply(context, this.result);
      } else {
        p = new Promise();
        this._callbacks.push(function () {
          var res = func.apply(context, arguments);
          if (res && typeof res.then === 'function') res.then(p.done, p);
        });
      }
      return p;
    };

    Promise.prototype.done = function () {
      this.result = arguments;
      this._isdone = true;
      for (var i = 0; i < this._callbacks.length; i++) {
        this._callbacks[i].apply(null, arguments);
      }
      this._callbacks = [];
    };

    function join(promises) {
      var p = new Promise();
      var results = [];

      if (!promises || !promises.length) {
        p.done(results);
        return p;
      }

      var numdone = 0;
      var total = promises.length;

      function notifier(i) {
        return function () {
          numdone += 1;
          results[i] = Array.prototype.slice.call(arguments);
          if (numdone === total) {
            p.done(results);
          }
        };
      }

      for (var i = 0; i < total; i++) {
        promises[i].then(notifier(i));
      }

      return p;
    }

    function chain(funcs, args) {
      var p = new Promise();
      if (funcs.length === 0) {
        p.done.apply(p, args);
      } else {
        funcs[0].apply(null, args).then(function () {
          funcs.splice(0, 1);
          chain(funcs, arguments).then(function () {
            p.done.apply(p, arguments);
          });
        });
      }
      return p;
    }

    /*
		 * AJAX requests
		 */

    function _encode(data) {
      var payload = '';
      if (typeof data === 'string') {
        payload = data;
      } else {
        var e = encodeURIComponent;
        var params = [];

        for (var k in data) {
          if (data.hasOwnProperty(k)) {
            params.push(e(k) + '=' + e(data[k]));
          }
        }
        payload = params.join('&');
      }
      return payload;
    }

    function new_xhr() {
      var xhr;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        try {
          xhr = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
          xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
      }
      return xhr;
    }

    function ajax(method, url, data, headers) {
      var p = new Promise();
      var xhr, payload;
      data = data || {};
      headers = headers || {};

      try {
        xhr = new_xhr();
      } catch (e) {
        p.done(promise.ENOXHR, '');
        return p;
      }

      payload = _encode(data);
      if (method === 'GET' && payload) {
        url += '?' + payload;
        payload = null;
      }

      xhr.open(method, url);

      var content_type = 'application/x-www-form-urlencoded';
      for (var h in headers) {
        if (headers.hasOwnProperty(h)) {
          if (h.toLowerCase() === 'content-type') content_type = headers[h];
          else xhr.setRequestHeader(h, headers[h]);
        }
      }
      xhr.setRequestHeader('Content-type', content_type);

      function onTimeout() {
        xhr.abort();
        p.done(promise.ETIMEOUT, '', xhr);
      }

      var timeout = promise.ajaxTimeout;
      if (timeout) {
        var tid = setTimeout(onTimeout, timeout);
      }

      xhr.onreadystatechange = function () {
        if (timeout) {
          clearTimeout(tid);
        }
        if (xhr.readyState === 4) {
          var err = !xhr.status || ((xhr.status < 200 || xhr.status >= 300) && xhr.status !== 304);
          p.done(err, xhr.responseText, xhr);
        }
      };

      xhr.send(payload);
      return p;
    }

    function _ajaxer(method) {
      return function (url, data, headers) {
        return ajax(method, url, data, headers);
      };
    }

    var promise = {
      Promise: Promise,
      join: join,
      chain: chain,
      ajax: ajax,
      get: _ajaxer('GET'),
      post: _ajaxer('POST'),
      put: _ajaxer('PUT'),
      del: _ajaxer('DELETE'),

      /* Error codes */
      ENOXHR: 1,
      ETIMEOUT: 2,

      /**
       * Configuration parameter: time in milliseconds after which a
       * pending AJAX request is considered unresponsive and is
       * aborted. Useful to deal with bad connectivity (e.g. on a
       * mobile network). A 0 value disables AJAX timeouts.
       *
       * Aborted requests resolve the promise with a ETIMEOUT error
       * code.
       */
      ajaxTimeout: 0
    };

    if (typeof define === 'function' && define.amd) {
      /* AMD support */
      define(function () {
        return promise;
      });
    } else {
      exports.promise = promise;
    }
  })(window);
}
export default setShareParams;
