<template>
  <div class="barra-progreso">
    <div class="progreso">({{ numRespuestas }}/{{ numPreguntas }})</div>
    <div class="barra">
      <div class="completado" :style="estiloCompletado()"></div>
      <div class="faltante" :style="estiloFaltante()"></div>
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
  methods: {
    actualizar() {
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
    },
    estiloCompletado() {
      return `flex-grow: ${this.numRespuestas}`;
    },
    estiloFaltante() {
      return `flex-grow: ${this.numPreguntas - this.numRespuestas}`;
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

.completado, .faltante {
  transition: 0.7s;
}

.completado {
  flex-grow: 37;
  border-radius: 7px;
  background-image: repeating-linear-gradient(135deg, #2dbd5d, #2dbd5d 10px, #28a853 10px, #28a853 20px);
  background-size: 100vw 20px;
  animation: animBarra 1s linear infinite;
}

@keyframes animBarra {
  from {
    background-position: -40px 0;
  }
  to {
    background-position: -12px 0;
  }
}

</style>