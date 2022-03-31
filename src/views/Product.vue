<template >

<div class='container m-3'>
  <ProductCardList/>
</div>
   
</template>

<script>
import ProductCardList  from '@/components/product/ProductCardList.vue'
import {mapActions} from 'vuex'
export default {
    components:{
        ProductCardList,
    },
    methods: {
      ...mapActions(['getProducts'])
    },
    created() {
      this.getProducts()
    },
}
</script>
<style >
    
</style>