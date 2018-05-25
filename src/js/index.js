// import 'babel-polyfill';
import { wnlShare } from '@wnl/ui';
import { util } from '@wnl/util';
import play from '../static/music';

import '../scss/index.scss';
import '../static/flexable';

const Base64 = require('js-base64').Base64;

let idnexShareInfo = {
  title: `送现金的挖钻小游戏，参与就有你的份！`,
  text: '确认过眼神，51万年历现在就要送你现金！',
  image: 'https://qiniu.image.cq-wnl.com/content/201805254510872760cd4bbb845181a3709db851.png',
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
$(() => {
  let userInfo = {
    nickname: '我',
    token: '',
    userId: ''
  };
  function getInfo() {
    if (util.isWnl) {
      setTimeout(() => {
        window.location.href = 'protocol://getuserinfo#userinfocallback';
      }, 0);
      window.userinfocallback = (res) => {
        let _res = JSON.parse(Base64.decode(res));
        // 已登录
        if (_res.native_score.userId) {
          userInfo.nickname = _res.native_usercenter.nickname ? _res.native_usercenter.nickname : _res.native_usercenter.name;
          userInfo.token = _res.native_score.usertoken;
          userInfo.userId = _res.native_score.userId;
        } else {
          console.log('未登录');
        }
      };
    }
  }
  const audio = document.getElementById('audio');
  play(audio);
  // new toast().show('toast~'); //eslint-disable-line
  console.log(util.isIphoneX);
  let hook = $('#hook');
  let line = $('#line');
  console.log(hook.offset());

  let DIAMOND_NUM = 0; //所得矿石

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
  let rr = 0;
  let hh = MIN_ROPE_LENGTH;
  let FINISH = false;

  class GAME {
    constructor() {
      this.animateInterval = null;
      this.actionInterval = null; // 矿工定时器
      this.extend = null;
      this.manImgList = []; // 矿工图片动画列表
      this.count = 0; // 矿工动画基数
      this.oreList = []; // 矿石位置列表
      this.TIME = 10; //倒计时
      this.initTime();
      this.initHookAnimation();
      this.getOreLocation();
      $('.click_area').on('click', (e) => {
        e.preventDefault();
        // 当绳子没有伸缩时，点击时才执行动画，避免重复执行
        if (hh <= MIN_ROPE_LENGTH) {
          clearInterval(this.animateInterval);
          this.lineAnimation();
        }
      });
    }
    /**
     * 初始化游戏时间
     * @memberof GAME
     */
    initTime() {
      let timeInterval = setInterval(() => {
        this.TIME -= 1;
        if (this.TIME <= 0) {
          clearInterval(timeInterval);
          this.gameOver();
        }
        $('.time').html(this.TIME > 9 ? this.TIME : `0${this.TIME}`);
      }, 1000);
    }
    /**
     * 获取矿石实时位置
     * @memberof GAME
     */
    getOreLocation(obj = 0) {
      this.oreList = []; // 每次重新计算矿石位置
      let that = this;
      let object = obj ? $('.ore_list .temp') : $('.ore_list .temp img');
      object.each(function() {
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
      // console.log('rope', ropeHeight);
      // console.log('MAX_ROPE_LENGTH', MAX_ROPE_LENGTH);
      if (ropeHeight > MAX_ROPE_LENGTH) {
        ropeHeight = (landHeight / Math.cos(rad)) + 30;
        // console.log('ropeHeight', ropeHeight);
      }
      this.extend = setInterval(() => {
        if (hh < ropeHeight) {
          hh += 1;
          let isImpact = this.checkImpact();
          if (isImpact) {
            clearInterval(this.extend);
            this.recover(isImpact);
          }
        } else {
          clearInterval(this.extend);
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
    checkImpact(p) {
      let width;
      let height;
      let x1;
      let y1;
      let xr1;
      let yb1;
      if (p) {
        width = p.width;
        height = p.height;
        x1 = p.x;
        y1 = p.y;
        xr1 = x1 + width;
        yb1 = y1 + height;
      } else {
        width = hook.width();
        height = hook.height();
        x1 = hook.offset().left;
        y1 = hook.offset().top;
        xr1 = x1 + width;
        yb1 = y1 + height;
      }

      let impactNum = null;
      for (let i = 0; i < this.oreList.length; i += 1) {
        if (this.oreList[i].yb < y1 || this.oreList[i].x > xr1 || this.oreList[i].y > yb1 || this.oreList[i].xr < x1) {
          // console.log('未重叠');
        } else {
          // if (p) {
          console.log(`和第${i + 1}个物体重叠`);
          // }
          impactNum = i + 1;
        }
      }
      if (impactNum) console.log('impactNum', impactNum);
      return impactNum;
    }
    /**
     * 绳子收回动画
     * @memberof GAME
     */
    recover(num) {
      // console.log(num);
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
        let positionInfo = {
          width: newWidth,
          height: newHeight,
          x: this.getRandom(0, screenWidth - 100),
          y: this.getRandom(0, screenHeight - topHeight - 180)
        };
        /////////////////////////*****************************////////////////////////
        // 检测位置
        // let checkPosition = (p) => {
        //   let newp = {
        //     width: newWidth,
        //     height: newHeight
        //   };
        //   for (let i = 0; i < this.oreList.length; i += 1) {
        //     if (Math.abs(p.x - this.oreList[i].x) < 50 && Math.abs(p.y - this.oreList[i].y) > 50) {
        //       newp.x = this.getRandom(0 + 50, screenWidth - 100);
        //     } else if (Math.abs(p.x - this.oreList[i].x) > 50 && Math.abs(p.y - this.oreList[i].y) < 50) {
        //       newp.y = this.getRandom(50, screenHeight - topHeight - 100);
        //     } else if (Math.abs(p.x - this.oreList[i].x) < 50 && Math.abs(p.y - this.oreList[i].y) < 50) {
        //       newp.x = this.getRandom(0 + 50, screenWidth - 100);
        //       newp.y = this.getRandom(0, screenHeight - topHeight - 100);
        //     } else {
        //       newp = p;
        //     }
        //   }
        //   if (newp.x !== p.x || newp.y !== p.y) {
        //     return checkPosition(newp);
        //   }
        //   console.log(newp);
        //   return newp;
        // };
        // let newp = checkPosition(positionInfo);
        // console.log(positionInfo, newp);
        /////////////////////////*****************************////////////////////////
        setTimeout(() => {
          $(`.temp:nth-child(${num})`).css({
            transform: `translate3d(${positionInfo.x}px, ${positionInfo.y}px, 0)`
          }).removeClass('hidden').find('img')
            .addClass('show');
        }, 500);
      } else {
        $(`.temp:nth-child(${num})`).find('img').addClass('hidden');
        // 设置新障碍物的位置
        let stoneX = this.getRandom(0, screenWidth - 100);
        let stoneY = this.getRandom(0, screenHeight - topHeight - 100);
        setTimeout(() => {
          $(`.temp:nth-child(${num})`).css({
            transform: `translate3d(${stoneX}px, ${stoneY}px, 0)`,
            opacity: 1
          }).find('img, .shadow').removeClass('hidden')
            .addClass('show');
        }, 500);
      }
      setTimeout(() => {
        // 重新获取矿石位置
        this.getOreLocation();
      }, 600);
    }
    // /**
    //  * 两个矩形div的碰撞检测
    //  * @memberof GAME
    //  * @returns Boolean
    //  */
    // isOverlap(objOne, objTwo) {
    //   let offsetOne = objOne.offset();
    //   let offsetTwo = objTwo.offset();
    //   let x1 = offsetOne.left;
    //   let y1 = offsetOne.top;
    //   let x2 = x1 + objOne.width();
    //   let y2 = y1 + objOne.height();

    //   let x3 = offsetTwo.left;
    //   let y3 = offsetTwo.top;
    //   let x4 = x3 + objTwo.width();
    //   let y4 = y3 + objTwo.height();

    //   let zx = Math.abs(x1 + x2 - x3 - x4);
    //   let x = Math.abs(x1 - x2) + Math.abs(x3 - x4);
    //   let zy = Math.abs(y1 + y2 - y3 - y4);
    //   let y = Math.abs(y1 - y2) + Math.abs(y3 - y4);
    //   return (zx <= x && zy <= y);
    // }

    /**
     * 获取指定区间随机数
     * @memberof GAME
     */
    getRandom(min, max) {
      return parseInt((Math.random() * Math.abs((max - min))) + min, 10);
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
    /**
     * 游戏结束
     * @memberof GAME
     */
    gameOver() {
      console.log(DIAMOND_NUM);
      $('.ore_number').html(DIAMOND_NUM);
      $('.congratulation_pop, .mask').removeClass('hidden');
      clearInterval(this.animateInterval);
      clearInterval(this.extend);
      clearInterval(this.actionInterval);

      // 设置结果页分享
      // alert(JSON.stringify(userInfo));
      let name = userInfo.nickname;
      console.log(name);
      let resultShareInfo = {
        title: `厉害了！${name}在挖钻小游戏中竟赚得了现金，赶紧去看！`,
        text: '轻松玩转挖钻小游戏，100%的几率把钱赚！'
      };
      wnlShare.setShareData({
        title: resultShareInfo.title,
        text: resultShareInfo.text,
        image: idnexShareInfo.image,
        url: idnexShareInfo.url
      });
    }
  }

  function initGame() {
    $('.count_down').removeClass('hidden');
    let count = 3;
    let countDown = setInterval(() => {
      count -= 1;
      if (count === 0) {
        clearInterval(countDown);
        $('.count_down').addClass('hidden');
        // 初始化游戏
        new GAME(); // eslint-disable-line
        $('.count_down').html(3);
      }
      $('.count_down').html(count);
    }, 1000);
  }
  // 关闭游戏规则弹窗
  $('.pop_close').click((e) => {
    e.stopPropagation();
    $('.pop_rule, .mask').addClass('hidden');
    initGame();
    getInfo();
  });


  // 奔走相告按钮
  $('.share_btn').click(() => {
    wnlShare.showSharePlatform();
  });
  // 再玩一次按钮
  $('.oncemore_btn').click(() => {
    $('.congratulation_pop, .mask').addClass('hidden');
    initGame();
  });

  $('.mask').click((e) => {
    e.stopPropagation();
    e.preventDefault();
  });

  $('.music').click(function(e) {
    e.stopPropagation();
    if ($(this).hasClass('on')) {
      $(this).removeClass('on').addClass('off');
    } else {
      $(this).addClass('on').removeClass('off');
    }
  });
  window.shareCallback = function() {
    // 万年历分享成功
    // 说明是结果页分享的，首页分享不处理
    if (!$('.congratulation_pop').hasClass('hidden')) {
      $('.oncemore_btn').removeClass('hidden');
      $('.share_btn').addClass('hidden');
    }
  };
  // 领取金币按钮
  $('.get_coin_btn').click(() => {
    // 未登录
    if (userInfo.userId === '') {
      window.location.href = 'protocol://enterlogin#';
    } else {
      // 跳转金币落地页
      window.location.href = 'protocol://view_goldtask';
    }
  });
});
