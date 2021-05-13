<template>
  <div id="admin-estadisticas">
    <h3 class="titulo-graficas">Resultados por categoría</h3>
    <div class="graficas">
      <div class="container-grafica">
        <div class="titulo-cat" v-if="categoriaSeleccionada != null">
          <select id="selCategoriaGrafica" v-model="categoriaSeleccionada" @change="actualizarGrafica">
            <option v-for="(cat, i) in categorias" :key="i" :value="cat.id">{{ cat.categoria }}</option>
          </select>
          <i class="fas fa-chevron-down"></i>
          <!-- <h3>{{ getTituloCategoria() }}</h3> -->
        </div>
        <pastel v-if="categoriaSeleccionada != null" :chart-data="chartData"></pastel>
      </div>
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

import Pastel from '@/components/graficas/Pastel.js'
import api from '@/extras/api.js'
import { revisarSesion } from '@/extras/funciones.js'

export default {
  name: 'AdminEstadisticas',
  components: {
    Pastel
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
    actualizarGrafica() {
      console.log(this.datosCategorias[this.categoriaSeleccionada]);
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

#selCategoriaGrafica {
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  padding: 0.5em 0.8em;
  appearance: none;
  border: none;
  cursor: pointer;
  outline: none;
}

#selCategoriaGrafica:hover {
  background: #00000018;
}

#selCategoriaGrafica option {
  color: #444;
  background: #FFF;
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