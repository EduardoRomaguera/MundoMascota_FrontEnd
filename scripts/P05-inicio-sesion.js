'use strict';
//Codigo para ocultar y mostrar constraseña
function showPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

//Validación de espacios de inicio de sesión
  const inputCorreo = document.querySelector('#txt-correo');
  const inputContrasenna = document.querySelector('#txt-contrasenna');
  const btnSiguiente = document.querySelector('#btn-siguiente');
  
  const validarInicioSesion = () => {
      let error = false;
  
      let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;
  
      if (regexCorreo.test(inputCorreo.value) == false) {
          error = true;
          inputCorreo.classList.add('error');
      } else {
          inputCorreo.classList.remove('error');
      }
  
      if (inputContrasenna.value == '') {
          error = true;
          inputContrasenna.classList.add('error');
      } else {
          inputContrasenna.classList.remove('error');
      }
  
      if (error == false) {
          iniciarSesion(inputCorreo.value, inputContrasenna.value);

      } else {
      }
  };
  btnSiguiente.addEventListener('click', validarInicioSesion);


//if (sessionStorage.getItem('usuarioConectado')) {
//  usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
//  tipoUsuario();
//} else {
//  window.location.href = 'index.html';
//}