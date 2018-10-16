import play from '../static/music';
import '../scss/index.scss';
import '../static/flexable';

require('es6-promise').polyfill();

$(() => {
  $('.body_mask').addClass('hidden');
  const audio = document.getElementById('audio');
  play(audio);
  let hook = $('#hook');
  let line = $('#line');
  console.log(hook.offset());

  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
              window.setTimeout(callback, 1000 / 60);
            };
  })();
  let lineRequestAnimation;
  let recoverRequestAnimation;

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

  const LINE_SPEED = 10;
  const HOOK_SPEED = 18;
  const HOOK_WIDTH = hook.width();
  const HOOK_HEIGHT = hook.height();

  let xx = 0;
  let yy = 0;
  let rr = 0;
  let hh = MIN_ROPE_LENGTH;
  let FINISH = false;
  let DIAMOND_NUM = 0; //所得矿石
  let FINAL_POSITION = [];

  class GAME {
    constructor() {
      let that = this;
      this.animateInterval = null;
      this.actionInterval = null; // 矿工定时器
      this.extend = null;
      this.manImgList = []; // 矿工图片动画列表
      this.count = 0; // 矿工动画基数
      this.oreList = FINAL_POSITION; // 矿石位置列表
      this.TIME = 60; //倒计时
      this.GAME_OVER = false; // 游戏结束
      this.clickable = false;
      $('.click_area').on('click', (e) => {
        if (!this.clickable) {
          return;
        }
        e.preventDefault();
        if (!$('.congratulation_pop').hasClass('hidden')) {
          return;
        }
        // 当绳子没有伸缩时，点击时才执行动画，避免重复执行
        if (hh <= MIN_ROPE_LENGTH) {
          clearInterval(that.animateInterval);
          that.lineAnimation();
        }
      });
    }
    /**
     * 初始化游戏
     * @memberof GAME
     */
    initGame() {
      DIAMOND_NUM = 0;
      $('.count_down').removeClass('hidden');
      $('.number').html('0');
      $('.time').html((this.TIME > 9 ? this.TIME : `0${this.TIME}`));
      // 重置矿石位置
      this.setDimondPosition();
      let count = 3;
      let countDown = setInterval(() => {
        count -= 1;
        if (count === 0) {
          clearInterval(countDown);
          $('.count_down').html('3');
          $('.count_down').addClass('hidden');
          // 初始化游戏
          this.GAME_OVER = false;
          this.clickable = true;
          this.initTime();
          this.initHookAnimation();
          this.getOreLocation();
        } else {
          $('.count_down').html(count);
        }
      }, 1000);
    }
    /**
     * 初始化游戏时间
     * @memberof GAME
     */
    initTime() {
      let time = this.TIME;
      let timeInterval = setInterval(() => {
        time -= 1;
        if (time <= 0) {
          clearInterval(timeInterval);
          this.gameOver();
        }
        $('.time').html(time > 9 ? time : `0${time}`);
      }, 1000);
    }
    /**
     * 设置钻石和障碍物位置
     * @memberof GAME
     */
    setDimondPosition() {
      let random = (min, max) => {
        let num = parseInt((Math.random() * Math.abs((max - min))) + min, 10);
        return num;
      };
      let position = [];
      for (let i = 0; i < 8; i += 1) {
        let temp = $(`.ore_list .temp:nth-child(${i + 1})`);
        let width = temp.width();
        let height = temp.height();
        let x = random(0, screenWidth - width);
        let y = random(topHeight + 20, screenHeight - height);
        position.push({
          x,
          y,
          width,
          height,
          xr: x + width,
          yb: y + height
        });
      }
      console.log(position);
      let check = (num, isagain) => {
        let otherPosition = [].concat(position);
        otherPosition.splice(num - 1, 1);
        let p;
        if (isagain) {
          let newWidth = position[num - 1].width;
          let newHeight = position[num - 1].height;
          let newx = random(0, screenWidth - newWidth);
          let newy = random(topHeight + 20, screenHeight - newHeight);
          let positionInfo = {
            x: newx,
            y: newy,
            width: newWidth,
            height: newHeight
          };
          p = positionInfo;
        } else {
          p = position[num - 1];
        }
        for (let i = 0; i < otherPosition.length; i += 1) {
          if (p.x < otherPosition[i].xr &&
            p.x + p.width > otherPosition[i].x &&
             p.y < otherPosition[i].yb &&
              p.y + p.height > otherPosition[i].y) {
            // console.log(`和第${i + 1}个冲突`);
            return check(num, true);
          }
        }
        position[num - 1] = p;
        return p;
      };
      let finalPosition = [];
      for (let j = 0; j < 8; j += 1) {
        let pos = check(j + 1);
        finalPosition.push(pos);
      }
      $(`.ore_list .temp`).each(function(i) {
        $(this).css({
          transform: `translate3d(${finalPosition[i].x}px, ${Math.abs(finalPosition[i].y)}px, 0)`,
          left: '0',
          top: '0'
        });
      });
      FINAL_POSITION = [].concat(finalPosition);
    }
    /**
     * 获取矿石实时位置
     * @memberof GAME
     */
    getOreLocation(obj = 0) {
      this.oreList = []; // 每次重新计算矿石位置
      FINAL_POSITION = [];
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
        FINAL_POSITION.push(thisInfo);
      });
      // console.log(this.oreList);
    }
    /**
     * 初始动画
     * @memberof GAME
     */
    initHookAnimation() {
      if (this.GAME_OVER) {
        return;
      }
      this.animateInterval = setInterval(this.hookAnimation, HOOK_SPEED);
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
      if (ropeHeight > MAX_ROPE_LENGTH) {
        ropeHeight = (landHeight / Math.cos(rad)) + 30;
      }
      this.clickable = false;

      let that = this;
      function addHeight() {
        if (hh < ropeHeight) {
          hh += 2;
          line.css({
            height: `${hh}px`
          });
          let isImpact = that.checkImpact();
          if (isImpact) {
            that.recover(isImpact);
            window.cancelAnimationFrame(lineRequestAnimation);
          } else {
            lineRequestAnimation = window.requestAnimFrame(addHeight);
          }
        } else {
          that.recover();
        }
      }
      addHeight();
    }
    /**
     * 两个物体的碰撞检测
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
        x1 = hook.offset().left;
        y1 = hook.offset().top;
        xr1 = x1 + HOOK_WIDTH;
        yb1 = y1 + HOOK_HEIGHT;
      }

      let impactNum = null;
      for (let i = 0; i < 8; i += 1) {
        if (this.oreList[i].yb < y1 || this.oreList[i].x > xr1 || this.oreList[i].y > yb1 || this.oreList[i].xr < x1) {
          // console.log('未重叠');
        } else {
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
      let speed = LINE_SPEED;
      let that = this;
      if (num) {
        let name = $(`#temp${num}`)[0].className;
        console.log(name, speed);
        let typeNum = parseInt(name.slice(9, 10));
        console.log('type:', typeNum);
        if (typeNum === 1) {
          speed = LINE_SPEED + 1;
        } else if (typeNum === 2 || typeNum === 3) {
          speed = LINE_SPEED + 3;
        } else if (typeNum === 5 || typeNum === 6) {
          speed = LINE_SPEED + 5;
        } else if (typeNum === 4) {
          speed = LINE_SPEED + 7;
        } else if (typeNum === 7 || typeNum === 8) {
          speed = LINE_SPEED + 9;
        }
      }
      if (this.GAME_OVER) {
        return;
      }
      this.manAction();
      function setRcover() {
        if (hh > MIN_ROPE_LENGTH) {
          hh -= 2;
          line.css({
            height: `${hh}px`
          });
          if (num) {
            $(`.temp:nth-child(${num}) .shadow`).addClass('hidden');
            recoverRequestAnimation = window.requestAnimFrame(setRcover);
            that.handleRecoverAction(num);
          } else {
            recoverRequestAnimation = window.requestAnimFrame(setRcover);
          }
        } else {
          that.initHookAnimation();
          clearInterval(that.actionInterval);
          $('.man').attr('src', that.manImgList[that.count]);
          // 勾到矿石，且到顶部时，处理隐藏该矿石，并生成新的矿石
          if (num) {
            that.hideAndCreatNewOre(num);
          } else {
            that.clickable = true;
          }
        }
      }
      setRcover();
    }
    /**
     * 检测位置
     * @memberof GAME
     */
    checkPosition(num) {
      // 设置新障碍物的位置
      let newWidth = $(`.temp:nth-child(${num})`).width();
      let newHeight = $(`.temp:nth-child(${num})`).height();
      let newx = this.getRandom(0, screenWidth - newWidth);
      let newy = this.getRandom(topHeight + 20, screenHeight - newHeight);
      let positionInfo = {
        x: newx,
        y: newy,
        width: newWidth,
        height: newHeight
      };
      // console.log(p);
      let p = positionInfo;
      for (let i = 0; i < this.oreList.length; i += 1) {
        if (p.x < this.oreList[i].xr &&
          p.x + p.width > this.oreList[i].x &&
           p.y < this.oreList[i].yb &&
            p.y + p.height > this.oreList[i].y) {
          // console.log(`和第${i + 1}个冲突`);
          return this.checkPosition(num);
        }
      }
      return p;
    }
    /**
     * 隐藏勾到矿石，并生成新的矿石
     * @memberof GAME
     */
    hideAndCreatNewOre(num) {
      if (this.GAME_OVER) {
        return;
      }
      $(`.temp:nth-child(${num})`).addClass('fadeout');
      // 勾到钻石, 更新游戏数据
      if (num > 0 && num <= 6) {
        DIAMOND_NUM += 1;
        $('.number').html(DIAMOND_NUM);
        $('#diamond_num').html(`${DIAMOND_NUM}`);
        let index = this.getRandom(1, 6);
        $(`.temp:nth-child(${num})`).attr('class', `temp temp${index} hidden`);
        $(`.temp:nth-child(${num})`).find('.shadow').attr('class', `shadow shadow${index}`);
        $(`.temp:nth-child(${num})`).find('.shine').attr('id', `shine${index}`);
        /////////////////////////*****************************////////////////////////
        // 检测位置
        let positionInfo = this.checkPosition(num);
        /////////////////////////*****************************////////////////////////
        // console.log(positionInfo.y, topHeight);
        setTimeout(() => {
          $(`.temp:nth-child(${num})`).css({
            transform: `translate3d(${positionInfo.x}px, ${Math.abs(positionInfo.y)}px, 0)`,
            left: '0',
            top: '0'
          }).removeClass('hidden').find('img')
            .addClass('show');
          this.clickable = true;
        }, 200);
      } else {
        $(`.temp:nth-child(${num})`).find('img').addClass('hidden');
        /////////////////////////*****************************////////////////////////
        // 检测位置
        let positionInfo = this.checkPosition(num);
        /////////////////////////*****************************////////////////////////
        setTimeout(() => {
          $(`.temp:nth-child(${num})`).css({
            transform: `translate3d(${positionInfo.x}px, ${Math.abs(positionInfo.y)}px, 0)`,
            opacity: 1,
            left: '0',
            top: '0'
          }).find('img, .shadow').removeClass('hidden')
            .addClass('show');
          this.clickable = true;
        }, 200);
      }
      setTimeout(() => {
        // 重新获取矿石位置
        this.getOreLocation();
      }, 300);
    }
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
      let x1 = hook.offset().left;
      let y1 = hook.offset().top + 20;
      $(`.temp:nth-child(${sort})`).css({
        transform: `translate3d(${x1}px, ${y1}px, 0)`,
        left: '0',
        top: '0'
      });
    }
    /**
     * 绳子收回时，矿工动画
     * @memberof GAME
     */
    manAction() {
      if (this.manImgList.length < 1) {
        require.ensure([], () => {
          /* eslint-disable */
          let context = require.context('../assets', true, /^\.\/(man_action)\/.*\.png$/);
          for (let index = 0; index < 24; index += 1) {
            this.manImgList.push(require('../assets/man_action/donghua_000' + this.formatNumber(index) + '.png'));
          }
          /* eslint-enable */
        });
      }
      this.actionInterval = setInterval(() => {
        if (this.count >= 24) {
          this.count = 0;
        }
        $('.man').attr('src', this.manImgList[this.count]);
        this.count += 1;
      }, 20);
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
      this.GAME_OVER = true;
      this.clickable = false;
      console.log(DIAMOND_NUM);
      clearInterval(this.animateInterval);
      clearInterval(this.extend);
      clearInterval(this.actionInterval);

      let coinNumber;
      if (DIAMOND_NUM >= 0 && DIAMOND_NUM <= 10) {
        coinNumber = 50;
      } else if (DIAMOND_NUM > 10 && DIAMOND_NUM <= 20) {
        coinNumber = 100;
      } else if (DIAMOND_NUM > 20) {
        coinNumber = 150;
      }
      $('#diamond_num').html(`${DIAMOND_NUM}`);
      $('.ore_number').html(DIAMOND_NUM);
      $('.coin_number').html(coinNumber);
      $('.congratulation_pop, .mask').removeClass('hidden');
      window.cancelAnimationFrame(recoverRequestAnimation);
      window.cancelAnimationFrame(lineRequestAnimation);
      this.resetData();
    }
    resetData() {
      xx = 0;
      yy = 0;
      rr = 0;
      hh = MIN_ROPE_LENGTH;
      DIAMOND_NUM = 0;
      FINISH = false;
      $('.man').attr('src', this.manImgList[0]);
      line.css({
        transform: `translate3d(0,0,0) rotate(0)`,
        height: `${hh}px`
      });
    }
    playAgain() {
      this.initGame();
    }
  }

  /// ********* 初始化游戏 **************** ///
  let DIGGING_GOLD = new GAME();

  /* 业务逻辑 */
  // 关闭游戏规则弹窗
  $('.pop_close').click((e) => {
    e.stopPropagation();
    $('.pop_rule, .mask').addClass('hidden');
    DIGGING_GOLD.initGame();
  });
  // 再玩一次按钮
  $('.oncemore_btn').click(() => {
    $('.congratulation_pop, .mask').addClass('hidden');
    $('.congratulation_pop .section1').removeClass('hidden');
    $('.congratulation_pop .section2').addClass('hidden');
    $('.congratulation_pop .section3').addClass('hidden');
    // 再玩一次
    DIGGING_GOLD.playAgain();
  });

  $('.mask').click((e) => {
    e.stopPropagation();
    e.preventDefault();
  });

  // 音乐按钮
  $('.music').click(function(e) {
    e.stopPropagation();
    if ($(this).hasClass('on')) {
      $(this).removeClass('on').addClass('off');
      audio.pause();
    } else {
      $(this).addClass('on').removeClass('off');
      audio.play();
    }
  });
  // 返回按钮
  $('.back_icon').click(() => {
    window.history.back();
  });
  // 领取金币按钮
  $('.get_coin_btn').click(() => {
    $('.congratulation_pop .section2').removeClass('hidden');
    $('.congratulation_pop .section1').addClass('hidden');
    setTimeout(() => {
      $('.congratulation_pop .section2').addClass('hidden');
      $('.congratulation_pop .section3').removeClass('hidden');
    }, 500);
  });
});
