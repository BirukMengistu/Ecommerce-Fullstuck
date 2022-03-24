<template>
  <div v-if="product">
    <div class="row container m-4 shadow-4">
          <div class="col-lg-6 mt-3">
            <img :src="product.image" class="img-fluid">
          </div>
      <div class="col-lg-6 text-center text-lg-start mt-3">
          <h2>{{product.name}}</h2>
              <p class="h3 text-danger">{{product.price}} SEK</p>
                    <div class="mt-5">
                      <p class="h3 text-info">{{product.desc}}</p>
                      <p class="h4 text-black">{{quantity}}</p>
                    </div>
               
       </div>
     
              <div class="text-end mt-2">
                  <button @click="quantity++" class="btn btn-info mb-2"><i class="fa-solid fa-cart-plus"></i> Add to cart</button>
               </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      quantity: 1
    }
  },
 
 methods: {
    ...mapActions(['getProductById'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProductById(this.id)
  }
}
</script>

<style>

</style>