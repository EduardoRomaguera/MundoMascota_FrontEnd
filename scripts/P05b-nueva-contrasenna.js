'use strict';
//Codigo para ocultar y mostrar constraseña
function showPassword() {
    var x = document.getElementById("txt-contrasenna1");
    var y = document.getElementById("txt-contrasenna2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
}

function espacio2() {
    let input1 = document.querySelector('#txt-contrasenna1');
    let input2 = document.querySelector('#txt-contrasenna2');
    if (input1.value == "") {
        input2.classList.add('inhabilitar')
        input2.classList.remove('habilitar')
        } else {
            input2.classList.remove('inhabilitar')
            input2.classList.add('habilitar')
        }
    }

const input1 = document.querySelector('#txt-contrasenna1');
input1.addEventListener('blur', espacio2);
input1.addEventListener('load', espacio2);

//Validación de espacios de inicio de sesión
const inputContrasenna1 = document.querySelector('#txt-contrasenna1');
const inputContrasenna2 = document.querySelector('#txt-contrasenna2');
const btnSiguiente = document.querySelector('#btn-siguiente');



const validarInicioSesion = () => {
    let error1 = false;
    let error2 = false;
    let error3 = false;

    let regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+])(?=.{6,12}$)/;

    if (regexPassword.test(inputContrasenna1.value) == false) {
        error1 = true;
        inputContrasenna1.classList.add('error');
    } else {
        inputContrasenna1.classList.remove('error');
    }

    if (inputContrasenna2.value != inputContrasenna1.value) {
        error2 = true;
        inputContrasenna2.classList.add('error');
    } else {
        inputContrasenna2.classList.remove('error');
    }

    if (inputContrasenna2.value == '') {
        error3 = true;
        inputContrasenna2.classList.add('error');
    } else {
        inputContrasenna2.classList.remove('error');
    }

    if (inputContrasenna1.value == '') {
        error3 = true;
        inputContrasenna1.classList.add('error');
    } else {
        inputContrasenna1.classList.remove('error');
    }

    if (error3 == true) {
        Swal.fire({
            imageUrl: "images/error.png",
            title: "¡OOPS! Algo pasó aqui",
            text: "Se dejó un espacio vacío",
            confirmButtonText: "Intentar de nuevo"
        });
    } else {
        if (error1 == true) {
            inputContrasenna1.classList.add('error');
            Swal.fire({
                imageUrl: "images/error.png",
                title: "¡OOPS! Algo pasó aqui",
                text: "La nueva contraseña no es válida",
                confirmButtonText: "Intentar de nuevo"
            });
        } else {
            if (error2 == true) {
                inputContrasenna1.classList.add('error');
                Swal.fire({
                    imageUrl: "images/error.png",
                    title: "¡OOPS! Algo pasó aqui",
                    text: "La contraseña verificada no coincide",
                    confirmButtonText: "Intentar de nuevo"
                });
            } else {
                //Funcion para sacar el correo del URL ejemplo:
                //http://127.0.0.1:5500/P05b-nueva-contrasenna.html?correo=sochia2705@bylup.com
                function sacarCorreo() {
                let url = window.location.href;
                console.log(url);

                let urlSplit = url.split("=")
                let correo = urlSplit[1];
                return correo
                }
                let correo = sacarCorreo();
                console.log(correo);

                sessionStorage.getItem('usuarioConectado')
                let correoConectado = JSON.parse(sessionStorage.getItem('usuarioConectado'));
                console.log(correoConectado);
                if (correoConectado == null) {
                    correoConectado = correo;
                } else {
                    correoConectado = (correoConectado.correo)
                }
                console.log(correoConectado);
                cambiarContrasenna(correoConectado, inputContrasenna2.value, "activo");
                console.log("Se envió la información al backend");
                //console.log(correoConectado);
                //console.log(inputContrasenna2.value);
        }
    }
    }
};
btnSiguiente.addEventListener('click', validarInicioSesion);

// SERVICIOS DE CONEXION AL BACKEND PARA MODIFICAR LA CONTRASENNA
const cambiarContrasenna = async(pcorreo, pcontrasenna, pestado) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/cambiar-contrasenna',
            responseType: 'json',
            data: {
                correo: pcorreo,
                password: pcontrasenna,
                estado: pestado,
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Usuario modificado',
                'text': 'La contraseña fue actualizada correctamente',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'P05-inicio-sesion.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo actualizar la contraseña',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};
//if (sessionStorage.getItem('usuarioConectado')) {
//  correo = JSON.parse(sessionStorage.getItem('correo'));
//  tipoUsuario();
//} else {
//  window.location.href = 'index.html';
