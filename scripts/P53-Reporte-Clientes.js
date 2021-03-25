'use strict';

const TABLATOTAL = document.querySelector('#tbl-ordenes tbody');

const FILTROTOTAL = document.querySelector('#txt-filtro-ordenes');

//Función que agrega las celdas de ordenes a la tabla
const MOSTRARTABLATOTAL = () => {
    let filtro = FILTROTOTAL.value.toLowerCase();
    TABLATOTAL.innerHTML = '';
    listaUsuariostotales.forEach(usuarios => {
        if (usuarios.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLATOTAL.insertRow();
            fila.insertCell().innerHTML = usuarios.nombre;
            fila.insertCell().innerHTML = usuarios.correo;
            fila.insertCell().innerHTML = usuarios.nacimiento;
            fila.insertCell().innerHTML = usuarios.tipo;

        }
    });
};


MOSTRARTABLATOTAL();
FILTROTOTAL.addEventListener('keyup', MOSTRARTABLATOTAL);