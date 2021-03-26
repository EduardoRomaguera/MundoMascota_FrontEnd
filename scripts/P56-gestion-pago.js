'use strict';

const btnEliminar = document.querySelector('#btn-elim');

const pendiente = () => {
    Swal.fire({
        icon: "warning",
        title: "¿Desea eliminar esta tarjeta?",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: 'Cancelar',
        'cancelButtonColor': '#d33',
        cancelButtonText: 'Cancelar',
    });
}
btnEliminar.addEventListener('click', pendiente);