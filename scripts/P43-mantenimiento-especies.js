'use strict';


const TABLAESPECIES = document.querySelector('#tbl-especies tbody');
const FILTROESPECIES = document.querySelector('#txt-filtro-especies');
const BTNAGREGARESPECIE = document.querySelector('#btn-agregar-especie');
let listaEspecies = [];

const LLENARTABLAESPECIES = async() => {
    listaEspecies = await LISTARESPECIES();
    MOSTRARTABLAESPECIES();
};

//Función que agrega las celdas de vacunas a la tabla
const MOSTRARTABLAESPECIES = async => {
    let filtro = FILTROESPECIES.value.toLowerCase();
    TABLAESPECIES.innerHTML = '';
    listaEspecies.forEach(especie => {
        if (especie.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAESPECIES.insertRow();
            fila.insertCell().innerHTML = especie.nombre;
            fila.insertCell().innerHTML = especie.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('especieSeleccionado', JSON.stringify(especie));
                window.location.href = 'P93-especies-modificar.html';
            });
            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea borrar la especie?',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí!, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'La especie ha sido eliminada',
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

LLENARTABLAESPECIES();
FILTROESPECIES.addEventListener('keyup', MOSTRARTABLAESPECIES)
BTNAGREGARESPECIE.addEventListener('click', () => {
    window.location.href = 'P93-especies-modificar.html';
});