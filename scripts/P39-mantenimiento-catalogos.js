'use strict';

const TABLARAZAS = document.querySelector('#tbl-razas tbody');
const TABLAENFERMEDADES = document.querySelector('#tbl-enfermedades tbody');
const TABLAVACUNAS = document.querySelector('#tbl-vacunas tbody');
const inputFiltro = document.querySelector('#txt-filtro');

//Función que agrega las celdas de razas a la tabla
const MOSTRARTABLARAZAS = () => {
    let filtro = inputFiltro.value.toLowerCase();
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
            celdaAcciones.appendChild(botonModificar);
            celdaAcciones.appendChild(botonEliminar);
        }
    });
};


//Función que agrega las celdas de enfermedades a la tabla
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

//Función que agrega las celdas de vacunas a la tabla
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
inputFiltro.addEventListener('keyup', MOSTRARTABLARAZAS);
MOSTRARTABLAENFERMEDADES();
MOSTRARTABLAVACUNAS();