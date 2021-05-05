<template>
  <div id="crearPassword">
    <div class="form-crear">
      <a class="flecha-atras" v-if="vista == 'cambio'" @click="vista = 'matricula'">
        <i class="fas fa-arrow-left"></i>
      </a>
      <div class="text-center">
        <h3>Establecer contraseña</h3>
        <br>
        <!-- <transition name="fadeResize" mode="in-out"> -->
          <p class="error-msg" v-if="error">
            <i class="fas fa-exclamation-triangle"></i> {{ error }}
          </p>
        <!-- </transition> -->
      </div>

      <!-- <transition name="fadeResize" mode="in-out"> -->
        <div class="vistaMatricula text-center" v-if="vista == 'matricula'">
          <h4>Introduce tu matrícula:</h4>
          <div class="material-input">
            <input type="text" id="preguntar-mat" placeholder=" " v-model="matricula">
            <label for="preguntar-mat">Matrícula</label>
          </div>
          <button class="material-btn verde f-right" @click="verificarMatricula">Siguiente</button>
        </div>
      <!-- </transition> -->
        
      <!-- <transition name="fadeResize" mode="in-out"> -->
        <div class="vistaCambio" v-if="vista == 'cambio'">
          <div class="material-input">
            <input type="password" id="inpCrearPass" placeholder=" " v-model="pass">
            <label for="inpCrearPass">
              <i class="fas fa-lock"></i>
              Contraseña
            </label>
          </div>
          <div class="material-input">
            <input type="password" id="inpCrearPassVerificar" placeholder=" " v-model="repetirPass">
            <label for="inpCrearPassVerificar">
              <i class="fas fa-lock"></i>
              Repetir contraseña
            </label>
          </div>
          <div class="text-center">
            <button class="material-btn verde" @click="enviar">Aceptar</button>
          </div>
        </div>
      <!-- </transition> -->

    </div>
  </div>
</template>

<script>

import api from '../extras/api';

export default {
  name: 'CrearPassword',
  data: () => ({
    vista: 'matricula',
    matricula: '',
    pass: '',
    repetirPass: '',
    error: ''
  }),
  methods: {
    verificarMatricula() {
      api.post('/auth/set_password', {matricula: this.matricula})
      .then(res => {
        this.error = '';
        this.vista = 'cambio';
      })
      .catch(err => {
        const code = err.response.data.code;

        if (code == 1) this.error = 'Ocurrió un error interno';
        if (code == 2) this.error = 'No existe la matrícula ingresada';
        if (code == 3) this.error = 'Este alumno ya tiene contraseña';
      });
    },
    enviar() {
      if (this.pass != this.repetirPass) {
        this.error = "Los campos no coinciden";
        return;
      }

      api.post('/auth/set_password', {
        matricula: this.matricula,
        password: this.pass
      })
      .then(res => {
        this.error = '';
        this.$router.push('/');
      })
      .catch(err => {
        const code = err.response.data.code;
        if (code == 4) this.error = 'Completa todos los campos';
        if (code == 5) this.error = 'Utiliza por lo menos 10 caracteres';
      });
    }
  }
}

</script>

<style>

#crearPassword {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(305deg, rgba(254, 254, 254,0.02) 0%, rgba(254, 254, 254,0.02) 1%,transparent 1%, transparent 50%,rgba(220,220,220, 0.18) 50%, rgba(220,220,220, 0.18) 64%,rgba(249,249,249, 0.11) 64%, rgba(249,249,249, 0.11) 100%),linear-gradient(38deg, rgba(70,70,70, 0.04) 0%, rgba(70,70,70, 0.04) 35%,transparent 35%, transparent 62%,rgba(152,152,152, 0.04) 62%, rgba(152,152,152, 0.04) 74%,rgba(99,99,99, 0.06) 74%, rgba(99,99,99, 0.06) 100%),linear-gradient(337deg, rgba(124, 124, 124,0.02) 0%, rgba(124, 124, 124,0.02) 45%,transparent 45%, transparent 55%,rgba(34, 34, 34,0.02) 55%, rgba(34, 34, 34,0.02) 72%,rgba(189, 189, 189,0.02) 72%, rgba(189, 189, 189,0.02) 100%),linear-gradient(92deg, rgba(239, 239, 239,0.02) 0%, rgba(239, 239, 239,0.02) 12%,transparent 12%, transparent 22%,rgba(204, 204, 204,0.02) 22%, rgba(204, 204, 204,0.02) 51%,rgba(70,70,70, 0.04) 51%, rgba(70,70,70, 0.04) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
  font-family: Rubik, sans-serif;
}

#crearPassword .form-crear {
  position: relative;
  width: 500px;
  padding: 18px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #FFF;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
}

#crearPassword h3 {
  font-weight: 500;
  font-size: 1.4rem;
  margin: 0;
}

#crearPassword h4 {
  margin: 0;
  font-weight: 400;
  font-size: 1.2rem;
}

#crearPassword .vistaMatricula button,
#crearPassword .vistaCambio button {
  margin-top: 8px;
  font-family: Rubik, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

#crearPassword .error-msg {
  color: #EC3E3E;
}

#crearPassword .vistaCambio i {
  font-size: 0.8rem;
  transform: translateY(-10%);
  margin-right: 4px;
}

#crearPassword .flecha-atras {
  position: absolute;
  left: 20px;
  color: #777;
}

</style>