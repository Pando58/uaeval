<template>
  <div id="crearPassword">
    <div class="tarjeta-form">
      <div class="d-flex">
        <input type="text" placeholder="Matrícula" class="flex-grow-1">
      </div>
      <div class="d-flex">
        <input type="text" placeholder="Contraseña" class="flex-grow-1">
        <input type="text" placeholder="Repetir contraseña" class="flex-grow-1">
      </div>
      <div class="text-center">
        <button class="material-btn verde">Agregar</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CrearPassword'
}

</script>

<style scoped>

#crearPassword {
  width: 100%;
  height: 100vh;
  background: linear-gradient(305deg, rgba(254, 254, 254,0.02) 0%, rgba(254, 254, 254,0.02) 1%,transparent 1%, transparent 50%,rgba(220,220,220, 0.18) 50%, rgba(220,220,220, 0.18) 64%,rgba(249,249,249, 0.11) 64%, rgba(249,249,249, 0.11) 100%),linear-gradient(38deg, rgba(70,70,70, 0.04) 0%, rgba(70,70,70, 0.04) 35%,transparent 35%, transparent 62%,rgba(152,152,152, 0.04) 62%, rgba(152,152,152, 0.04) 74%,rgba(99,99,99, 0.06) 74%, rgba(99,99,99, 0.06) 100%),linear-gradient(337deg, rgba(124, 124, 124,0.02) 0%, rgba(124, 124, 124,0.02) 45%,transparent 45%, transparent 55%,rgba(34, 34, 34,0.02) 55%, rgba(34, 34, 34,0.02) 72%,rgba(189, 189, 189,0.02) 72%, rgba(189, 189, 189,0.02) 100%),linear-gradient(92deg, rgba(239, 239, 239,0.02) 0%, rgba(239, 239, 239,0.02) 12%,transparent 12%, transparent 22%,rgba(204, 204, 204,0.02) 22%, rgba(204, 204, 204,0.02) 51%,rgba(70,70,70, 0.04) 51%, rgba(70,70,70, 0.04) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
  display: flex;
  justify-content: center;
  align-items: center;
}

.tarjeta-form {
  background: #FFF;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
}

</style>