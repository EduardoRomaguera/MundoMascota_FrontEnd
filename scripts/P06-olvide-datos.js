'use strict';

//Validación de espacios de inicio de sesión
  const inputCorreo = document.querySelector('#txt-correo');
  const btnContrasenna = document.querySelector('#btn-contrasenna');
  
  const validarVacios = () => {
      let error = false;
      let error2 = false;
      let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;

      
    if (regexCorreo.test(inputCorreo.value) == false) {
      error2 = true;
      inputCorreo.classList.add('error');
  } else {
      inputCorreo.classList.remove('error');
  }

    if (inputCorreo.value == '') {
      error = true;
      inputCorreo.classList.add('error');
  } else {
    inputCorreo.classList.remove('error');
  }


  if (error == true) {
    Swal.fire({
      imageUrl: "images/error.png",
      title: "¡OOPS! Algo pasó aqui",
      text: "Dejaste un espacio vacio",
      confirmButtonText: "Intentar de nuevo"
    });
  } else {
    if (error2 == true) {
      inputCorreo.classList.add('error');
      Swal.fire({
        imageUrl: "images/error.png",
        title: "¡OOPS! Algo pasó aqui",
        text: "El correo que introduciste no es válido",
        confirmButtonText: "Intentar de nuevo"
      });
    } else {
        Swal.fire({
          imageUrl: "images/gato-computadora.jpg",
          title: "¡Gracias!",
          text: "Nuestros agentes enviarán un correo electrónico con instrucciones para restaurar la contraseña en caso de existir una cuenta asociada.",
          confirmButtonText: "OK"
        }).then(function()  {
          window.location.href = 'P05-inicio-sesion.html';
        });
    }
    }

  };
  btnContrasenna.addEventListener('click', validarVacios);


//if (sessionStorage.getItem('usuarioConectado')) {
//  usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
//  tipoUsuario();
//} else {
//  window.location.href = 'index.html';
//}