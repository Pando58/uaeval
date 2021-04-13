<template>
  <div id="admin-sidebar" :style="anchoEnCSS">
    <div class="menu">
      <div v-for="d in datosMenu" v-bind:key="d" :class="d.tipo">{{ d.nombre }}<i v-if="d.tipo == 'entrada'" class="fas fa-chevron-right"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminSidebar',
  props: {
    ancho: Number
  },
  data() {
    return {
      datosMenu: [
        { nombre: 'Titulo 1', tipo: 'titulo' },
        { nombre: 'Entrada 1', tipo: 'entrada' },
        { nombre: 'Entrada 2', tipo: 'entrada' },
        { nombre: 'Entrada 3', tipo: 'entrada' },
        { nombre: 'Titulo 2', tipo: 'titulo' },
        { nombre: 'Entrada 1', tipo: 'entrada' },
        { nombre: 'Entrada 2', tipo: 'entrada' },
        { nombre: 'Titulo 3', tipo: 'titulo' },
        { nombre: 'Entrada 1', tipo: 'entrada' },
        { nombre: 'Entrada 2', tipo: 'entrada' },
        { nombre: 'Entrada 3', tipo: 'entrada' },
        { nombre: 'Entrada 4', tipo: 'entrada' },
      ]
    };
  },
  computed: {
    anchoEnCSS() {
      return `width: ${ this.ancho }px;`;
    }
  }
}
</script>

<style>

#admin-sidebar {
  padding-top: 20px;
  height: 100%;
  background: #313A46;
  font-family: Poppins, sans-serif;
}

#admin-sidebar .titulo {
  padding: 20px 20px 10px 20px;
  color: #a2aebd;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
}

#admin-sidebar .entrada {
  padding: 13px 20px;
  color: #8391a2;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.15s;
}

#admin-sidebar .entrada i {
  font-size: 0.7rem;
  transform: translateY(6px);
  float: right;
  height: 100%;
}

#admin-sidebar .entrada:hover {
  color: #abb7c5;
}

/* 25, 155, 79 */

</style>