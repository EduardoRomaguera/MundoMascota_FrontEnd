'use strict';

const TABLAPENDI = document.querySelector('#tbl-ordenes tbody');

const FILTROORDENES = document.querySelector('#txt-filtro-ordenes');

//Función que agrega las celdas de ordenes a la tabla
const MOSTRARTABLAPENDI = () => {
    let filtro = FILTROORDENES.value.toLowerCase();
    TABLAPENDI.innerHTML = '';
    listaUsuariosPendientes.forEach(usuarios => {
        if (usuarios.nombreNegocio.toLowerCase().includes(filtro)) {

            let fila = TABLAPENDI.insertRow();
            fila.insertCell().innerHTML = usuarios.nombreNegocio;
            fila.insertCell().innerHTML = usuarios.nombre;
            fila.insertCell().innerHTML = usuarios.correo;
            fila.insertCell().innerHTML = usuarios.nacimiento;


            let celdaAcciones = fila.insertCell();


            let botonRechazar = document.createElement('button');
            botonRechazar.innerText = 'Rechazar';

            botonRechazar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea rechazar la solicitud?',
                    'showCancelButton': true,
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'La solicitud ha sido rechazada',
                            'success'
                        )
                    }
                })
            });

            let botonAceptar = document.createElement('button');
            botonAceptar.innerText = 'Aceptar';

            botonAceptar.addEventListener('click', () => {
                Swal.fire(
                    '',
                    'Solicitud aceptada',
                    'success'
                )
            });

            celdaAcciones.appendChild(botonAceptar);
            celdaAcciones.appendChild(botonRechazar);



        }
    });
};


MOSTRARTABLAPENDI();
FILTROORDENES.addEventListener('keyup', MOSTRARTABLAPENDI);