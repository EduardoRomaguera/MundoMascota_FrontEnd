'use strict';

const TABLARAZAS = document.querySelector('#tbl-razas tbody');
const FILTRORAZAS = document.querySelector('#txt-filtro-razas');
const BTNAGREGARRAZA = document.querySelector('#btn-agregar-raza');
const MENSAJERAZA = document.querySelector('#txt-mensaje-raza');

//Función que agrega las celdas de razas a la tabla
const MOSTRARTABLARAZAS = () => {
    let filtro = FILTRORAZAS.value.toLowerCase();
    TABLARAZAS.innerHTML = '';
    listaRazas.forEach(raza => {
        if (raza.nombre.toLowerCase().includes(filtro) || raza.especie.toLowerCase().includes(filtro)) {

            let fila = TABLARAZAS.insertRow();
            fila.insertCell().innerHTML = raza.nombre;
            fila.insertCell().innerHTML = raza.especie;
            fila.insertCell().innerHTML = raza.estado;

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
                    'text': '¿Borrar la raza?',
                    'showCancelButton': true,
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
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
            celdaAcciones.appendChild(botonModificar);
        } else {

            let mensaje = TABLARAZAS.textContent = 'No se encontro resultado';

        }

    });
};
MOSTRARTABLARAZAS();
FILTRORAZAS.addEventListener('keyup', MOSTRARTABLARAZAS);
BTNAGREGARRAZA.addEventListener('click', () => {
    window.location.href = 'P97-raza-modificar.html';
})