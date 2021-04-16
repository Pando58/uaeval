<template>
  <div class="d-flex flex-col">
    <div class="cabeza">
      <button class="material-btn verde icono f-right" @click="$emit('irAgregarAlumno')"><i class="fas fa-user-plus"></i></button>
    </div>
    <div class="contenido">
      <table class="tabla rayada">
        <tr>
          <td class="nombre rellenar">Usuario</td>
          <td><i class="fas fa-pen"></i></td>
        </tr>
        <tr>
          <td class="nombre rellenar">Usuario</td>
          <td><i class="fas fa-pen"></i></td>
        </tr>
        <tr>
          <td class="nombre rellenar">Usuario</td>
          <td><i class="fas fa-pen"></i></td>
        </tr>
        <tr>
          <td class="nombre rellenar">Usuario</td>
          <td><i class="fas fa-pen"></i></td>
        </tr>
      </table>
    </div>
  </div>
</template>