'use strict';

const TABLARECHA = document.querySelector('#tbl-ordenes tbody');

const FILTRORECHAZO = document.querySelector('#txt-filtro-ordenes');

//Función que agrega las celdas de ordenes a la tabla
const MOSTRARTABLARECHAZO = () => {
    let filtro = FILTRORECHAZO.value.toLowerCase();
    TABLARECHA.innerHTML = '';
    listaUsuariosRechazados.forEach(usuarios => {
        if (usuarios.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLARECHA.insertRow();
            fila.insertCell().innerHTML = usuarios.nombre;
            fila.insertCell().innerHTML = usuarios.correo;
            fila.insertCell().innerHTML = usuarios.nacimiento;
            fila.insertCell().innerHTML = usuarios.razon;

        }
    });
};


MOSTRARTABLARECHAZO();
FILTRORECHAZO.addEventListener('keyup', MOSTRARTABLARECHAZO);