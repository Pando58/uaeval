<template>
  <div class="d-flex flex-col">
    <div class="cabeza">
      <button class="material-btn verde icono f-right" @click="$emit('irAgregarUsuario')"><i class="fas fa-user-plus"></i></button>
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
          <tr v-for="(user, i) in usuarios" :key="`admins-${i}`">
            <td class="text-left rellenar">{{ `${user.nombres} ${user.apellido_p} ${user.apellido_m}` }}</td>
            <td class="text-center"><a><i class="fas fa-pen"></i></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdminsTabla',
  data: () => ({
    usuarios: [
      {
        nombres: 'Administrador',
        apellido_p: 'Uno',
        apellido_m: '1',
        permisos_id: 0
      },
      {
        nombres: 'Administrador',
        apellido_p: 'Dos',
        apellido_m: '2',
        permisos_id: 0
      }
    ]
  })
}

</script>
