import 'file-loader?name=templateSyntax.html!./index.html'
import Interpolations from './interpolations.vue';
import Vue from 'vue';

new Vue(Interpolations);