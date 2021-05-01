'use strict';

const TABLAMASCOTAS = document.querySelector('#tbl-mascotas tbody');
const FILTROMASCOTAS = document.querySelector('#txt-filtro-mascotas');
let listaMascotas = [];
let foto = document.createElement('image');
let mascotaSeleccionada;


const LLENARTABLAMASCOTAS = async() => {
    listaMascotas = await LISTARMASCOTAS();
    MOSTRARTABLAMASCOTAS();
};

//Función que agrega las celdas de vacunas a la tabla
const MOSTRARTABLAMASCOTAS = async => {
    let filtro = FILTROMASCOTAS.value.toLowerCase();
    TABLAMASCOTAS.innerHTML = '';
    listaMascotas.forEach(mascota => {
        console.log(mascota);

        if (mascota.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAMASCOTAS.insertRow();
            fila.insertCell().innerHTML = mascota.nombre;
            fila.insertCell().innerHTML = mascota.telefono;
            fila.insertCell().innerHTML = mascota.especie;
            fila.insertCell().innerHTML = mascota.raza;
            fila.insertCell().innerHTML = mascota.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';


            botonModificar.addEventListener('click', () => {
                localStorage.setItem('mascotaSeleccionada', JSON.stringify(mascota));
                window.location.href = 'P47-modificar-mascota.html';
            });
            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea borrar la mascota?',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí!, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        ELIMINARMASCOTA(mascota._id);
                    }
                })
            });
            celdaAcciones.appendChild(botonEliminar);
            celdaAcciones.appendChild(botonModificar);
            celdaAcciones.appendChild(foto);
        }
    });
};

LLENARTABLAMASCOTAS();
FILTROMASCOTAS.addEventListener('keyup', MOSTRARTABLAMASCOTAS)