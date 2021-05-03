import api from './api'

export function parseJWT(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

export function cerrarSesion(_this, replace) {
  _this.$store.state.token = '';
  localStorage.setItem('token', '');
  if (replace) {
    _this.$router.replace('/');
  } else {
    _this.$router.push('/');
  }
}

export function revisarSesion(_this, admin) {
  const res = {token: null, payload: {}};

  const token = _this.$store.state.token;

  // Si no existe el token
  if (!token) {
    cerrarSesion(_this, true);
    return res;
  }

  const payload = parseJWT(token);

  // Si el usuario en el token es o no es administrador
  if (payload.data.admin != admin) {
    cerrarSesion(_this, true);
    return res;
  }

  res.token = token;
  res.payload = payload;

  // Si hay un error de autorizacion con el servidor
  api.post('/auth/auth', {}, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .catch(err => {
    console.log(err.response);
    cerrarSesion(_this, true);
  });

  return res;
}