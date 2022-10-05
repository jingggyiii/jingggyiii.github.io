// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import HelloWorld from './components/HelloWorld.vue'


import { library } from "@fortawesome/fontawesome-svg-core";
import { faBook, faUser, faLightbulb, faChalkboard, faSignOut, faAdd, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBook,faUser, faLightbulb, faChalkboard, faSignOut, faAdd, faSearch);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },

        {
            path:'/homepage',
            component: HomePage
        },

        {
            path: '/helloworld',
            component: HelloWorld
        },
        
    ]
})

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')