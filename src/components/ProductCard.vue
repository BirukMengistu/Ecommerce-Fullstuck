<template>
    
        <div class="col">
                <div class="card h-100">
                        <div>
                            <img :src="product.image" class="card-img-top"/>
                            <router-link :to="{ name: 'ProductDetails', params: { id: product._id}}">
                            <div class="mask"></div>
                            </router-link>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">{{product.name}}</h3>
                            <p class="card-text">
                            {{product.short}}
                            </p>
                           
                        </div>
                </div>
        </div>
    
</template>
<script>

    export default {
        name:'ProductCard',
         props:['product']
    }
   
</script>
 <style>
    
</style>