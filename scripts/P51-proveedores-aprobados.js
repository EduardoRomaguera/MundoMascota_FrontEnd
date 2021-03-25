'use strict';

const TABLAAPROB = document.querySelector('#tbl-ordenes tbody');

const FILTROORDENES = document.querySelector('#txt-filtro-ordenes');

//Función que agrega las celdas de ordenes a la tabla
const MOSTRARTABLAPROB = () => {
    let filtro = FILTROORDENES.value.toLowerCase();
    TABLAAPROB.innerHTML = '';
    listaUsuariosProveedores.forEach(usuarios => {
        if (usuarios.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAAPROB.insertRow();
            fila.insertCell().innerHTML = usuarios.nombre;
            fila.insertCell().innerHTML = usuarios.correo;
            fila.insertCell().innerHTML = usuarios.nacimiento;
            fila.insertCell().innerHTML = usuarios.tipo;

        }
    });
};


MOSTRARTABLAPROB();
FILTROORDENES.addEventListener('keyup', MOSTRARTABLAPROB);