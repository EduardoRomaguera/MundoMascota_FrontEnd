'use strict';
//Codigo para ocultar y mostrar constraseña
function showPassword() {
    var x = document.getElementById("txt-contrasenna");
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
    let error2 = false;

    let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;

    if (regexCorreo.test(inputCorreo.value) == false) {
        error2 = true;
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
            text: "Se dejó un espacio vacio",
            confirmButtonText: "Intentar de nuevo"
        });
    } else {
        if (error2 == true) {
            inputCorreo.classList.add('error');
            Swal.fire({
                imageUrl: "images/error.png",
                title: "¡OOPS! Algo pasó aqui",
                text: "El correo es inválido",
                confirmButtonText: "Intentar de nuevo"
            });
        } else {
            iniciarSesion(inputCorreo.value, inputContrasenna.value);
        }
    }

};
btnSiguiente.addEventListener('click', validarInicioSesion);


//if (sessionStorage.getItem('usuarioConectado')) {
//  usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
//  tipoUsuario();
//} else {
//  window.location.href = 'index.html';
//}