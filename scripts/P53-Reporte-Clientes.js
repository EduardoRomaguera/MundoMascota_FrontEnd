'use strict';

const TABLAUSUARIOSTOTALES = document.querySelector('#tbl-usuriosTotal tbody');

//Función que agrega las celdas de razas
const MOSTRARTABLAUSUARIOTOTALES = () => {
    listaUsuariostotales.forEach(usuario => {
        let fila = TABLAUSUARIOSTOTALES.insertRow();
        fila.insertCell().innerHTML = usuario.nombre;
        fila.insertCell().innerHTML = usuario.correo;
        fila.insertCell().innerHTML = usuario.sexo;
        fila.insertCell().innerHTML = usuario.tipo;

    });
};

MOSTRARTABLAUSUARIOTOTALES();