import $ from '../util/dom';
import './toast.css';

export default class toast {
  // $toastItem = null;
  // htmlTpl = '<div class="toast_wrapper"><div class="toast_txt"><%= message %></div></div>';
  constructor() {
    this.$toastItem = null;
    this.htmlTpl = '<div class="toast_wrapper"><div class="toast_txt"><%= message %></div></div>';
  }
  show(message) {
    if (this.$toastItem) {
      return;
    }
    this.$toastItem = $($.render(this.htmlTpl, { message }));
    if ($(document.body).find('.toast_wrapper').length === 0) {
      $(document.body).append(this.$toastItem);
    }
    setTimeout(() => {
      this.$toastItem.addClass('show');
    }, 0);
    setTimeout(() => {
      this.$toastItem.addClass('hide');
      this.$toastItem.removeClass('show');
    }, 900);
    setTimeout(() => {
      this.hide();
    }, 1100);
  }
  hide() {
    this.$toastItem.remove();
    this.$toastItem = null;
  }
}
