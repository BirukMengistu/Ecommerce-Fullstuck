<template>
  <div class="p-2 d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <div class="image-container">
        <img :src="item.product.image" class="img-fluid">
      </div>
      <div>
          
        <div><strong>{{ item.product.name }}</strong></div>
        <div><small>{{ item.quantity }} x {{ item.product.price }}</small></div>
      </div>
    </div>
    <div>
      <div class="btn-group btn-group-sm me-1">
        <button v-if="item.quantity>0" class="btn btn-dark" @click.stop="decrement">-</button>
        <button class="btn btn-dark" @click.stop="increment">+</button>
        </div>
      <button class="btn btn-danger btn-sm" @click="RemovedItemfromCart({item})"><i class="fa-solid fa-trash"></i></button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ['item'],
   methods: {
 
       ...mapActions(['RemovedItemfromCart']),
   
     decrement() {
       if( this.item.quantity > 0 )
       this.item.quantity--
        else
       {
        this.RemovedItemfromCart({item})
      } 
       },
       
        increment() {
      
       this.item.quantity++
      
       console.log(this.item.quantity)
      
       }
       
      
   }

  
  
 

 
    
  
}
</script>

<style scoped>
  .image-container {
    width: 90px;
  }
</style>