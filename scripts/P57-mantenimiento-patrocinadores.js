'use strict';

const TABLAPATROCINADORES = document.querySelector('#tbl-patrocinadores tbody');
const btnAgregarPatrocinador = document.querySelector('#btn-agregar-patrocinador');
const FILTROPATROCINADORES = document.querySelector('#txt-filtro-patro');
let listaPatrocinador = [];


const LLENARTABLAPATROCINADOR = async() => {
    listaPatrocinador = await LISTARPATROCINADOR();
    listaPatrocinador = listaPatrocinador.patrocinadores;
    console.log(listaPatrocinador);
    MOSTRARTABLAPATROCINADOR();
};

//Función que agrega las celdas de especies a la tabla
const MOSTRARTABLAPATROCINADOR = async => {
    let filtro = FILTROPATROCINADORES.value.toLowerCase();
    TABLAPATROCINADORES.innerHTML = '';
    console.log(listaPatrocinador.patrocinadores);
    listaPatrocinador.forEach(patrocinadores => {
        if (patrocinadores.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAPATROCINADORES.insertRow();
            fila.insertCell().innerHTML = patrocinadores.nombre;
            fila.insertCell().innerHTML = patrocinadores.frase;

            let celdaAcciones = fila.insertCell();

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

        }
    });
};

LLENARTABLAPATROCINADOR();
FILTROPATROCINADORES.addEventListener('keyup', MOSTRARTABLAPATROCINADOR)
btnAgregarPatrocinador.addEventListener('click', () => {
    window.location.href = 'P80-agregar-patrocinador.html';
})