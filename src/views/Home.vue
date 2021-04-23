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

    if (!token) {
      this.$router.replace({ name: 'Login' });
    } else {
      api.post('/auth', {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => {
        if (!!parseInt(res.data.data.admin)) {
          this.$router.replace({ name: 'PanelAdmin' });
        } else {
          this.$router.replace({ name: 'Cuestionario' });
        }
      })
      .catch(err => {
        console.log(err.response);
      });
    }
  }
};

</script>
