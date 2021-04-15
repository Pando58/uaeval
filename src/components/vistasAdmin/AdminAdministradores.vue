<template>
  <div id="admin-administradores">
    <div class="d-flex justify-center">
      <div id="tarjeta-admins" class="tarjeta">
        <transition name="fade" mode="out-in">
          <AdminsTablaUsuarios v-if="!vistaAgregarUsuario" @irAgregarUsuario="irAgregarUsuario"/>
          <AdminsAgregar v-else @irTablaUsuarios="irTablaUsuarios"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AdminsTablaUsuarios from '../AdminsTablaUsuarios'
import AdminsAgregar from '../AdminsAgregar'

export default {  
  name: 'AdminAdministradores',
  components: {
    AdminsTablaUsuarios,
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

#tarjeta-admins {
  width: 500px;
}

#tarjeta-admins .contenido {
  margin-top: 10px;
}


</style>