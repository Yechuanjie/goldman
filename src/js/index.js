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
if (!util.isWnl) {
  if (util.isIOS) {
    window.location.href = 'https://itunes.apple.com/cn/app/%E4%B8%87%E5%B9%B4%E5%8E%86-%E5%80%BC%E5%BE%97%E4%BF%A1%E8%B5%96%E7%9A%84%E6%97%A5%E5%8E%86%E9%BB%84%E5%8E%86%E6%9F%A5%E8%AF%A2%E5%B7%A5%E5%85%B7/id419805549?mt=8&v0=WWW-GCCN-ITSTOP100-FREEAPPS&l=&ign-mpt=uo%3D4';
  } else if (util.isAndroid) {
    window.location.href = 'http://sj.qq.com/myapp/detail.htm?apkName=com.youloft.calendar';
  }
}

$(() => {
  if (!util.isWnl) {
    $('.body_mask').removeClass('hidden');
  } else {
    $('.body_mask').addClass('hidden');
  }
  let userInfo = {
    nickname: '我',
    token: '',
    userId: ''
  };

  function repoort(num) {
    let reqUrl = `//r.51wnl.com/api/Coin_Activity/Complete?code=A_1002_1
                  &uid=${userInfo.userId}&otherinfo=${num}&logintoken=${userInfo.token}`;
    $.ajax({
      url: reqUrl,
      type: 'GET',
      dataType: 'json',
      success: (res) => {
        console.log(JSON.stringify(res.data));
        // if (!userInfo.userId) {
        //   window.location.href = 'protocol://enterlogin#';
        // }
      },
      fail: (err) => {
        console.log(err);
      },
      complete: () => {
        // 重置数据
        this.resetData(num);
      }
    });
  }

  function getInfo(played) {
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
          if (played) {
            let data = JSON.parse(localStorage.getItem('data'));
            repoort(data.num);
          }
        } else {
          console.log('未登录');
        }
      };
    }
  }

  const audio = document.getElementById('audio');
  play(audio);
  let hook = $('#hook');
  let line = $('#line');
  console.log(hook.offset());
  // 返回按钮
  $('.back_icon').click(() => {
    localStorage.removeItem('data');
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

  const LINE_SPEED = 9;
  const HOOK_SPEED = 18;
  let xx = 0;
  let yy = 0;
  let rr = 0;
  let hh = MIN_ROPE_LENGTH;
  let FINISH = false;
  let DIAMOND_NUM = 0; //所得矿石
  let GAME_OVER = false;
  let TRY_AGAIN = false;
  let firstGame = null;
  let FINAL_POSITION = [];

  // 处理登陆返回后的逻辑 ps:登录成功或者从登录页直接返回该页面，都会导致本页面刷新。
  let localdata = JSON.parse(localStorage.getItem('data'));
  if (localdata) {
    getInfo(true);
    $('.congratulation_pop, .mask').removeClass('hidden');
    $('.pop_rule').addClass('hidden');
    $('.ore_number').html(localdata.num);
    $('.coin_number').html(localdata.coin);
    if (localdata.time === 2) {
      $('.oncemore_btn, .share_btn').addClass('hidden');
      $('.get_coin_btn').addClass('large');
    }
  }

  function random(min, max) {
    return parseInt((Math.random() * Math.abs((max - min))) + min, 10);
  }
  function setDimondPosition() {
    let position = [];
    for (let i = 0; i < 8; i += 1) {
      let temp = $(`.ore_list .temp:nth-child(${i + 1})`);
      let x = random(0, screenWidth - 100);
      let y = random(topHeight + 20, screenHeight - 80);
      let width = temp.width();
      let height = temp.height();
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
        let newx = random(0, screenWidth - 100);
        let newy = random(topHeight + 20, screenHeight - 80);
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
    console.log('finalPosition', finalPosition);
    $(`.ore_list .temp`).each(function(i) {
      $(this).css({
        transform: `translate3d(${finalPosition[i].x}px, ${Math.abs(finalPosition[i].y)}px, 0)`
      });
    });
    FINAL_POSITION = [].concat(finalPosition);
  }
  // setDimondPosition();

  class GAME {
    constructor() {
      let that = this;
      this.again = TRY_AGAIN;
      this.animateInterval = null;
      this.actionInterval = null; // 矿工定时器
      this.extend = null;
      this.manImgList = []; // 矿工图片动画列表
      this.count = 0; // 矿工动画基数
      this.oreList = FINAL_POSITION; // 矿石位置列表
      this.TIME = 60; //倒计时
      // this.GAMEOVER = false;
      this.clickable = true;
      this.initTime();
      this.initHookAnimation();
      this.getOreLocation();
      $('.click_area').on('click', (e) => {
        if (!this.clickable) {
          return;
        }
        console.log(that);
        e.preventDefault();
        if (!$('.congratulation_pop').hasClass('hidden')) {
          return;
        }
        // 当绳子没有伸缩时，点击时才执行动画，避免重复执行
        if (hh <= MIN_ROPE_LENGTH) {
          // this.unclickable = true;
          clearInterval(that.animateInterval);
          that.lineAnimation();
          // if (!that.again || localStorage.getItem('data')) {
          //   that.lineAnimation();
          // }
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
      console.log(this.oreList);
    }
    /**
     * 初始动画
     * @memberof GAME
     */
    initHookAnimation() {
      if (GAME_OVER) {
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
      // console.log('rope', ropeHeight);
      // console.log('MAX_ROPE_LENGTH', MAX_ROPE_LENGTH);
      if (ropeHeight > MAX_ROPE_LENGTH) {
        ropeHeight = (landHeight / Math.cos(rad)) + 30;
        // console.log('ropeHeight', ropeHeight);
      }
      this.extend = setInterval(() => {
        if (hh < ropeHeight) {
          this.clickable = false;
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
      }, LINE_SPEED);
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
          impactNum = i + 1;
        }
      }
      // if (impactNum) console.log('impactNum', impactNum);
      return impactNum;
    }
    /**
     * 绳子收回动画
     * @memberof GAME
     */
    recover(num) {
      // console.log(num);
      let speed = LINE_SPEED;
      if (num === 1) {
        speed = LINE_SPEED + 1;
      } else if (num === 2 || num === 3) {
        speed = LINE_SPEED + 3;
      } else if (num === 5 || num === 6) {
        speed = LINE_SPEED + 5;
      } else if (num === 4) {
        speed = LINE_SPEED + 7;
      } else if (num === 7 || num === 8) {
        speed = LINE_SPEED + 9;
      }
      if (GAME_OVER) {
        return;
      }
      this.manAction();
      let interval = setInterval(() => {
        if (hh > MIN_ROPE_LENGTH) {
          this.clickable = false;
          hh -= 1;
          if (num) {
            this.handleRecoverAction(num);
            // this.unclickable = false;
          }
        } else {
          clearInterval(interval);
          this.initHookAnimation();
          clearInterval(this.actionInterval);
          $('.man').attr('src', this.manImgList[this.count]);
          // 勾到矿石，且到顶部时，处理隐藏该矿石，并生成新的矿石
          if (num) {
            this.hideAndCreatNewOre(num);
          } else {
            this.clickable = true;
          }
        }
        line.css({
          transform: `translate3d(${xx}px,${yy}px,0px) rotate(${rr}deg)`,
          height: `${hh}px`
        });
      }, speed);
    }
    /**
     * 检测位置
     * @memberof GAME
     */
    checkPosition(num) {
      // 设置新障碍物的位置
      let newWidth = $(`.temp:nth-child(${num})`).width();
      let newHeight = $(`.temp:nth-child(${num})`).height();
      let newx = this.getRandom(0, screenWidth - 100);
      let newy = this.getRandom(topHeight + 20, screenHeight - 80);
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
      if (GAME_OVER) {
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
            transform: `translate3d(${positionInfo.x}px, ${Math.abs(positionInfo.y)}px, 0)`
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
            opacity: 1
          }).find('img, .shadow').removeClass('hidden')
            .addClass('show');
          this.clickable = true;
        }, 200);
      }
      setTimeout(() => {
        // 重新获取矿石位置
        this.getOreLocation();
        // this.unclickable = false;
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
      $(`.temp:nth-child(${sort}) .shadow`).addClass('hidden');
      let x1 = hook.offset().left;
      let y1 = hook.offset().top + 20;
      $(`.temp:nth-child(${sort})`).css({
        transform: `translate3d(${x1}px, ${y1}px, 0)`
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
      GAME_OVER = true;
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
      if (TRY_AGAIN) {
        $('.oncemore_btn').addClass('hidden');
        $('.get_coin_btn').addClass('large');
      }
      if (userInfo.userId) {
        repoort(DIAMOND_NUM);
      }
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
      //////////////// 游戏结束时解除绑定的点击事件，避免重新游戏时重复绑定事件/////////////////
      $('.click_area').unbind('click');
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
        transform: `translate3d(${xx}px,${yy}px,0px) rotate(${rr}deg)`,
        height: `${hh}px`
      });
    }
  }

  function initGame(again = false) {
    $('.count_down').removeClass('hidden');
    $('.number').html('0');
    $('.time').html('60');
    // 重置矿石位置
    setDimondPosition();
    let count = 3;
    let countDown = setInterval(() => {
      count -= 1;
      if (count === 0) {
        clearInterval(countDown);
        $('.count_down').html('3');
        $('.count_down').addClass('hidden');

        // 初始化游戏
        GAME_OVER = false;
        if (!again && !firstGame) {
          firstGame = new GAME(again); // eslint-disable-line
        } else {
          firstGame = null;
          TRY_AGAIN = true;
          let secondGame = new GAME(again); // eslint-disable-line
        }
      } else {
        $('.count_down').html(count);
      }
    }, 1000);
  }
  // 关闭游戏规则弹窗
  $('.pop_close').click((e) => {
    e.stopPropagation();
    $('.pop_rule, .mask').addClass('hidden');
    initGame(localStorage.getItem('data') ? true : false); // eslint-disable-line
    getInfo();
  });


  // 奔走相告按钮
  $('.share_btn').click(() => {
    $('.share_guide').removeClass('hidden');
    wnlShare.showSharePlatform();
  });
  // 再玩一次按钮
  $('.oncemore_btn').click(() => {
    $('.congratulation_pop, .mask').addClass('hidden');
    // 再玩一次传入标识
    initGame(true);
  });

  $('.mask').click((e) => {
    e.stopPropagation();
    e.preventDefault();
  });

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
  // document.querySelector('.wnlshare-mask').addEventListener('click', () => {
  //   alert('12312');
  //   $('.share_guide').addClass('hidden');
  // });
  // $('.wnlshare-mask').css({
  //   zIndex: '999'
  // })

  window.shareCallback = function() {
    // 万年历分享成功
    // 说明是结果页分享的，首页分享不处理
    if (!$('.congratulation_pop').hasClass('hidden')) {
      $('.oncemore_btn').removeClass('hidden');
      $('.share_btn').addClass('hidden');
      $('.share_guide').addClass('hidden');
    }
  };
  function handleHidden() {
    let hidden = 'hidden';
    function onchange(evt) {
      let v = 'visible';
      let h = 'hidden';
      let evtMap = {
        focus: v, focusin: v, pageshow: v, blur: h, focusout: h, pagehide: h
      };
      let pageState = false;
      evt = evt || window.event;
      if (evt.type in evtMap) {
        pageState = evtMap[evt.type];
      } else {
        pageState = this[hidden] ? 'hidden' : 'visible';
      }
      if (pageState === 'visible') {
        localStorage.removeItem('data');
        window.location.href = 'protocol://back';
      }
    }
    if (hidden in document) {
      document.addEventListener('visibilitychange', onchange);
    } else if ('mozHidden' in document) {
      hidden = 'mozHidden';
      document.addEventListener('mozvisibilitychange', onchange);
    } else if ('webkitHidden' in document) {
      hidden = 'webkitHidden';
      document.addEventListener('webkitvisibilitychange', onchange);
    } else if ('msHidden' in document) {
      hidden = 'msHidden';
      document.addEventListener('msvisibilitychange', onchange);
    }
    // setTimeout(() => {
    //   // 跳转金币落地页
    //   window.location.href = 'protocol://view_goldtask';
    // }, 2000);
    // // 跳转金币落地页
    // window.location.href = 'protocol://view_goldtask';
  }
  // 领取金币按钮
  $('.get_coin_btn').click(() => {
    let diamondNum = $('.ore_number').html();
    let coinNum = $('.coin_number').html();
    let times = 1;
    if ($('.get_coin_btn').hasClass('large')) {
      times = 2;
    }
    let data = {
      num: diamondNum,
      time: times,
      coin: coinNum
    };
    // 未登录
    if (userInfo.userId === '') {
      localStorage.setItem('data', JSON.stringify(data));
      window.location.href = 'protocol://enterlogin#';
    } else {
      $('.congratulation_pop .section2').removeClass('hidden');
      $('.congratulation_pop .section1').addClass('hidden');
      handleHidden();
      setTimeout(() => {
        // 跳转金币落地页
        window.location.href = 'protocol://view_goldtask';
      }, 1500);
      // let reqUrl = `//r.51wnl.com/api/Coin_Activity/Complete?code=A_1002_1
      //               &uid=${userInfo.userId}&otherinfo=${diamondNum}&logintoken=${userInfo.token}`;
      // $.ajax({
      //   url: reqUrl,
      //   type: 'GET',
      //   dataType: 'json',
      //   success: (res) => {
      //     console.log(JSON.stringify(res.data));
      //   },
      //   fail: (err) => {
      //     console.log(err);
      //   }
      // });
    }
  });
});
