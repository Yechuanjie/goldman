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

  let TIME = 60; //倒计时
  let timeInterval = setInterval(() => {
    TIME -= 1;
    if (TIME <= 0) {
      clearInterval(timeInterval);
    }
    $('.time').html(TIME > 9 ? TIME : `0${TIME}`);
    // $('.number').html(TIME);
  }, 1000);

  let DIAMOND_NUM = 0; //所得矿石

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
  // 设计稿宽度
  const designWidth = 375;
  // 屏幕根字体大小
  const rem = screenWidth * 100 / designWidth;
  // 第一颗钻石距离顶部高度
  const topHeight = 2.62 * rem;


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
      this.oreList = []; // 每次重新计算矿石位置
      let that = this;
      console.log($('#diamond1').offset());
      $('.ore_list .temp img').each(function() {
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
          yb,
          width,
          height
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
            clearInterval(extend);
            this.recover(this.checkImpact());
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
      let impactNum = null;
      for (let i = 0; i < this.oreList.length; i += 1) {
        if (this.oreList[i].yb < y1 || this.oreList[i].x > xr1 || this.oreList[i].y > yb1 || this.oreList[i].xr < x1) {
          // console.log('未碰撞');
        } else {
          // console.log(`和第${i + 1}个物体碰撞`);
          impactNum = i + 1;
        }
      }
      return impactNum;
    }
    /**
     * 绳子收回动画
     * @memberof GAME
     */
    recover(num) {
      console.log(num);
      this.manAction();
      let interval = setInterval(() => {
        if (hh > MIN_ROPE_LENGTH) {
          hh -= 1;
          if (num) {
            this.handleRecoverAction(num);
          }
        } else {
          clearInterval(interval);
          this.initHookAnimation();
          clearInterval(this.actionInterval);
          $('.man').attr('src', this.manImgList[this.count]);
          // 勾到矿石，且到顶部时，处理隐藏该矿石，并生成新的矿石
          if (num) {
            this.hideAndCreatNewOre(num);
          }
        }
        line.css({
          transform: `translate3d(${xx}px,${yy}px,0px) rotate(${rr}deg)`,
          height: `${hh}px`
        });
      }, 10);
    }
    /**
     * 隐藏勾到矿石，并生成新的矿石
     * @memberof GAME
     */
    hideAndCreatNewOre(num) {
      $(`.temp:nth-child(${num})`).addClass('fadeout');
      // 勾到钻石, 更新游戏数据
      if (num > 0 && num <= 6) {
        DIAMOND_NUM += 1;
        $('.number').html(DIAMOND_NUM);

        let index = this.getRandom(1, 6);
        $(`.temp:nth-child(${num})`).attr('class', `temp temp${index} hidden`);
        $(`.temp:nth-child(${num})`).find('.shadow').attr('class', `shadow shadow${index}`);
        $(`.temp:nth-child(${num})`).find('.shine').attr('id', `shine${index}`);

        let newWidth = $(`.temp:nth-child(${num})`).width();
        let newHeight = $(`.temp:nth-child(${num})`).height();
        let diamondPositionX;
        let diamondPositionY;
        // this.checkOverlay(newWidth, newHeight);
        diamondPositionX = this.checkOverlay(newWidth, newHeight)[0];
        diamondPositionY = this.checkOverlay(newWidth, newHeight)[1];
        setTimeout(() => {
          $(`.temp:nth-child(${num})`).css({
            transform: `translate3d(${diamondPositionX}px, ${diamondPositionY}px, 0)`
          }).removeClass('hidden').find('img')
            .addClass('show');
        }, 500);
      } else {
        // 设置新障碍物的位置
        let stoneX = this.getRandom(0, screenWidth - 100);
        let stoneY = this.getRandom(0, landHeight - 100);
        $(`.temp:nth-child(${num})`).css({
          transform: `translate3d(${stoneX}px, ${stoneY}px, 0)`,
          opacity: 1
        }).find('img').addClass('show');
      }

      // let x1 = this.getRandom(0, screenWidth - 100);
      // let y1 = this.getRandom(0, landHeight - 100);
      // $(`.temp:nth-child(${num})`).css({
      //   transform: `translate3d(${x1}px, ${y1}px, 0)`,
      //   opacity: 1
      // });
      // // 生成一个1-8的随机整数，表示不同矿石
      // let randomPosition = this.getRandom(1, 8);
      // // let randomId = this.getRandom(9, 100);
      // // randomId = 10;
      // console.log(randomPosition);
      // // 随机克隆一个矿石
      // let newTemp = $(`#temp${randomPosition}`).clone();
      // // 随机生成一个9-100的id
      // newTemp.attr('id', `temp${num}`);
      // newTemp.appendTo($('.ore_list'));
      // // let newX = 0;
      // // let newY = 0;
      // // $(`#temp${num}`).attr('style', `transform: translate3d(${newX}px,${newY}px,0)!important`);

      // 重新获取矿石位置
      this.getOreLocation();
    }
    checkOverlay(newWidth, newHeight) {
      // 设置新钻石的位置
      let x = this.getRandom(0, screenWidth - 100);
      let y = this.getRandom(0, landHeight - 100);
      let XR = x + newWidth;
      let YB = y + newHeight;
      // console.log(diamondPositionX, diamondPositionY + topHeight, 'newWidth', newWidth, 'newHeight', newHeight);
      let position = [];
      // 处理重叠位置
      for (let j = 0; j < this.oreList.length; j += 1) {
        if (this.oreList[j].yb < x || this.oreList[j].x > XR || this.oreList[j].y > YB || this.oreList[j].xr < y) {
          console.log('未重叠');
          position.push(x);
          position.push(y);
        } else {
          console.log(`和第${j + 1}个物体重叠`);
          // x = this.getRandom(0, screenWidth - 100);
          // y = this.getRandom(0, landHeight - 100);
        }
      }
      return position;
    }
    /**
     * 获取指定区间随机数
     * @memberof GAME
     */
    getRandom(min, max) {
      return parseInt((Math.random() * (max - min)) + min, 10);
    }
    /**
     * 处理绳子收回时有矿石的方法
     * @memberof GAME
     */
    handleRecoverAction(sort) {
      $(`.temp:nth-child(${sort}) .shadow`).addClass('hidden');
      let x1 = hook.offset().left;
      let y1 = hook.offset().top - topHeight;
      $(`.temp:nth-child(${sort})`).css({
        transform: `translate3d(${x1}px, ${y1}px, 0)`
      });
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
