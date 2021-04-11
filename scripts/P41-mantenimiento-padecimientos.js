'use strict';

const TABLAENFERMEDADES = document.querySelector('#tbl-enfermedades tbody');
const FILTROENFERMEDADES = document.querySelector('#txt-filtro-enfermedades');
const BTNAGREGARENFERMEDAD = document.querySelector('#btn-agregar-enfermedad');

//Función que agrega las celdas de enfermedades a la tabla
const MOSTRARTABLAENFERMEDADES = () => {
    let filtro = FILTROENFERMEDADES.value.toLowerCase();
    TABLAENFERMEDADES.innerHTML = '';
    listaEnfermedades.forEach(enfermedad => {
        if (enfermedad.nombre.toLowerCase().includes(filtro) || enfermedad.especie.toLowerCase().includes(filtro)) {

            let fila = TABLAENFERMEDADES.insertRow();
            fila.insertCell().innerHTML = enfermedad.nombre;
            fila.insertCell().innerHTML = enfermedad.especie;
            fila.insertCell().innerHTML = enfermedad.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

            botonModificar.addEventListener('click', () => {
                Swal.fire({
                    imageUrl: "images/cute-pets.jpg",
                    title: "Nuestro equipo aún está trabajando en eso",
                    text: "Mientras tanto puedes ver esos lindos cachorros",
                    confirmButtonText: "Regresar"
                });

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
                        Swal.fire(
                            '',
                            'La enfermedad ha sido eliminada',
                            'success'
                        )
                    }
                })
            });

            celdaAcciones.appendChild(botonEliminar);
            celdaAcciones.appendChild(botonModificar);
        } else {

            let mensaje = TABLAENFERMEDADES.textContent = 'No se encontro resultado';

        }
    });
};
MOSTRARTABLAENFERMEDADES();
FILTROENFERMEDADES.addEventListener('keyup', MOSTRARTABLAENFERMEDADES)
BTNAGREGARENFERMEDAD.addEventListener('click', () => {
    window.location.href = 'P96-padecimientos-modificar.html';
})