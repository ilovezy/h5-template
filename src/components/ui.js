import '../assets/styles/base.less';

import {Layout} from './layout';
import {NavBar} from './navbar';
import {SendCode} from './sendcode';
import {RollNotice, RollNoticeItem} from './rollnotice';
import {SimpleListItem} from './simpleListItem';
import {BankCard} from './bankCard';
import {InterestModal} from './infoModals';

window.document.addEventListener('touchstart', function (event) {
  /* Do Nothing */
}, false);

const install = function (Vue) {
  Vue.component(Layout.name, Layout);
  Vue.component(NavBar.name, NavBar);
  Vue.component(SendCode.name, SendCode);
  Vue.component(RollNotice.name, RollNotice);
  Vue.component(RollNoticeItem.name, RollNoticeItem);
  Vue.component(SimpleListItem.name, SimpleListItem);
  Vue.component(BankCard.name, BankCard);
  Vue.component(InterestModal.name, InterestModal);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
