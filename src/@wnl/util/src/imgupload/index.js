import ajax from './ajax';

// import lrz from './lrz';
const ua = window.navigator.userAgent.toLowerCase();
const isWnl = /wnl/i.test(ua);
const isAndroid = /android|htc/i.test(ua) || (window.navigator.platform + '').match(/linux/i);
const tokenUrl = 'https://msg.51wnl.com/api/Active/qintoken';
/**
 * 图片上传组件
 * @export imgupload
 * @class imgupload
 */
export default class imgupload {
  $el = null;
  uploadCallback = null;
  /**
   * Creates an instance of imgupload.
   * @param {Element} $el input输入框元素
   * @param {Object} options 配置回调
   * @memberof imgupload
   */
  constructor($el, options) {
    this.$el = $el;
    this.uploadCallback = options.uploadCallback;
    ajax.loadScript('//c.51wnl.com/wnl_feedback_new/js/lrz.all.bundle.js').then(this.getDeviceType());
  }
  getDeviceType() {
    console.log(window.lrz);
    return (isAndroid && isWnl) === true ? this.dealWithAndroidWnl() : this.dealWithOther();
  }
  dealWithAndroidWnl() {
    this.$el.onclick = (event) => {
      event.preventDefault();
      console.log('protocol://getfilecode#filecodecallback');
      window.location.href = 'protocol://getfilecode#filecodecallback';
    };
    window.filecodecallback = (data) => {
      this.getImgSrc(data);
    };
  }
  getImgSrc(base64) {
    ajax
      .getJSON(tokenUrl)
      .then((res) => {
        let token = JSON.parse(res).token;
        this.uptoQiniu(token, base64);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  dealWithOther() {
    this.$el.addEventListener('change', () => {
      lrz(this.$el.files[0], { //eslint-disable-line
        width: 512,
        quality: 1
      })
        .then((rst) => {
          // 处理成功会执行
          // console.log(rst);
          let base64 = rst.base64.substr(rst.base64.indexOf('base64,') + 7);
          this.getImgSrc(base64);
        })
        .catch((err) => {
          // 处理失败会执行
          console.log(err);
        })
        .always(() => {
          // 不管是成功失败，都会执行
        });
    });
  }
  /**
   *
   * @param {string} token //获取的token响应
   * @param {string} base64 // 获取到图片的base64值
   * @memberof imgUpload
   */
  uptoQiniu(token, base64) {
    let url = '//upload.qiniu.com/putb64/-1'; //非华东空间需要根据注意事项 1 修改上传域名
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        let resData = JSON.parse(xhr.responseText);
        let resultImg = new Image();
        resultImg.src = 'https://qiniu.image.cq-wnl.com/' + resData.key;
        resultImg.onload = () => {
          //执行操作
          if (this.uploadCallback) {
            this.uploadCallback(resultImg.src);
          }
        };
      }
    };
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.setRequestHeader('Authorization', 'UpToken ' + token);
    xhr.send(base64);
  }
}
