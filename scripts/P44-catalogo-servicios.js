'use strict';

const TABLASERVICIOS = document.querySelector('#tbl-servicios tbody');
const FILTROSERVICIOS = document.querySelector('#txt-filtro-servicios');
const BTNAGREGARSERVICIOS = document.querySelector('#btn-agregar-servicios');
let listaServicios = [];

const LLENARTABLASERVICIOS = async() => {
    listaServicios = await LISTARSERVICIOS();
    MOSTRARTABLASERVICIOS();
};

//Función que agrega las celdas de servicios a la tabla
const MOSTRARTABLASERVICIOS = () => {
    let filtro = FILTROSERVICIOS.value.toLowerCase();
    TABLASERVICIOS.innerHTML = '';
    listaServicios.forEach(servicioCatalogo => {
        if (servicioCatalogo.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLASERVICIOS.insertRow();
            fila.insertCell().innerHTML = servicioCatalogo.nombre;
            fila.insertCell().innerHTML = servicioCatalogo.descripcion;
            fila.insertCell().innerHTML = servicioCatalogo.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

            botonModificar.addEventListener('click', () => {
                localStorage.setItem('servicioSeleccionado', JSON.stringify(servicioCatalogo));
                window.location.href = 'P44-catalogo-servicios-modificar.html';
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
                        ELIMINARSERVICIO(servicioCatalogo._id)
                    }
                })
            });
            celdaAcciones.appendChild(botonEliminar);
            celdaAcciones.appendChild(botonModificar)


        }
    });
};

LLENARTABLASERVICIOS();
FILTROSERVICIOS.addEventListener('keyup', MOSTRARTABLASERVICIOS);
BTNAGREGARSERVICIOS.addEventListener('click', () => {
    window.location.href = 'P44-catalogo-servicios-agregar.html';
})