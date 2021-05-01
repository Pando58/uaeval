<template>
  <div id="admin-principal">
    <AdminNavbar :anchoSidebar="anchoSidebar" :nombre="nombre" @cerrarSesion="cerrarSesion"/>
    <div id="debajoNavbar">
      <AdminSidebar :ancho="anchoSidebar" @seleccionarVista="cambiarVista"/>
      <div id="contenedorPagina">
        <h3 class="tituloVista">{{ vista }}</h3>
        <transition name="fade" mode="out-in">
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

import api from '../plugins/api'
import { parseJWT, cerrarSesion, revisarSesion } from '../plugins/funciones'

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
  data: () => ({
    anchoSidebar: 240,
    vista: 'estadisticas',
    nombre: '',
  }),
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
    },
    cerrarSesion() { cerrarSesion(this) }
  },
  created() {
    const sesion = revisarSesion(this, true);

    if (sesion.token) {
      this.nombre = `${sesion.payload.data.nombres} ${sesion.payload.data.apellido_p} ${sesion.payload.data.apellido_m}`;
    } else {
      this.nombre = '...';
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

#contenedorPagina .tituloVista {
  font-family: Poppins, sans-serif;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.06rem;
  margin: 0 0 12px 0;
  color: #313A46;
}

</style>