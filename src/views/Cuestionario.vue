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
        {{ matricula }}
        <span style="margin: 0 0.5rem">·</span>
        {{ (grupo || {}).grupo }}
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
        <CuestionarioBarra ref="barra" :numReactivos="reactivos.length" :respuestas="respuestas"/>
        <!-- <hr> -->
        <CuestionarioReactivos
        v-for="(cat, i) in categorias"
        :key="i"
        :categoria="cat"
        :selCategoria="categoria"
        :reactivos="getReactivos(cat)"
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
import CuestionarioReactivos from '../components/cuestionario/CuestionarioReactivos'
import CuestionarioNav from '../components/cuestionario/CuestionarioNav'
import { cerrarSesion, revisarSesion } from '../extras/funciones'
import api from '../extras/api'

export default {
  name: 'Cuestionario',
  components: {
    CuestionarioBarra,
    CuestionarioReactivos,
    CuestionarioNav
  },
  data: () => ({
    nombre: '...',
    grupo: null,
    matricula: '',
    categoria: 1,
    categorias: [{ id: 1, categoria: '' }],
    reactivos: [{ id: 1, reactivo: '', id_categoria: 1 }],
    docentes: [{ id: 1, nombres: '', apellido_p: '', apellido_m: ''}],
    respuestas: { 1: { 1: null } },
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
      this.matricula = sesion.payload.data.usuario;
    };

    // Inicializar reactivos - Falta consulta a la API
    const authHeader = {headers: { 'Authorization': `Bearer ${sesion.token}` }};
    const onError = (err) => {
      console.error(err);
      console.error(err.response);
      this.cerrarSesion();
    };
    
    api.get('/api/grupos', authHeader)
    .then(res => {
      const res_grupo = res.data.find(x => x.id == sesion.payload.data.id_grupo);
      const grupo = {
        id: parseInt(res_grupo.id),
        grupo: res_grupo.grupo,
        id_docentes: JSON.parse(res_grupo.id_docentes)
      };

      api.get('/api/docentes', authHeader)
      .then(res => {
        const docentes = res.data.filter(x => grupo.id_docentes.includes(parseInt(x.id))).map(x => ({
          id: parseInt(x.id),
          nombres: x.nombres,
          apellido_p: x.apellido_p,
          apellido_m: x.apellido_m
        }));

        api.get('/api/categorias', authHeader)
        .then(res => {
          const categorias = res.data.map(x => ({
            id: parseInt(x.id),
            categoria: x.categoria
          }));

          api.get('/api/reactivos', authHeader)
          .then(res => {
            const reactivos = res.data.map(x => ({
              id: parseInt(x.id),
              reactivo: x.reactivo,
              id_categoria: parseInt(x.id_categoria)
            }));

            this.grupo = grupo;
            this.docentes = docentes;
            this.categorias = categorias;
            this.reactivos = reactivos;
            this.categoria = categorias[0].id;

            this.respuestas = {};

            this.reactivos.forEach(i => {
              this.respuestas[i.id] = {};
              this.docentes.forEach(j => {
                this.respuestas[i.id][j.id] = null;
              });
            });
          })
          .catch(err => onError(err));
        })
        .catch(err => onError(err));
      })
      .catch(err => onError(err));
    })
    .catch(err => onError(err));
  },
  methods: {
    getReactivos: function(cat) {      
      return this.reactivos.filter(i => i.id_categoria == cat.id).sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });
    },
    getCategoria: function() {
      return this.categorias.filter(i => i.id == this.categoria);
    },
    guardarRespuestas: function() {
      // Llamar a la API
      console.log(this.respuestas);
      
      this.$refs.barra.actualizar();
    },
    cambiarCategoria: function(siguiente) {
      const direccion = siguiente ? 1 : -1;
      const index = this.categorias.findIndex(x => x.id == this.categoria);
      if (this.categorias[index + direccion]) {
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
  transition: 0.2s;
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