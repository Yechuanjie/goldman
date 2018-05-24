## git:
  [http://192.168.1.80:8080/summary/~guojinhai%2Fwnlutil.git](http://192.168.1.80:8080/summary/~guojinhai%2Fwnlutil.git)

## 开发测试：
  1. 执行指令：npm run watch
  2. 浏览器浏览demo中的index.html
  3. 开发测试代码在demo/index.js中编写

## 提供的工具api
demo中开发测试：
```
import { base64, calendar, util } from '../src/index';
```
其他项目引用：
```
import { base64, calendar, util } from '@wnl/util';
```

### base64的加密解密:base64
```
console.log(base64);
let encodeTxt = base64.encode('test');//base64加密
console.log(encodeTxt);
let decodeTxt = base64.decode(encodeTxt);//base64解密
console.log(decodeTxt);
```

### 历法处理类库：calendar

  包含基础的农历公历转换方法及更详细的黄历算法

### 工具函数：util

## Members

<dl>
<dt><a href="#isMiniprogram">isMiniprogram</a></dt>
<dd><p>是否在小程序webview环境中</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#isWeixin">isWeixin</a></dt>
<dd><p>是否在微信浏览器环境中</p>
</dd>
<dt><a href="#isWnl">isWnl</a></dt>
<dd><p>是否在万年历环境中</p>
</dd>
<dt><a href="#appVersion">appVersion</a></dt>
<dd><p>万年历app版本号，整数值，如：457</p>
</dd>
<dt><a href="#appVersionString">appVersionString</a></dt>
<dd><p>万年历app版本字符，如：4.5.7</p>
</dd>
<dt><a href="#iOSVersion">iOSVersion</a></dt>
<dd><p>ios的系统版本</p>
</dd>
<dt><a href="#androidVersion">androidVersion</a></dt>
<dd><p>安卓的系统版本</p>
</dd>
<dt><a href="#isAndroid">isAndroid</a></dt>
<dd><p>是否安卓系统</p>
</dd>
<dt><a href="#isIPad">isIPad</a></dt>
<dd><p>是否ipad设备</p>
</dd>
<dt><a href="#isIPhone">isIPhone</a></dt>
<dd><p>是否iphone设备</p>
</dd>
<dt><a href="#isIphoneX">isIphoneX</a></dt>
<dd><p>是否iphoneX</p>
</dd>
<dt><a href="#isIOS">isIOS</a></dt>
<dd><p>是否ios系统</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#GetIOSVersion">GetIOSVersion()</a></dt>
<dd><p>获得ios的系统版本</p>
</dd>
<dt><a href="#getAndroidVersion">getAndroidVersion()</a></dt>
<dd><p>获得安卓的系统版本</p>
</dd>
<dt><a href="#jsonToQueryString">jsonToQueryString(json)</a> ⇒</dt>
<dd><p>将json对象转换成url的查询字符串：?a=5&amp;b=2</p>
</dd>
<dt><a href="#formatNumber">formatNumber(n)</a> ⇒</dt>
<dd><p>格式化数字，小于10则补零</p>
</dd>
<dt><a href="#formatDate">formatDate(date, fmt)</a> ⇒</dt>
<dd><p>将时间对象转换为指定格式的字符串</p>
</dd>
<dt><a href="#str2Int">str2Int(str)</a> ⇒</dt>
<dd><p>将字符转换成数字，因为在某些低版本的安卓中parseInt(&#39;02&#39;)会转成0的bug</p>
</dd>
<dt><a href="#getQueryValue">getQueryValue(name)</a> ⇒</dt>
<dd><p>获取url查询字符串的值</p>
</dd>
<dt><a href="#deepCopy">deepCopy(source)</a> ⇒</dt>
<dd><p>对象深拷贝</p>
</dd>
<dt><a href="#throttle">throttle(Function, Number, Number)</a> ⇒</dt>
<dd><p>函数节流方法，多用于scroll及input的延时执行</p>
</dd>
<dt><a href="#getDayDistance">getDayDistance(startDate, endDate)</a> ⇒</dt>
<dd><p>获取两个日期之前间隔的天数</p>
</dd>
<dt><a href="#getDayDistanceString">getDayDistanceString(distance)</a> ⇒</dt>
<dd><p>根据间隔的天数获取描述</p>
</dd>
<dt><a href="#setHairlines">setHairlines()</a></dt>
<dd><p>判断设备是否支持0.5px的边框，如支持则在根目录的html中添加hairlines的class</p>
</dd>
<dt><a href="#isObject">isObject(obj)</a> ⇒</dt>
<dd><p>是否是object</p>
</dd>
<dt><a href="#isEmptyObject">isEmptyObject(obj)</a> ⇒</dt>
<dd><p>是否空对象</p>
</dd>
<dt><a href="#isNum">isNum(s)</a> ⇒</dt>
<dd><p>判断是否为数字</p>
</dd>
<dt><a href="#checkAppInstall">checkAppInstall(appInfo, appPackgeName, iosSchaema, apkLink, thirdPartyLink, itunesLink)</a></dt>
<dd><p>检查app安装状态，已安装则打开，未安装则下载或跳转下载链接</p>
</dd>
<dt><a href="#fitInputBottom">fitInputBottom(outDom)</a></dt>
<dd><p>适应底部输入框的方法</p>
</dd>
<dt><a href="#uuid">uuid(len, radix)</a> ⇒</dt>
<dd><p>生成uuid的函数</p>
</dd>
</dl>

<a name="isMiniprogram"></a>

## isMiniprogram
是否在小程序webview环境中

**Kind**: global variable
<a name="isWeixin"></a>

## isWeixin
是否在微信浏览器环境中

**Kind**: global constant
<a name="isWnl"></a>

## isWnl
是否在万年历环境中

**Kind**: global constant
<a name="appVersion"></a>

## appVersion
万年历app版本号，整数值，如：457

**Kind**: global constant
<a name="appVersionString"></a>

## appVersionString
万年历app版本字符，如：4.5.7

**Kind**: global constant
<a name="iOSVersion"></a>

## iOSVersion
ios的系统版本

**Kind**: global constant
<a name="androidVersion"></a>

## androidVersion
安卓的系统版本

**Kind**: global constant
<a name="isAndroid"></a>

## isAndroid
是否安卓系统

**Kind**: global constant
<a name="isIPad"></a>

## isIPad
是否ipad设备

**Kind**: global constant
<a name="isIPhone"></a>

## isIPhone
是否iphone设备

**Kind**: global constant
<a name="isIphoneX"></a>

## isIphoneX
是否iphoneX

**Kind**: global constant
<a name="isIOS"></a>

## isIOS
是否ios系统

**Kind**: global constant
<a name="GetIOSVersion"></a>

## GetIOSVersion()
获得ios的系统版本

**Kind**: global function
<a name="getAndroidVersion"></a>

## getAndroidVersion()
获得安卓的系统版本

**Kind**: global function
<a name="jsonToQueryString"></a>

## jsonToQueryString(json) ⇒
将json对象转换成url的查询字符串：?a=5&b=2

**Kind**: global function
**Returns**: 转换成url的查询字符串

| Param | Type | Description |
| --- | --- | --- |
| json | <code>Object</code> | 需要转换的json对象:{a:5,b:2} |

<a name="formatNumber"></a>

## formatNumber(n) ⇒
格式化数字，小于10则补零

**Kind**: global function
**Returns**: 格式化后的字符

| Param | Type | Description |
| --- | --- | --- |
| n | <code>Number</code> | 需要格式化的数字 |

<a name="formatDate"></a>

## formatDate(date, fmt) ⇒
将时间对象转换为指定格式的字符串

**Kind**: global function
**Returns**: 指定格式的字符串

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | 时间对象 |
| fmt | <code>String</code> | 需要转换的格式：yyyy-MM-dd |

<a name="str2Int"></a>

## str2Int(str) ⇒
将字符转换成数字，因为在某些低版本的安卓中parseInt('02')会转成0的bug

**Kind**: global function
**Returns**: 数字

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 需要转换成数字的字符 |

<a name="getQueryValue"></a>

## getQueryValue(name) ⇒
获取url查询字符串的值

**Kind**: global function
**Returns**: 查询字符串的值

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | 需要查询的值的key |

<a name="deepCopy"></a>

## deepCopy(source) ⇒
对象深拷贝

**Kind**: global function
**Returns**: 深拷贝后的对象

| Param | Type | Description |
| --- | --- | --- |
| source | <code>object</code> | 深拷贝的原始对象 |

<a name="throttle"></a>

## throttle(Function, Number, Number) ⇒
函数节流方法，多用于scroll及input的延时执行

**Kind**: global function
**Returns**: Function 延迟执行的方法

| Param | Description |
| --- | --- |
| Function | fn 延时调用函数 |
| Number | delay 延迟多长时间 |
| Number | atleast 至少多长时间触发一次 |

<a name="getDayDistance"></a>

## getDayDistance(startDate, endDate) ⇒
获取两个日期之前间隔的天数

**Kind**: global function
**Returns**: 间隔的天数

| Param | Type | Description |
| --- | --- | --- |
| startDate | <code>Date</code> | 开始日期对象 |
| endDate | <code>Date</code> | 结束日期对象 |

<a name="getDayDistanceString"></a>

## getDayDistanceString(distance) ⇒
根据间隔的天数获取描述

**Kind**: global function
**Returns**: 天数描述

| Param | Type | Description |
| --- | --- | --- |
| distance | <code>int</code> | 间隔的天数 |

<a name="setHairlines"></a>

## setHairlines()
判断设备是否支持0.5px的边框，如支持则在根目录的html中添加hairlines的class

**Kind**: global function
<a name="isObject"></a>

## isObject(obj) ⇒
是否是object

**Kind**: global function
**Returns**: 是否

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | 传入判断的值 |

<a name="isEmptyObject"></a>

## isEmptyObject(obj) ⇒
是否空对象

**Kind**: global function
**Returns**: 是否

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | 传入判断的值 |

<a name="isNum"></a>

## isNum(s) ⇒
判断是否为数字

**Kind**: global function
**Returns**: 是否

| Param | Type | Description |
| --- | --- | --- |
| s | <code>any</code> | 传入判断的值 |

<a name="checkAppInstall"></a>

## checkAppInstall(appInfo, appPackgeName, iosSchaema, apkLink, thirdPartyLink, itunesLink)
检查app安装状态，已安装则打开，未安装则下载或跳转下载链接

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| appInfo | <code>any</code> | // 需要检查的app信息 需要以下属性 |
| appPackgeName |  | 该应用的安卓包名 //需要的包名可以找客户端 |
| iosSchaema |  | 该应用的ios schema //ios万年历中查看是否安装某应用，需要在客户端开发时配置相应的schema协议才能正常使
用 |
| apkLink |  | 该应用的安卓apk下载链接 |
| thirdPartyLink |  | 该应用的安卓第三方(应用宝，小米应用商店等)下载链接 |
| itunesLink |  | 该应用的iTunes链接 |

<a name="fitInputBottom"></a>

## fitInputBottom(outDom)
适应底部输入框的方法

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| outDom | <code>any</code> | input输入框外层dom |

<a name="uuid"></a>

## uuid(len, radix) ⇒
生成uuid的函数

**Kind**: global function
**Returns**: 生成的uuid字符串

| Param | Type | Description |
| --- | --- | --- |
| len | <code>any</code> | 生成的字符的长度 |
| radix | <code>any</code> |  |

**Kind**: global function
  具体可在src/util/index.js中查看

## CHANGELOG
  1. 2018-3-18 calendar添加注释及更详细的黄历算法
  2. 2018-4-11 增加util的isObject isEmptyObject isNum
  3. 2018-4-12 util增加判断小程序环境及信息数据上报函数
  4. 2018-5-22 28星宿文案修改-壁，增加util的函数：checkAppInstall，fitInputBottom，uuid
