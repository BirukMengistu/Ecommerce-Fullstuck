<template >
   <div class="container">
   <div class='row'>
     <div class='col-md-7'>
        <img src="@/assets/logo.png" alt="" srcset=""/>
     </div>
        <div class='col-md-5'>
            <h1 class="display-4">Dear, Customer!</h1>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component 
                        for calling extra attention to featured content or information.
                        </p>
                    <p class="lead">
                        <a class="btn bg-Main btn-lg" @click="$router.push({path:'/products'})" role="button">Call to Action</a>
                    </p>
            </div>
   </div>
        
     
  </div>
</template>
<script>
export default {
    name:'Jumbotron'
}
</script>
<style>
    
</style>