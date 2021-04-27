<template>
  <div class="d-flex flex-col tarjeta-form">
    <div class="cabeza">
      <i class="fas fa-arrow-left pointer" style="color: #AAA" @click="$emit('irTabla')"></i>
    </div>
    <div class="contenido">
      <div class="text-center">
        <h4>Agregar alumno</h4>
        <span class="msg-error" v-if="error">{{ error }}</span>
      </div>
      <div class="nombre">
        <input type="text" placeholder="Nombre(s)" v-model="nombre">
        <input type="text" placeholder="Apellido Paterno" v-model="apellido_p">
        <input type="text" placeholder="Apellido Materno" v-model="apellido_m">
      </div>
      <div class="d-flex align-center">
        <input type="text" class="flex-grow-2" placeholder="Matrícula" v-model="usuario">
        <span class="etiqueta">Grupo:</span>
        <select class="flex-grow-1" v-model="grupo">
          <option disabled value="">----</option>
          <option value="1">Volvo</option>
          <option value="2">Saab</option>
          <option value="3">Opel</option>
          <option value="4">Audi</option>
        </select>
        <!-- <input type="text" class="flex-grow-1" placeholder="Grupo"> -->
      </div>
      <div class="f-right">
        <button class="material-btn verde" @click="enviar">Agregar</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AlumnosAgregar',
  data: () => ({
    nombre: '',
    apellido_p: '',
    apellido_m: '',
    usuario: '',
    grupo: '',
    error: ''
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
}

</style>