'use strict';

const TABLAUSUARIOSAPROB = document.querySelector('#tbl-usuriosApro tbody');

//Función que agrega las celdas de razas
const MOSTRARTABLAUSUARIOAPROB = () => {

    listaUsuariosProveedores.forEach(usuario => {

        let fila = TABLAUSUARIOSAPROB.insertRow();

        fila.insertCell().innerHTML = usuario.nombre;
        fila.insertCell().innerHTML = usuario.correo;
        fila.insertCell().innerHTML = usuario.sexo;
        fila.insertCell().innerHTML = usuario.tipo;
    });
};


MOSTRARTABLAUSUARIOAPROB();