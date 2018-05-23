// import 'babel-polyfill';
// import { wnlShare, wxShare, toast } from '@wnl/ui';
import { util } from '@wnl/util';
import '../scss/index.scss';
import '../static/flexable';

// let idnexShareInfo = {
//   title: `挖金小游戏`,
//   text: '挖金小游戏',
//   image: 'https://qiniu.image.cq-wnl.com/content/2018051865471c3699f4494797becd7060b895df.png',
//   url: `${window.location.href}${window.location.href.indexOf('?') > -1 ? '&' : '?'}share=1`
// };

// if (util.isWnl) {
//   wnlShare.setShareData({
//     title: idnexShareInfo.title,
//     text: idnexShareInfo.text,
//     image: idnexShareInfo.image,
//     url: idnexShareInfo.url
//   });
// }
// if (util.isWeixin) {
//   wxShare({
//     title: idnexShareInfo.title,
//     text: idnexShareInfo.text,
//     imgUrl: idnexShareInfo.image,
//     url: idnexShareInfo.url,
//     callback: () => {
//       // 分享成功回调
//     }
//   });
// }
$(() => {
  // new toast().show('toast~'); //eslint-disable-line
  console.log(util.isIphoneX);
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
  const hookHeight = $('#hook').height();


  const MAX_ROTATE = 70;
  const MIN_ROTATE = -70;
  const MIN_ROPE_LENGTH = 7;
  // 全面屏时，土地比例分配更多
  const percent = screenHeight >= 800 ? 0.7389 : 0.6866;
  const landHeight = (screenHeight * percent) - hookHeight - MIN_ROPE_LENGTH;
  const MAX_ROPE_LENGTH = Math.sqrt(Math.pow(screenWidth / 2, 2) + Math.pow(landHeight, 2)); // eslint-disable-line

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
      this.oreList = [];
      this.initHookAnimation();
      this.getOreLocation();
      $('.main_container').on('click', () => {
        console.log('rr', rr, 'hh', hh);
        // 当绳子没有伸缩时，点击时才执行动画，避免重复执行
        if (hh <= MIN_ROPE_LENGTH) {
          clearInterval(this.animateInterval);
          this.lineAnimation();
        }
      });
    }
    getOreLocation() {
      let that = this;
      $('.ore_list img').each(function() {
        // let x = 0;
        // let y = 0;
        // $(this).css({
        //   transform: `translate3d(${x}px, ${y}px, 0)`
        // });
        let width = $(this).width();
        let height = $(this).height();
        let x = $(this).offset().left;
        let y = $(this).offset().top;
        // 矿石最右侧的left值
        let xr = x + width;
        // 矿石最底部的top值
        let yb = y + height;
        let thisInfo = {
          x,
          y,
          xr,
          yb
        };
        that.oreList.push(thisInfo);
      });
      console.log(this.oreList);
    }
    /**
     * 初始动画
     * @memberof GAME
     */
    initHookAnimation() {
      this.animateInterval = setInterval(this.hookAnimation, 30);
    }
    /**
     * 钩子摆动动画
     * @memberof GAME
     */
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
    /**
     * 绳子动画控制
     * @memberof GAME
     */
    lineAnimation() {
      let width = screenWidth / 2;
      //弧度
      let rad = Math.abs(rr) * (Math.PI / 180);
      // 绳子长度，需要减掉钩子长度
      let ropeHeight = (width / Math.sin(rad)) - hookHeight;
      console.log('rope', ropeHeight);
      console.log('MAX_ROPE_LENGTH', MAX_ROPE_LENGTH);
      if (ropeHeight > MAX_ROPE_LENGTH) {
        ropeHeight = (landHeight / Math.cos(rad)) + 30;
        console.log('ropeHeight', ropeHeight);
      }
      let extend = setInterval(() => {
        if (hh < ropeHeight) {
          hh += 1;
          if (this.checkImpact()) {
            console.log(this.checkImpact());
            clearInterval(extend);
            this.recover();
          }
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
    /**
     * 碰撞检测
     * @memberof GAME
     */
    checkImpact() {
      let width = hook.width();
      let height = hook.height();
      let x1 = hook.offset().left;
      let y1 = hook.offset().top;
      let xr1 = x1 + width;
      let yb1 = y1 + height;
      // let hookPosition = {
      //   x1, y1, xr1, yb1
      // };
      let impactNum = null;
      for (let i = 0; i < this.oreList.length; i += 1) {
        if (this.oreList[i].yb < y1 || this.oreList[i].x > xr1 || this.oreList[i].y > yb1 || this.oreList[i].xr < x1) {
          console.log('未碰撞');
        } else {
          console.log(`和第${i + 1}个物体碰撞`);
          impactNum = i + 1;
        }
      }
      return impactNum;
      // console.log(hookPosition);
    }
    /**
     * 绳子收回动画
     * @memberof GAME
     */
    recover() {
      this.manAction();
      this.handleRecoverAction();
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
    /**
     * 处理绳子收回时有矿石的方法
     * @memberof GAME
     */
    handleRecoverAction() {

    }
    /**
     * 绳子收回时，矿工动画
     * @memberof GAME
     */
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
    /**
     * 格式化数字
     * @memberof GAME
     */
    formatNumber(n) {
      n = n.toString();
      return n[1] ? n : '0' + n;
    }
  }
  new GAME(); // eslint-disable-line
});
