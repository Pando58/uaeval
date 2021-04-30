<template>
  <div class="barra-progreso">
    <div class="progreso">({{ numRespuestas }}/{{ numPreguntas }})</div>
    <div class="barra">
      <div class="completado"></div>
      <div class="faltante"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CuestionarioBarra',
  props: [
    'respuestas',
    'numPreguntas'
  ],
  data: () => ({
    numRespuestas: 0
  }),
  watch: {
    respuestas: {
      deep: true,
      handler() {
        let num = 0;

        for (let i in this.respuestas) {
          for (let j in this.respuestas[i]) {
            if (this.respuestas[i][j] != null) {
              num++;
              break;
            }
          }
        }

        this.numRespuestas = num;
      }
    }
  }
}

</script>

<style scoped>

.barra-progreso {
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6px;
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