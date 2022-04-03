<template>
  <div class="container">
  <Jumbotron/>
   <CTA/>
  <Modals/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import CTA from '@/components/CTA.vue'
import Modals from '@/components/Modals.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Jumbotron,
    CTA, Modals
  }
}
</script>
<style >

.modal{
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
 background: white;
}
</style>