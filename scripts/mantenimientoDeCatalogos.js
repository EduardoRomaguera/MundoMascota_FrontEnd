'use strict';

const tablaRazas = document.querySelector('#tbl-razas tbody');

const mostrarTabla = () => {
    listaRazas.forEach(raza => {
        let fila = tablaRazas.insertRow();
        fila.insertCell().innerHTML = raza.nombre;
        fila.insertCell().innerHTML = raza.especie;
        fila.insertCell().innerHTML = raza.estado;

        let celdaAcciones = fila.insertCell();

        let botonModificar = document.createElement('button');
        botonModificar.innerText = 'Editar';

        celdaAcciones.appendChild(botonModificar);

    });
};
mostrarTabla();