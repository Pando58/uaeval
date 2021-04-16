<template>
  <div class="d-flex flex-col">
    <div class="cabeza">
      <i class="fas fa-arrow-left pointer" style="color: #AAA" @click="$emit('irTablaAlumnos')"></i>
    </div>
    <div class="contenido">
      <div class="text-center">
        <h4>Agregar alumno</h4>
      </div>
      <div class="nombre">
        <input type="text" placeholder="Nombre(s)">
        <input type="text" placeholder="Apellido Paterno">
        <input type="text" placeholder="Apellido Materno">
      </div>
      <div class="d-flex">
        <input type="text" class="flex-grow-1" placeholder="Matrícula">
        <input type="text" class="flex-grow-1" placeholder="Contraseña">
      </div>
      <div class="f-right">
        <button class="material-btn verde">Agregar</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdminsAgregar'
}

</script>

<style scoped>

.contenido {
  font-family: Roboto, sans-serif;
}

.nombre {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}

input {
  margin: 6px;
  min-width: 0;
  padding: 6px;
  font-size: 0.9rem;
  border: 1px solid #CCC;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.1s;
  /* min-width: 1px; */
}

input:focus {
  border-color: rgb(43, 189, 74);
}

button {
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  margin: 10px 6px 4px 0;
}

h4 {
  margin: 0 0 12px 0;
  color: #444;
}

</style>