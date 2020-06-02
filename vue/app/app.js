import Vue from 'vue';
import VueRouter from 'vue-router';

const template = `
    <div>
        <h1>Vue Example</h1>
        <nav>
            <router-link to="/home">Go to Home</router-link>
            <router-link to="/about">Go to About</router-link>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </div>
`;

const Home = () => require(['es6!./components/home']).then(res => res[0].Home)
const About = () => require(['es6!./components/about']).then(res => res[0].About)

const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About }
]
  
const router = new VueRouter({
    routes
});

export function start() {
    Vue.use(VueRouter)

    new Vue({
        el: '#root',
        router,
        components: {
            'home': Home,
        },
        template: template
    });
}