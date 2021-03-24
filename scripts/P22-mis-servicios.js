'use strict';

const TABLASERVICIOS = document.querySelector('#tbl-servicios tbody');

const FILTROSERVICIOS = document.querySelector('#txt-filtro-servicios');

const BTNAGREGARSERVICIOS = document.querySelector('#btn-agregar-servicios');

//Función que agrega las celdas de servicios a la tabla
const MOSTRARTABLASERVICIOS = () => {
    let filtro = FILTROSERVICIOS.value.toLowerCase();
    TABLASERVICIOS.innerHTML = '';
    listaMisServicios.forEach(servicios => {
        if (servicios.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLASERVICIOS.insertRow();
            fila.insertCell().innerHTML = servicios.nombre;
            fila.insertCell().innerHTML = servicios.descripcion;
            fila.insertCell().innerHTML = servicios.costo;


            let celdaAcciones = fila.insertCell();


            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea borrar este servicio?',
                    'showCancelButton': true,
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'El servicio ha sido eliminada',
                            'success'
                        )
                    }
                })
            });
            celdaAcciones.appendChild(botonEliminar);


        }
    });
};


MOSTRARTABLASERVICIOS();
FILTROSERVICIOS.addEventListener('keyup', MOSTRARTABLASERVICIOS);
BTNAGREGARSERVICIOS.addEventListener('click', () => {
    window.location.href = 'P94-servicios-modificar.html';
})