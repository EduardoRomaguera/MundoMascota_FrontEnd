'use strict';

const TABLARAZAS = document.querySelector('#tbl-razas tbody');
const FILTRORAZAS = document.querySelector('#txt-filtro-razas');
const BTNAGREGARRAZA = document.querySelector('#btn-agregar-raza');
const MENSAJE = document.querySelector('#No-encontrado');
let listaRazas = [];



const LLENARTABLARAZAS = async() => {
    listaRazas = await LISTARRAZAS();
    MOSTRARTABLARAZAS();
};

//Función que agrega las celdas de razas a la tabla
const MOSTRARTABLARAZAS = async() => {
    let filtro = FILTRORAZAS.value.toLowerCase();
    TABLARAZAS.innerHTML = '';
    listaRazas.forEach(raza => {
        if (raza.nombre.toLowerCase().includes(filtro)) {
            let fila = TABLARAZAS.insertRow();
            fila.insertCell().innerHTML = raza.nombre;
            fila.insertCell().innerHTML = raza.especie;
            fila.insertCell().innerHTML = raza.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

            botonModificar.addEventListener('click', () => {
                localStorage.setItem('razaSeleccionado', JSON.stringify(raza));
                window.location.href = 'P40-raza-modificar.html';
            });

            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Borrar la raza?',
                    'showCancelButton': true,
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        ELIMINARRAZA(raza._id);
                    }
                })
            });
            celdaAcciones.appendChild(botonEliminar);
            celdaAcciones.appendChild(botonModificar);
        }

    });
};

LLENARTABLARAZAS();
FILTRORAZAS.addEventListener('keyup', MOSTRARTABLARAZAS);
BTNAGREGARRAZA.addEventListener('click', () => {
    window.location.href = 'P40-raza-agregar.html';
})