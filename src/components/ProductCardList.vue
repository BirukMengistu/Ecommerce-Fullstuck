<template >
   <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">

    <ProductCard  v-for="product in products" :key="product._id" :product="product"/>
    
  </div>
</template>
<script>
import ProductCard from "./ProductCard.vue"
import {mapGetters ,computed} from 'vuex'

export default {
  components:{
    ProductCard,
  },
   computed:{
    ...mapGetters(['products'])
   }
}
</script>

<style>
    
</style>