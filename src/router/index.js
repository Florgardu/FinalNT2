import { createWebHistory, createRouter } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import navBar from '../components/navBar.vue'
import respuestasMc from '../components/respuestasMc.vue'


const routes = [
    {path: '/helloword', name: 'HelloWord', component: HelloWorld},
    {path: '/respuestasMc' , name: 'respuestasMc', component: respuestasMc},
    {path: '/navBar' , name: 'NavBar', component: navBar},
    { path: '/:catchAll(.*)', name: 'Nofound', component: HelloWorld }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;