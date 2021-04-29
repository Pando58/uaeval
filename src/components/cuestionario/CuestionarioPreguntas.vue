<template>
  <div class="preguntas" v-if="categoria.id == selCategoria">
    <h4 class="categoria">{{ categoria.categoria }}</h4>
    <div class="pregunta" v-for="(pregunta, i) in preguntas" :key="i">
      <h3>{{ `${pregunta.id}. ${pregunta.pregunta}` }}</h3>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Altamente en desacuerdo</th>
            <th>En desacuerdo</th>
            <th>Indiferente</th>
            <th>De acuerdo</th>
            <th>Totalmente de acuerdo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(docente, j) in docentes" :key="j">
            <td class="nombre-profesor">{{ `${docente.nombres} ${docente.apellido_p} ${docente.apellido_m}` }}</td>
            <td v-for="k in 5" :key="k">
              <!-- ARREGLAR V-MODEL -->
              <input type="radio" :name="`p${i}d${j}`" :id="`p${i}d${j}v${k}`" :value="k" v-model="respuestas[pregunta.id][docente.id]">
              <label :for="`p${i}d${j}v${k}`"></label>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="test">asd</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CuestionarioPreguntas',
  props: [
    'categoria',
    'selCategoria',
    'preguntas',
    'docentes'
  ],
  data: () => ({
    respuestas: {}
  }),
  created() {
    this.preguntas.forEach(i => {
      this.respuestas[i.id] = {};
    });
  },
  methods: {
    test() {
      console.log(this.preguntas);
      return
      this.$emit('enviarRespuestas', this.respuestas);
    }
  }
}

</script>


<style scoped>

.preguntas {
  padding: 0 12%;
  font-family: Roboto, sans-serif;
}

.categoria {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.pregunta {
  margin: 48px 0;
}

.pregunta h3 {
  font-weight: 400;
  font-size: 1.6rem;
}



table {
  width: 100%;
  border-spacing: 0;
}

table tr th,
table tr td:not(.nombre-profesor) {
  text-align: center;
}

table tr th {
  font-weight: 400;
  padding: 8px 0;
}

table tr td {
  padding: 8px 0;
}

table tr td.nombre-profesor {
  padding-left: 8px;
}

table tr td:not(.nombre-profesor) {
  width: 120px;
}

table tbody tr:nth-child(odd) {
  background: #F8F8F8;
}

table tbody tr:nth-child(even) {
  background: #EBEBEB;
}



table input[type="radio"] {
  display: none;
}

table label {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

table label::before {
  content: '';
  display: inline-block;
  margin-bottom: -3px;
  border: 2px solid #888;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  transition: 0.1s;
}

table label:hover::before {
  border: 2px solid #555;
}

table label::after {
  content: '';
  display: inline-block;
  position: absolute;
  left: 5px;
  top: 5px;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  transition: 0.1s;
}

table input[type="radio"]:checked + label::after {
  background: #555;
}

table input[type="radio"]:checked + label::before {
  border: 2px solid #555;
}

</style>