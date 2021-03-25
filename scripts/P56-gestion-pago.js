'use strict';

const btnEliminar = document.querySelector('#btn-elim');

const pendiente = () => {
    Swal.fire({
        icon: "warning",
        title: "¿Eliminar esta tarjeta?",
        confirmButtonText: "Si,Eliminar",
        cancelButtonText: 'Cancelar',
        'cancelButtonColor': '#d33',
        cancelButtonText: 'Cancelar',
    });
}
btnEliminar.addEventListener('click', pendiente);