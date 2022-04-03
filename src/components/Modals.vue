<template>
 <teleport to=".modal">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open=false">Close</button>
  </div>
</teleport>
</template>
<script>


export default {
  data() {
    return {
      open: true
    }
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