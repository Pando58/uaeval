<template>
  <div class="home">
    <button @click="test()">a</button>
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    this.$router.replace({ name: 'Login' });
  }
}

</script>
