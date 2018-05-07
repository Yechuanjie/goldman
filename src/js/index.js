// import 'babel-polyfill';
import { picker, cityPicker, datePicker } from '@wnl/ui';
import { util } from '@wnl/util';
import '../css/index.css';

console.log(util.isWnl);

window.onload = function() {
  // 单列picker
  document.querySelector('.btn1').onclick = function() {
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
        onChange: (result) => {
          //选择项改变的时候的回调
          console.log(result);
        },
        onConfirm: (result) => {
          //点击确定后的回调
          console.log(result);
        },
        id: 'singleLinePicker' //当前picker的id，用于在一个页面中还有多个picker时缓存上一次的选择
      }
    );
  };
  // 多列picker
  document.querySelector('.btn2').onclick = function() {
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
        onChange: (result) => {
          console.log(result);
        },
        onConfirm: (result) => {
          console.log(result);
        },
        id: 'multiPickerBtn'
      }
    );
  };
  // 级联picker
  document.querySelector('.btn3').onclick = function() {
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
        onChange: (result) => {
          console.log(result);
        },
        onConfirm: (result) => {
          console.log(result);
        },
        id: 'doubleLinePicker'
      }
    );
  };
  document.querySelector('.btn4').onclick = function() {
    new datePicker({
      id: 'datePicker', //当前picker的id，用于在一个页面中还有多个picker时缓存上一次的选择
      showLunar: true, //是否需要展示农历
      defaultValue: [2010, 1, 21], //默认的日期，默认为公历的日期
      modal: true, //是否模态
      onChange: (result) => {
        //选择项改变的时候的回调
        console.log(result);
      },
      onConfirm: (result) => {
        //点击确定后的回调
        console.log(result);
      }
    });
  };
  document.querySelector('.btn5').onclick = function() {
    new cityPicker({
      id: 'cityPicker1', //当前picker的id，用于在一个页面中还有多个picker时缓存上一次的选择
      onChange: (result) => {
        //选择项改变的时候的回调
        console.log(result);
      },
      onConfirm: (result) => {
        //点击确定后的回调
        console.log(result);
      }
    });
  };
  document.querySelector('.btn51').onclick = function() {
    new cityPicker({
      id: 'cityPicker2', //当前picker的id，用于在一个页面中还有多个picker时缓存上一次的选择
      level: 1, //控制需要展示几级的城市，默认为3，及具体到县级城市
      cityCode: true, //城市选择包含两套数据，包含citycode的和包含有经纬度的数据（星座类应用时使用）
      //通过cityCode参数控制，cityCode为false的时候展示三级城市，level无效
      onChange: (result) => {
        //选择项改变的时候的回调
        console.log(result);
      },
      onConfirm: (result) => {
        //点击确定后的回调
        console.log(result);
      }
    });
  };
  document.querySelector('.btn52').onclick = function() {
    new cityPicker({
      id: 'cityPicker3',
      level: 2,
      onChange: (result) => {
        console.log(result);
      },
      onConfirm: (result) => {
        console.log(result);
      }
    });
    // cityPicker3.show();
  };
  document.querySelector('.btn6').onclick = function() {
    new cityPicker({
      id: 'cityPicker4',
      cityCode: false,
      onChange: (result) => {
        console.log(result);
      },
      onConfirm: (result) => {
        console.log(result);
      }
    });
    // cityPicker4.show();
  };
};
