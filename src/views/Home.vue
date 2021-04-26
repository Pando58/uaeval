<template>
  <div id="Home">
    <h1>Cargando...</h1>
  </div>
</template>

<script>

// @ is an alias to /src
import api from '../plugins/api';

export default {
  name: 'Home',
  mounted() {
    const token = this.$store.state.token;

    if (!token) {
      this.$router.replace('/login');
    } else {
      api.post('/auth', {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => {
        if (!!parseInt(res.data.data.admin)) {
          this.$router.replace('/panel_admin');
        } else {
          this.$router.replace('/cuestionario');
        }
      })
      .catch(err => {
        // console.log(err.response);
        this.$router.replace('/login');
      });
    }
  }
};

</script>

<style scoped>

#Home {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: Rubik, sans-serif;
  font-size: 4rem;
  color: #AAA;
}

</style>