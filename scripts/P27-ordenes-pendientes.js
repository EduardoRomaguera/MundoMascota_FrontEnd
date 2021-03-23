'use strict';

const TABLARAZAS = document.querySelector('#tbl-razas tbody');
const TABLAENFERMEDADES = document.querySelector('#tbl-enfermedades tbody');
const TABLAVACUNAS = document.querySelector('#tbl-vacunas tbody');
const FILTRORAZAS = document.querySelector('#txt-filtro-razas');
const FILTROENFERMEDADES = document.querySelector('#txt-filtro-enfermedades');
const FILTROVACUNAS = document.querySelector('#txt-filtro-vacunas');
const BTNAGREGARRAZA = document.querySelector('#btn-agregar-raza');
const BTNAGREGARENFERMEDAD = document.querySelector('#btn-agregar-enfermedad');
const BTNAGREGARVACUNA = document.querySelector('#btn-agregar-vacuna');

//Función que agrega las celdas de razas a la tabla
const MOSTRARTABLARAZAS = () => {
    let filtro = FILTRORAZAS.value.toLowerCase();
    TABLARAZAS.innerHTML = '';
    listaRazas.forEach(raza => {
        if (raza.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLARAZAS.insertRow();
            fila.insertCell().innerHTML = raza.nombre;
            fila.insertCell().innerHTML = raza.especie;
            fila.insertCell().innerHTML = raza.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('razaSeleccionado', JSON.stringify(raza));
                window.location.href = 'P97-raza-modificar.html';

            });

            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea borrar la raza?',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí!, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'La raza ha sido eliminada',
                            'success'
                        )
                    }
                })
            });
            celdaAcciones.appendChild(botonEliminar);
        }
    });
};

//Función que agrega las celdas de enfermedades a la tabla
const MOSTRARTABLAENFERMEDADES = () => {
    let filtro = FILTROENFERMEDADES.value.toLowerCase();
    TABLAENFERMEDADES.innerHTML = '';
    listaEnfermedades.forEach(enfermedad => {
        if (enfermedad.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAENFERMEDADES.insertRow();
            fila.insertCell().innerHTML = enfermedad.nombre;
            fila.insertCell().innerHTML = enfermedad.especie;
            fila.insertCell().innerHTML = enfermedad.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('enfermedadSeleccionado', JSON.stringify(enfermedad));
                window.location.href = 'P96-padecimientos-modificar.html';

            });
            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea borrar la enfermedad?',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí!, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'La enfermedad ha sido eliminada',
                            'success'
                        )
                    }
                })
            });

            celdaAcciones.appendChild(botonEliminar);
        }
    });
};

//Función que agrega las celdas de vacunas a la tabla
const MOSTRARTABLAVACUNAS = () => {
    let filtro = FILTROVACUNAS.value.toLowerCase();
    TABLAVACUNAS.innerHTML = '';
    listaVacunas.forEach(vacuna => {
        if (vacuna.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAVACUNAS.insertRow();
            fila.insertCell().innerHTML = vacuna.nombre;
            fila.insertCell().innerHTML = vacuna.especie;
            fila.insertCell().innerHTML = vacuna.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('vacunaSeleccionado', JSON.stringify(vacuna));
                window.location.href = 'P95-vacunas-modificar.html';

            });
            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea borrar la vacuna?',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí!, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'La vacuna ha sido eliminada',
                            'success'
                        )
                    }
                })
            });
            celdaAcciones.appendChild(botonEliminar);
        }
    });
};
MOSTRARTABLARAZAS();
FILTRORAZAS.addEventListener('keyup', MOSTRARTABLARAZAS);
BTNAGREGARRAZA.addEventListener('click', () => {
    window.location.href = 'P97-raza-modificar.html';
})
MOSTRARTABLAENFERMEDADES();
FILTROENFERMEDADES.addEventListener('keyup', MOSTRARTABLAENFERMEDADES)
BTNAGREGARENFERMEDAD.addEventListener('click', () => {
    window.location.href = 'P96-padecimientos-modificar.html';
})
MOSTRARTABLAVACUNAS();
FILTROVACUNAS.addEventListener('keyup', MOSTRARTABLAVACUNAS)
BTNAGREGARVACUNA.addEventListener('click', () => {
    window.location.href = 'P95-vacunas-modificar.html';
})