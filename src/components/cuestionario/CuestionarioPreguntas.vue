<template>
  <div class="preguntas">
    <h4 class="categoria">{{ categoria.categoria }}</h4>
    <div class="pregunta" v-for="(pregunta, i) in preguntas" :key="i">
      <h3>{{ `${pregunta.id}. ${pregunta.pregunta}` }}</h3>

      <table id="tabla-respuestas">
        <thead>
          <tr>
            <th></th>
            <th>Totalmente de acuerdo</th>
            <th>De acuerdo</th>
            <th>Indiferente</th>
            <th>En desacuerdo</th>
            <th>Altamente en desacuerdo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(docente, i) in docentes" :key="i">
            <td class="nombre-profesor">Nombre del profesor</td>
            <!-- <?php for($k = 1; $k <= 5; $k++): ?>
              <td>
                <input type="radio" name="p<?=$i?>d<?=$j?>" id="p<?=$i?>d<?=$j?>v<?=$k?>">
                <label for="p<?=$i?>d<?=$j?>v<?=$k?>"></label>
              </td>
            <?php endfor; ?> -->
          </tr>
        </tbody>
      </table>
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'CuestionarioPreguntas',
  props: [
    'categoria',
    'preguntas',
    'docentes'
  ]
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

</style>