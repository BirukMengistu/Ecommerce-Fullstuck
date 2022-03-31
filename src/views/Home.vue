<template>
  <div class="container">
  <Jumbotron/>
   <CTA/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import CTA from '@/components/CTA.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Jumbotron,
    CTA
  }
}
</script>
