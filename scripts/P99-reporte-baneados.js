'use strict';

const TABLAUSUARIOSBAN = document.querySelector('#tbl-usurios-ban tbody');
const FILTROUSUARIOS = document.querySelector('#txt-filtro-usuarios-baneados');


const MOSTRARTABLAUSUARIOSBAN = () => {
    let filtro = FILTROUSUARIOS.value.toLowerCase();
    TABLAUSUARIOSBAN.innerHTML = '';
    listaUsuariosBaneados.forEach(usuario => {
        if (usuario.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAUSUARIOSBAN.insertRow();

            fila.insertCell().innerHTML = usuario.nombre;
            fila.insertCell().innerHTML = usuario.correo;
            fila.insertCell().innerHTML = usuario.tipo;
            fila.insertCell().innerHTML = usuario.Razon;
        }
    });
};
MOSTRARTABLAUSUARIOSBAN();
FILTROUSUARIOS.addEventListener('keyup', MOSTRARTABLAUSUARIOSBAN);