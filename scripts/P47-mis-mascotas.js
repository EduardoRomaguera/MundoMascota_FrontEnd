'use strict';

const TABLAMASCOTAS = document.querySelector('#tbl-mascotas tbody');
const FILTROMASCOTAS = document.querySelector('#txt-filtro-mascotas');
let listaMascotas = [];

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
        if (vacuna.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAMASCOTAS.insertRow();
            fila.insertCell().innerHTML = mascota.imagen;
            fila.insertCell().innerHTML = mascota.nombre;
            fila.insertCell().innerHTML = mascota.telefono;
            fila.insertCell().innerHTML = mascota.especie;
            fila.insertCell().innerHTML = mascota.raza;
            fila.insertCell().innerHTML = mascota.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

            botonModificar.addEventListener('click', () => {
                localStorage.setItem('vacunaSeleccionado', JSON.stringify(vacuna));
                window.location.href = 'P42-vacunas-modificar.html';
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
                        ELIMINARVACUNA(vacuna._id);
                    }
                })
            });
            celdaAcciones.appendChild(botonEliminar);
            celdaAcciones.appendChild(botonModificar);
        }
    });
};

LLENARTABLAMASCOTAS();
FILTROVACUNAS.addEventListener('keyup', MOSTRARTABLAMASCOTAS)
BTNAGREGARVACUNA.addEventListener('click', () => {
    window.location.href = 'P42-vacunas-agregar.html';
})