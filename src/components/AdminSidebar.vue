<template>
  <div id="admin-sidebar" :style="anchoEnCSS">
    <div class="menu">
      <div
        v-for="(d, i) in datosMenu"
        :key="`menu-${i}`"
        :class="`${d.tipo} ${seleccionado == d.id ? 'seleccionado' : ''}`"
        @click="seleccionarMenu(d)"
      >
        <i v-if="d.tipo == 'entrada'" class="icono" :class="d.icono"></i>
        {{ d.nombre }}
        <i v-if="d.tipo == 'entrada'" class="flecha fas fa-chevron-right"></i>
      </div>
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
        { nombre: 'General', tipo: 'titulo' },
        { id: 0, nombre: 'Estadísticas', tipo: 'entrada', icono: 'far fa-chart-bar' },

        { nombre: 'Usuarios', tipo: 'titulo' },
        { id: 1, nombre: 'Alumnos', tipo: 'entrada', icono: 'fas fa-user-friends' },
        { id: 2, nombre: 'Grupos', tipo: 'entrada', icono: 'fas fa-chalkboard-teacher' },
        { id: 3, nombre: 'Docentes', tipo: 'entrada', icono: 'fas fa-user-tie' },

        { nombre: 'Cuestionario', tipo: 'titulo' },
        { id: 4, nombre: 'Reactivos', tipo: 'entrada', icono: 'far fa-question-circle' },
        { id: 5, nombre: 'Categorias', tipo: 'entrada', icono: 'fas fa-tag' },

        { nombre: 'Sistema', tipo: 'titulo' },
        { id: 6, nombre: 'Administradores', tipo: 'entrada', icono: 'fas fa-users-cog' }
      ],
      seleccionado: 0
    };
  },
  computed: {
    anchoEnCSS() {
      return `width: ${ this.ancho }px;`;
    },
  },
  methods: {
    seleccionarMenu(d) {
      if (d.tipo == 'entrada') {
        this.seleccionado = d.id;
      }
    }
  }
}
</script>

<style>

#admin-sidebar {
  /* padding-top: 20px; */
  height: 100%;
  background: #313A46;
  font-family: Poppins, sans-serif;
}

#admin-sidebar .titulo {
  padding: 32px 20px 10px 20px;
  color: #a2aebd;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
}

#admin-sidebar .entrada {
  padding: 13px 20px;
  color: #8391a2;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.15s;
}

#admin-sidebar .entrada.seleccionado {
  background: #394452;
}

#admin-sidebar .entrada .flecha {
  font-size: 0.7rem;
  transform: translateY(6px);
  float: right;
  height: 100%;
}

#admin-sidebar .entrada .icono {
  font-size: 1.2rem;
  margin-right: 8px;
}

#admin-sidebar .entrada:hover {
  color: #abb7c5;
}

/* 25, 155, 79 */

</style>