<template>
  <div id="admin-principal">
    <AdminNavbar :anchoSidebar="anchoSidebar"/>
    <div id="debajoNavbar">
      <AdminSidebar :ancho="anchoSidebar" @seleccionarVista="cambiarVista"/>
      <div id="contenedorPagina">
        <transition name="fade">
          <AdminEstadisticas v-if="vista == 'estadisticas'"/>
          
          <AdminAlumnos v-if="vista == 'alumnos'"/>
          <AdminGrupos v-if="vista == 'grupos'"/>
          <AdminDocentes v-if="vista == 'docentes'"/>
          
          <AdminReactivos v-if="vista == 'reactivos'"/>
          <AdminCategorias v-if="vista == 'categorias'"/>

          <AdminAdministradores v-if="vista == 'administradores'"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

import AdminNavbar from '@/components/AdminNavbar.vue'
import AdminSidebar from '@/components/AdminSidebar.vue'
import AdminEstadisticas from '../components/vistasAdmin/AdminEstadisticas.vue'
import AdminAlumnos from '../components/vistasAdmin/AdminAlumnos.vue'
import AdminGrupos from '../components/vistasAdmin/AdminGrupos.vue'
import AdminDocentes from '../components/vistasAdmin/AdminDocentes.vue'
import AdminReactivos from '../components/vistasAdmin/AdminReactivos.vue'
import AdminCategorias from '../components/vistasAdmin/AdminCategorias.vue'
import AdminAdministradores from '../components/vistasAdmin/AdminAdministradores.vue'

export default {
  name: 'PanelAdmin',
  data() {
    return {
      anchoSidebar: 240,
      vista: 'estadisticas'
    }
  },
  components: {
    AdminNavbar,
    AdminSidebar,
    AdminEstadisticas,
    AdminAlumnos,
    AdminGrupos,
    AdminDocentes,
    AdminReactivos,
    AdminCategorias,
    AdminAdministradores
  },
  methods: {
    cambiarVista(vista) {
      this.vista = vista;
    }
  }
}

</script>

<style>

#admin-principal {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #F3F3F3;
}

#debajoNavbar {
  display: flex;
  flex-grow: 1;
  max-height: calc(100vh - 70px);
}

#contenedorPagina {
  padding: 20px;
  flex-grow: 1;
  max-height: 100%;
  overflow: auto;
}

</style>