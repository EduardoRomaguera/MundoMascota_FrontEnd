'use strict';

const TABLAENFERMEDADES = document.querySelector('#tbl-enfermedades tbody');
const FILTROENFERMEDADES = document.querySelector('#txt-filtro-enfermedades');
const BTNAGREGARENFERMEDAD = document.querySelector('#btn-agregar-enfermedad');
let listaPadecimientos = [];





const LLENARTABLAPADE = async() => {
    listaPadecimientos = await LISTARPADECIMIENTOS();
    MOSTRARTABLAPADE();
};

//Función que agrega las celdas de enfermedades a la tabla
const MOSTRARTABLAPADE = () => {
    let filtro = FILTROENFERMEDADES.value.toLowerCase();
    TABLAENFERMEDADES.innerHTML = '';
    listaPadecimientos.forEach(padecimiento => {
        if (padecimiento.nombre.toLowerCase().includes(filtro)) {
            let fila = TABLAENFERMEDADES.insertRow();
            fila.insertCell().innerHTML = padecimiento.nombre;
            fila.insertCell().innerHTML = padecimiento.especie;
            fila.insertCell().innerHTML = padecimiento.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

            botonModificar.addEventListener('click', () => {
                localStorage.setItem('padecimientoSeleccionado', JSON.stringify(padecimiento));
                window.location.href = 'P96-padecimiento-modificar.html';
            });

            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Borrar la enfermedad?',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí!, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        ELIMINARPADECIMIENTO(padecimiento._id);
                    }
                })
            });

            celdaAcciones.appendChild(botonEliminar);
            celdaAcciones.appendChild(botonModificar);
        }
    });
};
LLENARTABLAPADE();
FILTROENFERMEDADES.addEventListener('keyup', MOSTRARTABLAPADE)
BTNAGREGARENFERMEDAD.addEventListener('click', () => {
    window.location.href = 'P96-padecimientos-modificar.html';
})