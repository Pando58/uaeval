<template>
  <div class="barra-progreso">
    <div class="progreso">(37/55)</div>
    <div class="barra">
      <div class="completado"></div>
      <div class="faltante"></div>
    </div>
  </div>
</template>

<style scoped>

.barra-progreso {
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 6px;
  font-family: Rubik, sans-serif;
}

.progreso {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 4px;
}

.barra {
  width: 80%;
  height: 20px;
  display: flex;
  background: #E8E8E8;
  border-radius: 7px;
}

.completado {
  flex-grow: 37;
  background: rgb(50, 199, 100);
  border-radius: 7px;
}

.faltante {
  flex-grow: 18;
}

</style>