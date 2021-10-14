/* eslint-disable no-underscore-dangle */
import { createApp, App } from 'vue';
import ElementPlus from 'element-plus';

import AppVue from './App.vue';

import router from './router';
import store from './store';
import directives from './directives';
import VueSvg from './plugin/icons/VueSvg.vue';
import 'element-plus/theme-chalk/index.css';
import './styles/global.less';

const app = createApp(AppVue);

interface IWin extends Window {
  __VUE_DEVTOOLS_GLOBAL_HOOK__?: {
    Vue?: App<Element>
  },
}

Object.keys(directives).forEach((item) => {
  app.directive(item, directives[item]);
});

app.component('VueSvg', VueSvg);

app.use(ElementPlus);
app.use(router);
app.use(store);

const win: IWin = window;

if (process.env.NODE_ENV === 'development') {
  if (win.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
  }
}

app.mount('#app');
