'use strict';

const TABLASERVICIOS = document.querySelector('#tbl-servicios tbody');
const FILTROSERVICIOS = document.querySelector('#txt-filtro-servicios');
const BTNAGREGARSERVICIOS = document.querySelector('#btn-agregar-servicios');
let listaMisServicios = [];

const LLENARTABLAMISSERVICIOS = async() => {
    listaMisServicios = await LISTARMISSERVICIOS();
    MOSTRARTABLASERVICIOS();
};

//Función que agrega las celdas de servicios a la tabla
const MOSTRARTABLASERVICIOS = () => {
    let filtro = FILTROSERVICIOS.value.toLowerCase();
    TABLASERVICIOS.innerHTML = '';
    listaMisServicios.forEach(servicio => {
        if (servicio.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLASERVICIOS.insertRow();
            fila.insertCell().innerHTML = servicio.nombre;
            fila.insertCell().innerHTML = servicio.descripcion;
            fila.insertCell().innerHTML = servicio.costo;


            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

            botonModificar.addEventListener('click', () => {
                localStorage.setItem('servicioSeleccionado', JSON.stringify(servicio));
                window.location.href = 'P22-mis-servicios-modificar.html';
            });

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
                        ELIMINARMISERVICIO(servicio._id)
                    }
                })
            });
            celdaAcciones.appendChild(botonEliminar);
            celdaAcciones.appendChild(botonModificar)


        }
    });
};

LLENARTABLAMISSERVICIOS();
FILTROSERVICIOS.addEventListener('keyup', MOSTRARTABLASERVICIOS);
BTNAGREGARSERVICIOS.addEventListener('click', () => {
    window.location.href = 'P22-mis-servicios-agregar.html';
})