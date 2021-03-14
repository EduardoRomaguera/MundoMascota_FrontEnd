'use strict';

const tablaRazas = document.querySelector('#tbl-razas tbody');
const tablaEnfermedades = document.querySelector('#tbl-enfermedades tbody');
const mostrarTablaRazas = () => {
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

const mostrarTablaEnfermedades = () => {
    listaEnfermedades.forEach(enfermedad => {
        let fila = tablaEnfermedades.insertRow();
        fila.insertCell().innerHTML = enfermedad.nombre;
        fila.insertCell().innerHTML = enfermedad.especie;
        fila.insertCell().innerHTML = enfermedad.estado;

        let celdaAcciones = fila.insertCell();

        let botonModificar = document.createElement('button');
        botonModificar.innerText = 'Editar';

        celdaAcciones.appendChild(botonModificar);
    });
};
mostrarTablaRazas();
mostrarTablaEnfermedades();