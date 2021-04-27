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
          <tr v-for="(grupo, i) in grupos" :key="`admins-${i}`">
            <td class="text-left rellenar">{{ grupo.grupo }}</td>
            <td class="text-center"><a><i class="fas fa-pen"></i></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GruposTabla',
  data: () => ({
    grupos: [
      {
        grupo: 'F6AD'
      },
      {
        grupo: 'Q3AM'
      }
    ]
  })
}

</script>
