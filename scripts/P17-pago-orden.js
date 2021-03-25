'use strict';

const btnPagar = document.querySelector('#btn-pagar');

const pendiente = () => {
    Swal.fire({
        icon: "warning",
        title: "¿Deseas Realizar el Pago?",
        confirmButtonText: "Si,Pagar",
        cancelButtonText: 'Cancelar',
        'cancelButtonColor': '#d33',
        cancelButtonText: 'Cancelar',
    });
}
btnPagar.addEventListener('click', pendiente);