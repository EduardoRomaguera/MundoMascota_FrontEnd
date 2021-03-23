'use strict';

const TABLAORDENES = document.querySelector('#tbl-ordenes tbody');
const inputFiltro = document.querySelector('#txt-filtro');
const BTNAGREGARORDENES = document.querySelector('#btn-agregar-ordenes');

//Función que agrega las celdas de ordenes pendientes a la tabla
const MOSTRARTABLAORDENES = () => {
    let filtro = FILTROORDENES.value.toLowerCase();
    TABLAORDENES.innerHTML = '';
    listaOrdenesPendientes.forEach(ordenes => {
        if (raza.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAORDENES.insertRow();
            fila.insertCell().innerHTML = ordenes.nombre;
            fila.insertCell().innerHTML = ordenes.especie;
            fila.insertCell().innerHTML = ordenes.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('razaSeleccionado', JSON.stringify(raza));
                window.location.href = 'P97-raza-modificar.html';

            });

            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea borrar la raza?',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí!, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'La raza ha sido eliminada',
                            'success'
                        )
                    }
                })
            });
            celdaAcciones.appendChild(botonEliminar);
        }
    });
};

MOSTRARTABLAORDENES();
inputFiltro.addEventListener('keyup', MOSTRARTABLAORDENES);