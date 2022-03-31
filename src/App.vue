<template>
  <Navbar/>
  <router-view/>
  <Footer />
 
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import Footer from '@/components/Footer.vue'
import CTA from '@/components/CTA.vue'

export default {
  components:{
    Navbar,
    Footer
  
  }
}
</script>
<style>
html,body{
background:#faf2cf;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
