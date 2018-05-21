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
  const screenWidth = $(window).width();
  const landHeight = $('.bottom_wrapper').height();
  const MAX_ROPE_LENGTH = Math.sqrt(Math.pow(screenWidth / 2, 2) + Math.pow(landHeight, 2)); // eslint-disable-line
  // console.log('MAX_ROPE_LENGTH', MAX_ROPE_LENGTH);
  const MIN_ROPE_LENGTH = 50;
  const MAX_ROTATE = 50;
  const MIN_ROTATE = -50;
  let xx = 0;
  let yy = 0;
  let rr = MAX_ROTATE;
  let hh = 50;
  let FINISH = false;

  // let config = {
  //   a: '123',
  //   b: '234'
  // };
  // console.log(Object.keys(config));
  // console.log(config.hasOwnProperty('a'));
  class GAME {
    constructor() {
      this.initHookAnimation();
      this.initOreLocation();
      $('.bottom_wrapper').on('touchstart', () => {
        console.log('rr', rr);
        clearInterval(this.animateInterval);
        this.lineAnimation();
        // $('html').on('touchstart', (e) => {
        //   // 禁止绳子伸长时点击
        //   e.preventDefault();
        // });
      });
    }
    initOreLocation() {
      $('.bottom_wrapper img').each(function() {
        let x = 50;
        let y = 50;
        $(this).css({
          transform: `translate3d(${x}px, ${y}px, 0)`
        });
      });
    }
    initHookAnimation() {
      this.animateInterval = setInterval(this.hookAnimation, 30);
    }
    hookAnimation() {
      if (!FINISH) {
        if (rr > MIN_ROTATE) {
          rr -= 1;
        } else if (rr === MIN_ROTATE) {
          FINISH = true;
        }
      }
      if (FINISH) {
        if (rr >= MIN_ROTATE && rr < MAX_ROTATE) {
          rr += 1;
        } else if (rr === MAX_ROTATE) {
          FINISH = false;
        }
      }
      line.css({
        transform: `translate3d(${xx}px,${yy}px,0px) rotate(${rr}deg)`,
        height: `${hh}px`
      });
    }
    lineAnimation() {
      let width = screenWidth / 2;
      let rad = Math.sin(Math.abs(rr) * (Math.PI / 180));
      let ropeHeight = width / rad;
      console.log('ropeHeight', ropeHeight);
      if (ropeHeight > MAX_ROPE_LENGTH) {
        ropeHeight = MAX_ROPE_LENGTH;
      }
      let extend = setInterval(() => {
        if (hh < ropeHeight) {
          hh += 1;
        } else {
          clearInterval(extend);
          this.recover();
        }
        line.css({
          transform: `translate3d(${xx}px,${yy}px,0px) rotate(${rr}deg)`,
          height: `${hh}px`
        });
      }, 10);
    }
    recover() {
      let interval = setInterval(() => {
        if (hh > MIN_ROPE_LENGTH) {
          hh -= 1;
        } else {
          clearInterval(interval);
          this.initHookAnimation();
        }
        line.css({
          transform: `translate3d(${xx}px,${yy}px,0px) rotate(${rr}deg)`,
          height: `${hh}px`
        });
      }, 10);
    }
  }
  new GAME(); // eslint-disable-line
});
