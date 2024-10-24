import { createRouter, createWebHistory} from "vue-router";
import {useUserStore}from './stores/user.js';
import Home from "./views/home.vue";
import Login from "./views/login.vue";
import Register from "./views/Register.vue";
 

 const requireAuth = async (to, from, next)=>{
    const userStore= useUserStore();
    userStore.loadingSession = true;
    const user =  await userStore.currentUser();
    if(user){
        next();
    }else{
        next("/login");
    }
    userStore.loadingSession = false;
}

const routes= [
    { path: "/", component: Home, beforeEnter: requireAuth },
    {path:"/login", component:Login},
    {path:"/register", component:Register},
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;