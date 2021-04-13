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
      <div class="dropdown">
        <i class="far fa-caret-square-down"></i>
        <div class="dropdown-content">
          <a @click="cerrarSesion()">Cerrar sesión</a>
        </div>
      </div>
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
  },
  methods: {
    cerrarSesion() {
      this.$router.push('/');
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
  box-shadow: 0px -8px 12px 6px rgba(0, 0, 0, 0.5);
  font-family: Poppins, sans-serif;
  z-index: 10;
}

#admin-navbar .seccion:not(#admin-navbar .logo) {
  display: flex;
  align-items: center;
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

#admin-navbar .seccion span,
#admin-navbar .seccion.usuario i {
  color: #FFF;
  font-size: 1.1rem;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
}

#admin-navbar .seccion.usuario i {
  cursor: pointer;
  margin-left: 12px;
}

#admin-navbar .dropdown {
  position: relative;
  display: inline-block;
}

#admin-navbar .dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  padding: 12px;
  background: #F1F1F1;
  min-width: 140px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}

#admin-navbar .dropdown-content a {
  transition: 0.15s;
}

#admin-navbar .dropdown-content a:hover {
  color: rgb(25, 155, 79);
}

#admin-navbar .dropdown:hover .dropdown-content {
  display: block;
}

#admin-navbar .dropdown i {
  transition: 0.25s;
}

#admin-navbar .dropdown:hover i {
  color: #CCC;
}

</style>