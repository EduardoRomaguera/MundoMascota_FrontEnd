'use strict';


const TABLAVACUNAS = document.querySelector('#tbl-vacunas tbody');
const FILTROVACUNAS = document.querySelector('#txt-filtro-vacunas');
const BTNAGREGARVACUNA = document.querySelector('#btn-agregar-vacuna');

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
            celdaAcciones.appendChild(botonModificar);
        }
    });
};

MOSTRARTABLAVACUNAS();
FILTROVACUNAS.addEventListener('keyup', MOSTRARTABLAVACUNAS)
BTNAGREGARVACUNA.addEventListener('click', () => {
    window.location.href = 'P95-vacunas-modificar.html';
})