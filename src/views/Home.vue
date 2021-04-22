<template>
  <h1>Cargando...</h1>
</template>

<script>

// @ is an alias to /src
import api from '../plugins/api';

export default {
  name: 'Home',
  mounted() {
    const token = this.$store.state.token;

    console.log(token);

    if (!token) {
      this.$router.replace({ name: 'Login' });
    } else {
      api.post('/auth', {}, {
        // headers: {
        //   'Authorization': `Bearer ${token}`
        // }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
};

</script>
