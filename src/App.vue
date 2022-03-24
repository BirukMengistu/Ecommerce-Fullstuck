<template>
 <Navbar/>
 <router-view/>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components:{
    Navbar
  }
}
</script>
<style>
body{
background:#cfe7fa;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
