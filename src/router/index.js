import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Login from '../views/LoginView.vue'
import Product from '../views/Product.vue'
import UserRegister from '../views/Register.vue'
import Checkout from '../views/Checkout.vue'
import MyProfile from '../views/MyProfile.vue'
import ProductDetails from '../views/ProductDetails.vue'
import store from '../store/index'

const requireAuth = (to, from, next) => {
  let loggedIn = store.getters.loggedIn
  if(!loggedIn) next({ name: 'Login' , query: { redirect: to.fullPath }})
  else next()
}

const requireNoAuth = (to, from, next) => {
  let loggedIn = store.getters.loggedIn
  if(loggedIn) next({ name: 'Home' })
  else next()
}
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
    path: '/login',
    name: 'Login',
    component: Login 
   
  },
  {
    path: '/products',
    name: 'Product',
    component: Product 
   
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    props:{ default: true }
  },
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegister 
  },
  {
    path: '/productdetails',
    name: 'ProductDetails',
    component: ProductDetails 
  },
  {
    path: '/myprofile',
    name: 'myProfile',
    component: MyProfile,
    // meta: { authorize: true }
    beforeEnter: requireAuth
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
