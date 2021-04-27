<template>
  <div id="admin-docentes">
    <div class="d-flex justify-center">
      <div class="tarjeta-admins tarjeta">
        <transition name="fade" mode="out-in">
          <DocentesTabla v-if="!vistaAgregar" @irAgregar="irAgregar"/>
          <DocentesAgregar v-else @irTabla="irTabla"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

import DocentesTabla from './Docentes/DocentesTabla'
import DocentesAgregar from './Docentes/DocentesAgregar'

export default {  
  name: 'AdminDocentes',
  components: {
    DocentesTabla,
    DocentesAgregar
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

#admin-docentes {
  font-family: Roboto, sans-serif;
}

#admin-docentes .tarjeta-admins {
  width: 600px;
}

#admin-docentes .tarjeta-admins .contenido {
  margin-top: 10px;
}


</style>