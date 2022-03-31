<template>
<ShoppingCartProduct v-for='item in shoppingCart' :key='item.product._id' :item='item'/>
    <div  v-if="shoppingCart.length < 1">
        <div class='d-flex p-2 d-flex justify-content-center align-items-center'>
             Cart is empty now!
        </div>
        <div class="dropdown-divider"></div>
    </div>
    <div class="d-flex p-2 justify-content-between align-items-center">
        <div>
            <div>Totalt: {{shoppingCartTotal}} SEK</div>
            <small class="text-muted">inkl. moms</small>
            </div>
            <router-link to="/checkout" type='button'  class="btn btn-info">Checkout</router-link>
       
    </div>
   
</template>
<script>
import ShoppingCartProduct from './ShoppingCartProduct.vue'
import {mapGetters} from 'vuex'
export default {
   components: { ShoppingCartProduct },
  computed: {
    ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
  } ,
  methods:{
    display(){
    console.log(this.shoppingCart)
    }
  }
}
</script>
<style >
    
</style>