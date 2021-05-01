<template>
  <div id="Home">
    <h1>Cargando...</h1>
    <p>{{test}}</p>
  </div>
</template>

<script>

// @ is an alias to /src
import api from '../extras/api';
import { parseJWT } from '../extras/funciones';

export default {
  name: 'Home',
  data: () => ({
    test: ''
  }),
  mounted() {
    const token = this.$store.state.token;
    
    if (!token) {
      this.$router.replace('/login');
    } else {
      const payload = parseJWT(token);
      
      if (payload.data.admin) {
        this.$router.replace('/panel_admin');
      } else {
        this.$router.replace('/cuestionario');
      }
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