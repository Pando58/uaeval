<template>
  <div id="admin-estadisticas">
    <h3 class="titulo-graficas">Resultados por categoría</h3>
    <div class="graficas">
      <div class="botones">
        <button class="material-btn verde sombra ver-tabla" @click="copiarTablaGrafica">
          Copiar tabla
          <i class="far fa-file-excel"></i>
        </button>
      </div>
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
    
    api.get('/api/categorias', apiOpts).then(({ data: categorias }) => {      
    api.get('/api/reactivos', apiOpts).then(({ data: reactivos }) => {
    api.get('/api/alumnos', apiOpts).then(({ data: alumnos }) => {
      
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

    })})})
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
    },
    copiarTablaGrafica() {
      console.log(this.categorias);
      console.log(this.datosCategorias);

      
      const _table = document.createElement('table');
      const _thead = document.createElement('thead');
      const _tbody = document.createElement('tbody');

      // Cabecera   | Muy en desacuerdo | En desacuerdo | ...
      const _tr = document.createElement('tr');
      _thead.appendChild(_tr);

      this.etiquetas.forEach(i => {
        const _th = document.createElement('th');
        _th.innerHTML = i;
        _th.style.background = '#33a14b';
        _th.style.border = '1px solid #000';
        _th.style.color = '#FFF';
        _tr.appendChild(_th);
      });


      this.categorias.forEach(i => {
        // Agregar categoria
        const _tr = document.createElement('tr');
        const _th = document.createElement('th');
        _th.innerHTML = i.categoria;
        _th.style.fontWeight = '400';
        _th.style.background = '#d6ffdf';
        _th.style.border = '1px solid #000';
        _th.colSpan = 5;
        _tr.appendChild(_th);
        _tbody.appendChild(_tr);

        // Agregar datos
        const _tr2 = document.createElement('tr');
        Object.keys(this.datosCategorias[i.id]).forEach(j => {
          const _td = document.createElement('td');
          _td.innerHTML = this.datosCategorias[i.id][j];
          _td.style.background = '#e8ffed';
          _td.style.border = '1px solid #000';
          _tr2.appendChild(_td);
          _tbody.appendChild(_tr2);
        });
      });
      
      
      
      /* _table.style.position = 'fixed';
      _table.style.zIndex = '100';
      _table.style.top = '12px';
      _table.style.left = '12px';
      _table.style.background = '#FFF'; */

      _table.style.fontFamily = 'Arial';
      _table.style.fontSize = '1rem';
      _table.style.border = '1px solid #000';
      
      _table.appendChild(_thead);
      _table.appendChild(_tbody);
      document.body.appendChild(_table);


      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(_table);
      selection.removeAllRanges();
      selection.addRange(range);

      
      document.execCommand('copy');
      document.body.removeChild(_table);
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
  height: 100%;
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

.botones {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 12px;
  width: 100%;
  height: 100%;
}

.ver-tabla {
  font-size: 0.9rem;
  font-family: Poppins, sans-serif;
}

.ver-tabla i {
  transform: translateY(10%);
  font-size: 1.05rem;
  color: #FFF;
  margin-left: 0.2rem;
}

</style>