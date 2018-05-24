// import 'babel-polyfill';
import picker from './picker/index';
import datePicker from './datePicker/index';
import cityPicker from './cityPicker/index';
import toast from './toast';
import pageloading from './pageloader';
import wnlShare from './wnl_share';
import wxShare from './wx_share';
import vscroll from './vscroll/vscroll';
import imgupload from './imgupload/index';

const wnlui = {
  picker,
  datePicker,
  cityPicker,
  toast,
  pageloading,
  wnlShare,
  wxShare,
  vscroll,
  imgupload
};
window.wnlui = wnlui;
export { picker, datePicker, cityPicker, toast, pageloading, wnlShare, wxShare, vscroll, imgupload };
// babel-polyfill vs babel-runtime
// 那什么时候用 babel-polyfill 什么时候用 babel-runtime 呢？如果你不介意污染全局变量（如上面提到的业务代码），放心大胆地用 babel-polyfill ；而如果你在写模块，为了避免污染使用者的环境，没的选，只能用 babel-runtime + babel-plugin-transform-runtime。
