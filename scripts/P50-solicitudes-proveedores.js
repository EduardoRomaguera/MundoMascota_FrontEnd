"use strict"

const TABLAPENDIENTES = document.querySelector("#tbl-usuriosPendi");
const FILTROPENDIENTES = document.querySelector('#txt-filtro-soli');


const MOSTRARTABLAPENDI = () => {
    let filtro = FILTROPENDIENTES.value.toLowerCase();
    TABLAPENDIENTES.innerHTML = '';
    listaUsuariosPendiente.forEach(Usuario => {
        if (Pendiente.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLAPENDIENTES.insertRow();
            fila.insertCell().innerHTML = Usuario.nombre;
            fila.insertCell().innerHTML = Usuario.correo;
            fila.insertCell().innerHTML = Usuario.nacimiento;
            fila.insertCell().innerHTML = Usuario.tipo;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Aceptar';

            botonModificar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea aceptar a este usuario?',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí!, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'correo de acceso enviado',
                            'success'
                        )
                    }
                })

            });

            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea rechazar la solicitud?',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí!, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'el proveedor ha sido rechazado',
                            'success'
                        )
                    }
                })
            });
            celdaAcciones.appendChild(botonEliminar);
        }
    });
};
MOSTRARTABLAPENDI();
FILTROPENDIENTES.addEventListener('keyup', MOSTRARTABLAPENDI);