<template>
  <div class="d-flex flex-col">
    <div class="cabeza">
      <button class="material-btn verde icono f-right" @click="$emit('irAgregar')"><i class="fas fa-user-plus"></i></button>
    </div>
    <div class="contenido">
      <table class="tabla rayada verde">
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-center">Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(d, i) in docentes" :key="i">
            <td class="text-left rellenar">{{ `${d.nombres} ${d.apellido_p} ${d.apellido_m}` }}</td>
            <td class="text-center"><a><i class="fas fa-pen"></i></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DocentesTabla',
  data: () => ({
    docentes: [
      {
        nombres: 'Docente',
        apellido_p: 'Uno',
        apellido_m: '1'
      },
      {
        nombres: 'Docente',
        apellido_p: 'Dos',
        apellido_m: '2'
      }
    ]
  })
}

</script>
