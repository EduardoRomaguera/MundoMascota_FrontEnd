'use strict';

const TABLAPATROCINADORES = document.querySelector('#tbl-patrocinadores tbody');
const btnAgregarPatrocinador = document.querySelector('#btn-agregar-patrocinador');
const FILTROPATROCINADORES = document.querySelector('#txt-filtro-patro');

let listaPatrocinador = [];


const LLENARTABLAPATROCINADOR = async() => {
    listaPatrocinador = await LISTARPATROCINADOR();
    MOSTRARTABLAPATROCINADOR();
};

//Función que agrega las celdas de especies a la tabla
const MOSTRARTABLAPATROCINADOR = async => {
    let filtro = FILTROPATROCINADORES.value.toLowerCase();
    TABLAPATROCINADORES.innerHTML = '';
    listaPatrocinador.forEach(patrocinador => {
        if (patrocinador.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAPATROCINADORES.insertRow();
            fila.insertCell().innerHTML = patrocinador.nombre;
            fila.insertCell().innerHTML = patrocinador.frase;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

            botonModificar.addEventListener('click', () => {
                localStorage.setItem('patrocinadorSeleccionado', JSON.stringify(patrocinador));
                window.location.href = '';
            });
            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea borrar el patrocinador?',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí!, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        ELIMINARPATROCIANDOR(patrocinador._id);
                    }
                })
            });
            celdaAcciones.appendChild(botonEliminar);
            celdaAcciones.appendChild(botonModificar);
        }
    });
};

LLENARTABLAPATROCINADOR();
FILTROPATROCINADORES.addEventListener('keyup', MOSTRARTABLAPATROCINADOR)
btnAgregarPatrocinador.addEventListener('click', () => {
    window.location.href = 'P80-agrega-patrocinador.html';
})