import {Home} from 'es6!./components/home';
import Vue from 'vue';

export function start() {
    new Vue({
        el: '#root',
        components: {
            'home': Home
        },
        template: '<home/>'
    });
}