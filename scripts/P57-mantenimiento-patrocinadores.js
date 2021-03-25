'use strict';

const TABLAPATROCINADORES = document.querySelector('#tbl-patrocinadores tbody');

const FILTROPATROCINADORES = document.querySelector('#txt-filtro-patro');

//Función que agrega las celdas de ordenes a la tabla
const MOSTRARTABLAORDENES = () => {
    let filtro = FILTROPATROCINADORES.value.toLowerCase();
    TABLAPATROCINADORES.innerHTML = '';
    listaPatrocinadores.forEach(patrocinador => {
        if (patrocinador.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAPATROCINADORES.insertRow();
            fila.insertCell().innerHTML = patrocinador.nombre;
            fila.insertCell().innerHTML = patrocinador.frase;
            fila.insertCell().innerHTML = patrocinador.fotografia;

            let celdaAcciones = fila.insertCell();

            //let botonSubir = document.createElement('input');
            //botonSubir.type="file";

            let botonRechazar = document.createElement('button');
            botonRechazar.innerText = 'Eliminar';

            botonRechazar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Seguro que desea eliminar al patrocinador?',
                    'showCancelButton': true,
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'Patrocinador eliminado',
                            'success'
                        )
                    }
                })
            });
            //celdaAcciones.appendChild(botonSubir);
            celdaAcciones.appendChild(botonRechazar);

        }
    });
};


MOSTRARTABLAORDENES();
FILTROPATROCINADORES.addEventListener('keyup', MOSTRARTABLAORDENES);