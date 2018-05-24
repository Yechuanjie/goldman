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

import { util, calendar } from '@wnl/util';

__$styleInject("html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{line-height:1.6;font-family:-apple-system,SF Pro SC,HanHei SC,SF Pro Text,Myriad Set Pro,SF Pro Icons,Apple Legacy Chevron,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif}*{margin:0;padding:0}a img{border:0}a{text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.hidden{display:none!important}.wnlui_picker{position:fixed;width:100%;left:0;bottom:0;z-index:3;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.wnlui_picker__hd{display:-webkit-box;display:-webkit-flex;display:flex;padding:9px 15px;background-color:#fff;position:relative;text-align:center;font-size:17px}.wnlui_picker__hd:after{content:\" \";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.wnlui_picker__action{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#1aad19}.wnlui_picker__action:first-child{text-align:left;color:#888}.wnlui_picker__action:last-child{text-align:right}.wnlui_mask{background:rgba(0,0,0,.6)}.wnlui_mask,.wnlui_mask_transparent{position:fixed;z-index:2;top:0;right:0;left:0;bottom:0}.wnlui_picker__bd{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;background-color:#fff;height:238px;overflow:hidden}.wnlui_picker__group{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;height:100%}.wnlui_picker__mask{top:0;height:100%;margin:0 auto;background:-webkit-linear-gradient(top,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),-webkit-linear-gradient(bottom,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background:linear-gradient(180deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),linear-gradient(0deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-position:top,bottom;background-size:100% 102px;background-repeat:no-repeat;-webkit-transform:translateZ(0);transform:translateZ(0)}.wnlui_picker__indicator,.wnlui_picker__mask{position:absolute;left:0;width:100%;z-index:1}.wnlui_picker__indicator{height:34px;top:102px}.wnlui_picker__indicator:before{top:0;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.wnlui_picker__indicator:after,.wnlui_picker__indicator:before{content:\" \";position:absolute;left:0;right:0;height:1px;color:#e5e5e5}.wnlui_picker__indicator:after{bottom:0;border-bottom:1px solid #e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.wnlui_picker__content{position:absolute;top:0;left:0;width:100%}.wnlui_picker__item{padding:0;height:34px;line-height:34px;text-align:center;color:#000;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.wnlui_picker__item_disabled{color:#999}@-webkit-keyframes wnlui_slideUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wnlui_slideUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.wnlui_animate-slide-up{-webkit-animation:wnlui_slideUp ease .3s forwards;animation:wnlui_slideUp ease .3s forwards}@-webkit-keyframes wnlui_slideDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes wnlui_slideDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.wnlui_animate-slide-down{-webkit-animation:wnlui_slideDown ease .3s forwards;animation:wnlui_slideDown ease .3s forwards}@-webkit-keyframes wnlui_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes wnlui_fadeIn{0%{opacity:0}to{opacity:1}}.wnlui_animate-fade-in{-webkit-animation:wnlui_fadeIn ease .3s forwards;animation:wnlui_fadeIn ease .3s forwards}@-webkit-keyframes wnlui_fadeOut{0%{opacity:1}to{opacity:0}}@keyframes wnlui_fadeOut{0%{opacity:1}to{opacity:0}}.wnlui_animate-fade-out{-webkit-animation:wnlui_fadeOut ease .3s forwards;animation:wnlui_fadeOut ease .3s forwards}.date_select_footer{position:relative;background-color:#fff;width:100%;height:44px}.date_select_footer:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.date_l_btn{float:right}.date_select_circle{float:left;width:18px;height:18px;border-radius:100%;background-color:transparent;border:2px solid #dfdfdf;margin:11px 10px}.date_select_l{float:left;font-size:17px;height:44px;line-height:44px;color:#111;margin-right:15px}.date_l_btn.active .date_select_circle{background:url(https://51wnl.com/wxapp_resource/wnl/pop-radio-ok-icon.png) 50% no-repeat;background-size:18px 18px}", undefined);

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

/*eslint-disable*/

// import 'element-closest';
(function (ElementProto) {
  if (typeof ElementProto.matches !== 'function') {
    ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };
  }

  if (typeof ElementProto.closest !== 'function') {
    ElementProto.closest = function closest(selector) {
      var element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }

      return null;
    };
  }
})(window.Element.prototype);
// import objectAssign from 'object-assign';
// import $ from './balajs';
var $ = function (document, s_querySelectorAll, _$) {
  return _$ = function $(s, context) {
    var bala = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.create(_$.fn);
    return s && bala.push.apply(bala, s.dispatchEvent // if arg is node or window,
    ? [s] // then pass [s]
    : '' + s === s // else if arg is a string
    ? /</.test(s) // if the string contains "<" (if HTML code is passed)
    ? ( // then parse it and return node.children
    // use 'undefined' (HTMLUnknownElement) if context is not presented
    (context = document.createElement(context)).innerHTML = s, context.children) : context // else if context is truly
    ? (context = _$(context)[0]) ? // if context element is found
    context[s_querySelectorAll](s) // then select element from context
    : bala // else pass [] (context isn't found)
    : document[s_querySelectorAll](s) // else select elements globally
    : s), bala;
  }, _$.fn = [], _$.one = function (s, context) {
    return _$(s, context)[0];
  }, _$;
}(document, 'querySelectorAll');

// 其实，$ 的原型就是一个数组，拥有数组的各种方法
// 这里只是库内部使用，所以通过文档约束，不做容错校验，达到代码最小化

/* 判断系统 */
function _detect(ua) {
  var os = this.os = {},
      android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  if (android) {
    os.android = true;
    os.version = android[2];
  }
}
_detect.call($, navigator.userAgent);

Object.assign($.fn, {
  /**
   * 只能是一个 HTMLElement 元素或者 HTMLElement 数组，不支持字符串
   * @param {Element|Element[]} child
   * @returns {append}
   */
  append: function append(child) {
    if (!(child instanceof HTMLElement)) {
      child = child[0];
    }
    this.forEach(function (element) {
      element.appendChild(child);
    });
    return this;
  },
  /**
   *
   * @returns {remove}
   */
  remove: function remove() {
    this.forEach(function (element) {
      element.parentNode.removeChild(element);
    });
    return this;
  },
  /**
   *
   * @param selector
   * @returns {HTMLElement}
   */
  find: function find(selector) {
    return $(selector, this);
  },
  /**
   *
   * @param {String} className
   * @returns {addClass}
   */
  addClass: function addClass(className) {
    this.forEach(function (element) {
      // http://caniuse.com/#search=classList
      element.classList.add(className);
    });
    return this;
  },
  /**
   *
   * @param {String} className
   * @returns {removeClass}
   */
  removeClass: function removeClass(className) {
    this.forEach(function (element) {
      // http://caniuse.com/#search=classList
      element.classList.remove(className);
    });
    return this;
  },
  /**
   *
   * @param index
   * @returns {*|jQuery|HTMLElement}
   */
  eq: function eq(index) {
    return $(this[index]);
  },
  /**
   *
   * @returns {show}
   */
  show: function show() {
    this.forEach(function (element) {
      element.style.display = 'block';
    });
    return this;
  },
  /**
   *
   * @returns {hide}
   */
  hide: function hide() {
    this.forEach(function (element) {
      element.style.display = 'none';
    });
    return this;
  },
  /**
   *
   * @param html 目前只能接受字符串
   * @returns {html}
   */
  html: function html(_html) {
    this.forEach(function (element) {
      element.innerHTML = _html;
    });
    return this;
  },
  /**
   *
   * @param {Object} obj 目前只能接受object
   * @returns {css}
   */
  css: function css(obj) {
    var _this = this;

    Object.keys(obj).forEach(function (key) {
      _this.forEach(function (element) {
        element.style[key] = obj[key];
      });
    });
    return this;
  },
  /**
   *
   * @param eventType
   * @param selector
   * @param handler
   */
  on: function on(eventType, selector, handler) {
    var isDelegate = typeof selector === 'string' && typeof handler === 'function';
    if (!isDelegate) {
      handler = selector;
    }
    this.forEach(function (element) {
      eventType.split(' ').forEach(function (event) {
        element.addEventListener(event, function (evt) {
          if (isDelegate) {
            // http://caniuse.com/#search=closest
            if (this.contains(evt.target.closest(selector))) {
              handler.call(evt.target, evt);
            }
          } else {
            handler.call(this, evt);
          }
        });
      });
    });
    return this;
  },
  /**
   *
   * @param {String} eventType
   * @param {String|Function} selector
   * @param {Function=} handler
   * @returns {off}
   */
  off: function off(eventType, selector, handler) {
    if (typeof selector === 'function') {
      handler = selector;
      selector = null;
    }

    this.forEach(function (element) {
      eventType.split(' ').forEach(function (event) {
        if (typeof selector === 'string') {
          element.querySelectorAll(selector).forEach(function (element) {
            element.removeEventListener(event, handler);
          });
        } else {
          element.removeEventListener(event, handler);
        }
      });
    });
    return this;
  },
  /**
   *
   * @returns {Number}
   */
  index: function index() {
    var element = this[0];
    var $parent = element.parentNode;
    return Array.prototype.indexOf.call($parent.children, element);
  },
  /**
   * @desc 因为off方法目前不可以移除绑定的匿名函数，现在直接暴力移除所有listener
   * @returns {offAll}
   */
  offAll: function offAll() {
    var _this2 = this;

    this.forEach(function (element, index) {
      var clone = element.cloneNode(true);
      element.parentNode.replaceChild(clone, element);

      _this2[index] = clone;
    });
    return this;
  },
  /**
   *
   * @returns {*}
   */
  val: function val() {
    var _arguments = arguments;

    if (arguments.length) {
      this.forEach(function (element) {
        element.value = _arguments[0];
      });
      return this;
    }
    return this[0].value;
  },
  /**
   *
   * @returns {*}
   */
  attr: function attr() {
    var _arguments2 = arguments;

    if (_typeof(arguments[0]) == 'object') {
      var attrsObj = arguments[0];
      var that = this;
      Object.keys(attrsObj).forEach(function (attr) {
        that.forEach(function (element) {
          element.setAttribute(attr, attrsObj[attr]);
        });
      });
      return this;
    }

    if (typeof arguments[0] == 'string' && arguments.length < 2) {
      return this[0].getAttribute(arguments[0]);
    }

    this.forEach(function (element) {
      element.setAttribute(_arguments2[0], _arguments2[1]);
    });
    return this;
  }
});

Object.assign($, {
  extend: Object.assign,
  /**
   * noop
   */
  noop: function noop() {},
  /**
   * render
   * 取值：<%= variable %>
   * 表达式：<% if {} %>
   * 例子：
   *  <div>
   *    <div class="wnlui_mask"></div>
   *    <div class="wnlui_dialog">
   *    <% if(typeof title === 'string'){ %>
   *           <div class="wnlui_dialog__hd"><strong class="wnlui_dialog__title"><%=title%></strong></div>
   *    <% } %>
   *    <div class="wnlui_dialog__bd"><%=content%></div>
   *    <div class="wnlui_dialog__ft">
   *    <% for(var i = 0; i < buttons.length; i++){ %>
   *        <a href="javascript:;" class="wnlui_dialog__btn wnlui_dialog__btn_<%=buttons[i]['type']%>"><%=buttons[i]['label']%></a>
   *    <% } %>
   *    </div>
   *    </div>
   *  </div>
   * A very simple template engine
   * @param {String} tpl
   * @param {Object=} data
   * @returns {String}
   */
  render: function render(tpl, data) {
    var code = "var p=[];with(this){p.push('" + tpl.replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, "',$1,'").split('\t').join("');").split('%>').join("p.push('").split('\r').join("\\'") + "');}return p.join('');";
    return new Function(code).apply(data);
  },
  /**
   * getStyle 获得元素计算后的样式值
   * (from http://stackoverflow.com/questions/2664045/how-to-get-an-html-elements-style-values-in-javascript)
   */
  getStyle: function getStyle(el, styleProp) {
    var value,
        defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation
      // (hypen separated words eg. font-Size)
      styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) {
      // IE
      // sanitize property name to camelCase
      styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
        return letter.toUpperCase();
      });
      value = el.currentStyle[styleProp];
      // convert other units to pixels on IE
      if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
        return function (value) {
          var oldLeft = el.style.left,
              oldRsLeft = el.runtimeStyle.left;
          el.runtimeStyle.left = el.currentStyle.left;
          el.style.left = value || 0;
          value = el.style.pixelLeft + 'px';
          el.style.left = oldLeft;
          el.runtimeStyle.left = oldRsLeft;
          return value;
        }(value);
      }
      return value;
    }
  }
});

var pickerTpl = "<div class=\"<%= className %>\">\n  <div class=\"wnlui_mask\"></div>\n  <div class=\"wnlui_picker\">\n    <div class=\"wnlui_picker__hd\">\n      <a href=\"javascript:;\" data-action=\"cancel\" class=\"wnlui_picker__action\">取消</a>\n      <a href=\"javascript:;\" data-action=\"select\" class=\"wnlui_picker__action\" id=\"wnlui_picker-confirm\">确定</a>\n    </div>\n    <div class=\"wnlui_picker__bd\"></div>\n    <div class=\"date_select_footer hidden\">\n      <div class=\"date_l_btn\">\n        <div class=\"date_select_circle\"></div>\n        <div class=\"date_select_l\">农历</div>\n      </div>\n    </div>\n  </div>\n\n</div>\n";

var itemTpl = "<div class=\"wnlui_picker__group\">\n  <div class=\"wnlui_picker__mask\"></div>\n  <div class=\"wnlui_picker__indicator\"></div>\n  <div class=\"wnlui_picker__content\"></div>\n</div>\n";

var pickerItem = function () {
  function pickerItem(items, options) {
    classCallCheck(this, pickerItem);

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

  pickerItem.prototype.render = function render() {
    var groups = '';
    for (var index = 0; index < this.items.length; index += 1) {
      var item = this.items[index];
      groups += '<div v-for="item in items" class="wnlui_picker__item">' + item.label + '</div>';
    }
    this.$item.find('.wnlui_picker__content').html(groups);
    this.adjustPosition();
  };

  pickerItem.prototype.adjustPosition = function adjustPosition(defaultIndex) {
    var _this = this;

    if (defaultIndex && defaultIndex > -1 || defaultIndex === 0) {
      this.defaultIndex = defaultIndex;
    } else {
      defaultIndex = this.defaultIndex;
    }
    var items = this.items;
    var indicatorTop = this.indicatorTop;
    var itemHeight = this.itemHeight;
    var totalHeight = items.length * itemHeight;
    var translate = totalHeight <= indicatorTop ? indicatorTop : 0;
    if (defaultIndex > -1) {
      if (translate === 0) {
        var upperCount = Math.floor(indicatorTop / itemHeight);
        if (defaultIndex > upperCount) {
          //over
          var overCount = defaultIndex - upperCount;
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
    setTimeout(function () {
      _this.updateSelected(defaultIndex > -1);
    }, 0);
    this.setTransition(this.$item.find('.wnlui_picker__content'), 0.3);
    this.setTranslate(this.$item.find('.wnlui_picker__content'), this.translate);
  };

  pickerItem.prototype.handleTouchStart = function handleTouchStart(e) {
    if (this.touching || this.items.length <= 1) return;
    this.touching = true;
    this.ogTranslate = this.translate;
    this.touchId = e.targetTouches[0].identifier;
    this.ogY = this.translate === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.translate;
    this.animating = false;
    this.setTransition(this.$item.find('.wnlui_picker__content'), 0.3);
    e.stopPropagation();
    e.preventDefault();
  };

  pickerItem.prototype.handleTouchMove = function handleTouchMove(e) {
    if (!this.touching || this.items.length <= 1) return;
    if (e.targetTouches[0].identifier !== this.touchId) return;
    var pageY = e.targetTouches[0].pageY;
    var diffY = pageY - this.ogY;
    this.translate = diffY;
    this.setTranslate(this.$item.find('.wnlui_picker__content'), this.translate);
    e.stopPropagation();
    e.preventDefault();
  };

  pickerItem.prototype.handleTouchEnd = function handleTouchEnd() {
    var _this2 = this;

    if (!this.touching || this.items.length <= 1) return;
    var indicatorTop = this.indicatorTop;
    var indicatorHeight = this.indicatorHeight;
    var itemHeight = this.itemHeight;
    var translate = this.translate;
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
      var step = 0;
      var adjust = 0;
      var diff = (translate - this.ogTranslate) / itemHeight;
      if (Math.abs(diff) < 1) {
        step = diff > 0 ? 1 : -1;
      } else {
        adjust = Math.abs(diff % 1 * 100) > 50 ? 1 : 0;
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
    setTimeout(function () {
      _this2.updateSelected();
    }, 0);
    this.setTransition(this.$item.find('.wnlui_picker__content'), 0.3);
    this.setTranslate(this.$item.find('.wnlui_picker__content'), this.translate);
  };

  pickerItem.prototype.setTransition = function setTransition($target, time) {
    if (this.animating) {
      return $target.css({
        '-webkit-transition': 'all ' + time + 's',
        transition: 'all ' + time + 's'
      });
    }
    return $target.css({
      '-webkit-transition': 'none',
      transition: 'none'
    });
  };

  pickerItem.prototype.setTranslate = function setTranslate($target, diff) {
    return $target.css({
      '-webkit-transform': 'translate3d(0, ' + diff + 'px, 0)',
      transform: 'translate3d(0, ' + diff + 'px, 0)'
    });
  };

  pickerItem.prototype.updateSelected = function updateSelected() {
    var propagate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var selected = 0;
    for (var i = 0; i < this.items.length; i += 1) {
      var item = this.items[i];
      if (!item.disabled && this.translate + this.itemHeight * i >= this.indicatorTop && this.translate + this.itemHeight * i + this.itemHeight <= this.indicatorTop + this.indicatorHeight) {
        selected = i;
      }
    }
    this.selectIndex = selected;
    if (this.onChange && propagate) {
      this.onChange(this.groupIndex, selected, this.items[selected]);
    }
  };

  return pickerItem;
}();

var cacheConfirmObj = {}; //缓存上次确定选择的位置

var picker$1 = function () {
  function picker() {
    var _this = this;

    classCallCheck(this, picker);

    this.itemList = [];
    this.changeItemList = [];
    this.isNest = false;
    /* eslint-disable */
    // 配置项
    var options = arguments[arguments.length - 1];
    /* eslint-disable */
    this.$picker = null;
    this.isShow = true;
    this.isDisabled = true;
    this.defaults = $.extend({
      id: 'picker',
      className: '',
      container: 'body',
      onChange: $.noop,
      onCancel: $.noop,
      onConfirm: $.noop,
      modal: true
    }, options);
    this.defaultIndexList = cacheConfirmObj[this.defaults.id] ? util.deepCopy(cacheConfirmObj[this.defaults.id]) : this.defaults.defaultIndex || [];
    this.pickerItemGroups = [];
    /* eslint-enable */
    // 数据处理
    this.isMulti = false; // 是否多列的类型
    if (arguments.length > 2) {
      var i = 0;
      while (i < arguments.length - 1) {
        this.itemList.push(arguments[i++]);
      }
      this.isMulti = true;
    } else {
      this.itemList.push(arguments[0]);
    }
    this.changeItemList = util.deepCopy(this.itemList);
    var depth = options.depth || (this.isMulti ? this.itemList.length : this.getItemDepth(this.itemList[0][0]));
    this.resultList = new Array(depth);
    //嵌套级联选择
    if (!this.isMulti && depth > 1) {
      this.isNest = true;
      this.getDepthList(0);
    }
    /* eslint-enable */
    this.$picker = $($.render(pickerTpl, this.defaults));
    this.$picker.on('click', '.wnlui_mask', function () {
      _this.hide();
      _this.defaults.onCancel(_this.defaults.resultType === 'value' ? _this.resultList : _this.defaultIndexList);
    }).on('click', '.wnlui_picker__action', function () {
      _this.hide();
      _this.defaults.onCancel(_this.defaults.resultType === 'value' ? _this.resultList : _this.defaultIndexList);
    }).on('click', '#wnlui_picker-confirm', function () {
      cacheConfirmObj[_this.defaults.id] = util.deepCopy(_this.defaultIndexList);
      _this.defaults.onConfirm(_this.defaults.resultType === 'value' ? _this.resultList : _this.defaultIndexList);
    }).on('click', '.date_l_btn', function () {
      _this.dateLunarTap();
    });
    this.generatePickers();
    this.setResultList();
    this.show();
  }

  picker.prototype.getItemDepth = function getItemDepth(object) {
    var depth = 1;
    if (object.children && object.children[0]) {
      depth = this.getItemDepth(object.children[0]) + 1;
    }
    return depth;
  };

  picker.prototype.getDepthList = function getDepthList(groupIndex) {
    this.changeItemList.length = groupIndex + 1;
    if (this.changeItemList[groupIndex][this.defaultIndexList[groupIndex]].children) {
      this.getNestList(this.changeItemList[groupIndex][this.defaultIndexList[groupIndex]]);
    }
  };

  picker.prototype.getNestList = function getNestList(itemObj) {
    if (itemObj && itemObj.children) {
      this.changeItemList.push(itemObj.children);
      if (itemObj.children[this.defaultIndexList[this.changeItemList.length - 1]]) {
        this.getNestList(itemObj.children[this.defaultIndexList[this.changeItemList.length - 1]]);
      }
    }
  };

  picker.prototype.disableScroll = function disableScroll() {
    this.oldonwheel = window.onwheel;
    window.onwheel = this.preventDefault;
    this.oldonmousewheel = window.onmousewheel;
    window.onmousewheel = this.preventDefault;
    this.oldontouchmove = window.ontouchmove;
    window.ontouchmove = this.preventDefault;
    this.isDisabled = true;
  };

  picker.prototype.preventDefault = function preventDefault(e) {
    e = e || window.event;
    e.preventDefault();
    e.returnValue = false;
  };

  picker.prototype.enableScroll = function enableScroll() {
    if (!this.isDisabled) {
      return;
    }
    window.onwheel = this.oldonwheel;
    window.onmousewheel = this.oldonmousewheel;
    document.onkeydown = this.oldonkeydown;
    window.ontouchmove = this.oldontouchmove;
    this.isDisabled = false;
  };

  picker.prototype.generatePickers = function generatePickers() {
    var _this2 = this;

    this.changeItemList.forEach(function (item, i) {
      var newItem = new pickerItem(item, {
        onChange: _this2.handleChange.bind(_this2),
        defaultIndex: _this2.defaultIndexList[i],
        groupIndex: i
      });
      _this2.pickerItemGroups.push(newItem);
      _this2.$picker.find('.wnlui_picker__bd').append(newItem.$item);
    });
  };

  picker.prototype.setResultList = function setResultList() {
    var _this3 = this;

    this.changeItemList.forEach(function (item, i) {
      console.log(item[_this3.defaultIndexList[i]]);
      _this3.resultList[i] = util.deepCopy(item[_this3.defaultIndexList[i]]);
      _this3.resultList[i].children = null;
      delete _this3.resultList[i].children;
    });
  };

  picker.prototype.show = function show() {
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
  };

  picker.prototype._hide = function _hide(callback) {
    var _this4 = this;

    // this._hide = $.noop; // 防止二次调用导致报错
    this.$picker.find('.wnlui_mask').addClass('wnlui_animate-fade-out');
    this.$picker.find('.wnlui_picker').addClass('wnlui_animate-slide-down').on('animationend webkitAnimationEnd', function () {
      if (!_this4.isShow && _this4.$picker && document.querySelector('.wnlui_mask')) {
        _this4.$picker.find('.wnlui_mask').removeClass('wnlui_animate-fade-out');
        _this4.$picker.find('.wnlui_picker').removeClass('wnlui_animate-slide-down');
        _this4.$picker.remove();
        if (callback) callback();
      }
    });
    this.isShow = false;
  };

  picker.prototype.hide = function hide(callback) {
    this.enableScroll();
    this._hide(callback);
  };

  picker.prototype.handleChange = function handleChange(groupIndex, i, item) {
    var _this5 = this;

    var lastIndex = this.defaultIndexList[groupIndex];
    if (lastIndex === i) {
      return;
    }
    this.resultList[groupIndex] = item;
    this.defaultIndexList[groupIndex] = i;
    setTimeout(function () {
      if (_this5.isNest) _this5.onSelectChange(groupIndex, i);
      if (_this5.defaults.onChange) {
        _this5.defaults.onChange(_this5.defaults.resultType === 'value' ? _this5.resultList : _this5.defaultIndexList);
      }
    }, 0);
  };

  picker.prototype.onSelectChange = function onSelectChange(groupIndex, i) {
    var _this6 = this;

    this.getDepthList(groupIndex, i);
    this.changeItemList.forEach(function (item, index) {
      if (index > groupIndex) {
        _this6.defaultIndexList[index] = 0;
        _this6.pickerItemGroups[index].items = item;
        _this6.pickerItemGroups[index].render();
        _this6.pickerItemGroups[index].adjustPosition(0);
      }
    });
    this.setResultList();
  };

  return picker;
}();

var pickerTpl$1 = "<div class=\"<%= className %>\">\n  <div class=\"wnlui_mask\"></div>\n  <div class=\"wnlui_picker\">\n    <div class=\"wnlui_picker__hd\">\n      <a href=\"javascript:;\" data-action=\"cancel\" class=\"wnlui_picker__action\">取消</a>\n      <a href=\"javascript:;\" data-action=\"select\" class=\"wnlui_picker__action\" id=\"wnlui_picker-confirm\">确定</a>\n    </div>\n    <div class=\"wnlui_picker__bd\"></div>\n    <div class=\"date_select_footer hidden\">\n      <div class=\"date_l_btn\">\n        <div class=\"date_select_circle\"></div>\n        <div class=\"date_select_l\">农历</div>\n      </div>\n    </div>\n  </div>\n\n</div>\n";

var cacheDateObj = {}; //缓存上次确定选择的日期
var lunarType = false; //false:公历  true:农历
var viewDate = new Date();

var datePicker = function () {
  function datePicker(options) {
    var _this = this;

    classCallCheck(this, datePicker);

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
    this.defaults = $.extend({
      id: 'datepicker',
      className: '',
      container: 'body',
      onChange: $.noop,
      onCancel: $.noop,
      onConfirm: $.noop,
      showLunar: false,
      modal: true
    }, options);
    this.$picker = $($.render(pickerTpl$1, this.defaults));
    this.$picker.on('click', '.wnlui_mask', function () {
      _this.hide();
      _this.defaults.onCancel(_this.defaultIndexList);
    }).on('click', '.wnlui_picker__action', function () {
      _this.hide();
      _this.defaults.onCancel(_this.defaultIndexList);
    }).on('click', '#wnlui_picker-confirm', function () {
      _this.resultDateObj.isSolar = !lunarType;
      cacheDateObj[_this.defaults.id] = new Date(_this.resultDateObj.dateObj.cYear, _this.resultDateObj.dateObj.cMonth - 1, _this.resultDateObj.dateObj.cDay);
      _this.defaults.onConfirm(_this.resultDateObj);
    }).on('click', '.date_l_btn', function () {
      _this.dateLunarTap();
    });
    if (this.defaults.defaultValue) {
      viewDate = new Date(this.defaults.defaultValue[0], this.defaults.defaultValue[1] - 1, this.defaults.defaultValue[2]);
    }
    viewDate = cacheDateObj[this.defaults.id] || viewDate;
    this.initSolarDateSelect();
    this.generatePickers();
    this.resultDateObj = this.getChangeDateObj();
    this.show();
  }

  datePicker.prototype.getChangeDateObj = function getChangeDateObj() {
    var confirmObj = {
      dateObj: [],
      isSolar: !lunarType
    };
    if (confirmObj.isSolar) {
      var year = this.defaultIndexList[0] + this.minDate.getFullYear();
      var month = this.defaultIndexList[1];
      var day = this.defaultIndexList[2] + 1;
      confirmObj.dateObj = calendar.solar2lunar(year, month, day);
    } else {
      var _year = this.defaultIndexList[0] + this.minLDate[0];
      var _month = this.defaultIndexList[1];
      var _day = this.defaultIndexList[2] + 1;
      var solarObj = void 0;
      if (calendar.leapMonth(_year) > 0) {
        if (_month < calendar.leapMonth(_year)) {
          _month += 1;
          solarObj = calendar.lunar2solar(_year, _month, _day);
        } else if (_month === calendar.leapMonth(_year)) {
          solarObj = calendar.lunar2solar(_year, _month, _day, true);
        } else {
          solarObj = calendar.lunar2solar(_year, _month, _day);
        }
      } else {
        _month += 1;
        solarObj = calendar.lunar2solar(_year, _month, _day);
      }
      confirmObj.dateObj = solarObj;
    }
    return confirmObj;
  };

  datePicker.prototype.disableScroll = function disableScroll() {
    this.oldonwheel = window.onwheel;
    window.onwheel = this.preventDefault;
    this.oldonmousewheel = window.onmousewheel;
    window.onmousewheel = this.preventDefault;
    this.oldontouchmove = window.ontouchmove;
    window.ontouchmove = this.preventDefault;
    // document.body.addEventListener('touchmove',this.preventDefault);
    this.isDisabled = true;
  };

  datePicker.prototype.preventDefault = function preventDefault(e) {
    e = e || window.event;
    e.preventDefault();
    e.returnValue = false;
  };

  datePicker.prototype.enableScroll = function enableScroll() {
    if (!this.isDisabled) {
      return;
    }
    window.onwheel = this.oldonwheel;
    window.onmousewheel = this.oldonmousewheel;
    document.onkeydown = this.oldonkeydown;
    window.ontouchmove = this.oldontouchmove;
    // document.body.removeEventListener('touchmove',this.preventDefault);
    this.isDisabled = false;
  };

  datePicker.prototype.dateLunarTap = function dateLunarTap() {
    //当前是农历，转公历
    if (lunarType) {
      this.$picker.find('.date_l_btn').removeClass('active');
      var isLeap = false;
      var year = this.defaultIndexList[0] + this.minLDate[0];
      var month = this.defaultIndexList[1];
      var day = this.defaultIndexList[2] + 1;
      if (calendar.leapMonth(year) > 0) {
        if (month < calendar.leapMonth(year)) {
          month += 1;
        } else if (month === calendar.leapMonth(year)) {
          isLeap = true;
        }
      } else {
        month += 1;
      }
      var solarObj = calendar.lunar2solar(year, month, day, isLeap);
      if (solarObj.cMonth - 1 < 0) {
        this.initSolarDateSelect(solarObj.cYear - 1, 11, solarObj.cDay);
      } else {
        this.initSolarDateSelect(solarObj.cYear, solarObj.cMonth - 1, solarObj.cDay);
      }
    } else {
      //当前是公历，转农历
      this.$picker.find('.date_l_btn').addClass('active');
      var _year2 = this.defaultIndexList[0] + this.minDate.getFullYear();
      var _month2 = this.defaultIndexList[1];
      var _day2 = this.defaultIndexList[2] + 1;
      this.initLunarDateSelect(_year2, _month2, _day2);
    }
    lunarType = !lunarType;
  };

  datePicker.prototype.generatePickers = function generatePickers() {
    for (var i = 0; i < this.dateGroups.length; i += 1) {
      var pickerItem$$1 = new pickerItem(this.dateGroups[i].items, {
        onChange: this.handleChange.bind(this),
        defaultIndex: this.defaultIndexList[i],
        groupIndex: i
      });
      this.pickerItemGroups.push(pickerItem$$1);
      this.$picker.find('.wnlui_picker__bd').append(pickerItem$$1.$item);
    }
  };

  datePicker.prototype.show = function show() {
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
  };

  datePicker.prototype._hide = function _hide(callback) {
    var _this2 = this;

    // this._hide = $.noop; // 防止二次调用导致报错
    this.$picker.find('.wnlui_mask').addClass('wnlui_animate-fade-out');
    this.$picker.find('.wnlui_picker').addClass('wnlui_animate-slide-down').on('animationend webkitAnimationEnd', function () {
      if (!_this2.isShow && _this2.$picker && document.querySelector('.wnlui_mask')) {
        _this2.$picker.find('.wnlui_mask').removeClass('wnlui_animate-fade-out');
        _this2.$picker.find('.wnlui_picker').removeClass('wnlui_animate-slide-down');
        _this2.$picker.remove();
        if (callback) callback();
      }
    });
    this.isShow = false;
  };

  datePicker.prototype.hide = function hide(callback) {
    this.enableScroll();
    this._hide(callback);
  };

  datePicker.prototype.handleChange = function handleChange(groupIndex, i, item) {
    var _this3 = this;

    var lastIndex = this.defaultIndexList[groupIndex];
    if (lastIndex === i) {
      return;
    }
    this.defaultIndexList[groupIndex] = i;
    setTimeout(function () {
      _this3.onSelectChange(item, _this3.defaultIndexList[groupIndex], groupIndex, lastIndex);
      if (_this3.defaults.onChange) {
        _this3.resultDateObj = _this3.getChangeDateObj();
        _this3.defaults.onChange(_this3.resultDateObj);
      }
    }, 0);
  };

  datePicker.prototype.initSolarDateSelect = function initSolarDateSelect(year, month, day) {
    year = year || viewDate.getFullYear();
    month = month || month === 0 ? month : viewDate.getMonth();
    day = day || viewDate.getDate();
    var i = 0;
    var yearList = {
      items: []
    };
    var yearToView = 0;
    var monthList = {
      items: []
    };
    var monthToView = 0;
    var dayList = {
      items: []
    };
    var dayToView = 0;
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
      var valueString = i + 1 + '月';
      monthList.items.push({
        label: valueString
      });
    }
    var dayCount = calendar.solarDays(year, month);
    var dateObj = new Date(year, month, 1);
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
  };

  datePicker.prototype.initLunarDateSelect = function initLunarDateSelect(year, month, day) {
    var i = 0;
    var lunarObj = calendar.solar2lunar(year, month, day);
    var yearList = {
      items: []
    };
    var yearToView = 0;
    var monthList = {
      items: []
    };
    var monthToView = 0;
    var monthCount = 11;
    var dayList = {
      items: []
    };
    var dayToView = 0;
    var solarObj = {};
    for (i = this.minLDate[0]; i <= this.maxLDate[0]; i += 1) {
      if (lunarObj.lYear === i) {
        yearToView = i - this.minLDate[0];
      }
      yearList.items.push({
        label: i + '年'
      });
    }
    var leapMonth = calendar.leapMonth(lunarObj.lYear);
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
    var dayCount = leapMonth === lunarObj.lMonth ? calendar.leapDays(lunarObj.lYear) : calendar.monthDays(lunarObj.lYear, lunarObj.lMonth);
    for (i = 1; i <= dayCount; i += 1) {
      if (lunarObj.lDay === i) {
        dayToView = i - 1;
      }
      solarObj = calendar.lunar2solar(lunarObj.lYear, lunarObj.lMonth, i, lunarObj.isLeap);
      if (solarObj.cYear === this.dateNow.getFullYear() && solarObj.cMonth - 1 === this.dateNow.getMonth() && solarObj.cDay === this.dateNow.getDate()) {
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
  };

  datePicker.prototype.renderPickerGroups = function renderPickerGroups() {
    if (!this.dateGroups || !this.pickerItemGroups || this.pickerItemGroups.length === 0) {
      return;
    }
    for (var i = 0; i < this.dateGroups.length; i += 1) {
      this.pickerItemGroups[i].items = this.dateGroups[i].items;
      this.pickerItemGroups[i].render();
      this.pickerItemGroups[i].adjustPosition(this.defaultIndexList[i]);
    }
  };

  datePicker.prototype.onSelectChange = function onSelectChange(item, selectIndex, groupIndex, lastIndex) {
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
        if (this.defaultIndexList[0] === 0 && this.defaultIndexList[1] === this.minDate.getMonth() && selectIndex < this.minDate.getDate()) {
          this.defaultIndexList[2] = this.minDate.getDate() - 1;
          this.pickerItemGroups[groupIndex].adjustPosition(this.defaultIndexList[2]);
        } else {
          this.defaultIndexList[2] = selectIndex;
        }
        return;
      }
      //农历
      if (this.defaultIndexList[0] === this.maxLDate[0] - this.minLDate[0] && this.defaultIndexList[1] === this.maxLDate[1] && selectIndex + 1 > this.maxLDate[2]) {
        this.defaultIndexList[2] = this.maxLDate[2] - 1;
        this.pickerItemGroups[groupIndex].adjustPosition(this.defaultIndexList[2]);
      } else {
        this.defaultIndexList[2] = selectIndex;
      }
    }
  };

  datePicker.prototype.getDateSelectMonthInfo = function getDateSelectMonthInfo(lastIndex) {
    var monthList = {
      items: []
    };
    var monthToView = 0;
    var year = viewDate.getFullYear();
    var month = viewDate.getMonth();
    var i = 0;
    //公历
    if (!lunarType) {
      year = this.defaultIndexList[0] + this.minDate.getFullYear();
      month = this.defaultIndexList[1];
      for (i = 0; i <= 11; i += 1) {
        if (month === i) {
          monthToView = i;
        }
        var valueString = i + 1 + '月';
        monthList.items.push({
          index: valueString,
          label: valueString
        });
      }
    } else {
      //农历
      year = this.defaultIndexList[0] + this.minLDate[0];
      month = this.defaultIndexList[1];
      var leapMonth = calendar.leapMonth(year);
      var monthCount = 11;
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
            var prevLeapMonth = lastIndex ? calendar.leapMonth(lastIndex + +this.minLDate[0]) : 0;
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
  };

  datePicker.prototype.getDateSelectDayInfo = function getDateSelectDayInfo() {
    var dayList = {
      items: []
    };
    var dayToView = 0;
    var i = 0;
    //公历
    if (!lunarType) {
      var year = this.defaultIndexList[0] + this.minDate.getFullYear();
      var month = this.defaultIndexList[1];
      var day = this.defaultIndexList[2] + 1;
      var dayCount = calendar.solarDays(year, month);
      var dateObj = new Date(year, month, 1);
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
      var isLeap = false;
      var _year3 = this.defaultIndexList[0] + this.minLDate[0];
      var _month3 = this.defaultIndexList[1];
      var _day3 = this.defaultIndexList[2] + 1;
      if (calendar.leapMonth(_year3) > 0) {
        if (_month3 < calendar.leapMonth(_year3)) {
          _month3 += 1;
        } else if (_month3 === calendar.leapMonth(_year3)) {
          isLeap = true;
        }
      } else {
        _month3 += 1;
      }
      var _dayCount = isLeap ? calendar.leapDays(_year3) : calendar.monthDays(_year3, _month3);
      var solarObj = {};
      for (i = 1; i <= _dayCount; i += 1) {
        if (_day3 === i) {
          dayToView = i - 1;
        }
        solarObj = calendar.lunar2solar(_year3, _month3, i, isLeap);
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
  };

  return datePicker;
}();

/* eslint-disable */
var importCityData = [{
  children: [{
    children: [{
      label: '自动定位'
    }],
    label: '自动定位'
  }],
  label: '自动定位'
}, {
  children: [{
    children: [{
      longitude: '116',
      label: '东城区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '西城区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '朝阳区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '丰台区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '石景山区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '海淀区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '门头沟区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '房山区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '通州区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '顺义区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '昌平区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '大兴区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '怀柔区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '平谷区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '密云区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '延庆区',
      latitude: '39'
    }],
    label: '市辖区'
  }],
  label: '北京市'
}, {
  children: [{
    children: [{
      longitude: '117',
      label: '和平区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '河东区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '河西区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '南开区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '河北区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '红桥区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '东丽区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '西青区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '津南区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '北辰区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '武清区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '宝坻区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '滨海新区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '宁河区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '静海区',
      latitude: '39'
    }, {
      longitude: '117',
      label: '蓟州区',
      latitude: '39'
    }],
    label: '市辖区'
  }],
  label: '天津市'
}, {
  children: [{
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '38'
    }, {
      longitude: '114',
      label: '长安区',
      latitude: '38'
    }, {
      longitude: '114',
      label: '桥西区',
      latitude: '38'
    }, {
      longitude: '114',
      label: '新华区',
      latitude: '38'
    }, {
      longitude: '114',
      label: '井陉矿区',
      latitude: '38'
    }, {
      longitude: '114',
      label: '裕华区',
      latitude: '38'
    }, {
      longitude: '114',
      label: '藁城区',
      latitude: '38'
    }, {
      longitude: '114',
      label: '鹿泉区',
      latitude: '38'
    }, {
      longitude: '114',
      label: '栾城区',
      latitude: '38'
    }, {
      longitude: '114',
      label: '井陉县',
      latitude: '38'
    }, {
      longitude: '114',
      label: '正定县',
      latitude: '38'
    }, {
      longitude: '114',
      label: '行唐县',
      latitude: '38'
    }, {
      longitude: '114',
      label: '灵寿县',
      latitude: '38'
    }, {
      longitude: '114',
      label: '高邑县',
      latitude: '38'
    }, {
      longitude: '114',
      label: '深泽县',
      latitude: '38'
    }, {
      longitude: '114',
      label: '赞皇县',
      latitude: '38'
    }, {
      longitude: '114',
      label: '无极县',
      latitude: '38'
    }, {
      longitude: '114',
      label: '平山县',
      latitude: '38'
    }, {
      longitude: '114',
      label: '元氏县',
      latitude: '38'
    }, {
      longitude: '114',
      label: '赵县',
      latitude: '38'
    }, {
      longitude: '114',
      label: '晋州市',
      latitude: '38'
    }, {
      longitude: '114',
      label: '新乐市',
      latitude: '38'
    }],
    label: '石家庄市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '40'
    }, {
      longitude: '118',
      label: '路南区',
      latitude: '40'
    }, {
      longitude: '118',
      label: '路北区',
      latitude: '40'
    }, {
      longitude: '118',
      label: '古冶区',
      latitude: '40'
    }, {
      longitude: '118',
      label: '开平区',
      latitude: '40'
    }, {
      longitude: '118',
      label: '丰南区',
      latitude: '40'
    }, {
      longitude: '118',
      label: '丰润区',
      latitude: '40'
    }, {
      longitude: '118',
      label: '曹妃甸区',
      latitude: '40'
    }, {
      longitude: '118',
      label: '滦县',
      latitude: '40'
    }, {
      longitude: '118',
      label: '滦南县',
      latitude: '40'
    }, {
      longitude: '118',
      label: '乐亭县',
      latitude: '40'
    }, {
      longitude: '118',
      label: '迁西县',
      latitude: '40'
    }, {
      longitude: '118',
      label: '玉田县',
      latitude: '40'
    }, {
      longitude: '118',
      label: '遵化市',
      latitude: '40'
    }, {
      longitude: '118',
      label: '迁安市',
      latitude: '40'
    }],
    label: '唐山市'
  }, {
    children: [{
      longitude: '120',
      label: '市辖区',
      latitude: '40'
    }, {
      longitude: '120',
      label: '海港区',
      latitude: '40'
    }, {
      longitude: '120',
      label: '山海关区',
      latitude: '40'
    }, {
      longitude: '120',
      label: '北戴河区',
      latitude: '40'
    }, {
      longitude: '120',
      label: '抚宁区',
      latitude: '40'
    }, {
      longitude: '120',
      label: '青龙满族自治县',
      latitude: '40'
    }, {
      longitude: '120',
      label: '昌黎县',
      latitude: '40'
    }, {
      longitude: '120',
      label: '卢龙县',
      latitude: '40'
    }],
    label: '秦皇岛市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '114',
      label: '邯山区',
      latitude: '36'
    }, {
      longitude: '114',
      label: '丛台区',
      latitude: '36'
    }, {
      longitude: '114',
      label: '复兴区',
      latitude: '36'
    }, {
      longitude: '114',
      label: '峰峰矿区',
      latitude: '36'
    }, {
      longitude: '114',
      label: '邯郸县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '临漳县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '成安县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '大名县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '涉县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '磁县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '肥乡县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '永年县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '邱县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '鸡泽县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '广平县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '馆陶县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '魏县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '曲周县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '武安市',
      latitude: '36'
    }],
    label: '邯郸市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '37'
    }, {
      longitude: '114',
      label: '桥东区',
      latitude: '37'
    }, {
      longitude: '114',
      label: '桥西区',
      latitude: '37'
    }, {
      longitude: '114',
      label: '邢台县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '临城县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '内丘县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '柏乡县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '隆尧县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '任县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '南和县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '宁晋县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '巨鹿县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '新河县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '广宗县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '平乡县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '威县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '清河县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '临西县',
      latitude: '37'
    }, {
      longitude: '114',
      label: '南宫市',
      latitude: '37'
    }, {
      longitude: '114',
      label: '沙河市',
      latitude: '37'
    }],
    label: '邢台市'
  }, {
    children: [{
      longitude: '115',
      label: '市辖区',
      latitude: '39'
    }, {
      longitude: '115',
      label: '竞秀区',
      latitude: '39'
    }, {
      longitude: '115',
      label: '莲池区',
      latitude: '39'
    }, {
      longitude: '115',
      label: '满城区',
      latitude: '39'
    }, {
      longitude: '115',
      label: '清苑区',
      latitude: '39'
    }, {
      longitude: '115',
      label: '徐水区',
      latitude: '39'
    }, {
      longitude: '115',
      label: '涞水县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '阜平县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '定兴县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '唐县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '高阳县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '容城县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '涞源县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '望都县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '安新县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '易县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '曲阳县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '蠡县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '顺平县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '博野县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '雄县',
      latitude: '39'
    }, {
      longitude: '115',
      label: '涿州市',
      latitude: '39'
    }, {
      longitude: '115',
      label: '安国市',
      latitude: '39'
    }, {
      longitude: '115',
      label: '高碑店市',
      latitude: '39'
    }],
    label: '保定市'
  }, {
    children: [{
      longitude: '115',
      label: '市辖区',
      latitude: '40'
    }, {
      longitude: '115',
      label: '桥东区',
      latitude: '40'
    }, {
      longitude: '115',
      label: '桥西区',
      latitude: '40'
    }, {
      longitude: '115',
      label: '宣化区',
      latitude: '40'
    }, {
      longitude: '115',
      label: '下花园区',
      latitude: '40'
    }, {
      longitude: '115',
      label: '万全区',
      latitude: '40'
    }, {
      longitude: '115',
      label: '崇礼区',
      latitude: '40'
    }, {
      longitude: '115',
      label: '张北县',
      latitude: '40'
    }, {
      longitude: '115',
      label: '康保县',
      latitude: '40'
    }, {
      longitude: '115',
      label: '沽源县',
      latitude: '40'
    }, {
      longitude: '115',
      label: '尚义县',
      latitude: '40'
    }, {
      longitude: '115',
      label: '蔚县',
      latitude: '40'
    }, {
      longitude: '115',
      label: '阳原县',
      latitude: '40'
    }, {
      longitude: '115',
      label: '怀安县',
      latitude: '40'
    }, {
      longitude: '115',
      label: '怀来县',
      latitude: '40'
    }, {
      longitude: '115',
      label: '涿鹿县',
      latitude: '40'
    }, {
      longitude: '115',
      label: '赤城县',
      latitude: '40'
    }],
    label: '张家口市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '41'
    }, {
      longitude: '118',
      label: '双桥区',
      latitude: '41'
    }, {
      longitude: '118',
      label: '双滦区',
      latitude: '41'
    }, {
      longitude: '118',
      label: '鹰手营子矿区',
      latitude: '41'
    }, {
      longitude: '118',
      label: '承德县',
      latitude: '41'
    }, {
      longitude: '118',
      label: '兴隆县',
      latitude: '41'
    }, {
      longitude: '118',
      label: '平泉县',
      latitude: '41'
    }, {
      longitude: '118',
      label: '滦平县',
      latitude: '41'
    }, {
      longitude: '118',
      label: '隆化县',
      latitude: '41'
    }, {
      longitude: '118',
      label: '丰宁满族自治县',
      latitude: '41'
    }, {
      longitude: '118',
      label: '宽城满族自治县',
      latitude: '41'
    }, {
      longitude: '118',
      label: '围场满族蒙古族自治县',
      latitude: '41'
    }],
    label: '承德市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '38'
    }, {
      longitude: '117',
      label: '新华区',
      latitude: '38'
    }, {
      longitude: '117',
      label: '运河区',
      latitude: '38'
    }, {
      longitude: '117',
      label: '沧县',
      latitude: '38'
    }, {
      longitude: '117',
      label: '青县',
      latitude: '38'
    }, {
      longitude: '117',
      label: '东光县',
      latitude: '38'
    }, {
      longitude: '117',
      label: '海兴县',
      latitude: '38'
    }, {
      longitude: '117',
      label: '盐山县',
      latitude: '38'
    }, {
      longitude: '117',
      label: '肃宁县',
      latitude: '38'
    }, {
      longitude: '117',
      label: '南皮县',
      latitude: '38'
    }, {
      longitude: '117',
      label: '吴桥县',
      latitude: '38'
    }, {
      longitude: '117',
      label: '献县',
      latitude: '38'
    }, {
      longitude: '117',
      label: '孟村回族自治县',
      latitude: '38'
    }, {
      longitude: '117',
      label: '泊头市',
      latitude: '38'
    }, {
      longitude: '117',
      label: '任丘市',
      latitude: '38'
    }, {
      longitude: '117',
      label: '黄骅市',
      latitude: '38'
    }, {
      longitude: '117',
      label: '河间市',
      latitude: '38'
    }],
    label: '沧州市'
  }, {
    children: [{
      longitude: '116',
      label: '市辖区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '安次区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '广阳区',
      latitude: '39'
    }, {
      longitude: '116',
      label: '固安县',
      latitude: '39'
    }, {
      longitude: '116',
      label: '永清县',
      latitude: '39'
    }, {
      longitude: '116',
      label: '香河县',
      latitude: '39'
    }, {
      longitude: '116',
      label: '大城县',
      latitude: '39'
    }, {
      longitude: '116',
      label: '文安县',
      latitude: '39'
    }, {
      longitude: '116',
      label: '大厂回族自治县',
      latitude: '39'
    }, {
      longitude: '116',
      label: '霸州市',
      latitude: '39'
    }, {
      longitude: '116',
      label: '三河市',
      latitude: '39'
    }],
    label: '廊坊市'
  }, {
    children: [{
      longitude: '116',
      label: '市辖区',
      latitude: '37'
    }, {
      longitude: '116',
      label: '桃城区',
      latitude: '37'
    }, {
      longitude: '116',
      label: '冀州区',
      latitude: '37'
    }, {
      longitude: '116',
      label: '枣强县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '武邑县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '武强县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '饶阳县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '安平县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '故城县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '景县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '阜城县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '深州市',
      latitude: '37'
    }],
    label: '衡水市'
  }, {
    children: [{
      longitude: '115',
      label: '定州市',
      latitude: '37'
    }, {
      longitude: '115',
      label: '辛集市',
      latitude: '37'
    }],
    label: '省直辖县级行政区划'
  }],
  label: '河北省'
}, {
  children: [{
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '38'
    }, {
      longitude: '112',
      label: '小店区',
      latitude: '38'
    }, {
      longitude: '112',
      label: '迎泽区',
      latitude: '38'
    }, {
      longitude: '112',
      label: '杏花岭区',
      latitude: '38'
    }, {
      longitude: '112',
      label: '尖草坪区',
      latitude: '38'
    }, {
      longitude: '112',
      label: '万柏林区',
      latitude: '38'
    }, {
      longitude: '112',
      label: '晋源区',
      latitude: '38'
    }, {
      longitude: '112',
      label: '清徐县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '阳曲县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '娄烦县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '古交市',
      latitude: '38'
    }],
    label: '太原市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '40'
    }, {
      longitude: '113',
      label: '城区',
      latitude: '40'
    }, {
      longitude: '113',
      label: '矿区',
      latitude: '40'
    }, {
      longitude: '113',
      label: '南郊区',
      latitude: '40'
    }, {
      longitude: '113',
      label: '新荣区',
      latitude: '40'
    }, {
      longitude: '113',
      label: '阳高县',
      latitude: '40'
    }, {
      longitude: '113',
      label: '天镇县',
      latitude: '40'
    }, {
      longitude: '113',
      label: '广灵县',
      latitude: '40'
    }, {
      longitude: '113',
      label: '灵丘县',
      latitude: '40'
    }, {
      longitude: '113',
      label: '浑源县',
      latitude: '40'
    }, {
      longitude: '113',
      label: '左云县',
      latitude: '40'
    }, {
      longitude: '113',
      label: '大同县',
      latitude: '40'
    }],
    label: '大同市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '38'
    }, {
      longitude: '113',
      label: '城区',
      latitude: '38'
    }, {
      longitude: '113',
      label: '矿区',
      latitude: '38'
    }, {
      longitude: '113',
      label: '郊区',
      latitude: '38'
    }, {
      longitude: '113',
      label: '平定县',
      latitude: '38'
    }, {
      longitude: '113',
      label: '盂县',
      latitude: '38'
    }],
    label: '阳泉市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '113',
      label: '城区',
      latitude: '36'
    }, {
      longitude: '113',
      label: '郊区',
      latitude: '36'
    }, {
      longitude: '113',
      label: '长治县',
      latitude: '36'
    }, {
      longitude: '113',
      label: '襄垣县',
      latitude: '36'
    }, {
      longitude: '113',
      label: '屯留县',
      latitude: '36'
    }, {
      longitude: '113',
      label: '平顺县',
      latitude: '36'
    }, {
      longitude: '113',
      label: '黎城县',
      latitude: '36'
    }, {
      longitude: '113',
      label: '壶关县',
      latitude: '36'
    }, {
      longitude: '113',
      label: '长子县',
      latitude: '36'
    }, {
      longitude: '113',
      label: '武乡县',
      latitude: '36'
    }, {
      longitude: '113',
      label: '沁县',
      latitude: '36'
    }, {
      longitude: '113',
      label: '沁源县',
      latitude: '36'
    }, {
      longitude: '113',
      label: '潞城市',
      latitude: '36'
    }],
    label: '长治市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '113',
      label: '城区',
      latitude: '35'
    }, {
      longitude: '113',
      label: '沁水县',
      latitude: '35'
    }, {
      longitude: '113',
      label: '阳城县',
      latitude: '35'
    }, {
      longitude: '113',
      label: '陵川县',
      latitude: '35'
    }, {
      longitude: '113',
      label: '泽州县',
      latitude: '35'
    }, {
      longitude: '113',
      label: '高平市',
      latitude: '35'
    }],
    label: '晋城市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '39'
    }, {
      longitude: '112',
      label: '朔城区',
      latitude: '39'
    }, {
      longitude: '112',
      label: '平鲁区',
      latitude: '39'
    }, {
      longitude: '112',
      label: '山阴县',
      latitude: '39'
    }, {
      longitude: '112',
      label: '应县',
      latitude: '39'
    }, {
      longitude: '112',
      label: '右玉县',
      latitude: '39'
    }, {
      longitude: '112',
      label: '怀仁县',
      latitude: '39'
    }],
    label: '朔州市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '37'
    }, {
      longitude: '112',
      label: '榆次区',
      latitude: '37'
    }, {
      longitude: '112',
      label: '榆社县',
      latitude: '37'
    }, {
      longitude: '112',
      label: '左权县',
      latitude: '37'
    }, {
      longitude: '112',
      label: '和顺县',
      latitude: '37'
    }, {
      longitude: '112',
      label: '昔阳县',
      latitude: '37'
    }, {
      longitude: '112',
      label: '寿阳县',
      latitude: '37'
    }, {
      longitude: '112',
      label: '太谷县',
      latitude: '37'
    }, {
      longitude: '112',
      label: '祁县',
      latitude: '37'
    }, {
      longitude: '112',
      label: '平遥县',
      latitude: '37'
    }, {
      longitude: '112',
      label: '灵石县',
      latitude: '37'
    }, {
      longitude: '112',
      label: '介休市',
      latitude: '37'
    }],
    label: '晋中市'
  }, {
    children: [{
      longitude: '111',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '111',
      label: '盐湖区',
      latitude: '35'
    }, {
      longitude: '111',
      label: '临猗县',
      latitude: '35'
    }, {
      longitude: '111',
      label: '万荣县',
      latitude: '35'
    }, {
      longitude: '111',
      label: '闻喜县',
      latitude: '35'
    }, {
      longitude: '111',
      label: '稷山县',
      latitude: '35'
    }, {
      longitude: '111',
      label: '新绛县',
      latitude: '35'
    }, {
      longitude: '111',
      label: '绛县',
      latitude: '35'
    }, {
      longitude: '111',
      label: '垣曲县',
      latitude: '35'
    }, {
      longitude: '111',
      label: '夏县',
      latitude: '35'
    }, {
      longitude: '111',
      label: '平陆县',
      latitude: '35'
    }, {
      longitude: '111',
      label: '芮城县',
      latitude: '35'
    }, {
      longitude: '111',
      label: '永济市',
      latitude: '35'
    }, {
      longitude: '111',
      label: '河津市',
      latitude: '35'
    }],
    label: '运城市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '38'
    }, {
      longitude: '112',
      label: '忻府区',
      latitude: '38'
    }, {
      longitude: '112',
      label: '定襄县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '五台县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '代县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '繁峙县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '宁武县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '静乐县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '神池县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '五寨县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '岢岚县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '河曲县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '保德县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '偏关县',
      latitude: '38'
    }, {
      longitude: '112',
      label: '原平市',
      latitude: '38'
    }],
    label: '忻州市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '112',
      label: '尧都区',
      latitude: '36'
    }, {
      longitude: '112',
      label: '曲沃县',
      latitude: '36'
    }, {
      longitude: '112',
      label: '翼城县',
      latitude: '36'
    }, {
      longitude: '112',
      label: '襄汾县',
      latitude: '36'
    }, {
      longitude: '112',
      label: '洪洞县',
      latitude: '36'
    }, {
      longitude: '112',
      label: '古县',
      latitude: '36'
    }, {
      longitude: '112',
      label: '安泽县',
      latitude: '36'
    }, {
      longitude: '112',
      label: '浮山县',
      latitude: '36'
    }, {
      longitude: '112',
      label: '吉县',
      latitude: '36'
    }, {
      longitude: '112',
      label: '乡宁县',
      latitude: '36'
    }, {
      longitude: '112',
      label: '大宁县',
      latitude: '36'
    }, {
      longitude: '112',
      label: '隰县',
      latitude: '36'
    }, {
      longitude: '112',
      label: '永和县',
      latitude: '36'
    }, {
      longitude: '112',
      label: '蒲县',
      latitude: '36'
    }, {
      longitude: '112',
      label: '汾西县',
      latitude: '36'
    }, {
      longitude: '112',
      label: '侯马市',
      latitude: '36'
    }, {
      longitude: '112',
      label: '霍州市',
      latitude: '36'
    }],
    label: '临汾市'
  }, {
    children: [{
      longitude: '111',
      label: '市辖区',
      latitude: '37'
    }, {
      longitude: '111',
      label: '离石区',
      latitude: '37'
    }, {
      longitude: '111',
      label: '文水县',
      latitude: '37'
    }, {
      longitude: '111',
      label: '交城县',
      latitude: '37'
    }, {
      longitude: '111',
      label: '兴县',
      latitude: '37'
    }, {
      longitude: '111',
      label: '临县',
      latitude: '37'
    }, {
      longitude: '111',
      label: '柳林县',
      latitude: '37'
    }, {
      longitude: '111',
      label: '石楼县',
      latitude: '37'
    }, {
      longitude: '111',
      label: '岚县',
      latitude: '37'
    }, {
      longitude: '111',
      label: '方山县',
      latitude: '37'
    }, {
      longitude: '111',
      label: '中阳县',
      latitude: '37'
    }, {
      longitude: '111',
      label: '交口县',
      latitude: '37'
    }, {
      longitude: '111',
      label: '孝义市',
      latitude: '37'
    }, {
      longitude: '111',
      label: '汾阳市',
      latitude: '37'
    }],
    label: '吕梁市'
  }],
  label: '山西省'
}, {
  children: [{
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '41'
    }, {
      longitude: '112',
      label: '新城区',
      latitude: '41'
    }, {
      longitude: '112',
      label: '回民区',
      latitude: '41'
    }, {
      longitude: '112',
      label: '玉泉区',
      latitude: '41'
    }, {
      longitude: '112',
      label: '赛罕区',
      latitude: '41'
    }, {
      longitude: '112',
      label: '土默特左旗',
      latitude: '41'
    }, {
      longitude: '112',
      label: '托克托县',
      latitude: '41'
    }, {
      longitude: '112',
      label: '和林格尔县',
      latitude: '41'
    }, {
      longitude: '112',
      label: '清水河县',
      latitude: '41'
    }, {
      longitude: '112',
      label: '武川县',
      latitude: '41'
    }],
    label: '呼和浩特市'
  }, {
    children: [{
      longitude: '110',
      label: '市辖区',
      latitude: '40'
    }, {
      longitude: '110',
      label: '东河区',
      latitude: '40'
    }, {
      longitude: '110',
      label: '昆都仑区',
      latitude: '40'
    }, {
      longitude: '110',
      label: '青山区',
      latitude: '40'
    }, {
      longitude: '110',
      label: '石拐区',
      latitude: '40'
    }, {
      longitude: '110',
      label: '白云鄂博矿区',
      latitude: '40'
    }, {
      longitude: '110',
      label: '九原区',
      latitude: '40'
    }, {
      longitude: '110',
      label: '土默特右旗',
      latitude: '40'
    }, {
      longitude: '110',
      label: '固阳县',
      latitude: '40'
    }, {
      longitude: '110',
      label: '达尔罕茂明安联合旗',
      latitude: '40'
    }],
    label: '包头市'
  }, {
    children: [{
      longitude: '107',
      label: '市辖区',
      latitude: '39'
    }, {
      longitude: '107',
      label: '海勃湾区',
      latitude: '39'
    }, {
      longitude: '107',
      label: '海南区',
      latitude: '39'
    }, {
      longitude: '107',
      label: '乌达区',
      latitude: '39'
    }],
    label: '乌海市'
  }, {
    children: [{
      longitude: '119',
      label: '市辖区',
      latitude: '42'
    }, {
      longitude: '119',
      label: '红山区',
      latitude: '42'
    }, {
      longitude: '119',
      label: '元宝山区',
      latitude: '42'
    }, {
      longitude: '119',
      label: '松山区',
      latitude: '42'
    }, {
      longitude: '119',
      label: '阿鲁科尔沁旗',
      latitude: '42'
    }, {
      longitude: '119',
      label: '巴林左旗',
      latitude: '42'
    }, {
      longitude: '119',
      label: '巴林右旗',
      latitude: '42'
    }, {
      longitude: '119',
      label: '林西县',
      latitude: '42'
    }, {
      longitude: '119',
      label: '克什克腾旗',
      latitude: '42'
    }, {
      longitude: '119',
      label: '翁牛特旗',
      latitude: '42'
    }, {
      longitude: '119',
      label: '喀喇沁旗',
      latitude: '42'
    }, {
      longitude: '119',
      label: '宁城县',
      latitude: '42'
    }, {
      longitude: '119',
      label: '敖汉旗',
      latitude: '42'
    }],
    label: '赤峰市'
  }, {
    children: [{
      longitude: '122',
      label: '市辖区',
      latitude: '43'
    }, {
      longitude: '122',
      label: '科尔沁区',
      latitude: '43'
    }, {
      longitude: '122',
      label: '科尔沁左翼中旗',
      latitude: '43'
    }, {
      longitude: '122',
      label: '科尔沁左翼后旗',
      latitude: '43'
    }, {
      longitude: '122',
      label: '开鲁县',
      latitude: '43'
    }, {
      longitude: '122',
      label: '库伦旗',
      latitude: '43'
    }, {
      longitude: '122',
      label: '奈曼旗',
      latitude: '43'
    }, {
      longitude: '122',
      label: '扎鲁特旗',
      latitude: '43'
    }, {
      longitude: '122',
      label: '霍林郭勒市',
      latitude: '43'
    }],
    label: '通辽市'
  }, {
    children: [{
      longitude: '110',
      label: '市辖区',
      latitude: '39'
    }, {
      longitude: '110',
      label: '东胜区',
      latitude: '39'
    }, {
      longitude: '110',
      label: '康巴什区',
      latitude: '39'
    }, {
      longitude: '110',
      label: '达拉特旗',
      latitude: '39'
    }, {
      longitude: '110',
      label: '准格尔旗',
      latitude: '39'
    }, {
      longitude: '110',
      label: '鄂托克前旗',
      latitude: '39'
    }, {
      longitude: '110',
      label: '鄂托克旗',
      latitude: '39'
    }, {
      longitude: '110',
      label: '杭锦旗',
      latitude: '39'
    }, {
      longitude: '110',
      label: '乌审旗',
      latitude: '39'
    }, {
      longitude: '110',
      label: '伊金霍洛旗',
      latitude: '39'
    }],
    label: '鄂尔多斯市'
  }, {
    children: [{
      longitude: '120',
      label: '市辖区',
      latitude: '49'
    }, {
      longitude: '120',
      label: '海拉尔区',
      latitude: '49'
    }, {
      longitude: '120',
      label: '扎赉诺尔区',
      latitude: '49'
    }, {
      longitude: '120',
      label: '阿荣旗',
      latitude: '49'
    }, {
      longitude: '120',
      label: '莫力达瓦达斡尔族自治旗',
      latitude: '49'
    }, {
      longitude: '120',
      label: '鄂伦春自治旗',
      latitude: '49'
    }, {
      longitude: '120',
      label: '鄂温克族自治旗',
      latitude: '49'
    }, {
      longitude: '120',
      label: '陈巴尔虎旗',
      latitude: '49'
    }, {
      longitude: '120',
      label: '新巴尔虎左旗',
      latitude: '49'
    }, {
      longitude: '120',
      label: '新巴尔虎右旗',
      latitude: '49'
    }, {
      longitude: '120',
      label: '满洲里市',
      latitude: '49'
    }, {
      longitude: '120',
      label: '牙克石市',
      latitude: '49'
    }, {
      longitude: '120',
      label: '扎兰屯市',
      latitude: '49'
    }, {
      longitude: '120',
      label: '额尔古纳市',
      latitude: '49'
    }, {
      longitude: '120',
      label: '根河市',
      latitude: '49'
    }],
    label: '呼伦贝尔市'
  }, {
    children: [{
      longitude: '107',
      label: '市辖区',
      latitude: '41'
    }, {
      longitude: '107',
      label: '临河区',
      latitude: '41'
    }, {
      longitude: '107',
      label: '五原县',
      latitude: '41'
    }, {
      longitude: '107',
      label: '磴口县',
      latitude: '41'
    }, {
      longitude: '107',
      label: '乌拉特前旗',
      latitude: '41'
    }, {
      longitude: '107',
      label: '乌拉特中旗',
      latitude: '41'
    }, {
      longitude: '107',
      label: '乌拉特后旗',
      latitude: '41'
    }, {
      longitude: '107',
      label: '杭锦后旗',
      latitude: '41'
    }],
    label: '巴彦淖尔市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '41'
    }, {
      longitude: '113',
      label: '集宁区',
      latitude: '41'
    }, {
      longitude: '113',
      label: '卓资县',
      latitude: '41'
    }, {
      longitude: '113',
      label: '化德县',
      latitude: '41'
    }, {
      longitude: '113',
      label: '商都县',
      latitude: '41'
    }, {
      longitude: '113',
      label: '兴和县',
      latitude: '41'
    }, {
      longitude: '113',
      label: '凉城县',
      latitude: '41'
    }, {
      longitude: '113',
      label: '察哈尔右翼前旗',
      latitude: '41'
    }, {
      longitude: '113',
      label: '察哈尔右翼中旗',
      latitude: '41'
    }, {
      longitude: '113',
      label: '察哈尔右翼后旗',
      latitude: '41'
    }, {
      longitude: '113',
      label: '四子王旗',
      latitude: '41'
    }, {
      longitude: '113',
      label: '丰镇市',
      latitude: '41'
    }],
    label: '乌兰察布市'
  }, {
    children: [{
      longitude: '122',
      label: '乌兰浩特市',
      latitude: '46'
    }, {
      longitude: '122',
      label: '阿尔山市',
      latitude: '46'
    }, {
      longitude: '122',
      label: '科尔沁右翼前旗',
      latitude: '46'
    }, {
      longitude: '122',
      label: '科尔沁右翼中旗',
      latitude: '46'
    }, {
      longitude: '122',
      label: '扎赉特旗',
      latitude: '46'
    }, {
      longitude: '122',
      label: '突泉县',
      latitude: '46'
    }],
    label: '兴安盟'
  }, {
    children: [{
      longitude: '116',
      label: '二连浩特市',
      latitude: '44'
    }, {
      longitude: '116',
      label: '锡林浩特市',
      latitude: '44'
    }, {
      longitude: '116',
      label: '阿巴嘎旗',
      latitude: '44'
    }, {
      longitude: '116',
      label: '苏尼特左旗',
      latitude: '44'
    }, {
      longitude: '116',
      label: '苏尼特右旗',
      latitude: '44'
    }, {
      longitude: '116',
      label: '东乌珠穆沁旗',
      latitude: '44'
    }, {
      longitude: '116',
      label: '西乌珠穆沁旗',
      latitude: '44'
    }, {
      longitude: '116',
      label: '太仆寺旗',
      latitude: '44'
    }, {
      longitude: '116',
      label: '镶黄旗',
      latitude: '44'
    }, {
      longitude: '116',
      label: '正镶白旗',
      latitude: '44'
    }, {
      longitude: '116',
      label: '正蓝旗',
      latitude: '44'
    }, {
      longitude: '116',
      label: '多伦县',
      latitude: '44'
    }],
    label: '锡林郭勒盟'
  }, {
    children: [{
      longitude: '106',
      label: '阿拉善左旗',
      latitude: '39'
    }, {
      longitude: '106',
      label: '阿拉善右旗',
      latitude: '39'
    }, {
      longitude: '106',
      label: '额济纳旗',
      latitude: '39'
    }],
    label: '阿拉善盟'
  }],
  label: '内蒙古自治区'
}, {
  children: [{
    children: [{
      longitude: '123',
      label: '市辖区',
      latitude: '42'
    }, {
      longitude: '123',
      label: '和平区',
      latitude: '42'
    }, {
      longitude: '123',
      label: '沈河区',
      latitude: '42'
    }, {
      longitude: '123',
      label: '大东区',
      latitude: '42'
    }, {
      longitude: '123',
      label: '皇姑区',
      latitude: '42'
    }, {
      longitude: '123',
      label: '铁西区',
      latitude: '42'
    }, {
      longitude: '123',
      label: '苏家屯区',
      latitude: '42'
    }, {
      longitude: '123',
      label: '浑南区',
      latitude: '42'
    }, {
      longitude: '123',
      label: '沈北新区',
      latitude: '42'
    }, {
      longitude: '123',
      label: '于洪区',
      latitude: '42'
    }, {
      longitude: '123',
      label: '辽中区',
      latitude: '42'
    }, {
      longitude: '123',
      label: '康平县',
      latitude: '42'
    }, {
      longitude: '123',
      label: '法库县',
      latitude: '42'
    }, {
      longitude: '123',
      label: '新民市',
      latitude: '42'
    }],
    label: '沈阳市'
  }, {
    children: [{
      longitude: '122',
      label: '市辖区',
      latitude: '39'
    }, {
      longitude: '122',
      label: '中山区',
      latitude: '39'
    }, {
      longitude: '122',
      label: '西岗区',
      latitude: '39'
    }, {
      longitude: '122',
      label: '沙河口区',
      latitude: '39'
    }, {
      longitude: '122',
      label: '甘井子区',
      latitude: '39'
    }, {
      longitude: '122',
      label: '旅顺口区',
      latitude: '39'
    }, {
      longitude: '122',
      label: '金州区',
      latitude: '39'
    }, {
      longitude: '122',
      label: '普兰店区',
      latitude: '39'
    }, {
      longitude: '122',
      label: '长海县',
      latitude: '39'
    }, {
      longitude: '122',
      label: '瓦房店市',
      latitude: '39'
    }, {
      longitude: '122',
      label: '庄河市',
      latitude: '39'
    }],
    label: '大连市'
  }, {
    children: [{
      longitude: '123',
      label: '市辖区',
      latitude: '41'
    }, {
      longitude: '123',
      label: '铁东区',
      latitude: '41'
    }, {
      longitude: '123',
      label: '铁西区',
      latitude: '41'
    }, {
      longitude: '123',
      label: '立山区',
      latitude: '41'
    }, {
      longitude: '123',
      label: '千山区',
      latitude: '41'
    }, {
      longitude: '123',
      label: '台安县',
      latitude: '41'
    }, {
      longitude: '123',
      label: '岫岩满族自治县',
      latitude: '41'
    }, {
      longitude: '123',
      label: '海城市',
      latitude: '41'
    }],
    label: '鞍山市'
  }, {
    children: [{
      longitude: '124',
      label: '市辖区',
      latitude: '42'
    }, {
      longitude: '124',
      label: '新抚区',
      latitude: '42'
    }, {
      longitude: '124',
      label: '东洲区',
      latitude: '42'
    }, {
      longitude: '124',
      label: '望花区',
      latitude: '42'
    }, {
      longitude: '124',
      label: '顺城区',
      latitude: '42'
    }, {
      longitude: '124',
      label: '抚顺县',
      latitude: '42'
    }, {
      longitude: '124',
      label: '新宾满族自治县',
      latitude: '42'
    }, {
      longitude: '124',
      label: '清原满族自治县',
      latitude: '42'
    }],
    label: '抚顺市'
  }, {
    children: [{
      longitude: '124',
      label: '市辖区',
      latitude: '41'
    }, {
      longitude: '124',
      label: '平山区',
      latitude: '41'
    }, {
      longitude: '124',
      label: '溪湖区',
      latitude: '41'
    }, {
      longitude: '124',
      label: '明山区',
      latitude: '41'
    }, {
      longitude: '124',
      label: '南芬区',
      latitude: '41'
    }, {
      longitude: '124',
      label: '本溪满族自治县',
      latitude: '41'
    }, {
      longitude: '124',
      label: '桓仁满族自治县',
      latitude: '41'
    }],
    label: '本溪市'
  }, {
    children: [{
      longitude: '124',
      label: '市辖区',
      latitude: '40'
    }, {
      longitude: '124',
      label: '元宝区',
      latitude: '40'
    }, {
      longitude: '124',
      label: '振兴区',
      latitude: '40'
    }, {
      longitude: '124',
      label: '振安区',
      latitude: '40'
    }, {
      longitude: '124',
      label: '宽甸满族自治县',
      latitude: '40'
    }, {
      longitude: '124',
      label: '东港市',
      latitude: '40'
    }, {
      longitude: '124',
      label: '凤城市',
      latitude: '40'
    }],
    label: '丹东市'
  }, {
    children: [{
      longitude: '121',
      label: '市辖区',
      latitude: '41'
    }, {
      longitude: '121',
      label: '古塔区',
      latitude: '41'
    }, {
      longitude: '121',
      label: '凌河区',
      latitude: '41'
    }, {
      longitude: '121',
      label: '太和区',
      latitude: '41'
    }, {
      longitude: '121',
      label: '黑山县',
      latitude: '41'
    }, {
      longitude: '121',
      label: '义县',
      latitude: '41'
    }, {
      longitude: '121',
      label: '凌海市',
      latitude: '41'
    }, {
      longitude: '121',
      label: '北镇市',
      latitude: '41'
    }],
    label: '锦州市'
  }, {
    children: [{
      longitude: '122',
      label: '市辖区',
      latitude: '41'
    }, {
      longitude: '122',
      label: '站前区',
      latitude: '41'
    }, {
      longitude: '122',
      label: '西市区',
      latitude: '41'
    }, {
      longitude: '122',
      label: '鲅鱼圈区',
      latitude: '41'
    }, {
      longitude: '122',
      label: '老边区',
      latitude: '41'
    }, {
      longitude: '122',
      label: '盖州市',
      latitude: '41'
    }, {
      longitude: '122',
      label: '大石桥市',
      latitude: '41'
    }],
    label: '营口市'
  }, {
    children: [{
      longitude: '122',
      label: '市辖区',
      latitude: '42'
    }, {
      longitude: '122',
      label: '海州区',
      latitude: '42'
    }, {
      longitude: '122',
      label: '新邱区',
      latitude: '42'
    }, {
      longitude: '122',
      label: '太平区',
      latitude: '42'
    }, {
      longitude: '122',
      label: '清河门区',
      latitude: '42'
    }, {
      longitude: '122',
      label: '细河区',
      latitude: '42'
    }, {
      longitude: '122',
      label: '阜新蒙古族自治县',
      latitude: '42'
    }, {
      longitude: '122',
      label: '彰武县',
      latitude: '42'
    }],
    label: '阜新市'
  }, {
    children: [{
      longitude: '123',
      label: '市辖区',
      latitude: '41'
    }, {
      longitude: '123',
      label: '白塔区',
      latitude: '41'
    }, {
      longitude: '123',
      label: '文圣区',
      latitude: '41'
    }, {
      longitude: '123',
      label: '宏伟区',
      latitude: '41'
    }, {
      longitude: '123',
      label: '弓长岭区',
      latitude: '41'
    }, {
      longitude: '123',
      label: '太子河区',
      latitude: '41'
    }, {
      longitude: '123',
      label: '辽阳县',
      latitude: '41'
    }, {
      longitude: '123',
      label: '灯塔市',
      latitude: '41'
    }],
    label: '辽阳市'
  }, {
    children: [{
      longitude: '122',
      label: '市辖区',
      latitude: '41'
    }, {
      longitude: '122',
      label: '双台子区',
      latitude: '41'
    }, {
      longitude: '122',
      label: '兴隆台区',
      latitude: '41'
    }, {
      longitude: '122',
      label: '大洼区',
      latitude: '41'
    }, {
      longitude: '122',
      label: '盘山县',
      latitude: '41'
    }],
    label: '盘锦市'
  }, {
    children: [{
      longitude: '124',
      label: '市辖区',
      latitude: '42'
    }, {
      longitude: '124',
      label: '银州区',
      latitude: '42'
    }, {
      longitude: '124',
      label: '清河区',
      latitude: '42'
    }, {
      longitude: '124',
      label: '铁岭县',
      latitude: '42'
    }, {
      longitude: '124',
      label: '西丰县',
      latitude: '42'
    }, {
      longitude: '124',
      label: '昌图县',
      latitude: '42'
    }, {
      longitude: '124',
      label: '调兵山市',
      latitude: '42'
    }, {
      longitude: '124',
      label: '开原市',
      latitude: '42'
    }],
    label: '铁岭市'
  }, {
    children: [{
      longitude: '120',
      label: '市辖区',
      latitude: '42'
    }, {
      longitude: '120',
      label: '双塔区',
      latitude: '42'
    }, {
      longitude: '120',
      label: '龙城区',
      latitude: '42'
    }, {
      longitude: '120',
      label: '朝阳县',
      latitude: '42'
    }, {
      longitude: '120',
      label: '建平县',
      latitude: '42'
    }, {
      longitude: '120',
      label: '喀喇沁左翼蒙古族自治县',
      latitude: '42'
    }, {
      longitude: '120',
      label: '北票市',
      latitude: '42'
    }, {
      longitude: '120',
      label: '凌源市',
      latitude: '42'
    }],
    label: '朝阳市'
  }, {
    children: [{
      longitude: '121',
      label: '市辖区',
      latitude: '41'
    }, {
      longitude: '121',
      label: '连山区',
      latitude: '41'
    }, {
      longitude: '121',
      label: '龙港区',
      latitude: '41'
    }, {
      longitude: '121',
      label: '南票区',
      latitude: '41'
    }, {
      longitude: '121',
      label: '绥中县',
      latitude: '41'
    }, {
      longitude: '121',
      label: '建昌县',
      latitude: '41'
    }, {
      longitude: '121',
      label: '兴城市',
      latitude: '41'
    }],
    label: '葫芦岛市'
  }],
  label: '辽宁省'
}, {
  children: [{
    children: [{
      longitude: '125',
      label: '市辖区',
      latitude: '44'
    }, {
      longitude: '125',
      label: '南关区',
      latitude: '44'
    }, {
      longitude: '125',
      label: '宽城区',
      latitude: '44'
    }, {
      longitude: '125',
      label: '朝阳区',
      latitude: '44'
    }, {
      longitude: '125',
      label: '二道区',
      latitude: '44'
    }, {
      longitude: '125',
      label: '绿园区',
      latitude: '44'
    }, {
      longitude: '125',
      label: '双阳区',
      latitude: '44'
    }, {
      longitude: '125',
      label: '九台区',
      latitude: '44'
    }, {
      longitude: '125',
      label: '农安县',
      latitude: '44'
    }, {
      longitude: '125',
      label: '榆树市',
      latitude: '44'
    }, {
      longitude: '125',
      label: '德惠市',
      latitude: '44'
    }],
    label: '长春市'
  }, {
    children: [{
      longitude: '127',
      label: '市辖区',
      latitude: '44'
    }, {
      longitude: '127',
      label: '昌邑区',
      latitude: '44'
    }, {
      longitude: '127',
      label: '龙潭区',
      latitude: '44'
    }, {
      longitude: '127',
      label: '船营区',
      latitude: '44'
    }, {
      longitude: '127',
      label: '丰满区',
      latitude: '44'
    }, {
      longitude: '127',
      label: '永吉县',
      latitude: '44'
    }, {
      longitude: '127',
      label: '蛟河市',
      latitude: '44'
    }, {
      longitude: '127',
      label: '桦甸市',
      latitude: '44'
    }, {
      longitude: '127',
      label: '舒兰市',
      latitude: '44'
    }, {
      longitude: '127',
      label: '磐石市',
      latitude: '44'
    }],
    label: '吉林市'
  }, {
    children: [{
      longitude: '124',
      label: '市辖区',
      latitude: '43'
    }, {
      longitude: '124',
      label: '铁西区',
      latitude: '43'
    }, {
      longitude: '124',
      label: '铁东区',
      latitude: '43'
    }, {
      longitude: '124',
      label: '梨树县',
      latitude: '43'
    }, {
      longitude: '124',
      label: '伊通满族自治县',
      latitude: '43'
    }, {
      longitude: '124',
      label: '公主岭市',
      latitude: '43'
    }, {
      longitude: '124',
      label: '双辽市',
      latitude: '43'
    }],
    label: '四平市'
  }, {
    children: [{
      longitude: '125',
      label: '市辖区',
      latitude: '43'
    }, {
      longitude: '125',
      label: '龙山区',
      latitude: '43'
    }, {
      longitude: '125',
      label: '西安区',
      latitude: '43'
    }, {
      longitude: '125',
      label: '东丰县',
      latitude: '43'
    }, {
      longitude: '125',
      label: '东辽县',
      latitude: '43'
    }],
    label: '辽源市'
  }, {
    children: [{
      longitude: '126',
      label: '市辖区',
      latitude: '42'
    }, {
      longitude: '126',
      label: '东昌区',
      latitude: '42'
    }, {
      longitude: '126',
      label: '二道江区',
      latitude: '42'
    }, {
      longitude: '126',
      label: '通化县',
      latitude: '42'
    }, {
      longitude: '126',
      label: '辉南县',
      latitude: '42'
    }, {
      longitude: '126',
      label: '柳河县',
      latitude: '42'
    }, {
      longitude: '126',
      label: '梅河口市',
      latitude: '42'
    }, {
      longitude: '126',
      label: '集安市',
      latitude: '42'
    }],
    label: '通化市'
  }, {
    children: [{
      longitude: '126',
      label: '市辖区',
      latitude: '42'
    }, {
      longitude: '126',
      label: '浑江区',
      latitude: '42'
    }, {
      longitude: '126',
      label: '江源区',
      latitude: '42'
    }, {
      longitude: '126',
      label: '抚松县',
      latitude: '42'
    }, {
      longitude: '126',
      label: '靖宇县',
      latitude: '42'
    }, {
      longitude: '126',
      label: '长白朝鲜族自治县',
      latitude: '42'
    }, {
      longitude: '126',
      label: '临江市',
      latitude: '42'
    }],
    label: '白山市'
  }, {
    children: [{
      longitude: '125',
      label: '市辖区',
      latitude: '45'
    }, {
      longitude: '125',
      label: '宁江区',
      latitude: '45'
    }, {
      longitude: '125',
      label: '前郭尔罗斯蒙古族自治县',
      latitude: '45'
    }, {
      longitude: '125',
      label: '长岭县',
      latitude: '45'
    }, {
      longitude: '125',
      label: '乾安县',
      latitude: '45'
    }, {
      longitude: '125',
      label: '扶余市',
      latitude: '45'
    }],
    label: '松原市'
  }, {
    children: [{
      longitude: '123',
      label: '市辖区',
      latitude: '46'
    }, {
      longitude: '123',
      label: '洮北区',
      latitude: '46'
    }, {
      longitude: '123',
      label: '镇赉县',
      latitude: '46'
    }, {
      longitude: '123',
      label: '通榆县',
      latitude: '46'
    }, {
      longitude: '123',
      label: '洮南市',
      latitude: '46'
    }, {
      longitude: '123',
      label: '大安市',
      latitude: '46'
    }],
    label: '白城市'
  }, {
    children: [{
      longitude: '130',
      label: '延吉市',
      latitude: '43'
    }, {
      longitude: '130',
      label: '图们市',
      latitude: '43'
    }, {
      longitude: '130',
      label: '敦化市',
      latitude: '43'
    }, {
      longitude: '130',
      label: '珲春市',
      latitude: '43'
    }, {
      longitude: '130',
      label: '龙井市',
      latitude: '43'
    }, {
      longitude: '130',
      label: '和龙市',
      latitude: '43'
    }, {
      longitude: '130',
      label: '汪清县',
      latitude: '43'
    }, {
      longitude: '130',
      label: '安图县',
      latitude: '43'
    }],
    label: '延边朝鲜族自治州'
  }],
  label: '吉林省'
}, {
  children: [{
    children: [{
      longitude: '127',
      label: '市辖区',
      latitude: '46'
    }, {
      longitude: '127',
      label: '道里区',
      latitude: '46'
    }, {
      longitude: '127',
      label: '南岗区',
      latitude: '46'
    }, {
      longitude: '127',
      label: '道外区',
      latitude: '46'
    }, {
      longitude: '127',
      label: '平房区',
      latitude: '46'
    }, {
      longitude: '127',
      label: '松北区',
      latitude: '46'
    }, {
      longitude: '127',
      label: '香坊区',
      latitude: '46'
    }, {
      longitude: '127',
      label: '呼兰区',
      latitude: '46'
    }, {
      longitude: '127',
      label: '阿城区',
      latitude: '46'
    }, {
      longitude: '127',
      label: '双城区',
      latitude: '46'
    }, {
      longitude: '127',
      label: '依兰县',
      latitude: '46'
    }, {
      longitude: '127',
      label: '方正县',
      latitude: '46'
    }, {
      longitude: '127',
      label: '宾县',
      latitude: '46'
    }, {
      longitude: '127',
      label: '巴彦县',
      latitude: '46'
    }, {
      longitude: '127',
      label: '木兰县',
      latitude: '46'
    }, {
      longitude: '127',
      label: '通河县',
      latitude: '46'
    }, {
      longitude: '127',
      label: '延寿县',
      latitude: '46'
    }, {
      longitude: '127',
      label: '尚志市',
      latitude: '46'
    }, {
      longitude: '127',
      label: '五常市',
      latitude: '46'
    }],
    label: '哈尔滨市'
  }, {
    children: [{
      longitude: '124',
      label: '市辖区',
      latitude: '47'
    }, {
      longitude: '124',
      label: '龙沙区',
      latitude: '47'
    }, {
      longitude: '124',
      label: '建华区',
      latitude: '47'
    }, {
      longitude: '124',
      label: '铁锋区',
      latitude: '47'
    }, {
      longitude: '124',
      label: '昂昂溪区',
      latitude: '47'
    }, {
      longitude: '124',
      label: '富拉尔基区',
      latitude: '47'
    }, {
      longitude: '124',
      label: '碾子山区',
      latitude: '47'
    }, {
      longitude: '124',
      label: '梅里斯达斡尔族区',
      latitude: '47'
    }, {
      longitude: '124',
      label: '龙江县',
      latitude: '47'
    }, {
      longitude: '124',
      label: '依安县',
      latitude: '47'
    }, {
      longitude: '124',
      label: '泰来县',
      latitude: '47'
    }, {
      longitude: '124',
      label: '甘南县',
      latitude: '47'
    }, {
      longitude: '124',
      label: '富裕县',
      latitude: '47'
    }, {
      longitude: '124',
      label: '克山县',
      latitude: '47'
    }, {
      longitude: '124',
      label: '克东县',
      latitude: '47'
    }, {
      longitude: '124',
      label: '拜泉县',
      latitude: '47'
    }, {
      longitude: '124',
      label: '讷河市',
      latitude: '47'
    }],
    label: '齐齐哈尔市'
  }, {
    children: [{
      longitude: '131',
      label: '市辖区',
      latitude: '45'
    }, {
      longitude: '131',
      label: '鸡冠区',
      latitude: '45'
    }, {
      longitude: '131',
      label: '恒山区',
      latitude: '45'
    }, {
      longitude: '131',
      label: '滴道区',
      latitude: '45'
    }, {
      longitude: '131',
      label: '梨树区',
      latitude: '45'
    }, {
      longitude: '131',
      label: '城子河区',
      latitude: '45'
    }, {
      longitude: '131',
      label: '麻山区',
      latitude: '45'
    }, {
      longitude: '131',
      label: '鸡东县',
      latitude: '45'
    }, {
      longitude: '131',
      label: '虎林市',
      latitude: '45'
    }, {
      longitude: '131',
      label: '密山市',
      latitude: '45'
    }],
    label: '鸡西市'
  }, {
    children: [{
      longitude: '130',
      label: '市辖区',
      latitude: '47'
    }, {
      longitude: '130',
      label: '向阳区',
      latitude: '47'
    }, {
      longitude: '130',
      label: '工农区',
      latitude: '47'
    }, {
      longitude: '130',
      label: '南山区',
      latitude: '47'
    }, {
      longitude: '130',
      label: '兴安区',
      latitude: '47'
    }, {
      longitude: '130',
      label: '东山区',
      latitude: '47'
    }, {
      longitude: '130',
      label: '兴山区',
      latitude: '47'
    }, {
      longitude: '130',
      label: '萝北县',
      latitude: '47'
    }, {
      longitude: '130',
      label: '绥滨县',
      latitude: '47'
    }],
    label: '鹤岗市'
  }, {
    children: [{
      longitude: '131',
      label: '市辖区',
      latitude: '47'
    }, {
      longitude: '131',
      label: '尖山区',
      latitude: '47'
    }, {
      longitude: '131',
      label: '岭东区',
      latitude: '47'
    }, {
      longitude: '131',
      label: '四方台区',
      latitude: '47'
    }, {
      longitude: '131',
      label: '宝山区',
      latitude: '47'
    }, {
      longitude: '131',
      label: '集贤县',
      latitude: '47'
    }, {
      longitude: '131',
      label: '友谊县',
      latitude: '47'
    }, {
      longitude: '131',
      label: '宝清县',
      latitude: '47'
    }, {
      longitude: '131',
      label: '饶河县',
      latitude: '47'
    }],
    label: '双鸭山市'
  }, {
    children: [{
      longitude: '125',
      label: '市辖区',
      latitude: '47'
    }, {
      longitude: '125',
      label: '萨尔图区',
      latitude: '47'
    }, {
      longitude: '125',
      label: '龙凤区',
      latitude: '47'
    }, {
      longitude: '125',
      label: '让胡路区',
      latitude: '47'
    }, {
      longitude: '125',
      label: '红岗区',
      latitude: '47'
    }, {
      longitude: '125',
      label: '大同区',
      latitude: '47'
    }, {
      longitude: '125',
      label: '肇州县',
      latitude: '47'
    }, {
      longitude: '125',
      label: '肇源县',
      latitude: '47'
    }, {
      longitude: '125',
      label: '林甸县',
      latitude: '47'
    }, {
      longitude: '125',
      label: '杜尔伯特蒙古族自治县',
      latitude: '47'
    }],
    label: '大庆市'
  }, {
    children: [{
      longitude: '129',
      label: '市辖区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '伊春区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '南岔区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '友好区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '西林区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '翠峦区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '新青区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '美溪区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '金山屯区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '五营区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '乌马河区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '汤旺河区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '带岭区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '乌伊岭区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '红星区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '上甘岭区',
      latitude: '48'
    }, {
      longitude: '129',
      label: '嘉荫县',
      latitude: '48'
    }, {
      longitude: '129',
      label: '铁力市',
      latitude: '48'
    }],
    label: '伊春市'
  }, {
    children: [{
      longitude: '130',
      label: '市辖区',
      latitude: '47'
    }, {
      longitude: '130',
      label: '向阳区',
      latitude: '47'
    }, {
      longitude: '130',
      label: '前进区',
      latitude: '47'
    }, {
      longitude: '130',
      label: '东风区',
      latitude: '47'
    }, {
      longitude: '130',
      label: '郊区',
      latitude: '47'
    }, {
      longitude: '130',
      label: '桦南县',
      latitude: '47'
    }, {
      longitude: '130',
      label: '桦川县',
      latitude: '47'
    }, {
      longitude: '130',
      label: '汤原县',
      latitude: '47'
    }, {
      longitude: '130',
      label: '同江市',
      latitude: '47'
    }, {
      longitude: '130',
      label: '富锦市',
      latitude: '47'
    }, {
      longitude: '130',
      label: '抚远市',
      latitude: '47'
    }],
    label: '佳木斯市'
  }, {
    children: [{
      longitude: '131',
      label: '市辖区',
      latitude: '46'
    }, {
      longitude: '131',
      label: '新兴区',
      latitude: '46'
    }, {
      longitude: '131',
      label: '桃山区',
      latitude: '46'
    }, {
      longitude: '131',
      label: '茄子河区',
      latitude: '46'
    }, {
      longitude: '131',
      label: '勃利县',
      latitude: '46'
    }],
    label: '七台河市'
  }, {
    children: [{
      longitude: '130',
      label: '市辖区',
      latitude: '46'
    }, {
      longitude: '130',
      label: '东安区',
      latitude: '46'
    }, {
      longitude: '130',
      label: '阳明区',
      latitude: '46'
    }, {
      longitude: '130',
      label: '爱民区',
      latitude: '46'
    }, {
      longitude: '130',
      label: '西安区',
      latitude: '46'
    }, {
      longitude: '130',
      label: '林口县',
      latitude: '46'
    }, {
      longitude: '130',
      label: '绥芬河市',
      latitude: '46'
    }, {
      longitude: '130',
      label: '海林市',
      latitude: '46'
    }, {
      longitude: '130',
      label: '宁安市',
      latitude: '46'
    }, {
      longitude: '130',
      label: '穆棱市',
      latitude: '46'
    }, {
      longitude: '130',
      label: '东宁市',
      latitude: '46'
    }],
    label: '牡丹江市'
  }, {
    children: [{
      longitude: '128',
      label: '市辖区',
      latitude: '50'
    }, {
      longitude: '128',
      label: '爱辉区',
      latitude: '50'
    }, {
      longitude: '128',
      label: '嫩江县',
      latitude: '50'
    }, {
      longitude: '128',
      label: '逊克县',
      latitude: '50'
    }, {
      longitude: '128',
      label: '孙吴县',
      latitude: '50'
    }, {
      longitude: '128',
      label: '北安市',
      latitude: '50'
    }, {
      longitude: '128',
      label: '五大连池市',
      latitude: '50'
    }],
    label: '黑河市'
  }, {
    children: [{
      longitude: '127',
      label: '市辖区',
      latitude: '47'
    }, {
      longitude: '127',
      label: '北林区',
      latitude: '47'
    }, {
      longitude: '127',
      label: '望奎县',
      latitude: '47'
    }, {
      longitude: '127',
      label: '兰西县',
      latitude: '47'
    }, {
      longitude: '127',
      label: '青冈县',
      latitude: '47'
    }, {
      longitude: '127',
      label: '庆安县',
      latitude: '47'
    }, {
      longitude: '127',
      label: '明水县',
      latitude: '47'
    }, {
      longitude: '127',
      label: '绥棱县',
      latitude: '47'
    }, {
      longitude: '127',
      label: '安达市',
      latitude: '47'
    }, {
      longitude: '127',
      label: '肇东市',
      latitude: '47'
    }, {
      longitude: '127',
      label: '海伦市',
      latitude: '47'
    }],
    label: '绥化市'
  }, {
    children: [{
      longitude: '125',
      label: '呼玛县',
      latitude: '52'
    }, {
      longitude: '125',
      label: '塔河县',
      latitude: '52'
    }, {
      longitude: '125',
      label: '漠河县',
      latitude: '52'
    }],
    label: '大兴安岭地区'
  }],
  label: '黑龙江省'
}, {
  children: [{
    children: [{
      longitude: '121',
      label: '黄浦区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '徐汇区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '长宁区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '静安区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '普陀区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '虹口区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '杨浦区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '闵行区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '宝山区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '嘉定区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '浦东新区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '金山区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '松江区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '青浦区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '奉贤区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '崇明区',
      latitude: '31'
    }],
    label: '市辖区'
  }],
  label: '上海市'
}, {
  children: [{
    children: [{
      longitude: '119',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '玄武区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '秦淮区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '建邺区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '鼓楼区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '浦口区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '栖霞区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '雨花台区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '江宁区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '六合区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '溧水区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '高淳区',
      latitude: '32'
    }],
    label: '南京市'
  }, {
    children: [{
      longitude: '120',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '锡山区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '惠山区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '滨湖区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '梁溪区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '新吴区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '江阴市',
      latitude: '32'
    }, {
      longitude: '120',
      label: '宜兴市',
      latitude: '32'
    }],
    label: '无锡市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '117',
      label: '鼓楼区',
      latitude: '34'
    }, {
      longitude: '117',
      label: '云龙区',
      latitude: '34'
    }, {
      longitude: '117',
      label: '贾汪区',
      latitude: '34'
    }, {
      longitude: '117',
      label: '泉山区',
      latitude: '34'
    }, {
      longitude: '117',
      label: '铜山区',
      latitude: '34'
    }, {
      longitude: '117',
      label: '丰县',
      latitude: '34'
    }, {
      longitude: '117',
      label: '沛县',
      latitude: '34'
    }, {
      longitude: '117',
      label: '睢宁县',
      latitude: '34'
    }, {
      longitude: '117',
      label: '新沂市',
      latitude: '34'
    }, {
      longitude: '117',
      label: '邳州市',
      latitude: '34'
    }],
    label: '徐州市'
  }, {
    children: [{
      longitude: '120',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '天宁区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '钟楼区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '新北区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '武进区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '金坛区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '溧阳市',
      latitude: '32'
    }],
    label: '常州市'
  }, {
    children: [{
      longitude: '121',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '虎丘区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '吴中区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '相城区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '姑苏区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '吴江区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '常熟市',
      latitude: '31'
    }, {
      longitude: '121',
      label: '张家港市',
      latitude: '31'
    }, {
      longitude: '121',
      label: '昆山市',
      latitude: '31'
    }, {
      longitude: '121',
      label: '太仓市',
      latitude: '31'
    }],
    label: '苏州市'
  }, {
    children: [{
      longitude: '121',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '121',
      label: '崇川区',
      latitude: '32'
    }, {
      longitude: '121',
      label: '港闸区',
      latitude: '32'
    }, {
      longitude: '121',
      label: '通州区',
      latitude: '32'
    }, {
      longitude: '121',
      label: '海安县',
      latitude: '32'
    }, {
      longitude: '121',
      label: '如东县',
      latitude: '32'
    }, {
      longitude: '121',
      label: '启东市',
      latitude: '32'
    }, {
      longitude: '121',
      label: '如皋市',
      latitude: '32'
    }, {
      longitude: '121',
      label: '海门市',
      latitude: '32'
    }],
    label: '南通市'
  }, {
    children: [{
      longitude: '119',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '119',
      label: '连云区',
      latitude: '35'
    }, {
      longitude: '119',
      label: '海州区',
      latitude: '35'
    }, {
      longitude: '119',
      label: '赣榆区',
      latitude: '35'
    }, {
      longitude: '119',
      label: '东海县',
      latitude: '35'
    }, {
      longitude: '119',
      label: '灌云县',
      latitude: '35'
    }, {
      longitude: '119',
      label: '灌南县',
      latitude: '35'
    }],
    label: '连云港市'
  }, {
    children: [{
      longitude: '119',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '119',
      label: '淮安区',
      latitude: '34'
    }, {
      longitude: '119',
      label: '淮阴区',
      latitude: '34'
    }, {
      longitude: '119',
      label: '清江浦区',
      latitude: '34'
    }, {
      longitude: '119',
      label: '洪泽区',
      latitude: '34'
    }, {
      longitude: '119',
      label: '涟水县',
      latitude: '34'
    }, {
      longitude: '119',
      label: '盱眙县',
      latitude: '34'
    }, {
      longitude: '119',
      label: '金湖县',
      latitude: '34'
    }],
    label: '淮安市'
  }, {
    children: [{
      longitude: '120',
      label: '市辖区',
      latitude: '33'
    }, {
      longitude: '120',
      label: '亭湖区',
      latitude: '33'
    }, {
      longitude: '120',
      label: '盐都区',
      latitude: '33'
    }, {
      longitude: '120',
      label: '大丰区',
      latitude: '33'
    }, {
      longitude: '120',
      label: '响水县',
      latitude: '33'
    }, {
      longitude: '120',
      label: '滨海县',
      latitude: '33'
    }, {
      longitude: '120',
      label: '阜宁县',
      latitude: '33'
    }, {
      longitude: '120',
      label: '射阳县',
      latitude: '33'
    }, {
      longitude: '120',
      label: '建湖县',
      latitude: '33'
    }, {
      longitude: '120',
      label: '东台市',
      latitude: '33'
    }],
    label: '盐城市'
  }, {
    children: [{
      longitude: '119',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '广陵区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '邗江区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '江都区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '宝应县',
      latitude: '32'
    }, {
      longitude: '119',
      label: '仪征市',
      latitude: '32'
    }, {
      longitude: '119',
      label: '高邮市',
      latitude: '32'
    }],
    label: '扬州市'
  }, {
    children: [{
      longitude: '119',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '京口区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '润州区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '丹徒区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '丹阳市',
      latitude: '32'
    }, {
      longitude: '119',
      label: '扬中市',
      latitude: '32'
    }, {
      longitude: '119',
      label: '句容市',
      latitude: '32'
    }],
    label: '镇江市'
  }, {
    children: [{
      longitude: '120',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '海陵区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '高港区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '姜堰区',
      latitude: '32'
    }, {
      longitude: '120',
      label: '兴化市',
      latitude: '32'
    }, {
      longitude: '120',
      label: '靖江市',
      latitude: '32'
    }, {
      longitude: '120',
      label: '泰兴市',
      latitude: '32'
    }],
    label: '泰州市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '118',
      label: '宿城区',
      latitude: '34'
    }, {
      longitude: '118',
      label: '宿豫区',
      latitude: '34'
    }, {
      longitude: '118',
      label: '沭阳县',
      latitude: '34'
    }, {
      longitude: '118',
      label: '泗阳县',
      latitude: '34'
    }, {
      longitude: '118',
      label: '泗洪县',
      latitude: '34'
    }],
    label: '宿迁市'
  }],
  label: '江苏省'
}, {
  children: [{
    children: [{
      longitude: '120',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '120',
      label: '上城区',
      latitude: '30'
    }, {
      longitude: '120',
      label: '下城区',
      latitude: '30'
    }, {
      longitude: '120',
      label: '江干区',
      latitude: '30'
    }, {
      longitude: '120',
      label: '拱墅区',
      latitude: '30'
    }, {
      longitude: '120',
      label: '西湖区',
      latitude: '30'
    }, {
      longitude: '120',
      label: '滨江区',
      latitude: '30'
    }, {
      longitude: '120',
      label: '萧山区',
      latitude: '30'
    }, {
      longitude: '120',
      label: '余杭区',
      latitude: '30'
    }, {
      longitude: '120',
      label: '富阳区',
      latitude: '30'
    }, {
      longitude: '120',
      label: '桐庐县',
      latitude: '30'
    }, {
      longitude: '120',
      label: '淳安县',
      latitude: '30'
    }, {
      longitude: '120',
      label: '建德市',
      latitude: '30'
    }, {
      longitude: '120',
      label: '临安市',
      latitude: '30'
    }],
    label: '杭州市'
  }, {
    children: [{
      longitude: '122',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '122',
      label: '海曙区',
      latitude: '30'
    }, {
      longitude: '122',
      label: '江东区',
      latitude: '30'
    }, {
      longitude: '122',
      label: '江北区',
      latitude: '30'
    }, {
      longitude: '122',
      label: '北仑区',
      latitude: '30'
    }, {
      longitude: '122',
      label: '镇海区',
      latitude: '30'
    }, {
      longitude: '122',
      label: '鄞州区',
      latitude: '30'
    }, {
      longitude: '122',
      label: '象山县',
      latitude: '30'
    }, {
      longitude: '122',
      label: '宁海县',
      latitude: '30'
    }, {
      longitude: '122',
      label: '余姚市',
      latitude: '30'
    }, {
      longitude: '122',
      label: '慈溪市',
      latitude: '30'
    }, {
      longitude: '122',
      label: '奉化市',
      latitude: '30'
    }],
    label: '宁波市'
  }, {
    children: [{
      longitude: '121',
      label: '市辖区',
      latitude: '28'
    }, {
      longitude: '121',
      label: '鹿城区',
      latitude: '28'
    }, {
      longitude: '121',
      label: '龙湾区',
      latitude: '28'
    }, {
      longitude: '121',
      label: '瓯海区',
      latitude: '28'
    }, {
      longitude: '121',
      label: '洞头区',
      latitude: '28'
    }, {
      longitude: '121',
      label: '永嘉县',
      latitude: '28'
    }, {
      longitude: '121',
      label: '平阳县',
      latitude: '28'
    }, {
      longitude: '121',
      label: '苍南县',
      latitude: '28'
    }, {
      longitude: '121',
      label: '文成县',
      latitude: '28'
    }, {
      longitude: '121',
      label: '泰顺县',
      latitude: '28'
    }, {
      longitude: '121',
      label: '瑞安市',
      latitude: '28'
    }, {
      longitude: '121',
      label: '乐清市',
      latitude: '28'
    }],
    label: '温州市'
  }, {
    children: [{
      longitude: '121',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '南湖区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '秀洲区',
      latitude: '31'
    }, {
      longitude: '121',
      label: '嘉善县',
      latitude: '31'
    }, {
      longitude: '121',
      label: '海盐县',
      latitude: '31'
    }, {
      longitude: '121',
      label: '海宁市',
      latitude: '31'
    }, {
      longitude: '121',
      label: '平湖市',
      latitude: '31'
    }, {
      longitude: '121',
      label: '桐乡市',
      latitude: '31'
    }],
    label: '嘉兴市'
  }, {
    children: [{
      longitude: '120',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '120',
      label: '吴兴区',
      latitude: '31'
    }, {
      longitude: '120',
      label: '南浔区',
      latitude: '31'
    }, {
      longitude: '120',
      label: '德清县',
      latitude: '31'
    }, {
      longitude: '120',
      label: '长兴县',
      latitude: '31'
    }, {
      longitude: '120',
      label: '安吉县',
      latitude: '31'
    }],
    label: '湖州市'
  }, {
    children: [{
      longitude: '121',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '121',
      label: '越城区',
      latitude: '30'
    }, {
      longitude: '121',
      label: '柯桥区',
      latitude: '30'
    }, {
      longitude: '121',
      label: '上虞区',
      latitude: '30'
    }, {
      longitude: '121',
      label: '新昌县',
      latitude: '30'
    }, {
      longitude: '121',
      label: '诸暨市',
      latitude: '30'
    }, {
      longitude: '121',
      label: '嵊州市',
      latitude: '30'
    }],
    label: '绍兴市'
  }, {
    children: [{
      longitude: '120',
      label: '市辖区',
      latitude: '29'
    }, {
      longitude: '120',
      label: '婺城区',
      latitude: '29'
    }, {
      longitude: '120',
      label: '金东区',
      latitude: '29'
    }, {
      longitude: '120',
      label: '武义县',
      latitude: '29'
    }, {
      longitude: '120',
      label: '浦江县',
      latitude: '29'
    }, {
      longitude: '120',
      label: '磐安县',
      latitude: '29'
    }, {
      longitude: '120',
      label: '兰溪市',
      latitude: '29'
    }, {
      longitude: '120',
      label: '义乌市',
      latitude: '29'
    }, {
      longitude: '120',
      label: '东阳市',
      latitude: '29'
    }, {
      longitude: '120',
      label: '永康市',
      latitude: '29'
    }],
    label: '金华市'
  }, {
    children: [{
      longitude: '119',
      label: '市辖区',
      latitude: '29'
    }, {
      longitude: '119',
      label: '柯城区',
      latitude: '29'
    }, {
      longitude: '119',
      label: '衢江区',
      latitude: '29'
    }, {
      longitude: '119',
      label: '常山县',
      latitude: '29'
    }, {
      longitude: '119',
      label: '开化县',
      latitude: '29'
    }, {
      longitude: '119',
      label: '龙游县',
      latitude: '29'
    }, {
      longitude: '119',
      label: '江山市',
      latitude: '29'
    }],
    label: '衢州市'
  }, {
    children: [{
      longitude: '122',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '122',
      label: '定海区',
      latitude: '30'
    }, {
      longitude: '122',
      label: '普陀区',
      latitude: '30'
    }, {
      longitude: '122',
      label: '岱山县',
      latitude: '30'
    }, {
      longitude: '122',
      label: '嵊泗县',
      latitude: '30'
    }],
    label: '舟山市'
  }, {
    children: [{
      longitude: '121',
      label: '市辖区',
      latitude: '29'
    }, {
      longitude: '121',
      label: '椒江区',
      latitude: '29'
    }, {
      longitude: '121',
      label: '黄岩区',
      latitude: '29'
    }, {
      longitude: '121',
      label: '路桥区',
      latitude: '29'
    }, {
      longitude: '121',
      label: '玉环县',
      latitude: '29'
    }, {
      longitude: '121',
      label: '三门县',
      latitude: '29'
    }, {
      longitude: '121',
      label: '天台县',
      latitude: '29'
    }, {
      longitude: '121',
      label: '仙居县',
      latitude: '29'
    }, {
      longitude: '121',
      label: '温岭市',
      latitude: '29'
    }, {
      longitude: '121',
      label: '临海市',
      latitude: '29'
    }],
    label: '台州市'
  }, {
    children: [{
      longitude: '120',
      label: '市辖区',
      latitude: '28'
    }, {
      longitude: '120',
      label: '莲都区',
      latitude: '28'
    }, {
      longitude: '120',
      label: '青田县',
      latitude: '28'
    }, {
      longitude: '120',
      label: '缙云县',
      latitude: '28'
    }, {
      longitude: '120',
      label: '遂昌县',
      latitude: '28'
    }, {
      longitude: '120',
      label: '松阳县',
      latitude: '28'
    }, {
      longitude: '120',
      label: '云和县',
      latitude: '28'
    }, {
      longitude: '120',
      label: '庆元县',
      latitude: '28'
    }, {
      longitude: '120',
      label: '景宁畲族自治县',
      latitude: '28'
    }, {
      longitude: '120',
      label: '龙泉市',
      latitude: '28'
    }],
    label: '丽水市'
  }],
  label: '浙江省'
}, {
  children: [{
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '117',
      label: '瑶海区',
      latitude: '32'
    }, {
      longitude: '117',
      label: '庐阳区',
      latitude: '32'
    }, {
      longitude: '117',
      label: '蜀山区',
      latitude: '32'
    }, {
      longitude: '117',
      label: '包河区',
      latitude: '32'
    }, {
      longitude: '117',
      label: '长丰县',
      latitude: '32'
    }, {
      longitude: '117',
      label: '肥东县',
      latitude: '32'
    }, {
      longitude: '117',
      label: '肥西县',
      latitude: '32'
    }, {
      longitude: '117',
      label: '庐江县',
      latitude: '32'
    }, {
      longitude: '117',
      label: '巢湖市',
      latitude: '32'
    }],
    label: '合肥市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '118',
      label: '镜湖区',
      latitude: '31'
    }, {
      longitude: '118',
      label: '弋江区',
      latitude: '31'
    }, {
      longitude: '118',
      label: '鸠江区',
      latitude: '31'
    }, {
      longitude: '118',
      label: '三山区',
      latitude: '31'
    }, {
      longitude: '118',
      label: '芜湖县',
      latitude: '31'
    }, {
      longitude: '118',
      label: '繁昌县',
      latitude: '31'
    }, {
      longitude: '118',
      label: '南陵县',
      latitude: '31'
    }, {
      longitude: '118',
      label: '无为县',
      latitude: '31'
    }],
    label: '芜湖市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '117',
      label: '龙子湖区',
      latitude: '32'
    }, {
      longitude: '117',
      label: '蚌山区',
      latitude: '32'
    }, {
      longitude: '117',
      label: '禹会区',
      latitude: '32'
    }, {
      longitude: '117',
      label: '淮上区',
      latitude: '32'
    }, {
      longitude: '117',
      label: '怀远县',
      latitude: '32'
    }, {
      longitude: '117',
      label: '五河县',
      latitude: '32'
    }, {
      longitude: '117',
      label: '固镇县',
      latitude: '32'
    }],
    label: '蚌埠市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '33'
    }, {
      longitude: '117',
      label: '大通区',
      latitude: '33'
    }, {
      longitude: '117',
      label: '田家庵区',
      latitude: '33'
    }, {
      longitude: '117',
      label: '谢家集区',
      latitude: '33'
    }, {
      longitude: '117',
      label: '八公山区',
      latitude: '33'
    }, {
      longitude: '117',
      label: '潘集区',
      latitude: '33'
    }, {
      longitude: '117',
      label: '凤台县',
      latitude: '33'
    }, {
      longitude: '117',
      label: '寿县',
      latitude: '33'
    }],
    label: '淮南市'
  }, {
    children: [{
      longitude: '119',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '花山区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '雨山区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '博望区',
      latitude: '32'
    }, {
      longitude: '119',
      label: '当涂县',
      latitude: '32'
    }, {
      longitude: '119',
      label: '含山县',
      latitude: '32'
    }, {
      longitude: '119',
      label: '和县',
      latitude: '32'
    }],
    label: '马鞍山市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '117',
      label: '杜集区',
      latitude: '34'
    }, {
      longitude: '117',
      label: '相山区',
      latitude: '34'
    }, {
      longitude: '117',
      label: '烈山区',
      latitude: '34'
    }, {
      longitude: '117',
      label: '濉溪县',
      latitude: '34'
    }],
    label: '淮北市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '118',
      label: '铜官区',
      latitude: '31'
    }, {
      longitude: '118',
      label: '义安区',
      latitude: '31'
    }, {
      longitude: '118',
      label: '郊区',
      latitude: '31'
    }, {
      longitude: '118',
      label: '枞阳县',
      latitude: '31'
    }],
    label: '铜陵市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '117',
      label: '迎江区',
      latitude: '31'
    }, {
      longitude: '117',
      label: '大观区',
      latitude: '31'
    }, {
      longitude: '117',
      label: '宜秀区',
      latitude: '31'
    }, {
      longitude: '117',
      label: '怀宁县',
      latitude: '31'
    }, {
      longitude: '117',
      label: '潜山县',
      latitude: '31'
    }, {
      longitude: '117',
      label: '太湖县',
      latitude: '31'
    }, {
      longitude: '117',
      label: '宿松县',
      latitude: '31'
    }, {
      longitude: '117',
      label: '望江县',
      latitude: '31'
    }, {
      longitude: '117',
      label: '岳西县',
      latitude: '31'
    }, {
      longitude: '117',
      label: '桐城市',
      latitude: '31'
    }],
    label: '安庆市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '118',
      label: '屯溪区',
      latitude: '30'
    }, {
      longitude: '118',
      label: '黄山区',
      latitude: '30'
    }, {
      longitude: '118',
      label: '徽州区',
      latitude: '30'
    }, {
      longitude: '118',
      label: '歙县',
      latitude: '30'
    }, {
      longitude: '118',
      label: '休宁县',
      latitude: '30'
    }, {
      longitude: '118',
      label: '黟县',
      latitude: '30'
    }, {
      longitude: '118',
      label: '祁门县',
      latitude: '30'
    }],
    label: '黄山市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '118',
      label: '琅琊区',
      latitude: '32'
    }, {
      longitude: '118',
      label: '南谯区',
      latitude: '32'
    }, {
      longitude: '118',
      label: '来安县',
      latitude: '32'
    }, {
      longitude: '118',
      label: '全椒县',
      latitude: '32'
    }, {
      longitude: '118',
      label: '定远县',
      latitude: '32'
    }, {
      longitude: '118',
      label: '凤阳县',
      latitude: '32'
    }, {
      longitude: '118',
      label: '天长市',
      latitude: '32'
    }, {
      longitude: '118',
      label: '明光市',
      latitude: '32'
    }],
    label: '滁州市'
  }, {
    children: [{
      longitude: '116',
      label: '市辖区',
      latitude: '33'
    }, {
      longitude: '116',
      label: '颍州区',
      latitude: '33'
    }, {
      longitude: '116',
      label: '颍东区',
      latitude: '33'
    }, {
      longitude: '116',
      label: '颍泉区',
      latitude: '33'
    }, {
      longitude: '116',
      label: '临泉县',
      latitude: '33'
    }, {
      longitude: '116',
      label: '太和县',
      latitude: '33'
    }, {
      longitude: '116',
      label: '阜南县',
      latitude: '33'
    }, {
      longitude: '116',
      label: '颍上县',
      latitude: '33'
    }, {
      longitude: '116',
      label: '界首市',
      latitude: '33'
    }],
    label: '阜阳市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '117',
      label: '埇桥区',
      latitude: '34'
    }, {
      longitude: '117',
      label: '砀山县',
      latitude: '34'
    }, {
      longitude: '117',
      label: '萧县',
      latitude: '34'
    }, {
      longitude: '117',
      label: '灵璧县',
      latitude: '34'
    }, {
      longitude: '117',
      label: '泗县',
      latitude: '34'
    }],
    label: '宿州市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '117',
      label: '金安区',
      latitude: '32'
    }, {
      longitude: '117',
      label: '裕安区',
      latitude: '32'
    }, {
      longitude: '117',
      label: '叶集区',
      latitude: '32'
    }, {
      longitude: '117',
      label: '霍邱县',
      latitude: '32'
    }, {
      longitude: '117',
      label: '舒城县',
      latitude: '32'
    }, {
      longitude: '117',
      label: '金寨县',
      latitude: '32'
    }, {
      longitude: '117',
      label: '霍山县',
      latitude: '32'
    }],
    label: '六安市'
  }, {
    children: [{
      longitude: '116',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '116',
      label: '谯城区',
      latitude: '34'
    }, {
      longitude: '116',
      label: '涡阳县',
      latitude: '34'
    }, {
      longitude: '116',
      label: '蒙城县',
      latitude: '34'
    }, {
      longitude: '116',
      label: '利辛县',
      latitude: '34'
    }],
    label: '亳州市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '117',
      label: '贵池区',
      latitude: '31'
    }, {
      longitude: '117',
      label: '东至县',
      latitude: '31'
    }, {
      longitude: '117',
      label: '石台县',
      latitude: '31'
    }, {
      longitude: '117',
      label: '青阳县',
      latitude: '31'
    }],
    label: '池州市'
  }, {
    children: [{
      longitude: '119',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '119',
      label: '宣州区',
      latitude: '31'
    }, {
      longitude: '119',
      label: '郎溪县',
      latitude: '31'
    }, {
      longitude: '119',
      label: '广德县',
      latitude: '31'
    }, {
      longitude: '119',
      label: '泾县',
      latitude: '31'
    }, {
      longitude: '119',
      label: '绩溪县',
      latitude: '31'
    }, {
      longitude: '119',
      label: '旌德县',
      latitude: '31'
    }, {
      longitude: '119',
      label: '宁国市',
      latitude: '31'
    }],
    label: '宣城市'
  }],
  label: '安徽省'
}, {
  children: [{
    children: [{
      longitude: '119',
      label: '市辖区',
      latitude: '26'
    }, {
      longitude: '119',
      label: '鼓楼区',
      latitude: '26'
    }, {
      longitude: '119',
      label: '台江区',
      latitude: '26'
    }, {
      longitude: '119',
      label: '仓山区',
      latitude: '26'
    }, {
      longitude: '119',
      label: '马尾区',
      latitude: '26'
    }, {
      longitude: '119',
      label: '晋安区',
      latitude: '26'
    }, {
      longitude: '119',
      label: '闽侯县',
      latitude: '26'
    }, {
      longitude: '119',
      label: '连江县',
      latitude: '26'
    }, {
      longitude: '119',
      label: '罗源县',
      latitude: '26'
    }, {
      longitude: '119',
      label: '闽清县',
      latitude: '26'
    }, {
      longitude: '119',
      label: '永泰县',
      latitude: '26'
    }, {
      longitude: '119',
      label: '平潭县',
      latitude: '26'
    }, {
      longitude: '119',
      label: '福清市',
      latitude: '26'
    }, {
      longitude: '119',
      label: '长乐市',
      latitude: '26'
    }],
    label: '福州市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '24'
    }, {
      longitude: '118',
      label: '思明区',
      latitude: '24'
    }, {
      longitude: '118',
      label: '海沧区',
      latitude: '24'
    }, {
      longitude: '118',
      label: '湖里区',
      latitude: '24'
    }, {
      longitude: '118',
      label: '集美区',
      latitude: '24'
    }, {
      longitude: '118',
      label: '同安区',
      latitude: '24'
    }, {
      longitude: '118',
      label: '翔安区',
      latitude: '24'
    }],
    label: '厦门市'
  }, {
    children: [{
      longitude: '119',
      label: '市辖区',
      latitude: '25'
    }, {
      longitude: '119',
      label: '城厢区',
      latitude: '25'
    }, {
      longitude: '119',
      label: '涵江区',
      latitude: '25'
    }, {
      longitude: '119',
      label: '荔城区',
      latitude: '25'
    }, {
      longitude: '119',
      label: '秀屿区',
      latitude: '25'
    }, {
      longitude: '119',
      label: '仙游县',
      latitude: '25'
    }],
    label: '莆田市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '26'
    }, {
      longitude: '118',
      label: '梅列区',
      latitude: '26'
    }, {
      longitude: '118',
      label: '三元区',
      latitude: '26'
    }, {
      longitude: '118',
      label: '明溪县',
      latitude: '26'
    }, {
      longitude: '118',
      label: '清流县',
      latitude: '26'
    }, {
      longitude: '118',
      label: '宁化县',
      latitude: '26'
    }, {
      longitude: '118',
      label: '大田县',
      latitude: '26'
    }, {
      longitude: '118',
      label: '尤溪县',
      latitude: '26'
    }, {
      longitude: '118',
      label: '沙县',
      latitude: '26'
    }, {
      longitude: '118',
      label: '将乐县',
      latitude: '26'
    }, {
      longitude: '118',
      label: '泰宁县',
      latitude: '26'
    }, {
      longitude: '118',
      label: '建宁县',
      latitude: '26'
    }, {
      longitude: '118',
      label: '永安市',
      latitude: '26'
    }],
    label: '三明市'
  }, {
    children: [{
      longitude: '119',
      label: '市辖区',
      latitude: '25'
    }, {
      longitude: '119',
      label: '鲤城区',
      latitude: '25'
    }, {
      longitude: '119',
      label: '丰泽区',
      latitude: '25'
    }, {
      longitude: '119',
      label: '洛江区',
      latitude: '25'
    }, {
      longitude: '119',
      label: '泉港区',
      latitude: '25'
    }, {
      longitude: '119',
      label: '惠安县',
      latitude: '25'
    }, {
      longitude: '119',
      label: '安溪县',
      latitude: '25'
    }, {
      longitude: '119',
      label: '永春县',
      latitude: '25'
    }, {
      longitude: '119',
      label: '德化县',
      latitude: '25'
    }, {
      longitude: '119',
      label: '金门县',
      latitude: '25'
    }, {
      longitude: '119',
      label: '石狮市',
      latitude: '25'
    }, {
      longitude: '119',
      label: '晋江市',
      latitude: '25'
    }, {
      longitude: '119',
      label: '南安市',
      latitude: '25'
    }],
    label: '泉州市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '25'
    }, {
      longitude: '118',
      label: '芗城区',
      latitude: '25'
    }, {
      longitude: '118',
      label: '龙文区',
      latitude: '25'
    }, {
      longitude: '118',
      label: '云霄县',
      latitude: '25'
    }, {
      longitude: '118',
      label: '漳浦县',
      latitude: '25'
    }, {
      longitude: '118',
      label: '诏安县',
      latitude: '25'
    }, {
      longitude: '118',
      label: '长泰县',
      latitude: '25'
    }, {
      longitude: '118',
      label: '东山县',
      latitude: '25'
    }, {
      longitude: '118',
      label: '南靖县',
      latitude: '25'
    }, {
      longitude: '118',
      label: '平和县',
      latitude: '25'
    }, {
      longitude: '118',
      label: '华安县',
      latitude: '25'
    }, {
      longitude: '118',
      label: '龙海市',
      latitude: '25'
    }],
    label: '漳州市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '27'
    }, {
      longitude: '118',
      label: '延平区',
      latitude: '27'
    }, {
      longitude: '118',
      label: '建阳区',
      latitude: '27'
    }, {
      longitude: '118',
      label: '顺昌县',
      latitude: '27'
    }, {
      longitude: '118',
      label: '浦城县',
      latitude: '27'
    }, {
      longitude: '118',
      label: '光泽县',
      latitude: '27'
    }, {
      longitude: '118',
      label: '松溪县',
      latitude: '27'
    }, {
      longitude: '118',
      label: '政和县',
      latitude: '27'
    }, {
      longitude: '118',
      label: '邵武市',
      latitude: '27'
    }, {
      longitude: '118',
      label: '武夷山市',
      latitude: '27'
    }, {
      longitude: '118',
      label: '建瓯市',
      latitude: '27'
    }],
    label: '南平市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '25'
    }, {
      longitude: '117',
      label: '新罗区',
      latitude: '25'
    }, {
      longitude: '117',
      label: '永定区',
      latitude: '25'
    }, {
      longitude: '117',
      label: '长汀县',
      latitude: '25'
    }, {
      longitude: '117',
      label: '上杭县',
      latitude: '25'
    }, {
      longitude: '117',
      label: '武平县',
      latitude: '25'
    }, {
      longitude: '117',
      label: '连城县',
      latitude: '25'
    }, {
      longitude: '117',
      label: '漳平市',
      latitude: '25'
    }],
    label: '龙岩市'
  }, {
    children: [{
      longitude: '120',
      label: '市辖区',
      latitude: '27'
    }, {
      longitude: '120',
      label: '蕉城区',
      latitude: '27'
    }, {
      longitude: '120',
      label: '霞浦县',
      latitude: '27'
    }, {
      longitude: '120',
      label: '古田县',
      latitude: '27'
    }, {
      longitude: '120',
      label: '屏南县',
      latitude: '27'
    }, {
      longitude: '120',
      label: '寿宁县',
      latitude: '27'
    }, {
      longitude: '120',
      label: '周宁县',
      latitude: '27'
    }, {
      longitude: '120',
      label: '柘荣县',
      latitude: '27'
    }, {
      longitude: '120',
      label: '福安市',
      latitude: '27'
    }, {
      longitude: '120',
      label: '福鼎市',
      latitude: '27'
    }],
    label: '宁德市'
  }],
  label: '福建省'
}, {
  children: [{
    children: [{
      longitude: '116',
      label: '市辖区',
      latitude: '29'
    }, {
      longitude: '116',
      label: '东湖区',
      latitude: '29'
    }, {
      longitude: '116',
      label: '西湖区',
      latitude: '29'
    }, {
      longitude: '116',
      label: '青云谱区',
      latitude: '29'
    }, {
      longitude: '116',
      label: '湾里区',
      latitude: '29'
    }, {
      longitude: '116',
      label: '青山湖区',
      latitude: '29'
    }, {
      longitude: '116',
      label: '新建区',
      latitude: '29'
    }, {
      longitude: '116',
      label: '南昌县',
      latitude: '29'
    }, {
      longitude: '116',
      label: '安义县',
      latitude: '29'
    }, {
      longitude: '116',
      label: '进贤县',
      latitude: '29'
    }],
    label: '南昌市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '29'
    }, {
      longitude: '117',
      label: '昌江区',
      latitude: '29'
    }, {
      longitude: '117',
      label: '珠山区',
      latitude: '29'
    }, {
      longitude: '117',
      label: '浮梁县',
      latitude: '29'
    }, {
      longitude: '117',
      label: '乐平市',
      latitude: '29'
    }],
    label: '景德镇市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '28'
    }, {
      longitude: '114',
      label: '安源区',
      latitude: '28'
    }, {
      longitude: '114',
      label: '湘东区',
      latitude: '28'
    }, {
      longitude: '114',
      label: '莲花县',
      latitude: '28'
    }, {
      longitude: '114',
      label: '上栗县',
      latitude: '28'
    }, {
      longitude: '114',
      label: '芦溪县',
      latitude: '28'
    }],
    label: '萍乡市'
  }, {
    children: [{
      longitude: '116',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '116',
      label: '濂溪区',
      latitude: '30'
    }, {
      longitude: '116',
      label: '浔阳区',
      latitude: '30'
    }, {
      longitude: '116',
      label: '九江县',
      latitude: '30'
    }, {
      longitude: '116',
      label: '武宁县',
      latitude: '30'
    }, {
      longitude: '116',
      label: '修水县',
      latitude: '30'
    }, {
      longitude: '116',
      label: '永修县',
      latitude: '30'
    }, {
      longitude: '116',
      label: '德安县',
      latitude: '30'
    }, {
      longitude: '116',
      label: '都昌县',
      latitude: '30'
    }, {
      longitude: '116',
      label: '湖口县',
      latitude: '30'
    }, {
      longitude: '116',
      label: '彭泽县',
      latitude: '30'
    }, {
      longitude: '116',
      label: '瑞昌市',
      latitude: '30'
    }, {
      longitude: '116',
      label: '共青城市',
      latitude: '30'
    }, {
      longitude: '116',
      label: '庐山市',
      latitude: '30'
    }],
    label: '九江市'
  }, {
    children: [{
      longitude: '115',
      label: '市辖区',
      latitude: '28'
    }, {
      longitude: '115',
      label: '渝水区',
      latitude: '28'
    }, {
      longitude: '115',
      label: '分宜县',
      latitude: '28'
    }],
    label: '新余市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '28'
    }, {
      longitude: '117',
      label: '月湖区',
      latitude: '28'
    }, {
      longitude: '117',
      label: '余江县',
      latitude: '28'
    }, {
      longitude: '117',
      label: '贵溪市',
      latitude: '28'
    }],
    label: '鹰潭市'
  }, {
    children: [{
      longitude: '115',
      label: '市辖区',
      latitude: '26'
    }, {
      longitude: '115',
      label: '章贡区',
      latitude: '26'
    }, {
      longitude: '115',
      label: '南康区',
      latitude: '26'
    }, {
      longitude: '115',
      label: '赣县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '信丰县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '大余县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '上犹县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '崇义县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '安远县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '龙南县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '定南县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '全南县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '宁都县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '于都县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '兴国县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '会昌县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '寻乌县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '石城县',
      latitude: '26'
    }, {
      longitude: '115',
      label: '瑞金市',
      latitude: '26'
    }],
    label: '赣州市'
  }, {
    children: [{
      longitude: '115',
      label: '市辖区',
      latitude: '27'
    }, {
      longitude: '115',
      label: '吉州区',
      latitude: '27'
    }, {
      longitude: '115',
      label: '青原区',
      latitude: '27'
    }, {
      longitude: '115',
      label: '吉安县',
      latitude: '27'
    }, {
      longitude: '115',
      label: '吉水县',
      latitude: '27'
    }, {
      longitude: '115',
      label: '峡江县',
      latitude: '27'
    }, {
      longitude: '115',
      label: '新干县',
      latitude: '27'
    }, {
      longitude: '115',
      label: '永丰县',
      latitude: '27'
    }, {
      longitude: '115',
      label: '泰和县',
      latitude: '27'
    }, {
      longitude: '115',
      label: '遂川县',
      latitude: '27'
    }, {
      longitude: '115',
      label: '万安县',
      latitude: '27'
    }, {
      longitude: '115',
      label: '安福县',
      latitude: '27'
    }, {
      longitude: '115',
      label: '永新县',
      latitude: '27'
    }, {
      longitude: '115',
      label: '井冈山市',
      latitude: '27'
    }],
    label: '吉安市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '28'
    }, {
      longitude: '114',
      label: '袁州区',
      latitude: '28'
    }, {
      longitude: '114',
      label: '奉新县',
      latitude: '28'
    }, {
      longitude: '114',
      label: '万载县',
      latitude: '28'
    }, {
      longitude: '114',
      label: '上高县',
      latitude: '28'
    }, {
      longitude: '114',
      label: '宜丰县',
      latitude: '28'
    }, {
      longitude: '114',
      label: '靖安县',
      latitude: '28'
    }, {
      longitude: '114',
      label: '铜鼓县',
      latitude: '28'
    }, {
      longitude: '114',
      label: '丰城市',
      latitude: '28'
    }, {
      longitude: '114',
      label: '樟树市',
      latitude: '28'
    }, {
      longitude: '114',
      label: '高安市',
      latitude: '28'
    }],
    label: '宜春市'
  }, {
    children: [{
      longitude: '116',
      label: '市辖区',
      latitude: '28'
    }, {
      longitude: '116',
      label: '临川区',
      latitude: '28'
    }, {
      longitude: '116',
      label: '南城县',
      latitude: '28'
    }, {
      longitude: '116',
      label: '黎川县',
      latitude: '28'
    }, {
      longitude: '116',
      label: '南丰县',
      latitude: '28'
    }, {
      longitude: '116',
      label: '崇仁县',
      latitude: '28'
    }, {
      longitude: '116',
      label: '乐安县',
      latitude: '28'
    }, {
      longitude: '116',
      label: '宜黄县',
      latitude: '28'
    }, {
      longitude: '116',
      label: '金溪县',
      latitude: '28'
    }, {
      longitude: '116',
      label: '资溪县',
      latitude: '28'
    }, {
      longitude: '116',
      label: '东乡县',
      latitude: '28'
    }, {
      longitude: '116',
      label: '广昌县',
      latitude: '28'
    }],
    label: '抚州市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '28'
    }, {
      longitude: '118',
      label: '信州区',
      latitude: '28'
    }, {
      longitude: '118',
      label: '广丰区',
      latitude: '28'
    }, {
      longitude: '118',
      label: '上饶县',
      latitude: '28'
    }, {
      longitude: '118',
      label: '玉山县',
      latitude: '28'
    }, {
      longitude: '118',
      label: '铅山县',
      latitude: '28'
    }, {
      longitude: '118',
      label: '横峰县',
      latitude: '28'
    }, {
      longitude: '118',
      label: '弋阳县',
      latitude: '28'
    }, {
      longitude: '118',
      label: '余干县',
      latitude: '28'
    }, {
      longitude: '118',
      label: '鄱阳县',
      latitude: '28'
    }, {
      longitude: '118',
      label: '万年县',
      latitude: '28'
    }, {
      longitude: '118',
      label: '婺源县',
      latitude: '28'
    }, {
      longitude: '118',
      label: '德兴市',
      latitude: '28'
    }],
    label: '上饶市'
  }],
  label: '江西省'
}, {
  children: [{
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '37'
    }, {
      longitude: '117',
      label: '历下区',
      latitude: '37'
    }, {
      longitude: '117',
      label: '市中区',
      latitude: '37'
    }, {
      longitude: '117',
      label: '槐荫区',
      latitude: '37'
    }, {
      longitude: '117',
      label: '天桥区',
      latitude: '37'
    }, {
      longitude: '117',
      label: '历城区',
      latitude: '37'
    }, {
      longitude: '117',
      label: '长清区',
      latitude: '37'
    }, {
      longitude: '117',
      label: '平阴县',
      latitude: '37'
    }, {
      longitude: '117',
      label: '济阳县',
      latitude: '37'
    }, {
      longitude: '117',
      label: '商河县',
      latitude: '37'
    }, {
      longitude: '117',
      label: '章丘市',
      latitude: '37'
    }],
    label: '济南市'
  }, {
    children: [{
      longitude: '120',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '120',
      label: '市南区',
      latitude: '36'
    }, {
      longitude: '120',
      label: '市北区',
      latitude: '36'
    }, {
      longitude: '120',
      label: '黄岛区',
      latitude: '36'
    }, {
      longitude: '120',
      label: '崂山区',
      latitude: '36'
    }, {
      longitude: '120',
      label: '李沧区',
      latitude: '36'
    }, {
      longitude: '120',
      label: '城阳区',
      latitude: '36'
    }, {
      longitude: '120',
      label: '胶州市',
      latitude: '36'
    }, {
      longitude: '120',
      label: '即墨市',
      latitude: '36'
    }, {
      longitude: '120',
      label: '平度市',
      latitude: '36'
    }, {
      longitude: '120',
      label: '莱西市',
      latitude: '36'
    }],
    label: '青岛市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '37'
    }, {
      longitude: '118',
      label: '淄川区',
      latitude: '37'
    }, {
      longitude: '118',
      label: '张店区',
      latitude: '37'
    }, {
      longitude: '118',
      label: '博山区',
      latitude: '37'
    }, {
      longitude: '118',
      label: '临淄区',
      latitude: '37'
    }, {
      longitude: '118',
      label: '周村区',
      latitude: '37'
    }, {
      longitude: '118',
      label: '桓台县',
      latitude: '37'
    }, {
      longitude: '118',
      label: '高青县',
      latitude: '37'
    }, {
      longitude: '118',
      label: '沂源县',
      latitude: '37'
    }],
    label: '淄博市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '117',
      label: '市中区',
      latitude: '35'
    }, {
      longitude: '117',
      label: '薛城区',
      latitude: '35'
    }, {
      longitude: '117',
      label: '峄城区',
      latitude: '35'
    }, {
      longitude: '117',
      label: '台儿庄区',
      latitude: '35'
    }, {
      longitude: '117',
      label: '山亭区',
      latitude: '35'
    }, {
      longitude: '117',
      label: '滕州市',
      latitude: '35'
    }],
    label: '枣庄市'
  }, {
    children: [{
      longitude: '119',
      label: '市辖区',
      latitude: '37'
    }, {
      longitude: '119',
      label: '东营区',
      latitude: '37'
    }, {
      longitude: '119',
      label: '河口区',
      latitude: '37'
    }, {
      longitude: '119',
      label: '垦利区',
      latitude: '37'
    }, {
      longitude: '119',
      label: '利津县',
      latitude: '37'
    }, {
      longitude: '119',
      label: '广饶县',
      latitude: '37'
    }],
    label: '东营市'
  }, {
    children: [{
      longitude: '121',
      label: '市辖区',
      latitude: '37'
    }, {
      longitude: '121',
      label: '芝罘区',
      latitude: '37'
    }, {
      longitude: '121',
      label: '福山区',
      latitude: '37'
    }, {
      longitude: '121',
      label: '牟平区',
      latitude: '37'
    }, {
      longitude: '121',
      label: '莱山区',
      latitude: '37'
    }, {
      longitude: '121',
      label: '长岛县',
      latitude: '37'
    }, {
      longitude: '121',
      label: '龙口市',
      latitude: '37'
    }, {
      longitude: '121',
      label: '莱阳市',
      latitude: '37'
    }, {
      longitude: '121',
      label: '莱州市',
      latitude: '37'
    }, {
      longitude: '121',
      label: '蓬莱市',
      latitude: '37'
    }, {
      longitude: '121',
      label: '招远市',
      latitude: '37'
    }, {
      longitude: '121',
      label: '栖霞市',
      latitude: '37'
    }, {
      longitude: '121',
      label: '海阳市',
      latitude: '37'
    }],
    label: '烟台市'
  }, {
    children: [{
      longitude: '119',
      label: '市辖区',
      latitude: '37'
    }, {
      longitude: '119',
      label: '潍城区',
      latitude: '37'
    }, {
      longitude: '119',
      label: '寒亭区',
      latitude: '37'
    }, {
      longitude: '119',
      label: '坊子区',
      latitude: '37'
    }, {
      longitude: '119',
      label: '奎文区',
      latitude: '37'
    }, {
      longitude: '119',
      label: '临朐县',
      latitude: '37'
    }, {
      longitude: '119',
      label: '昌乐县',
      latitude: '37'
    }, {
      longitude: '119',
      label: '青州市',
      latitude: '37'
    }, {
      longitude: '119',
      label: '诸城市',
      latitude: '37'
    }, {
      longitude: '119',
      label: '寿光市',
      latitude: '37'
    }, {
      longitude: '119',
      label: '安丘市',
      latitude: '37'
    }, {
      longitude: '119',
      label: '高密市',
      latitude: '37'
    }, {
      longitude: '119',
      label: '昌邑市',
      latitude: '37'
    }],
    label: '潍坊市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '117',
      label: '任城区',
      latitude: '35'
    }, {
      longitude: '117',
      label: '兖州区',
      latitude: '35'
    }, {
      longitude: '117',
      label: '微山县',
      latitude: '35'
    }, {
      longitude: '117',
      label: '鱼台县',
      latitude: '35'
    }, {
      longitude: '117',
      label: '金乡县',
      latitude: '35'
    }, {
      longitude: '117',
      label: '嘉祥县',
      latitude: '35'
    }, {
      longitude: '117',
      label: '汶上县',
      latitude: '35'
    }, {
      longitude: '117',
      label: '泗水县',
      latitude: '35'
    }, {
      longitude: '117',
      label: '梁山县',
      latitude: '35'
    }, {
      longitude: '117',
      label: '曲阜市',
      latitude: '35'
    }, {
      longitude: '117',
      label: '邹城市',
      latitude: '35'
    }],
    label: '济宁市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '117',
      label: '泰山区',
      latitude: '36'
    }, {
      longitude: '117',
      label: '岱岳区',
      latitude: '36'
    }, {
      longitude: '117',
      label: '宁阳县',
      latitude: '36'
    }, {
      longitude: '117',
      label: '东平县',
      latitude: '36'
    }, {
      longitude: '117',
      label: '新泰市',
      latitude: '36'
    }, {
      longitude: '117',
      label: '肥城市',
      latitude: '36'
    }],
    label: '泰安市'
  }, {
    children: [{
      longitude: '122',
      label: '市辖区',
      latitude: '38'
    }, {
      longitude: '122',
      label: '环翠区',
      latitude: '38'
    }, {
      longitude: '122',
      label: '文登区',
      latitude: '38'
    }, {
      longitude: '122',
      label: '荣成市',
      latitude: '38'
    }, {
      longitude: '122',
      label: '乳山市',
      latitude: '38'
    }],
    label: '威海市'
  }, {
    children: [{
      longitude: '120',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '120',
      label: '东港区',
      latitude: '35'
    }, {
      longitude: '120',
      label: '岚山区',
      latitude: '35'
    }, {
      longitude: '120',
      label: '五莲县',
      latitude: '35'
    }, {
      longitude: '120',
      label: '莒县',
      latitude: '35'
    }],
    label: '日照市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '118',
      label: '莱城区',
      latitude: '36'
    }, {
      longitude: '118',
      label: '钢城区',
      latitude: '36'
    }],
    label: '莱芜市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '118',
      label: '兰山区',
      latitude: '35'
    }, {
      longitude: '118',
      label: '罗庄区',
      latitude: '35'
    }, {
      longitude: '118',
      label: '河东区',
      latitude: '35'
    }, {
      longitude: '118',
      label: '沂南县',
      latitude: '35'
    }, {
      longitude: '118',
      label: '郯城县',
      latitude: '35'
    }, {
      longitude: '118',
      label: '沂水县',
      latitude: '35'
    }, {
      longitude: '118',
      label: '兰陵县',
      latitude: '35'
    }, {
      longitude: '118',
      label: '费县',
      latitude: '35'
    }, {
      longitude: '118',
      label: '平邑县',
      latitude: '35'
    }, {
      longitude: '118',
      label: '莒南县',
      latitude: '35'
    }, {
      longitude: '118',
      label: '蒙阴县',
      latitude: '35'
    }, {
      longitude: '118',
      label: '临沭县',
      latitude: '35'
    }],
    label: '临沂市'
  }, {
    children: [{
      longitude: '116',
      label: '市辖区',
      latitude: '37'
    }, {
      longitude: '116',
      label: '德城区',
      latitude: '37'
    }, {
      longitude: '116',
      label: '陵城区',
      latitude: '37'
    }, {
      longitude: '116',
      label: '宁津县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '庆云县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '临邑县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '齐河县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '平原县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '夏津县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '武城县',
      latitude: '37'
    }, {
      longitude: '116',
      label: '乐陵市',
      latitude: '37'
    }, {
      longitude: '116',
      label: '禹城市',
      latitude: '37'
    }],
    label: '德州市'
  }, {
    children: [{
      longitude: '116',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '116',
      label: '东昌府区',
      latitude: '36'
    }, {
      longitude: '116',
      label: '阳谷县',
      latitude: '36'
    }, {
      longitude: '116',
      label: '莘县',
      latitude: '36'
    }, {
      longitude: '116',
      label: '茌平县',
      latitude: '36'
    }, {
      longitude: '116',
      label: '东阿县',
      latitude: '36'
    }, {
      longitude: '116',
      label: '冠县',
      latitude: '36'
    }, {
      longitude: '116',
      label: '高唐县',
      latitude: '36'
    }, {
      longitude: '116',
      label: '临清市',
      latitude: '36'
    }],
    label: '聊城市'
  }, {
    children: [{
      longitude: '118',
      label: '市辖区',
      latitude: '37'
    }, {
      longitude: '118',
      label: '滨城区',
      latitude: '37'
    }, {
      longitude: '118',
      label: '沾化区',
      latitude: '37'
    }, {
      longitude: '118',
      label: '惠民县',
      latitude: '37'
    }, {
      longitude: '118',
      label: '阳信县',
      latitude: '37'
    }, {
      longitude: '118',
      label: '无棣县',
      latitude: '37'
    }, {
      longitude: '118',
      label: '博兴县',
      latitude: '37'
    }, {
      longitude: '118',
      label: '邹平县',
      latitude: '37'
    }],
    label: '滨州市'
  }, {
    children: [{
      longitude: '116',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '116',
      label: '牡丹区',
      latitude: '35'
    }, {
      longitude: '116',
      label: '定陶区',
      latitude: '35'
    }, {
      longitude: '116',
      label: '曹县',
      latitude: '35'
    }, {
      longitude: '116',
      label: '单县',
      latitude: '35'
    }, {
      longitude: '116',
      label: '成武县',
      latitude: '35'
    }, {
      longitude: '116',
      label: '巨野县',
      latitude: '35'
    }, {
      longitude: '116',
      label: '郓城县',
      latitude: '35'
    }, {
      longitude: '116',
      label: '鄄城县',
      latitude: '35'
    }, {
      longitude: '116',
      label: '东明县',
      latitude: '35'
    }],
    label: '菏泽市'
  }],
  label: '山东省'
}, {
  children: [{
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '中原区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '二七区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '管城回族区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '金水区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '上街区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '惠济区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '中牟县',
      latitude: '35'
    }, {
      longitude: '114',
      label: '巩义市',
      latitude: '35'
    }, {
      longitude: '114',
      label: '荥阳市',
      latitude: '35'
    }, {
      longitude: '114',
      label: '新密市',
      latitude: '35'
    }, {
      longitude: '114',
      label: '新郑市',
      latitude: '35'
    }, {
      longitude: '114',
      label: '登封市',
      latitude: '35'
    }],
    label: '郑州市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '龙亭区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '顺河回族区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '鼓楼区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '禹王台区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '金明区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '祥符区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '杞县',
      latitude: '35'
    }, {
      longitude: '114',
      label: '通许县',
      latitude: '35'
    }, {
      longitude: '114',
      label: '尉氏县',
      latitude: '35'
    }, {
      longitude: '114',
      label: '兰考县',
      latitude: '35'
    }],
    label: '开封市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '112',
      label: '老城区',
      latitude: '35'
    }, {
      longitude: '112',
      label: '西工区',
      latitude: '35'
    }, {
      longitude: '112',
      label: '瀍河回族区',
      latitude: '35'
    }, {
      longitude: '112',
      label: '涧西区',
      latitude: '35'
    }, {
      longitude: '112',
      label: '吉利区',
      latitude: '35'
    }, {
      longitude: '112',
      label: '洛龙区',
      latitude: '35'
    }, {
      longitude: '112',
      label: '孟津县',
      latitude: '35'
    }, {
      longitude: '112',
      label: '新安县',
      latitude: '35'
    }, {
      longitude: '112',
      label: '栾川县',
      latitude: '35'
    }, {
      longitude: '112',
      label: '嵩县',
      latitude: '35'
    }, {
      longitude: '112',
      label: '汝阳县',
      latitude: '35'
    }, {
      longitude: '112',
      label: '宜阳县',
      latitude: '35'
    }, {
      longitude: '112',
      label: '洛宁县',
      latitude: '35'
    }, {
      longitude: '112',
      label: '伊川县',
      latitude: '35'
    }, {
      longitude: '112',
      label: '偃师市',
      latitude: '35'
    }],
    label: '洛阳市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '113',
      label: '新华区',
      latitude: '34'
    }, {
      longitude: '113',
      label: '卫东区',
      latitude: '34'
    }, {
      longitude: '113',
      label: '石龙区',
      latitude: '34'
    }, {
      longitude: '113',
      label: '湛河区',
      latitude: '34'
    }, {
      longitude: '113',
      label: '宝丰县',
      latitude: '34'
    }, {
      longitude: '113',
      label: '叶县',
      latitude: '34'
    }, {
      longitude: '113',
      label: '鲁山县',
      latitude: '34'
    }, {
      longitude: '113',
      label: '郏县',
      latitude: '34'
    }, {
      longitude: '113',
      label: '舞钢市',
      latitude: '34'
    }, {
      longitude: '113',
      label: '汝州市',
      latitude: '34'
    }],
    label: '平顶山市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '114',
      label: '文峰区',
      latitude: '36'
    }, {
      longitude: '114',
      label: '北关区',
      latitude: '36'
    }, {
      longitude: '114',
      label: '殷都区',
      latitude: '36'
    }, {
      longitude: '114',
      label: '龙安区',
      latitude: '36'
    }, {
      longitude: '114',
      label: '安阳县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '汤阴县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '滑县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '内黄县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '林州市',
      latitude: '36'
    }],
    label: '安阳市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '114',
      label: '鹤山区',
      latitude: '36'
    }, {
      longitude: '114',
      label: '山城区',
      latitude: '36'
    }, {
      longitude: '114',
      label: '淇滨区',
      latitude: '36'
    }, {
      longitude: '114',
      label: '浚县',
      latitude: '36'
    }, {
      longitude: '114',
      label: '淇县',
      latitude: '36'
    }],
    label: '鹤壁市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '红旗区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '卫滨区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '凤泉区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '牧野区',
      latitude: '35'
    }, {
      longitude: '114',
      label: '新乡县',
      latitude: '35'
    }, {
      longitude: '114',
      label: '获嘉县',
      latitude: '35'
    }, {
      longitude: '114',
      label: '原阳县',
      latitude: '35'
    }, {
      longitude: '114',
      label: '延津县',
      latitude: '35'
    }, {
      longitude: '114',
      label: '封丘县',
      latitude: '35'
    }, {
      longitude: '114',
      label: '长垣县',
      latitude: '35'
    }, {
      longitude: '114',
      label: '卫辉市',
      latitude: '35'
    }, {
      longitude: '114',
      label: '辉县市',
      latitude: '35'
    }],
    label: '新乡市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '113',
      label: '解放区',
      latitude: '35'
    }, {
      longitude: '113',
      label: '中站区',
      latitude: '35'
    }, {
      longitude: '113',
      label: '马村区',
      latitude: '35'
    }, {
      longitude: '113',
      label: '山阳区',
      latitude: '35'
    }, {
      longitude: '113',
      label: '修武县',
      latitude: '35'
    }, {
      longitude: '113',
      label: '博爱县',
      latitude: '35'
    }, {
      longitude: '113',
      label: '武陟县',
      latitude: '35'
    }, {
      longitude: '113',
      label: '温县',
      latitude: '35'
    }, {
      longitude: '113',
      label: '沁阳市',
      latitude: '35'
    }, {
      longitude: '113',
      label: '孟州市',
      latitude: '35'
    }],
    label: '焦作市'
  }, {
    children: [{
      longitude: '115',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '115',
      label: '华龙区',
      latitude: '36'
    }, {
      longitude: '115',
      label: '清丰县',
      latitude: '36'
    }, {
      longitude: '115',
      label: '南乐县',
      latitude: '36'
    }, {
      longitude: '115',
      label: '范县',
      latitude: '36'
    }, {
      longitude: '115',
      label: '台前县',
      latitude: '36'
    }, {
      longitude: '115',
      label: '濮阳县',
      latitude: '36'
    }],
    label: '濮阳市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '114',
      label: '魏都区',
      latitude: '34'
    }, {
      longitude: '114',
      label: '许昌县',
      latitude: '34'
    }, {
      longitude: '114',
      label: '鄢陵县',
      latitude: '34'
    }, {
      longitude: '114',
      label: '襄城县',
      latitude: '34'
    }, {
      longitude: '114',
      label: '禹州市',
      latitude: '34'
    }, {
      longitude: '114',
      label: '长葛市',
      latitude: '34'
    }],
    label: '许昌市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '114',
      label: '源汇区',
      latitude: '34'
    }, {
      longitude: '114',
      label: '郾城区',
      latitude: '34'
    }, {
      longitude: '114',
      label: '召陵区',
      latitude: '34'
    }, {
      longitude: '114',
      label: '舞阳县',
      latitude: '34'
    }, {
      longitude: '114',
      label: '临颍县',
      latitude: '34'
    }],
    label: '漯河市'
  }, {
    children: [{
      longitude: '111',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '111',
      label: '湖滨区',
      latitude: '35'
    }, {
      longitude: '111',
      label: '陕州区',
      latitude: '35'
    }, {
      longitude: '111',
      label: '渑池县',
      latitude: '35'
    }, {
      longitude: '111',
      label: '卢氏县',
      latitude: '35'
    }, {
      longitude: '111',
      label: '义马市',
      latitude: '35'
    }, {
      longitude: '111',
      label: '灵宝市',
      latitude: '35'
    }],
    label: '三门峡市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '33'
    }, {
      longitude: '113',
      label: '宛城区',
      latitude: '33'
    }, {
      longitude: '113',
      label: '卧龙区',
      latitude: '33'
    }, {
      longitude: '113',
      label: '南召县',
      latitude: '33'
    }, {
      longitude: '113',
      label: '方城县',
      latitude: '33'
    }, {
      longitude: '113',
      label: '西峡县',
      latitude: '33'
    }, {
      longitude: '113',
      label: '镇平县',
      latitude: '33'
    }, {
      longitude: '113',
      label: '内乡县',
      latitude: '33'
    }, {
      longitude: '113',
      label: '淅川县',
      latitude: '33'
    }, {
      longitude: '113',
      label: '社旗县',
      latitude: '33'
    }, {
      longitude: '113',
      label: '唐河县',
      latitude: '33'
    }, {
      longitude: '113',
      label: '新野县',
      latitude: '33'
    }, {
      longitude: '113',
      label: '桐柏县',
      latitude: '33'
    }, {
      longitude: '113',
      label: '邓州市',
      latitude: '33'
    }],
    label: '南阳市'
  }, {
    children: [{
      longitude: '116',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '116',
      label: '梁园区',
      latitude: '34'
    }, {
      longitude: '116',
      label: '睢阳区',
      latitude: '34'
    }, {
      longitude: '116',
      label: '民权县',
      latitude: '34'
    }, {
      longitude: '116',
      label: '睢县',
      latitude: '34'
    }, {
      longitude: '116',
      label: '宁陵县',
      latitude: '34'
    }, {
      longitude: '116',
      label: '柘城县',
      latitude: '34'
    }, {
      longitude: '116',
      label: '虞城县',
      latitude: '34'
    }, {
      longitude: '116',
      label: '夏邑县',
      latitude: '34'
    }, {
      longitude: '116',
      label: '永城市',
      latitude: '34'
    }],
    label: '商丘市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '114',
      label: '浉河区',
      latitude: '32'
    }, {
      longitude: '114',
      label: '平桥区',
      latitude: '32'
    }, {
      longitude: '114',
      label: '罗山县',
      latitude: '32'
    }, {
      longitude: '114',
      label: '光山县',
      latitude: '32'
    }, {
      longitude: '114',
      label: '新县',
      latitude: '32'
    }, {
      longitude: '114',
      label: '商城县',
      latitude: '32'
    }, {
      longitude: '114',
      label: '固始县',
      latitude: '32'
    }, {
      longitude: '114',
      label: '潢川县',
      latitude: '32'
    }, {
      longitude: '114',
      label: '淮滨县',
      latitude: '32'
    }, {
      longitude: '114',
      label: '息县',
      latitude: '32'
    }],
    label: '信阳市'
  }, {
    children: [{
      longitude: '115',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '115',
      label: '川汇区',
      latitude: '34'
    }, {
      longitude: '115',
      label: '扶沟县',
      latitude: '34'
    }, {
      longitude: '115',
      label: '西华县',
      latitude: '34'
    }, {
      longitude: '115',
      label: '商水县',
      latitude: '34'
    }, {
      longitude: '115',
      label: '沈丘县',
      latitude: '34'
    }, {
      longitude: '115',
      label: '郸城县',
      latitude: '34'
    }, {
      longitude: '115',
      label: '淮阳县',
      latitude: '34'
    }, {
      longitude: '115',
      label: '太康县',
      latitude: '34'
    }, {
      longitude: '115',
      label: '鹿邑县',
      latitude: '34'
    }, {
      longitude: '115',
      label: '项城市',
      latitude: '34'
    }],
    label: '周口市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '33'
    }, {
      longitude: '114',
      label: '驿城区',
      latitude: '33'
    }, {
      longitude: '114',
      label: '西平县',
      latitude: '33'
    }, {
      longitude: '114',
      label: '上蔡县',
      latitude: '33'
    }, {
      longitude: '114',
      label: '平舆县',
      latitude: '33'
    }, {
      longitude: '114',
      label: '正阳县',
      latitude: '33'
    }, {
      longitude: '114',
      label: '确山县',
      latitude: '33'
    }, {
      longitude: '114',
      label: '泌阳县',
      latitude: '33'
    }, {
      longitude: '114',
      label: '汝南县',
      latitude: '33'
    }, {
      longitude: '114',
      label: '遂平县',
      latitude: '33'
    }, {
      longitude: '114',
      label: '新蔡县',
      latitude: '33'
    }],
    label: '驻马店市'
  }, {
    children: [{
      longitude: '112',
      label: '济源市',
      latitude: '35'
    }],
    label: '省直辖县级行政区划'
  }],
  label: '河南省'
}, {
  children: [{
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '江岸区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '江汉区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '硚口区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '汉阳区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '武昌区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '青山区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '洪山区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '东西湖区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '汉南区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '蔡甸区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '江夏区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '黄陂区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '新洲区',
      latitude: '31'
    }],
    label: '武汉市'
  }, {
    children: [{
      longitude: '115',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '115',
      label: '黄石港区',
      latitude: '30'
    }, {
      longitude: '115',
      label: '西塞山区',
      latitude: '30'
    }, {
      longitude: '115',
      label: '下陆区',
      latitude: '30'
    }, {
      longitude: '115',
      label: '铁山区',
      latitude: '30'
    }, {
      longitude: '115',
      label: '阳新县',
      latitude: '30'
    }, {
      longitude: '115',
      label: '大冶市',
      latitude: '30'
    }],
    label: '黄石市'
  }, {
    children: [{
      longitude: '110',
      label: '市辖区',
      latitude: '33'
    }, {
      longitude: '110',
      label: '茅箭区',
      latitude: '33'
    }, {
      longitude: '110',
      label: '张湾区',
      latitude: '33'
    }, {
      longitude: '110',
      label: '郧阳区',
      latitude: '33'
    }, {
      longitude: '110',
      label: '郧西县',
      latitude: '33'
    }, {
      longitude: '110',
      label: '竹山县',
      latitude: '33'
    }, {
      longitude: '110',
      label: '竹溪县',
      latitude: '33'
    }, {
      longitude: '110',
      label: '房县',
      latitude: '33'
    }, {
      longitude: '110',
      label: '丹江口市',
      latitude: '33'
    }],
    label: '十堰市'
  }, {
    children: [{
      longitude: '111',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '111',
      label: '西陵区',
      latitude: '31'
    }, {
      longitude: '111',
      label: '伍家岗区',
      latitude: '31'
    }, {
      longitude: '111',
      label: '点军区',
      latitude: '31'
    }, {
      longitude: '111',
      label: '猇亭区',
      latitude: '31'
    }, {
      longitude: '111',
      label: '夷陵区',
      latitude: '31'
    }, {
      longitude: '111',
      label: '远安县',
      latitude: '31'
    }, {
      longitude: '111',
      label: '兴山县',
      latitude: '31'
    }, {
      longitude: '111',
      label: '秭归县',
      latitude: '31'
    }, {
      longitude: '111',
      label: '长阳土家族自治县',
      latitude: '31'
    }, {
      longitude: '111',
      label: '五峰土家族自治县',
      latitude: '31'
    }, {
      longitude: '111',
      label: '宜都市',
      latitude: '31'
    }, {
      longitude: '111',
      label: '当阳市',
      latitude: '31'
    }, {
      longitude: '111',
      label: '枝江市',
      latitude: '31'
    }],
    label: '宜昌市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '112',
      label: '襄城区',
      latitude: '32'
    }, {
      longitude: '112',
      label: '樊城区',
      latitude: '32'
    }, {
      longitude: '112',
      label: '襄州区',
      latitude: '32'
    }, {
      longitude: '112',
      label: '南漳县',
      latitude: '32'
    }, {
      longitude: '112',
      label: '谷城县',
      latitude: '32'
    }, {
      longitude: '112',
      label: '保康县',
      latitude: '32'
    }, {
      longitude: '112',
      label: '老河口市',
      latitude: '32'
    }, {
      longitude: '112',
      label: '枣阳市',
      latitude: '32'
    }, {
      longitude: '112',
      label: '宜城市',
      latitude: '32'
    }],
    label: '襄阳市'
  }, {
    children: [{
      longitude: '115',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '115',
      label: '梁子湖区',
      latitude: '30'
    }, {
      longitude: '115',
      label: '华容区',
      latitude: '30'
    }, {
      longitude: '115',
      label: '鄂城区',
      latitude: '30'
    }],
    label: '鄂州市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '112',
      label: '东宝区',
      latitude: '31'
    }, {
      longitude: '112',
      label: '掇刀区',
      latitude: '31'
    }, {
      longitude: '112',
      label: '京山县',
      latitude: '31'
    }, {
      longitude: '112',
      label: '沙洋县',
      latitude: '31'
    }, {
      longitude: '112',
      label: '钟祥市',
      latitude: '31'
    }],
    label: '荆门市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '孝南区',
      latitude: '31'
    }, {
      longitude: '114',
      label: '孝昌县',
      latitude: '31'
    }, {
      longitude: '114',
      label: '大悟县',
      latitude: '31'
    }, {
      longitude: '114',
      label: '云梦县',
      latitude: '31'
    }, {
      longitude: '114',
      label: '应城市',
      latitude: '31'
    }, {
      longitude: '114',
      label: '安陆市',
      latitude: '31'
    }, {
      longitude: '114',
      label: '汉川市',
      latitude: '31'
    }],
    label: '孝感市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '112',
      label: '沙市区',
      latitude: '31'
    }, {
      longitude: '112',
      label: '荆州区',
      latitude: '31'
    }, {
      longitude: '112',
      label: '公安县',
      latitude: '31'
    }, {
      longitude: '112',
      label: '监利县',
      latitude: '31'
    }, {
      longitude: '112',
      label: '江陵县',
      latitude: '31'
    }, {
      longitude: '112',
      label: '石首市',
      latitude: '31'
    }, {
      longitude: '112',
      label: '洪湖市',
      latitude: '31'
    }, {
      longitude: '112',
      label: '松滋市',
      latitude: '31'
    }],
    label: '荆州市'
  }, {
    children: [{
      longitude: '115',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '115',
      label: '黄州区',
      latitude: '30'
    }, {
      longitude: '115',
      label: '团风县',
      latitude: '30'
    }, {
      longitude: '115',
      label: '红安县',
      latitude: '30'
    }, {
      longitude: '115',
      label: '罗田县',
      latitude: '30'
    }, {
      longitude: '115',
      label: '英山县',
      latitude: '30'
    }, {
      longitude: '115',
      label: '浠水县',
      latitude: '30'
    }, {
      longitude: '115',
      label: '蕲春县',
      latitude: '30'
    }, {
      longitude: '115',
      label: '黄梅县',
      latitude: '30'
    }, {
      longitude: '115',
      label: '麻城市',
      latitude: '30'
    }, {
      longitude: '115',
      label: '武穴市',
      latitude: '30'
    }],
    label: '黄冈市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '114',
      label: '咸安区',
      latitude: '30'
    }, {
      longitude: '114',
      label: '嘉鱼县',
      latitude: '30'
    }, {
      longitude: '114',
      label: '通城县',
      latitude: '30'
    }, {
      longitude: '114',
      label: '崇阳县',
      latitude: '30'
    }, {
      longitude: '114',
      label: '通山县',
      latitude: '30'
    }, {
      longitude: '114',
      label: '赤壁市',
      latitude: '30'
    }],
    label: '咸宁市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '113',
      label: '曾都区',
      latitude: '32'
    }, {
      longitude: '113',
      label: '随县',
      latitude: '32'
    }, {
      longitude: '113',
      label: '广水市',
      latitude: '32'
    }],
    label: '随州市'
  }, {
    children: [{
      longitude: '109',
      label: '恩施市',
      latitude: '30'
    }, {
      longitude: '109',
      label: '利川市',
      latitude: '30'
    }, {
      longitude: '109',
      label: '建始县',
      latitude: '30'
    }, {
      longitude: '109',
      label: '巴东县',
      latitude: '30'
    }, {
      longitude: '109',
      label: '宣恩县',
      latitude: '30'
    }, {
      longitude: '109',
      label: '咸丰县',
      latitude: '30'
    }, {
      longitude: '109',
      label: '来凤县',
      latitude: '30'
    }, {
      longitude: '109',
      label: '鹤峰县',
      latitude: '30'
    }],
    label: '恩施土家族苗族自治州'
  }, {
    children: [{
      longitude: '113',
      label: '仙桃市',
      latitude: '30'
    }, {
      longitude: '113',
      label: '潜江市',
      latitude: '30'
    }, {
      longitude: '113',
      label: '天门市',
      latitude: '30'
    }, {
      longitude: '113',
      label: '神农架林区',
      latitude: '30'
    }],
    label: '省直辖县级行政区划'
  }],
  label: '湖北省'
}, {
  children: [{
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '芙蓉区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '天心区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '岳麓区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '开福区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '雨花区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '望城区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '长沙县',
      latitude: '28'
    }, {
      longitude: '113',
      label: '宁乡县',
      latitude: '28'
    }, {
      longitude: '113',
      label: '浏阳市',
      latitude: '28'
    }],
    label: '长沙市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '荷塘区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '芦淞区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '石峰区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '天元区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '株洲县',
      latitude: '28'
    }, {
      longitude: '113',
      label: '攸县',
      latitude: '28'
    }, {
      longitude: '113',
      label: '茶陵县',
      latitude: '28'
    }, {
      longitude: '113',
      label: '炎陵县',
      latitude: '28'
    }, {
      longitude: '113',
      label: '醴陵市',
      latitude: '28'
    }],
    label: '株洲市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '雨湖区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '岳塘区',
      latitude: '28'
    }, {
      longitude: '113',
      label: '湘潭县',
      latitude: '28'
    }, {
      longitude: '113',
      label: '湘乡市',
      latitude: '28'
    }, {
      longitude: '113',
      label: '韶山市',
      latitude: '28'
    }],
    label: '湘潭市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '27'
    }, {
      longitude: '113',
      label: '珠晖区',
      latitude: '27'
    }, {
      longitude: '113',
      label: '雁峰区',
      latitude: '27'
    }, {
      longitude: '113',
      label: '石鼓区',
      latitude: '27'
    }, {
      longitude: '113',
      label: '蒸湘区',
      latitude: '27'
    }, {
      longitude: '113',
      label: '南岳区',
      latitude: '27'
    }, {
      longitude: '113',
      label: '衡阳县',
      latitude: '27'
    }, {
      longitude: '113',
      label: '衡南县',
      latitude: '27'
    }, {
      longitude: '113',
      label: '衡山县',
      latitude: '27'
    }, {
      longitude: '113',
      label: '衡东县',
      latitude: '27'
    }, {
      longitude: '113',
      label: '祁东县',
      latitude: '27'
    }, {
      longitude: '113',
      label: '耒阳市',
      latitude: '27'
    }, {
      longitude: '113',
      label: '常宁市',
      latitude: '27'
    }],
    label: '衡阳市'
  }, {
    children: [{
      longitude: '111',
      label: '市辖区',
      latitude: '27'
    }, {
      longitude: '111',
      label: '双清区',
      latitude: '27'
    }, {
      longitude: '111',
      label: '大祥区',
      latitude: '27'
    }, {
      longitude: '111',
      label: '北塔区',
      latitude: '27'
    }, {
      longitude: '111',
      label: '邵东县',
      latitude: '27'
    }, {
      longitude: '111',
      label: '新邵县',
      latitude: '27'
    }, {
      longitude: '111',
      label: '邵阳县',
      latitude: '27'
    }, {
      longitude: '111',
      label: '隆回县',
      latitude: '27'
    }, {
      longitude: '111',
      label: '洞口县',
      latitude: '27'
    }, {
      longitude: '111',
      label: '绥宁县',
      latitude: '27'
    }, {
      longitude: '111',
      label: '新宁县',
      latitude: '27'
    }, {
      longitude: '111',
      label: '城步苗族自治县',
      latitude: '27'
    }, {
      longitude: '111',
      label: '武冈市',
      latitude: '27'
    }],
    label: '邵阳市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '29'
    }, {
      longitude: '113',
      label: '岳阳楼区',
      latitude: '29'
    }, {
      longitude: '113',
      label: '云溪区',
      latitude: '29'
    }, {
      longitude: '113',
      label: '君山区',
      latitude: '29'
    }, {
      longitude: '113',
      label: '岳阳县',
      latitude: '29'
    }, {
      longitude: '113',
      label: '华容县',
      latitude: '29'
    }, {
      longitude: '113',
      label: '湘阴县',
      latitude: '29'
    }, {
      longitude: '113',
      label: '平江县',
      latitude: '29'
    }, {
      longitude: '113',
      label: '汨罗市',
      latitude: '29'
    }, {
      longitude: '113',
      label: '临湘市',
      latitude: '29'
    }],
    label: '岳阳市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '29'
    }, {
      longitude: '112',
      label: '武陵区',
      latitude: '29'
    }, {
      longitude: '112',
      label: '鼎城区',
      latitude: '29'
    }, {
      longitude: '112',
      label: '安乡县',
      latitude: '29'
    }, {
      longitude: '112',
      label: '汉寿县',
      latitude: '29'
    }, {
      longitude: '112',
      label: '澧县',
      latitude: '29'
    }, {
      longitude: '112',
      label: '临澧县',
      latitude: '29'
    }, {
      longitude: '112',
      label: '桃源县',
      latitude: '29'
    }, {
      longitude: '112',
      label: '石门县',
      latitude: '29'
    }, {
      longitude: '112',
      label: '津市市',
      latitude: '29'
    }],
    label: '常德市'
  }, {
    children: [{
      longitude: '110',
      label: '市辖区',
      latitude: '29'
    }, {
      longitude: '110',
      label: '永定区',
      latitude: '29'
    }, {
      longitude: '110',
      label: '武陵源区',
      latitude: '29'
    }, {
      longitude: '110',
      label: '慈利县',
      latitude: '29'
    }, {
      longitude: '110',
      label: '桑植县',
      latitude: '29'
    }],
    label: '张家界市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '29'
    }, {
      longitude: '112',
      label: '资阳区',
      latitude: '29'
    }, {
      longitude: '112',
      label: '赫山区',
      latitude: '29'
    }, {
      longitude: '112',
      label: '南县',
      latitude: '29'
    }, {
      longitude: '112',
      label: '桃江县',
      latitude: '29'
    }, {
      longitude: '112',
      label: '安化县',
      latitude: '29'
    }, {
      longitude: '112',
      label: '沅江市',
      latitude: '29'
    }],
    label: '益阳市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '26'
    }, {
      longitude: '113',
      label: '北湖区',
      latitude: '26'
    }, {
      longitude: '113',
      label: '苏仙区',
      latitude: '26'
    }, {
      longitude: '113',
      label: '桂阳县',
      latitude: '26'
    }, {
      longitude: '113',
      label: '宜章县',
      latitude: '26'
    }, {
      longitude: '113',
      label: '永兴县',
      latitude: '26'
    }, {
      longitude: '113',
      label: '嘉禾县',
      latitude: '26'
    }, {
      longitude: '113',
      label: '临武县',
      latitude: '26'
    }, {
      longitude: '113',
      label: '汝城县',
      latitude: '26'
    }, {
      longitude: '113',
      label: '桂东县',
      latitude: '26'
    }, {
      longitude: '113',
      label: '安仁县',
      latitude: '26'
    }, {
      longitude: '113',
      label: '资兴市',
      latitude: '26'
    }],
    label: '郴州市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '26'
    }, {
      longitude: '112',
      label: '零陵区',
      latitude: '26'
    }, {
      longitude: '112',
      label: '冷水滩区',
      latitude: '26'
    }, {
      longitude: '112',
      label: '祁阳县',
      latitude: '26'
    }, {
      longitude: '112',
      label: '东安县',
      latitude: '26'
    }, {
      longitude: '112',
      label: '双牌县',
      latitude: '26'
    }, {
      longitude: '112',
      label: '道县',
      latitude: '26'
    }, {
      longitude: '112',
      label: '江永县',
      latitude: '26'
    }, {
      longitude: '112',
      label: '宁远县',
      latitude: '26'
    }, {
      longitude: '112',
      label: '蓝山县',
      latitude: '26'
    }, {
      longitude: '112',
      label: '新田县',
      latitude: '26'
    }, {
      longitude: '112',
      label: '江华瑶族自治县',
      latitude: '26'
    }],
    label: '永州市'
  }, {
    children: [{
      longitude: '110',
      label: '市辖区',
      latitude: '28'
    }, {
      longitude: '110',
      label: '鹤城区',
      latitude: '28'
    }, {
      longitude: '110',
      label: '中方县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '沅陵县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '辰溪县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '溆浦县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '会同县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '麻阳苗族自治县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '新晃侗族自治县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '芷江侗族自治县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '靖州苗族侗族自治县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '通道侗族自治县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '洪江市',
      latitude: '28'
    }],
    label: '怀化市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '28'
    }, {
      longitude: '112',
      label: '娄星区',
      latitude: '28'
    }, {
      longitude: '112',
      label: '双峰县',
      latitude: '28'
    }, {
      longitude: '112',
      label: '新化县',
      latitude: '28'
    }, {
      longitude: '112',
      label: '冷水江市',
      latitude: '28'
    }, {
      longitude: '112',
      label: '涟源市',
      latitude: '28'
    }],
    label: '娄底市'
  }, {
    children: [{
      longitude: '110',
      label: '吉首市',
      latitude: '28'
    }, {
      longitude: '110',
      label: '泸溪县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '凤凰县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '花垣县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '保靖县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '古丈县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '永顺县',
      latitude: '28'
    }, {
      longitude: '110',
      label: '龙山县',
      latitude: '28'
    }],
    label: '湘西土家族苗族自治州'
  }],
  label: '湖南省'
}, {
  children: [{
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '荔湾区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '越秀区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '海珠区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '天河区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '白云区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '黄埔区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '番禺区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '花都区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '南沙区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '从化区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '增城区',
      latitude: '23'
    }],
    label: '广州市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '25'
    }, {
      longitude: '114',
      label: '武江区',
      latitude: '25'
    }, {
      longitude: '114',
      label: '浈江区',
      latitude: '25'
    }, {
      longitude: '114',
      label: '曲江区',
      latitude: '25'
    }, {
      longitude: '114',
      label: '始兴县',
      latitude: '25'
    }, {
      longitude: '114',
      label: '仁化县',
      latitude: '25'
    }, {
      longitude: '114',
      label: '翁源县',
      latitude: '25'
    }, {
      longitude: '114',
      label: '乳源瑶族自治县',
      latitude: '25'
    }, {
      longitude: '114',
      label: '新丰县',
      latitude: '25'
    }, {
      longitude: '114',
      label: '乐昌市',
      latitude: '25'
    }, {
      longitude: '114',
      label: '南雄市',
      latitude: '25'
    }],
    label: '韶关市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '23'
    }, {
      longitude: '114',
      label: '罗湖区',
      latitude: '23'
    }, {
      longitude: '114',
      label: '福田区',
      latitude: '23'
    }, {
      longitude: '114',
      label: '南山区',
      latitude: '23'
    }, {
      longitude: '114',
      label: '宝安区',
      latitude: '23'
    }, {
      longitude: '114',
      label: '龙岗区',
      latitude: '23'
    }, {
      longitude: '114',
      label: '盐田区',
      latitude: '23'
    }],
    label: '深圳市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '22'
    }, {
      longitude: '114',
      label: '香洲区',
      latitude: '22'
    }, {
      longitude: '114',
      label: '斗门区',
      latitude: '22'
    }, {
      longitude: '114',
      label: '金湾区',
      latitude: '22'
    }],
    label: '珠海市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '23'
    }, {
      longitude: '117',
      label: '龙湖区',
      latitude: '23'
    }, {
      longitude: '117',
      label: '金平区',
      latitude: '23'
    }, {
      longitude: '117',
      label: '濠江区',
      latitude: '23'
    }, {
      longitude: '117',
      label: '潮阳区',
      latitude: '23'
    }, {
      longitude: '117',
      label: '潮南区',
      latitude: '23'
    }, {
      longitude: '117',
      label: '澄海区',
      latitude: '23'
    }, {
      longitude: '117',
      label: '南澳县',
      latitude: '23'
    }],
    label: '汕头市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '禅城区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '南海区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '顺德区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '三水区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '高明区',
      latitude: '23'
    }],
    label: '佛山市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '蓬江区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '江海区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '新会区',
      latitude: '23'
    }, {
      longitude: '113',
      label: '台山市',
      latitude: '23'
    }, {
      longitude: '113',
      label: '开平市',
      latitude: '23'
    }, {
      longitude: '113',
      label: '鹤山市',
      latitude: '23'
    }, {
      longitude: '113',
      label: '恩平市',
      latitude: '23'
    }],
    label: '江门市'
  }, {
    children: [{
      longitude: '110',
      label: '市辖区',
      latitude: '21'
    }, {
      longitude: '110',
      label: '赤坎区',
      latitude: '21'
    }, {
      longitude: '110',
      label: '霞山区',
      latitude: '21'
    }, {
      longitude: '110',
      label: '坡头区',
      latitude: '21'
    }, {
      longitude: '110',
      label: '麻章区',
      latitude: '21'
    }, {
      longitude: '110',
      label: '遂溪县',
      latitude: '21'
    }, {
      longitude: '110',
      label: '徐闻县',
      latitude: '21'
    }, {
      longitude: '110',
      label: '廉江市',
      latitude: '21'
    }, {
      longitude: '110',
      label: '雷州市',
      latitude: '21'
    }, {
      longitude: '110',
      label: '吴川市',
      latitude: '21'
    }],
    label: '湛江市'
  }, {
    children: [{
      longitude: '111',
      label: '市辖区',
      latitude: '22'
    }, {
      longitude: '111',
      label: '茂南区',
      latitude: '22'
    }, {
      longitude: '111',
      label: '电白区',
      latitude: '22'
    }, {
      longitude: '111',
      label: '高州市',
      latitude: '22'
    }, {
      longitude: '111',
      label: '化州市',
      latitude: '22'
    }, {
      longitude: '111',
      label: '信宜市',
      latitude: '22'
    }],
    label: '茂名市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '23'
    }, {
      longitude: '112',
      label: '端州区',
      latitude: '23'
    }, {
      longitude: '112',
      label: '鼎湖区',
      latitude: '23'
    }, {
      longitude: '112',
      label: '高要区',
      latitude: '23'
    }, {
      longitude: '112',
      label: '广宁县',
      latitude: '23'
    }, {
      longitude: '112',
      label: '怀集县',
      latitude: '23'
    }, {
      longitude: '112',
      label: '封开县',
      latitude: '23'
    }, {
      longitude: '112',
      label: '德庆县',
      latitude: '23'
    }, {
      longitude: '112',
      label: '四会市',
      latitude: '23'
    }],
    label: '肇庆市'
  }, {
    children: [{
      longitude: '114',
      label: '市辖区',
      latitude: '23'
    }, {
      longitude: '114',
      label: '惠城区',
      latitude: '23'
    }, {
      longitude: '114',
      label: '惠阳区',
      latitude: '23'
    }, {
      longitude: '114',
      label: '博罗县',
      latitude: '23'
    }, {
      longitude: '114',
      label: '惠东县',
      latitude: '23'
    }, {
      longitude: '114',
      label: '龙门县',
      latitude: '23'
    }],
    label: '惠州市'
  }, {
    children: [{
      longitude: '116',
      label: '市辖区',
      latitude: '24'
    }, {
      longitude: '116',
      label: '梅江区',
      latitude: '24'
    }, {
      longitude: '116',
      label: '梅县区',
      latitude: '24'
    }, {
      longitude: '116',
      label: '大埔县',
      latitude: '24'
    }, {
      longitude: '116',
      label: '丰顺县',
      latitude: '24'
    }, {
      longitude: '116',
      label: '五华县',
      latitude: '24'
    }, {
      longitude: '116',
      label: '平远县',
      latitude: '24'
    }, {
      longitude: '116',
      label: '蕉岭县',
      latitude: '24'
    }, {
      longitude: '116',
      label: '兴宁市',
      latitude: '24'
    }],
    label: '梅州市'
  }, {
    children: [{
      longitude: '115',
      label: '市辖区',
      latitude: '23'
    }, {
      longitude: '115',
      label: '城区',
      latitude: '23'
    }, {
      longitude: '115',
      label: '海丰县',
      latitude: '23'
    }, {
      longitude: '115',
      label: '陆河县',
      latitude: '23'
    }, {
      longitude: '115',
      label: '陆丰市',
      latitude: '23'
    }],
    label: '汕尾市'
  }, {
    children: [{
      longitude: '115',
      label: '市辖区',
      latitude: '24'
    }, {
      longitude: '115',
      label: '源城区',
      latitude: '24'
    }, {
      longitude: '115',
      label: '紫金县',
      latitude: '24'
    }, {
      longitude: '115',
      label: '龙川县',
      latitude: '24'
    }, {
      longitude: '115',
      label: '连平县',
      latitude: '24'
    }, {
      longitude: '115',
      label: '和平县',
      latitude: '24'
    }, {
      longitude: '115',
      label: '东源县',
      latitude: '24'
    }],
    label: '河源市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '22'
    }, {
      longitude: '112',
      label: '江城区',
      latitude: '22'
    }, {
      longitude: '112',
      label: '阳东区',
      latitude: '22'
    }, {
      longitude: '112',
      label: '阳西县',
      latitude: '22'
    }, {
      longitude: '112',
      label: '阳春市',
      latitude: '22'
    }],
    label: '阳江市'
  }, {
    children: [{
      longitude: '113',
      label: '市辖区',
      latitude: '24'
    }, {
      longitude: '113',
      label: '清城区',
      latitude: '24'
    }, {
      longitude: '113',
      label: '清新区',
      latitude: '24'
    }, {
      longitude: '113',
      label: '佛冈县',
      latitude: '24'
    }, {
      longitude: '113',
      label: '阳山县',
      latitude: '24'
    }, {
      longitude: '113',
      label: '连山壮族瑶族自治县',
      latitude: '24'
    }, {
      longitude: '113',
      label: '连南瑶族自治县',
      latitude: '24'
    }, {
      longitude: '113',
      label: '英德市',
      latitude: '24'
    }, {
      longitude: '113',
      label: '连州市',
      latitude: '24'
    }],
    label: '清远市'
  }, {
    children: [{
      longitude: '113',
      label: '东莞市',
      latitude: '23'
    }],
    label: '东莞市'
  }, {
    children: [{
      longitude: '113',
      label: '中山市',
      latitude: '22'
    }],
    label: '中山市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '24'
    }, {
      longitude: '117',
      label: '湘桥区',
      latitude: '24'
    }, {
      longitude: '117',
      label: '潮安区',
      latitude: '24'
    }, {
      longitude: '117',
      label: '饶平县',
      latitude: '24'
    }],
    label: '潮州市'
  }, {
    children: [{
      longitude: '116',
      label: '市辖区',
      latitude: '24'
    }, {
      longitude: '116',
      label: '榕城区',
      latitude: '24'
    }, {
      longitude: '116',
      label: '揭东区',
      latitude: '24'
    }, {
      longitude: '116',
      label: '揭西县',
      latitude: '24'
    }, {
      longitude: '116',
      label: '惠来县',
      latitude: '24'
    }, {
      longitude: '116',
      label: '普宁市',
      latitude: '24'
    }],
    label: '揭阳市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '23'
    }, {
      longitude: '112',
      label: '云城区',
      latitude: '23'
    }, {
      longitude: '112',
      label: '云安区',
      latitude: '23'
    }, {
      longitude: '112',
      label: '新兴县',
      latitude: '23'
    }, {
      longitude: '112',
      label: '郁南县',
      latitude: '23'
    }, {
      longitude: '112',
      label: '罗定市',
      latitude: '23'
    }],
    label: '云浮市'
  }],
  label: '广东省'
}, {
  children: [{
    children: [{
      longitude: '108',
      label: '市辖区',
      latitude: '23'
    }, {
      longitude: '108',
      label: '兴宁区',
      latitude: '23'
    }, {
      longitude: '108',
      label: '青秀区',
      latitude: '23'
    }, {
      longitude: '108',
      label: '江南区',
      latitude: '23'
    }, {
      longitude: '108',
      label: '西乡塘区',
      latitude: '23'
    }, {
      longitude: '108',
      label: '良庆区',
      latitude: '23'
    }, {
      longitude: '108',
      label: '邕宁区',
      latitude: '23'
    }, {
      longitude: '108',
      label: '武鸣区',
      latitude: '23'
    }, {
      longitude: '108',
      label: '隆安县',
      latitude: '23'
    }, {
      longitude: '108',
      label: '马山县',
      latitude: '23'
    }, {
      longitude: '108',
      label: '上林县',
      latitude: '23'
    }, {
      longitude: '108',
      label: '宾阳县',
      latitude: '23'
    }, {
      longitude: '108',
      label: '横县',
      latitude: '23'
    }],
    label: '南宁市'
  }, {
    children: [{
      longitude: '109',
      label: '市辖区',
      latitude: '24'
    }, {
      longitude: '109',
      label: '城中区',
      latitude: '24'
    }, {
      longitude: '109',
      label: '鱼峰区',
      latitude: '24'
    }, {
      longitude: '109',
      label: '柳南区',
      latitude: '24'
    }, {
      longitude: '109',
      label: '柳北区',
      latitude: '24'
    }, {
      longitude: '109',
      label: '柳江区',
      latitude: '24'
    }, {
      longitude: '109',
      label: '柳城县',
      latitude: '24'
    }, {
      longitude: '109',
      label: '鹿寨县',
      latitude: '24'
    }, {
      longitude: '109',
      label: '融安县',
      latitude: '24'
    }, {
      longitude: '109',
      label: '融水苗族自治县',
      latitude: '24'
    }, {
      longitude: '109',
      label: '三江侗族自治县',
      latitude: '24'
    }],
    label: '柳州市'
  }, {
    children: [{
      longitude: '110',
      label: '市辖区',
      latitude: '25'
    }, {
      longitude: '110',
      label: '秀峰区',
      latitude: '25'
    }, {
      longitude: '110',
      label: '叠彩区',
      latitude: '25'
    }, {
      longitude: '110',
      label: '象山区',
      latitude: '25'
    }, {
      longitude: '110',
      label: '七星区',
      latitude: '25'
    }, {
      longitude: '110',
      label: '雁山区',
      latitude: '25'
    }, {
      longitude: '110',
      label: '临桂区',
      latitude: '25'
    }, {
      longitude: '110',
      label: '阳朔县',
      latitude: '25'
    }, {
      longitude: '110',
      label: '灵川县',
      latitude: '25'
    }, {
      longitude: '110',
      label: '全州县',
      latitude: '25'
    }, {
      longitude: '110',
      label: '兴安县',
      latitude: '25'
    }, {
      longitude: '110',
      label: '永福县',
      latitude: '25'
    }, {
      longitude: '110',
      label: '灌阳县',
      latitude: '25'
    }, {
      longitude: '110',
      label: '龙胜各族自治县',
      latitude: '25'
    }, {
      longitude: '110',
      label: '资源县',
      latitude: '25'
    }, {
      longitude: '110',
      label: '平乐县',
      latitude: '25'
    }, {
      longitude: '110',
      label: '荔浦县',
      latitude: '25'
    }, {
      longitude: '110',
      label: '恭城瑶族自治县',
      latitude: '25'
    }],
    label: '桂林市'
  }, {
    children: [{
      longitude: '111',
      label: '市辖区',
      latitude: '23'
    }, {
      longitude: '111',
      label: '万秀区',
      latitude: '23'
    }, {
      longitude: '111',
      label: '长洲区',
      latitude: '23'
    }, {
      longitude: '111',
      label: '龙圩区',
      latitude: '23'
    }, {
      longitude: '111',
      label: '苍梧县',
      latitude: '23'
    }, {
      longitude: '111',
      label: '藤县',
      latitude: '23'
    }, {
      longitude: '111',
      label: '蒙山县',
      latitude: '23'
    }, {
      longitude: '111',
      label: '岑溪市',
      latitude: '23'
    }],
    label: '梧州市'
  }, {
    children: [{
      longitude: '109',
      label: '市辖区',
      latitude: '21'
    }, {
      longitude: '109',
      label: '海城区',
      latitude: '21'
    }, {
      longitude: '109',
      label: '银海区',
      latitude: '21'
    }, {
      longitude: '109',
      label: '铁山港区',
      latitude: '21'
    }, {
      longitude: '109',
      label: '合浦县',
      latitude: '21'
    }],
    label: '北海市'
  }, {
    children: [{
      longitude: '108',
      label: '市辖区',
      latitude: '22'
    }, {
      longitude: '108',
      label: '港口区',
      latitude: '22'
    }, {
      longitude: '108',
      label: '防城区',
      latitude: '22'
    }, {
      longitude: '108',
      label: '上思县',
      latitude: '22'
    }, {
      longitude: '108',
      label: '东兴市',
      latitude: '22'
    }],
    label: '防城港市'
  }, {
    children: [{
      longitude: '109',
      label: '市辖区',
      latitude: '22'
    }, {
      longitude: '109',
      label: '钦南区',
      latitude: '22'
    }, {
      longitude: '109',
      label: '钦北区',
      latitude: '22'
    }, {
      longitude: '109',
      label: '灵山县',
      latitude: '22'
    }, {
      longitude: '109',
      label: '浦北县',
      latitude: '22'
    }],
    label: '钦州市'
  }, {
    children: [{
      longitude: '110',
      label: '市辖区',
      latitude: '23'
    }, {
      longitude: '110',
      label: '港北区',
      latitude: '23'
    }, {
      longitude: '110',
      label: '港南区',
      latitude: '23'
    }, {
      longitude: '110',
      label: '覃塘区',
      latitude: '23'
    }, {
      longitude: '110',
      label: '平南县',
      latitude: '23'
    }, {
      longitude: '110',
      label: '桂平市',
      latitude: '23'
    }],
    label: '贵港市'
  }, {
    children: [{
      longitude: '110',
      label: '市辖区',
      latitude: '23'
    }, {
      longitude: '110',
      label: '玉州区',
      latitude: '23'
    }, {
      longitude: '110',
      label: '福绵区',
      latitude: '23'
    }, {
      longitude: '110',
      label: '容县',
      latitude: '23'
    }, {
      longitude: '110',
      label: '陆川县',
      latitude: '23'
    }, {
      longitude: '110',
      label: '博白县',
      latitude: '23'
    }, {
      longitude: '110',
      label: '兴业县',
      latitude: '23'
    }, {
      longitude: '110',
      label: '北流市',
      latitude: '23'
    }],
    label: '玉林市'
  }, {
    children: [{
      longitude: '117',
      label: '市辖区',
      latitude: '24'
    }, {
      longitude: '117',
      label: '右江区',
      latitude: '24'
    }, {
      longitude: '117',
      label: '田阳县',
      latitude: '24'
    }, {
      longitude: '117',
      label: '田东县',
      latitude: '24'
    }, {
      longitude: '117',
      label: '平果县',
      latitude: '24'
    }, {
      longitude: '117',
      label: '德保县',
      latitude: '24'
    }, {
      longitude: '117',
      label: '那坡县',
      latitude: '24'
    }, {
      longitude: '117',
      label: '凌云县',
      latitude: '24'
    }, {
      longitude: '117',
      label: '乐业县',
      latitude: '24'
    }, {
      longitude: '117',
      label: '田林县',
      latitude: '24'
    }, {
      longitude: '117',
      label: '西林县',
      latitude: '24'
    }, {
      longitude: '117',
      label: '隆林各族自治县',
      latitude: '24'
    }, {
      longitude: '117',
      label: '靖西市',
      latitude: '24'
    }],
    label: '百色市'
  }, {
    children: [{
      longitude: '112',
      label: '市辖区',
      latitude: '24'
    }, {
      longitude: '112',
      label: '八步区',
      latitude: '24'
    }, {
      longitude: '112',
      label: '平桂区',
      latitude: '24'
    }, {
      longitude: '112',
      label: '昭平县',
      latitude: '24'
    }, {
      longitude: '112',
      label: '钟山县',
      latitude: '24'
    }, {
      longitude: '112',
      label: '富川瑶族自治县',
      latitude: '24'
    }],
    label: '贺州市'
  }, {
    children: [{
      longitude: '108',
      label: '市辖区',
      latitude: '25'
    }, {
      longitude: '108',
      label: '金城江区',
      latitude: '25'
    }, {
      longitude: '108',
      label: '南丹县',
      latitude: '25'
    }, {
      longitude: '108',
      label: '天峨县',
      latitude: '25'
    }, {
      longitude: '108',
      label: '凤山县',
      latitude: '25'
    }, {
      longitude: '108',
      label: '东兰县',
      latitude: '25'
    }, {
      longitude: '108',
      label: '罗城仫佬族自治县',
      latitude: '25'
    }, {
      longitude: '108',
      label: '环江毛南族自治县',
      latitude: '25'
    }, {
      longitude: '108',
      label: '巴马瑶族自治县',
      latitude: '25'
    }, {
      longitude: '108',
      label: '都安瑶族自治县',
      latitude: '25'
    }, {
      longitude: '108',
      label: '大化瑶族自治县',
      latitude: '25'
    }, {
      longitude: '108',
      label: '宜州市',
      latitude: '25'
    }],
    label: '河池市'
  }, {
    children: [{
      longitude: '109',
      label: '市辖区',
      latitude: '24'
    }, {
      longitude: '109',
      label: '兴宾区',
      latitude: '24'
    }, {
      longitude: '109',
      label: '忻城县',
      latitude: '24'
    }, {
      longitude: '109',
      label: '象州县',
      latitude: '24'
    }, {
      longitude: '109',
      label: '武宣县',
      latitude: '24'
    }, {
      longitude: '109',
      label: '金秀瑶族自治县',
      latitude: '24'
    }, {
      longitude: '109',
      label: '合山市',
      latitude: '24'
    }],
    label: '来宾市'
  }, {
    children: [{
      longitude: '107',
      label: '市辖区',
      latitude: '22'
    }, {
      longitude: '107',
      label: '江州区',
      latitude: '22'
    }, {
      longitude: '107',
      label: '扶绥县',
      latitude: '22'
    }, {
      longitude: '107',
      label: '宁明县',
      latitude: '22'
    }, {
      longitude: '107',
      label: '龙州县',
      latitude: '22'
    }, {
      longitude: '107',
      label: '大新县',
      latitude: '22'
    }, {
      longitude: '107',
      label: '天等县',
      latitude: '22'
    }, {
      longitude: '107',
      label: '凭祥市',
      latitude: '22'
    }],
    label: '崇左市'
  }],
  label: '广西壮族自治区'
}, {
  children: [{
    children: [{
      longitude: '110',
      label: '市辖区',
      latitude: '20'
    }, {
      longitude: '110',
      label: '秀英区',
      latitude: '20'
    }, {
      longitude: '110',
      label: '龙华区',
      latitude: '20'
    }, {
      longitude: '110',
      label: '琼山区',
      latitude: '20'
    }, {
      longitude: '110',
      label: '美兰区',
      latitude: '20'
    }],
    label: '海口市'
  }, {
    children: [{
      longitude: '110',
      label: '市辖区',
      latitude: '18'
    }, {
      longitude: '110',
      label: '海棠区',
      latitude: '18'
    }, {
      longitude: '110',
      label: '吉阳区',
      latitude: '18'
    }, {
      longitude: '110',
      label: '天涯区',
      latitude: '18'
    }, {
      longitude: '110',
      label: '崖州区',
      latitude: '18'
    }],
    label: '三亚市'
  }, {
    children: [{
      longitude: '112',
      label: '三沙市',
      latitude: '16'
    }],
    label: '三沙市'
  }, {
    children: [{
      longitude: '109',
      label: '儋州市',
      latitude: '19'
    }],
    label: '儋州市'
  }, {
    children: [{
      longitude: '109',
      label: '五指山市',
      latitude: '19'
    }, {
      longitude: '109',
      label: '琼海市',
      latitude: '19'
    }, {
      longitude: '109',
      label: '文昌市',
      latitude: '19'
    }, {
      longitude: '109',
      label: '万宁市',
      latitude: '19'
    }, {
      longitude: '109',
      label: '东方市',
      latitude: '19'
    }, {
      longitude: '109',
      label: '定安县',
      latitude: '19'
    }, {
      longitude: '109',
      label: '屯昌县',
      latitude: '19'
    }, {
      longitude: '109',
      label: '澄迈县',
      latitude: '19'
    }, {
      longitude: '109',
      label: '临高县',
      latitude: '19'
    }, {
      longitude: '109',
      label: '白沙黎族自治县',
      latitude: '19'
    }, {
      longitude: '109',
      label: '昌江黎族自治县',
      latitude: '19'
    }, {
      longitude: '109',
      label: '乐东黎族自治县',
      latitude: '19'
    }, {
      longitude: '109',
      label: '陵水黎族自治县',
      latitude: '19'
    }, {
      longitude: '109',
      label: '保亭黎族苗族自治县',
      latitude: '19'
    }, {
      longitude: '109',
      label: '琼中黎族苗族自治县',
      latitude: '19'
    }],
    label: '省直辖县级行政区划'
  }],
  label: '海南省'
}, {
  children: [{
    children: [{
      longitude: '107',
      label: '万州区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '涪陵区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '渝中区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '大渡口区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '江北区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '沙坪坝区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '九龙坡区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '南岸区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '北碚区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '綦江区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '大足区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '渝北区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '巴南区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '黔江区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '长寿区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '江津区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '合川区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '永川区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '南川区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '璧山区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '铜梁区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '潼南区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '荣昌区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '开州区',
      latitude: '30'
    }],
    label: '市辖区'
  }, {
    children: [{
      longitude: '108',
      label: '梁平县',
      latitude: '29'
    }, {
      longitude: '108',
      label: '城口县',
      latitude: '29'
    }, {
      longitude: '108',
      label: '丰都县',
      latitude: '29'
    }, {
      longitude: '108',
      label: '垫江县',
      latitude: '29'
    }, {
      longitude: '108',
      label: '武隆县',
      latitude: '29'
    }, {
      longitude: '108',
      label: '忠县',
      latitude: '29'
    }, {
      longitude: '108',
      label: '云阳县',
      latitude: '29'
    }, {
      longitude: '108',
      label: '奉节县',
      latitude: '29'
    }, {
      longitude: '108',
      label: '巫山县',
      latitude: '29'
    }, {
      longitude: '108',
      label: '巫溪县',
      latitude: '29'
    }, {
      longitude: '108',
      label: '石柱土家族自治县',
      latitude: '29'
    }, {
      longitude: '108',
      label: '秀山土家族苗族自治县',
      latitude: '29'
    }, {
      longitude: '108',
      label: '酉阳土家族苗族自治县',
      latitude: '29'
    }, {
      longitude: '108',
      label: '彭水苗族土家族自治县',
      latitude: '29'
    }],
    label: '县'
  }],
  label: '重庆市'
}, {
  children: [{
    children: [{
      longitude: '104',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '锦江区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '青羊区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '金牛区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '武侯区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '成华区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '龙泉驿区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '青白江区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '新都区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '温江区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '双流区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '金堂县',
      latitude: '30'
    }, {
      longitude: '104',
      label: '郫县',
      latitude: '30'
    }, {
      longitude: '104',
      label: '大邑县',
      latitude: '30'
    }, {
      longitude: '104',
      label: '蒲江县',
      latitude: '30'
    }, {
      longitude: '104',
      label: '新津县',
      latitude: '30'
    }, {
      longitude: '104',
      label: '都江堰市',
      latitude: '30'
    }, {
      longitude: '104',
      label: '彭州市',
      latitude: '30'
    }, {
      longitude: '104',
      label: '邛崃市',
      latitude: '30'
    }, {
      longitude: '104',
      label: '崇州市',
      latitude: '30'
    }, {
      longitude: '104',
      label: '简阳市',
      latitude: '30'
    }],
    label: '成都市'
  }, {
    children: [{
      longitude: '105',
      label: '市辖区',
      latitude: '29'
    }, {
      longitude: '105',
      label: '自流井区',
      latitude: '29'
    }, {
      longitude: '105',
      label: '贡井区',
      latitude: '29'
    }, {
      longitude: '105',
      label: '大安区',
      latitude: '29'
    }, {
      longitude: '105',
      label: '沿滩区',
      latitude: '29'
    }, {
      longitude: '105',
      label: '荣县',
      latitude: '29'
    }, {
      longitude: '105',
      label: '富顺县',
      latitude: '29'
    }],
    label: '自贡市'
  }, {
    children: [{
      longitude: '102',
      label: '市辖区',
      latitude: '27'
    }, {
      longitude: '102',
      label: '东区',
      latitude: '27'
    }, {
      longitude: '102',
      label: '西区',
      latitude: '27'
    }, {
      longitude: '102',
      label: '仁和区',
      latitude: '27'
    }, {
      longitude: '102',
      label: '米易县',
      latitude: '27'
    }, {
      longitude: '102',
      label: '盐边县',
      latitude: '27'
    }],
    label: '攀枝花市'
  }, {
    children: [{
      longitude: '105',
      label: '市辖区',
      latitude: '29'
    }, {
      longitude: '105',
      label: '江阳区',
      latitude: '29'
    }, {
      longitude: '105',
      label: '纳溪区',
      latitude: '29'
    }, {
      longitude: '105',
      label: '龙马潭区',
      latitude: '29'
    }, {
      longitude: '105',
      label: '泸县',
      latitude: '29'
    }, {
      longitude: '105',
      label: '合江县',
      latitude: '29'
    }, {
      longitude: '105',
      label: '叙永县',
      latitude: '29'
    }, {
      longitude: '105',
      label: '古蔺县',
      latitude: '29'
    }],
    label: '泸州市'
  }, {
    children: [{
      longitude: '104',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '104',
      label: '旌阳区',
      latitude: '31'
    }, {
      longitude: '104',
      label: '中江县',
      latitude: '31'
    }, {
      longitude: '104',
      label: '罗江县',
      latitude: '31'
    }, {
      longitude: '104',
      label: '广汉市',
      latitude: '31'
    }, {
      longitude: '104',
      label: '什邡市',
      latitude: '31'
    }, {
      longitude: '104',
      label: '绵竹市',
      latitude: '31'
    }],
    label: '德阳市'
  }, {
    children: [{
      longitude: '105',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '105',
      label: '涪城区',
      latitude: '31'
    }, {
      longitude: '105',
      label: '游仙区',
      latitude: '31'
    }, {
      longitude: '105',
      label: '安州区',
      latitude: '31'
    }, {
      longitude: '105',
      label: '三台县',
      latitude: '31'
    }, {
      longitude: '105',
      label: '盐亭县',
      latitude: '31'
    }, {
      longitude: '105',
      label: '梓潼县',
      latitude: '31'
    }, {
      longitude: '105',
      label: '北川羌族自治县',
      latitude: '31'
    }, {
      longitude: '105',
      label: '平武县',
      latitude: '31'
    }, {
      longitude: '105',
      label: '江油市',
      latitude: '31'
    }],
    label: '绵阳市'
  }, {
    children: [{
      longitude: '106',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '106',
      label: '利州区',
      latitude: '32'
    }, {
      longitude: '106',
      label: '昭化区',
      latitude: '32'
    }, {
      longitude: '106',
      label: '朝天区',
      latitude: '32'
    }, {
      longitude: '106',
      label: '旺苍县',
      latitude: '32'
    }, {
      longitude: '106',
      label: '青川县',
      latitude: '32'
    }, {
      longitude: '106',
      label: '剑阁县',
      latitude: '32'
    }, {
      longitude: '106',
      label: '苍溪县',
      latitude: '32'
    }],
    label: '广元市'
  }, {
    children: [{
      longitude: '106',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '106',
      label: '船山区',
      latitude: '31'
    }, {
      longitude: '106',
      label: '安居区',
      latitude: '31'
    }, {
      longitude: '106',
      label: '蓬溪县',
      latitude: '31'
    }, {
      longitude: '106',
      label: '射洪县',
      latitude: '31'
    }, {
      longitude: '106',
      label: '大英县',
      latitude: '31'
    }],
    label: '遂宁市'
  }, {
    children: [{
      longitude: '105',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '105',
      label: '市中区',
      latitude: '30'
    }, {
      longitude: '105',
      label: '东兴区',
      latitude: '30'
    }, {
      longitude: '105',
      label: '威远县',
      latitude: '30'
    }, {
      longitude: '105',
      label: '资中县',
      latitude: '30'
    }, {
      longitude: '105',
      label: '隆昌县',
      latitude: '30'
    }],
    label: '内江市'
  }, {
    children: [{
      longitude: '104',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '市中区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '沙湾区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '五通桥区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '金口河区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '犍为县',
      latitude: '30'
    }, {
      longitude: '104',
      label: '井研县',
      latitude: '30'
    }, {
      longitude: '104',
      label: '夹江县',
      latitude: '30'
    }, {
      longitude: '104',
      label: '沐川县',
      latitude: '30'
    }, {
      longitude: '104',
      label: '峨边彝族自治县',
      latitude: '30'
    }, {
      longitude: '104',
      label: '马边彝族自治县',
      latitude: '30'
    }, {
      longitude: '104',
      label: '峨眉山市',
      latitude: '30'
    }],
    label: '乐山市'
  }, {
    children: [{
      longitude: '106',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '106',
      label: '顺庆区',
      latitude: '31'
    }, {
      longitude: '106',
      label: '高坪区',
      latitude: '31'
    }, {
      longitude: '106',
      label: '嘉陵区',
      latitude: '31'
    }, {
      longitude: '106',
      label: '南部县',
      latitude: '31'
    }, {
      longitude: '106',
      label: '营山县',
      latitude: '31'
    }, {
      longitude: '106',
      label: '蓬安县',
      latitude: '31'
    }, {
      longitude: '106',
      label: '仪陇县',
      latitude: '31'
    }, {
      longitude: '106',
      label: '西充县',
      latitude: '31'
    }, {
      longitude: '106',
      label: '阆中市',
      latitude: '31'
    }],
    label: '南充市'
  }, {
    children: [{
      longitude: '104',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '东坡区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '彭山区',
      latitude: '30'
    }, {
      longitude: '104',
      label: '仁寿县',
      latitude: '30'
    }, {
      longitude: '104',
      label: '洪雅县',
      latitude: '30'
    }, {
      longitude: '104',
      label: '丹棱县',
      latitude: '30'
    }, {
      longitude: '104',
      label: '青神县',
      latitude: '30'
    }],
    label: '眉山市'
  }, {
    children: [{
      longitude: '105',
      label: '市辖区',
      latitude: '29'
    }, {
      longitude: '105',
      label: '翠屏区',
      latitude: '29'
    }, {
      longitude: '105',
      label: '南溪区',
      latitude: '29'
    }, {
      longitude: '105',
      label: '宜宾县',
      latitude: '29'
    }, {
      longitude: '105',
      label: '江安县',
      latitude: '29'
    }, {
      longitude: '105',
      label: '长宁县',
      latitude: '29'
    }, {
      longitude: '105',
      label: '高县',
      latitude: '29'
    }, {
      longitude: '105',
      label: '珙县',
      latitude: '29'
    }, {
      longitude: '105',
      label: '筠连县',
      latitude: '29'
    }, {
      longitude: '105',
      label: '兴文县',
      latitude: '29'
    }, {
      longitude: '105',
      label: '屏山县',
      latitude: '29'
    }],
    label: '宜宾市'
  }, {
    children: [{
      longitude: '107',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '广安区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '前锋区',
      latitude: '30'
    }, {
      longitude: '107',
      label: '岳池县',
      latitude: '30'
    }, {
      longitude: '107',
      label: '武胜县',
      latitude: '30'
    }, {
      longitude: '107',
      label: '邻水县',
      latitude: '30'
    }, {
      longitude: '107',
      label: '华蓥市',
      latitude: '30'
    }],
    label: '广安市'
  }, {
    children: [{
      longitude: '107',
      label: '市辖区',
      latitude: '31'
    }, {
      longitude: '107',
      label: '通川区',
      latitude: '31'
    }, {
      longitude: '107',
      label: '达川区',
      latitude: '31'
    }, {
      longitude: '107',
      label: '宣汉县',
      latitude: '31'
    }, {
      longitude: '107',
      label: '开江县',
      latitude: '31'
    }, {
      longitude: '107',
      label: '大竹县',
      latitude: '31'
    }, {
      longitude: '107',
      label: '渠县',
      latitude: '31'
    }, {
      longitude: '107',
      label: '万源市',
      latitude: '31'
    }],
    label: '达州市'
  }, {
    children: [{
      longitude: '103',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '103',
      label: '雨城区',
      latitude: '30'
    }, {
      longitude: '103',
      label: '名山区',
      latitude: '30'
    }, {
      longitude: '103',
      label: '荥经县',
      latitude: '30'
    }, {
      longitude: '103',
      label: '汉源县',
      latitude: '30'
    }, {
      longitude: '103',
      label: '石棉县',
      latitude: '30'
    }, {
      longitude: '103',
      label: '天全县',
      latitude: '30'
    }, {
      longitude: '103',
      label: '芦山县',
      latitude: '30'
    }, {
      longitude: '103',
      label: '宝兴县',
      latitude: '30'
    }],
    label: '雅安市'
  }, {
    children: [{
      longitude: '107',
      label: '市辖区',
      latitude: '32'
    }, {
      longitude: '107',
      label: '巴州区',
      latitude: '32'
    }, {
      longitude: '107',
      label: '恩阳区',
      latitude: '32'
    }, {
      longitude: '107',
      label: '通江县',
      latitude: '32'
    }, {
      longitude: '107',
      label: '南江县',
      latitude: '32'
    }, {
      longitude: '107',
      label: '平昌县',
      latitude: '32'
    }],
    label: '巴中市'
  }, {
    children: [{
      longitude: '105',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '105',
      label: '雁江区',
      latitude: '30'
    }, {
      longitude: '105',
      label: '安岳县',
      latitude: '30'
    }, {
      longitude: '105',
      label: '乐至县',
      latitude: '30'
    }],
    label: '资阳市'
  }, {
    children: [{
      longitude: '102',
      label: '马尔康市',
      latitude: '32'
    }, {
      longitude: '102',
      label: '汶川县',
      latitude: '32'
    }, {
      longitude: '102',
      label: '理县',
      latitude: '32'
    }, {
      longitude: '102',
      label: '茂县',
      latitude: '32'
    }, {
      longitude: '102',
      label: '松潘县',
      latitude: '32'
    }, {
      longitude: '102',
      label: '九寨沟县',
      latitude: '32'
    }, {
      longitude: '102',
      label: '金川县',
      latitude: '32'
    }, {
      longitude: '102',
      label: '小金县',
      latitude: '32'
    }, {
      longitude: '102',
      label: '黑水县',
      latitude: '32'
    }, {
      longitude: '102',
      label: '壤塘县',
      latitude: '32'
    }, {
      longitude: '102',
      label: '阿坝县',
      latitude: '32'
    }, {
      longitude: '102',
      label: '若尔盖县',
      latitude: '32'
    }, {
      longitude: '102',
      label: '红原县',
      latitude: '32'
    }],
    label: '阿坝藏族羌族自治州'
  }, {
    children: [{
      longitude: '102',
      label: '康定市',
      latitude: '30'
    }, {
      longitude: '102',
      label: '泸定县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '丹巴县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '九龙县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '雅江县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '道孚县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '炉霍县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '甘孜县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '新龙县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '德格县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '白玉县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '石渠县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '色达县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '理塘县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '巴塘县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '乡城县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '稻城县',
      latitude: '30'
    }, {
      longitude: '102',
      label: '得荣县',
      latitude: '30'
    }],
    label: '甘孜藏族自治州'
  }, {
    children: [{
      longitude: '102',
      label: '西昌市',
      latitude: '28'
    }, {
      longitude: '102',
      label: '木里藏族自治县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '盐源县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '德昌县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '会理县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '会东县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '宁南县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '普格县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '布拖县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '金阳县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '昭觉县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '喜德县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '冕宁县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '越西县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '甘洛县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '美姑县',
      latitude: '28'
    }, {
      longitude: '102',
      label: '雷波县',
      latitude: '28'
    }],
    label: '凉山彝族自治州'
  }],
  label: '四川省'
}, {
  children: [{
    children: [{
      longitude: '107',
      label: '市辖区',
      latitude: '27'
    }, {
      longitude: '107',
      label: '南明区',
      latitude: '27'
    }, {
      longitude: '107',
      label: '云岩区',
      latitude: '27'
    }, {
      longitude: '107',
      label: '花溪区',
      latitude: '27'
    }, {
      longitude: '107',
      label: '乌当区',
      latitude: '27'
    }, {
      longitude: '107',
      label: '白云区',
      latitude: '27'
    }, {
      longitude: '107',
      label: '观山湖区',
      latitude: '27'
    }, {
      longitude: '107',
      label: '开阳县',
      latitude: '27'
    }, {
      longitude: '107',
      label: '息烽县',
      latitude: '27'
    }, {
      longitude: '107',
      label: '修文县',
      latitude: '27'
    }, {
      longitude: '107',
      label: '清镇市',
      latitude: '27'
    }],
    label: '贵阳市'
  }, {
    children: [{
      longitude: '105',
      label: '钟山区',
      latitude: '27'
    }, {
      longitude: '105',
      label: '六枝特区',
      latitude: '27'
    }, {
      longitude: '105',
      label: '水城县',
      latitude: '27'
    }, {
      longitude: '105',
      label: '盘县',
      latitude: '27'
    }],
    label: '六盘水市'
  }, {
    children: [{
      longitude: '107',
      label: '市辖区',
      latitude: '28'
    }, {
      longitude: '107',
      label: '红花岗区',
      latitude: '28'
    }, {
      longitude: '107',
      label: '汇川区',
      latitude: '28'
    }, {
      longitude: '107',
      label: '播州区',
      latitude: '28'
    }, {
      longitude: '107',
      label: '桐梓县',
      latitude: '28'
    }, {
      longitude: '107',
      label: '绥阳县',
      latitude: '28'
    }, {
      longitude: '107',
      label: '正安县',
      latitude: '28'
    }, {
      longitude: '107',
      label: '道真仡佬族苗族自治县',
      latitude: '28'
    }, {
      longitude: '107',
      label: '务川仡佬族苗族自治县',
      latitude: '28'
    }, {
      longitude: '107',
      label: '凤冈县',
      latitude: '28'
    }, {
      longitude: '107',
      label: '湄潭县',
      latitude: '28'
    }, {
      longitude: '107',
      label: '余庆县',
      latitude: '28'
    }, {
      longitude: '107',
      label: '习水县',
      latitude: '28'
    }, {
      longitude: '107',
      label: '赤水市',
      latitude: '28'
    }, {
      longitude: '107',
      label: '仁怀市',
      latitude: '28'
    }],
    label: '遵义市'
  }, {
    children: [{
      longitude: '106',
      label: '市辖区',
      latitude: '26'
    }, {
      longitude: '106',
      label: '西秀区',
      latitude: '26'
    }, {
      longitude: '106',
      label: '平坝区',
      latitude: '26'
    }, {
      longitude: '106',
      label: '普定县',
      latitude: '26'
    }, {
      longitude: '106',
      label: '镇宁布依族苗族自治县',
      latitude: '26'
    }, {
      longitude: '106',
      label: '关岭布依族苗族自治县',
      latitude: '26'
    }, {
      longitude: '106',
      label: '紫云苗族布依族自治县',
      latitude: '26'
    }],
    label: '安顺市'
  }, {
    children: [{
      longitude: '106',
      label: '市辖区',
      latitude: '26'
    }, {
      longitude: '106',
      label: '七星关区',
      latitude: '26'
    }, {
      longitude: '106',
      label: '大方县',
      latitude: '26'
    }, {
      longitude: '106',
      label: '黔西县',
      latitude: '26'
    }, {
      longitude: '106',
      label: '金沙县',
      latitude: '26'
    }, {
      longitude: '106',
      label: '织金县',
      latitude: '26'
    }, {
      longitude: '106',
      label: '纳雍县',
      latitude: '26'
    }, {
      longitude: '106',
      label: '威宁彝族回族苗族自治县',
      latitude: '26'
    }, {
      longitude: '106',
      label: '赫章县',
      latitude: '26'
    }],
    label: '毕节市'
  }, {
    children: [{
      longitude: '109',
      label: '市辖区',
      latitude: '27'
    }, {
      longitude: '109',
      label: '碧江区',
      latitude: '27'
    }, {
      longitude: '109',
      label: '万山区',
      latitude: '27'
    }, {
      longitude: '109',
      label: '江口县',
      latitude: '27'
    }, {
      longitude: '109',
      label: '玉屏侗族自治县',
      latitude: '27'
    }, {
      longitude: '109',
      label: '石阡县',
      latitude: '27'
    }, {
      longitude: '109',
      label: '思南县',
      latitude: '27'
    }, {
      longitude: '109',
      label: '印江土家族苗族自治县',
      latitude: '27'
    }, {
      longitude: '109',
      label: '德江县',
      latitude: '27'
    }, {
      longitude: '109',
      label: '沿河土家族自治县',
      latitude: '27'
    }, {
      longitude: '109',
      label: '松桃苗族自治县',
      latitude: '27'
    }],
    label: '铜仁市'
  }, {
    children: [{
      longitude: '105',
      label: '兴义市',
      latitude: '25'
    }, {
      longitude: '105',
      label: '兴仁县',
      latitude: '25'
    }, {
      longitude: '105',
      label: '普安县',
      latitude: '25'
    }, {
      longitude: '105',
      label: '晴隆县',
      latitude: '25'
    }, {
      longitude: '105',
      label: '贞丰县',
      latitude: '25'
    }, {
      longitude: '105',
      label: '望谟县',
      latitude: '25'
    }, {
      longitude: '105',
      label: '册亨县',
      latitude: '25'
    }, {
      longitude: '105',
      label: '安龙县',
      latitude: '25'
    }],
    label: '黔西南布依族苗族自治州'
  }, {
    children: [{
      longitude: '108',
      label: '凯里市',
      latitude: '27'
    }, {
      longitude: '108',
      label: '黄平县',
      latitude: '27'
    }, {
      longitude: '108',
      label: '施秉县',
      latitude: '27'
    }, {
      longitude: '108',
      label: '三穗县',
      latitude: '27'
    }, {
      longitude: '108',
      label: '镇远县',
      latitude: '27'
    }, {
      longitude: '108',
      label: '岑巩县',
      latitude: '27'
    }, {
      longitude: '108',
      label: '天柱县',
      latitude: '27'
    }, {
      longitude: '108',
      label: '锦屏县',
      latitude: '27'
    }, {
      longitude: '108',
      label: '剑河县',
      latitude: '27'
    }, {
      longitude: '108',
      label: '台江县',
      latitude: '27'
    }, {
      longitude: '108',
      label: '黎平县',
      latitude: '27'
    }, {
      longitude: '108',
      label: '榕江县',
      latitude: '27'
    }, {
      longitude: '108',
      label: '从江县',
      latitude: '27'
    }, {
      longitude: '108',
      label: '雷山县',
      latitude: '27'
    }, {
      longitude: '108',
      label: '麻江县',
      latitude: '27'
    }, {
      longitude: '108',
      label: '丹寨县',
      latitude: '27'
    }],
    label: '黔东南苗族侗族自治州'
  }, {
    children: [{
      longitude: '108',
      label: '都匀市',
      latitude: '26'
    }, {
      longitude: '108',
      label: '福泉市',
      latitude: '26'
    }, {
      longitude: '108',
      label: '荔波县',
      latitude: '26'
    }, {
      longitude: '108',
      label: '贵定县',
      latitude: '26'
    }, {
      longitude: '108',
      label: '瓮安县',
      latitude: '26'
    }, {
      longitude: '108',
      label: '独山县',
      latitude: '26'
    }, {
      longitude: '108',
      label: '平塘县',
      latitude: '26'
    }, {
      longitude: '108',
      label: '罗甸县',
      latitude: '26'
    }, {
      longitude: '108',
      label: '长顺县',
      latitude: '26'
    }, {
      longitude: '108',
      label: '龙里县',
      latitude: '26'
    }, {
      longitude: '108',
      label: '惠水县',
      latitude: '26'
    }, {
      longitude: '108',
      label: '三都水族自治县',
      latitude: '26'
    }],
    label: '黔南布依族苗族自治州'
  }],
  label: '贵州省'
}, {
  children: [{
    children: [{
      longitude: '103',
      label: '市辖区',
      latitude: '25'
    }, {
      longitude: '103',
      label: '五华区',
      latitude: '25'
    }, {
      longitude: '103',
      label: '盘龙区',
      latitude: '25'
    }, {
      longitude: '103',
      label: '官渡区',
      latitude: '25'
    }, {
      longitude: '103',
      label: '西山区',
      latitude: '25'
    }, {
      longitude: '103',
      label: '东川区',
      latitude: '25'
    }, {
      longitude: '103',
      label: '呈贡区',
      latitude: '25'
    }, {
      longitude: '103',
      label: '晋宁县',
      latitude: '25'
    }, {
      longitude: '103',
      label: '富民县',
      latitude: '25'
    }, {
      longitude: '103',
      label: '宜良县',
      latitude: '25'
    }, {
      longitude: '103',
      label: '石林彝族自治县',
      latitude: '25'
    }, {
      longitude: '103',
      label: '嵩明县',
      latitude: '25'
    }, {
      longitude: '103',
      label: '禄劝彝族苗族自治县',
      latitude: '25'
    }, {
      longitude: '103',
      label: '寻甸回族彝族自治县',
      latitude: '25'
    }, {
      longitude: '103',
      label: '安宁市',
      latitude: '25'
    }],
    label: '昆明市'
  }, {
    children: [{
      longitude: '104',
      label: '市辖区',
      latitude: '25'
    }, {
      longitude: '104',
      label: '麒麟区',
      latitude: '25'
    }, {
      longitude: '104',
      label: '沾益区',
      latitude: '25'
    }, {
      longitude: '104',
      label: '马龙县',
      latitude: '25'
    }, {
      longitude: '104',
      label: '陆良县',
      latitude: '25'
    }, {
      longitude: '104',
      label: '师宗县',
      latitude: '25'
    }, {
      longitude: '104',
      label: '罗平县',
      latitude: '25'
    }, {
      longitude: '104',
      label: '富源县',
      latitude: '25'
    }, {
      longitude: '104',
      label: '会泽县',
      latitude: '25'
    }, {
      longitude: '104',
      label: '宣威市',
      latitude: '25'
    }],
    label: '曲靖市'
  }, {
    children: [{
      longitude: '103',
      label: '市辖区',
      latitude: '25'
    }, {
      longitude: '103',
      label: '红塔区',
      latitude: '25'
    }, {
      longitude: '103',
      label: '江川区',
      latitude: '25'
    }, {
      longitude: '103',
      label: '澄江县',
      latitude: '25'
    }, {
      longitude: '103',
      label: '通海县',
      latitude: '25'
    }, {
      longitude: '103',
      label: '华宁县',
      latitude: '25'
    }, {
      longitude: '103',
      label: '易门县',
      latitude: '25'
    }, {
      longitude: '103',
      label: '峨山彝族自治县',
      latitude: '25'
    }, {
      longitude: '103',
      label: '新平彝族傣族自治县',
      latitude: '25'
    }, {
      longitude: '103',
      label: '元江哈尼族彝族傣族自治县',
      latitude: '25'
    }],
    label: '玉溪市'
  }, {
    children: [{
      longitude: '99',
      label: '市辖区',
      latitude: '25'
    }, {
      longitude: '99',
      label: '隆阳区',
      latitude: '25'
    }, {
      longitude: '99',
      label: '施甸县',
      latitude: '25'
    }, {
      longitude: '99',
      label: '龙陵县',
      latitude: '25'
    }, {
      longitude: '99',
      label: '昌宁县',
      latitude: '25'
    }, {
      longitude: '99',
      label: '腾冲市',
      latitude: '25'
    }],
    label: '保山市'
  }, {
    children: [{
      longitude: '104',
      label: '市辖区',
      latitude: '27'
    }, {
      longitude: '104',
      label: '昭阳区',
      latitude: '27'
    }, {
      longitude: '104',
      label: '鲁甸县',
      latitude: '27'
    }, {
      longitude: '104',
      label: '巧家县',
      latitude: '27'
    }, {
      longitude: '104',
      label: '盐津县',
      latitude: '27'
    }, {
      longitude: '104',
      label: '大关县',
      latitude: '27'
    }, {
      longitude: '104',
      label: '永善县',
      latitude: '27'
    }, {
      longitude: '104',
      label: '绥江县',
      latitude: '27'
    }, {
      longitude: '104',
      label: '镇雄县',
      latitude: '27'
    }, {
      longitude: '104',
      label: '彝良县',
      latitude: '27'
    }, {
      longitude: '104',
      label: '威信县',
      latitude: '27'
    }, {
      longitude: '104',
      label: '水富县',
      latitude: '27'
    }],
    label: '昭通市'
  }, {
    children: [{
      longitude: '100',
      label: '市辖区',
      latitude: '27'
    }, {
      longitude: '100',
      label: '古城区',
      latitude: '27'
    }, {
      longitude: '100',
      label: '玉龙纳西族自治县',
      latitude: '27'
    }, {
      longitude: '100',
      label: '永胜县',
      latitude: '27'
    }, {
      longitude: '100',
      label: '华坪县',
      latitude: '27'
    }, {
      longitude: '100',
      label: '宁蒗彝族自治县',
      latitude: '27'
    }],
    label: '丽江市'
  }, {
    children: [{
      longitude: '101',
      label: '市辖区',
      latitude: '23'
    }, {
      longitude: '101',
      label: '思茅区',
      latitude: '23'
    }, {
      longitude: '101',
      label: '宁洱哈尼族彝族自治县',
      latitude: '23'
    }, {
      longitude: '101',
      label: '墨江哈尼族自治县',
      latitude: '23'
    }, {
      longitude: '101',
      label: '景东彝族自治县',
      latitude: '23'
    }, {
      longitude: '101',
      label: '景谷傣族彝族自治县',
      latitude: '23'
    }, {
      longitude: '101',
      label: '镇沅彝族哈尼族拉祜族自治县',
      latitude: '23'
    }, {
      longitude: '101',
      label: '江城哈尼族彝族自治县',
      latitude: '23'
    }, {
      longitude: '101',
      label: '孟连傣族拉祜族佤族自治县',
      latitude: '23'
    }, {
      longitude: '101',
      label: '澜沧拉祜族自治县',
      latitude: '23'
    }, {
      longitude: '101',
      label: '西盟佤族自治县',
      latitude: '23'
    }],
    label: '普洱市'
  }, {
    children: [{
      longitude: '100',
      label: '市辖区',
      latitude: '24'
    }, {
      longitude: '100',
      label: '临翔区',
      latitude: '24'
    }, {
      longitude: '100',
      label: '凤庆县',
      latitude: '24'
    }, {
      longitude: '100',
      label: '云县',
      latitude: '24'
    }, {
      longitude: '100',
      label: '永德县',
      latitude: '24'
    }, {
      longitude: '100',
      label: '镇康县',
      latitude: '24'
    }, {
      longitude: '100',
      label: '双江拉祜族佤族布朗族傣族自治县',
      latitude: '24'
    }, {
      longitude: '100',
      label: '耿马傣族佤族自治县',
      latitude: '24'
    }, {
      longitude: '100',
      label: '沧源佤族自治县',
      latitude: '24'
    }],
    label: '临沧市'
  }, {
    children: [{
      longitude: '102',
      label: '楚雄市',
      latitude: '25'
    }, {
      longitude: '102',
      label: '双柏县',
      latitude: '25'
    }, {
      longitude: '102',
      label: '牟定县',
      latitude: '25'
    }, {
      longitude: '102',
      label: '南华县',
      latitude: '25'
    }, {
      longitude: '102',
      label: '姚安县',
      latitude: '25'
    }, {
      longitude: '102',
      label: '大姚县',
      latitude: '25'
    }, {
      longitude: '102',
      label: '永仁县',
      latitude: '25'
    }, {
      longitude: '102',
      label: '元谋县',
      latitude: '25'
    }, {
      longitude: '102',
      label: '武定县',
      latitude: '25'
    }, {
      longitude: '102',
      label: '禄丰县',
      latitude: '25'
    }],
    label: '楚雄彝族自治州'
  }, {
    children: [{
      longitude: '103',
      label: '个旧市',
      latitude: '23'
    }, {
      longitude: '103',
      label: '开远市',
      latitude: '23'
    }, {
      longitude: '103',
      label: '蒙自市',
      latitude: '23'
    }, {
      longitude: '103',
      label: '弥勒市',
      latitude: '23'
    }, {
      longitude: '103',
      label: '屏边苗族自治县',
      latitude: '23'
    }, {
      longitude: '103',
      label: '建水县',
      latitude: '23'
    }, {
      longitude: '103',
      label: '石屏县',
      latitude: '23'
    }, {
      longitude: '103',
      label: '泸西县',
      latitude: '23'
    }, {
      longitude: '103',
      label: '元阳县',
      latitude: '23'
    }, {
      longitude: '103',
      label: '红河县',
      latitude: '23'
    }, {
      longitude: '103',
      label: '金平苗族瑶族傣族自治县',
      latitude: '23'
    }, {
      longitude: '103',
      label: '绿春县',
      latitude: '23'
    }, {
      longitude: '103',
      label: '河口瑶族自治县',
      latitude: '23'
    }],
    label: '红河哈尼族彝族自治州'
  }, {
    children: [{
      longitude: '104',
      label: '文山市',
      latitude: '23'
    }, {
      longitude: '104',
      label: '砚山县',
      latitude: '23'
    }, {
      longitude: '104',
      label: '西畴县',
      latitude: '23'
    }, {
      longitude: '104',
      label: '麻栗坡县',
      latitude: '23'
    }, {
      longitude: '104',
      label: '马关县',
      latitude: '23'
    }, {
      longitude: '104',
      label: '丘北县',
      latitude: '23'
    }, {
      longitude: '104',
      label: '广南县',
      latitude: '23'
    }, {
      longitude: '104',
      label: '富宁县',
      latitude: '23'
    }],
    label: '文山壮族苗族自治州'
  }, {
    children: [{
      longitude: '101',
      label: '景洪市',
      latitude: '22'
    }, {
      longitude: '101',
      label: '勐海县',
      latitude: '22'
    }, {
      longitude: '101',
      label: '勐腊县',
      latitude: '22'
    }],
    label: '西双版纳傣族自治州'
  }, {
    children: [{
      longitude: '100',
      label: '大理市',
      latitude: '26'
    }, {
      longitude: '100',
      label: '漾濞彝族自治县',
      latitude: '26'
    }, {
      longitude: '100',
      label: '祥云县',
      latitude: '26'
    }, {
      longitude: '100',
      label: '宾川县',
      latitude: '26'
    }, {
      longitude: '100',
      label: '弥渡县',
      latitude: '26'
    }, {
      longitude: '100',
      label: '南涧彝族自治县',
      latitude: '26'
    }, {
      longitude: '100',
      label: '巍山彝族回族自治县',
      latitude: '26'
    }, {
      longitude: '100',
      label: '永平县',
      latitude: '26'
    }, {
      longitude: '100',
      label: '云龙县',
      latitude: '26'
    }, {
      longitude: '100',
      label: '洱源县',
      latitude: '26'
    }, {
      longitude: '100',
      label: '剑川县',
      latitude: '26'
    }, {
      longitude: '100',
      label: '鹤庆县',
      latitude: '26'
    }],
    label: '大理白族自治州'
  }, {
    children: [{
      longitude: '99',
      label: '瑞丽市',
      latitude: '24'
    }, {
      longitude: '99',
      label: '芒市',
      latitude: '24'
    }, {
      longitude: '99',
      label: '梁河县',
      latitude: '24'
    }, {
      longitude: '99',
      label: '盈江县',
      latitude: '24'
    }, {
      longitude: '99',
      label: '陇川县',
      latitude: '24'
    }],
    label: '德宏傣族景颇族自治州'
  }, {
    children: [{
      longitude: '99',
      label: '泸水市',
      latitude: '26'
    }, {
      longitude: '99',
      label: '福贡县',
      latitude: '26'
    }, {
      longitude: '99',
      label: '贡山独龙族怒族自治县',
      latitude: '26'
    }, {
      longitude: '99',
      label: '兰坪白族普米族自治县',
      latitude: '26'
    }],
    label: '怒江傈僳族自治州'
  }, {
    children: [{
      longitude: '100',
      label: '香格里拉市',
      latitude: '28'
    }, {
      longitude: '100',
      label: '德钦县',
      latitude: '28'
    }, {
      longitude: '100',
      label: '维西傈僳族自治县',
      latitude: '28'
    }],
    label: '迪庆藏族自治州'
  }],
  label: '云南省'
}, {
  children: [{
    children: [{
      longitude: '91',
      label: '市辖区',
      latitude: '30'
    }, {
      longitude: '91',
      label: '城关区',
      latitude: '30'
    }, {
      longitude: '91',
      label: '堆龙德庆区',
      latitude: '30'
    }, {
      longitude: '91',
      label: '林周县',
      latitude: '30'
    }, {
      longitude: '91',
      label: '当雄县',
      latitude: '30'
    }, {
      longitude: '91',
      label: '尼木县',
      latitude: '30'
    }, {
      longitude: '91',
      label: '曲水县',
      latitude: '30'
    }, {
      longitude: '91',
      label: '达孜县',
      latitude: '30'
    }, {
      longitude: '91',
      label: '墨竹工卡县',
      latitude: '30'
    }],
    label: '拉萨市'
  }, {
    children: [{
      longitude: '88',
      label: '桑珠孜区',
      latitude: '29'
    }, {
      longitude: '88',
      label: '南木林县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '江孜县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '定日县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '萨迦县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '拉孜县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '昂仁县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '谢通门县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '白朗县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '仁布县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '康马县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '定结县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '仲巴县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '亚东县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '吉隆县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '聂拉木县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '萨嘎县',
      latitude: '29'
    }, {
      longitude: '88',
      label: '岗巴县',
      latitude: '29'
    }],
    label: '日喀则市'
  }, {
    children: [{
      longitude: '97',
      label: '卡若区',
      latitude: '31'
    }, {
      longitude: '97',
      label: '江达县',
      latitude: '31'
    }, {
      longitude: '97',
      label: '贡觉县',
      latitude: '31'
    }, {
      longitude: '97',
      label: '类乌齐县',
      latitude: '31'
    }, {
      longitude: '97',
      label: '丁青县',
      latitude: '31'
    }, {
      longitude: '97',
      label: '察雅县',
      latitude: '31'
    }, {
      longitude: '97',
      label: '八宿县',
      latitude: '31'
    }, {
      longitude: '97',
      label: '左贡县',
      latitude: '31'
    }, {
      longitude: '97',
      label: '芒康县',
      latitude: '31'
    }, {
      longitude: '97',
      label: '洛隆县',
      latitude: '31'
    }, {
      longitude: '97',
      label: '边坝县',
      latitude: '31'
    }],
    label: '昌都市'
  }, {
    children: [{
      longitude: '92',
      label: '巴宜区',
      latitude: '26'
    }, {
      longitude: '92',
      label: '工布江达县',
      latitude: '26'
    }, {
      longitude: '92',
      label: '米林县',
      latitude: '26'
    }, {
      longitude: '92',
      label: '墨脱县',
      latitude: '26'
    }, {
      longitude: '92',
      label: '波密县',
      latitude: '26'
    }, {
      longitude: '92',
      label: '察隅县',
      latitude: '26'
    }, {
      longitude: '92',
      label: '朗县',
      latitude: '26'
    }],
    label: '林芝市'
  }, {
    children: [{
      longitude: '91',
      label: '市辖区',
      latitude: '29'
    }, {
      longitude: '91',
      label: '乃东区',
      latitude: '29'
    }, {
      longitude: '91',
      label: '扎囊县',
      latitude: '29'
    }, {
      longitude: '91',
      label: '贡嘎县',
      latitude: '29'
    }, {
      longitude: '91',
      label: '桑日县',
      latitude: '29'
    }, {
      longitude: '91',
      label: '琼结县',
      latitude: '29'
    }, {
      longitude: '91',
      label: '曲松县',
      latitude: '29'
    }, {
      longitude: '91',
      label: '措美县',
      latitude: '29'
    }, {
      longitude: '91',
      label: '洛扎县',
      latitude: '29'
    }, {
      longitude: '91',
      label: '加查县',
      latitude: '29'
    }, {
      longitude: '91',
      label: '隆子县',
      latitude: '29'
    }, {
      longitude: '91',
      label: '错那县',
      latitude: '29'
    }, {
      longitude: '91',
      label: '浪卡子县',
      latitude: '29'
    }],
    label: '山南市'
  }, {
    children: [{
      longitude: '92',
      label: '那曲县',
      latitude: '31'
    }, {
      longitude: '92',
      label: '嘉黎县',
      latitude: '31'
    }, {
      longitude: '92',
      label: '比如县',
      latitude: '31'
    }, {
      longitude: '92',
      label: '聂荣县',
      latitude: '31'
    }, {
      longitude: '92',
      label: '安多县',
      latitude: '31'
    }, {
      longitude: '92',
      label: '申扎县',
      latitude: '31'
    }, {
      longitude: '92',
      label: '索县',
      latitude: '31'
    }, {
      longitude: '92',
      label: '班戈县',
      latitude: '31'
    }, {
      longitude: '92',
      label: '巴青县',
      latitude: '31'
    }, {
      longitude: '92',
      label: '尼玛县',
      latitude: '31'
    }, {
      longitude: '92',
      label: '双湖县',
      latitude: '31'
    }],
    label: '那曲地区'
  }, {
    children: [{
      longitude: '82',
      label: '普兰县',
      latitude: '32'
    }, {
      longitude: '82',
      label: '札达县',
      latitude: '32'
    }, {
      longitude: '82',
      label: '噶尔县',
      latitude: '32'
    }, {
      longitude: '82',
      label: '日土县',
      latitude: '32'
    }, {
      longitude: '82',
      label: '革吉县',
      latitude: '32'
    }, {
      longitude: '82',
      label: '改则县',
      latitude: '32'
    }, {
      longitude: '82',
      label: '措勤县',
      latitude: '32'
    }],
    label: '阿里地区'
  }],
  label: '西藏自治区'
}, {
  children: [{
    children: [{
      longitude: '109',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '新城区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '碑林区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '莲湖区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '灞桥区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '未央区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '雁塔区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '阎良区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '临潼区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '长安区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '高陵区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '蓝田县',
      latitude: '34'
    }, {
      longitude: '109',
      label: '周至县',
      latitude: '34'
    }, {
      longitude: '109',
      label: '户县',
      latitude: '34'
    }],
    label: '西安市'
  }, {
    children: [{
      longitude: '109',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '109',
      label: '王益区',
      latitude: '35'
    }, {
      longitude: '109',
      label: '印台区',
      latitude: '35'
    }, {
      longitude: '109',
      label: '耀州区',
      latitude: '35'
    }, {
      longitude: '109',
      label: '宜君县',
      latitude: '35'
    }],
    label: '铜川市'
  }, {
    children: [{
      longitude: '107',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '107',
      label: '渭滨区',
      latitude: '34'
    }, {
      longitude: '107',
      label: '金台区',
      latitude: '34'
    }, {
      longitude: '107',
      label: '陈仓区',
      latitude: '34'
    }, {
      longitude: '107',
      label: '凤翔县',
      latitude: '34'
    }, {
      longitude: '107',
      label: '岐山县',
      latitude: '34'
    }, {
      longitude: '107',
      label: '扶风县',
      latitude: '34'
    }, {
      longitude: '107',
      label: '眉县',
      latitude: '34'
    }, {
      longitude: '107',
      label: '陇县',
      latitude: '34'
    }, {
      longitude: '107',
      label: '千阳县',
      latitude: '34'
    }, {
      longitude: '107',
      label: '麟游县',
      latitude: '34'
    }, {
      longitude: '107',
      label: '凤县',
      latitude: '34'
    }, {
      longitude: '107',
      label: '太白县',
      latitude: '34'
    }],
    label: '宝鸡市'
  }, {
    children: [{
      longitude: '109',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '秦都区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '杨陵区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '渭城区',
      latitude: '34'
    }, {
      longitude: '109',
      label: '三原县',
      latitude: '34'
    }, {
      longitude: '109',
      label: '泾阳县',
      latitude: '34'
    }, {
      longitude: '109',
      label: '乾县',
      latitude: '34'
    }, {
      longitude: '109',
      label: '礼泉县',
      latitude: '34'
    }, {
      longitude: '109',
      label: '永寿县',
      latitude: '34'
    }, {
      longitude: '109',
      label: '彬县',
      latitude: '34'
    }, {
      longitude: '109',
      label: '长武县',
      latitude: '34'
    }, {
      longitude: '109',
      label: '旬邑县',
      latitude: '34'
    }, {
      longitude: '109',
      label: '淳化县',
      latitude: '34'
    }, {
      longitude: '109',
      label: '武功县',
      latitude: '34'
    }, {
      longitude: '109',
      label: '兴平市',
      latitude: '34'
    }],
    label: '咸阳市'
  }, {
    children: [{
      longitude: '109',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '109',
      label: '临渭区',
      latitude: '35'
    }, {
      longitude: '109',
      label: '华州区',
      latitude: '35'
    }, {
      longitude: '109',
      label: '潼关县',
      latitude: '35'
    }, {
      longitude: '109',
      label: '大荔县',
      latitude: '35'
    }, {
      longitude: '109',
      label: '合阳县',
      latitude: '35'
    }, {
      longitude: '109',
      label: '澄城县',
      latitude: '35'
    }, {
      longitude: '109',
      label: '蒲城县',
      latitude: '35'
    }, {
      longitude: '109',
      label: '白水县',
      latitude: '35'
    }, {
      longitude: '109',
      label: '富平县',
      latitude: '35'
    }, {
      longitude: '109',
      label: '韩城市',
      latitude: '35'
    }, {
      longitude: '109',
      label: '华阴市',
      latitude: '35'
    }],
    label: '渭南市'
  }, {
    children: [{
      longitude: '109',
      label: '市辖区',
      latitude: '37'
    }, {
      longitude: '109',
      label: '宝塔区',
      latitude: '37'
    }, {
      longitude: '109',
      label: '安塞区',
      latitude: '37'
    }, {
      longitude: '109',
      label: '延长县',
      latitude: '37'
    }, {
      longitude: '109',
      label: '延川县',
      latitude: '37'
    }, {
      longitude: '109',
      label: '子长县',
      latitude: '37'
    }, {
      longitude: '109',
      label: '志丹县',
      latitude: '37'
    }, {
      longitude: '109',
      label: '吴起县',
      latitude: '37'
    }, {
      longitude: '109',
      label: '甘泉县',
      latitude: '37'
    }, {
      longitude: '109',
      label: '富县',
      latitude: '37'
    }, {
      longitude: '109',
      label: '洛川县',
      latitude: '37'
    }, {
      longitude: '109',
      label: '宜川县',
      latitude: '37'
    }, {
      longitude: '109',
      label: '黄龙县',
      latitude: '37'
    }, {
      longitude: '109',
      label: '黄陵县',
      latitude: '37'
    }],
    label: '延安市'
  }, {
    children: [{
      longitude: '107',
      label: '市辖区',
      latitude: '33'
    }, {
      longitude: '107',
      label: '汉台区',
      latitude: '33'
    }, {
      longitude: '107',
      label: '南郑县',
      latitude: '33'
    }, {
      longitude: '107',
      label: '城固县',
      latitude: '33'
    }, {
      longitude: '107',
      label: '洋县',
      latitude: '33'
    }, {
      longitude: '107',
      label: '西乡县',
      latitude: '33'
    }, {
      longitude: '107',
      label: '勉县',
      latitude: '33'
    }, {
      longitude: '107',
      label: '宁强县',
      latitude: '33'
    }, {
      longitude: '107',
      label: '略阳县',
      latitude: '33'
    }, {
      longitude: '107',
      label: '镇巴县',
      latitude: '33'
    }, {
      longitude: '107',
      label: '留坝县',
      latitude: '33'
    }, {
      longitude: '107',
      label: '佛坪县',
      latitude: '33'
    }],
    label: '汉中市'
  }, {
    children: [{
      longitude: '110',
      label: '市辖区',
      latitude: '38'
    }, {
      longitude: '110',
      label: '榆阳区',
      latitude: '38'
    }, {
      longitude: '110',
      label: '横山区',
      latitude: '38'
    }, {
      longitude: '110',
      label: '神木县',
      latitude: '38'
    }, {
      longitude: '110',
      label: '府谷县',
      latitude: '38'
    }, {
      longitude: '110',
      label: '靖边县',
      latitude: '38'
    }, {
      longitude: '110',
      label: '定边县',
      latitude: '38'
    }, {
      longitude: '110',
      label: '绥德县',
      latitude: '38'
    }, {
      longitude: '110',
      label: '米脂县',
      latitude: '38'
    }, {
      longitude: '110',
      label: '佳县',
      latitude: '38'
    }, {
      longitude: '110',
      label: '吴堡县',
      latitude: '38'
    }, {
      longitude: '110',
      label: '清涧县',
      latitude: '38'
    }, {
      longitude: '110',
      label: '子洲县',
      latitude: '38'
    }],
    label: '榆林市'
  }, {
    children: [{
      longitude: '109',
      label: '市辖区',
      latitude: '33'
    }, {
      longitude: '109',
      label: '汉滨区',
      latitude: '33'
    }, {
      longitude: '109',
      label: '汉阴县',
      latitude: '33'
    }, {
      longitude: '109',
      label: '石泉县',
      latitude: '33'
    }, {
      longitude: '109',
      label: '宁陕县',
      latitude: '33'
    }, {
      longitude: '109',
      label: '紫阳县',
      latitude: '33'
    }, {
      longitude: '109',
      label: '岚皋县',
      latitude: '33'
    }, {
      longitude: '109',
      label: '平利县',
      latitude: '33'
    }, {
      longitude: '109',
      label: '镇坪县',
      latitude: '33'
    }, {
      longitude: '109',
      label: '旬阳县',
      latitude: '33'
    }, {
      longitude: '109',
      label: '白河县',
      latitude: '33'
    }],
    label: '安康市'
  }, {
    children: [{
      longitude: '110',
      label: '市辖区',
      latitude: '34'
    }, {
      longitude: '110',
      label: '商州区',
      latitude: '34'
    }, {
      longitude: '110',
      label: '洛南县',
      latitude: '34'
    }, {
      longitude: '110',
      label: '丹凤县',
      latitude: '34'
    }, {
      longitude: '110',
      label: '商南县',
      latitude: '34'
    }, {
      longitude: '110',
      label: '山阳县',
      latitude: '34'
    }, {
      longitude: '110',
      label: '镇安县',
      latitude: '34'
    }, {
      longitude: '110',
      label: '柞水县',
      latitude: '34'
    }],
    label: '商洛市'
  }],
  label: '陕西省'
}, {
  children: [{
    children: [{
      longitude: '104',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '104',
      label: '城关区',
      latitude: '36'
    }, {
      longitude: '104',
      label: '七里河区',
      latitude: '36'
    }, {
      longitude: '104',
      label: '西固区',
      latitude: '36'
    }, {
      longitude: '104',
      label: '安宁区',
      latitude: '36'
    }, {
      longitude: '104',
      label: '红古区',
      latitude: '36'
    }, {
      longitude: '104',
      label: '永登县',
      latitude: '36'
    }, {
      longitude: '104',
      label: '皋兰县',
      latitude: '36'
    }, {
      longitude: '104',
      label: '榆中县',
      latitude: '36'
    }],
    label: '兰州市'
  }, {
    children: [{
      longitude: '98',
      label: '市辖区',
      latitude: '39'
    }],
    label: '嘉峪关市'
  }, {
    children: [{
      longitude: '102',
      label: '市辖区',
      latitude: '39'
    }, {
      longitude: '102',
      label: '金川区',
      latitude: '39'
    }, {
      longitude: '102',
      label: '永昌县',
      latitude: '39'
    }],
    label: '金昌市'
  }, {
    children: [{
      longitude: '104',
      label: '市辖区',
      latitude: '37'
    }, {
      longitude: '104',
      label: '白银区',
      latitude: '37'
    }, {
      longitude: '104',
      label: '平川区',
      latitude: '37'
    }, {
      longitude: '104',
      label: '靖远县',
      latitude: '37'
    }, {
      longitude: '104',
      label: '会宁县',
      latitude: '37'
    }, {
      longitude: '104',
      label: '景泰县',
      latitude: '37'
    }],
    label: '白银市'
  }, {
    children: [{
      longitude: '106',
      label: '市辖区',
      latitude: '35'
    }, {
      longitude: '106',
      label: '秦州区',
      latitude: '35'
    }, {
      longitude: '106',
      label: '麦积区',
      latitude: '35'
    }, {
      longitude: '106',
      label: '清水县',
      latitude: '35'
    }, {
      longitude: '106',
      label: '秦安县',
      latitude: '35'
    }, {
      longitude: '106',
      label: '甘谷县',
      latitude: '35'
    }, {
      longitude: '106',
      label: '武山县',
      latitude: '35'
    }, {
      longitude: '106',
      label: '张家川回族自治县',
      latitude: '35'
    }],
    label: '天水市'
  }, {
    children: [{
      longitude: '103',
      label: '市辖区',
      latitude: '38'
    }, {
      longitude: '103',
      label: '凉州区',
      latitude: '38'
    }, {
      longitude: '103',
      label: '民勤县',
      latitude: '38'
    }, {
      longitude: '103',
      label: '古浪县',
      latitude: '38'
    }, {
      longitude: '103',
      label: '天祝藏族自治县',
      latitude: '38'
    }],
    label: '武威市'
  }, {
    children: [{
      longitude: '100',
      label: '市辖区',
      latitude: '39'
    }, {
      longitude: '100',
      label: '甘州区',
      latitude: '39'
    }, {
      longitude: '100',
      label: '肃南裕固族自治县',
      latitude: '39'
    }, {
      longitude: '100',
      label: '民乐县',
      latitude: '39'
    }, {
      longitude: '100',
      label: '临泽县',
      latitude: '39'
    }, {
      longitude: '100',
      label: '高台县',
      latitude: '39'
    }, {
      longitude: '100',
      label: '山丹县',
      latitude: '39'
    }],
    label: '张掖市'
  }, {
    children: [{
      longitude: '107',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '107',
      label: '崆峒区',
      latitude: '36'
    }, {
      longitude: '107',
      label: '泾川县',
      latitude: '36'
    }, {
      longitude: '107',
      label: '灵台县',
      latitude: '36'
    }, {
      longitude: '107',
      label: '崇信县',
      latitude: '36'
    }, {
      longitude: '107',
      label: '华亭县',
      latitude: '36'
    }, {
      longitude: '107',
      label: '庄浪县',
      latitude: '36'
    }, {
      longitude: '107',
      label: '静宁县',
      latitude: '36'
    }],
    label: '平凉市'
  }, {
    children: [{
      longitude: '99',
      label: '市辖区',
      latitude: '40'
    }, {
      longitude: '99',
      label: '肃州区',
      latitude: '40'
    }, {
      longitude: '99',
      label: '金塔县',
      latitude: '40'
    }, {
      longitude: '99',
      label: '瓜州县',
      latitude: '40'
    }, {
      longitude: '99',
      label: '肃北蒙古族自治县',
      latitude: '40'
    }, {
      longitude: '99',
      label: '阿克塞哈萨克族自治县',
      latitude: '40'
    }, {
      longitude: '99',
      label: '玉门市',
      latitude: '40'
    }, {
      longitude: '99',
      label: '敦煌市',
      latitude: '40'
    }],
    label: '酒泉市'
  }, {
    children: [{
      longitude: '108',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '108',
      label: '西峰区',
      latitude: '36'
    }, {
      longitude: '108',
      label: '庆城县',
      latitude: '36'
    }, {
      longitude: '108',
      label: '环县',
      latitude: '36'
    }, {
      longitude: '108',
      label: '华池县',
      latitude: '36'
    }, {
      longitude: '108',
      label: '合水县',
      latitude: '36'
    }, {
      longitude: '108',
      label: '正宁县',
      latitude: '36'
    }, {
      longitude: '108',
      label: '宁县',
      latitude: '36'
    }, {
      longitude: '108',
      label: '镇原县',
      latitude: '36'
    }],
    label: '庆阳市'
  }, {
    children: [{
      longitude: '105',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '105',
      label: '安定区',
      latitude: '36'
    }, {
      longitude: '105',
      label: '通渭县',
      latitude: '36'
    }, {
      longitude: '105',
      label: '陇西县',
      latitude: '36'
    }, {
      longitude: '105',
      label: '渭源县',
      latitude: '36'
    }, {
      longitude: '105',
      label: '临洮县',
      latitude: '36'
    }, {
      longitude: '105',
      label: '漳县',
      latitude: '36'
    }, {
      longitude: '105',
      label: '岷县',
      latitude: '36'
    }],
    label: '定西市'
  }, {
    children: [{
      longitude: '105',
      label: '市辖区',
      latitude: '33'
    }, {
      longitude: '105',
      label: '武都区',
      latitude: '33'
    }, {
      longitude: '105',
      label: '成县',
      latitude: '33'
    }, {
      longitude: '105',
      label: '文县',
      latitude: '33'
    }, {
      longitude: '105',
      label: '宕昌县',
      latitude: '33'
    }, {
      longitude: '105',
      label: '康县',
      latitude: '33'
    }, {
      longitude: '105',
      label: '西和县',
      latitude: '33'
    }, {
      longitude: '105',
      label: '礼县',
      latitude: '33'
    }, {
      longitude: '105',
      label: '徽县',
      latitude: '33'
    }, {
      longitude: '105',
      label: '两当县',
      latitude: '33'
    }],
    label: '陇南市'
  }, {
    children: [{
      longitude: '103',
      label: '临夏市',
      latitude: '36'
    }, {
      longitude: '103',
      label: '临夏县',
      latitude: '36'
    }, {
      longitude: '103',
      label: '康乐县',
      latitude: '36'
    }, {
      longitude: '103',
      label: '永靖县',
      latitude: '36'
    }, {
      longitude: '103',
      label: '广河县',
      latitude: '36'
    }, {
      longitude: '103',
      label: '和政县',
      latitude: '36'
    }, {
      longitude: '103',
      label: '东乡族自治县',
      latitude: '36'
    }, {
      longitude: '103',
      label: '积石山保安族东乡族撒拉族自治县',
      latitude: '36'
    }],
    label: '临夏回族自治州'
  }, {
    children: [{
      longitude: '103',
      label: '合作市',
      latitude: '35'
    }, {
      longitude: '103',
      label: '临潭县',
      latitude: '35'
    }, {
      longitude: '103',
      label: '卓尼县',
      latitude: '35'
    }, {
      longitude: '103',
      label: '舟曲县',
      latitude: '35'
    }, {
      longitude: '103',
      label: '迭部县',
      latitude: '35'
    }, {
      longitude: '103',
      label: '玛曲县',
      latitude: '35'
    }, {
      longitude: '103',
      label: '碌曲县',
      latitude: '35'
    }, {
      longitude: '103',
      label: '夏河县',
      latitude: '35'
    }],
    label: '甘南藏族自治州'
  }],
  label: '甘肃省'
}, {
  children: [{
    children: [{
      longitude: '102',
      label: '市辖区',
      latitude: '37'
    }, {
      longitude: '102',
      label: '城东区',
      latitude: '37'
    }, {
      longitude: '102',
      label: '城中区',
      latitude: '37'
    }, {
      longitude: '102',
      label: '城西区',
      latitude: '37'
    }, {
      longitude: '102',
      label: '城北区',
      latitude: '37'
    }, {
      longitude: '102',
      label: '大通回族土族自治县',
      latitude: '37'
    }, {
      longitude: '102',
      label: '湟中县',
      latitude: '37'
    }, {
      longitude: '102',
      label: '湟源县',
      latitude: '37'
    }],
    label: '西宁市'
  }, {
    children: [{
      longitude: '102',
      label: '乐都区',
      latitude: '36'
    }, {
      longitude: '102',
      label: '平安区',
      latitude: '36'
    }, {
      longitude: '102',
      label: '民和回族土族自治县',
      latitude: '36'
    }, {
      longitude: '102',
      label: '互助土族自治县',
      latitude: '36'
    }, {
      longitude: '102',
      label: '化隆回族自治县',
      latitude: '36'
    }, {
      longitude: '102',
      label: '循化撒拉族自治县',
      latitude: '36'
    }],
    label: '海东市'
  }, {
    children: [{
      longitude: '101',
      label: '门源回族自治县',
      latitude: '37'
    }, {
      longitude: '101',
      label: '祁连县',
      latitude: '37'
    }, {
      longitude: '101',
      label: '海晏县',
      latitude: '37'
    }, {
      longitude: '101',
      label: '刚察县',
      latitude: '37'
    }],
    label: '海北藏族自治州'
  }, {
    children: [{
      longitude: '102',
      label: '同仁县',
      latitude: '36'
    }, {
      longitude: '102',
      label: '尖扎县',
      latitude: '36'
    }, {
      longitude: '102',
      label: '泽库县',
      latitude: '36'
    }, {
      longitude: '102',
      label: '河南蒙古族自治县',
      latitude: '36'
    }],
    label: '黄南藏族自治州'
  }, {
    children: [{
      longitude: '101',
      label: '共和县',
      latitude: '36'
    }, {
      longitude: '101',
      label: '同德县',
      latitude: '36'
    }, {
      longitude: '101',
      label: '贵德县',
      latitude: '36'
    }, {
      longitude: '101',
      label: '兴海县',
      latitude: '36'
    }, {
      longitude: '101',
      label: '贵南县',
      latitude: '36'
    }],
    label: '海南藏族自治州'
  }, {
    children: [{
      longitude: '100',
      label: '玛沁县',
      latitude: '34'
    }, {
      longitude: '100',
      label: '班玛县',
      latitude: '34'
    }, {
      longitude: '100',
      label: '甘德县',
      latitude: '34'
    }, {
      longitude: '100',
      label: '达日县',
      latitude: '34'
    }, {
      longitude: '100',
      label: '久治县',
      latitude: '34'
    }, {
      longitude: '100',
      label: '玛多县',
      latitude: '34'
    }],
    label: '果洛藏族自治州'
  }, {
    children: [{
      longitude: '97',
      label: '玉树市',
      latitude: '33'
    }, {
      longitude: '97',
      label: '杂多县',
      latitude: '33'
    }, {
      longitude: '97',
      label: '称多县',
      latitude: '33'
    }, {
      longitude: '97',
      label: '治多县',
      latitude: '33'
    }, {
      longitude: '97',
      label: '囊谦县',
      latitude: '33'
    }, {
      longitude: '97',
      label: '曲麻莱县',
      latitude: '33'
    }],
    label: '玉树藏族自治州'
  }, {
    children: [{
      longitude: '97',
      label: '格尔木市',
      latitude: '37'
    }, {
      longitude: '97',
      label: '德令哈市',
      latitude: '37'
    }, {
      longitude: '97',
      label: '乌兰县',
      latitude: '37'
    }, {
      longitude: '97',
      label: '都兰县',
      latitude: '37'
    }, {
      longitude: '97',
      label: '天峻县',
      latitude: '37'
    }],
    label: '海西蒙古族藏族自治州'
  }],
  label: '青海省'
}, {
  children: [{
    children: [{
      longitude: '106',
      label: '市辖区',
      latitude: '38'
    }, {
      longitude: '106',
      label: '兴庆区',
      latitude: '38'
    }, {
      longitude: '106',
      label: '西夏区',
      latitude: '38'
    }, {
      longitude: '106',
      label: '金凤区',
      latitude: '38'
    }, {
      longitude: '106',
      label: '永宁县',
      latitude: '38'
    }, {
      longitude: '106',
      label: '贺兰县',
      latitude: '38'
    }, {
      longitude: '106',
      label: '灵武市',
      latitude: '38'
    }],
    label: '银川市'
  }, {
    children: [{
      longitude: '106',
      label: '市辖区',
      latitude: '39'
    }, {
      longitude: '106',
      label: '大武口区',
      latitude: '39'
    }, {
      longitude: '106',
      label: '惠农区',
      latitude: '39'
    }, {
      longitude: '106',
      label: '平罗县',
      latitude: '39'
    }],
    label: '石嘴山市'
  }, {
    children: [{
      longitude: '106',
      label: '市辖区',
      latitude: '38'
    }, {
      longitude: '106',
      label: '利通区',
      latitude: '38'
    }, {
      longitude: '106',
      label: '红寺堡区',
      latitude: '38'
    }, {
      longitude: '106',
      label: '盐池县',
      latitude: '38'
    }, {
      longitude: '106',
      label: '同心县',
      latitude: '38'
    }, {
      longitude: '106',
      label: '青铜峡市',
      latitude: '38'
    }],
    label: '吴忠市'
  }, {
    children: [{
      longitude: '106',
      label: '市辖区',
      latitude: '36'
    }, {
      longitude: '106',
      label: '原州区',
      latitude: '36'
    }, {
      longitude: '106',
      label: '西吉县',
      latitude: '36'
    }, {
      longitude: '106',
      label: '隆德县',
      latitude: '36'
    }, {
      longitude: '106',
      label: '泾源县',
      latitude: '36'
    }, {
      longitude: '106',
      label: '彭阳县',
      latitude: '36'
    }],
    label: '固原市'
  }, {
    children: [{
      longitude: '105',
      label: '市辖区',
      latitude: '38'
    }, {
      longitude: '105',
      label: '沙坡头区',
      latitude: '38'
    }, {
      longitude: '105',
      label: '中宁县',
      latitude: '38'
    }, {
      longitude: '105',
      label: '海原县',
      latitude: '38'
    }],
    label: '中卫市'
  }],
  label: '宁夏回族自治区'
}, {
  children: [{
    children: [{
      longitude: '88',
      label: '市辖区',
      latitude: '44'
    }, {
      longitude: '88',
      label: '天山区',
      latitude: '44'
    }, {
      longitude: '88',
      label: '沙依巴克区',
      latitude: '44'
    }, {
      longitude: '88',
      label: '新市区',
      latitude: '44'
    }, {
      longitude: '88',
      label: '水磨沟区',
      latitude: '44'
    }, {
      longitude: '88',
      label: '头屯河区',
      latitude: '44'
    }, {
      longitude: '88',
      label: '达坂城区',
      latitude: '44'
    }, {
      longitude: '88',
      label: '米东区',
      latitude: '44'
    }, {
      longitude: '88',
      label: '乌鲁木齐县',
      latitude: '44'
    }],
    label: '乌鲁木齐市'
  }, {
    children: [{
      longitude: '85',
      label: '市辖区',
      latitude: '46'
    }, {
      longitude: '85',
      label: '独山子区',
      latitude: '46'
    }, {
      longitude: '85',
      label: '克拉玛依区',
      latitude: '46'
    }, {
      longitude: '85',
      label: '白碱滩区',
      latitude: '46'
    }, {
      longitude: '85',
      label: '乌尔禾区',
      latitude: '46'
    }],
    label: '克拉玛依市'
  }, {
    children: [{
      longitude: '89',
      label: '高昌区',
      latitude: '42'
    }, {
      longitude: '89',
      label: '鄯善县',
      latitude: '42'
    }, {
      longitude: '89',
      label: '托克逊县',
      latitude: '42'
    }],
    label: '吐鲁番市'
  }, {
    children: [{
      longitude: '93',
      label: '伊州区',
      latitude: '42'
    }, {
      longitude: '93',
      label: '巴里坤哈萨克自治县',
      latitude: '42'
    }, {
      longitude: '93',
      label: '伊吾县',
      latitude: '42'
    }],
    label: '哈密市'
  }, {
    children: [{
      longitude: '87',
      label: '昌吉市',
      latitude: '44'
    }, {
      longitude: '87',
      label: '阜康市',
      latitude: '44'
    }, {
      longitude: '87',
      label: '呼图壁县',
      latitude: '44'
    }, {
      longitude: '87',
      label: '玛纳斯县',
      latitude: '44'
    }, {
      longitude: '87',
      label: '奇台县',
      latitude: '44'
    }, {
      longitude: '87',
      label: '吉木萨尔县',
      latitude: '44'
    }, {
      longitude: '87',
      label: '木垒哈萨克自治县',
      latitude: '44'
    }],
    label: '昌吉回族自治州'
  }, {
    children: [{
      longitude: '82',
      label: '博乐市',
      latitude: '45'
    }, {
      longitude: '82',
      label: '阿拉山口市',
      latitude: '45'
    }, {
      longitude: '82',
      label: '精河县',
      latitude: '45'
    }, {
      longitude: '82',
      label: '温泉县',
      latitude: '45'
    }],
    label: '博尔塔拉蒙古自治州'
  }, {
    children: [{
      longitude: '86',
      label: '库尔勒市',
      latitude: '42'
    }, {
      longitude: '86',
      label: '轮台县',
      latitude: '42'
    }, {
      longitude: '86',
      label: '尉犁县',
      latitude: '42'
    }, {
      longitude: '86',
      label: '若羌县',
      latitude: '42'
    }, {
      longitude: '86',
      label: '且末县',
      latitude: '42'
    }, {
      longitude: '86',
      label: '焉耆回族自治县',
      latitude: '42'
    }, {
      longitude: '86',
      label: '和静县',
      latitude: '42'
    }, {
      longitude: '86',
      label: '和硕县',
      latitude: '42'
    }, {
      longitude: '86',
      label: '博湖县',
      latitude: '42'
    }],
    label: '巴音郭楞蒙古自治州'
  }, {
    children: [{
      longitude: '80',
      label: '阿克苏市',
      latitude: '41'
    }, {
      longitude: '80',
      label: '温宿县',
      latitude: '41'
    }, {
      longitude: '80',
      label: '库车县',
      latitude: '41'
    }, {
      longitude: '80',
      label: '沙雅县',
      latitude: '41'
    }, {
      longitude: '80',
      label: '新和县',
      latitude: '41'
    }, {
      longitude: '80',
      label: '拜城县',
      latitude: '41'
    }, {
      longitude: '80',
      label: '乌什县',
      latitude: '41'
    }, {
      longitude: '80',
      label: '阿瓦提县',
      latitude: '41'
    }, {
      longitude: '80',
      label: '柯坪县',
      latitude: '41'
    }],
    label: '阿克苏地区'
  }, {
    children: [{
      longitude: '76',
      label: '阿图什市',
      latitude: '40'
    }, {
      longitude: '76',
      label: '阿克陶县',
      latitude: '40'
    }, {
      longitude: '76',
      label: '阿合奇县',
      latitude: '40'
    }, {
      longitude: '76',
      label: '乌恰县',
      latitude: '40'
    }],
    label: '克孜勒苏柯尔克孜自治州'
  }, {
    children: [{
      longitude: '76',
      label: '喀什市',
      latitude: '39'
    }, {
      longitude: '76',
      label: '疏附县',
      latitude: '39'
    }, {
      longitude: '76',
      label: '疏勒县',
      latitude: '39'
    }, {
      longitude: '76',
      label: '英吉沙县',
      latitude: '39'
    }, {
      longitude: '76',
      label: '泽普县',
      latitude: '39'
    }, {
      longitude: '76',
      label: '莎车县',
      latitude: '39'
    }, {
      longitude: '76',
      label: '叶城县',
      latitude: '39'
    }, {
      longitude: '76',
      label: '麦盖提县',
      latitude: '39'
    }, {
      longitude: '76',
      label: '岳普湖县',
      latitude: '39'
    }, {
      longitude: '76',
      label: '伽师县',
      latitude: '39'
    }, {
      longitude: '76',
      label: '巴楚县',
      latitude: '39'
    }, {
      longitude: '76',
      label: '塔什库尔干塔吉克自治县',
      latitude: '39'
    }],
    label: '喀什地区'
  }, {
    children: [{
      longitude: '80',
      label: '和田市',
      latitude: '37'
    }, {
      longitude: '80',
      label: '和田县',
      latitude: '37'
    }, {
      longitude: '80',
      label: '墨玉县',
      latitude: '37'
    }, {
      longitude: '80',
      label: '皮山县',
      latitude: '37'
    }, {
      longitude: '80',
      label: '洛浦县',
      latitude: '37'
    }, {
      longitude: '80',
      label: '策勒县',
      latitude: '37'
    }, {
      longitude: '80',
      label: '于田县',
      latitude: '37'
    }, {
      longitude: '80',
      label: '民丰县',
      latitude: '37'
    }],
    label: '和田地区'
  }, {
    children: [{
      longitude: '81',
      label: '伊宁市',
      latitude: '44'
    }, {
      longitude: '81',
      label: '奎屯市',
      latitude: '44'
    }, {
      longitude: '81',
      label: '霍尔果斯市',
      latitude: '44'
    }, {
      longitude: '81',
      label: '伊宁县',
      latitude: '44'
    }, {
      longitude: '81',
      label: '察布查尔锡伯自治县',
      latitude: '44'
    }, {
      longitude: '81',
      label: '霍城县',
      latitude: '44'
    }, {
      longitude: '81',
      label: '巩留县',
      latitude: '44'
    }, {
      longitude: '81',
      label: '新源县',
      latitude: '44'
    }, {
      longitude: '81',
      label: '昭苏县',
      latitude: '44'
    }, {
      longitude: '81',
      label: '特克斯县',
      latitude: '44'
    }, {
      longitude: '81',
      label: '尼勒克县',
      latitude: '44'
    }],
    label: '伊犁哈萨克自治州'
  }, {
    children: [{
      longitude: '83',
      label: '塔城市',
      latitude: '47'
    }, {
      longitude: '83',
      label: '乌苏市',
      latitude: '47'
    }, {
      longitude: '83',
      label: '额敏县',
      latitude: '47'
    }, {
      longitude: '83',
      label: '沙湾县',
      latitude: '47'
    }, {
      longitude: '83',
      label: '托里县',
      latitude: '47'
    }, {
      longitude: '83',
      label: '裕民县',
      latitude: '47'
    }, {
      longitude: '83',
      label: '和布克赛尔蒙古自治县',
      latitude: '47'
    }],
    label: '塔城地区'
  }, {
    children: [{
      longitude: '88',
      label: '阿勒泰市',
      latitude: '48'
    }, {
      longitude: '88',
      label: '布尔津县',
      latitude: '48'
    }, {
      longitude: '88',
      label: '富蕴县',
      latitude: '48'
    }, {
      longitude: '88',
      label: '福海县',
      latitude: '48'
    }, {
      longitude: '88',
      label: '哈巴河县',
      latitude: '48'
    }, {
      longitude: '88',
      label: '青河县',
      latitude: '48'
    }, {
      longitude: '88',
      label: '吉木乃县',
      latitude: '48'
    }],
    label: '阿勒泰地区'
  }, {
    children: [{
      longitude: '80',
      label: '石河子市',
      latitude: '40'
    }, {
      longitude: '80',
      label: '阿拉尔市',
      latitude: '40'
    }, {
      longitude: '80',
      label: '图木舒克市',
      latitude: '40'
    }, {
      longitude: '80',
      label: '五家渠市',
      latitude: '40'
    }, {
      longitude: '80',
      label: '铁门关市',
      latitude: '40'
    }],
    label: '自治区直辖县级行政区划'
  }],
  label: '新疆维吾尔自治区'
}, {
  children: [{
    children: [{
      longitude: '122',
      label: '台北',
      latitude: '25'
    }],
    label: '台北'
  }, {
    children: [{
      longitude: '120',
      label: '高雄',
      latitude: '23'
    }],
    label: '高雄'
  }, {
    children: [{
      longitude: '122',
      label: '基隆',
      latitude: '25'
    }],
    label: '基隆'
  }, {
    children: [{
      longitude: '121',
      label: '台中',
      latitude: '24'
    }],
    label: '台中'
  }, {
    children: [{
      longitude: '120',
      label: '台南',
      latitude: '23'
    }],
    label: '台南'
  }, {
    children: [{
      longitude: '121',
      label: '新竹',
      latitude: '25'
    }],
    label: '新竹'
  }, {
    children: [{
      longitude: '121',
      label: '嘉义',
      latitude: '25'
    }],
    label: '嘉义'
  }, {
    children: [{
      longitude: '122',
      label: '宜兰',
      latitude: '25'
    }],
    label: '宜兰'
  }, {
    children: [{
      longitude: '121',
      label: '桃园',
      latitude: '25'
    }],
    label: '桃园'
  }, {
    children: [{
      longitude: '121',
      label: '苗栗',
      latitude: '25'
    }],
    label: '苗栗'
  }, {
    children: [{
      longitude: '121',
      label: '彰化',
      latitude: '25'
    }],
    label: '彰化'
  }, {
    children: [{
      longitude: '121',
      label: '南投',
      latitude: '25'
    }],
    label: '南投'
  }, {
    children: [{
      longitude: '121',
      label: '云林',
      latitude: '25'
    }],
    label: '云林'
  }, {
    children: [{
      longitude: '121',
      label: '屏东',
      latitude: '25'
    }],
    label: '屏东'
  }, {
    children: [{
      longitude: '121',
      label: '台东',
      latitude: '25'
    }],
    label: '台东'
  }, {
    children: [{
      longitude: '121',
      label: '花莲',
      latitude: '25'
    }],
    label: '花莲'
  }, {
    children: [{
      longitude: '121',
      label: '澎湖',
      latitude: '25'
    }],
    label: '澎湖'
  }],
  label: '台湾'
}, {
  children: [{
    children: [{
      longitude: '114',
      label: '香港岛',
      latitude: '22'
    }],
    label: '香港岛'
  }, {
    children: [{
      longitude: '114',
      label: '九龙',
      latitude: '22'
    }],
    label: '九龙'
  }, {
    children: [{
      longitude: '114',
      label: '新界',
      latitude: '22'
    }],
    label: '新界'
  }],
  label: '香港'
}, {
  children: [{
    children: [{
      longitude: '114',
      label: '澳门半岛',
      latitude: '22'
    }],
    label: '澳门半岛'
  }, {
    children: [{
      longitude: '114',
      label: '氹仔岛',
      latitude: '22'
    }],
    label: '氹仔岛'
  }, {
    children: [{
      longitude: '114',
      label: '路环岛',
      latitude: '22'
    }],
    label: '路环岛'
  }, {
    children: [{
      longitude: '114',
      label: '路氹城',
      latitude: '22'
    }],
    label: '路氹城'
  }],
  label: '澳门'
}];

/* eslint-disable */
var importCityCodeData = [{
  enname: 'zi dong ding wei',
  id: '00',
  name: '自动定位',
  children: [{
    enname: 'zi dong ding wei',
    id: '0001',
    name: '自动定位',
    children: [{
      enname: 'zi dong ding wei',
      id: '101000100',
      name: '自动定位'
    }]
  }]
}, {
  enname: 'bei jing',
  id: '01',
  name: '北京',
  children: [{
    enname: 'bei jing',
    id: '0101',
    name: '北京',
    children: [{ enname: 'bei jing', id: '101010100', name: '北京' }, { enname: 'hai dian', id: '101010200', name: '海淀' }, { enname: 'chao yang', id: '101010300', name: '朝阳' }, { enname: 'shun yi', id: '101010400', name: '顺义' }, { enname: 'huai rou', id: '101010500', name: '怀柔' }, { enname: 'tong zhou', id: '101010600', name: '通州' }, { enname: 'chang ping', id: '101010700', name: '昌平' }, { enname: 'yan qing', id: '101010800', name: '延庆' }, { enname: 'feng tai', id: '101010900', name: '丰台' }, { enname: 'shi jing shan', id: '101011000', name: '石景山' }, { enname: 'da xing', id: '101011100', name: '大兴' }, { enname: 'fang shan', id: '101011200', name: '房山' }, { enname: 'mi yun', id: '101011300', name: '密云' }, { enname: 'men tou gou', id: '101011400', name: '门头沟' }, { enname: 'ping gu', id: '101011500', name: '平谷' }]
  }]
}, {
  enname: 'shang hai',
  id: '02',
  name: '上海',
  children: [{
    enname: 'shang hai',
    id: '0201',
    name: '上海',
    children: [{ enname: 'shang hai', id: '101020100', name: '上海' }, { enname: 'min xing', id: '101020200', name: '闵行' }, { enname: 'bao shan', id: '101020300', name: '宝山' }, { enname: 'jia ding', id: '101020500', name: '嘉定' }, { enname: 'nan hui', id: '101020600', name: '南汇' }, { enname: 'jin shan', id: '101020700', name: '金山' }, { enname: 'qing pu', id: '101020800', name: '青浦' }, { enname: 'song jiang', id: '101020900', name: '松江' }, { enname: 'feng xian', id: '101021000', name: '奉贤' }, { enname: 'chong ming', id: '101021100', name: '崇明' }, { enname: 'xu jia hui', id: '101021200', name: '徐家汇' }, { enname: 'pu dong', id: '101021300', name: '浦东' }]
  }]
}, {
  enname: 'tian jin',
  id: '03',
  name: '天津',
  children: [{
    enname: 'tian jin',
    id: '0301',
    name: '天津',
    children: [{ enname: 'tian jin', id: '101030100', name: '天津' }, { enname: 'wu qing', id: '101030200', name: '武清' }, { enname: 'bao chi', id: '101030300', name: '宝坻' }, { enname: 'dong li', id: '101030400', name: '东丽' }, { enname: 'xi qing', id: '101030500', name: '西青' }, { enname: 'bei chen', id: '101030600', name: '北辰' }, { enname: 'ning he', id: '101030700', name: '宁河' }, { enname: 'han gu', id: '101030800', name: '汉沽' }, { enname: 'jing hai', id: '101030900', name: '静海' }, { enname: 'jin nan', id: '101031000', name: '津南' }, { enname: 'tang gu', id: '101031100', name: '塘沽' }, { enname: 'da gang', id: '101031200', name: '大港' }, { enname: 'ji xian', id: '101031400', name: '蓟县' }]
  }]
}, {
  enname: 'chong qing',
  id: '04',
  name: '重庆',
  children: [{
    enname: 'chong qing',
    id: '0401',
    name: '重庆',
    children: [{ enname: 'chong qing', id: '101040100', name: '重庆' }, { enname: 'yong chuan', id: '101040200', name: '永川' }, { enname: 'he chuan', id: '101040300', name: '合川' }, { enname: 'nan chuan', id: '101040400', name: '南川' }, { enname: 'jiang jin', id: '101040500', name: '江津' }, { enname: 'wan sheng', id: '101040600', name: '万盛' }, { enname: 'yu bei', id: '101040700', name: '渝北' }, { enname: 'bei bei', id: '101040800', name: '北碚' }, { enname: 'ba nan', id: '101040900', name: '巴南' }, { enname: 'chang shou', id: '101041000', name: '长寿' }, { enname: 'qian jiang', id: '101041100', name: '黔江' }, { enname: 'wan zhou', id: '101041300', name: '万州' }, { enname: 'fu ling', id: '101041400', name: '涪陵' }, { enname: 'kai xian', id: '101041500', name: '开县' }, { enname: 'kai zhou qu', id: '101041500', name: '开州区' }, { enname: 'cheng kou', id: '101041600', name: '城口' }, { enname: 'yun yang', id: '101041700', name: '云阳' }, { enname: 'wu xi', id: '101041800', name: '巫溪' }, { enname: 'feng jie', id: '101041900', name: '奉节' }, { enname: 'wu shan', id: '101042000', name: '巫山' }, { enname: 'tong nan', id: '101042100', name: '潼南' }, { enname: 'dian jiang', id: '101042200', name: '垫江' }, { enname: 'liang ping', id: '101042300', name: '梁平' }, { enname: 'zhong xian', id: '101042400', name: '忠县' }, { enname: 'shi zhu', id: '101042500', name: '石柱' }, { enname: 'da zu', id: '101042600', name: '大足' }, { enname: 'rong chang', id: '101042700', name: '荣昌' }, { enname: 'tong liang', id: '101042800', name: '铜梁' }, { enname: 'bi shan', id: '101042900', name: '璧山' }, { enname: 'feng dou', id: '101043000', name: '丰都' }, { enname: 'wu long', id: '101043100', name: '武隆' }, { enname: 'peng shui', id: '101043200', name: '彭水' }, { enname: 'qi jiang', id: '101043300', name: '綦江' }, { enname: 'you yang', id: '101043400', name: '酉阳' }, { enname: 'xiu shan', id: '101043600', name: '秀山' }]
  }]
}, {
  enname: 'hei long jiang',
  id: '05',
  name: '黑龙江',
  children: [{
    enname: 'ha er bin',
    id: '0501',
    name: '哈尔滨',
    children: [{ enname: 'ha er bin', id: '101050101', name: '哈尔滨' }, { enname: 'shuang cheng', id: '101050102', name: '双城' }, { enname: 'hu lan', id: '101050103', name: '呼兰' }, { enname: 'a cheng', id: '101050104', name: '阿城' }, { enname: 'bin xian', id: '101050105', name: '宾县' }, { enname: 'yi lan', id: '101050106', name: '依兰' }, { enname: 'ba yan', id: '101050107', name: '巴彦' }, { enname: 'tong he', id: '101050108', name: '通河' }, { enname: 'fang zheng', id: '101050109', name: '方正' }, { enname: 'yan shou', id: '101050110', name: '延寿' }, { enname: 'shang zhi', id: '101050111', name: '尚志' }, { enname: 'wu chang', id: '101050112', name: '五常' }, { enname: 'mu lan', id: '101050113', name: '木兰' }]
  }, {
    enname: 'qi qi ha er',
    id: '0502',
    name: '齐齐哈尔',
    children: [{ enname: 'qi qi ha er', id: '101050201', name: '齐齐哈尔' }, { enname: 'ne he', id: '101050202', name: '讷河' }, { enname: 'long jiang', id: '101050203', name: '龙江' }, { enname: 'gan nan', id: '101050204', name: '甘南' }, { enname: 'fu yu', id: '101050205', name: '富裕' }, { enname: 'yi an', id: '101050206', name: '依安' }, { enname: 'bai quan', id: '101050207', name: '拜泉' }, { enname: 'ke shan', id: '101050208', name: '克山' }, { enname: 'ke dong', id: '101050209', name: '克东' }, { enname: 'tai lai', id: '101050210', name: '泰来' }]
  }, {
    enname: 'mu dan jiang',
    id: '0503',
    name: '牡丹江',
    children: [{ enname: 'mu dan jiang', id: '101050301', name: '牡丹江' }, { enname: 'hai lin', id: '101050302', name: '海林' }, { enname: 'mu leng', id: '101050303', name: '穆棱' }, { enname: 'lin kou', id: '101050304', name: '林口' }, { enname: 'sui fen he', id: '101050305', name: '绥芬河' }, { enname: 'ning an', id: '101050306', name: '宁安' }, { enname: 'dong ning', id: '101050307', name: '东宁' }]
  }, {
    enname: 'jia mu si',
    id: '0504',
    name: '佳木斯',
    children: [{ enname: 'jia mu si', id: '101050401', name: '佳木斯' }, { enname: 'tang yuan', id: '101050402', name: '汤原' }, { enname: 'fu yuan', id: '101050403', name: '抚远' }, { enname: 'hua chuan', id: '101050404', name: '桦川' }, { enname: 'hua nan', id: '101050405', name: '桦南' }, { enname: 'tong jiang', id: '101050406', name: '同江' }, { enname: 'fu jin', id: '101050407', name: '富锦' }]
  }, {
    enname: 'sui hua',
    id: '0505',
    name: '绥化',
    children: [{ enname: 'sui hua', id: '101050501', name: '绥化' }, { enname: 'zhao dong', id: '101050502', name: '肇东' }, { enname: 'an da', id: '101050503', name: '安达' }, { enname: 'hai lun', id: '101050504', name: '海伦' }, { enname: 'ming shui', id: '101050505', name: '明水' }, { enname: 'wang kui', id: '101050506', name: '望奎' }, { enname: 'lan xi', id: '101050507', name: '兰西' }, { enname: 'qing gang', id: '101050508', name: '青冈' }, { enname: 'qing an', id: '101050509', name: '庆安' }, { enname: 'sui leng', id: '101050510', name: '绥棱' }]
  }, {
    enname: 'hei he',
    id: '0506',
    name: '黑河',
    children: [{ enname: 'hei he', id: '101050601', name: '黑河' }, { enname: 'nen jiang', id: '101050602', name: '嫩江' }, { enname: 'sun wu', id: '101050603', name: '孙吴' }, { enname: 'xun ke', id: '101050604', name: '逊克' }, { enname: 'wu da lian chi', id: '101050605', name: '五大连池' }, { enname: 'bei an', id: '101050606', name: '北安' }]
  }, {
    enname: 'da xing an ling',
    id: '0507',
    name: '大兴安岭',
    children: [{
      enname: 'da xing an ling',
      id: '101050701',
      name: '大兴安岭'
    }, { enname: 'ta he', id: '101050702', name: '塔河' }, { enname: 'mo he', id: '101050703', name: '漠河' }, { enname: 'hu ma', id: '101050704', name: '呼玛' }, { enname: 'hu zhong', id: '101050705', name: '呼中' }, { enname: 'xin lin', id: '101050706', name: '新林' }, { enname: 'jia ge da qi', id: '101050708', name: '加格达奇' }]
  }, {
    enname: 'yi chun',
    id: '0508',
    name: '伊春',
    children: [{ enname: 'yi chun', id: '101050801', name: '伊春' }, { enname: 'wu yi ling', id: '101050802', name: '乌伊岭' }, { enname: 'wu ying', id: '101050803', name: '五营' }, { enname: 'tie li', id: '101050804', name: '铁力' }, { enname: 'jia yin', id: '101050805', name: '嘉荫' }]
  }, {
    enname: 'da qing',
    id: '0509',
    name: '大庆',
    children: [{ enname: 'da qing', id: '101050901', name: '大庆' }, { enname: 'lin dian', id: '101050902', name: '林甸' }, { enname: 'zhao zhou', id: '101050903', name: '肇州' }, { enname: 'zhao yuan', id: '101050904', name: '肇源' }, { enname: 'du er bo te', id: '101050905', name: '杜尔伯特' }]
  }, {
    enname: 'qi tai he',
    id: '0510',
    name: '七台河',
    children: [{ enname: 'qi tai he', id: '101051002', name: '七台河' }, { enname: 'bo li', id: '101051003', name: '勃利' }]
  }, {
    enname: 'ji xi',
    id: '0511',
    name: '鸡西',
    children: [{ enname: 'ji xi', id: '101051101', name: '鸡西' }, { enname: 'hu lin', id: '101051102', name: '虎林' }, { enname: 'mi shan', id: '101051103', name: '密山' }, { enname: 'ji dong', id: '101051104', name: '鸡东' }]
  }, {
    enname: 'he gang',
    id: '0512',
    name: '鹤岗',
    children: [{ enname: 'he gang', id: '101051201', name: '鹤岗' }, { enname: 'sui bin', id: '101051202', name: '绥滨' }, { enname: 'luo bei', id: '101051203', name: '萝北' }]
  }, {
    enname: 'shuang ya shan',
    id: '0513',
    name: '双鸭山',
    children: [{ enname: 'shuang ya shan', id: '101051301', name: '双鸭山' }, { enname: 'ji xian', id: '101051302', name: '集贤' }, { enname: 'bao qing', id: '101051303', name: '宝清' }, { enname: 'rao he', id: '101051304', name: '饶河' }, { enname: 'you yi', id: '101051305', name: '友谊' }]
  }]
}, {
  enname: 'ji lin',
  id: '06',
  name: '吉林',
  children: [{
    enname: 'chang chun',
    id: '0601',
    name: '长春',
    children: [{ enname: 'chang chun', id: '101060101', name: '长春' }, { enname: 'nong an', id: '101060102', name: '农安' }, { enname: 'de hui', id: '101060103', name: '德惠' }, { enname: 'jiu tai', id: '101060104', name: '九台' }, { enname: 'yu shu', id: '101060105', name: '榆树' }, { enname: 'shuang yang', id: '101060106', name: '双阳' }]
  }, {
    enname: 'ji lin',
    id: '0602',
    name: '吉林',
    children: [{ enname: 'ji lin', id: '101060201', name: '吉林' }, { enname: 'shu lan', id: '101060202', name: '舒兰' }, { enname: 'yong ji', id: '101060203', name: '永吉' }, { enname: 'jiao he', id: '101060204', name: '蛟河' }, { enname: 'pan shi', id: '101060205', name: '磐石' }, { enname: 'hua dian', id: '101060206', name: '桦甸' }]
  }, {
    enname: 'yan bian',
    id: '0603',
    name: '延边',
    children: [{ enname: 'yan ji', id: '101060301', name: '延吉' }, { enname: 'dun hua', id: '101060302', name: '敦化' }, { enname: 'an tu', id: '101060303', name: '安图' }, { enname: 'wang qing', id: '101060304', name: '汪清' }, { enname: 'he long', id: '101060305', name: '和龙' }, { enname: 'long jing', id: '101060307', name: '龙井' }, { enname: 'hui chun', id: '101060308', name: '珲春' }, { enname: 'tu men', id: '101060309', name: '图们' }]
  }, {
    enname: 'si ping',
    id: '0604',
    name: '四平',
    children: [{ enname: 'si ping', id: '101060401', name: '四平' }, { enname: 'shuang liao', id: '101060402', name: '双辽' }, { enname: 'li shu', id: '101060403', name: '梨树' }, { enname: 'gong zhu ling', id: '101060404', name: '公主岭' }, { enname: 'yi tong', id: '101060405', name: '伊通' }]
  }, {
    enname: 'tong hua',
    id: '0605',
    name: '通化',
    children: [{ enname: 'tong hua', id: '101060501', name: '通化' }, { enname: 'mei he kou', id: '101060502', name: '梅河口' }, { enname: 'liu he', id: '101060503', name: '柳河' }, { enname: 'hui nan', id: '101060504', name: '辉南' }, { enname: 'ji an', id: '101060505', name: '集安' }, { enname: 'tong hua xian', id: '101060506', name: '通化县' }]
  }, {
    enname: 'bai cheng',
    id: '0606',
    name: '白城',
    children: [{ enname: 'bai cheng', id: '101060601', name: '白城' }, { enname: 'tao nan', id: '101060602', name: '洮南' }, { enname: 'da an', id: '101060603', name: '大安' }, { enname: 'zhen lai', id: '101060604', name: '镇赉' }, { enname: 'tong yu', id: '101060605', name: '通榆' }]
  }, {
    enname: 'liao yuan',
    id: '0607',
    name: '辽源',
    children: [{ enname: 'liao yuan', id: '101060701', name: '辽源' }, { enname: 'dong feng', id: '101060702', name: '东丰' }, { enname: 'dong liao', id: '101060703', name: '东辽' }]
  }, {
    enname: 'song yuan',
    id: '0608',
    name: '松原',
    children: [{ enname: 'song yuan', id: '101060801', name: '松原' }, { enname: 'gan an', id: '101060802', name: '乾安' }, { enname: 'qian guo', id: '101060803', name: '前郭' }, { enname: 'chang ling', id: '101060804', name: '长岭' }, { enname: 'fu yu', id: '101060805', name: '扶余' }]
  }, {
    enname: 'bai shan',
    id: '0609',
    name: '白山',
    children: [{ enname: 'bai shan', id: '101060901', name: '白山' }, { enname: 'jing yu', id: '101060902', name: '靖宇' }, { enname: 'lin jiang', id: '101060903', name: '临江' }, { enname: 'dong gang', id: '101060904', name: '东岗' }, { enname: 'chang bai', id: '101060905', name: '长白' }, { enname: 'fu song', id: '101060906', name: '抚松' }, { enname: 'jiang yuan', id: '101060907', name: '江源' }]
  }]
}, {
  enname: 'liao ning',
  id: '07',
  name: '辽宁',
  children: [{
    enname: 'shen yang',
    id: '0701',
    name: '沈阳',
    children: [{ enname: 'shen yang', id: '101070101', name: '沈阳' }, { enname: 'liao zhong', id: '101070103', name: '辽中' }, { enname: 'kang ping', id: '101070104', name: '康平' }, { enname: 'fa ku', id: '101070105', name: '法库' }, { enname: 'xin min', id: '101070106', name: '新民' }]
  }, {
    enname: 'da lian',
    id: '0702',
    name: '大连',
    children: [{ enname: 'da lian', id: '101070201', name: '大连' }, { enname: 'wa fang dian', id: '101070202', name: '瓦房店' }, { enname: 'jin zhou', id: '101070203', name: '金州' }, { enname: 'pu lan dian', id: '101070204', name: '普兰店' }, { enname: 'lu shun', id: '101070205', name: '旅顺' }, { enname: 'chang hai', id: '101070206', name: '长海' }, { enname: 'zhuang he', id: '101070207', name: '庄河' }]
  }, {
    enname: 'an shan',
    id: '0703',
    name: '鞍山',
    children: [{ enname: 'an shan', id: '101070301', name: '鞍山' }, { enname: 'tai an', id: '101070302', name: '台安' }, { enname: 'xiu yan', id: '101070303', name: '岫岩' }, { enname: 'hai cheng', id: '101070304', name: '海城' }]
  }, {
    enname: 'fu shun',
    id: '0704',
    name: '抚顺',
    children: [{ enname: 'fu shun', id: '101070401', name: '抚顺' }, { enname: 'xin bin', id: '101070402', name: '新宾' }, { enname: 'qing yuan', id: '101070403', name: '清原' }, { enname: 'zhang dang', id: '101070404', name: '章党' }]
  }, {
    enname: 'ben xi',
    id: '0705',
    name: '本溪',
    children: [{ enname: 'ben xi', id: '101070501', name: '本溪' }, { enname: 'ben xi xian', id: '101070502', name: '本溪县' }, { enname: 'huan ren', id: '101070504', name: '桓仁' }]
  }, {
    enname: 'dan dong',
    id: '0706',
    name: '丹东',
    children: [{ enname: 'dan dong', id: '101070601', name: '丹东' }, { enname: 'feng cheng', id: '101070602', name: '凤城' }, { enname: 'kuan dian', id: '101070603', name: '宽甸' }, { enname: 'dong gang', id: '101070604', name: '东港' }]
  }, {
    enname: 'jin zhou',
    id: '0707',
    name: '锦州',
    children: [{ enname: 'jin zhou', id: '101070701', name: '锦州' }, { enname: 'ling hai', id: '101070702', name: '凌海' }, { enname: 'yi xian', id: '101070704', name: '义县' }, { enname: 'hei shan', id: '101070705', name: '黑山' }, { enname: 'bei zhen', id: '101070706', name: '北镇' }]
  }, {
    enname: 'ying kou',
    id: '0708',
    name: '营口',
    children: [{ enname: 'ying kou', id: '101070801', name: '营口' }, { enname: 'da shi qiao', id: '101070802', name: '大石桥' }, { enname: 'gai zhou', id: '101070803', name: '盖州' }]
  }, {
    enname: 'fu xin',
    id: '0709',
    name: '阜新',
    children: [{ enname: 'fu xin', id: '101070901', name: '阜新' }, { enname: 'zhang wu', id: '101070902', name: '彰武' }]
  }, {
    enname: 'liao yang',
    id: '0710',
    name: '辽阳',
    children: [{ enname: 'liao yang', id: '101071001', name: '辽阳' }, { enname: 'liao yang xian', id: '101071002', name: '辽阳县' }, { enname: 'deng ta', id: '101071003', name: '灯塔' }, { enname: 'gong chang ling', id: '101071004', name: '弓长岭' }]
  }, {
    enname: 'tie ling',
    id: '0711',
    name: '铁岭',
    children: [{ enname: 'tie ling', id: '101071101', name: '铁岭' }, { enname: 'kai yuan', id: '101071102', name: '开原' }, { enname: 'chang tu', id: '101071103', name: '昌图' }, { enname: 'xi feng', id: '101071104', name: '西丰' }, { enname: 'diao bing shan', id: '101071105', name: '调兵山' }]
  }, {
    enname: 'chao yang',
    id: '0712',
    name: '朝阳',
    children: [{ enname: 'chao yang', id: '101071201', name: '朝阳' }, { enname: 'ling yuan', id: '101071203', name: '凌源' }, { enname: 'ka zuo', id: '101071204', name: '喀左' }, { enname: 'bei piao', id: '101071205', name: '北票' }, { enname: 'jian ping xian', id: '101071207', name: '建平县' }]
  }, {
    enname: 'pan jin',
    id: '0713',
    name: '盘锦',
    children: [{ enname: 'pan jin', id: '101071301', name: '盘锦' }, { enname: 'da wa', id: '101071302', name: '大洼' }, { enname: 'pan shan', id: '101071303', name: '盘山' }]
  }, {
    enname: 'hu lu dao',
    id: '0714',
    name: '葫芦岛',
    children: [{ enname: 'hu lu dao', id: '101071401', name: '葫芦岛' }, { enname: 'jian chang', id: '101071402', name: '建昌' }, { enname: 'sui zhong', id: '101071403', name: '绥中' }, { enname: 'xing cheng', id: '101071404', name: '兴城' }]
  }]
}, {
  enname: 'nei meng gu',
  id: '08',
  name: '内蒙古',
  children: [{
    enname: 'hu he hao te',
    id: '0801',
    name: '呼和浩特',
    children: [{ enname: 'hu he hao te', id: '101080101', name: '呼和浩特' }, { enname: 'tu zuo qi', id: '101080102', name: '土左旗' }, { enname: 'tuo xian', id: '101080103', name: '托县' }, { enname: 'he lin', id: '101080104', name: '和林' }, { enname: 'qing shui he', id: '101080105', name: '清水河' }, { enname: 'hu shi jiao qu', id: '101080106', name: '呼市郊区' }, { enname: 'wu chuan', id: '101080107', name: '武川' }]
  }, {
    enname: 'bao tou',
    id: '0802',
    name: '包头',
    children: [{ enname: 'bao tou', id: '101080201', name: '包头' }, { enname: 'bai yun e bo', id: '101080202', name: '白云鄂博' }, { enname: 'man dou la', id: '101080203', name: '满都拉' }, { enname: 'tu you qi', id: '101080204', name: '土右旗' }, { enname: 'gu yang', id: '101080205', name: '固阳' }, { enname: 'da mao qi', id: '101080206', name: '达茂旗' }]
  }, {
    enname: 'wu hai',
    id: '0803',
    name: '乌海',
    children: [{ enname: 'wu hai', id: '101080301', name: '乌海' }]
  }, {
    enname: 'wu lan cha bu',
    id: '0804',
    name: '乌兰察布',
    children: [{ enname: 'ji ning', id: '101080401', name: '集宁' }, { enname: 'zhuo zi', id: '101080402', name: '卓资' }, { enname: 'hua de', id: '101080403', name: '化德' }, { enname: 'shang dou', id: '101080404', name: '商都' }, { enname: 'xing he', id: '101080406', name: '兴和' }, { enname: 'liang cheng', id: '101080407', name: '凉城' }, {
      enname: 'cha you qian qi',
      id: '101080408',
      name: '察右前旗'
    }, {
      enname: 'cha you zhong qi',
      id: '101080409',
      name: '察右中旗'
    }, { enname: 'cha you hou qi', id: '101080410', name: '察右后旗' }, { enname: 'si zi wang qi', id: '101080411', name: '四子王旗' }, { enname: 'feng zhen', id: '101080412', name: '丰镇' }]
  }, {
    enname: 'tong liao',
    id: '0805',
    name: '通辽',
    children: [{ enname: 'tong liao', id: '101080501', name: '通辽' }, { enname: 'she bo tu', id: '101080502', name: '舍伯吐' }, {
      enname: 'ke zuo zhong qi',
      id: '101080503',
      name: '科左中旗'
    }, { enname: 'ke zuo hou qi', id: '101080504', name: '科左后旗' }, { enname: 'qing long shan', id: '101080505', name: '青龙山' }, { enname: 'kai lu', id: '101080506', name: '开鲁' }, { enname: 'ku lun', id: '101080507', name: '库伦' }, { enname: 'nai man', id: '101080508', name: '奈曼' }, { enname: 'zha lu te', id: '101080509', name: '扎鲁特' }, {
      enname: 'ba ya er tu hu shuo',
      id: '101080511',
      name: '巴雅尔吐胡硕'
    }, { enname: 'huo lin guo lei', id: '101081108', name: '霍林郭勒' }]
  }, {
    enname: 'chi feng',
    id: '0806',
    name: '赤峰',
    children: [{ enname: 'chi feng', id: '101080601', name: '赤峰' }, { enname: 'a lu qi', id: '101080603', name: '阿鲁旗' }, { enname: 'hao er tu', id: '101080604', name: '浩尔吐' }, { enname: 'ba lin zuo qi', id: '101080605', name: '巴林左旗' }, { enname: 'ba lin you qi', id: '101080606', name: '巴林右旗' }, { enname: 'lin xi', id: '101080607', name: '林西' }, {
      enname: 'ke shen ke teng',
      id: '101080608',
      name: '克什克腾'
    }, { enname: 'weng niu te', id: '101080609', name: '翁牛特' }, { enname: 'gang zi', id: '101080610', name: '岗子' }, { enname: 'ka la qin', id: '101080611', name: '喀喇沁' }, { enname: 'ba li han', id: '101080612', name: '八里罕' }, { enname: 'ning cheng', id: '101080613', name: '宁城' }, { enname: 'ao han', id: '101080614', name: '敖汉' }, { enname: 'bao guo tu', id: '101080615', name: '宝国吐' }]
  }, {
    enname: 'e er duo si',
    id: '0807',
    name: '鄂尔多斯',
    children: [{ enname: 'e er duo si', id: '101080701', name: '鄂尔多斯' }, { enname: 'da la te', id: '101080703', name: '达拉特' }, { enname: 'zhun ge er', id: '101080704', name: '准格尔' }, { enname: 'e qian qi', id: '101080705', name: '鄂前旗' }, { enname: 'he nan', id: '101080706', name: '河南' }, { enname: 'yi ke wu su', id: '101080707', name: '伊克乌素' }, { enname: 'e tuo ke', id: '101080708', name: '鄂托克' }, { enname: 'hang jin qi', id: '101080709', name: '杭锦旗' }, { enname: 'wu shen qi', id: '101080710', name: '乌审旗' }, { enname: 'yi jin huo luo', id: '101080711', name: '伊金霍洛' }, { enname: 'wu shen zhao', id: '101080712', name: '乌审召' }, { enname: 'dong sheng', id: '101080713', name: '东胜' }]
  }, {
    enname: 'ba yan nao er',
    id: '0808',
    name: '巴彦淖尔',
    children: [{ enname: 'lin he', id: '101080801', name: '临河' }, { enname: 'wu yuan', id: '101080802', name: '五原' }, { enname: 'deng kou', id: '101080803', name: '磴口' }, { enname: 'wu qian qi', id: '101080804', name: '乌前旗' }, { enname: 'da she tai', id: '101080805', name: '大佘太' }, { enname: 'wu zhong qi', id: '101080806', name: '乌中旗' }, { enname: 'wu hou qi', id: '101080807', name: '乌后旗' }, { enname: 'hai li su', id: '101080808', name: '海力素' }, {
      enname: 'na ren bao li ge',
      id: '101080809',
      name: '那仁宝力格'
    }, { enname: 'hang jin hou qi', id: '101080810', name: '杭锦后旗' }]
  }, {
    enname: 'xi lin guo lei',
    id: '0809',
    name: '锡林郭勒',
    children: [{ enname: 'xi lin hao te', id: '101080901', name: '锡林浩特' }, { enname: 'er lian hao te', id: '101080903', name: '二连浩特' }, { enname: 'a ba ga', id: '101080904', name: '阿巴嘎' }, { enname: 'su zuo qi', id: '101080906', name: '苏左旗' }, { enname: 'su you qi', id: '101080907', name: '苏右旗' }, { enname: 'zhu ri he', id: '101080908', name: '朱日和' }, { enname: 'dong wu qi', id: '101080909', name: '东乌旗' }, { enname: 'xi wu qi', id: '101080910', name: '西乌旗' }, { enname: 'tai pu si', id: '101080911', name: '太仆寺' }, { enname: 'xiang huang qi', id: '101080912', name: '镶黄旗' }, {
      enname: 'zheng xiang bai qi',
      id: '101080913',
      name: '正镶白旗'
    }, { enname: 'zheng lan qi', id: '101080914', name: '正蓝旗' }, { enname: 'duo lun', id: '101080915', name: '多伦' }, { enname: 'bo ke tu', id: '101080916', name: '博克图' }, { enname: 'wu la gai', id: '101080917', name: '乌拉盖' }]
  }, {
    enname: 'hu lun bei er',
    id: '0810',
    name: '呼伦贝尔',
    children: [{ enname: 'tu li he', id: '101081016', name: '图里河' }, { enname: 'hai la er', id: '101081001', name: '海拉尔' }, { enname: 'xiao er gou', id: '101081002', name: '小二沟' }, { enname: 'a rong qi', id: '101081003', name: '阿荣旗' }, { enname: 'mo li da wa', id: '101081004', name: '莫力达瓦' }, { enname: 'e lun chun qi', id: '101081005', name: '鄂伦春旗' }, { enname: 'e wen ke qi', id: '101081006', name: '鄂温克旗' }, { enname: 'chen qi', id: '101081007', name: '陈旗' }, { enname: 'xin zuo qi', id: '101081008', name: '新左旗' }, { enname: 'xin you qi', id: '101081009', name: '新右旗' }, { enname: 'man zhou li', id: '101081010', name: '满洲里' }, { enname: 'ya ke shi', id: '101081011', name: '牙克石' }, { enname: 'zha lan tun', id: '101081012', name: '扎兰屯' }, { enname: 'e er gu na', id: '101081014', name: '额尔古纳' }, { enname: 'gen he', id: '101081015', name: '根河' }]
  }, {
    enname: 'xing an meng',
    id: '0811',
    name: '兴安盟',
    children: [{ enname: 'gao li ban', id: '101080510', name: '高力板' }, { enname: 'wu lan hao te', id: '101081101', name: '乌兰浩特' }, { enname: 'a er shan', id: '101081102', name: '阿尔山' }, {
      enname: 'ke you zhong qi',
      id: '101081103',
      name: '科右中旗'
    }, { enname: 'hu er lei', id: '101081104', name: '胡尔勒' }, { enname: 'zha lai te', id: '101081105', name: '扎赉特' }, { enname: 'suo lun', id: '101081106', name: '索伦' }, { enname: 'tu quan', id: '101081107', name: '突泉' }, { enname: 'ke you qian qi', id: '101081109', name: '科右前旗' }]
  }, {
    enname: 'a la shan meng',
    id: '0812',
    name: '阿拉善盟',
    children: [{
      enname: 'a la shan zuo qi',
      id: '101081201',
      name: '阿拉善左旗'
    }, {
      enname: 'a la shan you qi',
      id: '101081202',
      name: '阿拉善右旗'
    }, { enname: 'e ji na', id: '101081203', name: '额济纳' }, { enname: 'guai zi hu', id: '101081204', name: '拐子湖' }, { enname: 'ji lan tai', id: '101081205', name: '吉兰太' }, { enname: 'xi lin gao lei', id: '101081206', name: '锡林高勒' }, { enname: 'tou dao hu', id: '101081207', name: '头道湖' }, { enname: 'zhong quan zi', id: '101081208', name: '中泉子' }, { enname: 'nuo er gong', id: '101081209', name: '诺尔公' }, { enname: 'ya bu lai', id: '101081210', name: '雅布赖' }, { enname: 'wu si tai', id: '101081211', name: '乌斯泰' }, { enname: 'luan jing tan', id: '101081212', name: '孪井滩' }]
  }]
}, {
  enname: 'he bei',
  id: '09',
  name: '河北',
  children: [{
    enname: 'shi jia zhuang',
    id: '0901',
    name: '石家庄',
    children: [{ enname: 'shi jia zhuang', id: '101090101', name: '石家庄' }, { enname: 'jing xing', id: '101090102', name: '井陉' }, { enname: 'zheng ding', id: '101090103', name: '正定' }, { enname: 'luan cheng', id: '101090104', name: '栾城' }, { enname: 'xing tang', id: '101090105', name: '行唐' }, { enname: 'ling shou', id: '101090106', name: '灵寿' }, { enname: 'gao yi', id: '101090107', name: '高邑' }, { enname: 'shen ze', id: '101090108', name: '深泽' }, { enname: 'zan huang', id: '101090109', name: '赞皇' }, { enname: 'wu ji', id: '101090110', name: '无极' }, { enname: 'ping shan', id: '101090111', name: '平山' }, { enname: 'yuan shi', id: '101090112', name: '元氏' }, { enname: 'zhao xian', id: '101090113', name: '赵县' }, { enname: 'xin ji', id: '101090114', name: '辛集' }, { enname: 'gao cheng', id: '101090115', name: '藁城' }, { enname: 'jin zhou', id: '101090116', name: '晋州' }, { enname: 'xin le', id: '101090117', name: '新乐' }, { enname: 'lu quan', id: '101090118', name: '鹿泉' }]
  }, {
    enname: 'bao ding',
    id: '0902',
    name: '保定',
    children: [{ enname: 'bao ding', id: '101090201', name: '保定' }, { enname: 'man cheng', id: '101090202', name: '满城' }, { enname: 'fu ping', id: '101090203', name: '阜平' }, { enname: 'xu shui', id: '101090204', name: '徐水' }, { enname: 'tang xian', id: '101090205', name: '唐县' }, { enname: 'gao yang', id: '101090206', name: '高阳' }, { enname: 'rong cheng', id: '101090207', name: '容城' }, { enname: 'lai yuan', id: '101090209', name: '涞源' }, { enname: 'wang dou', id: '101090210', name: '望都' }, { enname: 'an xin', id: '101090211', name: '安新' }, { enname: 'yi xian', id: '101090212', name: '易县' }, { enname: 'qu yang', id: '101090214', name: '曲阳' }, { enname: 'li xian', id: '101090215', name: '蠡县' }, { enname: 'shun ping', id: '101090216', name: '顺平' }, { enname: 'xiong xian', id: '101090217', name: '雄县' }, { enname: 'zhuo zhou', id: '101090218', name: '涿州' }, { enname: 'ding zhou', id: '101090219', name: '定州' }, { enname: 'an guo', id: '101090220', name: '安国' }, { enname: 'gao bei dian', id: '101090221', name: '高碑店' }, { enname: 'lai shui', id: '101090222', name: '涞水' }, { enname: 'ding xing', id: '101090223', name: '定兴' }, { enname: 'qing yuan', id: '101090224', name: '清苑' }, { enname: 'bo ye', id: '101090225', name: '博野' }]
  }, {
    enname: 'zhang jia kou',
    id: '0903',
    name: '张家口',
    children: [{ enname: 'zhang jia kou', id: '101090301', name: '张家口' }, { enname: 'xuan hua', id: '101090302', name: '宣化' }, { enname: 'zhang bei', id: '101090303', name: '张北' }, { enname: 'kang bao', id: '101090304', name: '康保' }, { enname: 'gu yuan', id: '101090305', name: '沽源' }, { enname: 'shang yi', id: '101090306', name: '尚义' }, { enname: 'wei xian', id: '101090307', name: '蔚县' }, { enname: 'yang yuan', id: '101090308', name: '阳原' }, { enname: 'huai an', id: '101090309', name: '怀安' }, { enname: 'wan quan', id: '101090310', name: '万全' }, { enname: 'huai lai', id: '101090311', name: '怀来' }, { enname: 'zhuo lu', id: '101090312', name: '涿鹿' }, { enname: 'chi cheng', id: '101090313', name: '赤城' }, { enname: 'chong li', id: '101090314', name: '崇礼' }]
  }, {
    enname: 'cheng de',
    id: '0904',
    name: '承德',
    children: [{ enname: 'cheng de', id: '101090402', name: '承德' }, { enname: 'cheng de xian', id: '101090403', name: '承德县' }, { enname: 'xing long', id: '101090404', name: '兴隆' }, { enname: 'ping quan', id: '101090405', name: '平泉' }, { enname: 'luan ping', id: '101090406', name: '滦平' }, { enname: 'long hua', id: '101090407', name: '隆化' }, { enname: 'feng ning', id: '101090408', name: '丰宁' }, { enname: 'kuan cheng', id: '101090409', name: '宽城' }, { enname: 'wei chang', id: '101090410', name: '围场' }]
  }, {
    enname: 'tang shan',
    id: '0905',
    name: '唐山',
    children: [{ enname: 'tang shan', id: '101090501', name: '唐山' }, { enname: 'feng nan', id: '101090502', name: '丰南' }, { enname: 'feng run', id: '101090503', name: '丰润' }, { enname: 'luan xian', id: '101090504', name: '滦县' }, { enname: 'luan nan', id: '101090505', name: '滦南' }, { enname: 'le ting', id: '101090506', name: '乐亭' }, { enname: 'qian xi', id: '101090507', name: '迁西' }, { enname: 'yu tian', id: '101090508', name: '玉田' }, { enname: 'tang hai', id: '101090509', name: '唐海' }, { enname: 'zun hua', id: '101090510', name: '遵化' }, { enname: 'qian an', id: '101090511', name: '迁安' }, { enname: 'cao fei dian', id: '101090512', name: '曹妃甸' }]
  }, {
    enname: 'lang fang',
    id: '0906',
    name: '廊坊',
    children: [{ enname: 'lang fang', id: '101090601', name: '廊坊' }, { enname: 'gu an', id: '101090602', name: '固安' }, { enname: 'yong qing', id: '101090603', name: '永清' }, { enname: 'xiang he', id: '101090604', name: '香河' }, { enname: 'da cheng', id: '101090605', name: '大城' }, { enname: 'wen an', id: '101090606', name: '文安' }, { enname: 'da chang', id: '101090607', name: '大厂' }, { enname: 'ba zhou', id: '101090608', name: '霸州' }, { enname: 'san he', id: '101090609', name: '三河' }]
  }, {
    enname: 'cang zhou',
    id: '0907',
    name: '沧州',
    children: [{ enname: 'cang zhou', id: '101090701', name: '沧州' }, { enname: 'qing xian', id: '101090702', name: '青县' }, { enname: 'dong guang', id: '101090703', name: '东光' }, { enname: 'hai xing', id: '101090704', name: '海兴' }, { enname: 'yan shan', id: '101090705', name: '盐山' }, { enname: 'su ning', id: '101090706', name: '肃宁' }, { enname: 'nan pi', id: '101090707', name: '南皮' }, { enname: 'wu qiao', id: '101090708', name: '吴桥' }, { enname: 'xian xian', id: '101090709', name: '献县' }, { enname: 'meng cun', id: '101090710', name: '孟村' }, { enname: 'po tou', id: '101090711', name: '泊头' }, { enname: 'ren qiu', id: '101090712', name: '任丘' }, { enname: 'huang hua', id: '101090713', name: '黄骅' }, { enname: 'he jian', id: '101090714', name: '河间' }, { enname: 'cang xian', id: '101090716', name: '沧县' }]
  }, {
    enname: 'heng shui',
    id: '0908',
    name: '衡水',
    children: [{ enname: 'heng shui', id: '101090801', name: '衡水' }, { enname: 'zao qiang', id: '101090802', name: '枣强' }, { enname: 'wu yi', id: '101090803', name: '武邑' }, { enname: 'wu qiang', id: '101090804', name: '武强' }, { enname: 'rao yang', id: '101090805', name: '饶阳' }, { enname: 'an ping', id: '101090806', name: '安平' }, { enname: 'gu cheng', id: '101090807', name: '故城' }, { enname: 'jing xian', id: '101090808', name: '景县' }, { enname: 'fu cheng', id: '101090809', name: '阜城' }, { enname: 'ji zhou', id: '101090810', name: '冀州' }, { enname: 'shen zhou', id: '101090811', name: '深州' }]
  }, {
    enname: 'xing tai',
    id: '0909',
    name: '邢台',
    children: [{ enname: 'xing tai', id: '101090901', name: '邢台' }, { enname: 'lin cheng', id: '101090902', name: '临城' }, { enname: 'nei qiu', id: '101090904', name: '内丘' }, { enname: 'bai xiang', id: '101090905', name: '柏乡' }, { enname: 'long yao', id: '101090906', name: '隆尧' }, { enname: 'nan he', id: '101090907', name: '南和' }, { enname: 'ning jin', id: '101090908', name: '宁晋' }, { enname: 'ju lu', id: '101090909', name: '巨鹿' }, { enname: 'xin he', id: '101090910', name: '新河' }, { enname: 'guang zong', id: '101090911', name: '广宗' }, { enname: 'ping xiang', id: '101090912', name: '平乡' }, { enname: 'wei xian', id: '101090913', name: '威县' }, { enname: 'qing he', id: '101090914', name: '清河' }, { enname: 'lin xi', id: '101090915', name: '临西' }, { enname: 'nan gong', id: '101090916', name: '南宫' }, { enname: 'sha he', id: '101090917', name: '沙河' }, { enname: 'ren xian', id: '101090918', name: '任县' }]
  }, {
    enname: 'han dan',
    id: '0910',
    name: '邯郸',
    children: [{ enname: 'han dan', id: '101091001', name: '邯郸' }, {
      enname: 'feng feng kuang qu',
      id: '101091002',
      name: '峰峰矿区'
    }, { enname: 'lin zhang', id: '101091003', name: '临漳' }, { enname: 'cheng an', id: '101091004', name: '成安' }, { enname: 'da ming', id: '101091005', name: '大名' }, { enname: 'she xian', id: '101091006', name: '涉县' }, { enname: 'ci xian', id: '101091007', name: '磁县' }, { enname: 'fei xiang', id: '101091008', name: '肥乡' }, { enname: 'yong nian', id: '101091009', name: '永年' }, { enname: 'qiu xian', id: '101091010', name: '邱县' }, { enname: 'ji ze', id: '101091011', name: '鸡泽' }, { enname: 'guang ping', id: '101091012', name: '广平' }, { enname: 'guan tao', id: '101091013', name: '馆陶' }, { enname: 'wei xian', id: '101091014', name: '魏县' }, { enname: 'qu zhou', id: '101091015', name: '曲周' }, { enname: 'wu an', id: '101091016', name: '武安' }]
  }, {
    enname: 'qin huang dao',
    id: '0911',
    name: '秦皇岛',
    children: [{ enname: 'qin huang dao', id: '101091101', name: '秦皇岛' }, { enname: 'qing long', id: '101091102', name: '青龙' }, { enname: 'chang li', id: '101091103', name: '昌黎' }, { enname: 'fu ning', id: '101091104', name: '抚宁' }, { enname: 'lu long', id: '101091105', name: '卢龙' }, { enname: 'bei dai he', id: '101091106', name: '北戴河' }]
  }]
}, {
  enname: 'shan xi',
  id: '10',
  name: '山西',
  children: [{
    enname: 'tai yuan',
    id: '1001',
    name: '太原',
    children: [{ enname: 'tai yuan', id: '101100101', name: '太原' }, { enname: 'qing xu', id: '101100102', name: '清徐' }, { enname: 'yang qu', id: '101100103', name: '阳曲' }, { enname: 'lou fan', id: '101100104', name: '娄烦' }, { enname: 'gu jiao', id: '101100105', name: '古交' }, {
      enname: 'jian cao ping qu',
      id: '101100106',
      name: '尖草坪区'
    }, { enname: 'xiao dian qu', id: '101100107', name: '小店区' }]
  }, {
    enname: 'da tong',
    id: '1002',
    name: '大同',
    children: [{ enname: 'da tong', id: '101100201', name: '大同' }, { enname: 'yang gao', id: '101100202', name: '阳高' }, { enname: 'da tong xian', id: '101100203', name: '大同县' }, { enname: 'tian zhen', id: '101100204', name: '天镇' }, { enname: 'guang ling', id: '101100205', name: '广灵' }, { enname: 'ling qiu', id: '101100206', name: '灵丘' }, { enname: 'hun yuan', id: '101100207', name: '浑源' }, { enname: 'zuo yun', id: '101100208', name: '左云' }]
  }, {
    enname: 'yang quan',
    id: '1003',
    name: '阳泉',
    children: [{ enname: 'yang quan', id: '101100301', name: '阳泉' }, { enname: 'yu xian', id: '101100302', name: '盂县' }, { enname: 'ping ding', id: '101100303', name: '平定' }]
  }, {
    enname: 'jin zhong',
    id: '1004',
    name: '晋中',
    children: [{ enname: 'jin zhong', id: '101100401', name: '晋中' }, { enname: 'yu ci', id: '101100402', name: '榆次' }, { enname: 'yu she', id: '101100403', name: '榆社' }, { enname: 'zuo quan', id: '101100404', name: '左权' }, { enname: 'he shun', id: '101100405', name: '和顺' }, { enname: 'xi yang', id: '101100406', name: '昔阳' }, { enname: 'shou yang', id: '101100407', name: '寿阳' }, { enname: 'tai gu', id: '101100408', name: '太谷' }, { enname: 'qi xian', id: '101100409', name: '祁县' }, { enname: 'ping yao', id: '101100410', name: '平遥' }, { enname: 'ling shi', id: '101100411', name: '灵石' }, { enname: 'jie xiu', id: '101100412', name: '介休' }]
  }, {
    enname: 'chang zhi',
    id: '1005',
    name: '长治',
    children: [{ enname: 'chang zhi', id: '101100501', name: '长治' }, { enname: 'li cheng', id: '101100502', name: '黎城' }, { enname: 'tun liu', id: '101100503', name: '屯留' }, { enname: 'lu cheng', id: '101100504', name: '潞城' }, { enname: 'xiang yuan', id: '101100505', name: '襄垣' }, { enname: 'ping shun', id: '101100506', name: '平顺' }, { enname: 'wu xiang', id: '101100507', name: '武乡' }, { enname: 'qin xian', id: '101100508', name: '沁县' }, { enname: 'chang zi', id: '101100509', name: '长子' }, { enname: 'qin yuan', id: '101100510', name: '沁源' }, { enname: 'hu guan', id: '101100511', name: '壶关' }]
  }, {
    enname: 'jin cheng',
    id: '1006',
    name: '晋城',
    children: [{ enname: 'jin cheng', id: '101100601', name: '晋城' }, { enname: 'qin shui', id: '101100602', name: '沁水' }, { enname: 'yang cheng', id: '101100603', name: '阳城' }, { enname: 'ling chuan', id: '101100604', name: '陵川' }, { enname: 'gao ping', id: '101100605', name: '高平' }, { enname: 'ze zhou', id: '101100606', name: '泽州' }]
  }, {
    enname: 'lin fen',
    id: '1007',
    name: '临汾',
    children: [{ enname: 'lin fen', id: '101100701', name: '临汾' }, { enname: 'qu wo', id: '101100702', name: '曲沃' }, { enname: 'yong he', id: '101100703', name: '永和' }, { enname: 'xi xian', id: '101100704', name: '隰县' }, { enname: 'da ning', id: '101100705', name: '大宁' }, { enname: 'ji xian', id: '101100706', name: '吉县' }, { enname: 'xiang fen', id: '101100707', name: '襄汾' }, { enname: 'pu xian', id: '101100708', name: '蒲县' }, { enname: 'fen xi', id: '101100709', name: '汾西' }, { enname: 'hong dong', id: '101100710', name: '洪洞' }, { enname: 'huo zhou', id: '101100711', name: '霍州' }, { enname: 'xiang ning', id: '101100712', name: '乡宁' }, { enname: 'yi cheng', id: '101100713', name: '翼城' }, { enname: 'hou ma', id: '101100714', name: '侯马' }, { enname: 'fu shan', id: '101100715', name: '浮山' }, { enname: 'an ze', id: '101100716', name: '安泽' }, { enname: 'gu xian', id: '101100717', name: '古县' }]
  }, {
    enname: 'yun cheng',
    id: '1008',
    name: '运城',
    children: [{ enname: 'yun cheng', id: '101100801', name: '运城' }, { enname: 'lin yi', id: '101100802', name: '临猗' }, { enname: 'ji shan', id: '101100803', name: '稷山' }, { enname: 'wan rong', id: '101100804', name: '万荣' }, { enname: 'he jin', id: '101100805', name: '河津' }, { enname: 'xin jiang', id: '101100806', name: '新绛' }, { enname: 'jiang xian', id: '101100807', name: '绛县' }, { enname: 'wen xi', id: '101100808', name: '闻喜' }, { enname: 'yuan qu', id: '101100809', name: '垣曲' }, { enname: 'yong ji', id: '101100810', name: '永济' }, { enname: 'rui cheng', id: '101100811', name: '芮城' }, { enname: 'xia xian', id: '101100812', name: '夏县' }, { enname: 'ping lu', id: '101100813', name: '平陆' }]
  }, {
    enname: 'shuo zhou',
    id: '1009',
    name: '朔州',
    children: [{ enname: 'shuo zhou', id: '101100901', name: '朔州' }, { enname: 'ping lu', id: '101100902', name: '平鲁' }, { enname: 'shan yin', id: '101100903', name: '山阴' }, { enname: 'you yu', id: '101100904', name: '右玉' }, { enname: 'ying xian', id: '101100905', name: '应县' }, { enname: 'huai ren', id: '101100906', name: '怀仁' }]
  }, {
    enname: 'xin zhou',
    id: '1010',
    name: '忻州',
    children: [{ enname: 'xin zhou', id: '101101001', name: '忻州' }, { enname: 'ding xiang', id: '101101002', name: '定襄' }, { enname: 'wu tai xian', id: '101101003', name: '五台县' }, { enname: 'he qu', id: '101101004', name: '河曲' }, { enname: 'pian guan', id: '101101005', name: '偏关' }, { enname: 'shen chi', id: '101101006', name: '神池' }, { enname: 'ning wu', id: '101101007', name: '宁武' }, { enname: 'dai xian', id: '101101008', name: '代县' }, { enname: 'fan zhi', id: '101101009', name: '繁峙' }, { enname: 'wu tai shan', id: '101101010', name: '五台山' }, { enname: 'bao de', id: '101101011', name: '保德' }, { enname: 'jing le', id: '101101012', name: '静乐' }, { enname: 'ke lan', id: '101101013', name: '岢岚' }, { enname: 'wu zhai', id: '101101014', name: '五寨' }, { enname: 'yuan ping', id: '101101015', name: '原平' }]
  }, {
    enname: 'lu liang',
    id: '1011',
    name: '吕梁',
    children: [{ enname: 'lu liang', id: '101101100', name: '吕梁' }, { enname: 'li shi', id: '101101101', name: '离石' }, { enname: 'lin xian', id: '101101102', name: '临县' }, { enname: 'xing xian', id: '101101103', name: '兴县' }, { enname: 'lan xian', id: '101101104', name: '岚县' }, { enname: 'liu lin', id: '101101105', name: '柳林' }, { enname: 'shi lou', id: '101101106', name: '石楼' }, { enname: 'fang shan', id: '101101107', name: '方山' }, { enname: 'jiao kou', id: '101101108', name: '交口' }, { enname: 'zhong yang', id: '101101109', name: '中阳' }, { enname: 'xiao yi', id: '101101110', name: '孝义' }, { enname: 'fen yang', id: '101101111', name: '汾阳' }, { enname: 'wen shui', id: '101101112', name: '文水' }, { enname: 'jiao cheng', id: '101101113', name: '交城' }]
  }]
}, {
  enname: 'shan xi',
  id: '11',
  name: '陕西',
  children: [{
    enname: 'xi an',
    id: '1101',
    name: '西安',
    children: [{ enname: 'xi an', id: '101110101', name: '西安' }, { enname: 'chang an', id: '101110102', name: '长安' }, { enname: 'lin tong', id: '101110103', name: '临潼' }, { enname: 'lan tian', id: '101110104', name: '蓝田' }, { enname: 'zhou zhi', id: '101110105', name: '周至' }, { enname: 'hu xian', id: '101110106', name: '户县' }, { enname: 'gao ling', id: '101110107', name: '高陵' }]
  }, {
    enname: 'xian yang',
    id: '1102',
    name: '咸阳',
    children: [{ enname: 'xian yang', id: '101110200', name: '咸阳' }, { enname: 'san yuan', id: '101110201', name: '三原' }, { enname: 'li quan', id: '101110202', name: '礼泉' }, { enname: 'yong shou', id: '101110203', name: '永寿' }, { enname: 'chun hua', id: '101110204', name: '淳化' }, { enname: 'jing yang', id: '101110205', name: '泾阳' }, { enname: 'wu gong', id: '101110206', name: '武功' }, { enname: 'gan xian', id: '101110207', name: '乾县' }, { enname: 'bin xian', id: '101110208', name: '彬县' }, { enname: 'chang wu', id: '101110209', name: '长武' }, { enname: 'xun yi', id: '101110210', name: '旬邑' }, { enname: 'xing ping', id: '101110211', name: '兴平' }]
  }, {
    enname: 'yan an',
    id: '1103',
    name: '延安',
    children: [{ enname: 'yan an', id: '101110300', name: '延安' }, { enname: 'yan zhang', id: '101110301', name: '延长' }, { enname: 'yan chuan', id: '101110302', name: '延川' }, { enname: 'zi zhang', id: '101110303', name: '子长' }, { enname: 'yi chuan', id: '101110304', name: '宜川' }, { enname: 'fu xian', id: '101110305', name: '富县' }, { enname: 'zhi dan', id: '101110306', name: '志丹' }, { enname: 'an sai', id: '101110307', name: '安塞' }, { enname: 'gan quan', id: '101110308', name: '甘泉' }, { enname: 'luo chuan', id: '101110309', name: '洛川' }, { enname: 'huang ling', id: '101110310', name: '黄陵' }, { enname: 'huang long', id: '101110311', name: '黄龙' }, { enname: 'wu qi', id: '101110312', name: '吴起' }]
  }, {
    enname: 'yu lin',
    id: '1104',
    name: '榆林',
    children: [{ enname: 'yu lin', id: '101110401', name: '榆林' }, { enname: 'fu gu', id: '101110402', name: '府谷' }, { enname: 'shen mu', id: '101110403', name: '神木' }, { enname: 'jia xian', id: '101110404', name: '佳县' }, { enname: 'ding bian', id: '101110405', name: '定边' }, { enname: 'jing bian', id: '101110406', name: '靖边' }, { enname: 'heng shan', id: '101110407', name: '横山' }, { enname: 'mi zhi', id: '101110408', name: '米脂' }, { enname: 'zi zhou', id: '101110409', name: '子洲' }, { enname: 'sui de', id: '101110410', name: '绥德' }, { enname: 'wu bao', id: '101110411', name: '吴堡' }, { enname: 'qing jian', id: '101110412', name: '清涧' }, { enname: 'yu yang', id: '101110413', name: '榆阳' }]
  }, {
    enname: 'wei nan',
    id: '1105',
    name: '渭南',
    children: [{ enname: 'wei nan', id: '101110501', name: '渭南' }, { enname: 'hua xian', id: '101110502', name: '华县' }, { enname: 'tong guan', id: '101110503', name: '潼关' }, { enname: 'da li', id: '101110504', name: '大荔' }, { enname: 'bai shui', id: '101110505', name: '白水' }, { enname: 'fu ping', id: '101110506', name: '富平' }, { enname: 'pu cheng', id: '101110507', name: '蒲城' }, { enname: 'cheng cheng', id: '101110508', name: '澄城' }, { enname: 'he yang', id: '101110509', name: '合阳' }, { enname: 'han cheng', id: '101110510', name: '韩城' }, { enname: 'hua yin', id: '101110511', name: '华阴' }]
  }, {
    enname: 'shang luo',
    id: '1106',
    name: '商洛',
    children: [{ enname: 'shang luo', id: '101110601', name: '商洛' }, { enname: 'luo nan', id: '101110602', name: '洛南' }, { enname: 'zha shui', id: '101110603', name: '柞水' }, { enname: 'shang zhou', id: '101110604', name: '商州' }, { enname: 'zhen an', id: '101110605', name: '镇安' }, { enname: 'dan feng', id: '101110606', name: '丹凤' }, { enname: 'shang nan', id: '101110607', name: '商南' }, { enname: 'shan yang', id: '101110608', name: '山阳' }]
  }, {
    enname: 'an kang',
    id: '1107',
    name: '安康',
    children: [{ enname: 'an kang', id: '101110701', name: '安康' }, { enname: 'zi yang', id: '101110702', name: '紫阳' }, { enname: 'shi quan', id: '101110703', name: '石泉' }, { enname: 'han yin', id: '101110704', name: '汉阴' }, { enname: 'xun yang', id: '101110705', name: '旬阳' }, { enname: 'lan gao', id: '101110706', name: '岚皋' }, { enname: 'ping li', id: '101110707', name: '平利' }, { enname: 'bai he', id: '101110708', name: '白河' }, { enname: 'zhen ping', id: '101110709', name: '镇坪' }, { enname: 'ning shan', id: '101110710', name: '宁陕' }]
  }, {
    enname: 'han zhong',
    id: '1108',
    name: '汉中',
    children: [{ enname: 'han zhong', id: '101110801', name: '汉中' }, { enname: 'e yang', id: '101110802', name: '略阳' }, { enname: 'mian xian', id: '101110803', name: '勉县' }, { enname: 'liu ba', id: '101110804', name: '留坝' }, { enname: 'yang xian', id: '101110805', name: '洋县' }, { enname: 'cheng gu', id: '101110806', name: '城固' }, { enname: 'xi xiang', id: '101110807', name: '西乡' }, { enname: 'fu ping', id: '101110808', name: '佛坪' }, { enname: 'ning qiang', id: '101110809', name: '宁强' }, { enname: 'nan zheng', id: '101110810', name: '南郑' }, { enname: 'zhen ba', id: '101110811', name: '镇巴' }]
  }, {
    enname: 'bao ji',
    id: '1109',
    name: '宝鸡',
    children: [{ enname: 'bao ji', id: '101110901', name: '宝鸡' }, { enname: 'qian yang', id: '101110903', name: '千阳' }, { enname: 'lin you', id: '101110904', name: '麟游' }, { enname: 'qi shan', id: '101110905', name: '岐山' }, { enname: 'feng xiang', id: '101110906', name: '凤翔' }, { enname: 'fu feng', id: '101110907', name: '扶风' }, { enname: 'mei xian', id: '101110908', name: '眉县' }, { enname: 'tai bai', id: '101110909', name: '太白' }, { enname: 'feng xian', id: '101110910', name: '凤县' }, { enname: 'long xian', id: '101110911', name: '陇县' }, { enname: 'chen cang', id: '101110912', name: '陈仓' }]
  }, {
    enname: 'tong chuan',
    id: '1110',
    name: '铜川',
    children: [{ enname: 'tong chuan', id: '101111001', name: '铜川' }, { enname: 'yao xian', id: '101111002', name: '耀县' }, { enname: 'yi jun', id: '101111003', name: '宜君' }, { enname: 'yao zhou', id: '101111004', name: '耀州' }]
  }, {
    enname: 'yang ling',
    id: '1111',
    name: '杨凌',
    children: [{ enname: 'yang ling', id: '101111101', name: '杨凌' }]
  }]
}, {
  enname: 'shan dong',
  id: '12',
  name: '山东',
  children: [{
    enname: 'ji nan',
    id: '1201',
    name: '济南',
    children: [{ enname: 'ji nan', id: '101120101', name: '济南' }, { enname: 'chang qing', id: '101120102', name: '长清' }, { enname: 'shang he', id: '101120103', name: '商河' }, { enname: 'zhang qiu', id: '101120104', name: '章丘' }, { enname: 'ping yin', id: '101120105', name: '平阴' }, { enname: 'ji yang', id: '101120106', name: '济阳' }]
  }, {
    enname: 'qing dao',
    id: '1202',
    name: '青岛',
    children: [{ enname: 'qing dao', id: '101120201', name: '青岛' }, { enname: 'lao shan', id: '101120202', name: '崂山' }, { enname: 'ji mo', id: '101120204', name: '即墨' }, { enname: 'jiao zhou', id: '101120205', name: '胶州' }, { enname: 'jiao nan', id: '101120206', name: '胶南' }, { enname: 'lai xi', id: '101120207', name: '莱西' }, { enname: 'ping du', id: '101120208', name: '平度' }]
  }, {
    enname: 'zi bo',
    id: '1203',
    name: '淄博',
    children: [{ enname: 'zi bo', id: '101120301', name: '淄博' }, { enname: 'zi chuan', id: '101120302', name: '淄川' }, { enname: 'bo shan', id: '101120303', name: '博山' }, { enname: 'gao qing', id: '101120304', name: '高青' }, { enname: 'zhou cun', id: '101120305', name: '周村' }, { enname: 'yi yuan', id: '101120306', name: '沂源' }, { enname: 'huan tai', id: '101120307', name: '桓台' }, { enname: 'lin zi', id: '101120308', name: '临淄' }]
  }, {
    enname: 'de zhou',
    id: '1204',
    name: '德州',
    children: [{ enname: 'de zhou', id: '101120401', name: '德州' }, { enname: 'wu cheng', id: '101120402', name: '武城' }, { enname: 'lin yi', id: '101120403', name: '临邑' }, { enname: 'ling xian', id: '101120404', name: '陵县' }, { enname: 'qi he', id: '101120405', name: '齐河' }, { enname: 'le ling', id: '101120406', name: '乐陵' }, { enname: 'qing yun', id: '101120407', name: '庆云' }, { enname: 'ping yuan', id: '101120408', name: '平原' }, { enname: 'ning jin', id: '101120409', name: '宁津' }, { enname: 'xia jin', id: '101120410', name: '夏津' }, { enname: 'yu cheng', id: '101120411', name: '禹城' }]
  }, {
    enname: 'yan tai',
    id: '1205',
    name: '烟台',
    children: [{ enname: 'yan tai', id: '101120501', name: '烟台' }, { enname: 'lai zhou', id: '101120502', name: '莱州' }, { enname: 'chang dao', id: '101120503', name: '长岛' }, { enname: 'peng lai', id: '101120504', name: '蓬莱' }, { enname: 'long kou', id: '101120505', name: '龙口' }, { enname: 'zhao yuan', id: '101120506', name: '招远' }, { enname: 'qi xia', id: '101120507', name: '栖霞' }, { enname: 'fu shan', id: '101120508', name: '福山' }, { enname: 'mou ping', id: '101120509', name: '牟平' }, { enname: 'lai yang', id: '101120510', name: '莱阳' }, { enname: 'hai yang', id: '101120511', name: '海阳' }]
  }, {
    enname: 'wei fang',
    id: '1206',
    name: '潍坊',
    children: [{ enname: 'wei fang', id: '101120601', name: '潍坊' }, { enname: 'qing zhou', id: '101120602', name: '青州' }, { enname: 'shou guang', id: '101120603', name: '寿光' }, { enname: 'lin qu', id: '101120604', name: '临朐' }, { enname: 'chang le', id: '101120605', name: '昌乐' }, { enname: 'chang yi', id: '101120606', name: '昌邑' }, { enname: 'an qiu', id: '101120607', name: '安丘' }, { enname: 'gao mi', id: '101120608', name: '高密' }, { enname: 'zhu cheng', id: '101120609', name: '诸城' }]
  }, {
    enname: 'ji ning',
    id: '1207',
    name: '济宁',
    children: [{ enname: 'ji ning', id: '101120701', name: '济宁' }, { enname: 'jia xiang', id: '101120702', name: '嘉祥' }, { enname: 'wei shan', id: '101120703', name: '微山' }, { enname: 'yu tai', id: '101120704', name: '鱼台' }, { enname: 'yan zhou', id: '101120705', name: '兖州' }, { enname: 'jin xiang', id: '101120706', name: '金乡' }, { enname: 'wen shang', id: '101120707', name: '汶上' }, { enname: 'si shui', id: '101120708', name: '泗水' }, { enname: 'liang shan', id: '101120709', name: '梁山' }, { enname: 'qu fu', id: '101120710', name: '曲阜' }, { enname: 'zou cheng', id: '101120711', name: '邹城' }]
  }, {
    enname: 'tai an',
    id: '1208',
    name: '泰安',
    children: [{ enname: 'tai an', id: '101120801', name: '泰安' }, { enname: 'xin tai', id: '101120802', name: '新泰' }, { enname: 'fei cheng', id: '101120804', name: '肥城' }, { enname: 'dong ping', id: '101120805', name: '东平' }, { enname: 'ning yang', id: '101120806', name: '宁阳' }]
  }, {
    enname: 'lin yi',
    id: '1209',
    name: '临沂',
    children: [{ enname: 'lin yi', id: '101120901', name: '临沂' }, { enname: 'ju nan', id: '101120902', name: '莒南' }, { enname: 'yi nan', id: '101120903', name: '沂南' }, { enname: 'lan ling', id: '101120904', name: '兰陵' }, { enname: 'lin shu', id: '101120905', name: '临沭' }, { enname: 'tan cheng', id: '101120906', name: '郯城' }, { enname: 'meng yin', id: '101120907', name: '蒙阴' }, { enname: 'ping yi', id: '101120908', name: '平邑' }, { enname: 'fei xian', id: '101120909', name: '费县' }, { enname: 'yi shui', id: '101120910', name: '沂水' }]
  }, {
    enname: 'he ze',
    id: '1210',
    name: '菏泽',
    children: [{ enname: 'he ze', id: '101121001', name: '菏泽' }, { enname: 'juan cheng', id: '101121002', name: '鄄城' }, { enname: 'yun cheng', id: '101121003', name: '郓城' }, { enname: 'dong ming', id: '101121004', name: '东明' }, { enname: 'ding tao', id: '101121005', name: '定陶' }, { enname: 'ju ye', id: '101121006', name: '巨野' }, { enname: 'cao xian', id: '101121007', name: '曹县' }, { enname: 'cheng wu', id: '101121008', name: '成武' }, { enname: 'dan xian', id: '101121009', name: '单县' }]
  }, {
    enname: 'bin zhou',
    id: '1211',
    name: '滨州',
    children: [{ enname: 'bin zhou', id: '101121101', name: '滨州' }, { enname: 'bo xing', id: '101121102', name: '博兴' }, { enname: 'wu di', id: '101121103', name: '无棣' }, { enname: 'yang xin', id: '101121104', name: '阳信' }, { enname: 'hui min', id: '101121105', name: '惠民' }, { enname: 'zhan hua', id: '101121106', name: '沾化' }, { enname: 'zou ping', id: '101121107', name: '邹平' }]
  }, {
    enname: 'dong ying',
    id: '1212',
    name: '东营',
    children: [{ enname: 'dong ying', id: '101121201', name: '东营' }, { enname: 'he kou', id: '101121202', name: '河口' }, { enname: 'ken li', id: '101121203', name: '垦利' }, { enname: 'li jin', id: '101121204', name: '利津' }, { enname: 'guang rao', id: '101121205', name: '广饶' }]
  }, {
    enname: 'wei hai',
    id: '1213',
    name: '威海',
    children: [{ enname: 'wei hai', id: '101121301', name: '威海' }, { enname: 'wen deng', id: '101121302', name: '文登' }, { enname: 'rong cheng', id: '101121303', name: '荣成' }, { enname: 'ru shan', id: '101121304', name: '乳山' }, { enname: 'cheng shan tou', id: '101121305', name: '成山头' }, { enname: 'shi dao', id: '101121306', name: '石岛' }]
  }, {
    enname: 'zao zhuang',
    id: '1214',
    name: '枣庄',
    children: [{ enname: 'zao zhuang', id: '101121401', name: '枣庄' }, { enname: 'xue cheng', id: '101121402', name: '薛城' }, { enname: 'yi cheng', id: '101121403', name: '峄城' }, { enname: 'tai er zhuang', id: '101121404', name: '台儿庄' }, { enname: 'teng zhou', id: '101121405', name: '滕州' }]
  }, {
    enname: 'ri zhao',
    id: '1215',
    name: '日照',
    children: [{ enname: 'ri zhao', id: '101121501', name: '日照' }, { enname: 'wu lian', id: '101121502', name: '五莲' }, { enname: 'ju xian', id: '101121503', name: '莒县' }]
  }, {
    enname: 'lai wu',
    id: '1216',
    name: '莱芜',
    children: [{ enname: 'lai wu', id: '101121601', name: '莱芜' }]
  }, {
    enname: 'liao cheng',
    id: '1217',
    name: '聊城',
    children: [{ enname: 'liao cheng', id: '101121701', name: '聊城' }, { enname: 'guan xian', id: '101121702', name: '冠县' }, { enname: 'yang gu', id: '101121703', name: '阳谷' }, { enname: 'gao tang', id: '101121704', name: '高唐' }, { enname: 'chi ping', id: '101121705', name: '茌平' }, { enname: 'dong a', id: '101121706', name: '东阿' }, { enname: 'lin qing', id: '101121707', name: '临清' }, { enname: 'shen xian', id: '101121709', name: '莘县' }]
  }]
}, {
  enname: 'xin jiang',
  id: '13',
  name: '新疆',
  children: [{
    enname: 'wu lu mu qi',
    id: '1301',
    name: '乌鲁木齐',
    children: [{ enname: 'wu lu mu qi', id: '101130101', name: '乌鲁木齐' }, { enname: 'xiao qu zi', id: '101130103', name: '小渠子' }, { enname: 'da ban cheng', id: '101130105', name: '达坂城' }, {
      enname: 'wu lu mu qi mu shi zhan',
      id: '101130108',
      name: '乌鲁木齐牧试站'
    }, { enname: 'tian chi', id: '101130109', name: '天池' }, { enname: 'bai yang gou', id: '101130110', name: '白杨沟' }]
  }, {
    enname: 'ke la ma yi',
    id: '1302',
    name: '克拉玛依',
    children: [{ enname: 'ke la ma yi', id: '101130201', name: '克拉玛依' }, { enname: 'wu er he', id: '101130202', name: '乌尔禾' }, { enname: 'bai jian tan', id: '101130203', name: '白碱滩' }]
  }, {
    enname: 'shi he zi',
    id: '1303',
    name: '石河子',
    children: [{ enname: 'shi he zi', id: '101130301', name: '石河子' }, { enname: 'pao tai', id: '101130302', name: '炮台' }, { enname: 'mo suo wan', id: '101130303', name: '莫索湾' }]
  }, {
    enname: 'chang ji',
    id: '1304',
    name: '昌吉',
    children: [{ enname: 'chang ji', id: '101130401', name: '昌吉' }, { enname: 'hu tu bi', id: '101130402', name: '呼图壁' }, { enname: 'mi quan', id: '101130403', name: '米泉' }, { enname: 'fu kang', id: '101130404', name: '阜康' }, { enname: 'ji mu sa er', id: '101130405', name: '吉木萨尔' }, { enname: 'qi tai', id: '101130406', name: '奇台' }, { enname: 'ma na si', id: '101130407', name: '玛纳斯' }, { enname: 'mu lei', id: '101130408', name: '木垒' }, { enname: 'cai jia hu', id: '101130409', name: '蔡家湖' }]
  }, {
    enname: 'tu lu fan',
    id: '1305',
    name: '吐鲁番',
    children: [{ enname: 'tu lu fan', id: '101130501', name: '吐鲁番' }, { enname: 'tuo ke xun', id: '101130502', name: '托克逊' }, { enname: 'shan shan', id: '101130504', name: '鄯善' }]
  }, {
    enname: 'ba yin guo leng',
    id: '1306',
    name: '巴音郭楞',
    children: [{ enname: 'ku er lei', id: '101130601', name: '库尔勒' }, { enname: 'lun tai', id: '101130602', name: '轮台' }, { enname: 'wei li', id: '101130603', name: '尉犁' }, { enname: 'ruo qiang', id: '101130604', name: '若羌' }, { enname: 'qie mo', id: '101130605', name: '且末' }, { enname: 'he jing', id: '101130606', name: '和静' }, { enname: 'yan qi', id: '101130607', name: '焉耆' }, { enname: 'he shuo', id: '101130608', name: '和硕' }, {
      enname: 'ba yin bu lu ke',
      id: '101130610',
      name: '巴音布鲁克'
    }, { enname: 'tie gan li ke', id: '101130611', name: '铁干里克' }, { enname: 'bo hu', id: '101130612', name: '博湖' }, { enname: 'ta zhong', id: '101130613', name: '塔中' }]
  }, {
    enname: 'a la er',
    id: '1307',
    name: '阿拉尔',
    children: [{ enname: 'a la er', id: '101130701', name: '阿拉尔' }]
  }, {
    enname: 'a ke su',
    id: '1308',
    name: '阿克苏',
    children: [{ enname: 'a ke su', id: '101130801', name: '阿克苏' }, { enname: 'wu shen', id: '101130802', name: '乌什' }, { enname: 'wen su', id: '101130803', name: '温宿' }, { enname: 'bai cheng', id: '101130804', name: '拜城' }, { enname: 'xin he', id: '101130805', name: '新和' }, { enname: 'sha ya', id: '101130806', name: '沙雅' }, { enname: 'ku che', id: '101130807', name: '库车' }, { enname: 'ke ping', id: '101130808', name: '柯坪' }, { enname: 'a wa ti', id: '101130809', name: '阿瓦提' }]
  }, {
    enname: 'ka shen',
    id: '1309',
    name: '喀什',
    children: [{ enname: 'ka shen', id: '101130901', name: '喀什' }, { enname: 'ying ji sha', id: '101130902', name: '英吉沙' }, {
      enname: 'ta shen ku er gan',
      id: '101130903',
      name: '塔什库尔干'
    }, { enname: 'mai gai ti', id: '101130904', name: '麦盖提' }, { enname: 'sha che', id: '101130905', name: '莎车' }, { enname: 'ye cheng', id: '101130906', name: '叶城' }, { enname: 'ze pu', id: '101130907', name: '泽普' }, { enname: 'ba chu', id: '101130908', name: '巴楚' }, { enname: 'yue pu hu', id: '101130909', name: '岳普湖' }, { enname: 'jia shi', id: '101130910', name: '伽师' }, { enname: 'shu fu', id: '101130911', name: '疏附' }, { enname: 'shu lei', id: '101130912', name: '疏勒' }]
  }, {
    enname: 'yi li',
    id: '1310',
    name: '伊犁',
    children: [{ enname: 'yi ning', id: '101131001', name: '伊宁' }, { enname: 'cha bu cha er', id: '101131002', name: '察布查尔' }, { enname: 'ni lei ke', id: '101131003', name: '尼勒克' }, { enname: 'yi ning xian', id: '101131004', name: '伊宁县' }, { enname: 'gong liu', id: '101131005', name: '巩留' }, { enname: 'xin yuan', id: '101131006', name: '新源' }, { enname: 'zhao su', id: '101131007', name: '昭苏' }, { enname: 'te ke si', id: '101131008', name: '特克斯' }, { enname: 'huo cheng', id: '101131009', name: '霍城' }, { enname: 'huo er guo si', id: '101131010', name: '霍尔果斯' }, { enname: 'kui tun', id: '101131011', name: '奎屯' }]
  }, {
    enname: 'ta cheng',
    id: '1311',
    name: '塔城',
    children: [{ enname: 'ta cheng', id: '101131101', name: '塔城' }, { enname: 'yu min', id: '101131102', name: '裕民' }, { enname: 'e min', id: '101131103', name: '额敏' }, {
      enname: 'he bu ke sai er',
      id: '101131104',
      name: '和布克赛尔'
    }, { enname: 'tuo li', id: '101131105', name: '托里' }, { enname: 'wu su', id: '101131106', name: '乌苏' }, { enname: 'sha wan', id: '101131107', name: '沙湾' }]
  }, {
    enname: 'ha mi',
    id: '1312',
    name: '哈密',
    children: [{ enname: 'ha mi', id: '101131201', name: '哈密' }, { enname: 'ba li kun', id: '101131203', name: '巴里坤' }, { enname: 'yi wu', id: '101131204', name: '伊吾' }]
  }, {
    enname: 'he tian',
    id: '1313',
    name: '和田',
    children: [{ enname: 'he tian', id: '101131301', name: '和田' }, { enname: 'pi shan', id: '101131302', name: '皮山' }, { enname: 'ce lei', id: '101131303', name: '策勒' }, { enname: 'mo yu', id: '101131304', name: '墨玉' }, { enname: 'luo pu', id: '101131305', name: '洛浦' }, { enname: 'min feng', id: '101131306', name: '民丰' }, { enname: 'yu tian', id: '101131307', name: '于田' }]
  }, {
    enname: 'a lei tai',
    id: '1314',
    name: '阿勒泰',
    children: [{ enname: 'a lei tai', id: '101131401', name: '阿勒泰' }, { enname: 'ha ba he', id: '101131402', name: '哈巴河' }, { enname: 'ji mu nai', id: '101131405', name: '吉木乃' }, { enname: 'bu er jin', id: '101131406', name: '布尔津' }, { enname: 'fu hai', id: '101131407', name: '福海' }, { enname: 'fu yun', id: '101131408', name: '富蕴' }, { enname: 'qing he', id: '101131409', name: '青河' }]
  }, {
    enname: 'ke zhou',
    id: '1315',
    name: '克州',
    children: [{ enname: 'a tu shen', id: '101131501', name: '阿图什' }, { enname: 'wu qia', id: '101131502', name: '乌恰' }, { enname: 'a ke tao', id: '101131503', name: '阿克陶' }, { enname: 'a he qi', id: '101131504', name: '阿合奇' }]
  }, {
    enname: 'bo er ta la',
    id: '1316',
    name: '博尔塔拉',
    children: [{ enname: 'bo le', id: '101131601', name: '博乐' }, { enname: 'wen quan', id: '101131602', name: '温泉' }, { enname: 'jing he', id: '101131603', name: '精河' }, { enname: 'a la shan kou', id: '101131606', name: '阿拉山口' }]
  }]
}, {
  enname: 'xi cang',
  id: '14',
  name: '西藏',
  children: [{
    enname: 'la sa',
    id: '1401',
    name: '拉萨',
    children: [{ enname: 'la sa', id: '101140101', name: '拉萨' }, { enname: 'dang xiong', id: '101140102', name: '当雄' }, { enname: 'ni mu', id: '101140103', name: '尼木' }, { enname: 'lin zhou', id: '101140104', name: '林周' }, {
      enname: 'dui long de qing',
      id: '101140105',
      name: '堆龙德庆'
    }, { enname: 'qu shui', id: '101140106', name: '曲水' }, { enname: 'da zi', id: '101140107', name: '达孜' }, { enname: 'mo zhu gong ka', id: '101140108', name: '墨竹工卡' }]
  }, {
    enname: 'ri ka ze',
    id: '1402',
    name: '日喀则',
    children: [{ enname: 'ri ka ze', id: '101140201', name: '日喀则' }, { enname: 'la zi', id: '101140202', name: '拉孜' }, { enname: 'nan mu lin', id: '101140203', name: '南木林' }, { enname: 'nie la mu', id: '101140204', name: '聂拉木' }, { enname: 'ding ri', id: '101140205', name: '定日' }, { enname: 'jiang zi', id: '101140206', name: '江孜' }, { enname: 'pa li', id: '101140207', name: '帕里' }, { enname: 'zhong ba', id: '101140208', name: '仲巴' }, { enname: 'sa ga', id: '101140209', name: '萨嘎' }, { enname: 'ji long', id: '101140210', name: '吉隆' }, { enname: 'ang ren', id: '101140211', name: '昂仁' }, { enname: 'ding jie', id: '101140212', name: '定结' }, { enname: 'sa jia', id: '101140213', name: '萨迦' }, { enname: 'xie tong men', id: '101140214', name: '谢通门' }, { enname: 'gang ba', id: '101140216', name: '岗巴' }, { enname: 'bai lang', id: '101140217', name: '白朗' }, { enname: 'ya dong', id: '101140218', name: '亚东' }, { enname: 'kang ma', id: '101140219', name: '康马' }, { enname: 'ren bu', id: '101140220', name: '仁布' }]
  }, {
    enname: 'shan nan',
    id: '1403',
    name: '山南',
    children: [{ enname: 'shan nan', id: '101140301', name: '山南' }, { enname: 'gong ga', id: '101140302', name: '贡嘎' }, { enname: 'zha nang', id: '101140303', name: '扎囊' }, { enname: 'jia cha', id: '101140304', name: '加查' }, { enname: 'lang ka zi', id: '101140305', name: '浪卡子' }, { enname: 'cuo na', id: '101140306', name: '错那' }, { enname: 'long zi', id: '101140307', name: '隆子' }, { enname: 'ze dang', id: '101140308', name: '泽当' }, { enname: 'nai dong', id: '101140309', name: '乃东' }, { enname: 'sang ri', id: '101140310', name: '桑日' }, { enname: 'luo zha', id: '101140311', name: '洛扎' }, { enname: 'cuo mei', id: '101140312', name: '措美' }, { enname: 'qiong jie', id: '101140313', name: '琼结' }, { enname: 'qu song', id: '101140314', name: '曲松' }]
  }, {
    enname: 'lin zhi',
    id: '1404',
    name: '林芝',
    children: [{ enname: 'lin zhi', id: '101140401', name: '林芝' }, { enname: 'bo mi', id: '101140402', name: '波密' }, { enname: 'mi lin', id: '101140403', name: '米林' }, { enname: 'cha yu', id: '101140404', name: '察隅' }, {
      enname: 'gong bu jiang da',
      id: '101140405',
      name: '工布江达'
    }, { enname: 'lang xian', id: '101140406', name: '朗县' }, { enname: 'mo tuo', id: '101140407', name: '墨脱' }]
  }, {
    enname: 'chang dou',
    id: '1405',
    name: '昌都',
    children: [{ enname: 'chang dou', id: '101140501', name: '昌都' }, { enname: 'ding qing', id: '101140502', name: '丁青' }, { enname: 'bian ba', id: '101140503', name: '边坝' }, { enname: 'luo long', id: '101140504', name: '洛隆' }, { enname: 'zuo gong', id: '101140505', name: '左贡' }, { enname: 'mang kang', id: '101140506', name: '芒康' }, { enname: 'lei wu qi', id: '101140507', name: '类乌齐' }, { enname: 'ba su', id: '101140508', name: '八宿' }, { enname: 'jiang da', id: '101140509', name: '江达' }, { enname: 'cha ya', id: '101140510', name: '察雅' }, { enname: 'gong jue', id: '101140511', name: '贡觉' }]
  }, {
    enname: 'na qu',
    id: '1406',
    name: '那曲',
    children: [{ enname: 'na qu', id: '101140601', name: '那曲' }, { enname: 'ni ma', id: '101140602', name: '尼玛' }, { enname: 'jia li', id: '101140603', name: '嘉黎' }, { enname: 'ban ge', id: '101140604', name: '班戈' }, { enname: 'an duo', id: '101140605', name: '安多' }, { enname: 'suo xian', id: '101140606', name: '索县' }, { enname: 'nie rong', id: '101140607', name: '聂荣' }, { enname: 'ba qing', id: '101140608', name: '巴青' }, { enname: 'bi ru', id: '101140609', name: '比如' }]
  }, {
    enname: 'a li',
    id: '1407',
    name: '阿里',
    children: [{ enname: 'a li', id: '101140701', name: '阿里' }, { enname: 'gai ze', id: '101140702', name: '改则' }, { enname: 'shen zha', id: '101140703', name: '申扎' }, { enname: 'shi quan he', id: '101140704', name: '狮泉河' }, { enname: 'pu lan', id: '101140705', name: '普兰' }, { enname: 'zha da', id: '101140706', name: '札达' }, { enname: 'ga er', id: '101140707', name: '噶尔' }, { enname: 'ri tu', id: '101140708', name: '日土' }, { enname: 'ge ji', id: '101140709', name: '革吉' }, { enname: 'cuo qin', id: '101140710', name: '措勤' }]
  }]
}, {
  enname: 'qing hai',
  id: '15',
  name: '青海',
  children: [{
    enname: 'xi ning',
    id: '1501',
    name: '西宁',
    children: [{ enname: 'xi ning', id: '101150101', name: '西宁' }, { enname: 'da tong', id: '101150102', name: '大通' }, { enname: 'huang yuan', id: '101150103', name: '湟源' }, { enname: 'huang zhong', id: '101150104', name: '湟中' }]
  }, {
    enname: 'hai dong',
    id: '1502',
    name: '海东',
    children: [{ enname: 'hai dong', id: '101150201', name: '海东' }, { enname: 'le dou', id: '101150202', name: '乐都' }, { enname: 'min he', id: '101150203', name: '民和' }, { enname: 'hu zhu', id: '101150204', name: '互助' }, { enname: 'hua long', id: '101150205', name: '化隆' }, { enname: 'xun hua', id: '101150206', name: '循化' }, { enname: 'leng hu', id: '101150207', name: '冷湖' }, { enname: 'ping an', id: '101150208', name: '平安' }]
  }, {
    enname: 'huang nan',
    id: '1503',
    name: '黄南',
    children: [{ enname: 'huang nan', id: '101150301', name: '黄南' }, { enname: 'jian zha', id: '101150302', name: '尖扎' }, { enname: 'ze ku', id: '101150303', name: '泽库' }, { enname: 'he nan', id: '101150304', name: '河南' }, { enname: 'tong ren', id: '101150305', name: '同仁' }]
  }, {
    enname: 'hai nan',
    id: '1504',
    name: '海南',
    children: [{ enname: 'hai nan', id: '101150401', name: '海南' }, { enname: 'gui de', id: '101150404', name: '贵德' }, { enname: 'xing hai', id: '101150406', name: '兴海' }, { enname: 'gui nan', id: '101150407', name: '贵南' }, { enname: 'tong de', id: '101150408', name: '同德' }, { enname: 'gong he', id: '101150409', name: '共和' }]
  }, {
    enname: 'guo luo',
    id: '1505',
    name: '果洛',
    children: [{ enname: 'guo luo', id: '101150501', name: '果洛' }, { enname: 'ban ma', id: '101150502', name: '班玛' }, { enname: 'gan de', id: '101150503', name: '甘德' }, { enname: 'da ri', id: '101150504', name: '达日' }, { enname: 'jiu zhi', id: '101150505', name: '久治' }, { enname: 'ma duo', id: '101150506', name: '玛多' }, { enname: 'ma qin', id: '101150508', name: '玛沁' }]
  }, {
    enname: 'yu shu',
    id: '1506',
    name: '玉树',
    children: [{ enname: 'yu shu', id: '101150601', name: '玉树' }, { enname: 'cheng duo', id: '101150602', name: '称多' }, { enname: 'zhi duo', id: '101150603', name: '治多' }, { enname: 'za duo', id: '101150604', name: '杂多' }, { enname: 'nang qian', id: '101150605', name: '囊谦' }, { enname: 'qu ma lai', id: '101150606', name: '曲麻莱' }]
  }, {
    enname: 'hai xi',
    id: '1507',
    name: '海西',
    children: [{ enname: 'hai xi', id: '101150701', name: '海西' }, { enname: 'tian jun', id: '101150708', name: '天峻' }, { enname: 'wu lan', id: '101150709', name: '乌兰' }, { enname: 'mang ya', id: '101150712', name: '茫崖' }, { enname: 'da chai dan', id: '101150713', name: '大柴旦' }, { enname: 'de ling ha', id: '101150716', name: '德令哈' }]
  }, {
    enname: 'hai bei',
    id: '1508',
    name: '海北',
    children: [{ enname: 'hai bei', id: '101150801', name: '海北' }, { enname: 'men yuan', id: '101150802', name: '门源' }, { enname: 'qi lian', id: '101150803', name: '祁连' }, { enname: 'hai yan', id: '101150804', name: '海晏' }, { enname: 'gang cha', id: '101150806', name: '刚察' }]
  }, {
    enname: 'ge er mu',
    id: '1509',
    name: '格尔木',
    children: [{ enname: 'ge er mu', id: '101150901', name: '格尔木' }, { enname: 'dou lan', id: '101150902', name: '都兰' }]
  }]
}, {
  enname: 'gan su',
  id: '16',
  name: '甘肃',
  children: [{
    enname: 'lan zhou',
    id: '1601',
    name: '兰州',
    children: [{ enname: 'lan zhou', id: '101160101', name: '兰州' }, { enname: 'gao lan', id: '101160102', name: '皋兰' }, { enname: 'yong deng', id: '101160103', name: '永登' }, { enname: 'yu zhong', id: '101160104', name: '榆中' }]
  }, {
    enname: 'ding xi',
    id: '1602',
    name: '定西',
    children: [{ enname: 'ding xi', id: '101160201', name: '定西' }, { enname: 'tong wei', id: '101160202', name: '通渭' }, { enname: 'long xi', id: '101160203', name: '陇西' }, { enname: 'wei yuan', id: '101160204', name: '渭源' }, { enname: 'lin tao', id: '101160205', name: '临洮' }, { enname: 'zhang xian', id: '101160206', name: '漳县' }, { enname: 'min xian', id: '101160207', name: '岷县' }, { enname: 'an ding', id: '101160208', name: '安定' }]
  }, {
    enname: 'ping liang',
    id: '1603',
    name: '平凉',
    children: [{ enname: 'ping liang', id: '101160301', name: '平凉' }, { enname: 'jing chuan', id: '101160302', name: '泾川' }, { enname: 'ling tai', id: '101160303', name: '灵台' }, { enname: 'chong xin', id: '101160304', name: '崇信' }, { enname: 'hua ting', id: '101160305', name: '华亭' }, { enname: 'zhuang lang', id: '101160306', name: '庄浪' }, { enname: 'jing ning', id: '101160307', name: '静宁' }, { enname: 'kong dong', id: '101160308', name: '崆峒' }]
  }, {
    enname: 'qing yang',
    id: '1604',
    name: '庆阳',
    children: [{ enname: 'qing yang', id: '101160401', name: '庆阳' }, { enname: 'xi feng', id: '101160402', name: '西峰' }, { enname: 'huan xian', id: '101160403', name: '环县' }, { enname: 'hua chi', id: '101160404', name: '华池' }, { enname: 'he shui', id: '101160405', name: '合水' }, { enname: 'zheng ning', id: '101160406', name: '正宁' }, { enname: 'ning xian', id: '101160407', name: '宁县' }, { enname: 'zhen yuan', id: '101160408', name: '镇原' }, { enname: 'qing cheng', id: '101160409', name: '庆城' }]
  }, {
    enname: 'wu wei',
    id: '1605',
    name: '武威',
    children: [{ enname: 'wu wei', id: '101160501', name: '武威' }, { enname: 'min qin', id: '101160502', name: '民勤' }, { enname: 'gu lang', id: '101160503', name: '古浪' }, { enname: 'tian zhu', id: '101160505', name: '天祝' }]
  }, {
    enname: 'jin chang',
    id: '1606',
    name: '金昌',
    children: [{ enname: 'jin chang', id: '101160601', name: '金昌' }, { enname: 'yong chang', id: '101160602', name: '永昌' }]
  }, {
    enname: 'zhang ye',
    id: '1607',
    name: '张掖',
    children: [{ enname: 'zhang ye', id: '101160701', name: '张掖' }, { enname: 'su nan', id: '101160702', name: '肃南' }, { enname: 'min le', id: '101160703', name: '民乐' }, { enname: 'lin ze', id: '101160704', name: '临泽' }, { enname: 'gao tai', id: '101160705', name: '高台' }, { enname: 'shan dan', id: '101160706', name: '山丹' }]
  }, {
    enname: 'jiu quan',
    id: '1608',
    name: '酒泉',
    children: [{ enname: 'jiu quan', id: '101160801', name: '酒泉' }, { enname: 'jin ta', id: '101160803', name: '金塔' }, { enname: 'a ke sai', id: '101160804', name: '阿克塞' }, { enname: 'gua zhou', id: '101160805', name: '瓜州' }, { enname: 'su bei', id: '101160806', name: '肃北' }, { enname: 'yu men', id: '101160807', name: '玉门' }, { enname: 'dun huang', id: '101160808', name: '敦煌' }]
  }, {
    enname: 'tian shui',
    id: '1609',
    name: '天水',
    children: [{ enname: 'tian shui', id: '101160901', name: '天水' }, { enname: 'qing shui', id: '101160903', name: '清水' }, { enname: 'qin an', id: '101160904', name: '秦安' }, { enname: 'gan gu', id: '101160905', name: '甘谷' }, { enname: 'wu shan', id: '101160906', name: '武山' }, { enname: 'zhang jia chuan', id: '101160907', name: '张家川' }, { enname: 'mai ji', id: '101160908', name: '麦积' }]
  }, {
    enname: 'long nan',
    id: '1610',
    name: '陇南',
    children: [{ enname: 'wu dou', id: '101161001', name: '武都' }, { enname: 'cheng xian', id: '101161002', name: '成县' }, { enname: 'wen xian', id: '101161003', name: '文县' }, { enname: 'dang chang', id: '101161004', name: '宕昌' }, { enname: 'kang xian', id: '101161005', name: '康县' }, { enname: 'xi he', id: '101161006', name: '西和' }, { enname: 'li xian', id: '101161007', name: '礼县' }, { enname: 'hui xian', id: '101161008', name: '徽县' }, { enname: 'liang dang', id: '101161009', name: '两当' }]
  }, {
    enname: 'lin xia',
    id: '1611',
    name: '临夏',
    children: [{ enname: 'lin xia', id: '101161101', name: '临夏' }, { enname: 'kang le', id: '101161102', name: '康乐' }, { enname: 'yong jing', id: '101161103', name: '永靖' }, { enname: 'guang he', id: '101161104', name: '广河' }, { enname: 'he zheng', id: '101161105', name: '和政' }, { enname: 'dong xiang', id: '101161106', name: '东乡' }, { enname: 'ji shi shan', id: '101161107', name: '积石山' }]
  }, {
    enname: 'gan nan',
    id: '1612',
    name: '甘南',
    children: [{ enname: 'he zuo', id: '101161201', name: '合作' }, { enname: 'lin tan', id: '101161202', name: '临潭' }, { enname: 'zhuo ni', id: '101161203', name: '卓尼' }, { enname: 'zhou qu', id: '101161204', name: '舟曲' }, { enname: 'die bu', id: '101161205', name: '迭部' }, { enname: 'ma qu', id: '101161206', name: '玛曲' }, { enname: 'lu qu', id: '101161207', name: '碌曲' }, { enname: 'xia he', id: '101161208', name: '夏河' }]
  }, {
    enname: 'bai yin',
    id: '1613',
    name: '白银',
    children: [{ enname: 'bai yin', id: '101161301', name: '白银' }, { enname: 'jing yuan', id: '101161302', name: '靖远' }, { enname: 'hui ning', id: '101161303', name: '会宁' }, { enname: 'ping chuan', id: '101161304', name: '平川' }, { enname: 'jing tai', id: '101161305', name: '景泰' }]
  }, {
    enname: 'jia yu guan',
    id: '1614',
    name: '嘉峪关',
    children: [{ enname: 'jia yu guan', id: '101161401', name: '嘉峪关' }]
  }]
}, {
  enname: 'ning xia',
  id: '17',
  name: '宁夏',
  children: [{
    enname: 'yin chuan',
    id: '1701',
    name: '银川',
    children: [{ enname: 'yin chuan', id: '101170101', name: '银川' }, { enname: 'yong ning', id: '101170102', name: '永宁' }, { enname: 'ling wu', id: '101170103', name: '灵武' }, { enname: 'he lan', id: '101170104', name: '贺兰' }]
  }, {
    enname: 'shi zui shan',
    id: '1702',
    name: '石嘴山',
    children: [{ enname: 'shi zui shan', id: '101170201', name: '石嘴山' }, { enname: 'hui nong', id: '101170202', name: '惠农' }, { enname: 'ping luo', id: '101170203', name: '平罗' }, { enname: 'tao le', id: '101170204', name: '陶乐' }]
  }, {
    enname: 'wu zhong',
    id: '1703',
    name: '吴忠',
    children: [{ enname: 'wu zhong', id: '101170301', name: '吴忠' }, { enname: 'tong xin', id: '101170302', name: '同心' }, { enname: 'yan chi', id: '101170303', name: '盐池' }, { enname: 'qing tong xia', id: '101170306', name: '青铜峡' }]
  }, {
    enname: 'gu yuan',
    id: '1704',
    name: '固原',
    children: [{ enname: 'gu yuan', id: '101170401', name: '固原' }, { enname: 'xi ji', id: '101170402', name: '西吉' }, { enname: 'long de', id: '101170403', name: '隆德' }, { enname: 'jing yuan', id: '101170404', name: '泾源' }, { enname: 'peng yang', id: '101170406', name: '彭阳' }]
  }, {
    enname: 'zhong wei',
    id: '1705',
    name: '中卫',
    children: [{ enname: 'zhong wei', id: '101170501', name: '中卫' }, { enname: 'zhong ning', id: '101170502', name: '中宁' }, { enname: 'hai yuan', id: '101170504', name: '海原' }]
  }]
}, {
  enname: 'he nan',
  id: '18',
  name: '河南',
  children: [{
    enname: 'zheng zhou',
    id: '1801',
    name: '郑州',
    children: [{ enname: 'zheng zhou', id: '101180101', name: '郑州' }, { enname: 'gong yi', id: '101180102', name: '巩义' }, { enname: 'xing yang', id: '101180103', name: '荥阳' }, { enname: 'deng feng', id: '101180104', name: '登封' }, { enname: 'xin mi', id: '101180105', name: '新密' }, { enname: 'xin zheng', id: '101180106', name: '新郑' }, { enname: 'zhong mou', id: '101180107', name: '中牟' }, { enname: 'shang jie', id: '101180108', name: '上街' }]
  }, {
    enname: 'an yang',
    id: '1802',
    name: '安阳',
    children: [{ enname: 'an yang', id: '101180201', name: '安阳' }, { enname: 'tang yin', id: '101180202', name: '汤阴' }, { enname: 'hua xian', id: '101180203', name: '滑县' }, { enname: 'nei huang', id: '101180204', name: '内黄' }, { enname: 'lin zhou', id: '101180205', name: '林州' }]
  }, {
    enname: 'xin xiang',
    id: '1803',
    name: '新乡',
    children: [{ enname: 'xin xiang', id: '101180301', name: '新乡' }, { enname: 'huo jia', id: '101180302', name: '获嘉' }, { enname: 'yuan yang', id: '101180303', name: '原阳' }, { enname: 'hui xian', id: '101180304', name: '辉县' }, { enname: 'wei hui', id: '101180305', name: '卫辉' }, { enname: 'yan jin', id: '101180306', name: '延津' }, { enname: 'feng qiu', id: '101180307', name: '封丘' }, { enname: 'chang yuan', id: '101180308', name: '长垣' }]
  }, {
    enname: 'xu chang',
    id: '1804',
    name: '许昌',
    children: [{ enname: 'xu chang', id: '101180401', name: '许昌' }, { enname: 'yan ling', id: '101180402', name: '鄢陵' }, { enname: 'xiang cheng', id: '101180403', name: '襄城' }, { enname: 'chang ge', id: '101180404', name: '长葛' }, { enname: 'yu zhou', id: '101180405', name: '禹州' }]
  }, {
    enname: 'ping ding shan',
    id: '1805',
    name: '平顶山',
    children: [{ enname: 'ping ding shan', id: '101180501', name: '平顶山' }, { enname: 'jia xian', id: '101180502', name: '郏县' }, { enname: 'bao feng', id: '101180503', name: '宝丰' }, { enname: 'ru zhou', id: '101180504', name: '汝州' }, { enname: 'ye xian', id: '101180505', name: '叶县' }, { enname: 'wu gang', id: '101180506', name: '舞钢' }, { enname: 'lu shan', id: '101180507', name: '鲁山' }, { enname: 'shi long', id: '101180508', name: '石龙' }]
  }, {
    enname: 'xin yang',
    id: '1806',
    name: '信阳',
    children: [{ enname: 'xin yang', id: '101180601', name: '信阳' }, { enname: 'xi xian', id: '101180602', name: '息县' }, { enname: 'luo shan', id: '101180603', name: '罗山' }, { enname: 'guang shan', id: '101180604', name: '光山' }, { enname: 'xin xian', id: '101180605', name: '新县' }, { enname: 'huai bin', id: '101180606', name: '淮滨' }, { enname: 'huang chuan', id: '101180607', name: '潢川' }, { enname: 'gu shi', id: '101180608', name: '固始' }, { enname: 'shang cheng', id: '101180609', name: '商城' }]
  }, {
    enname: 'nan yang',
    id: '1807',
    name: '南阳',
    children: [{ enname: 'nan yang', id: '101180701', name: '南阳' }, { enname: 'nan zhao', id: '101180702', name: '南召' }, { enname: 'fang cheng', id: '101180703', name: '方城' }, { enname: 'she qi', id: '101180704', name: '社旗' }, { enname: 'xi xia', id: '101180705', name: '西峡' }, { enname: 'nei xiang', id: '101180706', name: '内乡' }, { enname: 'zhen ping', id: '101180707', name: '镇平' }, { enname: 'xi chuan', id: '101180708', name: '淅川' }, { enname: 'xin ye', id: '101180709', name: '新野' }, { enname: 'tang he', id: '101180710', name: '唐河' }, { enname: 'deng zhou', id: '101180711', name: '邓州' }, { enname: 'tong bai', id: '101180712', name: '桐柏' }]
  }, {
    enname: 'kai feng',
    id: '1808',
    name: '开封',
    children: [{ enname: 'kai feng', id: '101180801', name: '开封' }, { enname: 'qi xian', id: '101180802', name: '杞县' }, { enname: 'wei shi', id: '101180803', name: '尉氏' }, { enname: 'tong xu', id: '101180804', name: '通许' }, { enname: 'lan kao', id: '101180805', name: '兰考' }]
  }, {
    enname: 'luo yang',
    id: '1809',
    name: '洛阳',
    children: [{ enname: 'luo yang', id: '101180901', name: '洛阳' }, { enname: 'xin an', id: '101180902', name: '新安' }, { enname: 'meng jin', id: '101180903', name: '孟津' }, { enname: 'yi yang', id: '101180904', name: '宜阳' }, { enname: 'luo ning', id: '101180905', name: '洛宁' }, { enname: 'yi chuan', id: '101180906', name: '伊川' }, { enname: 'song xian', id: '101180907', name: '嵩县' }, { enname: 'yan shi', id: '101180908', name: '偃师' }, { enname: 'luan chuan', id: '101180909', name: '栾川' }, { enname: 'ru yang', id: '101180910', name: '汝阳' }, { enname: 'ji li', id: '101180911', name: '吉利' }]
  }, {
    enname: 'shang qiu',
    id: '1810',
    name: '商丘',
    children: [{ enname: 'shang qiu', id: '101181001', name: '商丘' }, { enname: 'sui xian', id: '101181003', name: '睢县' }, { enname: 'min quan', id: '101181004', name: '民权' }, { enname: 'yu cheng', id: '101181005', name: '虞城' }, { enname: 'zhe cheng', id: '101181006', name: '柘城' }, { enname: 'ning ling', id: '101181007', name: '宁陵' }, { enname: 'xia yi', id: '101181008', name: '夏邑' }, { enname: 'yong cheng', id: '101181009', name: '永城' }]
  }, {
    enname: 'jiao zuo',
    id: '1811',
    name: '焦作',
    children: [{ enname: 'jiao zuo', id: '101181101', name: '焦作' }, { enname: 'xiu wu', id: '101181102', name: '修武' }, { enname: 'wu zhi', id: '101181103', name: '武陟' }, { enname: 'qin yang', id: '101181104', name: '沁阳' }, { enname: 'bo ai', id: '101181106', name: '博爱' }, { enname: 'wen xian', id: '101181107', name: '温县' }, { enname: 'meng zhou', id: '101181108', name: '孟州' }]
  }, {
    enname: 'he bi',
    id: '1812',
    name: '鹤壁',
    children: [{ enname: 'he bi', id: '101181201', name: '鹤壁' }, { enname: 'jun xian', id: '101181202', name: '浚县' }, { enname: 'qi xian', id: '101181203', name: '淇县' }]
  }, {
    enname: 'pu yang',
    id: '1813',
    name: '濮阳',
    children: [{ enname: 'pu yang', id: '101181301', name: '濮阳' }, { enname: 'tai qian', id: '101181302', name: '台前' }, { enname: 'nan le', id: '101181303', name: '南乐' }, { enname: 'qing feng', id: '101181304', name: '清丰' }, { enname: 'fan xian', id: '101181305', name: '范县' }]
  }, {
    enname: 'zhou kou',
    id: '1814',
    name: '周口',
    children: [{ enname: 'zhou kou', id: '101181401', name: '周口' }, { enname: 'fu gou', id: '101181402', name: '扶沟' }, { enname: 'tai kang', id: '101181403', name: '太康' }, { enname: 'huai yang', id: '101181404', name: '淮阳' }, { enname: 'xi hua', id: '101181405', name: '西华' }, { enname: 'shang shui', id: '101181406', name: '商水' }, { enname: 'xiang cheng', id: '101181407', name: '项城' }, { enname: 'dan cheng', id: '101181408', name: '郸城' }, { enname: 'lu yi', id: '101181409', name: '鹿邑' }, { enname: 'chen qiu', id: '101181410', name: '沈丘' }]
  }, {
    enname: 'luo he',
    id: '1815',
    name: '漯河',
    children: [{ enname: 'luo he', id: '101181501', name: '漯河' }, { enname: 'lin ying', id: '101181502', name: '临颍' }, { enname: 'wu yang', id: '101181503', name: '舞阳' }]
  }, {
    enname: 'zhu ma dian',
    id: '1816',
    name: '驻马店',
    children: [{ enname: 'zhu ma dian', id: '101181601', name: '驻马店' }, { enname: 'xi ping', id: '101181602', name: '西平' }, { enname: 'sui ping', id: '101181603', name: '遂平' }, { enname: 'shang cai', id: '101181604', name: '上蔡' }, { enname: 'ru nan', id: '101181605', name: '汝南' }, { enname: 'mi yang', id: '101181606', name: '泌阳' }, { enname: 'ping yu', id: '101181607', name: '平舆' }, { enname: 'xin cai', id: '101181608', name: '新蔡' }, { enname: 'que shan', id: '101181609', name: '确山' }, { enname: 'zheng yang', id: '101181610', name: '正阳' }]
  }, {
    enname: 'san men xia',
    id: '1817',
    name: '三门峡',
    children: [{ enname: 'san men xia', id: '101181701', name: '三门峡' }, { enname: 'ling bao', id: '101181702', name: '灵宝' }, { enname: 'mian chi', id: '101181703', name: '渑池' }, { enname: 'lu shi', id: '101181704', name: '卢氏' }, { enname: 'yi ma', id: '101181705', name: '义马' }, { enname: 'shan xian', id: '101181706', name: '陕县' }]
  }, {
    enname: 'ji yuan',
    id: '1818',
    name: '济源',
    children: [{ enname: 'ji yuan', id: '101181801', name: '济源' }]
  }]
}, {
  enname: 'jiang su',
  id: '19',
  name: '江苏',
  children: [{
    enname: 'nan jing',
    id: '1901',
    name: '南京',
    children: [{ enname: 'nan jing', id: '101190101', name: '南京' }, { enname: 'li shui', id: '101190102', name: '溧水' }, { enname: 'gao chun', id: '101190103', name: '高淳' }, { enname: 'jiang ning', id: '101190104', name: '江宁' }, { enname: 'liu he', id: '101190105', name: '六合' }, { enname: 'jiang pu', id: '101190106', name: '江浦' }, { enname: 'pu kou', id: '101190107', name: '浦口' }]
  }, {
    enname: 'wu xi',
    id: '1902',
    name: '无锡',
    children: [{ enname: 'wu xi', id: '101190201', name: '无锡' }, { enname: 'jiang yin', id: '101190202', name: '江阴' }, { enname: 'yi xing', id: '101190203', name: '宜兴' }, { enname: 'xi shan', id: '101190204', name: '锡山' }]
  }, {
    enname: 'zhen jiang',
    id: '1903',
    name: '镇江',
    children: [{ enname: 'zhen jiang', id: '101190301', name: '镇江' }, { enname: 'dan yang', id: '101190302', name: '丹阳' }, { enname: 'yang zhong', id: '101190303', name: '扬中' }, { enname: 'ju rong', id: '101190304', name: '句容' }, { enname: 'dan tu', id: '101190305', name: '丹徒' }]
  }, {
    enname: 'su zhou',
    id: '1904',
    name: '苏州',
    children: [{ enname: 'su zhou', id: '101190401', name: '苏州' }, { enname: 'chang shu', id: '101190402', name: '常熟' }, { enname: 'zhang jia gang', id: '101190403', name: '张家港' }, { enname: 'kun shan', id: '101190404', name: '昆山' }, { enname: 'wu zhong', id: '101190405', name: '吴中' }, { enname: 'wu jiang', id: '101190407', name: '吴江' }, { enname: 'tai cang', id: '101190408', name: '太仓' }]
  }, {
    enname: 'nan tong',
    id: '1905',
    name: '南通',
    children: [{ enname: 'nan tong', id: '101190501', name: '南通' }, { enname: 'hai an', id: '101190502', name: '海安' }, { enname: 'ru gao', id: '101190503', name: '如皋' }, { enname: 'ru dong', id: '101190504', name: '如东' }, { enname: 'qi dong', id: '101190507', name: '启东' }, { enname: 'hai men', id: '101190508', name: '海门' }, { enname: 'tong zhou', id: '101190509', name: '通州' }]
  }, {
    enname: 'yang zhou',
    id: '1906',
    name: '扬州',
    children: [{ enname: 'yang zhou', id: '101190601', name: '扬州' }, { enname: 'bao ying', id: '101190602', name: '宝应' }, { enname: 'yi zheng', id: '101190603', name: '仪征' }, { enname: 'gao you', id: '101190604', name: '高邮' }, { enname: 'jiang dou', id: '101190605', name: '江都' }, { enname: 'han jiang', id: '101190606', name: '邗江' }]
  }, {
    enname: 'yan cheng',
    id: '1907',
    name: '盐城',
    children: [{ enname: 'yan cheng', id: '101190701', name: '盐城' }, { enname: 'xiang shui', id: '101190702', name: '响水' }, { enname: 'bin hai', id: '101190703', name: '滨海' }, { enname: 'fu ning', id: '101190704', name: '阜宁' }, { enname: 'she yang', id: '101190705', name: '射阳' }, { enname: 'jian hu', id: '101190706', name: '建湖' }, { enname: 'dong tai', id: '101190707', name: '东台' }, { enname: 'da feng', id: '101190708', name: '大丰' }, { enname: 'yan dou', id: '101190709', name: '盐都' }]
  }, {
    enname: 'xu zhou',
    id: '1908',
    name: '徐州',
    children: [{ enname: 'xu zhou', id: '101190801', name: '徐州' }, { enname: 'tong shan', id: '101190802', name: '铜山' }, { enname: 'feng xian', id: '101190803', name: '丰县' }, { enname: 'pei xian', id: '101190804', name: '沛县' }, { enname: 'pi zhou', id: '101190805', name: '邳州' }, { enname: 'sui ning', id: '101190806', name: '睢宁' }, { enname: 'xin yi', id: '101190807', name: '新沂' }]
  }, {
    enname: 'huai an',
    id: '1909',
    name: '淮安',
    children: [{ enname: 'huai an', id: '101190901', name: '淮安' }, { enname: 'jin hu', id: '101190902', name: '金湖' }, { enname: 'xu yi', id: '101190903', name: '盱眙' }, { enname: 'hong ze', id: '101190904', name: '洪泽' }, { enname: 'lian shui', id: '101190905', name: '涟水' }, { enname: 'huai yin qu', id: '101190906', name: '淮阴区' }, { enname: 'huai an qu', id: '101190908', name: '淮安区' }]
  }, {
    enname: 'lian yun gang',
    id: '1910',
    name: '连云港',
    children: [{ enname: 'lian yun gang', id: '101191001', name: '连云港' }, { enname: 'dong hai', id: '101191002', name: '东海' }, { enname: 'gan yu', id: '101191003', name: '赣榆' }, { enname: 'guan yun', id: '101191004', name: '灌云' }, { enname: 'guan nan', id: '101191005', name: '灌南' }]
  }, {
    enname: 'chang zhou',
    id: '1911',
    name: '常州',
    children: [{ enname: 'chang zhou', id: '101191101', name: '常州' }, { enname: 'li yang', id: '101191102', name: '溧阳' }, { enname: 'jin tan', id: '101191103', name: '金坛' }, { enname: 'wu jin', id: '101191104', name: '武进' }]
  }, {
    enname: 'tai zhou',
    id: '1912',
    name: '泰州',
    children: [{ enname: 'tai zhou', id: '101191201', name: '泰州' }, { enname: 'xing hua', id: '101191202', name: '兴化' }, { enname: 'tai xing', id: '101191203', name: '泰兴' }, { enname: 'jiang yan', id: '101191204', name: '姜堰' }, { enname: 'jing jiang', id: '101191205', name: '靖江' }]
  }, {
    enname: 'su qian',
    id: '1913',
    name: '宿迁',
    children: [{ enname: 'su qian', id: '101191301', name: '宿迁' }, { enname: 'shu yang', id: '101191302', name: '沭阳' }, { enname: 'si yang', id: '101191303', name: '泗阳' }, { enname: 'si hong', id: '101191304', name: '泗洪' }, { enname: 'su yu', id: '101191305', name: '宿豫' }]
  }]
}, {
  enname: 'hu bei',
  id: '20',
  name: '湖北',
  children: [{
    enname: 'wu han',
    id: '2001',
    name: '武汉',
    children: [{ enname: 'wu han', id: '101200101', name: '武汉' }, { enname: 'cai dian', id: '101200102', name: '蔡甸' }, { enname: 'huang bei', id: '101200103', name: '黄陂' }, { enname: 'xin zhou', id: '101200104', name: '新洲' }, { enname: 'jiang xia', id: '101200105', name: '江夏' }, { enname: 'dong xi hu', id: '101200106', name: '东西湖' }]
  }, {
    enname: 'xiang yang',
    id: '2002',
    name: '襄阳',
    children: [{ enname: 'xiang yang', id: '101200201', name: '襄阳' }, { enname: 'xiang zhou', id: '101200202', name: '襄州' }, { enname: 'bao kang', id: '101200203', name: '保康' }, { enname: 'nan zhang', id: '101200204', name: '南漳' }, { enname: 'yi cheng', id: '101200205', name: '宜城' }, { enname: 'lao he kou', id: '101200206', name: '老河口' }, { enname: 'gu cheng', id: '101200207', name: '谷城' }, { enname: 'zao yang', id: '101200208', name: '枣阳' }]
  }, {
    enname: 'e zhou',
    id: '2003',
    name: '鄂州',
    children: [{ enname: 'e zhou', id: '101200301', name: '鄂州' }, { enname: 'liang zi hu', id: '101200302', name: '梁子湖' }]
  }, {
    enname: 'xiao gan',
    id: '2004',
    name: '孝感',
    children: [{ enname: 'xiao gan', id: '101200401', name: '孝感' }, { enname: 'an lu', id: '101200402', name: '安陆' }, { enname: 'yun meng', id: '101200403', name: '云梦' }, { enname: 'da wu', id: '101200404', name: '大悟' }, { enname: 'ying cheng', id: '101200405', name: '应城' }, { enname: 'han chuan', id: '101200406', name: '汉川' }, { enname: 'xiao chang', id: '101200407', name: '孝昌' }]
  }, {
    enname: 'huang gang',
    id: '2005',
    name: '黄冈',
    children: [{ enname: 'huang gang', id: '101200501', name: '黄冈' }, { enname: 'hong an', id: '101200502', name: '红安' }, { enname: 'ma cheng', id: '101200503', name: '麻城' }, { enname: 'luo tian', id: '101200504', name: '罗田' }, { enname: 'ying shan', id: '101200505', name: '英山' }, { enname: 'xi shui', id: '101200506', name: '浠水' }, { enname: 'qi chun', id: '101200507', name: '蕲春' }, { enname: 'huang mei', id: '101200508', name: '黄梅' }, { enname: 'wu xue', id: '101200509', name: '武穴' }, { enname: 'tuan feng', id: '101200510', name: '团风' }]
  }, {
    enname: 'huang shi',
    id: '2006',
    name: '黄石',
    children: [{ enname: 'huang shi', id: '101200601', name: '黄石' }, { enname: 'da ye', id: '101200602', name: '大冶' }, { enname: 'yang xin', id: '101200603', name: '阳新' }, { enname: 'tie shan', id: '101200604', name: '铁山' }, { enname: 'xia lu', id: '101200605', name: '下陆' }, { enname: 'xi sai shan', id: '101200606', name: '西塞山' }]
  }, {
    enname: 'xian ning',
    id: '2007',
    name: '咸宁',
    children: [{ enname: 'xian ning', id: '101200701', name: '咸宁' }, { enname: 'chi bi', id: '101200702', name: '赤壁' }, { enname: 'jia yu', id: '101200703', name: '嘉鱼' }, { enname: 'chong yang', id: '101200704', name: '崇阳' }, { enname: 'tong cheng', id: '101200705', name: '通城' }, { enname: 'tong shan', id: '101200706', name: '通山' }]
  }, {
    enname: 'jing zhou',
    id: '2008',
    name: '荆州',
    children: [{ enname: 'jing zhou', id: '101200801', name: '荆州' }, { enname: 'jiang ling', id: '101200802', name: '江陵' }, { enname: 'gong an', id: '101200803', name: '公安' }, { enname: 'shi shou', id: '101200804', name: '石首' }, { enname: 'jian li', id: '101200805', name: '监利' }, { enname: 'hong hu', id: '101200806', name: '洪湖' }, { enname: 'song zi', id: '101200807', name: '松滋' }, { enname: 'sha shi', id: '101201406', name: '沙市' }]
  }, {
    enname: 'yi chang',
    id: '2009',
    name: '宜昌',
    children: [{ enname: 'yi chang', id: '101200901', name: '宜昌' }, { enname: 'yuan an', id: '101200902', name: '远安' }, { enname: 'zi gui', id: '101200903', name: '秭归' }, { enname: 'xing shan', id: '101200904', name: '兴山' }, { enname: 'wu feng', id: '101200906', name: '五峰' }, { enname: 'dang yang', id: '101200907', name: '当阳' }, { enname: 'chang yang', id: '101200908', name: '长阳' }, { enname: 'yi dou', id: '101200909', name: '宜都' }, { enname: 'zhi jiang', id: '101200910', name: '枝江' }, { enname: 'san xia', id: '101200911', name: '三峡' }, { enname: 'yi ling', id: '101200912', name: '夷陵' }]
  }, {
    enname: 'en shi',
    id: '2010',
    name: '恩施',
    children: [{ enname: 'en shi', id: '101201001', name: '恩施' }, { enname: 'li chuan', id: '101201002', name: '利川' }, { enname: 'jian shi', id: '101201003', name: '建始' }, { enname: 'xian feng', id: '101201004', name: '咸丰' }, { enname: 'xuan en', id: '101201005', name: '宣恩' }, { enname: 'he feng', id: '101201006', name: '鹤峰' }, { enname: 'lai feng', id: '101201007', name: '来凤' }, { enname: 'ba dong', id: '101201008', name: '巴东' }]
  }, {
    enname: 'shi yan',
    id: '2011',
    name: '十堰',
    children: [{ enname: 'shi yan', id: '101201101', name: '十堰' }, { enname: 'zhu xi', id: '101201102', name: '竹溪' }, { enname: 'yun xi', id: '101201103', name: '郧西' }, { enname: 'yun xian', id: '101201104', name: '郧县' }, { enname: 'zhu shan', id: '101201105', name: '竹山' }, { enname: 'fang xian', id: '101201106', name: '房县' }, { enname: 'dan jiang kou', id: '101201107', name: '丹江口' }, { enname: 'mao jian', id: '101201108', name: '茅箭' }, { enname: 'zhang wan', id: '101201109', name: '张湾' }]
  }, {
    enname: 'shen nong jia',
    id: '2012',
    name: '神农架',
    children: [{ enname: 'shen nong jia', id: '101201201', name: '神农架' }]
  }, {
    enname: 'sui zhou',
    id: '2013',
    name: '随州',
    children: [{ enname: 'sui zhou', id: '101201301', name: '随州' }, { enname: 'guang shui', id: '101201302', name: '广水' }]
  }, {
    enname: 'jing men',
    id: '2014',
    name: '荆门',
    children: [{ enname: 'jing men', id: '101201401', name: '荆门' }, { enname: 'zhong xiang', id: '101201402', name: '钟祥' }, { enname: 'jing shan', id: '101201403', name: '京山' }, { enname: 'duo dao', id: '101201404', name: '掇刀' }, { enname: 'sha yang', id: '101201405', name: '沙洋' }]
  }, {
    enname: 'tian men',
    id: '2015',
    name: '天门',
    children: [{ enname: 'tian men', id: '101201501', name: '天门' }]
  }, {
    enname: 'xian tao',
    id: '2016',
    name: '仙桃',
    children: [{ enname: 'xian tao', id: '101201601', name: '仙桃' }]
  }, {
    enname: 'qian jiang',
    id: '2017',
    name: '潜江',
    children: [{ enname: 'qian jiang', id: '101201701', name: '潜江' }]
  }]
}, {
  enname: 'zhe jiang',
  id: '21',
  name: '浙江',
  children: [{
    enname: 'hang zhou',
    id: '2101',
    name: '杭州',
    children: [{ enname: 'hang zhou', id: '101210101', name: '杭州' }, { enname: 'xiao shan', id: '101210102', name: '萧山' }, { enname: 'tong lu', id: '101210103', name: '桐庐' }, { enname: 'chun an', id: '101210104', name: '淳安' }, { enname: 'jian de', id: '101210105', name: '建德' }, { enname: 'yu hang', id: '101210106', name: '余杭' }, { enname: 'lin an', id: '101210107', name: '临安' }, { enname: 'fu yang', id: '101210108', name: '富阳' }]
  }, {
    enname: 'hu zhou',
    id: '2102',
    name: '湖州',
    children: [{ enname: 'hu zhou', id: '101210201', name: '湖州' }, { enname: 'chang xing', id: '101210202', name: '长兴' }, { enname: 'an ji', id: '101210203', name: '安吉' }, { enname: 'de qing', id: '101210204', name: '德清' }]
  }, {
    enname: 'jia xing',
    id: '2103',
    name: '嘉兴',
    children: [{ enname: 'jia xing', id: '101210301', name: '嘉兴' }, { enname: 'jia shan', id: '101210302', name: '嘉善' }, { enname: 'hai ning', id: '101210303', name: '海宁' }, { enname: 'tong xiang', id: '101210304', name: '桐乡' }, { enname: 'ping hu', id: '101210305', name: '平湖' }, { enname: 'hai yan', id: '101210306', name: '海盐' }]
  }, {
    enname: 'ning bo',
    id: '2104',
    name: '宁波',
    children: [{ enname: 'ning bo', id: '101210401', name: '宁波' }, { enname: 'ci xi', id: '101210403', name: '慈溪' }, { enname: 'yu yao', id: '101210404', name: '余姚' }, { enname: 'feng hua', id: '101210405', name: '奉化' }, { enname: 'xiang shan', id: '101210406', name: '象山' }, { enname: 'ning hai', id: '101210408', name: '宁海' }, { enname: 'bei lun', id: '101210410', name: '北仑' }, { enname: 'yin zhou', id: '101210411', name: '鄞州' }]
  }, {
    enname: 'shao xing',
    id: '2105',
    name: '绍兴',
    children: [{ enname: 'shao xing', id: '101210501', name: '绍兴' }, { enname: 'zhu ji', id: '101210502', name: '诸暨' }, { enname: 'shang yu', id: '101210503', name: '上虞' }, { enname: 'xin chang', id: '101210504', name: '新昌' }, { enname: 'sheng zhou', id: '101210505', name: '嵊州' }]
  }, {
    enname: 'tai zhou',
    id: '2106',
    name: '台州',
    children: [{ enname: 'tai zhou', id: '101210601', name: '台州' }, { enname: 'yu huan', id: '101210603', name: '玉环' }, { enname: 'san men', id: '101210604', name: '三门' }, { enname: 'tian tai', id: '101210605', name: '天台' }, { enname: 'xian ju', id: '101210606', name: '仙居' }, { enname: 'wen ling', id: '101210607', name: '温岭' }, { enname: 'hong jia', id: '101210609', name: '洪家' }, { enname: 'lin hai', id: '101210610', name: '临海' }, { enname: 'jiao jiang', id: '101210611', name: '椒江' }, { enname: 'huang yan', id: '101210612', name: '黄岩' }, { enname: 'lu qiao', id: '101210613', name: '路桥' }]
  }, {
    enname: 'wen zhou',
    id: '2107',
    name: '温州',
    children: [{ enname: 'wen zhou', id: '101210701', name: '温州' }, { enname: 'tai shun', id: '101210702', name: '泰顺' }, { enname: 'wen cheng', id: '101210703', name: '文成' }, { enname: 'ping yang', id: '101210704', name: '平阳' }, { enname: 'rui an', id: '101210705', name: '瑞安' }, { enname: 'dong tou', id: '101210706', name: '洞头' }, { enname: 'le qing', id: '101210707', name: '乐清' }, { enname: 'yong jia', id: '101210708', name: '永嘉' }, { enname: 'cang nan', id: '101210709', name: '苍南' }]
  }, {
    enname: 'li shui',
    id: '2108',
    name: '丽水',
    children: [{ enname: 'li shui', id: '101210801', name: '丽水' }, { enname: 'sui chang', id: '101210802', name: '遂昌' }, { enname: 'long quan', id: '101210803', name: '龙泉' }, { enname: 'jin yun', id: '101210804', name: '缙云' }, { enname: 'qing tian', id: '101210805', name: '青田' }, { enname: 'yun he', id: '101210806', name: '云和' }, { enname: 'qing yuan', id: '101210807', name: '庆元' }, { enname: 'song yang', id: '101210808', name: '松阳' }, { enname: 'jing ning', id: '101210809', name: '景宁' }]
  }, {
    enname: 'jin hua',
    id: '2109',
    name: '金华',
    children: [{ enname: 'jin hua', id: '101210901', name: '金华' }, { enname: 'pu jiang', id: '101210902', name: '浦江' }, { enname: 'lan xi', id: '101210903', name: '兰溪' }, { enname: 'yi wu', id: '101210904', name: '义乌' }, { enname: 'dong yang', id: '101210905', name: '东阳' }, { enname: 'wu yi', id: '101210906', name: '武义' }, { enname: 'yong kang', id: '101210907', name: '永康' }, { enname: 'pan an', id: '101210908', name: '磐安' }]
  }, {
    enname: 'qu zhou',
    id: '2110',
    name: '衢州',
    children: [{ enname: 'qu zhou', id: '101211001', name: '衢州' }, { enname: 'chang shan', id: '101211002', name: '常山' }, { enname: 'kai hua', id: '101211003', name: '开化' }, { enname: 'long you', id: '101211004', name: '龙游' }, { enname: 'jiang shan', id: '101211005', name: '江山' }, { enname: 'qu jiang', id: '101211006', name: '衢江' }]
  }, {
    enname: 'zhou shan',
    id: '2111',
    name: '舟山',
    children: [{ enname: 'zhou shan', id: '101211101', name: '舟山' }, { enname: 'sheng si', id: '101211102', name: '嵊泗' }, { enname: 'dai shan', id: '101211104', name: '岱山' }, { enname: 'pu tuo', id: '101211105', name: '普陀' }, { enname: 'ding hai', id: '101211106', name: '定海' }]
  }]
}, {
  enname: 'an hui',
  id: '22',
  name: '安徽',
  children: [{
    enname: 'he fei',
    id: '2201',
    name: '合肥',
    children: [{ enname: 'he fei', id: '101220101', name: '合肥' }, { enname: 'chang feng', id: '101220102', name: '长丰' }, { enname: 'fei dong', id: '101220103', name: '肥东' }, { enname: 'fei xi', id: '101220104', name: '肥西' }]
  }, {
    enname: 'bang bu',
    id: '2202',
    name: '蚌埠',
    children: [{ enname: 'bang bu', id: '101220201', name: '蚌埠' }, { enname: 'huai yuan', id: '101220202', name: '怀远' }, { enname: 'gu zhen', id: '101220203', name: '固镇' }, { enname: 'wu he', id: '101220204', name: '五河' }]
  }, {
    enname: 'wu hu',
    id: '2203',
    name: '芜湖',
    children: [{ enname: 'wu hu', id: '101220301', name: '芜湖' }, { enname: 'fan chang', id: '101220302', name: '繁昌' }, { enname: 'wu hu xian', id: '101220303', name: '芜湖县' }, { enname: 'nan ling', id: '101220304', name: '南陵' }, { enname: 'wu wei xian', id: '101220305', name: '无为县' }]
  }, {
    enname: 'huai nan',
    id: '2204',
    name: '淮南',
    children: [{ enname: 'huai nan', id: '101220401', name: '淮南' }, { enname: 'feng tai', id: '101220402', name: '凤台' }, { enname: 'pan ji', id: '101220403', name: '潘集' }]
  }, {
    enname: 'ma an shan',
    id: '2205',
    name: '马鞍山',
    children: [{ enname: 'ma an shan', id: '101220501', name: '马鞍山' }, { enname: 'dang tu', id: '101220502', name: '当涂' }, { enname: 'he xian', id: '101221605', name: '和县' }]
  }, {
    enname: 'an qing',
    id: '2206',
    name: '安庆',
    children: [{ enname: 'an qing', id: '101220601', name: '安庆' }, { enname: 'cong yang', id: '101220602', name: '枞阳' }, { enname: 'tai hu', id: '101220603', name: '太湖' }, { enname: 'qian shan', id: '101220604', name: '潜山' }, { enname: 'huai ning', id: '101220605', name: '怀宁' }, { enname: 'su song', id: '101220606', name: '宿松' }, { enname: 'wang jiang', id: '101220607', name: '望江' }, { enname: 'yue xi', id: '101220608', name: '岳西' }, { enname: 'tong cheng', id: '101220609', name: '桐城' }]
  }, {
    enname: 'su zhou',
    id: '2207',
    name: '宿州',
    children: [{ enname: 'su zhou', id: '101220701', name: '宿州' }, { enname: 'dang shan', id: '101220702', name: '砀山' }, { enname: 'ling bi', id: '101220703', name: '灵璧' }, { enname: 'si xian', id: '101220704', name: '泗县' }, { enname: 'xiao xian', id: '101220705', name: '萧县' }]
  }, {
    enname: 'fu yang',
    id: '2208',
    name: '阜阳',
    children: [{ enname: 'fu yang', id: '101220801', name: '阜阳' }, { enname: 'fu nan', id: '101220802', name: '阜南' }, { enname: 'ying shang', id: '101220803', name: '颍上' }, { enname: 'lin quan', id: '101220804', name: '临泉' }, { enname: 'jie shou', id: '101220805', name: '界首' }, { enname: 'tai he', id: '101220806', name: '太和' }]
  }, {
    enname: 'bo zhou',
    id: '2209',
    name: '亳州',
    children: [{ enname: 'bo zhou', id: '101220901', name: '亳州' }, { enname: 'wo yang', id: '101220902', name: '涡阳' }, { enname: 'li xin', id: '101220903', name: '利辛' }, { enname: 'meng cheng', id: '101220904', name: '蒙城' }]
  }, {
    enname: 'huang shan',
    id: '2210',
    name: '黄山',
    children: [{ enname: 'huang shan shi', id: '101221001', name: '黄山市' }, { enname: 'huang shan qu', id: '101221002', name: '黄山区' }, { enname: 'tun xi', id: '101221003', name: '屯溪' }, { enname: 'qi men', id: '101221004', name: '祁门' }, { enname: 'yi xian', id: '101221005', name: '黟县' }, { enname: 'she xian', id: '101221006', name: '歙县' }, { enname: 'xiu ning', id: '101221007', name: '休宁' }, {
      enname: 'huang shan feng jing qu',
      id: '101221008',
      name: '黄山风景区'
    }]
  }, {
    enname: 'chu zhou',
    id: '2211',
    name: '滁州',
    children: [{ enname: 'chu zhou', id: '101221101', name: '滁州' }, { enname: 'feng yang', id: '101221102', name: '凤阳' }, { enname: 'ming guang', id: '101221103', name: '明光' }, { enname: 'ding yuan', id: '101221104', name: '定远' }, { enname: 'quan jiao', id: '101221105', name: '全椒' }, { enname: 'lai an', id: '101221106', name: '来安' }, { enname: 'tian zhang', id: '101221107', name: '天长' }]
  }, {
    enname: 'huai bei',
    id: '2212',
    name: '淮北',
    children: [{ enname: 'huai bei', id: '101221201', name: '淮北' }, { enname: 'sui xi', id: '101221202', name: '濉溪' }]
  }, {
    enname: 'tong ling',
    id: '2213',
    name: '铜陵',
    children: [{ enname: 'tong ling', id: '101221301', name: '铜陵' }]
  }, {
    enname: 'xuan cheng',
    id: '2214',
    name: '宣城',
    children: [{ enname: 'xuan cheng', id: '101221401', name: '宣城' }, { enname: 'jing xian', id: '101221402', name: '泾县' }, { enname: 'jing de', id: '101221403', name: '旌德' }, { enname: 'ning guo', id: '101221404', name: '宁国' }, { enname: 'ji xi', id: '101221405', name: '绩溪' }, { enname: 'guang de', id: '101221406', name: '广德' }, { enname: 'lang xi', id: '101221407', name: '郎溪' }]
  }, {
    enname: 'liu an',
    id: '2215',
    name: '六安',
    children: [{ enname: 'liu an', id: '101221501', name: '六安' }, { enname: 'huo qiu', id: '101221502', name: '霍邱' }, { enname: 'shou xian', id: '101221503', name: '寿县' }, { enname: 'jin zhai', id: '101221505', name: '金寨' }, { enname: 'huo shan', id: '101221506', name: '霍山' }, { enname: 'shu cheng', id: '101221507', name: '舒城' }]
  }, {
    enname: 'chi zhou',
    id: '2217',
    name: '池州',
    children: [{ enname: 'chi zhou', id: '101221701', name: '池州' }, { enname: 'dong zhi', id: '101221702', name: '东至' }, { enname: 'qing yang', id: '101221703', name: '青阳' }, { enname: 'jiu hua shan', id: '101221704', name: '九华山' }, { enname: 'shi tai', id: '101221705', name: '石台' }]
  }]
}, {
  enname: 'fu jian',
  id: '23',
  name: '福建',
  children: [{
    enname: 'fu zhou',
    id: '2301',
    name: '福州',
    children: [{ enname: 'fu zhou', id: '101230101', name: '福州' }, { enname: 'min qing', id: '101230102', name: '闽清' }, { enname: 'min hou', id: '101230103', name: '闽侯' }, { enname: 'luo yuan', id: '101230104', name: '罗源' }, { enname: 'lian jiang', id: '101230105', name: '连江' }, { enname: 'yong tai', id: '101230107', name: '永泰' }, { enname: 'ping tan', id: '101230108', name: '平潭' }, { enname: 'chang le', id: '101230110', name: '长乐' }, { enname: 'fu qing', id: '101230111', name: '福清' }]
  }, {
    enname: 'sha men',
    id: '2302',
    name: '厦门',
    children: [{ enname: 'sha men', id: '101230201', name: '厦门' }, { enname: 'tong an', id: '101230202', name: '同安' }]
  }, {
    enname: 'ning de',
    id: '2303',
    name: '宁德',
    children: [{ enname: 'ning de', id: '101230301', name: '宁德' }, { enname: 'gu tian', id: '101230302', name: '古田' }, { enname: 'xia pu', id: '101230303', name: '霞浦' }, { enname: 'shou ning', id: '101230304', name: '寿宁' }, { enname: 'zhou ning', id: '101230305', name: '周宁' }, { enname: 'fu an', id: '101230306', name: '福安' }, { enname: 'zhe rong', id: '101230307', name: '柘荣' }, { enname: 'fu ding', id: '101230308', name: '福鼎' }, { enname: 'ping nan', id: '101230309', name: '屏南' }]
  }, {
    enname: 'pu tian',
    id: '2304',
    name: '莆田',
    children: [{ enname: 'pu tian', id: '101230401', name: '莆田' }, { enname: 'xian you', id: '101230402', name: '仙游' }, { enname: 'xiu yu gang', id: '101230403', name: '秀屿港' }, { enname: 'han jiang', id: '101230404', name: '涵江' }, { enname: 'xiu yu', id: '101230405', name: '秀屿' }, { enname: 'li cheng', id: '101230406', name: '荔城' }, { enname: 'cheng xiang', id: '101230407', name: '城厢' }]
  }, {
    enname: 'quan zhou',
    id: '2305',
    name: '泉州',
    children: [{ enname: 'quan zhou', id: '101230501', name: '泉州' }, { enname: 'an xi', id: '101230502', name: '安溪' }, { enname: 'yong chun', id: '101230504', name: '永春' }, { enname: 'de hua', id: '101230505', name: '德化' }, { enname: 'nan an', id: '101230506', name: '南安' }, { enname: 'chong wu', id: '101230507', name: '崇武' }, { enname: 'hui an', id: '101230508', name: '惠安' }, { enname: 'jin jiang', id: '101230509', name: '晋江' }, { enname: 'shi shi', id: '101230510', name: '石狮' }]
  }, {
    enname: 'zhang zhou',
    id: '2306',
    name: '漳州',
    children: [{ enname: 'zhang zhou', id: '101230601', name: '漳州' }, { enname: 'chang tai', id: '101230602', name: '长泰' }, { enname: 'nan jing', id: '101230603', name: '南靖' }, { enname: 'ping he', id: '101230604', name: '平和' }, { enname: 'long hai', id: '101230605', name: '龙海' }, { enname: 'zhang pu', id: '101230606', name: '漳浦' }, { enname: 'zhao an', id: '101230607', name: '诏安' }, { enname: 'dong shan', id: '101230608', name: '东山' }, { enname: 'yun xiao', id: '101230609', name: '云霄' }, { enname: 'hua an', id: '101230610', name: '华安' }]
  }, {
    enname: 'long yan',
    id: '2307',
    name: '龙岩',
    children: [{ enname: 'long yan', id: '101230701', name: '龙岩' }, { enname: 'chang ting', id: '101230702', name: '长汀' }, { enname: 'lian cheng', id: '101230703', name: '连城' }, { enname: 'wu ping', id: '101230704', name: '武平' }, { enname: 'shang hang', id: '101230705', name: '上杭' }, { enname: 'yong ding', id: '101230706', name: '永定' }, { enname: 'zhang ping', id: '101230707', name: '漳平' }]
  }, {
    enname: 'san ming',
    id: '2308',
    name: '三明',
    children: [{ enname: 'san ming', id: '101230801', name: '三明' }, { enname: 'ning hua', id: '101230802', name: '宁化' }, { enname: 'qing liu', id: '101230803', name: '清流' }, { enname: 'tai ning', id: '101230804', name: '泰宁' }, { enname: 'jiang le', id: '101230805', name: '将乐' }, { enname: 'jian ning', id: '101230806', name: '建宁' }, { enname: 'ming xi', id: '101230807', name: '明溪' }, { enname: 'sha xian', id: '101230808', name: '沙县' }, { enname: 'you xi', id: '101230809', name: '尤溪' }, { enname: 'yong an', id: '101230810', name: '永安' }, { enname: 'da tian', id: '101230811', name: '大田' }]
  }, {
    enname: 'nan ping',
    id: '2309',
    name: '南平',
    children: [{ enname: 'nan ping', id: '101230901', name: '南平' }, { enname: 'shun chang', id: '101230902', name: '顺昌' }, { enname: 'guang ze', id: '101230903', name: '光泽' }, { enname: 'shao wu', id: '101230904', name: '邵武' }, { enname: 'wu yi shan', id: '101230905', name: '武夷山' }, { enname: 'pu cheng', id: '101230906', name: '浦城' }, { enname: 'jian yang', id: '101230907', name: '建阳' }, { enname: 'song xi', id: '101230908', name: '松溪' }, { enname: 'zheng he', id: '101230909', name: '政和' }, { enname: 'jian ou', id: '101230910', name: '建瓯' }]
  }]
}, {
  enname: 'jiang xi',
  id: '24',
  name: '江西',
  children: [{
    enname: 'nan chang',
    id: '2401',
    name: '南昌',
    children: [{ enname: 'nan chang', id: '101240101', name: '南昌' }, { enname: 'xin jian', id: '101240102', name: '新建' }, { enname: 'nan chang xian', id: '101240103', name: '南昌县' }, { enname: 'an yi', id: '101240104', name: '安义' }, { enname: 'jin xian', id: '101240105', name: '进贤' }]
  }, {
    enname: 'jiu jiang',
    id: '2402',
    name: '九江',
    children: [{ enname: 'jiu jiang', id: '101240201', name: '九江' }, { enname: 'rui chang', id: '101240202', name: '瑞昌' }, { enname: 'lu shan', id: '101240203', name: '庐山' }, { enname: 'wu ning', id: '101240204', name: '武宁' }, { enname: 'de an', id: '101240205', name: '德安' }, { enname: 'yong xiu', id: '101240206', name: '永修' }, { enname: 'hu kou', id: '101240207', name: '湖口' }, { enname: 'peng ze', id: '101240208', name: '彭泽' }, { enname: 'xing zi', id: '101240209', name: '星子' }, { enname: 'dou chang', id: '101240210', name: '都昌' }, { enname: 'xiu shui', id: '101240212', name: '修水' }]
  }, {
    enname: 'shang rao',
    id: '2403',
    name: '上饶',
    children: [{ enname: 'shang rao', id: '101240301', name: '上饶' }, { enname: 'po yang', id: '101240302', name: '鄱阳' }, { enname: 'wu yuan', id: '101240303', name: '婺源' }, { enname: 'yu gan', id: '101240305', name: '余干' }, { enname: 'wan nian', id: '101240306', name: '万年' }, { enname: 'de xing', id: '101240307', name: '德兴' }, { enname: 'shang rao xian', id: '101240308', name: '上饶县' }, { enname: 'yi yang', id: '101240309', name: '弋阳' }, { enname: 'heng feng', id: '101240310', name: '横峰' }, { enname: 'qian shan', id: '101240311', name: '铅山' }, { enname: 'yu shan', id: '101240312', name: '玉山' }, { enname: 'guang feng', id: '101240313', name: '广丰' }]
  }, {
    enname: 'fu zhou',
    id: '2404',
    name: '抚州',
    children: [{ enname: 'fu zhou', id: '101240401', name: '抚州' }, { enname: 'guang chang', id: '101240402', name: '广昌' }, { enname: 'le an', id: '101240403', name: '乐安' }, { enname: 'chong ren', id: '101240404', name: '崇仁' }, { enname: 'jin xi', id: '101240405', name: '金溪' }, { enname: 'zi xi', id: '101240406', name: '资溪' }, { enname: 'yi huang', id: '101240407', name: '宜黄' }, { enname: 'nan cheng', id: '101240408', name: '南城' }, { enname: 'nan feng', id: '101240409', name: '南丰' }, { enname: 'li chuan', id: '101240410', name: '黎川' }, { enname: 'dong xiang', id: '101240411', name: '东乡' }]
  }, {
    enname: 'yi chun',
    id: '2405',
    name: '宜春',
    children: [{ enname: 'yi chun', id: '101240501', name: '宜春' }, { enname: 'tong gu', id: '101240502', name: '铜鼓' }, { enname: 'yi feng', id: '101240503', name: '宜丰' }, { enname: 'wan zai', id: '101240504', name: '万载' }, { enname: 'shang gao', id: '101240505', name: '上高' }, { enname: 'jing an', id: '101240506', name: '靖安' }, { enname: 'feng xin', id: '101240507', name: '奉新' }, { enname: 'gao an', id: '101240508', name: '高安' }, { enname: 'zhang shu', id: '101240509', name: '樟树' }, { enname: 'feng cheng', id: '101240510', name: '丰城' }]
  }, {
    enname: 'ji an',
    id: '2406',
    name: '吉安',
    children: [{ enname: 'ji an', id: '101240601', name: '吉安' }, { enname: 'ji an xian', id: '101240602', name: '吉安县' }, { enname: 'ji shui', id: '101240603', name: '吉水' }, { enname: 'xin gan', id: '101240604', name: '新干' }, { enname: 'xia jiang', id: '101240605', name: '峡江' }, { enname: 'yong feng', id: '101240606', name: '永丰' }, { enname: 'yong xin', id: '101240607', name: '永新' }, { enname: 'jing gang shan', id: '101240608', name: '井冈山' }, { enname: 'wan an', id: '101240609', name: '万安' }, { enname: 'sui chuan', id: '101240610', name: '遂川' }, { enname: 'tai he', id: '101240611', name: '泰和' }, { enname: 'an fu', id: '101240612', name: '安福' }, { enname: 'ning gang', id: '101240613', name: '宁冈' }]
  }, {
    enname: 'gan zhou',
    id: '2407',
    name: '赣州',
    children: [{ enname: 'gan zhou', id: '101240701', name: '赣州' }, { enname: 'chong yi', id: '101240702', name: '崇义' }, { enname: 'shang you', id: '101240703', name: '上犹' }, { enname: 'nan kang', id: '101240704', name: '南康' }, { enname: 'da yu', id: '101240705', name: '大余' }, { enname: 'xin feng', id: '101240706', name: '信丰' }, { enname: 'ning dou', id: '101240707', name: '宁都' }, { enname: 'shi cheng', id: '101240708', name: '石城' }, { enname: 'rui jin', id: '101240709', name: '瑞金' }, { enname: 'yu dou', id: '101240710', name: '于都' }, { enname: 'hui chang', id: '101240711', name: '会昌' }, { enname: 'an yuan', id: '101240712', name: '安远' }, { enname: 'quan nan', id: '101240713', name: '全南' }, { enname: 'long nan', id: '101240714', name: '龙南' }, { enname: 'ding nan', id: '101240715', name: '定南' }, { enname: 'xun wu', id: '101240716', name: '寻乌' }, { enname: 'xing guo', id: '101240717', name: '兴国' }, { enname: 'gan xian', id: '101240718', name: '赣县' }]
  }, {
    enname: 'jing de zhen',
    id: '2408',
    name: '景德镇',
    children: [{ enname: 'jing de zhen', id: '101240801', name: '景德镇' }, { enname: 'le ping', id: '101240802', name: '乐平' }, { enname: 'fu liang', id: '101240803', name: '浮梁' }]
  }, {
    enname: 'ping xiang',
    id: '2409',
    name: '萍乡',
    children: [{ enname: 'ping xiang', id: '101240901', name: '萍乡' }, { enname: 'lian hua', id: '101240902', name: '莲花' }, { enname: 'shang li', id: '101240903', name: '上栗' }, { enname: 'an yuan', id: '101240904', name: '安源' }, { enname: 'lu xi', id: '101240905', name: '芦溪' }, { enname: 'xiang dong', id: '101240906', name: '湘东' }]
  }, {
    enname: 'xin yu',
    id: '2410',
    name: '新余',
    children: [{ enname: 'xin yu', id: '101241001', name: '新余' }, { enname: 'fen yi', id: '101241002', name: '分宜' }]
  }, {
    enname: 'ying tan',
    id: '2411',
    name: '鹰潭',
    children: [{ enname: 'ying tan', id: '101241101', name: '鹰潭' }, { enname: 'yu jiang', id: '101241102', name: '余江' }, { enname: 'gui xi', id: '101241103', name: '贵溪' }]
  }]
}, {
  enname: 'hu nan',
  id: '25',
  name: '湖南',
  children: [{
    enname: 'chang sha',
    id: '2501',
    name: '长沙',
    children: [{ enname: 'chang sha', id: '101250101', name: '长沙' }, { enname: 'ning xiang', id: '101250102', name: '宁乡' }, { enname: 'liu yang', id: '101250103', name: '浏阳' }, { enname: 'ma po ling', id: '101250104', name: '马坡岭' }, { enname: 'wang cheng', id: '101250105', name: '望城' }]
  }, {
    enname: 'xiang tan',
    id: '2502',
    name: '湘潭',
    children: [{ enname: 'xiang tan', id: '101250201', name: '湘潭' }, { enname: 'shao shan', id: '101250202', name: '韶山' }, { enname: 'xiang xiang', id: '101250203', name: '湘乡' }]
  }, {
    enname: 'zhu zhou',
    id: '2503',
    name: '株洲',
    children: [{ enname: 'zhu zhou', id: '101250301', name: '株洲' }, { enname: 'you xian', id: '101250302', name: '攸县' }, { enname: 'li ling', id: '101250303', name: '醴陵' }, { enname: 'cha ling', id: '101250305', name: '茶陵' }, { enname: 'yan ling', id: '101250306', name: '炎陵' }]
  }, {
    enname: 'heng yang',
    id: '2504',
    name: '衡阳',
    children: [{ enname: 'heng yang', id: '101250401', name: '衡阳' }, { enname: 'heng shan', id: '101250402', name: '衡山' }, { enname: 'heng dong', id: '101250403', name: '衡东' }, { enname: 'qi dong', id: '101250404', name: '祁东' }, { enname: 'heng yang xian', id: '101250405', name: '衡阳县' }, { enname: 'chang ning', id: '101250406', name: '常宁' }, { enname: 'heng nan', id: '101250407', name: '衡南' }, { enname: 'lei yang', id: '101250408', name: '耒阳' }, { enname: 'nan yue', id: '101250409', name: '南岳' }]
  }, {
    enname: 'chen zhou',
    id: '2505',
    name: '郴州',
    children: [{ enname: 'chen zhou', id: '101250501', name: '郴州' }, { enname: 'gui yang', id: '101250502', name: '桂阳' }, { enname: 'jia he', id: '101250503', name: '嘉禾' }, { enname: 'yi zhang', id: '101250504', name: '宜章' }, { enname: 'lin wu', id: '101250505', name: '临武' }, { enname: 'zi xing', id: '101250507', name: '资兴' }, { enname: 'ru cheng', id: '101250508', name: '汝城' }, { enname: 'an ren', id: '101250509', name: '安仁' }, { enname: 'yong xing', id: '101250510', name: '永兴' }, { enname: 'gui dong', id: '101250511', name: '桂东' }, { enname: 'su xian', id: '101250512', name: '苏仙' }]
  }, {
    enname: 'chang de',
    id: '2506',
    name: '常德',
    children: [{ enname: 'chang de', id: '101250601', name: '常德' }, { enname: 'an xiang', id: '101250602', name: '安乡' }, { enname: 'tao yuan', id: '101250603', name: '桃源' }, { enname: 'han shou', id: '101250604', name: '汉寿' }, { enname: 'li xian', id: '101250605', name: '澧县' }, { enname: 'lin li', id: '101250606', name: '临澧' }, { enname: 'shi men', id: '101250607', name: '石门' }, { enname: 'jin shi', id: '101250608', name: '津市' }]
  }, {
    enname: 'yi yang',
    id: '2507',
    name: '益阳',
    children: [{ enname: 'yi yang', id: '101250700', name: '益阳' }, { enname: 'he shan qu', id: '101250701', name: '赫山区' }, { enname: 'nan xian', id: '101250702', name: '南县' }, { enname: 'tao jiang', id: '101250703', name: '桃江' }, { enname: 'an hua', id: '101250704', name: '安化' }, { enname: 'yuan jiang', id: '101250705', name: '沅江' }]
  }, {
    enname: 'lou di',
    id: '2508',
    name: '娄底',
    children: [{ enname: 'lou di', id: '101250801', name: '娄底' }, { enname: 'shuang feng', id: '101250802', name: '双峰' }, { enname: 'leng shui jiang', id: '101250803', name: '冷水江' }, { enname: 'xin hua', id: '101250805', name: '新化' }, { enname: 'lian yuan', id: '101250806', name: '涟源' }]
  }, {
    enname: 'shao yang',
    id: '2509',
    name: '邵阳',
    children: [{ enname: 'shao yang', id: '101250901', name: '邵阳' }, { enname: 'long hui', id: '101250902', name: '隆回' }, { enname: 'dong kou', id: '101250903', name: '洞口' }, { enname: 'xin shao', id: '101250904', name: '新邵' }, { enname: 'shao dong', id: '101250905', name: '邵东' }, { enname: 'sui ning', id: '101250906', name: '绥宁' }, { enname: 'xin ning', id: '101250907', name: '新宁' }, { enname: 'wu gang', id: '101250908', name: '武冈' }, { enname: 'cheng bu', id: '101250909', name: '城步' }, { enname: 'shao yang xian', id: '101250910', name: '邵阳县' }]
  }, {
    enname: 'yue yang',
    id: '2510',
    name: '岳阳',
    children: [{ enname: 'yue yang', id: '101251001', name: '岳阳' }, { enname: 'hua rong', id: '101251002', name: '华容' }, { enname: 'xiang yin', id: '101251003', name: '湘阴' }, { enname: 'mi luo', id: '101251004', name: '汨罗' }, { enname: 'ping jiang', id: '101251005', name: '平江' }, { enname: 'lin xiang', id: '101251006', name: '临湘' }]
  }, {
    enname: 'zhang jia jie',
    id: '2511',
    name: '张家界',
    children: [{ enname: 'zhang jia jie', id: '101251101', name: '张家界' }, { enname: 'sang zhi', id: '101251102', name: '桑植' }, { enname: 'ci li', id: '101251103', name: '慈利' }, { enname: 'wu ling yuan', id: '101251104', name: '武陵源' }]
  }, {
    enname: 'huai hua',
    id: '2512',
    name: '怀化',
    children: [{ enname: 'huai hua', id: '101251201', name: '怀化' }, { enname: 'yuan ling', id: '101251203', name: '沅陵' }, { enname: 'chen xi', id: '101251204', name: '辰溪' }, { enname: 'jing zhou', id: '101251205', name: '靖州' }, { enname: 'hui tong', id: '101251206', name: '会同' }, { enname: 'tong dao', id: '101251207', name: '通道' }, { enname: 'ma yang', id: '101251208', name: '麻阳' }, { enname: 'xin huang', id: '101251209', name: '新晃' }, { enname: 'zhi jiang', id: '101251210', name: '芷江' }, { enname: 'xu pu', id: '101251211', name: '溆浦' }, { enname: 'zhong fang', id: '101251212', name: '中方' }, { enname: 'hong jiang', id: '101251213', name: '洪江' }]
  }, {
    enname: 'yong zhou',
    id: '2514',
    name: '永州',
    children: [{ enname: 'yong zhou', id: '101251401', name: '永州' }, { enname: 'qi yang', id: '101251402', name: '祁阳' }, { enname: 'dong an', id: '101251403', name: '东安' }, { enname: 'shuang pai', id: '101251404', name: '双牌' }, { enname: 'dao xian', id: '101251405', name: '道县' }, { enname: 'ning yuan', id: '101251406', name: '宁远' }, { enname: 'jiang yong', id: '101251407', name: '江永' }, { enname: 'lan shan', id: '101251408', name: '蓝山' }, { enname: 'xin tian', id: '101251409', name: '新田' }, { enname: 'jiang hua', id: '101251410', name: '江华' }, { enname: 'leng shui tan', id: '101251411', name: '冷水滩' }]
  }, {
    enname: 'xiang xi',
    id: '2515',
    name: '湘西',
    children: [{ enname: 'ji shou', id: '101251501', name: '吉首' }, { enname: 'bao jing', id: '101251502', name: '保靖' }, { enname: 'yong shun', id: '101251503', name: '永顺' }, { enname: 'gu zhang', id: '101251504', name: '古丈' }, { enname: 'feng huang', id: '101251505', name: '凤凰' }, { enname: 'lu xi', id: '101251506', name: '泸溪' }, { enname: 'long shan', id: '101251507', name: '龙山' }, { enname: 'hua yuan', id: '101251508', name: '花垣' }]
  }]
}, {
  enname: 'gui zhou',
  id: '26',
  name: '贵州',
  children: [{
    enname: 'gui yang',
    id: '2601',
    name: '贵阳',
    children: [{ enname: 'gui yang', id: '101260101', name: '贵阳' }, { enname: 'bai yun', id: '101260102', name: '白云' }, { enname: 'hua xi', id: '101260103', name: '花溪' }, { enname: 'wu dang', id: '101260104', name: '乌当' }, { enname: 'xi feng', id: '101260105', name: '息烽' }, { enname: 'kai yang', id: '101260106', name: '开阳' }, { enname: 'xiu wen', id: '101260107', name: '修文' }, { enname: 'qing zhen', id: '101260108', name: '清镇' }, { enname: 'xiao he', id: '101260109', name: '小河' }, { enname: 'yun yan', id: '101260110', name: '云岩' }, { enname: 'nan ming', id: '101260111', name: '南明' }]
  }, {
    enname: 'zun yi',
    id: '2602',
    name: '遵义',
    children: [{ enname: 'zun yi', id: '101260201', name: '遵义' }, { enname: 'bo zhou qu', id: '101260202', name: '播州区' }, { enname: 'ren huai', id: '101260203', name: '仁怀' }, { enname: 'sui yang', id: '101260204', name: '绥阳' }, { enname: 'mei tan', id: '101260205', name: '湄潭' }, { enname: 'feng gang', id: '101260206', name: '凤冈' }, { enname: 'tong zi', id: '101260207', name: '桐梓' }, { enname: 'chi shui', id: '101260208', name: '赤水' }, { enname: 'xi shui', id: '101260209', name: '习水' }, { enname: 'dao zhen', id: '101260210', name: '道真' }, { enname: 'zheng an', id: '101260211', name: '正安' }, { enname: 'wu chuan', id: '101260212', name: '务川' }, { enname: 'yu qing', id: '101260213', name: '余庆' }, { enname: 'hui chuan', id: '101260214', name: '汇川' }, { enname: 'hong hua gang', id: '101260215', name: '红花岗' }]
  }, {
    enname: 'an shun',
    id: '2603',
    name: '安顺',
    children: [{ enname: 'an shun', id: '101260301', name: '安顺' }, { enname: 'pu ding', id: '101260302', name: '普定' }, { enname: 'zhen ning', id: '101260303', name: '镇宁' }, { enname: 'ping ba', id: '101260304', name: '平坝' }, { enname: 'zi yun', id: '101260305', name: '紫云' }, { enname: 'guan ling', id: '101260306', name: '关岭' }]
  }, {
    enname: 'qian nan',
    id: '2604',
    name: '黔南',
    children: [{ enname: 'dou yun', id: '101260401', name: '都匀' }, { enname: 'gui ding', id: '101260402', name: '贵定' }, { enname: 'weng an', id: '101260403', name: '瓮安' }, { enname: 'chang shun', id: '101260404', name: '长顺' }, { enname: 'fu quan', id: '101260405', name: '福泉' }, { enname: 'hui shui', id: '101260406', name: '惠水' }, { enname: 'long li', id: '101260407', name: '龙里' }, { enname: 'luo dian', id: '101260408', name: '罗甸' }, { enname: 'ping tang', id: '101260409', name: '平塘' }, { enname: 'du shan', id: '101260410', name: '独山' }, { enname: 'san dou', id: '101260411', name: '三都' }, { enname: 'li bo', id: '101260412', name: '荔波' }]
  }, {
    enname: 'qian dong nan',
    id: '2605',
    name: '黔东南',
    children: [{ enname: 'kai li', id: '101260501', name: '凯里' }, { enname: 'cen gong', id: '101260502', name: '岑巩' }, { enname: 'shi bing', id: '101260503', name: '施秉' }, { enname: 'zhen yuan', id: '101260504', name: '镇远' }, { enname: 'huang ping', id: '101260505', name: '黄平' }, { enname: 'ma jiang', id: '101260507', name: '麻江' }, { enname: 'dan zhai', id: '101260508', name: '丹寨' }, { enname: 'san sui', id: '101260509', name: '三穗' }, { enname: 'tai jiang', id: '101260510', name: '台江' }, { enname: 'jian he', id: '101260511', name: '剑河' }, { enname: 'lei shan', id: '101260512', name: '雷山' }, { enname: 'li ping', id: '101260513', name: '黎平' }, { enname: 'tian zhu', id: '101260514', name: '天柱' }, { enname: 'jin ping', id: '101260515', name: '锦屏' }, { enname: 'rong jiang', id: '101260516', name: '榕江' }, { enname: 'cong jiang', id: '101260517', name: '从江' }]
  }, {
    enname: 'tong ren',
    id: '2606',
    name: '铜仁',
    children: [{ enname: 'tong ren', id: '101260601', name: '铜仁' }, { enname: 'jiang kou', id: '101260602', name: '江口' }, { enname: 'yu ping', id: '101260603', name: '玉屏' }, { enname: 'wan shan', id: '101260604', name: '万山' }, { enname: 'si nan', id: '101260605', name: '思南' }, { enname: 'yin jiang', id: '101260607', name: '印江' }, { enname: 'shi qian', id: '101260608', name: '石阡' }, { enname: 'yan he', id: '101260609', name: '沿河' }, { enname: 'de jiang', id: '101260610', name: '德江' }, { enname: 'song tao', id: '101260611', name: '松桃' }]
  }, {
    enname: 'bi jie',
    id: '2607',
    name: '毕节',
    children: [{ enname: 'bi jie', id: '101260701', name: '毕节' }, { enname: 'he zhang', id: '101260702', name: '赫章' }, { enname: 'jin sha', id: '101260703', name: '金沙' }, { enname: 'wei ning', id: '101260704', name: '威宁' }, { enname: 'da fang', id: '101260705', name: '大方' }, { enname: 'na yong', id: '101260706', name: '纳雍' }, { enname: 'zhi jin', id: '101260707', name: '织金' }, { enname: 'qian xi', id: '101260708', name: '黔西' }]
  }, {
    enname: 'liu pan shui',
    id: '2608',
    name: '六盘水',
    children: [{ enname: 'shui cheng', id: '101260801', name: '水城' }, { enname: 'liu zhi', id: '101260802', name: '六枝' }, { enname: 'pan xian', id: '101260804', name: '盘县' }]
  }, {
    enname: 'qian xi nan',
    id: '2609',
    name: '黔西南',
    children: [{ enname: 'xing yi', id: '101260901', name: '兴义' }, { enname: 'qing long', id: '101260902', name: '晴隆' }, { enname: 'xing ren', id: '101260903', name: '兴仁' }, { enname: 'zhen feng', id: '101260904', name: '贞丰' }, { enname: 'wang mo', id: '101260905', name: '望谟' }, { enname: 'an long', id: '101260907', name: '安龙' }, { enname: 'ce heng', id: '101260908', name: '册亨' }, { enname: 'pu an', id: '101260909', name: '普安' }]
  }]
}, {
  enname: 'si chuan',
  id: '27',
  name: '四川',
  children: [{
    enname: 'cheng dou',
    id: '2701',
    name: '成都',
    children: [{ enname: 'cheng dou', id: '101270101', name: '成都' }, { enname: 'long quan yi', id: '101270102', name: '龙泉驿' }, { enname: 'xin dou', id: '101270103', name: '新都' }, { enname: 'wen jiang', id: '101270104', name: '温江' }, { enname: 'jin tang', id: '101270105', name: '金堂' }, { enname: 'shuang liu', id: '101270106', name: '双流' }, { enname: 'pi xian', id: '101270107', name: '郫县' }, { enname: 'da yi', id: '101270108', name: '大邑' }, { enname: 'pu jiang', id: '101270109', name: '蒲江' }, { enname: 'xin jin', id: '101270110', name: '新津' }, { enname: 'dou jiang yan', id: '101270111', name: '都江堰' }, { enname: 'peng zhou', id: '101270112', name: '彭州' }, { enname: 'qiong lai', id: '101270113', name: '邛崃' }, { enname: 'chong zhou', id: '101270114', name: '崇州' }]
  }, {
    enname: 'pan zhi hua',
    id: '2702',
    name: '攀枝花',
    children: [{ enname: 'pan zhi hua', id: '101270201', name: '攀枝花' }, { enname: 'ren he', id: '101270202', name: '仁和' }, { enname: 'mi yi', id: '101270203', name: '米易' }, { enname: 'yan bian', id: '101270204', name: '盐边' }]
  }, {
    enname: 'zi gong',
    id: '2703',
    name: '自贡',
    children: [{ enname: 'zi gong', id: '101270301', name: '自贡' }, { enname: 'fu shun', id: '101270302', name: '富顺' }, { enname: 'rong xian', id: '101270303', name: '荣县' }]
  }, {
    enname: 'mian yang',
    id: '2704',
    name: '绵阳',
    children: [{ enname: 'mian yang', id: '101270401', name: '绵阳' }, { enname: 'san tai', id: '101270402', name: '三台' }, { enname: 'yan ting', id: '101270403', name: '盐亭' }, { enname: 'an xian', id: '101270404', name: '安县' }, { enname: 'zi tong', id: '101270405', name: '梓潼' }, { enname: 'bei chuan', id: '101270406', name: '北川' }, { enname: 'ping wu', id: '101270407', name: '平武' }, { enname: 'jiang you', id: '101270408', name: '江油' }]
  }, {
    enname: 'nan chong',
    id: '2705',
    name: '南充',
    children: [{ enname: 'nan chong', id: '101270501', name: '南充' }, { enname: 'nan bu', id: '101270502', name: '南部' }, { enname: 'ying shan', id: '101270503', name: '营山' }, { enname: 'peng an', id: '101270504', name: '蓬安' }, { enname: 'yi long', id: '101270505', name: '仪陇' }, { enname: 'xi chong', id: '101270506', name: '西充' }, { enname: 'lang zhong', id: '101270507', name: '阆中' }]
  }, {
    enname: 'da zhou',
    id: '2706',
    name: '达州',
    children: [{ enname: 'da zhou', id: '101270601', name: '达州' }, { enname: 'xuan han', id: '101270602', name: '宣汉' }, { enname: 'kai jiang', id: '101270603', name: '开江' }, { enname: 'da zhu', id: '101270604', name: '大竹' }, { enname: 'qu xian', id: '101270605', name: '渠县' }, { enname: 'wan yuan', id: '101270606', name: '万源' }, { enname: 'tong chuan', id: '101270607', name: '通川' }, { enname: 'da xian', id: '101270608', name: '达县' }]
  }, {
    enname: 'sui ning',
    id: '2707',
    name: '遂宁',
    children: [{ enname: 'sui ning', id: '101270701', name: '遂宁' }, { enname: 'peng xi', id: '101270702', name: '蓬溪' }, { enname: 'she hong', id: '101270703', name: '射洪' }]
  }, {
    enname: 'guang an',
    id: '2708',
    name: '广安',
    children: [{ enname: 'guang an', id: '101270801', name: '广安' }, { enname: 'yue chi', id: '101270802', name: '岳池' }, { enname: 'wu sheng', id: '101270803', name: '武胜' }, { enname: 'lin shui', id: '101270804', name: '邻水' }, { enname: 'hua ying', id: '101270805', name: '华蓥' }]
  }, {
    enname: 'ba zhong',
    id: '2709',
    name: '巴中',
    children: [{ enname: 'ba zhong', id: '101270901', name: '巴中' }, { enname: 'tong jiang', id: '101270902', name: '通江' }, { enname: 'nan jiang', id: '101270903', name: '南江' }, { enname: 'ping chang', id: '101270904', name: '平昌' }]
  }, {
    enname: 'lu zhou',
    id: '2710',
    name: '泸州',
    children: [{ enname: 'lu zhou', id: '101271001', name: '泸州' }, { enname: 'lu xian', id: '101271003', name: '泸县' }, { enname: 'he jiang', id: '101271004', name: '合江' }, { enname: 'xu yong', id: '101271005', name: '叙永' }, { enname: 'gu lin', id: '101271006', name: '古蔺' }, { enname: 'na xi', id: '101271007', name: '纳溪' }]
  }, {
    enname: 'yi bin',
    id: '2711',
    name: '宜宾',
    children: [{ enname: 'yi bin', id: '101271101', name: '宜宾' }, { enname: 'yi bin xian', id: '101271103', name: '宜宾县' }, { enname: 'nan xi', id: '101271104', name: '南溪' }, { enname: 'jiang an', id: '101271105', name: '江安' }, { enname: 'chang ning', id: '101271106', name: '长宁' }, { enname: 'gao xian', id: '101271107', name: '高县' }, { enname: 'gong xian', id: '101271108', name: '珙县' }, { enname: 'yun lian', id: '101271109', name: '筠连' }, { enname: 'xing wen', id: '101271110', name: '兴文' }, { enname: 'ping shan', id: '101271111', name: '屏山' }]
  }, {
    enname: 'nei jiang',
    id: '2712',
    name: '内江',
    children: [{ enname: 'nei jiang', id: '101271201', name: '内江' }, { enname: 'dong xing', id: '101271202', name: '东兴' }, { enname: 'wei yuan', id: '101271203', name: '威远' }, { enname: 'zi zhong', id: '101271204', name: '资中' }, { enname: 'long chang', id: '101271205', name: '隆昌' }]
  }, {
    enname: 'zi yang',
    id: '2713',
    name: '资阳',
    children: [{ enname: 'zi yang', id: '101271301', name: '资阳' }, { enname: 'an yue', id: '101271302', name: '安岳' }, { enname: 'le zhi', id: '101271303', name: '乐至' }, { enname: 'jian yang', id: '101271304', name: '简阳' }]
  }, {
    enname: 'le shan',
    id: '2714',
    name: '乐山',
    children: [{ enname: 'le shan', id: '101271401', name: '乐山' }, { enname: 'jian wei', id: '101271402', name: '犍为' }, { enname: 'jing yan', id: '101271403', name: '井研' }, { enname: 'jia jiang', id: '101271404', name: '夹江' }, { enname: 'mu chuan', id: '101271405', name: '沐川' }, { enname: 'e bian', id: '101271406', name: '峨边' }, { enname: 'ma bian', id: '101271407', name: '马边' }, { enname: 'e mei', id: '101271408', name: '峨眉' }, { enname: 'e mei shan', id: '101271409', name: '峨眉山' }]
  }, {
    enname: 'mei shan',
    id: '2715',
    name: '眉山',
    children: [{ enname: 'mei shan', id: '101271501', name: '眉山' }, { enname: 'ren shou', id: '101271502', name: '仁寿' }, { enname: 'peng shan', id: '101271503', name: '彭山' }, { enname: 'hong ya', id: '101271504', name: '洪雅' }, { enname: 'dan leng', id: '101271505', name: '丹棱' }, { enname: 'qing shen', id: '101271506', name: '青神' }]
  }, {
    enname: 'liang shan',
    id: '2716',
    name: '凉山',
    children: [{ enname: 'liang shan', id: '101271601', name: '凉山' }, { enname: 'mu li', id: '101271603', name: '木里' }, { enname: 'yan yuan', id: '101271604', name: '盐源' }, { enname: 'de chang', id: '101271605', name: '德昌' }, { enname: 'hui li', id: '101271606', name: '会理' }, { enname: 'hui dong', id: '101271607', name: '会东' }, { enname: 'ning nan', id: '101271608', name: '宁南' }, { enname: 'pu ge', id: '101271609', name: '普格' }, { enname: 'xi chang', id: '101271610', name: '西昌' }, { enname: 'jin yang', id: '101271611', name: '金阳' }, { enname: 'zhao jue', id: '101271612', name: '昭觉' }, { enname: 'xi de', id: '101271613', name: '喜德' }, { enname: 'mian ning', id: '101271614', name: '冕宁' }, { enname: 'yue xi', id: '101271615', name: '越西' }, { enname: 'gan luo', id: '101271616', name: '甘洛' }, { enname: 'lei bo', id: '101271617', name: '雷波' }, { enname: 'mei gu', id: '101271618', name: '美姑' }, { enname: 'bu tuo', id: '101271619', name: '布拖' }]
  }, {
    enname: 'ya an',
    id: '2717',
    name: '雅安',
    children: [{ enname: 'ya an', id: '101271701', name: '雅安' }, { enname: 'ming shan', id: '101271702', name: '名山' }, { enname: 'xing jing', id: '101271703', name: '荥经' }, { enname: 'han yuan', id: '101271704', name: '汉源' }, { enname: 'shi mian', id: '101271705', name: '石棉' }, { enname: 'tian quan', id: '101271706', name: '天全' }, { enname: 'lu shan', id: '101271707', name: '芦山' }, { enname: 'bao xing', id: '101271708', name: '宝兴' }]
  }, {
    enname: 'gan zi',
    id: '2718',
    name: '甘孜',
    children: [{ enname: 'gan zi', id: '101271801', name: '甘孜' }, { enname: 'kang ding', id: '101271802', name: '康定' }, { enname: 'lu ding', id: '101271803', name: '泸定' }, { enname: 'dan ba', id: '101271804', name: '丹巴' }, { enname: 'jiu long', id: '101271805', name: '九龙' }, { enname: 'ya jiang', id: '101271806', name: '雅江' }, { enname: 'dao fu', id: '101271807', name: '道孚' }, { enname: 'lu huo', id: '101271808', name: '炉霍' }, { enname: 'xin long', id: '101271809', name: '新龙' }, { enname: 'de ge', id: '101271810', name: '德格' }, { enname: 'bai yu', id: '101271811', name: '白玉' }, { enname: 'shi qu', id: '101271812', name: '石渠' }, { enname: 'se da', id: '101271813', name: '色达' }, { enname: 'li tang', id: '101271814', name: '理塘' }, { enname: 'ba tang', id: '101271815', name: '巴塘' }, { enname: 'xiang cheng', id: '101271816', name: '乡城' }, { enname: 'dao cheng', id: '101271817', name: '稻城' }, { enname: 'de rong', id: '101271818', name: '得荣' }]
  }, {
    enname: 'a ba',
    id: '2719',
    name: '阿坝',
    children: [{ enname: 'a ba', id: '101271901', name: '阿坝' }, { enname: 'wen chuan', id: '101271902', name: '汶川' }, { enname: 'li xian', id: '101271903', name: '理县' }, { enname: 'mao xian', id: '101271904', name: '茂县' }, { enname: 'song pan', id: '101271905', name: '松潘' }, { enname: 'jiu zhai gou', id: '101271906', name: '九寨沟' }, { enname: 'jin chuan', id: '101271907', name: '金川' }, { enname: 'xiao jin', id: '101271908', name: '小金' }, { enname: 'hei shui', id: '101271909', name: '黑水' }, { enname: 'ma er kang', id: '101271910', name: '马尔康' }, { enname: 'rang tang', id: '101271911', name: '壤塘' }, { enname: 'ruo er gai', id: '101271912', name: '若尔盖' }, { enname: 'hong yuan', id: '101271913', name: '红原' }]
  }, {
    enname: 'de yang',
    id: '2720',
    name: '德阳',
    children: [{ enname: 'de yang', id: '101272001', name: '德阳' }, { enname: 'zhong jiang', id: '101272002', name: '中江' }, { enname: 'guang han', id: '101272003', name: '广汉' }, { enname: 'shen fang', id: '101272004', name: '什邡' }, { enname: 'mian zhu', id: '101272005', name: '绵竹' }, { enname: 'luo jiang', id: '101272006', name: '罗江' }]
  }, {
    enname: 'guang yuan',
    id: '2721',
    name: '广元',
    children: [{ enname: 'guang yuan', id: '101272101', name: '广元' }, { enname: 'wang cang', id: '101272102', name: '旺苍' }, { enname: 'qing chuan', id: '101272103', name: '青川' }, { enname: 'jian ge', id: '101272104', name: '剑阁' }, { enname: 'cang xi', id: '101272105', name: '苍溪' }]
  }]
}, {
  enname: 'guang dong',
  id: '28',
  name: '广东',
  children: [{
    enname: 'guang zhou',
    id: '2801',
    name: '广州',
    children: [{ enname: 'guang zhou', id: '101280101', name: '广州' }, { enname: 'fan yu', id: '101280102', name: '番禺' }, { enname: 'cong hua', id: '101280103', name: '从化' }, { enname: 'zeng cheng', id: '101280104', name: '增城' }, { enname: 'hua dou', id: '101280105', name: '花都' }]
  }, {
    enname: 'shao guan',
    id: '2802',
    name: '韶关',
    children: [{ enname: 'shao guan', id: '101280201', name: '韶关' }, { enname: 'ru yuan', id: '101280202', name: '乳源' }, { enname: 'shi xing', id: '101280203', name: '始兴' }, { enname: 'weng yuan', id: '101280204', name: '翁源' }, { enname: 'le chang', id: '101280205', name: '乐昌' }, { enname: 'ren hua', id: '101280206', name: '仁化' }, { enname: 'nan xiong', id: '101280207', name: '南雄' }, { enname: 'xin feng', id: '101280208', name: '新丰' }, { enname: 'qu jiang', id: '101280209', name: '曲江' }, { enname: 'zhen jiang', id: '101280210', name: '浈江' }, { enname: 'wu jiang', id: '101280211', name: '武江' }]
  }, {
    enname: 'hui zhou',
    id: '2803',
    name: '惠州',
    children: [{ enname: 'hui zhou', id: '101280301', name: '惠州' }, { enname: 'bo luo', id: '101280302', name: '博罗' }, { enname: 'hui yang', id: '101280303', name: '惠阳' }, { enname: 'hui dong', id: '101280304', name: '惠东' }, { enname: 'long men', id: '101280305', name: '龙门' }]
  }, {
    enname: 'mei zhou',
    id: '2804',
    name: '梅州',
    children: [{ enname: 'mei zhou', id: '101280401', name: '梅州' }, { enname: 'xing ning', id: '101280402', name: '兴宁' }, { enname: 'jiao ling', id: '101280403', name: '蕉岭' }, { enname: 'da bu', id: '101280404', name: '大埔' }, { enname: 'feng shun', id: '101280406', name: '丰顺' }, { enname: 'ping yuan', id: '101280407', name: '平远' }, { enname: 'wu hua', id: '101280408', name: '五华' }, { enname: 'mei xian', id: '101280409', name: '梅县' }]
  }, {
    enname: 'shan tou',
    id: '2805',
    name: '汕头',
    children: [{ enname: 'shan tou', id: '101280501', name: '汕头' }, { enname: 'chao yang', id: '101280502', name: '潮阳' }, { enname: 'cheng hai', id: '101280503', name: '澄海' }, { enname: 'nan ao', id: '101280504', name: '南澳' }]
  }, {
    enname: 'shen zhen',
    id: '2806',
    name: '深圳',
    children: [{ enname: 'shen zhen', id: '101280601', name: '深圳' }]
  }, {
    enname: 'zhu hai',
    id: '2807',
    name: '珠海',
    children: [{ enname: 'zhu hai', id: '101280701', name: '珠海' }, { enname: 'dou men', id: '101280702', name: '斗门' }, { enname: 'jin wan', id: '101280703', name: '金湾' }]
  }, {
    enname: 'fu shan',
    id: '2808',
    name: '佛山',
    children: [{ enname: 'fu shan', id: '101280800', name: '佛山' }, { enname: 'shun de', id: '101280801', name: '顺德' }, { enname: 'san shui', id: '101280802', name: '三水' }, { enname: 'nan hai', id: '101280803', name: '南海' }, { enname: 'gao ming', id: '101280804', name: '高明' }]
  }, {
    enname: 'zhao qing',
    id: '2809',
    name: '肇庆',
    children: [{ enname: 'zhao qing', id: '101280901', name: '肇庆' }, { enname: 'guang ning', id: '101280902', name: '广宁' }, { enname: 'si hui', id: '101280903', name: '四会' }, { enname: 'de qing', id: '101280905', name: '德庆' }, { enname: 'huai ji', id: '101280906', name: '怀集' }, { enname: 'feng kai', id: '101280907', name: '封开' }, { enname: 'gao yao', id: '101280908', name: '高要' }]
  }, {
    enname: 'zhan jiang',
    id: '2810',
    name: '湛江',
    children: [{ enname: 'zhan jiang', id: '101281001', name: '湛江' }, { enname: 'wu chuan', id: '101281002', name: '吴川' }, { enname: 'lei zhou', id: '101281003', name: '雷州' }, { enname: 'xu wen', id: '101281004', name: '徐闻' }, { enname: 'lian jiang', id: '101281005', name: '廉江' }, { enname: 'chi kan', id: '101281006', name: '赤坎' }, { enname: 'sui xi', id: '101281007', name: '遂溪' }, { enname: 'po tou', id: '101281008', name: '坡头' }, { enname: 'xia shan', id: '101281009', name: '霞山' }, { enname: 'ma zhang', id: '101281010', name: '麻章' }]
  }, {
    enname: 'jiang men',
    id: '2811',
    name: '江门',
    children: [{ enname: 'jiang men', id: '101281101', name: '江门' }, { enname: 'kai ping', id: '101281103', name: '开平' }, { enname: 'xin hui', id: '101281104', name: '新会' }, { enname: 'en ping', id: '101281105', name: '恩平' }, { enname: 'tai shan', id: '101281106', name: '台山' }, { enname: 'peng jiang', id: '101281107', name: '蓬江' }, { enname: 'he shan', id: '101281108', name: '鹤山' }, { enname: 'jiang hai', id: '101281109', name: '江海' }]
  }, {
    enname: 'he yuan',
    id: '2812',
    name: '河源',
    children: [{ enname: 'he yuan', id: '101281201', name: '河源' }, { enname: 'zi jin', id: '101281202', name: '紫金' }, { enname: 'lian ping', id: '101281203', name: '连平' }, { enname: 'he ping', id: '101281204', name: '和平' }, { enname: 'long chuan', id: '101281205', name: '龙川' }, { enname: 'dong yuan', id: '101281206', name: '东源' }]
  }, {
    enname: 'qing yuan',
    id: '2813',
    name: '清远',
    children: [{ enname: 'qing yuan', id: '101281301', name: '清远' }, { enname: 'lian nan', id: '101281302', name: '连南' }, { enname: 'lian zhou', id: '101281303', name: '连州' }, { enname: 'lian shan', id: '101281304', name: '连山' }, { enname: 'yang shan', id: '101281305', name: '阳山' }, { enname: 'fu gang', id: '101281306', name: '佛冈' }, { enname: 'ying de', id: '101281307', name: '英德' }, { enname: 'qing xin', id: '101281308', name: '清新' }]
  }, {
    enname: 'yun fu',
    id: '2814',
    name: '云浮',
    children: [{ enname: 'yun fu', id: '101281401', name: '云浮' }, { enname: 'luo ding', id: '101281402', name: '罗定' }, { enname: 'xin xing', id: '101281403', name: '新兴' }, { enname: 'yu nan', id: '101281404', name: '郁南' }, { enname: 'yun an', id: '101281406', name: '云安' }]
  }, {
    enname: 'chao zhou',
    id: '2815',
    name: '潮州',
    children: [{ enname: 'chao zhou', id: '101281501', name: '潮州' }, { enname: 'rao ping', id: '101281502', name: '饶平' }, { enname: 'chao an', id: '101281503', name: '潮安' }]
  }, {
    enname: 'dong guan',
    id: '2816',
    name: '东莞',
    children: [{ enname: 'dong guan', id: '101281601', name: '东莞' }]
  }, {
    enname: 'zhong shan',
    id: '2817',
    name: '中山',
    children: [{ enname: 'zhong shan', id: '101281701', name: '中山' }]
  }, {
    enname: 'yang jiang',
    id: '2818',
    name: '阳江',
    children: [{ enname: 'yang jiang', id: '101281801', name: '阳江' }, { enname: 'yang chun', id: '101281802', name: '阳春' }, { enname: 'yang dong', id: '101281803', name: '阳东' }, { enname: 'yang xi', id: '101281804', name: '阳西' }]
  }, {
    enname: 'jie yang',
    id: '2819',
    name: '揭阳',
    children: [{ enname: 'jie yang', id: '101281901', name: '揭阳' }, { enname: 'jie xi', id: '101281902', name: '揭西' }, { enname: 'pu ning', id: '101281903', name: '普宁' }, { enname: 'hui lai', id: '101281904', name: '惠来' }, { enname: 'jie dong', id: '101281905', name: '揭东' }]
  }, {
    enname: 'mao ming',
    id: '2820',
    name: '茂名',
    children: [{ enname: 'mao ming', id: '101282001', name: '茂名' }, { enname: 'gao zhou', id: '101282002', name: '高州' }, { enname: 'hua zhou', id: '101282003', name: '化州' }, { enname: 'dian bai', id: '101282004', name: '电白' }, { enname: 'xin yi', id: '101282005', name: '信宜' }, { enname: 'mao gang', id: '101282006', name: '茂港' }]
  }, {
    enname: 'shan wei',
    id: '2821',
    name: '汕尾',
    children: [{ enname: 'shan wei', id: '101282101', name: '汕尾' }, { enname: 'hai feng', id: '101282102', name: '海丰' }, { enname: 'lu feng', id: '101282103', name: '陆丰' }, { enname: 'lu he', id: '101282104', name: '陆河' }]
  }]
}, {
  enname: 'yun nan',
  id: '29',
  name: '云南',
  children: [{
    enname: 'kun ming',
    id: '2901',
    name: '昆明',
    children: [{ enname: 'kun ming', id: '101290101', name: '昆明' }, { enname: 'dong chuan', id: '101290103', name: '东川' }, { enname: 'xun dian', id: '101290104', name: '寻甸' }, { enname: 'jin ning', id: '101290105', name: '晋宁' }, { enname: 'yi liang', id: '101290106', name: '宜良' }, { enname: 'shi lin', id: '101290107', name: '石林' }, { enname: 'cheng gong', id: '101290108', name: '呈贡' }, { enname: 'fu min', id: '101290109', name: '富民' }, { enname: 'song ming', id: '101290110', name: '嵩明' }, { enname: 'lu quan', id: '101290111', name: '禄劝' }, { enname: 'an ning', id: '101290112', name: '安宁' }, { enname: 'tai hua shan', id: '101290113', name: '太华山' }]
  }, {
    enname: 'da li',
    id: '2902',
    name: '大理',
    children: [{ enname: 'da li', id: '101290201', name: '大理' }, { enname: 'yun long', id: '101290202', name: '云龙' }, { enname: 'yang bi', id: '101290203', name: '漾濞' }, { enname: 'yong ping', id: '101290204', name: '永平' }, { enname: 'bin chuan', id: '101290205', name: '宾川' }, { enname: 'mi du', id: '101290206', name: '弥渡' }, { enname: 'xiang yun', id: '101290207', name: '祥云' }, { enname: 'wei shan', id: '101290208', name: '巍山' }, { enname: 'jian chuan', id: '101290209', name: '剑川' }, { enname: 'er yuan', id: '101290210', name: '洱源' }, { enname: 'he qing', id: '101290211', name: '鹤庆' }, { enname: 'nan jian', id: '101290212', name: '南涧' }]
  }, {
    enname: 'hong he',
    id: '2903',
    name: '红河',
    children: [{ enname: 'hong he', id: '101290301', name: '红河' }, { enname: 'shi ping', id: '101290302', name: '石屏' }, { enname: 'jian shui', id: '101290303', name: '建水' }, { enname: 'mi lei', id: '101290304', name: '弥勒' }, { enname: 'yuan yang', id: '101290305', name: '元阳' }, { enname: 'lu chun', id: '101290306', name: '绿春' }, { enname: 'kai yuan', id: '101290307', name: '开远' }, { enname: 'ge jiu', id: '101290308', name: '个旧' }, { enname: 'meng zi', id: '101290309', name: '蒙自' }, { enname: 'ping bian', id: '101290310', name: '屏边' }, { enname: 'lu xi', id: '101290311', name: '泸西' }, { enname: 'jin ping', id: '101290312', name: '金平' }, { enname: 'he kou', id: '101290313', name: '河口' }]
  }, {
    enname: 'qu jing',
    id: '2904',
    name: '曲靖',
    children: [{ enname: 'qu jing', id: '101290401', name: '曲靖' }, { enname: 'zhan yi', id: '101290402', name: '沾益' }, { enname: 'lu liang', id: '101290403', name: '陆良' }, { enname: 'fu yuan', id: '101290404', name: '富源' }, { enname: 'ma long', id: '101290405', name: '马龙' }, { enname: 'shi zong', id: '101290406', name: '师宗' }, { enname: 'luo ping', id: '101290407', name: '罗平' }, { enname: 'hui ze', id: '101290408', name: '会泽' }, { enname: 'xuan wei', id: '101290409', name: '宣威' }]
  }, {
    enname: 'bao shan',
    id: '2905',
    name: '保山',
    children: [{ enname: 'bao shan', id: '101290501', name: '保山' }, { enname: 'long ling', id: '101290503', name: '龙陵' }, { enname: 'shi dian', id: '101290504', name: '施甸' }, { enname: 'chang ning', id: '101290505', name: '昌宁' }, { enname: 'teng chong', id: '101290506', name: '腾冲' }]
  }, {
    enname: 'wen shan',
    id: '2906',
    name: '文山',
    children: [{ enname: 'wen shan', id: '101290601', name: '文山' }, { enname: 'xi chou', id: '101290602', name: '西畴' }, { enname: 'ma guan', id: '101290603', name: '马关' }, { enname: 'ma li po', id: '101290604', name: '麻栗坡' }, { enname: 'yan shan', id: '101290605', name: '砚山' }, { enname: 'qiu bei', id: '101290606', name: '丘北' }, { enname: 'guang nan', id: '101290607', name: '广南' }, { enname: 'fu ning', id: '101290608', name: '富宁' }]
  }, {
    enname: 'yu xi',
    id: '2907',
    name: '玉溪',
    children: [{ enname: 'yu xi', id: '101290701', name: '玉溪' }, { enname: 'cheng jiang', id: '101290702', name: '澄江' }, { enname: 'jiang chuan', id: '101290703', name: '江川' }, { enname: 'tong hai', id: '101290704', name: '通海' }, { enname: 'hua ning', id: '101290705', name: '华宁' }, { enname: 'xin ping', id: '101290706', name: '新平' }, { enname: 'yi men', id: '101290707', name: '易门' }, { enname: 'e shan', id: '101290708', name: '峨山' }, { enname: 'yuan jiang', id: '101290709', name: '元江' }]
  }, {
    enname: 'chu xiong',
    id: '2908',
    name: '楚雄',
    children: [{ enname: 'chu xiong', id: '101290801', name: '楚雄' }, { enname: 'da yao', id: '101290802', name: '大姚' }, { enname: 'yuan mou', id: '101290803', name: '元谋' }, { enname: 'yao an', id: '101290804', name: '姚安' }, { enname: 'mou ding', id: '101290805', name: '牟定' }, { enname: 'nan hua', id: '101290806', name: '南华' }, { enname: 'wu ding', id: '101290807', name: '武定' }, { enname: 'lu feng', id: '101290808', name: '禄丰' }, { enname: 'shuang bai', id: '101290809', name: '双柏' }, { enname: 'yong ren', id: '101290810', name: '永仁' }]
  }, {
    enname: 'pu er',
    id: '2909',
    name: '普洱',
    children: [{ enname: 'pu er', id: '101290901', name: '普洱' }, { enname: 'jing gu', id: '101290902', name: '景谷' }, { enname: 'jing dong', id: '101290903', name: '景东' }, { enname: 'lan cang', id: '101290904', name: '澜沧' }, { enname: 'mo jiang', id: '101290906', name: '墨江' }, { enname: 'jiang cheng', id: '101290907', name: '江城' }, { enname: 'meng lian', id: '101290908', name: '孟连' }, { enname: 'xi meng', id: '101290909', name: '西盟' }, { enname: 'zhen yuan', id: '101290911', name: '镇沅' }, { enname: 'ning er', id: '101290912', name: '宁洱' }]
  }, {
    enname: 'zhao tong',
    id: '2910',
    name: '昭通',
    children: [{ enname: 'zhao tong', id: '101291001', name: '昭通' }, { enname: 'lu dian', id: '101291002', name: '鲁甸' }, { enname: 'yi liang', id: '101291003', name: '彝良' }, { enname: 'zhen xiong', id: '101291004', name: '镇雄' }, { enname: 'wei xin', id: '101291005', name: '威信' }, { enname: 'qiao jia', id: '101291006', name: '巧家' }, { enname: 'sui jiang', id: '101291007', name: '绥江' }, { enname: 'yong shan', id: '101291008', name: '永善' }, { enname: 'yan jin', id: '101291009', name: '盐津' }, { enname: 'da guan', id: '101291010', name: '大关' }, { enname: 'shui fu', id: '101291011', name: '水富' }]
  }, {
    enname: 'lin cang',
    id: '2911',
    name: '临沧',
    children: [{ enname: 'lin cang', id: '101291101', name: '临沧' }, { enname: 'cang yuan', id: '101291102', name: '沧源' }, { enname: 'geng ma', id: '101291103', name: '耿马' }, { enname: 'shuang jiang', id: '101291104', name: '双江' }, { enname: 'feng qing', id: '101291105', name: '凤庆' }, { enname: 'yong de', id: '101291106', name: '永德' }, { enname: 'yun xian', id: '101291107', name: '云县' }, { enname: 'zhen kang', id: '101291108', name: '镇康' }]
  }, {
    enname: 'nu jiang',
    id: '2912',
    name: '怒江',
    children: [{ enname: 'nu jiang', id: '101291201', name: '怒江' }, { enname: 'fu gong', id: '101291203', name: '福贡' }, { enname: 'lan ping', id: '101291204', name: '兰坪' }, { enname: 'lu shui', id: '101291205', name: '泸水' }, { enname: 'liu ku', id: '101291206', name: '六库' }, { enname: 'gong shan', id: '101291207', name: '贡山' }]
  }, {
    enname: 'di qing',
    id: '2913',
    name: '迪庆',
    children: [{ enname: 'xiang ge li la', id: '101291301', name: '香格里拉' }, { enname: 'de qin', id: '101291302', name: '德钦' }, { enname: 'wei xi', id: '101291303', name: '维西' }, { enname: 'zhong dian', id: '101291304', name: '中甸' }]
  }, {
    enname: 'li jiang',
    id: '2914',
    name: '丽江',
    children: [{ enname: 'li jiang', id: '101291401', name: '丽江' }, { enname: 'yong sheng', id: '101291402', name: '永胜' }, { enname: 'hua ping', id: '101291403', name: '华坪' }, { enname: 'ning lang', id: '101291404', name: '宁蒗' }]
  }, {
    enname: 'de hong',
    id: '2915',
    name: '德宏',
    children: [{ enname: 'de hong', id: '101291501', name: '德宏' }, { enname: 'long chuan', id: '101291503', name: '陇川' }, { enname: 'ying jiang', id: '101291504', name: '盈江' }, { enname: 'rui li', id: '101291506', name: '瑞丽' }, { enname: 'liang he', id: '101291507', name: '梁河' }, { enname: 'lu xi', id: '101291508', name: '潞西' }]
  }, {
    enname: 'xi shuang ban na',
    id: '2916',
    name: '西双版纳',
    children: [{ enname: 'jing hong', id: '101291601', name: '景洪' }, { enname: 'meng hai', id: '101291603', name: '勐海' }, { enname: 'meng la', id: '101291605', name: '勐腊' }]
  }]
}, {
  enname: 'guang xi',
  id: '30',
  name: '广西',
  children: [{
    enname: 'nan ning',
    id: '3001',
    name: '南宁',
    children: [{ enname: 'nan ning', id: '101300101', name: '南宁' }, { enname: 'yong ning', id: '101300103', name: '邕宁' }, { enname: 'heng xian', id: '101300104', name: '横县' }, { enname: 'long an', id: '101300105', name: '隆安' }, { enname: 'ma shan', id: '101300106', name: '马山' }, { enname: 'shang lin', id: '101300107', name: '上林' }, { enname: 'wu ming', id: '101300108', name: '武鸣' }, { enname: 'bin yang', id: '101300109', name: '宾阳' }]
  }, {
    enname: 'chong zuo',
    id: '3002',
    name: '崇左',
    children: [{ enname: 'chong zuo', id: '101300201', name: '崇左' }, { enname: 'tian deng', id: '101300202', name: '天等' }, { enname: 'long zhou', id: '101300203', name: '龙州' }, { enname: 'ping xiang', id: '101300204', name: '凭祥' }, { enname: 'da xin', id: '101300205', name: '大新' }, { enname: 'fu sui', id: '101300206', name: '扶绥' }, { enname: 'ning ming', id: '101300207', name: '宁明' }]
  }, {
    enname: 'liu zhou',
    id: '3003',
    name: '柳州',
    children: [{ enname: 'liu zhou', id: '101300301', name: '柳州' }, { enname: 'liu cheng', id: '101300302', name: '柳城' }, { enname: 'lu zhai', id: '101300304', name: '鹿寨' }, { enname: 'liu jiang', id: '101300305', name: '柳江' }, { enname: 'rong an', id: '101300306', name: '融安' }, { enname: 'rong shui', id: '101300307', name: '融水' }, { enname: 'san jiang', id: '101300308', name: '三江' }]
  }, {
    enname: 'lai bin',
    id: '3004',
    name: '来宾',
    children: [{ enname: 'lai bin', id: '101300401', name: '来宾' }, { enname: 'xin cheng', id: '101300402', name: '忻城' }, { enname: 'jin xiu', id: '101300403', name: '金秀' }, { enname: 'xiang zhou', id: '101300404', name: '象州' }, { enname: 'wu xuan', id: '101300405', name: '武宣' }, { enname: 'he shan', id: '101300406', name: '合山' }]
  }, {
    enname: 'gui lin',
    id: '3005',
    name: '桂林',
    children: [{ enname: 'gui lin', id: '101300501', name: '桂林' }, { enname: 'long sheng', id: '101300503', name: '龙胜' }, { enname: 'yong fu', id: '101300504', name: '永福' }, { enname: 'lin gui', id: '101300505', name: '临桂' }, { enname: 'xing an', id: '101300506', name: '兴安' }, { enname: 'ling chuan', id: '101300507', name: '灵川' }, { enname: 'quan zhou', id: '101300508', name: '全州' }, { enname: 'guan yang', id: '101300509', name: '灌阳' }, { enname: 'yang shuo', id: '101300510', name: '阳朔' }, { enname: 'gong cheng', id: '101300511', name: '恭城' }, { enname: 'ping le', id: '101300512', name: '平乐' }, { enname: 'li pu', id: '101300513', name: '荔浦' }, { enname: 'zi yuan', id: '101300514', name: '资源' }]
  }, {
    enname: 'wu zhou',
    id: '3006',
    name: '梧州',
    children: [{ enname: 'wu zhou', id: '101300601', name: '梧州' }, { enname: 'teng xian', id: '101300602', name: '藤县' }, { enname: 'cang wu', id: '101300604', name: '苍梧' }, { enname: 'meng shan', id: '101300605', name: '蒙山' }, { enname: 'cen xi', id: '101300606', name: '岑溪' }]
  }, {
    enname: 'he zhou',
    id: '3007',
    name: '贺州',
    children: [{ enname: 'he zhou', id: '101300701', name: '贺州' }, { enname: 'zhao ping', id: '101300702', name: '昭平' }, { enname: 'fu chuan', id: '101300703', name: '富川' }, { enname: 'zhong shan', id: '101300704', name: '钟山' }]
  }, {
    enname: 'gui gang',
    id: '3008',
    name: '贵港',
    children: [{ enname: 'gui gang', id: '101300801', name: '贵港' }, { enname: 'gui ping', id: '101300802', name: '桂平' }, { enname: 'ping nan', id: '101300803', name: '平南' }]
  }, {
    enname: 'yu lin',
    id: '3009',
    name: '玉林',
    children: [{ enname: 'yu lin', id: '101300901', name: '玉林' }, { enname: 'bo bai', id: '101300902', name: '博白' }, { enname: 'bei liu', id: '101300903', name: '北流' }, { enname: 'rong xian', id: '101300904', name: '容县' }, { enname: 'lu chuan', id: '101300905', name: '陆川' }, { enname: 'xing ye', id: '101300906', name: '兴业' }]
  }, {
    enname: 'bai se',
    id: '3010',
    name: '百色',
    children: [{ enname: 'bai se', id: '101301001', name: '百色' }, { enname: 'na po', id: '101301002', name: '那坡' }, { enname: 'tian yang', id: '101301003', name: '田阳' }, { enname: 'de bao', id: '101301004', name: '德保' }, { enname: 'jing xi', id: '101301005', name: '靖西' }, { enname: 'tian dong', id: '101301006', name: '田东' }, { enname: 'ping guo', id: '101301007', name: '平果' }, { enname: 'long lin', id: '101301008', name: '隆林' }, { enname: 'xi lin', id: '101301009', name: '西林' }, { enname: 'le ye', id: '101301010', name: '乐业' }, { enname: 'ling yun', id: '101301011', name: '凌云' }, { enname: 'tian lin', id: '101301012', name: '田林' }]
  }, {
    enname: 'qin zhou',
    id: '3011',
    name: '钦州',
    children: [{ enname: 'qin zhou', id: '101301101', name: '钦州' }, { enname: 'pu bei', id: '101301102', name: '浦北' }, { enname: 'ling shan', id: '101301103', name: '灵山' }]
  }, {
    enname: 'he chi',
    id: '3012',
    name: '河池',
    children: [{ enname: 'he chi', id: '101301201', name: '河池' }, { enname: 'tian e', id: '101301202', name: '天峨' }, { enname: 'dong lan', id: '101301203', name: '东兰' }, { enname: 'ba ma', id: '101301204', name: '巴马' }, { enname: 'huan jiang', id: '101301205', name: '环江' }, { enname: 'luo cheng', id: '101301206', name: '罗城' }, { enname: 'yi zhou', id: '101301207', name: '宜州' }, { enname: 'feng shan', id: '101301208', name: '凤山' }, { enname: 'nan dan', id: '101301209', name: '南丹' }, { enname: 'dou an', id: '101301210', name: '都安' }, { enname: 'da hua', id: '101301211', name: '大化' }]
  }, {
    enname: 'bei hai',
    id: '3013',
    name: '北海',
    children: [{ enname: 'bei hai', id: '101301301', name: '北海' }, { enname: 'he pu', id: '101301302', name: '合浦' }, { enname: 'wei zhou dao', id: '101301303', name: '涠洲岛' }]
  }, {
    enname: 'fang cheng gang',
    id: '3014',
    name: '防城港',
    children: [{ enname: 'fang cheng gang', id: '101301401', name: '防城港' }, { enname: 'shang si', id: '101301402', name: '上思' }, { enname: 'dong xing', id: '101301403', name: '东兴' }, { enname: 'fang cheng', id: '101301405', name: '防城' }]
  }]
}, {
  enname: 'hai nan',
  id: '31',
  name: '海南',
  children: [{
    enname: 'hai nan',
    id: '3101',
    name: '海南',
    children: [{ enname: 'hai kou', id: '101310101', name: '海口' }, { enname: 'san ya', id: '101310201', name: '三亚' }, { enname: 'dong fang', id: '101310202', name: '东方' }, { enname: 'lin gao', id: '101310203', name: '临高' }, { enname: 'cheng mai', id: '101310204', name: '澄迈' }, { enname: 'dan zhou', id: '101310205', name: '儋州' }, { enname: 'chang jiang', id: '101310206', name: '昌江' }, { enname: 'bai sha', id: '101310207', name: '白沙' }, { enname: 'qiong zhong', id: '101310208', name: '琼中' }, { enname: 'ding an', id: '101310209', name: '定安' }, { enname: 'tun chang', id: '101310210', name: '屯昌' }, { enname: 'qiong hai', id: '101310211', name: '琼海' }, { enname: 'wen chang', id: '101310212', name: '文昌' }, { enname: 'bao ting', id: '101310214', name: '保亭' }, { enname: 'wan ning', id: '101310215', name: '万宁' }, { enname: 'ling shui', id: '101310216', name: '陵水' }, { enname: 'xi sha', id: '101310217', name: '西沙' }, { enname: 'nan sha dao', id: '101310220', name: '南沙岛' }, { enname: 'le dong', id: '101310221', name: '乐东' }, { enname: 'wu zhi shan', id: '101310222', name: '五指山' }]
  }]
}, {
  enname: 'xiang gang',
  id: '32',
  name: '香港',
  children: [{
    enname: 'xiang gang',
    id: '3201',
    name: '香港',
    children: [{ enname: 'xiang gang', id: '101320101', name: '香港' }, { enname: 'xin jie', id: '101320103', name: '新界' }]
  }]
}, {
  enname: 'ao men',
  id: '33',
  name: '澳门',
  children: [{
    enname: 'ao men',
    id: '3301',
    name: '澳门',
    children: [{ enname: 'ao men', id: '101330101', name: '澳门' }]
  }]
}, {
  enname: 'tai wan',
  id: '34',
  name: '台湾',
  children: [{
    enname: 'tai bei',
    id: '3401',
    name: '台北',
    children: [{ enname: 'tai bei', id: '101340101', name: '台北' }, { enname: 'tao yuan', id: '101340102', name: '桃园' }, { enname: 'xin zhu', id: '101340103', name: '新竹' }, { enname: 'yi lan', id: '101340104', name: '宜兰' }]
  }, {
    enname: 'gao xiong',
    id: '3402',
    name: '高雄',
    children: [{ enname: 'gao xiong', id: '101340201', name: '高雄' }, { enname: 'jia yi', id: '101340202', name: '嘉义' }, { enname: 'tai nan', id: '101340203', name: '台南' }, { enname: 'tai dong', id: '101340204', name: '台东' }, { enname: 'ping dong', id: '101340205', name: '屏东' }]
  }, {
    enname: 'tai zhong',
    id: '3404',
    name: '台中',
    children: [{ enname: 'tai zhong', id: '101340401', name: '台中' }, { enname: 'miao li', id: '101340402', name: '苗栗' }, { enname: 'zhang hua', id: '101340403', name: '彰化' }, { enname: 'nan tou', id: '101340404', name: '南投' }, { enname: 'hua lian', id: '101340405', name: '花莲' }, { enname: 'yun lin', id: '101340406', name: '云林' }]
  }]
}];

/* eslint-disable global-require */

var cityPicker = function () {
  function cityPicker(options) {
    var _this = this;

    classCallCheck(this, cityPicker);

    this.cityData = [];
    this.defaults = $.extend({
      id: 'cityPicker',
      className: '',
      container: 'body',
      onChange: $.noop,
      onConfirm: $.noop,
      // defaultValue: ['01', '0101', '101010100'],
      defaultValue: ['07', '0702', '101070202'],
      resultType: 'value', //回调时返回的数据，value：值，默认：序号
      cityCode: true,
      showAuto: false, //TODO: 展示自动定位
      level: 3
    }, options);
    var defaultIndex = [];
    var cityData = [];
    if (this.defaults.cityCode) {
      cityData = util.deepCopy(importCityCodeData);
      //显示包含citycode的城市数据，这个数据的value为code
      cityData.forEach(function (element, index) {
        element.label = element.name;
        element.value = element.id;
        if (element.value === _this.defaults.defaultValue[0]) {
          defaultIndex.push(index);
        }
        if (element.children && _this.defaults.level > 1) {
          element.children.forEach(function (element1, index1) {
            element1.label = element1.name;
            element1.value = element1.id;
            if (element1.value === _this.defaults.defaultValue[1]) {
              defaultIndex.push(index1);
            }
            if (element1.children && _this.defaults.level > 2) {
              element1.children.forEach(function (element2, index2) {
                element2.label = element2.name;
                element2.value = element2.id;
                if (element2.value === _this.defaults.defaultValue[2]) {
                  defaultIndex.push(index2);
                }
              });
            } else {
              delete element1.children;
            }
          });
        } else {
          delete element.children;
        }
      });
    } else {
      cityData = util.deepCopy(importCityData);
      //显示包含经纬度的城市数据，这个数据的value为label即名称
      this.defaults.defaultValue = ['北京市', '市辖区', '东城区']; //经纬度数据没有value值，故设置初始值为城市名称
      cityData.forEach(function (element, index) {
        element.value = element.label;
        if (element.value === _this.defaults.defaultValue[0]) {
          defaultIndex.push(index);
        }
        if (element.children && _this.defaults.level > 1) {
          element.children.forEach(function (element1, index1) {
            element1.value = element1.label;
            if (element1.value === _this.defaults.defaultValue[1]) {
              defaultIndex.push(index1);
            }
            if (element1.children && _this.defaults.level > 2) {
              element1.children.forEach(function (element2, index2) {
                element2.value = element2.label;
                if (element2.value === _this.defaults.defaultValue[2]) {
                  defaultIndex.push(index2);
                }
              });
            } else {
              delete element1.children;
            }
          });
        } else {
          delete element.children;
        }
      });
    }
    this.defaults.defaultIndex = defaultIndex;
    this.cityData = cityData;
    this.show();
  }

  cityPicker.prototype.getCityList = function getCityList(cityList1, provinceId) {
    var localList = cityList1[provinceId];
    var resultList = [];
    if (!localList || localList.length === 0) {
      return resultList;
    }
    localList.forEach(function (element) {
      resultList.push({
        label: element.name,
        value: element.id
      });
    });
    return resultList;
  };

  cityPicker.prototype.getCountyList = function getCountyList(countyList1, cityId) {
    var localList = countyList1[cityId];
    var resultList = [];
    if (!localList || localList.length === 0) {
      return resultList;
    }
    localList.forEach(function (element) {
      resultList.push({
        label: element.name,
        value: element.id
      });
    });
    return resultList;
  };

  cityPicker.prototype.show = function show() {
    new picker$1(this.cityData, this.defaults);
  };

  return cityPicker;
}();

__$styleInject(".toast_wrapper{position:fixed;bottom:30px;left:0;right:0;z-index:1;opacity:0;height:0;overflow:hidden;text-align:center;-webkit-transition:opacity .3s ease-out;transition:opacity .3s ease-out}.toast_wrapper.show{opacity:.8;height:auto}.toast_wrapper.hide{opacity:0;height:auto}.toast_txt{display:inline-block;height:30px;line-height:30px;background-color:#000;color:#fff;text-align:center;border-radius:10px;font-size:14px;font-weight:500;padding:0 10px}", undefined);

var toast$1 = function () {
  // $toastItem = null;
  // htmlTpl = '<div class="toast_wrapper"><div class="toast_txt"><%= message %></div></div>';
  function toast() {
    classCallCheck(this, toast);

    this.$toastItem = null;
    this.htmlTpl = '<div class="toast_wrapper"><div class="toast_txt"><%= message %></div></div>';
  }

  toast.prototype.show = function show(message) {
    var _this = this;

    if (this.$toastItem) {
      return;
    }
    this.$toastItem = $($.render(this.htmlTpl, {
      message: message
    }));
    if ($(document.body).find('.toast_wrapper').length === 0) {
      $(document.body).append(this.$toastItem);
    }
    setTimeout(function () {
      _this.$toastItem.addClass('show');
    }, 0);
    setTimeout(function () {
      _this.$toastItem.addClass('hide');
      _this.$toastItem.removeClass('show');
    }, 700);
    setTimeout(function () {
      _this.hide();
    }, 1100);
  };

  toast.prototype.hide = function hide() {
    this.$toastItem.remove();
    this.$toastItem = null;
  };

  return toast;
}();

__$styleInject(".hidden{display:none!important}.pageload_mask{opacity:.8;z-index:1;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:#000;background-size:25px 25px}.maskImage{width:22px;height:22px;margin-top:-11px;margin-left:-11px;background:url(//order.51wnl.com/pay_web/img/loading.png) no-repeat 50%;background-size:22px 22px;-webkit-animation:circle 1s cubic-bezier(.645,.045,.355,1) infinite;animation:circle 1s cubic-bezier(.645,.045,.355,1) infinite}.maskContent,.maskImage{position:absolute;left:50%;top:50%}.maskContent{width:40px;height:40px;margin-left:-20px;margin-top:-20px;background-color:#fff;opacity:.2;border-radius:7px}@-webkit-keyframes circle{0%{-webkit-transform:rotate(0);transform:rotate(0)}67%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes circle{0%{-webkit-transform:rotate(0);transform:rotate(0)}67%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.jumpOut{-webkit-animation:jumpout .33s cubic-bezier(.6,-.28,.735,.045) forwards;animation:jumpout .33s cubic-bezier(.6,-.28,.735,.045) forwards}@-webkit-keyframes jumpout{0%{-webkit-transform:scale(1);transform:scale(1)}33%{-webkit-transform:scale(1.02);transform:scale(1.02)}to{-webkit-transform:scale(0);transform:scale(0)}}@keyframes jumpout{0%{-webkit-transform:scale(1);transform:scale(1)}33%{-webkit-transform:scale(1.02);transform:scale(1.02)}to{-webkit-transform:scale(0);transform:scale(0)}}", undefined);

var pageloader$1 = function () {
  // $loaderItem = null;
  // htmlTpl = '<div class="pageload_mask hidden"><div class="maskImage"></div><div class="maskContent"></div></div>';
  function pageloader() {
    classCallCheck(this, pageloader);

    this.$loaderItem = null;
    this.htmlTpl = '<div class="pageload_mask hidden"><div class="maskImage"></div><div class="maskContent"></div></div>';
    this.$loaderItem = $($.render(this.htmlTpl, {}));
  }

  pageloader.prototype.show = function show() {
    this.$loaderItem.removeClass('hidden');
    this.$loaderItem.find('.maskImage').removeClass('jumpOut');
    this.$loaderItem.find('.maskContent').removeClass('jumpOut');
    if ($(document.body).find('.pageload_mask').length === 0) {
      $(document.body).append(this.$loaderItem);
    }
  };

  pageloader.prototype.hide = function hide() {
    var _this = this;

    this.$loaderItem.find('.maskImage').addClass('jumpOut');
    this.$loaderItem.find('.maskContent').addClass('jumpOut');
    setTimeout(function () {
      _this.$loaderItem.remove();
    }, 330);
  };

  return pageloader;
}();

__$styleInject(".wnlshare-platform{z-index:3;position:fixed;bottom:0;left:0;width:100%;visibility:hidden}.wnlshare-mask{z-index:1;height:100%;position:fixed;top:0;left:0;opacity:.3;background-color:#000}.wnlshare-mask,.wnlshare-wrap{width:100%;-webkit-transition:all .3s;transition:all .3s;-webkit-transition-timing-function:ease;transition-timing-function:ease}.wnlshare-wrap{z-index:2;position:absolute;bottom:0;background-color:hsla(0,0%,100%,.95)}.wnlshare-list{padding-bottom:10px;clear:both;overflow:hidden}.wnlshare-line{width:98%;height:1px;margin:0 auto;background-color:#ccc;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.wnlshare-button{height:50px;width:100%;text-align:center;color:#666;line-height:50px;position:relative;font-size:18px}.wnlshare-item{float:left;width:25%;margin-top:10px}.wnlshare-item-name{text-align:center;margin-top:10px;font-size:14px}.wnlshare-weixin .wnlshare-item-icon{background-color:#8dc81b;background-repeat:no-repeat;background-position:5px 5px}.wnlshare-weixin_circle .wnlshare-item-icon{background-position:5px -45px;background-color:#e7792a}.wnlshare-qq .wnlshare-item-icon{background-position:5px -95px;background-color:#58ceff}.wnlshare-qzone .wnlshare-item-icon{background-position:5px -145px;background-color:#ffc345}.wnlshare-sina .wnlshare-item-icon{background-position:5px -195px;background-color:#ff6058}.wnlshare-email .wnlshare-item-icon{background-position:5px -245px;background-color:#4996ff}.wnlshare-sms .wnlshare-item-icon{background-position:5px -295px;background-color:#04c400}.wnlshare-item-icon{border-radius:50%;width:60px;height:60px;margin:0 auto;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAIwCAMAAAAmpBzsAAAAsVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3mHKcAAAAOnRSTlMA+QsHA/TEJBU94hqZTuakwQ/Y79yIQ7ydaEEoy7getF5S6tTPqZAwLLBJoGM0glaUi3N4bq04Wsh8bZQIQAAADa5JREFUeNrs3GlT2kAAxvFnc3EaCIeAHKIcymGhKtQ+3/+DFUcwwGazG8JMO5383vfPJtlJyS4RmUwm85+xCz82Xq0u/FG1PMwhJWd17/JYsZmmaXcalPXvcKG7IqNNShcNr0kld4jE8j3GaTpIxuox3sZJ1qtSp4wk2tR7h7kCDz6W86YII/1fN2vuiSeYsmvcu3cAdHiwxs5P7lVhKizcYSfPgwF2tjy4gSGPB7fYKfEgd3o+PJjJ8ZtnA/jNg8nZBSvByBtDjbflgqHx63LGUAdGJtTy2+8PhdxTzvQUxqs3n4Dn5e/1ZDJ9+1WCVpFx3GYe84XPb6OfuoEKxugNnNWYp8TkGXHqVGvbA48RftpQa1CpiZXi48ZdKG2oMkGHKvUn3TyUfdi/qPaoHGOXCs8vgjGKARR6jFR2ehfecx8Yxc2/c2/8HAzdQyU/WHOvkGiIs3DGdwHs6zUHQJVfWlB4FpQN73gQhIdRxU5Fe/t5p0QEZR5Mj/6bvQUKgntvUFnzXANjfhv169wTrY/j06LiSMUqHqk1Rkh31BWLenXEuHF5bG0SdBFncTpC1KlVRAznNNDCiFr3iHHLT67gl0dUqPWKGOWv+7390inf94quX5pTR5Sg5vgU0zyO2I/UmCBGQazPP+8H44lcbHCAc3ZD9wUvqTnjVJDcG9XGFhLQn8ZeHhd5E4opbeFCLw1GqDq4mPXmUzJCGnanKsJWvcGdHNKx5j/a9x/eZNrpwln60hxMm//h9nFdpbKFTCaTyWQymQNr21l7NV8If+Qt3gsWUgl+zQRPiOoDLue0KKugO8clntp5WNWo4B0/kietMjnaF+Ug2R8gkdsid2qlfVEOsj6EOWdKMixGBsmJBUPWjDwqthRBfuRhJP9BxhTDIBuDZBsWYVERZM1gjHaflIuKIKs2dMqksigHOYHGDRlTlIMcIlb+kREau2JfEayXEGdDKop2PzrImWaHRlOUg5xDrUVtUQ5OEg4wnMR2Pyo4zkMpd6vy0n3J4bMYBsNeCvb9dzDsWcplgptyhOFpcXEIhr0WVwkuifTp7UMw7HGDSJagpO/IW8/7YNijayHKlpKPABHuznrkC6K8x/bkYC/4vp0vEWWh6YXB8x7XRptcXgBFMOzF7m6OznoWVMHzHmuI4p/3cjlEej7v0UcUcd4rPiNS97xHERcMe1SM8OWz51Eb9M97VIxwEPZiD7l23mMBCmc9juKnTXXfY0HT0+w4r897LBj2uECUznmPhbiefuF5e9SLCQYeJVtEsdx9z+d3cCXfvu4pERYibQ69MFhpy1/1ZFVEW7FloevzOMiFjWPLdoQbRLPuv3thkH0bKRx6YfCrWMpbpZxKYNALg1/FW0G1ZyjNKAUPRfei7ZmtHNQXu4ixiA6yZSmLbcQJilJQUywGiDWXgmHxLqpYgMZUCsYWf0LH2UjBmOLMgZbtSUFl0bNgIO9JwbBYCIvmD3vWTBFk9aS4sWDIaYZBdfGnA3OFRhiMLhbnyZcIwqBcbAdIqls5BOVif4tLdEtRQbYcXO6hKnhCzIYBUrEK7wtv5Avh17x1Z5vtaWUymUzmH+I8vc5qghS1+98FG2mVpnUeqU9z6XJrwXPtABfb+ozgz3GhoWAkMcRFllTq4AIvgmq3SCxfZIzHEpLaMNYGCd1Rku6gPWr0E14Rag2QRJlaP5BEkVq+A3PPNFCAuVca+A1zfRpowZxPA48wZtNIAFNdGnmCqTmNbGHqgUZuYWpFI3OY+kUjDzA1pJElTDVp5CcMOUUaaTgpZk2qq7KhoRmMlAQNiVKKH1+nuIM1aKzoQO+WCcwTv8OW/rLkBSWpLssrE3mDzpiJ9KCRY0K5ZEec/pg9JvSBWAGTEpbma2FiBc0pTOwVcSrc6fk04vf0v7gZkXRzLRrpd4X25QVBcokpjUzxTlIgztchDGlk+HUn0YzwwwIClwbcALDGmhH2xvm4V7flvaNSz0OcgW32EBD+/MIuXespoIwkrAY1GhYSKQjGEgUkdCNiezfANYviAUk5N33GaC0tJGG/NqhRf7MT9Ho0MAqu/R17leCFqLJXexT85Pq1Xmu2WLcn/eq4VqwfXpKqLt5tZDKZTCaT+Rs67OCanAZ9C1e0kp7BUhqTfLziEOfSsk9KVX6qB7iSLb80cSUzfnHzuIpnHkxxFRVpISmdgZCex9JZMyRy0Ei6urZAak2e6KYeoKtfMUy3f3aXcg6KpAt8yXenhjB0E+GVsuKNJIcov+q8kOqNhEGVJ9yxp+LyiJeHgvObp2qbH6uuo1mML9tQWwlKxKjydnqWpgyJDmLd1RnN7bVfb/HJrjDkzrUTr0gVd4Udq89Q8QlapRFl4T/O9xgal2AgqDJKNY+dQe2Cv/Ri/2nv3HsTh2EA7pAUSgsFWjjGGI+WQeF4jG5s3Pz9P9jpoCxAX0lW3emk/P5BqoSVOE6axrE9x5jEWC4d5OwZiBIh53os6x5yDqDusQ4eE4dNRhOSiBrk7GyFm6tnwRYkuercqpKcHn2QpJK4f7DIT3cl7AYxfD49rqmAHD+4NfPpcY2sDqfcmvnN+WuOIMfn3cpk+722IX+zg9NIWZlYOHiY8RANOSaxNSfo/PicBIj4LL+pnveyiN4tJEzWrouoydm1oFtU/S7GqPmUHb0l78J1XgDYwVP2Bdy5aMiic7bFOV7RlrRrzlPIP4C6V61W3MR5AwYcuiN4oSNn1zEt+364+krLQzzD3B9p+g3wxFTarsknhTTiJJA9WbseZc+Fj2fJ+3jDk+nlwF4NqXxp9mhRNIbj9QE0Go1Go9FoNP8fj+uqZRjGbPU2hDJ4Q87syODbeHiNW4fvYuENZPfdRvoGknZrNUsUQFHG3FZO3xb+pCQPBies8juSgtAfvV+O4e7N3KTUninauU8Hzzj2zfP6z3r8YCDRaboz0vNe/CQngxmwr4uFpAPF1N2s266N61QJla5YRRW2yz7qqnvoBV/BV29Cfe5M8gIzGAVYtuODkZpImuyxmxUVVVluQxrnWo8vXQaI6EEuNSu1IABtNtxzDRE77uvs4tglgvlZON7y8Sr4MRifPbrBJUuYkdtfS+xu/GPc02rBAarZxWIIPTnFu5eIpXZuzg4RbIAhwejiiW3kJmcRbCHU6l+T75hXbEgyiCvKraxRM/AGd7V/m043m9f9hKv2dqq95J12sipyvIZv3oz+5p1wFXIGk/lSIFK0eqQpFhXFPQgemgyKoRbGdP0snXz1oftTovzTnn616edx0zSBwxYSDvvZnWPNXsRNbm+AsxaWGN46U9mbgV+sOmklHepCp5qLVBNvs5Sha4t4fp1Yf7vMeAJKBMMgrOs/jkl2VKcrGLF3FmHe+3eeBvf5zvp4YVksMEi0ohY75Q4pLRwXWA0PNzERkbyZbDjBn0Pn9rYNIxjjseIrIV1uQptbI3lNpjtticQRfgUGOHBinjC6vqgddgwedzi8XD9glxY6lYSbYCW0fY7leEiWf36j+8B02+F5VsVWm83FroNP//CLqyuRxW4gGC9K6imZdRssUXEwEnbaes2TxJ6HieXxgy8MPZmvkB49iRys/sh05i+MH9nHkDcQZHBO8zSgscpM7ircBXhhFoIw43jRWTwy4NjTOcELxo6CDH48kF618Tp98f1DNJ8hx9uZIMt2bWAGT68dUIE+Rs8E7zDar2P4BjTcRPOqFXiGYf1632+WDDQajUaj0Wg0Gs2/ZNwnqATpjzMujykzgTSGLiriDiGVzkqxfR1IZU1hhwrsgK4hDXyywTdQEsMH+wnTBWJQl1Zkdwl1B7MEIhlAZyKpvgHBbIGID5T1UJgeow+IuQLxl7gijRewf2GRQHQ+YNkVVN+Hg0UCY0WOsJCReVJfvsCYBmURFhAx2kAUFIhVG16MXPUdwa6iiECuyLCbo74QPiyUEYhkA2YfM+ibsCEoJpCzp2yBqSwY3SNKCOThHscURZIjmG1UEYjWFkIr5eHWQjWBSKa8MbzZU4LfEAhscas+4AKVutw6t4i3uBXyLisNinUWwHVqqA7KPp5/xjHOz1+9jHrEzUbesGMBC0IWlEWKhs2nHhdQqYDZv5l6DqL64uAcwvDg3KytUotDg7JeKctX+Qts+a+A8l9SD5TtpF+j5b/oS9yKuEOoB4ilb5ZK386VvuEsfUtc+qa9/M8KjUaj0Wg0Go1Gjdo0en+2PEI86/k9mtbgO1T8VoB3BC2/AmqMFwamYizGIM9wTTATsh6CHPY7FvBugwS+h4UETZlifUI0KoLacyW+oASoOSiMUxMwFgslsAoNyJb9ADcLxmOGkjznj0wDpWnIV1tQz2XBXFTAZZDFAZUYSNarUC+U4KMiPkC5hw6TgvLxZSXQb6IyzYywLGV2IpWIv19twkVlXEgjQGUCSIOgMuTvCHRQmaD0QSn9uK9sw+7JLDbqy02n7MVBXYkjuZpK6inlqYVKODQ7LECJ17xKCwp0ackvej8/6EWadcmbJbcDuQw9xHI3iB8GYrlb2LqExGAJAiwt4f6GIIQpqMdWp4SSjBxjCoKwJxRgVCu1nuB8q54BNgl5qIE4dpcP4uD40E2objU1QQJzhjHOOXBoPG2MXI8gEs8d7QchAxl4sPbzlMI1lIIKWwf/4K3rUApHcjqlaFIohyaZrTdD0Gg0GoDf7sJLZ8deW2wAAAAASUVORK5CYII=\");background-size:50px}", undefined);

/*eslint-disable*/
/*
万年历客户端分享js库
2016/11/15 create by liuyu
update Wed Oct 11 2017 liuyu
*/
// "use strict";
var root = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global.global === global && global || undefined;
//设备判断
var device = {},
    ua = root.navigator.userAgent,
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

var appVersion = parseInt(ua.split(' ').pop().replace(/\./g, ''));
var offsetHeight = '';
/*==================================================================
    分享参数
    ===================================================================*/
var args = {};

var params = {
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
var iosLegacyParams = {
  //分享标题
  pureText: '',
  //截图或者使用自定义图片
  image: '0',
  // 链接地址
  url: '',
  //自定义图片地址
  imageURL: ''
};

var androidLegacyParams = {
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
  var shareData = {};
  var perload = false;
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
root.wnlShare = {
  version: '1.2.0',
  appVersion: appVersion,
  device: device,
  callback: 'shareCallback',
  //设置旧版分享数据
  setShareData: function setShareData(param) {
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
  shareImage: function shareImage(platform, param) {
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
    _showSharePlatform();
  },

  //显示分享组件
  showSharePlatform: function showSharePlatform() {
    _showSharePlatform();
  },

  //设置直接分享
  singleShare: function singleShare(platform) {
    setParams(args, platform);
    commitShare();
  }
};
//向客户端发送分享请求
root.appCallback_share = function () {
  // (device.iso && appVersion < 450) || (device.android && appVersion < 451)
  if (device.iso && appVersion < 450 || device.android && appVersion < 451) {
    try {
      if (window.ylwindow) {
        ylwindow.reportHasShare(true);
        location.href = 'protocol://share:' + encodeURI(JSON.stringify(androidLegacyParams));
      } else {
        location.href = 'protocol://share#' + encodeURI(JSON.stringify(iosLegacyParams));
      }
    } catch (e) {}
    return 1;
  } else {
    if (window.ylwindow) {
      ylwindow.reportHasShare(true);
      _showSharePlatform();
    } else {
      _showSharePlatform();
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
  var node = '<div class="wnlshare-platform">\
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

  var platformListWrap = _$('.wnlshare-wrap');
  var platformMask = _$('.wnlshare-mask');
  var platformBtn = _$('.wnlshare-button');
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
  var html = '';
  var list = [{ name: 'weixin', text: '微信好友' }, { name: 'weixin_circle', text: '微信朋友圈' }, { name: 'qq', text: 'QQ' }, { name: 'qzone', text: 'QQ空间' }, { name: 'sina', text: '新浪微博'
    // { name: 'email', text: '邮件', },
    // { name: 'sms', text: '短信', }
  }];
  list.forEach(function (v, k) {
    html += '<div class="wnlshare-item wnlshare-' + v.name + '">\
                    <div class="wnlshare-item-icon" data-name="' + v.name + '"></div>\
                    <div class="wnlshare-item-name">' + v.text + '</div>\
                </div>';
  });
  return html;
}
//显示分享组件
function _showSharePlatform() {
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
  var el = document.querySelectorAll(element);
  return el.length > 1 ? el : el[0];
}
/*==================
模块导入支持
====================*/
var wnlShare = root.wnlShare;

/*eslint-disable*/
/**
 * created by liuyu january 05 2018
 */
getPromise();
var jweixinUrl = 'https://res.wx.qq.com/open/js/jweixin-1.2.0.js';
var wxParams = {};
function loadScript(url) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    document.querySelector('head').insertAdjacentElement('beforeend', script);
    script.addEventListener('load', function (e) {
      resolve(e);
    });
  });
}

loadScript(jweixinUrl).then(function (e) {
  return window.promise.get('//b.cqyouloft.com/interface/API/weixinhandler.ashx', {
    requesturl: location.href
  }).then(function (error, text, xhr) {
    var result = JSON.parse(text);
    // console.log(result)
    wx.config({
      /**
       * 开启调试模式,调用的所有api的返回值会在客户端alert出来，
       * 若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，
       * 仅在pc端时才会打印。
       */
      debug: false,
      appId: 'wx347ab26567c5465f', // 必填，公众号的唯一标识
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
      alert(JSON.stringify(e));
      console.log(e);
    });
  });
});

function setWxParams(params) {
  wx.onMenuShareTimeline({
    title: params.title, // 分享标题
    link: params.url, // 分享链接
    imgUrl: params.imgUrl, // 分享图标
    success: function success(e) {
      // 用户确认分享后执行的回调函数
      typeof params.callback === 'function' && params.callback(e);
    },
    cancel: function cancel(e) {
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
    success: function success(e) {
      // 用户确认分享后执行的回调函数
      typeof params.callback === 'function' && params.callback(e);
    },
    cancel: function cancel(e) {
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
    success: function success(e) {
      // 用户确认分享后执行的回调函数
      typeof params.callback === 'function' && params.callback(e);
    },
    cancel: function cancel(e) {
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
          if (h.toLowerCase() === 'content-type') content_type = headers[h];else xhr.setRequestHeader(h, headers[h]);
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
          var err = !xhr.status || (xhr.status < 200 || xhr.status >= 300) && xhr.status !== 304;
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

// import 'babel-polyfill';

var wnlui = {
  picker: picker$1,
  datePicker: datePicker,
  cityPicker: cityPicker,
  toast: toast$1,
  pageloading: pageloader$1,
  wnlShare: wnlShare,
  wxShare: setShareParams
};
window.wnlui = wnlui;
// babel-polyfill vs babel-runtime
// 那什么时候用 babel-polyfill 什么时候用 babel-runtime 呢？如果你不介意污染全局变量（如上面提到的业务代码），放心大胆地用 babel-polyfill ；而如果你在写模块，为了避免污染使用者的环境，没的选，只能用 babel-runtime + babel-plugin-transform-runtime。

export { picker$1 as picker, datePicker, cityPicker, toast$1 as toast, pageloader$1 as pageloading, wnlShare, setShareParams as wxShare };
