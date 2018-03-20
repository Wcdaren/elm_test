import Vue from 'vue'
import Router from 'vue-router'
import Seller from '@/components/seller/seller'
import Goods from '@/components/goods/goods.vue'
import Ratings from '@/components/ratings/ratings'



Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect:'/goods'
    },
    {
        path:'/goods',
        component: Goods
    },
    {
        path:'/seller',
        component: Seller
    },
    {
        path: '/ratings',
        component: Ratings
    }
  ]
})
