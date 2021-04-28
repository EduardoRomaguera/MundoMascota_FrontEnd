'use strict';


const TABLATARJETAS = document.querySelector('#tbl-vacunas tbody');
const FILTROTARJETAS = document.querySelector('#txt-filtro-vacunas');
const BTNAGRETARJETA = document.querySelector('#btn-agregar-vacuna');
let listaTarjetas = [];

const LLENARTABLATARJETAS = async() => {
    listaTarjetas = await LISTARTARJETAS();
    MOSTRARTABLATARJETAS();
};

//Función que agrega las celdas de vacunas a la tabla
const MOSTRARTABLATARJETAS = async => {
    let filtro = FILTROVACUNAS.value.toLowerCase();
    TABLAVACUNAS.innerHTML = '';
    listaTarjetas.forEach(tarjeta => {
        if (tarjeta.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAVACUNAS.insertRow();
            fila.insertCell().innerHTML = tarjeta.nombre;
            fila.insertCell().innerHTML = vacuna.especie;
            fila.insertCell().innerHTML = vacuna.estado;

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
                    'text': '¿Está seguro que desea borrar la vacuna?',
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

LLENARTABLATARJETAS();
FILTROTARJETAS.addEventListener('keyup', MOSTRARTABLATARJETAS)
BTNAGRETARJETA.addEventListener('click', () => {
    window.location.href = 'P59-agregar-tarjeta.html';
})