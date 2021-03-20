'use strict';

const TABLAUSUARIOSRECHA = document.querySelector('#tbl-usuriosRecha tbody');

//Función que agrega las celdas de razas
const MOSTRARTABLAUSUARIORECHA = () => {
    listaUsuariosRechazados.forEach(usuario => {
        let fila = TABLAUSUARIOSRECHA.insertRow();
        fila.insertCell().innerHTML = usuario.nombre;
        fila.insertCell().innerHTML = usuario.correo;
        fila.insertCell().innerHTML = usuario.sexo;
        fila.insertCell().innerHTML = usuario.tipo;
        fila.insertCell().innerHTML = usuario.razon;
    });
};

MOSTRARTABLAUSUARIORECHA();