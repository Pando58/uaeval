<template>
  <div class="d-flex flex-col tarjeta-form">
    <div class="cabeza">
      <i class="fas fa-arrow-left pointer" style="color: #AAA" @click="$emit('irTabla')"></i>
    </div>
    <div class="contenido">
      <div class="text-center">
        <h4>Agregar docente</h4>
        <span class="msg-error" v-if="error">{{ error }}</span>
      </div>
      <div class="nombre">
        <input type="text" placeholder="Nombre(s)" v-model="nombre">
        <input type="text" placeholder="Apellido Paterno" v-model="apellido_p">
        <input type="text" placeholder="Apellido Materno" v-model="apellido_m">
      </div>
      <br>
      <div class="f-right">
        <button class="material-btn verde" @click="enviar">Agregar</button>
      </div>
    </div>
  </div>
</template>

<script>

import api from '../../../plugins/api';

export default {
  name: 'AdminsAgregar',
  data: () => ({
    nombre: '',
    apellido_p: '',
    apellido_m: '',
    error: null
  }),
  methods: {
    enviar: function() {}
  }
}

</script>

<style scoped>

.nombre {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  margin-top: 8px;
}

</style>