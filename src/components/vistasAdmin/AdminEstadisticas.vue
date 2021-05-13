<template>
  <div id="admin-estadisticas">
    <h3 class="titulo-graficas">Resultados por categoría</h3>
    <div class="graficas">
      <grafica-pastel 
        :categoriaSeleccionada="categoriaSeleccionada"
        :categorias="categorias"
        :chartData="chartData"
        @actualizarGrafica="actualizarGrafica"
        v-if="categoriaSeleccionada != null"
      />
      <div class="leyenda">
        <div class="etiqueta" v-for="(et, i) in etiquetas" v-bind:key="i">
          <div class="color" :style="`background-color: ${colores[i]}`"></div>
          <span><b>{{ etiquetasNumeros[i] }} ·</b> {{ et }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import api from '@/extras/api.js'
import { revisarSesion } from '@/extras/funciones.js'
import GraficaPastel from '@/components/vistasAdmin/Estadisticas/GraficaPastel.vue'

export default {
  name: 'AdminEstadisticas',
  components: {
    GraficaPastel
  },
  data: () => ({
    categoriaSeleccionada: null,
    etiquetas: [
      'Altamente en desacuerdo',
      'En desacuerdo',
      'Indiferente',
      'De acuerdo',
      'Totalmente de acuerdo'
    ],
    etiquetasNumeros: [
      '1',
      '2',
      '3',
      '4',
      '5' 
    ],
    categorias: null,
    datosReactivos: {},
    datosCategorias: {},
    colores: ['#f73636', '#ffa836', '#ffea42', '#b9ed4a', '#32d45a'],
    chartData: null
  }),
  mounted() {
    const { token, payload } = revisarSesion(this, true);

    const apiOpts = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    
    api.get('/api/categorias', apiOpts)
    .then(({ data: categorias }) => {      
      api.get('/api/reactivos', apiOpts)
      .then(({ data: reactivos }) => {
        api.get('/api/alumnos', apiOpts)
        .then(({ data: alumnos }) => {
          this.categorias = categorias;
          
          // Inicializar conteo de reactivos
          Object.values(reactivos).forEach(({ id: i }) => {
            this.datosReactivos[i] = {};
            for (let j = 1; j <= 5; j++) {
              this.datosReactivos[i][j] = 0;
            }
          });

          // Contar las respuestas
          alumnos.filter(i => i.respuestas).forEach(({ respuestas: resp }) => {
            resp = JSON.parse(resp);

            Object.keys(resp).forEach(i => { // id reactivo
              Object.keys(resp[i]).forEach(j => { // id docente
                this.datosReactivos[i][resp[i][j]]++;
              });
            });
          });

          // Agrupar por categorias
          Object.values(categorias).forEach(({ id: id_cat }) => {
            this.datosCategorias[id_cat] = Object.keys(this.datosReactivos)
              .filter(i => reactivos.find(j => j.id == i).id_categoria == id_cat)
              .map(i => this.datosReactivos[i]).reduce((a, b) => {
                for (let i in b) {
                  a[i] += b[i];
                }

                return a;
              });
          });

          this.categoriaSeleccionada = this.categorias[0].id;

          this.actualizarGrafica();
        })
      })
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
    });
  },
  methods: {
    getTituloCategoria() {
      return this.categorias.find(i => i.id == this.categoriaSeleccionada).categoria;
    },
    actualizarGrafica(catSel) {
      if (catSel) {
        this.categoriaSeleccionada = catSel;
      }

      this.chartData = {
        labels: this.etiquetasNumeros,
        datasets: [{
          data: Object.values(this.datosCategorias[this.categoriaSeleccionada]),
          backgroundColor: this.colores
        }]
      };
    }
  }
}

</script>

<style scoped>

* {
  color: #313A46;
}

.titulo-graficas {
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 6px 0;
}

.graficas {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center stretch;
}

.leyenda {
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  padding: 1em;
}

.leyenda .color {
  display: inline-block;
  width: 20px;
  height: 10px;
  margin-bottom: 1px;
  margin-right: 0.4rem;
  border-radius: 4px;
}

.leyenda .etiqueta {
  margin: 0.3em 0;
}

.leyenda b {
  font-weight: 500;
}

</style>