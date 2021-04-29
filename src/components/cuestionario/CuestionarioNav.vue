<template>
  <div class="navegacion">
    <a @click="cambiarCategoria(false)" :class="claseHayCategoria(-1)"><i class="fas fa-arrow-left izq"></i>Anterior</a>
    <a @click="cambiarCategoria(true)" :class="claseHayCategoria(1)">Siguiente<i class="fas fa-arrow-right der"></i></a>
  </div>
</template>

<script>

export default {
  name: 'CuestionarioNav',
  props: [
    'categorias',
    'categoria'
  ],
  methods: {
    cambiarCategoria(siguiente) {
      this.$emit('cambiarCategoria', siguiente ? 1 : -1);
    },
    claseHayCategoria(direccion) {
      return this.categorias.find(i => i.id == this.categoria + direccion) ? '' : 'deshabilitado';
    }
  }
}

</script>


<style scoped>

.navegacion {
  display: flex;
  justify-content: space-between;
  padding: 8px 16px 16px 16px;
  font-family: Rubik, sans-serif;
}

a {
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  transition: 0.15s;
  padding: 6px;
  font-size: 1rem;
  /* text-decoration: none; */
}

a:hover:not(.deshabilitado) {
  color: rgb(44, 180, 90);
  border-color: rgb(44, 180, 90);
}

a.deshabilitado {
  opacity: 0.4;
  cursor: default;
  user-select: none;
}

a i {
  font-size: 0.8rem;
}

.izq {
  margin-right: 5px;
}

.der {
  margin-left: 5px;
}

</style>