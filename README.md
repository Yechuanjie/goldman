# **黄金矿工小游戏**

## 实现方式
  **jquery + es6**

## 实现核心
  **requestAnimationFrame**  以及  **物体碰撞检测**

## requestAnimationFrame
  requestAnimationFrame是浏览器用于定时循环操作的一个接口，类似于setTimeout，主要用途是按帧对网页进行重绘。

  设置这个API的目的是为了让各种网页动画效果（DOM动画、Canvas动画、SVG动画、WebGL动画）能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果。代码中使用这个API，就是告诉浏览器希望执行一个动画，让浏览器在下一个动画帧安排一次网页重绘。

  requestAnimationFrame的优势，在于充分利用显示器的刷新机制，比较节省系统资源。显示器有固定的刷新频率 **`（60Hz或75Hz）`** ，也就是说，每秒最多只能重绘60次或75次，requestAnimationFrame的基本思想就是与这个刷新频率保持同步，利用这个刷新频率进行页面重绘。此外，使用这个API，一旦页面不处于浏览器的当前标签，就会自动停止刷新。这就节省了CPU、GPU和电力。

  不过有一点需要注意，requestAnimationFrame是在主线程上完成。这意味着，如果主线程非常繁忙，requestAnimationFrame的动画效果会大打折扣。

  requestAnimationFrame使用一个回调函数作为参数。这个回调函数会在浏览器重绘之前调用。
  ```javascript
  requestID = window.requestAnimationFrame(callback); 
  ```
  目前，主要浏览器Firefox 23 / IE 10 / Chrome / Safari）都支持这个方法。可以用下面的方法，检查浏览器是否支持这个API。如果不支持，则自行模拟部署该方法。

  ```javascript
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
  ```

## 物体碰撞检测

  **该项目用到的是2D碰撞检测中最基础的一种 --规则物体碰撞**

  **基本思路**
  判断任意两个（无旋转）矩形的任意一边是否无间距，从而判断是否碰撞。

  ![两矩形间碰撞的各种情况](http://yechuanjie-image.oss-cn-beijing.aliyuncs.com/18-10-16/99740667.jpg)

  **基本算法**
  ```javascript
  rect1.x < rect2.x + rect2.width &&
  rect1.x + rect1.width > rect2.x &&
  rect1.y < rect2.y + rect2.height &&
  rect1.height + rect1.y > rect2.y
  ```
  **遗留缺陷**
  * 相对局限：两物体必须是矩形，且均不允许旋转（即关于水平和垂直方向上对称）。
  * 对于包含着图案（非填满整个矩形）的矩形进行碰撞检测，可能存在精度不足的问题。(如本项目中的钻石💎 和 钩子，为了简便我把它处理成了矩形，这样就会存在钩子未碰到钻石边缘却判定为碰撞的情况)
  * 物体运动速度过快时，可能会在相邻两动画帧之间快速穿越，导致忽略了本应碰撞的事件发生。

## 试着玩一把
    git clone https://github.com/Yechuanjie/goldman.git
    npm install
    npm run dev
