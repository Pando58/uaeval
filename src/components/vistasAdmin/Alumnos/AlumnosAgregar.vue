<template>
  <div class="d-flex flex-col">
    <div class="cabeza">
      <i class="fas fa-arrow-left pointer" style="color: #AAA" @click="$emit('irTablaAlumnos')"></i>
    </div>
    <div class="contenido">
      <div class="text-center">
        <h4>Agregar alumno</h4>
      </div>
      <div class="d-flex">
        <input type="text" class="flex-grow-1" placeholder="Nombre(s)">
      </div>
      <div class="d-flex">
        <input type="text" class="flex-grow-1" placeholder="Apellido Paterno">
        <input type="text" class="flex-grow-1" placeholder="Apellido Materno">
      </div>
      <br>
      <div class="d-flex">
        <input type="text" class="flex-grow-1" placeholder="Usuario">
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

input {
  margin: 6px;
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
  margin-top: 6px;
  margin-right: 6px;
}

h4 {
  margin: 0 0 12px 0;
  color: #444;
}

</style>