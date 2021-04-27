<template>
  <div class="d-flex flex-col tarjeta-form">
    <div class="cabeza">
      <i class="fas fa-arrow-left pointer" style="color: #AAA" @click="$emit('irTabla')"></i>
    </div>
    <div class="contenido">
      <div class="text-center">
        <h4>Agregar grupo</h4>
        <span class="msg-error" v-if="error">{{ error }}</span>
      </div>
      <div class="d-flex">
        <input type="text" class="flex-grow-1" placeholder="Grupo" v-model="grupo">
      </div>
      <div class="d-flex align-center">
        <span class="etiqueta">Docentes a evaluar:</span>
        <select multiple class="flex-grow-1" v-model="docentes">
          <option v-for="(docente, i) in lista_docentes" :key="i" :value="i">{{docente.nombre}}</option>
        </select>
      </div>
      <div class="f-right">
        <button class="material-btn verde" @click="enviar">Agregar</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GruposAgregar',
  data: () => ({
    grupo: '',
    docentes: [],
    lista_docentes: [
      { nombre: 'Juan' },
      { nombre: 'Pedro' },
      { nombre: 'Fermin' }
    ],
    error: null
  }),
  methods: {
    enviar: function() {}
  }
}

</script>
