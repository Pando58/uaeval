<template>
  <div id="admin-administradores">
    <div class="d-flex justify-center">
      <div class="tarjeta">
        <transition name="fade" mode="out-in">
          <AdminsTabla v-if="!vistaAgregar" @irAgregar="irAgregar"/>
          <AdminsAgregar v-else @irTabla="irTabla"/>
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
    vistaAgregar: false
  }),
  methods: {
    irAgregar: function() {
      this.vistaAgregar = true;
    },
    irTabla: function() {
      this.vistaAgregar = false;
    }
  }
}

</script>

<style>

#admin-administradores {
  font-family: Roboto, sans-serif;
}

#admin-administradores .tarjeta {
  width: 600px;
}

#admin-administradores .tarjeta .contenido {
  margin-top: 10px;
}


</style>