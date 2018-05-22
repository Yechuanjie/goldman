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
    $('.number').html(TIME);
  }, 1000);

  // let NUM = 0; //所得矿石
  // $('.number').html(NUM);

  // 关闭游戏规则弹窗
  $('.pop_close').click(() => {
    $('.pop_rule, .mask').addClass('hidden');
  });

  // 返回按钮
  $('.back_icon').click(() => {
    window.location.href = 'protocol://back';
  });

  // 动画
  const screenWidth = $(window).width();
  const screenHeight = $(window).height();
  const landHeight = screenHeight - 235;
  const MIN_ROPE_LENGTH = 10;
  const MAX_ROPE_LENGTH = Math.sqrt(Math.pow(screenWidth / 2, 2) + Math.pow(landHeight, 2)); // eslint-disable-line
  const MAX_ROTATE = 60;
  const MIN_ROTATE = -60;
  const hookHeight = $('#hook').height() + MIN_ROPE_LENGTH;
  // const hookHeight = 0;


  let xx = 0;
  let yy = 0;
  let rr = MAX_ROTATE;
  let hh = MIN_ROPE_LENGTH;
  let FINISH = false;

  class GAME {
    constructor() {
      this.actionInterval = null;
      this.manImgList = [];
      this.count = 0;
      this.initHookAnimation();
      this.initOreLocation();
      $('.main_container').on('click', () => {
        console.log('rr', rr, 'hh', hh);
        // 当绳子没有伸缩时，点击时才执行动画，避免重复执行
        if (hh <= MIN_ROPE_LENGTH) {
          clearInterval(this.animateInterval);
          this.lineAnimation();
        }
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
      let ropeHeight = (width / rad);
      console.log('ropeHeight', ropeHeight);
      if (ropeHeight > MAX_ROPE_LENGTH) {
        //  ropeHeight = landHeight / cos(rr)
        ropeHeight = MAX_ROPE_LENGTH - hookHeight;
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
      this.manAction();
      let interval = setInterval(() => {
        if (hh > MIN_ROPE_LENGTH) {
          hh -= 1;
        } else {
          clearInterval(interval);
          this.initHookAnimation();
          clearInterval(this.actionInterval);
          $('.man').attr('src', this.manImgList[this.count]);
        }
        line.css({
          transform: `translate3d(${xx}px,${yy}px,0px) rotate(${rr}deg)`,
          height: `${hh}px`
        });
      }, 10);
    }
    manAction() {
      require.ensure([], () => {
        /* eslint-disable */
        let context = require.context('../assets', true, /^\.\/(man_action)\/.*\.png$/);
        for (let index = 0; index < 24; index += 1) {
          this.manImgList.push(require('../assets/man_action/donghua_000' + this.formatNumber(index) + '.png'));
        }
        /* eslint-enable */
      });
      this.actionInterval = setInterval(() => {
        if (this.count >= 24) {
          this.count = 0;
        }
        $('.man').attr('src', this.manImgList[this.count]);
        this.count += 1;
      }, 40);
    }
    formatNumber(n) {
      n = n.toString();
      return n[1] ? n : '0' + n;
    }
  }
  new GAME(); // eslint-disable-line
});
