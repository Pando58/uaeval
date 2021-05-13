<template>
  <div class="container-grafica">
    <div class="titulo-cat">
      <select v-model="catSel" @change="$emit('actualizarGrafica', catSel)">
        <option v-for="(cat, i) in categorias" :key="i" :value="cat.id">{{ cat.categoria }}</option>
      </select>
      <i class="fas fa-chevron-down"></i>
      <!-- <h3>{{ getTituloCategoria() }}</h3> -->
    </div>
    <pastel :chart-data="chartData"></pastel>
  </div>
</template>

<script>

import Pastel from '@/components/graficas/Pastel.js'

export default {
  name: 'GraficaPastel',
  components: {
    Pastel
  },
  data: () => ({
    catSel: null
  }),
  props: [
    'categoriaSeleccionada',
    'categorias',
    'chartData'
  ],
  mounted() {
    this.catSel = this.categoriaSeleccionada;
  }
}

</script>

<style scoped>

* {
  color: #313A46;
}

.container-grafica {
  grid-column: 2 / span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 11px 12px;
  padding: 0 0 22px 0;
  background: #FFF;
  box-shadow: 0 0 14px #0001;
  border-radius: 3px;
}

.titulo-cat {
  position: relative;
  width: 100%;
  padding: 0;
  margin-bottom: 12px;
  border-bottom: 1px solid #0002;
}

.titulo-cat i {
  position: absolute;
  font-size: 1rem;
  top: 0.8em;
  right: 0.8em;
}

select {
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  padding: 0.5em 0.8em;
  appearance: none;
  border: none;
  cursor: pointer;
  outline: none;
  transition: 0.2s;
}

select:hover {
  background: #00000018;
}

select option {
  color: #444;
  background: #FFF;
}

</style>