<template>
  <div id="admin-estadisticas">
    estadisticas
    <div class="cont-grafica" v-for="(key, i) in Object.keys(graficasPastel)" :key="i">
      <pastel v-if="listo"
        :etiquetas="graficasPastel[key].etiquetas"
            :datos="graficasPastel[key].datos"
           :titulo="graficasPastel[key].titulo"
          :colores="graficasPastel[key].colores"
      ></pastel>
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
    listo: false,
    graficasPastel: {}, // { 1: { etiquetas: [...], datos: [...], titulo: "", colores: [...] }, ... }
    reactivos: {},
    categorias: {}
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
          // Inicializar conteo de reactivos
          Object.values(reactivos).forEach(({ id: i }) => {
            this.reactivos[i] = {};
            for (let j = 1; j <= 5; j++) {
              this.reactivos[i][j] = 0;
            }
          });

          // Contar las respuestas
          alumnos.filter(i => i.respuestas).forEach(({ respuestas: resp }) => {
            resp = JSON.parse(resp);

            Object.keys(resp).forEach(i => { // id reactivo
              Object.keys(resp[i]).forEach(j => { // id docente
                this.reactivos[i][resp[i][j]]++;
              });
            });
          });

          // Agrupar por categorias
          Object.values(categorias).forEach(({ id: id_cat }) => {
            this.categorias[id_cat] = Object.keys(this.reactivos)
              .filter(i => reactivos.find(j => j.id == i).id_categoria == id_cat)
              .map(i => this.reactivos[i]).reduce((a, b) => {
                for (let i in b) {
                  a[i] += b[i];
                }

                return a;
              });
          });
          
          // this.listo = true;
          
          console.log(this.categorias);
        })
      })
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
    });
    
    setTimeout(() => {
      this.test = {
        etiquetas: ['et uno', 'dos', 'tres'],
        datos: [40, 10, 67],
        titulo: 'Categoria aquí',
        colores: ['#F44', '#F44', '#CA4']
      }
      this.listo = true;
    }, 500);
  }
}

</script>

<style>



</style>