import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import './plugins/vuetify';

import router from './router';
import store from './store/store';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.filter('currency', value => {
	return 'R$ ' + value.toLocaleString()	
})

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router,
	  store,
    render(h) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecycle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
        },
      });
    },
  },
});

export var mountParcel;

// export const bootstrap = vueLifecycles.bootstrap;
export const bootstrap = [
  (props) => {
    mountParcel = props.mountParcel
    return Promise.resolve()
  }
];
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
