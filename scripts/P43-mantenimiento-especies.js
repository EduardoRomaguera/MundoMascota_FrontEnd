'use strict';


const TABLAESPECIES = document.querySelector('#tbl-especies tbody');
const FILTROESPECIES = document.querySelector('#txt-filtro-especies');
const BTNAGREGESPECIE = document.querySelector('#btn-agregar-especie');
let listaEspecies = [];

const LLENARTABLAESPECIES = async() => {
    listaVacunas = await LISTARESPECIES();
    MOSTRARTABLAESPECIES();
};

//Función que agrega las celdas de vacunas a la tabla
const MOSTRARTABLAESPECIES = async => {
    let filtro = FILTROESPECIES.value.toLowerCase();
    TABLAESPECIES.innerHTML = '';
    listaVacunas.forEach(vacuna => {
        if (vacuna.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAVACUNAS.insertRow();
            fila.insertCell().innerHTML = especie.nombre;
            fila.insertCell().innerHTML = especie.estado;

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
FILTROVACUNAS.addEventListener('keyup', MOSTRARTABLAESPECIES)
BTNAGREGARESPECIE.addEventListener('click', () => {
    window.location.href = 'P93-especies-modificar.html';
})