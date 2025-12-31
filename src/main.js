import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Photo from './Photo.vue'
import Filter from './Filter.vue'
import Result from './Result.vue'
import Email from './Email.vue'

const app = createApp(App)
const routes = [
    {
        path:"/", 
        component: Home,
        name: "dashboard", 
    },{
        path:"/photo", 
        component: Photo, 
        name:"photo",
    }, 
    {
        path:"/filter", 
        component: Filter, 
        name: "filter"
    },{
        path:"/result", 
        component : Result, 
        name: "result"
    }, {
        path: "/email", 
        component: Email, 
        name: "email"
    }
] 
const router = createRouter({
    routes, 
    history:createWebHistory()})
app.use(router)

app.mount('#app')
