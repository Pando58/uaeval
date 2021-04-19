<template>
  <div class="d-flex flex-col">
    <div class="cabeza">
      <button class="material-btn verde icono f-right" @click="$emit('irAgregarAlumno')"><i class="fas fa-user-plus"></i></button>
    </div>
    <div class="contenido">
      <table class="tabla rayada verde">
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-center">Grupo</th>
            <th class="text-center">Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(al, i) in alumnos" :key="`alumnos-${i}`">
            <td class="text-left rellenar">{{ `${al.nombres} ${al.apellido_p} ${al.apellido_m}` }}</td>
            <td class="text-center">{{ grupos.find(n => n.id == al.id_grupo).grupo }}</td>
            <td class="text-center"><a><i class="fas fa-pen"></i></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AlumnosTabla',
  data: () => ({
    alumnos: [
      {
        nombres: 'Alumno',
        apellido_p: 'Uno',
        apellido_m: '1',
        id_grupo: 1
      },
      {
        nombres: 'Alumno',
        apellido_p: 'Dos',
        apellido_m: '2',
        id_grupo: 2
      }
    ],
    grupos: [
      {
        id: 1,
        grupo: 'F4AD'
      },
      {
        id: 2,
        grupo: 'R2AM'
      }
    ]
  })
}

</script>
