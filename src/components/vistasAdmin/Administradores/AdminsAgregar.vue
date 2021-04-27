<template>
  <div class="d-flex flex-col tarjeta-form">
    <div class="cabeza">
      <i class="fas fa-arrow-left pointer" style="color: #AAA" @click="$emit('irTabla')"></i>
    </div>
    <div class="contenido">
      <div class="text-center">
        <h4>Agregar usuario administrador</h4>
        <span class="msg-error" v-if="error">{{ error }}</span>
      </div>
      <div class="nombre">
        <input type="text" placeholder="Nombre(s)" v-model="nombre">
        <input type="text" placeholder="*Apellido Paterno" v-model="apellido_p">
        <input type="text" placeholder="*Apellido Materno" v-model="apellido_m">
      </div>
      <div class="d-flex">
        <input type="text" class="flex-grow-1" placeholder="Usuario" v-model="usuario">
        <input type="text" class="flex-grow-1" placeholder="Contraseña" v-model="password">
      </div>
      <br>
      <span class="etiqueta" style="margin: 6px">Permisos:</span>
      <div class="permisos d-flex flex-col">
        <label v-for="(perm, i) in lista_permisos" :key="i">
          <input type="checkbox" v-model="permisos[perm.campo]">
          {{ perm.titulo }}
        </label>
      </div>
      <div class="f-right">
        <button class="material-btn verde" @click="enviar">Agregar</button>
      </div>
    </div>
  </div>
</template>

<script>

import api from '../../../plugins/api';

export default {
  name: 'AdminsAgregar',
  data: () => ({
    nombre: '',
    apellido_p: '',
    apellido_m: '',
    usuario: '',
    password: '',
    permisos: {
      alumnos_editar: false,
      administradores_editar: false,
      grupos_editar: false,
      docentes_editar: false,
      categorias_editar: false,
      reactivos_editar: false
    },
    lista_permisos: [
      {
        titulo: 'Editar alumnos',
        campo: 'alumnos_editar'
      },
      {
        titulo: 'Editar administradores',
        campo: 'administradores_editar'
      },
      {
        titulo: 'Editar grupos',
        campo: 'grupos_editar'
      },
      {
        titulo: 'Editar docentes',
        campo: 'docentes_editar'
      },
      {
        titulo: 'Editar categorías',
        campo: 'categorias_editar'
      },
      {
        titulo: 'Editar reactivos',
        campo: 'reactivos_editar'
      }
    ],
    error: null,
  }),
  methods: {
    enviar: function() {
      /* api.post('/administradores.php', {
        accion: 'agregar',
        datos: {
          nombre: this.nombre,
          apellido_p: this.apellido_p,
          apellido_m: this.apellido_m,
          usuario: this.usuario,
          password: this.password,
          permisos: this.permisos
        }
      }).then(res => {
        const data = res.data;
        console.log(res);

        if (data.estado != 'ok') {
          if (data.err_id == 1) {
            this.error = 'Completa los campos requeridos';
          }
        } else {
          this.error = null;
        }
      }).catch(err => console.log(err)); */
    }
  }
}

</script>

<style scoped>

.nombre {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  margin-top: 8px;
}

.permisos {
  padding: 6px;
}

.permisos label {
  /* border: 1px solid #CCC; */
  margin: 6px;
  padding: 4px;
}

</style>