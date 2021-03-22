'use strict';

const TABLAUSUARIOSBAN = document.querySelector('#tbl-usurios-ban tbody');
const MOSTRARTABLAUSUARIOSBAN = () => {
    listaUsuariosBaneados.forEach(usuario => {
        let fila = TABLAUSUARIOSBAN.insertRow();
        fila.insertCell().innerHTML = usuario.nombre;
        fila.insertCell().innerHTML = usuario.correo;
        fila.insertCell().innerHTML = usuario.sexo;
        fila.insertCell().innerHTML = usuario.tipo;
        fila.insertCell().innerHTML = usuario.estado;
        fila.insertCell().innerHTML = usuario.Razon;

    });
};

MOSTRARTABLAUSUARIOSBAN();