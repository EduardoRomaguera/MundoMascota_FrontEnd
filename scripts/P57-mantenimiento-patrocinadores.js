"use strict"

const TABLAPATROCINADORES = document.querySelector("#tbl-patrocinadores");
const FILTROPATROCINADORES = document.querySelector('#txt-filtro-patro');
const BTNAGREGARPATRO = document.querySelector("btn-agregar-patro");



const MOSTRARTABLAPATRO = () => {
    let filtro = FILTROPATROCINADORES.value.toLowerCase();
    TABLAPATROCINADORES.innerHTML = '';
    listaPatrocinadores.forEach(patrocinador => {
        if (patrocinador.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAPATROCINADORES.insertRow();
            fila.insertCell().innerHTML = patrocinador.nombre;
            fila.insertCell().innerHTML = patrocinador.fecha;
            fila.insertCell().innerHTML = patrocinador.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('patrocinadorSeleccionado', JSON.stringify(patrocinador));
                window.location.href = 'P97-raza-modificar.html';

            });

            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea borrar el patrocinador?',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí!, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'el patrocinador sido eliminado',
                            'success'
                        )
                    }
                })
            });
            celdaAcciones.appendChild(botonEliminar);
        }
    });
};
MOSTRARTABLAPATRO();
FILTROPATROCINADORES.addEventListener('keyup', MOSTRARTABLAPATRO);
BTNAGREGARPATRO.addEventListener('click', () => {
    window.location.href = 'P97-raza-modificar.html';
})