'use strict';

const TABLARAZAS = document.querySelector('#tbl-razas tbody');
const TABLAENFERMEDADES = document.querySelector('#tbl-enfermedades tbody');
const TABLAVACUNAS = document.querySelector('#tbl-vacunas tbody');

//Función que agrega las celdas de razas
const MOSTRARTABLARAZAS = () => {
    listaRazas.forEach(raza => {
        let fila = TABLARAZAS.insertRow();
        fila.insertCell().innerHTML = raza.nombre;
        fila.insertCell().innerHTML = raza.especie;
        fila.insertCell().innerHTML = raza.estado;

        let celdaAcciones = fila.insertCell();

        let botonModificar = document.createElement('button');
        botonModificar.innerText = 'Editar';

        celdaAcciones.appendChild(botonModificar);

    });
};

//Función que agrega las celdas de enfermedades
const MOSTRARTABLAENFERMEDADES = () => {
    listaEnfermedades.forEach(enfermedad => {
        let fila = TABLAENFERMEDADES.insertRow();
        fila.insertCell().innerHTML = enfermedad.nombre;
        fila.insertCell().innerHTML = enfermedad.especie;
        fila.insertCell().innerHTML = enfermedad.estado;

        let celdaAcciones = fila.insertCell();

        let botonModificar = document.createElement('button');
        botonModificar.innerText = 'Editar';

        celdaAcciones.appendChild(botonModificar);
    });
};

//Función que agrega las celdas de vacunas
const MOSTRARTABLAVACUNAS = () => {
    listaVacunas.forEach(vacuna => {
        let fila = TABLAVACUNAS.insertRow();
        fila.insertCell().innerHTML = vacuna.nombre;
        fila.insertCell().innerHTML = vacuna.especie;
        fila.insertCell().innerHTML = vacuna.estado;

        let celdaAcciones = fila.insertCell();

        let botonModificar = document.createElement('button');
        botonModificar.innerText = 'Editar';

        celdaAcciones.appendChild(botonModificar);
    });
};
MOSTRARTABLARAZAS();
MOSTRARTABLAENFERMEDADES();
MOSTRARTABLAVACUNAS();