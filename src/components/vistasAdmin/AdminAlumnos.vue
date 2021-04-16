<template>
  <div id="admin-alumnos">
    <div class="d-flex justify-center">
      <div class="tarjeta-admins tarjeta">
        <transition name="fade" mode="out-in">
          <AlumnosTabla v-if="!vistaAgregar" @irAgregarAlumno="irAgregarAlumno"/>
          <AlumnosAgregar v-else @irTablaAlumnos="irTablaAlumnos"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

import AlumnosTabla from './Alumnos/AlumnosTabla';
import AlumnosAgregar from './Alumnos/AlumnosAgregar'

export default {
  name: 'AdminAlumnos',
  components: {
    AlumnosTabla,
    AlumnosAgregar
  },
  data: () => ({
    mostrandoAlumno: null,
    vistaAgregar: false
  }),
  methods: {
    irAgregarAlumno: function() {
      this.vistaAgregar = true;
    },
    irTablaAlumnos: function() {
      this.vistaAgregar = false;
    }
  }
}

</script>

<style>

#admin-alumnos {
  font-family: Roboto, sans-serif;
}

#admin-alumnos .tarjeta-admins {
  width: 600px;
}

#admin-alumnos .tarjeta-admins .contenido {
  margin-top: 10px;
}


</style>