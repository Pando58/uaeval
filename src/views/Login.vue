<template>
  <div id="login-main" class="bg1">
    <div class="login-container">      
      <form class="form text-center" action="includes/login.inc.php" method="POST">

        <img class="form_logo" src="images/aguila.png" alt="">
        <h4 class="form_titulo">Evaluación Docente</h4>
        <br>
        
        <p class="login-error-msg text-danger" v-if="true">
          <i class="bi-exclamation-octagon-fill"></i>Aquí va el mensaje de error.
        </p>
        
        <div class="form-group">
          <input type="text" class="form_input" name="mat" id="log-mat" placeholder=" " required>
          <label for="log-mat" class="form_label">Matrícula</label>
        </div>
        <div class="form-group">
          <input type="password" class="form_input" name="password" id="log-pass" placeholder=" " required>
          <label for="log-pass" class="form_label">Contraseña</label>
        </div>
        <input type="hidden" name="type" value="alumno">
        <button type="submit" name="submit" class="form_button btn btn-primary">Ingresar</button>
        <br><br><br>
        <p class="admin-login"><a href="login?admin=1">Ingreso de personal administrativo<i class="bi-person-square"></i></a></p>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login'
}

</script>

<style>

#login-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#login-main.bg1 {
  background-image: linear-gradient(337deg, rgba(202,202,202, 0.12) 0%, rgba(202,202,202, 0.12) 58%,transparent 58%, transparent 67%,rgba(220,220,220, 0.05) 67%, rgba(220,220,220, 0.05) 82%,rgba(8,8,8, 0.02) 82%, rgba(8,8,8, 0.02) 100%),linear-gradient(567deg, rgba(19,19,19, 0.04) 0%, rgba(19,19,19, 0.04) 5%,transparent 5%, transparent 50%,rgba(101,101,101, 0.01) 50%, rgba(101,101,101, 0.01) 65%,rgba(132,132,132, 0.1) 65%, rgba(132,132,132, 0.1) 100%),linear-gradient(399deg, rgba(166,166,166, 0.08) 0%, rgba(166,166,166, 0.08) 18%,transparent 18%, transparent 37%,rgba(105,105,105, 0.01) 37%, rgba(105,105,105, 0.01) 87%,rgba(244,244,244, 0.35) 87%, rgba(244,244,244, 0.35) 100%),linear-gradient(302deg, rgba(54,54,54, 0.06) 0%, rgba(54,54,54, 0.06) 26%,transparent 26%, transparent 81%,rgba(230,230,230, 0.14) 81%, rgba(230,230,230, 0.14) 85%,rgba(19,19,19, 0.04) 85%, rgba(19,19,19, 0.04) 100%),linear-gradient(339deg, rgb(255,255,255),rgb(255,255,255));
}

#login-main.bg2 {
  background-image: linear-gradient(305deg, rgba(254, 254, 254,0.02) 0%, rgba(254, 254, 254,0.02) 1%,transparent 1%, transparent 50%,rgba(220,220,220, 0.18) 50%, rgba(220,220,220, 0.18) 64%,rgba(249,249,249, 0.11) 64%, rgba(249,249,249, 0.11) 100%),linear-gradient(38deg, rgba(70,70,70, 0.04) 0%, rgba(70,70,70, 0.04) 35%,transparent 35%, transparent 62%,rgba(152,152,152, 0.04) 62%, rgba(152,152,152, 0.04) 74%,rgba(99,99,99, 0.06) 74%, rgba(99,99,99, 0.06) 100%),linear-gradient(337deg, rgba(124, 124, 124,0.02) 0%, rgba(124, 124, 124,0.02) 45%,transparent 45%, transparent 55%,rgba(34, 34, 34,0.02) 55%, rgba(34, 34, 34,0.02) 72%,rgba(189, 189, 189,0.02) 72%, rgba(189, 189, 189,0.02) 100%),linear-gradient(92deg, rgba(239, 239, 239,0.02) 0%, rgba(239, 239, 239,0.02) 12%,transparent 12%, transparent 22%,rgba(204, 204, 204,0.02) 22%, rgba(204, 204, 204,0.02) 51%,rgba(70,70,70, 0.04) 51%, rgba(70,70,70, 0.04) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
}

#login-main .login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  padding: 14px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
}

#login-main .login-container.admin {
  border: 2px solid rgb(43, 189, 74);
}

@media (max-width: 600px) {
  #login-main .login-container {
    width: 100%;
    height: 100%;
  }
}

#login-main .form {
  padding: 24px;
}

#login-main .form-group {
  position: relative;
  height: 42px;
  margin: 24px 0px;
}

#login-main .form_input {
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

#login-main .form_input:focus {
  border-color: rgb(27, 184, 79);
  border-width: 2px;
  padding-left: 7px;
}

#login-main .form_input:focus + .form_label {
  left: 6px;
  top: -10px;
  font-size: 12px;
  color: rgb(27, 184, 79);
}

#login-main .form_input:not(:placeholder-shown):not(:focus) + .form_label {
  left: 10px;
  top: -10px;
  font-size: 12px;
}

#login-main .form_label {
  position: absolute;
  left: 5px;
  top: 10px;
  padding: 0 4px;
  background-color: #FFF;
  color: #757575;
  font-size: 16px;
  transition: 0.2s;
  z-index: 10;
  cursor: text;
}

#login-main .form_button {
  background-color: rgb(36, 163, 78);
  border: 0;
}

#login-main .form_button:hover {
  background-color: rgb(33, 180, 82)
}

#login-main .form_logo {
  height: 96px;
  margin-bottom: 20px;
}

#login-main .admin-login {
  text-align: right;
}

#login-main .admin-login i {
  display: inline-block;
  transform: translateY(-1px);
  font-size: 22px;
  margin-left: 8px;
}

#login-main .admin-login a {
  text-decoration: none;
}

#login-main .login-error-msg i {
  display: inline-block;
  transform: translateY(-2px);
}

</style>