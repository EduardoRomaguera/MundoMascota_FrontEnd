'use strict';

const INPUTNOMBRETARJETA = document.querySelector('#txt-nombre-tarjeta');
const INPUTNUMEROTARJETA = document.querySelector('#txt-numero-tarjeta');
const INPUTMESEXPIRA = document.querySelector('#txt-mes-expira');
const INPUTANNOEXPIRA = document.querySelector('#txt-anno-expira');
const INPUTCVV = document.querySelector('#txt-cvv');
const INPUTSREQUERIDOS = document.querySelectorAll(':required');
const BTNAGRETARJETA = document.querySelector('#btn-agregar-tarjeta');
const BTNCANCELAR = document.querySelector('#btn-cancelar');
let usuarioConectado

//Funcion que registra la vacuna 
const AGREGARTARJETA = () => {
    let idUsuario = usuarioConectado.value;
    let nombreTarjeta = INPUTNOMBRETARJETA.value;
    let numero = INPUTNUMEROTARJETA.value;
    let mesExpiracion = INPUTMESEXPIRA.value;
    let annoExpiracion = INPUTANNOEXPIRA.value;
    let codigoSeguridad = INPUTCVV.value;
    REGISTRARTARJETA(idUsuario, nombreTarjeta, numero, mesExpiracion, annoExpiracion, codigoSeguridad);

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
BTNAGRETARJETA.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P56-gestion-pago.html';
})