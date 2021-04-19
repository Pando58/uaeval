<template>
  <div id="admin-administradores">
    <div class="d-flex justify-center">
      <div class="tarjeta-admins tarjeta">
        <transition name="fade" mode="out-in">
          <AdminsTabla v-if="!vistaAgregarUsuario" @irAgregarUsuario="irAgregarUsuario"/>
          <AdminsAgregar v-else @irTablaUsuarios="irTablaUsuarios"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

import AdminsTabla from './Administradores/AdminsTabla'
import AdminsAgregar from './Administradores/AdminsAgregar'

export default {  
  name: 'AdminAdministradores',
  components: {
    AdminsTabla,
    AdminsAgregar
  },
  data: () => ({
    mostrandoUsuario: null,
    vistaAgregarUsuario: false
  }),
  methods: {
    irAgregarUsuario: function() {
      this.vistaAgregarUsuario = true;
    },
    irTablaUsuarios: function() {
      this.vistaAgregarUsuario = false;
    }
  }
}

</script>

<style>

#admin-administradores {
  font-family: Roboto, sans-serif;
}

#admin-administradores .tarjeta-admins {
  width: 600px;
}

#admin-administradores .tarjeta-admins .contenido {
  margin-top: 10px;
}


</style>