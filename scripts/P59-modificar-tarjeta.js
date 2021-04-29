'use strict';

const INPUTNOMBRETARJETA = document.querySelector('#txt-nombre-tarjeta');
const INPUTNUMEROTARJETA = document.querySelector('#txt-numero-tarjeta');
const INPUTEXPIRA = document.querySelector('#txt-expira');
const INPUTCVV = document.querySelector('#txt-cvv');
const INPUTSREQUERIDOS = document.querySelectorAll(':required');
const BTNAGRETARJETA = document.querySelector('#btn-agregar-tarjeta');
const BTNCANCELAR = document.querySelector('#btn-cancelar');
let tarjetaSeleccionada;
let id;


let lista = [];
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
        CAMBIARTARJETA();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo modificar la tarjeta',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};

const CAMBIARTARJETA = () => {
    let idUsuario = usuarioConectado.value;
    let nombreTarjeta = INPUTNOMBRETARJETA.value;
    let numero = INPUTNUMEROTARJETA.value;
    let expiracion = INPUTEXPIRA.value;
    let codigoSeguridad = INPUTCVV.value;
    MODIFICARTARJETA(id, idUsuario, nombreTarjeta, numero, expiracion, codigoSeguridad);
    console.log(tarjetaSeleccionada);

}

if (localStorage.getItem('tarjetaSeleccionada')) {
    tarjetaSeleccionada = JSON.parse(localStorage.getItem('tarjetaSeleccionada'));
    id = tarjetaSeleccionada.idUsuario;
    INPUTNOMBRETARJETA.value = tarjetaSeleccionada.nombreTarjeta;
    INPUTNUMEROTARJETA.value = tarjetaSeleccionada.numero;
    id = tarjetaSeleccionada._id;


} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar primero un servicio'
    }).then(() => {
        window.location.href = 'P22-mis-servicios.html';
    });
}
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