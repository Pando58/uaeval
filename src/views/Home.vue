<template>
  <h1>Cargando...</h1>
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
