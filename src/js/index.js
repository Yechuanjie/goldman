// import 'babel-polyfill';
import { wnlShare, wxShare, toast } from '@wnl/ui';
import { util } from '@wnl/util';
import '../scss/index.scss';
import '../static/flexable';

let idnexShareInfo = {
  title: `挖金小游戏`,
  text: '挖金小游戏',
  image: 'https://qiniu.image.cq-wnl.com/content/2018051865471c3699f4494797becd7060b895df.png',
  url: `${window.location.href}${window.location.href.indexOf('?') > -1 ? '&' : '?'}share=1`
};

if (util.isWnl) {
  wnlShare.setShareData({
    title: idnexShareInfo.title,
    text: idnexShareInfo.text,
    image: idnexShareInfo.image,
    url: idnexShareInfo.url
  });
}
if (util.isWeixin) {
  wxShare({
    title: idnexShareInfo.title,
    text: idnexShareInfo.text,
    imgUrl: idnexShareInfo.image,
    url: idnexShareInfo.url,
    callback: () => {
      // 分享成功回调
    }
  });
}
$(() => {
  new toast().show('toast~'); //eslint-disable-line
  let hook = $('#hook');
  let line = $('#line');
  console.log(hook.offset());

  let TIME = 15; //倒计时
  let timeInterval = setInterval(() => {
    TIME -= 1;
    if (TIME <= 0) {
      clearInterval(timeInterval);
    }
    $('.time').html(TIME > 9 ? TIME : `0${TIME}`);
  }, 1000);

  let NUM = 0; //所得矿石
  $('.number').html(NUM);

  // 动画
  const ROPE_LENGTH = 50;
  const MAX_ROTATE = 50;
  const MIN_ROTATE = -50;
  let xx = 0;
  let yy = 0;
  let rr = MAX_ROTATE;
  let hh = ROPE_LENGTH;
  let FINISH = false;
  setInterval(() => {
    if (!FINISH) {
      if (rr > MIN_ROTATE) {
        rr -= 1;
      } else if (rr === MIN_ROTATE) {
        FINISH = true;
      }
    }
    if (FINISH) {
      if (rr >= MIN_ROTATE) {
        rr += 1;
      } else if (rr === MAX_ROTATE) {
        FINISH = false;
      }
    }
    // else if (rr === MAX_ROTATE) {
    //   FINISH = false;
    // }
    line.css({
      transform: `translate3d(${xx}px,${yy}px,0px) rotate(${rr}deg)`,
      height: `${hh}px`
    });
  }, 10);
});