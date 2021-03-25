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
        if (error = false) {

        }

        window.location.href = 'P54-tienda.html';
        Swal.fire({
            icon: "warning",
            title: "¿Deseas Realizar el Pago?",
            confirmButtonText: "Si,Pagar",
            cancelButtonText: 'Cancelar',
            'cancelButtonColor': '#d33',
            cancelButtonText: 'Cancelar',
        });
    }
};
btnPagar.addEventListener('click', () => validar());