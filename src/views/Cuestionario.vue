<template>
  <div id="cuestionario">
    <div class="bg">
      <div class="arriba"></div>
      <div class="abajo"></div>
    </div>

    <div class="nav d-flex" ref="nav">
      <div class="nombre">Juan Pérez</div>
      <div class="titulo">Evaluación Docente</div>
      <div class="menu">:</div>
    </div>
    
    <main>
      <div class="cuestionario">
        <CuestionarioBarra/>
        <hr>
        <CuestionarioPreguntas
        v-for="(cat, i) in getCategoria"
        :key="i"
        :categoria="cat"
        :preguntas="getPreguntas"
        :docentes="docentes"
        />
      </div>
    </main>
  </div>
</template>

<script>

import CuestionarioBarra from '../components/cuestionario/CuestionarioBarra'
import CuestionarioPreguntas from '../components/cuestionario/CuestionarioPreguntas'

export default {
  name: 'Cuestionario',
  components: {
    CuestionarioBarra,
    CuestionarioPreguntas
  },
  data: () => ({
    categorias: [
      { id: 1, categoria: 'Categoria uno'},
      { id: 2, categoria: 'Categoria dos'},
      { id: 3, categoria: 'Categoria tres'},
    ],
    categoria: 1,
    preguntas: [
      { id: 1, pregunta: 'Pregunta uno', id_categoria: 1 },
      { id: 2, pregunta: 'Pregunta dos', id_categoria: 1 },
      { id: 3, pregunta: 'Pregunta tres', id_categoria: 1 },
      { id: 4, pregunta: 'Pregunta cuatro', id_categoria: 2 },
      { id: 5, pregunta: 'Pregunta cinco', id_categoria: 2 },
      { id: 6, pregunta: 'Pregunta seis', id_categoria: 2 },
      { id: 7, pregunta: 'Pregunta siete', id_categoria: 3 },
      { id: 8, pregunta: 'Pregunta ocho', id_categoria: 3 },
      { id: 9, pregunta: 'Pregunta nueve', id_categoria: 3 }
    ],
    docentes: [
      { id: 1, nombres: 'Docente', apellido_p: 'Paterno', apellido_m: 'Materno'},
      { id: 2, nombres: 'Docente2', apellido_p: 'Paterno', apellido_m: 'Materno'}
    ]
  }),
  mounted: function() {
    const observer = new IntersectionObserver( 
      ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
      {threshold: [1]}
    );

    observer.observe(this.$refs.nav);
  },
  computed: {
    getCategoria: function() {
      return this.categorias.filter(i => i.id == this.categoria);
    },
    getPreguntas: function() {
      return this.preguntas
      .filter(i => i.id_categoria == this.categoria)
      .sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });
    }
  }
}

</script>

<style scoped>

.bg {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -10;
}

.bg .arriba {
  background: rgb(25, 155, 79);
  height: 50vh;
}

hr {
  border-width:0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}



.nav {
  position: sticky;
  top: -1px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  font-family: Rubik, sans-serif;
  color: #FFF;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);
  transition: 0.4s;
}

.nav.isSticky {
  background: rgb(30, 173, 90);
  box-shadow: 0 -2px 6px 4px rgba(0, 0, 0, 0.3);
  padding-top: 1px;
}

.nav > div {
  padding: 16px;
}

.nav .nombre {
  font-size: 1.1rem;
}

.nav .titulo {
  font-size: 1.4rem;
}



main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cuestionario {
  width: 80%;
  margin-top: 200px;
  margin-bottom: 200px;
  background: #FFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

</style>