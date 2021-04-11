'use strict';

const TABLAORDENES = document.querySelector('#tbl-ordenes tbody');

const FILTROORDENES = document.querySelector('#txt-filtro-ordenes');

//Función que agrega las celdas de ordenes a la tabla
const MOSTRARTABLAORDENES = () => {
    let filtro = FILTROORDENES.value.toLowerCase();
    TABLAORDENES.innerHTML = '';
    listaOrdenesPendientes.forEach(ordenes => {
        if (ordenes.servicio.toLowerCase().includes(filtro)) {

            let fila = TABLAORDENES.insertRow();
            fila.insertCell().innerHTML = ordenes.cliente;
            fila.insertCell().innerHTML = ordenes.mascota;
            fila.insertCell().innerHTML = ordenes.especie;
            fila.insertCell().innerHTML = ordenes.raza;
            fila.insertCell().innerHTML = ordenes.servicio;

            let celdaAcciones = fila.insertCell();


            let botonRechazar = document.createElement('button');
            botonRechazar.innerText = 'Rechazar';

            botonRechazar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Rechazar la solicitud?',
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


MOSTRARTABLAORDENES();
FILTROORDENES.addEventListener('keyup', MOSTRARTABLAORDENES);