## 万年历组件库wnlui

## Git：
  [http://192.168.1.80:8080/summary/~guojinhai%2Fwnlui_html.git](http://192.168.1.80:8080/summary/~guojinhai%2Fwnlui_html.git)

## 使用方法见index.js

### 普通选择控件picker，选择控件有如下三种用法
```
  1. 单列
    new picker(
    [
      //展示的选择数据，单列的只有一个数组参数
      {
        label: '飞机票', //key，用于显示
        value: 0 //value 具体的值
      },
      {
        label: '火车票',
        value: 1
      },
      {
        label: '汽车票',
        value: 3
      },
      {
        label: '公车票',
        value: 4
      }
    ],
    {
      className: 'singleLinePicker', //弹出框的class属性
      container: 'body', //弹出框插入的dom元素
      defaultIndex: [2], //默认每一列展示的index序号，从0开始
      onChange: function(result) {
        //选择项改变的时候的回调
        console.log(result);
      },
      onConfirm: function(result) {
        //点击确定后的回调
        console.log(result);
      },
      id: 'singleLinePicker' //当前picker的id，用于在一个页面中还有多个picker时缓存上一次的选择
    }
  );
  2. 多列
    new picker(
    [
      //展示的选择数据，多列的有多个数组参数，其他的参数与单列picker一样
      {
        label: '1',
        value: '1'
      },
      {
        label: '2',
        value: '2'
      },
      {
        label: '3',
        value: '3'
      }
    ],
    [
      {
        label: 'A',
        value: 'A'
      },
      {
        label: 'B',
        value: 'B'
      },
      {
        label: 'C',
        value: 'C'
      }
    ],
    {
      defaultIndex: [1, 1],
      onChange: function(result) {
        console.log(result);
      },
      onConfirm: function(result) {
        console.log(result);
      },
      id: 'multiPickerBtn'
    }
  );
  3. 级联
  new picker(
    [
      //展示的选择数据，级联的只有一个数组参数，但是每一项都有children的下一列数组数据，选中一项后展示其children的下一列，
      //其他的参数与单列picker一样
      {
        label: '飞机票',
        value: 0,
        children: [
          {
            label: '经济舱',
            value: 1
          },
          {
            label: '商务舱',
            value: 2
          }
        ]
      },
      {
        label: '火车票',
        value: 1,
        children: [
          {
            label: '卧铺',
            value: 1
          },
          {
            label: '坐票',
            value: 2
          },
          {
            label: '站票',
            value: 3
          }
        ]
      },
      {
        label: '汽车票',
        value: 3,
        children: [
          {
            label: '快班',
            value: 1
          },
          {
            label: '普通',
            value: 2
          }
        ]
      }
    ],
    {
      container: 'body',
      defaultIndex: [0, 1],
      onChange: function(result) {
        console.log(result);
      },
      onConfirm: function(result) {
        console.log(result);
      },
      id: 'doubleLinePicker'
    }
  );
```

### 日期选择控件
    new datePicker({
    id: 'datePicker', //当前picker的id，用于在一个页面中还有多个picker时缓存上一次的选择
    showLunar: true, //是否需要展示农历
    defaultValue: [2010, 1, 21], //默认的日期，默认为公历的日期
    modal: true, //是否模态
    onChange: function(result) {
      //选择项改变的时候的回调
      console.log(result);
    },
    onConfirm: function(result) {
      //点击确定后的回调
      console.log(result);
    }
  });

### 城市选择控件
  new cityPicker({
    id: 'cityPicker2', //当前picker的id，用于在一个页面中还有多个picker时缓存上一次的选择
    level: 1, //控制需要展示几级的城市，默认为3，及具体到县级城市
    cityCode: true, //城市选择包含两套数据，包含citycode的和包含有经纬度的数据（星座类应用时使用）
    //通过cityCode参数控制，cityCode为false的时候展示三级城市，level无效
    onChange: function(result) {
      //选择项改变的时候的回调
      console.log(result);
    },
    onConfirm: function(result) {
      //点击确定后的回调
      console.log(result);
    }
  });

### toast提示
  let toast1 = new toast();//初始化toast对象
  toast1.show('show toast');//执行show方法，参数为需要展示的文案

### 通用页面加载动画效果
  let pageloading1 = new pageloading();//初始化pageloading对象
  pageloading1.show();//执行show方法
  setTimeout(() => {
    pageloading1.hide();//执行完成之后手动隐藏
  }, 2000);

### 下拉刷新上拉加载组件vscroll

#### html:
  <div class="main_content">需要滚动和加载的内容</div>

#### js:
```
  new vscroll(document.querySelector('.main_content'), { //main_content为包裹页面中需要滚动和加载的内容的父级元素
    /**
      * 类型
      * @param {String} 'default' 默认，包含下拉刷新上拉加载
      * @param {String} 'pull' 只包含下拉刷新
      * @param {String} 'load' 只包含加载更多
      */
    // type: 'default',
    /**
      * 下拉刷新触发的回调
      * @param {Func} setRefreshStatus 下拉刷新完成后通知组件回调已完成
      */
    onPullRefreshCallback: setRefreshStatus => {
      console.log('下拉刷新');
      setTimeout(() => {
        // 这里去请求刷新数据
        setContent('fresh');
        // 在请求成功回调中，设置刷新状态为true，重置下拉刷新。 setRefreshStatus(true);
        setRefreshStatus(true);
        console.log('下拉刷新完成');
      }, 1000);
    },
    /**
      * 滑动到底部触发加载更多的回调
      * @param {Func} setLoadMoreStatus 加载更多完成后通知组件回调已完成
      */
    onLoadMoreCallback: setLoadMoreStatus => {
      console.log('加载更多');
      setTimeout(() => {
        // 这里去加载更多数据
        setContent('loadmore');
        // 在请求成功回调中，设置加载状态为true，重置加载，避免重复加载。 setLoadMoreStatus(true);
        setLoadMoreStatus(true);
        console.log('加载更多完成');
      }, 200);
    },
    /**
      * 滑动方向改变时的回调函数
      * @param {Number} direction 滑动方向 1：向上  -1：向下
      * @param {Number} currentScrollTop 当前滚动距离
      */
    onTouchDirectionCallback: (direction, currentScrollTop) => {
      // console.log(direction, currentScrollTop);
    },
    /**
      * 滑动过程中的回调函数
      * @param {Number} direction 滑动方向 1：向上  -1：向下
      * @param {Number} currentScrollTop 当前滚动距离
      */
    onScrollChangeCallback: (direction, currentScrollTop) => {
      // console.log('onScrollChangeCallback', direction, currentScrollTop);
    }
  });

  setContent为获取数据的函数
```

### 万年历中图片上传组件

#### 样例html：
    <div class="input_content">
      <input type="file" name="file" id="file" accept="image/*;">
      <div class="changeImg"></div>
    </div>

#### js:
```
  /**
   * 选择相册图片，处理后返回图片地址
   * Creates an instance of imgupload.
   * @param {Element} $el input输入框元素
   * @param {Object} options 配置回调
   * @memberof imgupload
   */
  new imgupload(document.querySelector('#file'), {//#file为input元素
    /**
     * @param {any} imgsrc 处理完成后返回的图片地址
     */
    uploadCallback: imgsrc => {
      console.log(imgsrc);
      // do something
      document.querySelector('.changeImg').style.backgroundImage = `url(${imgsrc})`;
    }
  });
```

### 万年历日期时间整合选择组件
```
/**
 * dateTime 初始化时间，可不配置，默认1990,1,1,0,0
 * endYear 介绍年份 ，可不配置 默认当前年份
 */
let dp = new DataPicker({
  dateTime:[1999,1,1,0,0],
  endYear:2018
});
dp.show();
```

## TODO：
  1. toast可配置展示的位置以及持续时间
  2. 分享es6优化
  3. 微信分享逻辑修改

## CHANGELOG
  1. 2018-5-22 新的城市数据，更新util版本

