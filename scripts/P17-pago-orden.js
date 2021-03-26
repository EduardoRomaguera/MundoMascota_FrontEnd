'use strict';

const btnPagar = document.querySelector('#btn-pagar');
const inputNacimientoCl = document.querySelector('#txt-nacimiento-cl');


const validar = () => {
    let error = false;
    if (inputNacimientoCl.value == '') {
        error = true;
        inputNacimientoCl.classList.add('error');
    } else {
        inputNacimientoCl.classList.remove('error');
    }
    if (error == true) {
        Swal.fire({
            imageUrl: "images/error.png",
            title: "¡OOPS! Algo pasó aqui",
            text: "Su codigo de seguridad es invalido",
            confirmButtonText: "Intentar de nuevo"
        });
    } else {}

    if (inputNacimientoCl.value = 457) {
        error = false;
        Swal.fire({
            icon: "warning",
            title: "¿Deseas realizar el pago?",
            confirmButtonText: "Si, pagar",
            cancelButtonText: 'Cancelar',
            'cancelButtonColor': '#d33',
            cancelButtonText: 'Cancelar',
        });
        window.location.href = 'P54-tienda.html';
    }
};
btnPagar.addEventListener('click', () => validar());