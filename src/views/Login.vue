<template>
  <div id="login-main" class="bg1">
    <div class="login-container" :class="estiloLogin().marco">      
        <transition name="fadeResize">
          <div class='flecha-atras' v-if="loginAdmin" @click="switchLoginAdmin()">
            <i class="fas fa-arrow-left"></i>
          </div>
        </transition>
      
        <div>
          <img class="logo" src="../assets/images/aguila.png" alt="">
        </div>
        <h4 class="titulo">Evaluación Docente</h4>

        <transition name="fadeResize">
          <h6 class="subtitulo" v-if="loginAdmin">Ingreso de personal administrativo</h6>
        </transition>

        <transition name="fadeResize">
          <p class="login-error-msg" v-if="errorLogin">
            <i class="fas fa-exclamation-triangle"></i> {{ errorLogin }}
          </p>
        </transition>
        
        <div class="form-grupo">
          <input type="text" v-model="usuario" id="log-usuario" class="form-input" placeholder=" ">
          <label for="log-usuario" class="form-label">{{ matriculaOUsuario() }}</label>
        </div>
        <div class="form-grupo">
          <input type="password" v-model="password" id="log-password" class="form-input" placeholder=" ">
          <label for="log-password" class="form-label">Contraseña</label>
        </div>
        <input type="hidden" name="type" value="alumno">

        <br>

        <div>
          <button type="submit" class="form-button" @click="submit()">Ingresar</button>
        </div>

        <br>

        <transition name="fadeResize">
        <p class="mensaje-password" v-if="!loginAdmin">
          <a>
            ¿Aún no tienes contraseña?
          </a>
        </p>
        </transition>

        <br>

        <transition name="fadeResize">
        <p class="admin-login" v-if="!loginAdmin">
          <a @click="switchLoginAdmin()">
            Ingreso de personal administrativo<i class="far fa-id-card"></i>
          </a>
        </p>
        </transition>
    </div>
  </div>
</template>

<script>

import api from '../api'

export default {
  name: 'Login',
  data() {
    return {
      loginAdmin: false,
      errorLogin: null,
      usuario: '',
      password: ''
    };
  },
  methods: {
    switchLoginAdmin() {
      this.loginAdmin = !this.loginAdmin
    },
    estiloLogin() {
      return {
        bg: !this.loginAdmin ? 'bg1' : 'bg2',
        marco: !this.loginAdmin ? '' : 'admin'
      }
    },
    matriculaOUsuario() {
      return !this.loginAdmin ? 'Matrícula' : 'Usuario'
    },
    submit() {
      api.post('/login', {
        usuario: this.usuario,
        password: this.password,
        admin: this.loginAdmin
      }).then(res => {
        if (res.data.status == 'error') {
          if (res.data.err_id == 1) {
            this.errorLogin = 'Completa todos los campos';
          } else if (res.data.err_id == 2) {
            this.errorLogin = 'El usuario ingresado no existe';
          } else if (res.data.err_id == 3 || res.data.err_id == 4) {
            this.errorLogin = 'Los datos de ingreso son incorrectos';
          }
        } else {
          this.$store.dispatch('login', { usuario: this.usuario, password: this.password }).then(() => {
            this.$router.push('/panel_admin');
          });
        }
      });
      
      /* if (!this.usuario || !this.password) {
        this.errorLogin = 'Completa todos los campos';
      } else {
        this.errorLogin = null;
      } */
    }
  }
}

</script>

<style>

#login-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Rubik, sans-serif;
}

#login-main.bg1 {
  background-image: linear-gradient(337deg, rgba(202,202,202, 0.12) 0%, rgba(202,202,202, 0.12) 58%,transparent 58%, transparent 67%,rgba(220,220,220, 0.05) 67%, rgba(220,220,220, 0.05) 82%,rgba(8,8,8, 0.02) 82%, rgba(8,8,8, 0.02) 100%),linear-gradient(567deg, rgba(19,19,19, 0.04) 0%, rgba(19,19,19, 0.04) 5%,transparent 5%, transparent 50%,rgba(101,101,101, 0.01) 50%, rgba(101,101,101, 0.01) 65%,rgba(132,132,132, 0.1) 65%, rgba(132,132,132, 0.1) 100%),linear-gradient(399deg, rgba(166,166,166, 0.08) 0%, rgba(166,166,166, 0.08) 18%,transparent 18%, transparent 37%,rgba(105,105,105, 0.01) 37%, rgba(105,105,105, 0.01) 87%,rgba(244,244,244, 0.35) 87%, rgba(244,244,244, 0.35) 100%),linear-gradient(302deg, rgba(54,54,54, 0.06) 0%, rgba(54,54,54, 0.06) 26%,transparent 26%, transparent 81%,rgba(230,230,230, 0.14) 81%, rgba(230,230,230, 0.14) 85%,rgba(19,19,19, 0.04) 85%, rgba(19,19,19, 0.04) 100%),linear-gradient(339deg, rgb(255,255,255),rgb(255,255,255));
}

#login-main.bg2 {
  background-image: linear-gradient(305deg, rgba(254, 254, 254,0.02) 0%, rgba(254, 254, 254,0.02) 1%,transparent 1%, transparent 50%,rgba(220,220,220, 0.18) 50%, rgba(220,220,220, 0.18) 64%,rgba(249,249,249, 0.11) 64%, rgba(249,249,249, 0.11) 100%),linear-gradient(38deg, rgba(70,70,70, 0.04) 0%, rgba(70,70,70, 0.04) 35%,transparent 35%, transparent 62%,rgba(152,152,152, 0.04) 62%, rgba(152,152,152, 0.04) 74%,rgba(99,99,99, 0.06) 74%, rgba(99,99,99, 0.06) 100%),linear-gradient(337deg, rgba(124, 124, 124,0.02) 0%, rgba(124, 124, 124,0.02) 45%,transparent 45%, transparent 55%,rgba(34, 34, 34,0.02) 55%, rgba(34, 34, 34,0.02) 72%,rgba(189, 189, 189,0.02) 72%, rgba(189, 189, 189,0.02) 100%),linear-gradient(92deg, rgba(239, 239, 239,0.02) 0%, rgba(239, 239, 239,0.02) 12%,transparent 12%, transparent 22%,rgba(204, 204, 204,0.02) 22%, rgba(204, 204, 204,0.02) 51%,rgba(70,70,70, 0.04) 51%, rgba(70,70,70, 0.04) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
}

#login-main .login-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 500px;
  padding: 32px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
  transition: border-color 0.4s;
}

#login-main .login-container.admin {
  border: 2px solid rgb(43, 189, 74);
}

@media (max-width: 600px) {
  #login-main .login-container {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }
}

/* #login-main .form {
  padding: 24px;
} */

#login-main .titulo {
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 18px;
  margin-bottom: 24px;
}

#login-main .subtitulo {
  font-size: 1.2rem;
  font-weight: 400;
  color: rgb(22, 160, 68);
  margin-top: 0px;
  margin-bottom: 18px;
}

#login-main .form-grupo {
  position: relative;
  height: 38px;
  margin: 12px 0px;
}

#login-main .form-input {
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #BBB;
  transition: border-color 0.2s ease-in-out;
  border-radius: 4px;
  outline: none;
  padding-left: 8px;
  width: 100%;
  height: 100%;
  z-index: 1;
}

#login-main .form-input:focus {
  border-color: rgb(27, 184, 79);
  border-width: 2px;
  padding-left: 7px;
}

#login-main .form-label {
  position: absolute;
  left: 5px;
  top: 10px;
  padding: 0 4px;
  background-color: #FFF;
  color: #757575;
  font-size: 1rem;
  transition: 0.2s;
  z-index: 10;
  cursor: text;
}

#login-main .form-input:focus + .form-label {
  left: 6px;
  top: -10px;
  font-size: 12px;
  color: rgb(27, 184, 79);
}

#login-main .form-input:not(:placeholder-shown):not(:focus) + .form-label {
  left: 10px;
  top: -10px;
  font-size: 12px;
}

#login-main .form-button {
  font-family: Rubik, sans-serif;
  color: #FFF;
  font-size: 1rem;
  padding: 8px;
  background-color: rgb(31, 180, 106);
  border: 0;
  border-radius: 7px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

#login-main .form-button:hover {
  background-color: rgb(34, 194, 114);
}

#login-main .form-button:active {
  background-color: rgb(31, 180, 106);
}

#login-main .logo {
  height: 120px;
}

#login-main .mensaje-password a {
  color: rgb(31, 180, 106);
}

#login-main .admin-login i {
  font-size: 22px;
  margin-left: 8px;
  transform: translateY(15%);
}

#login-main .admin-login a {
  text-decoration: none;
  color: rgb(45, 151, 238);
}

#login-main .login-error-msg {
  color: #EC3E3E;
}

#login-main .flecha-atras {
  position: absolute;
  left: 18px;
  top: 20px;
}

#login-main .flecha-atras i {
  color: rgb(42, 187, 107);
  font-size: 1.3rem;
  cursor: pointer;
}

</style>