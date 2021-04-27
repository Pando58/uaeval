<template>
  <div id="admin-alumnos">
    <div class="d-flex justify-center">
      <div class="tarjeta">
        <transition name="fade" mode="out-in">
          <AlumnosTabla v-if="!vistaAgregar" @irAgregar="irAgregar"/>
          <AlumnosAgregar v-else @irTabla="irTabla"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

import AlumnosTabla from './Alumnos/AlumnosTabla'
import AlumnosAgregar from './Alumnos/AlumnosAgregar'

export default {
  name: 'AdminAlumnos',
  components: {
    AlumnosTabla,
    AlumnosAgregar
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

#admin-alumnos {
  font-family: Roboto, sans-serif;
}

#admin-alumnos .tarjeta {
  width: 600px;
}

#admin-alumnos .tarjeta .contenido {
  margin-top: 10px;
}

</style>