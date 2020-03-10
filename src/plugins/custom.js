import Vue from 'vue';
import * as constant from '@common/constant';
import {
  searchDictionary,
  seeLabel,
  dateFmt,
  toJSON,
  currencyFmt,
  deepCopy,
  isAuth,
  localNumber
} from '@common/util.js';

Vue.prototype.$dict = searchDictionary;
Vue.prototype.$dateFilter = dateFmt;
Vue.prototype.$toJSON = toJSON;
Vue.prototype.$isAuth = isAuth;
Vue.prototype.$deepCopy = deepCopy;
Vue.prototype.$CONSTANT = constant;
Vue.prototype.$localNumber = localNumber;

Vue.filter('getLabel', searchDictionary);
Vue.filter('seeLabel', seeLabel);
Vue.filter('currency', currencyFmt);
Vue.filter('dateFilter', dateFmt);
Vue.filter('localNumber', localNumber);
