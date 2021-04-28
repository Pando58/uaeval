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
      <span class="etiqueta">Docentes a evaluar:</span>
      <div class="selectMultiple">
        <div
        class="opcion"
        v-for="(docente, i) in docentes"
        :key="i"
        >
          <input type="checkbox" name="" :id="`d-${i}`" v-model="docente.seleccionado">
          <label :for="`d-${i}`">{{docente.nombre}}</label>
        </div>
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
    docentes: [
      { id: 1, nombre: 'Juan' },
      { id: 2, nombre: 'Pedro' },
      { id: 3, nombre: 'Eduardo' }
    ],
    error: null
  }),
  methods: {
    enviar: function() {
      const grupo = this.grupo;
      const docentes = this.docentes.filter(i => i.seleccionado);

      console.log(grupo);
      console.log(docentes);
    }
  }
}

</script>

<style scoped>

.selectMultiple {
  margin: 6px;
  border: 1px solid #CCC;
  border-radius: 4px;
  max-height: 200px;
  overflow: auto;
}

.selectMultiple .opcion {
  padding: 8px;
}

.selectMultiple .opcion input,
.selectMultiple .opcion label {
  cursor: pointer;
}

</style>