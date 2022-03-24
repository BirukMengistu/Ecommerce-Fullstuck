import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Product from '../views/Product.vue'
import ProductDetails from '../views/ProductDetails.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/team',
    name: 'Team',
    component: Team 
  },
  {
    path: '/products',
    name: 'Product',
    component: Product 
  },
  {
    path: '/productdetails',
    name: 'ProductDetails',
    component: ProductDetails 
  },
  {
    path: '/products/details/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
