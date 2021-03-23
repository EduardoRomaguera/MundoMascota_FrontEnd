'use strict';
const BTNBANEAR = document.querySelector("#btn-banear");
const BTNDESCARTAR = document.querySelector('#btn-descartar')

const BANEAR = () => {
    BTNBANEAR.addEventListener('click', () => {
        Swal.fire({
            'icon': 'warning',
            'text': '¿Está seguro que desea banear al usuario?',
            'showCancelButton': true,
            'confirmButtonText': '¡Sí!, estoy seguro',
            'cancelButtonColor': '#d33',
            'cancelButtonText': 'Cancelar',
            'reverseButtons': true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '',
                    'El usuario ha sido baneado',
                    'success'
                )
            }
        })
    });
}

BANEAR();
BTNDESCARTAR.addEventListener('click', () => {
    window.location.href = 'P98-gestion-de-denuncias.html';

})