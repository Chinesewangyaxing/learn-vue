import 'file-loader?name=workWithWebpack.html!./index.html'
import Vue from 'vue';
import App from './app.vue';

new Vue(App).$mount('#app');
