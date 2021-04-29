'use strict';

const INPUTNOMBRETARJETA = document.querySelector('#txt-nombre-tarjeta');
const INPUTNUMEROTARJETA = document.querySelector('#txt-numero-tarjeta');
const INPUTEXPIRA = document.querySelector('#txt-expira');
const INPUTCVV = document.querySelector('#txt-cvv');
const INPUTSREQUERIDOS = document.querySelectorAll(':required');
const BTNAGRETARJETA = document.querySelector('#btn-agregar-tarjeta');
const BTNCANCELAR = document.querySelector('#btn-cancelar');
let usuarioConectado;
let correoUsuario;



const AGREGARTARJETA = () => {
    let nombreTarjeta = INPUTNOMBRETARJETA.value;
    let numero = INPUTNUMEROTARJETA.value;
    let expiracion = INPUTEXPIRA.value;
    let codigoSeguridad = INPUTCVV.value;
    console.log(correoUsuario);
    REGISTRARTARJETA(correoUsuario, nombreTarjeta, numero, expiracion, codigoSeguridad);

};

const VALIDAR = () => {
    let error = false;
    let inputRequeridos = INPUTSREQUERIDOS;
    inputRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (error == false) {
        AGREGARTARJETA();

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar la tarjeta',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
};

INPUTSREQUERIDOS.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value == '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
});


if (sessionStorage.getItem('usuarioConectado')) {
    usuarioConectado = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    correoUsuario = usuarioConectado.correo;
    console.log(correoUsuario);

} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar un usuario'

    });
}


BTNAGRETARJETA.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P56-gestion-pago.html';
})