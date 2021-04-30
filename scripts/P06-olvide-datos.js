'use strict';
// INICIO CONEXION AL BACK END ///////////////

const cambiarContrasenna = async(pcorreo) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/reset',
        responseType: 'json',
        data: {
            correo: pcorreo,
        }
    }).then((response) => {

    }).catch((error) => {
        Swal.fire({
            'title': 'Error',
            'icon': 'error',
            'text': "Hubo un error en el servidor"
        })
    });
};

// FIN CONEXION AL BACK END ///////////////

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
            text: "Se dejó un espacio vacio",
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
            console.log(inputCorreo.value);
            cambiarContrasenna(inputCorreo.value);
            Swal.fire({
                imageUrl: "images/gato-computadora.jpg",
                title: "¡Gracias!",
                text: "Nuestros agentes enviarán un correo electrónico con instrucciones para restaurar la contraseña en caso de existir una cuenta asociada.",
                confirmButtonText: "OK"
            }).then(function() {
                window.location.href = 'P01-homepage.html';
            });
        }
    }

};
btnContrasenna.addEventListener('click', validarVacios);