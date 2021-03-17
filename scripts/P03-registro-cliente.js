'use strict';
//Validación de espacios de registro de cliente
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
        Swal.fire({
          imageUrl: "images/error.png",
          title: "¡OOPS! Algo pasó aqui",
          text: "Dejaste un espacio vacio",
          confirmButtonText: "Intentar de nuevo"
        });

    }
};
btnSiguiente.addEventListener('click', validarInicioSesion);