<template>
  <div id="cuestionario">
    <div class="bg">
      <div class="arriba"></div>
      <div class="abajo"></div>
    </div>

    <div class="nav d-flex" ref="nav">
      <div class="nombre">{{ nombre }}</div>
      <div class="titulo">Evaluación Docente</div>
      <div class="menu">
        <div class="dropdown">
          <i class="fas fa-chevron-down"></i>
          <div class="dropdown-content">
            <a @click="cerrarSesion">Cerrar sesión</a>
          </div>
        </div>
      </div>
    </div>
    
    <main>
      <div class="cuestionario">
        <CuestionarioBarra :respuestas="respuestas" :numPreguntas="preguntas.length" :nombre="nombre"/>
        <hr>
        <CuestionarioPreguntas
        v-for="(cat, i) in categorias"
        :key="i"
        :categoria="cat"
        :selCategoria="categoria"
        :preguntas="getPreguntas(cat)"
        :respuestas="respuestas"
        :docentes="docentes"
        @guardarRespuestas="guardarRespuestas"
        />
        <hr>
        <CuestionarioNav @cambiarCategoria="cambiarCategoria" :categorias="categorias" :categoria="categoria"/>
      </div>
    </main>
  </div>
</template>

<script>

import CuestionarioBarra from '../components/cuestionario/CuestionarioBarra'
import CuestionarioPreguntas from '../components/cuestionario/CuestionarioPreguntas'
import CuestionarioNav from '../components/cuestionario/CuestionarioNav'
import { cerrarSesion, revisarSesion } from '../plugins/funciones'

export default {
  name: 'Cuestionario',
  components: {
    CuestionarioBarra,
    CuestionarioPreguntas,
    CuestionarioNav
  },
  data: () => ({
    nombre: '',
    categoria: 1,
    respuestas: {},
    categorias: [
      { id: 1, categoria: 'Categoria uno'},
      { id: 2, categoria: 'Categoria dos'},
      { id: 3, categoria: 'Categoria tres'},
    ],
    preguntas: [
      { id: 1, pregunta: 'Pregunta uno', id_categoria: 1 },
      { id: 2, pregunta: 'Pregunta dos', id_categoria: 1 },
      { id: 3, pregunta: 'Pregunta tres', id_categoria: 1 },
      { id: 4, pregunta: 'Pregunta cuatro', id_categoria: 2 },
      { id: 5, pregunta: 'Pregunta cinco', id_categoria: 2 },
      { id: 6, pregunta: 'Pregunta seis', id_categoria: 3 },
      { id: 7, pregunta: 'Pregunta siete', id_categoria: 3 },
      { id: 8, pregunta: 'Pregunta ocho', id_categoria: 3 },
      { id: 9, pregunta: 'Pregunta nueve', id_categoria: 3 }
    ],
    docentes: [
      { id: 1, nombres: 'Docente', apellido_p: 'Uno', apellido_m: '1'},
      { id: 2, nombres: 'Docente', apellido_p: 'Dos', apellido_m: '2'},
      { id: 3, nombres: 'Docente', apellido_p: 'Tres', apellido_m: '3'},
      { id: 4, nombres: 'Docente', apellido_p: 'Cuatro', apellido_m: '4'}
    ],
  }),
  mounted: function() {
    const observer = new IntersectionObserver( 
      ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
      {threshold: [1]}
    );

    observer.observe(this.$refs.nav);
  },
  created: function() {
    const sesion = revisarSesion(this, false);

    if (sesion.token) {
      this.nombre = `${sesion.payload.data.nombres} ${sesion.payload.data.apellido_p} ${sesion.payload.data.apellido_m}`;
    } else {
      this.nombre = '...';
    }

    // Inicializar preguntas - Falta consulta a la API
    this.preguntas.forEach(i => {
      this.respuestas[i.id] = {};
      this.docentes.forEach(j => {
        this.respuestas[i.id][j.id] = null; // Math.floor((Math.random() * 5) + 1)
      });
    });
  },
  methods: {
    getPreguntas: function(cat) {      
      return this.preguntas.filter(i => i.id_categoria == cat.id).sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });
    },
    getCategoria: function() {
      return this.categorias.filter(i => i.id == this.categoria);
    },
    guardarRespuestas: function(res) {
      // Llamar a la API
      console.log(this.respuestas);
    },
    cambiarCategoria: function(direccion) {
      if (this.categorias.find(i => i.id == this.categoria + direccion)) {
        this.categoria += direccion;
        setTimeout(() => window.scrollTo(0,0), 100);
      }
    },
    cerrarSesion() { cerrarSesion(this) }
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
  box-shadow: 0px -10px 12px 8px rgba(0, 0, 0, 0.9);
  height: 50vh;
}

hr {
  border-width:0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}



.nav {
  position: sticky;
  top: -1px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
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
  margin-top: 120px;
  margin-bottom: 200px;
  background: #FFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}





.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  padding: 12px;
  background: #F1F1F1;
  min-width: 140px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}

.dropdown-content a {
  transition: 0.15s;
  color: #222;
  text-shadow: none;
}

.dropdown-content a:hover {
  color: rgb(25, 155, 79);
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown i {
  transition: 0.25s;
  cursor: pointer;
  margin-left: 12px;
  font-size: 1rem;
}

.dropdown:hover i {
  transform: rotate(180deg);
  text-shadow: 0px -2px 3px rgba(0, 0, 0, 0.2);
}

</style>