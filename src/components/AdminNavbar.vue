<template>
  <nav id="admin-navbar">
    <div class="seccion logo" :style="getAnchoSidebar">
      <img src="../assets/images/aguila.png" alt="">
    </div>
    <div class="seccion titulo">
      <span>Panel de administración</span>
    </div>
    <div class="seccion usuario">
      <span>Nombre de Usuario</span>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'AdminNavbar',
  props: {
    usuario: String,
    anchoSidebar: Number
  },
  computed: {
    getAnchoSidebar() {
      return `width: ${ this.anchoSidebar }px;`;
    }
  }
}

</script>

<style>

#admin-navbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background: rgb(25, 155, 79);
  box-shadow: 0px -6px 6px 6px rgba(0, 0, 0, 0.7);
  font-family: Poppins, sans-serif;
}

#admin-navbar .seccion:not(#admin-navbar .logo) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
}

#admin-navbar .logo {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 5px;
  background: rgba(0, 0, 0, 0.06);
}

#admin-navbar .seccion:last-child {
  margin-right: 10px;
}

#admin-navbar .seccion span {
  color: #FFF;
  font-size: 1.1rem;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
}

</style>