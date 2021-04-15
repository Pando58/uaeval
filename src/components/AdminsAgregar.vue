<template>
  <div class="d-flex flex-col">
    <div class="cabeza">
      <i class="fas fa-arrow-left pointer" style="color: #AAA" @click="$emit('irTablaUsuarios')"></i>
    </div>
    <div class="contenido">
      <div class="d-flex">
        <input type="text" class="flex-grow-1" placeholder="Nombre">
      </div>
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

input {
  margin: 6px;
  padding: 6px;
  font-family: Roboto, sans-serif;
  font-size: 0.9rem;
  border: 1px solid #CCC;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.1s;
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

</style>