'use strict';

const TABLADENUNCIAS = document.querySelector('#tbl-denuncias tbody');
const FILTROUSUARIOS = document.querySelector('#txt-filtro-usuarios-baneados');

//Función que agrega las celdas de razas a la tabla
const MOSTRARTABLADENUNCIAS = () => {
    let filtro = FILTROUSUARIOS.value.toLowerCase();
    TABLADENUNCIAS.innerHTML = '';
    listaUsuariosReportados.forEach(reporte => {
        if (reporte.Usuario.toLowerCase().includes(filtro)) {

            let fila = TABLADENUNCIAS.insertRow();
            fila.insertCell().innerHTML = reporte.Usuario;
            fila.insertCell().innerHTML = reporte.Razon;
            fila.insertCell().innerHTML = reporte.Descripcion;

            let celdaAcciones = fila.insertCell();

            let botonBanear = document.createElement('button');
            botonBanear.innerText = 'Bloquear';

            botonBanear.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea banear al usuario?',
                    'showCancelButton': true,
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'El usuario ha sido baneado',
                            'success'
                        )
                    }
                })
            });

            let botonDescartar = document.createElement('button');
            botonDescartar.innerText = 'Descartar';

            botonDescartar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea descartar la denuncia?',
                    'showCancelButton': true,
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'La denuncia ha sido descartada',
                            'success'
                        )
                    }
                })
            });
            celdaAcciones.appendChild(botonDescartar);
            celdaAcciones.appendChild(botonBanear);
        }
    });
};
MOSTRARTABLADENUNCIAS();
FILTROUSUARIOS.addEventListener('keyup', MOSTRARTABLADENUNCIAS);