<template>
  <div id="admin-grupos">
    <div class="d-flex justify-center">
      <div class="tarjeta">
        <transition name="fade" mode="out-in">
          <GruposTabla v-if="!vistaAgregar" @irAgregar="irAgregar"/>
          <GruposAgregar v-else @irTabla="irTabla"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

import GruposTabla from './Grupos/GruposTabla'
import GruposAgregar from './Grupos/GruposAgregar'

export default {
  name: 'AdminGrupos',
  components: {
    GruposTabla,
    GruposAgregar
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

#admin-grupos {
  font-family: Roboto, sans-serif;
}

#admin-grupos .tarjeta {
  width: 600px;
}

#admin-grupos .tarjeta .contenido {
  margin-top: 10px;
}

</style>