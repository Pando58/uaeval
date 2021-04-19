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
        <input type="text" placeholder="*Apellido Paterno">
        <input type="text" placeholder="*Apellido Materno">
      </div>
      <div class="d-flex align-center">
        <input type="text" class="flex-grow-2" placeholder="Matrícula">
        <span class="etiqueta">Grupo:</span>
        <select class="flex-grow-1">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <!-- <input type="text" class="flex-grow-1" placeholder="Grupo"> -->
      </div>
      <div class="f-right">
        <button class="material-btn verde">Agregar</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AlumnosAgregar'
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

input,
select {
  margin: 6px;
  min-width: 0;
  padding: 6px;
  font-size: 0.9rem;
  border: 1px solid #CCC;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.1s;
}

input:focus,
select:focus {
  border-color: rgb(43, 189, 74);
}

.etiqueta {
  margin-left: 8px;
  font-size: 0.9rem;
  color: #777;
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