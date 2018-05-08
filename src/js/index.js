// import 'babel-polyfill';
import { wnlShare, wxShare, toast } from '@wnl/ui';
import { util } from '@wnl/util';
import '../scss/index.scss';

console.log(util.isWnl);
console.log('wnlshare', wnlShare);
console.log('wxShare', wxShare);
new toast().show('toast~');