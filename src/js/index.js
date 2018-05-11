// import 'babel-polyfill';
import Swiper from 'swiper';
import { wnlShare, wxShare, toast, datePicker } from '@wnl/ui';
import { util } from '@wnl/util';
import '../scss/index.scss';
import '../static/flexable';


console.log(util.isWnl);
console.log('wnlshare', wnlShare);
console.log('wxShare', wxShare);
new toast().show('toast~');
document.querySelector('.picker').onclick = function() {
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

let swiper = new Swiper();
console.log(swiper);