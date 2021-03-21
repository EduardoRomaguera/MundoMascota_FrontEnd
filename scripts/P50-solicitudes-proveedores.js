'use strict';

const TABLAUSUARIOSPENDI = document.querySelector('#tbl-usuriosPendi tbody');

//Función que agrega las celdas de razas
const MOSTRARTABLAUSUARIOPENDI = () => {
    listaUsuariosPendientes.forEach(usuario => {
        let fila = TABLAUSUARIOSPENDI.insertRow();
        fila.insertCell().innerHTML = usuario.nombre;
        fila.insertCell().innerHTML = usuario.correo;
        fila.insertCell().innerHTML = usuario.sexo;
        fila.insertCell().innerHTML = usuario.estado;
        let celdaAcciones = fila.insertCell();

        let botonModificar = document.createElement('button');
        botonModificar.innerText = 'Aprobar';

        celdaAcciones.appendChild(botonModificar);
        let celdaAcciones2 = fila.insertCell();

        let botonModificar2 = document.createElement('button');
        botonModificar2.innerText = 'Rechazar';

        celdaAcciones2.appendChild(botonModificar2);
    });
};

MOSTRARTABLAUSUARIOPENDI();