import 'file-loader?name=vueInstance.html!./index.html'
import Vue from 'vue';
import LifeCycle from './lifeCycle.vue';

// vue instance provide some properties and methods
const data = { a: 1 };
const empty = new Vue({
    el: '#empty',
    data
});
window.empty = empty;

console.log(empty.$data === data);
console.log(empty.$el === document.getElementById('empty'));

empty.$watch('a', function(newVal, oldVal) {
    console.log('value "a" changed');
});

// life cycle
new Vue(LifeCycle);
