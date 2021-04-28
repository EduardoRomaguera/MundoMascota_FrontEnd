'use strict';

const TABLATARJETAS = document.querySelector('#tbl-tarjetas');
const BTNAGRETARJETA = document.querySelector('#btn-agregar-tarjeta');
let correo;
let listaTarjetas = [];

const LLENARTABLATARJETAS = async() => {
    listaTarjetas = await LISTARTARJETAS();
    MOSTRARTABLATARJETAS();
};

//Función que agrega las celdas de vacunas a la tabla
const MOSTRARTABLATARJETAS = async => {

    TABLATARJETAS.innerHTML = '';
    listaTarjetas.forEach(tarjeta => {
        if (tarjeta.idUsuario == correo) {

            let fila = TABLATARJETAS.insertRow();
            fila.insertCell().innerHTML = tarjeta.nombreTarjeta;
            fila.insertCell().innerHTML = tarjeta.numero;
            fila.insertCell().innerHTML = tarjeta.mesEspiracion;
            fila.insertCell().innerHTML = tarjeta.annoExpiracion;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

            botonModificar.addEventListener('click', () => {
                localStorage.setItem('tarjetaSeleccionada', JSON.stringify(tarjeta));
                window.location.href = 'P42-vacunas-modificar.html';
            });
            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea borrar la tarjeta?',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí!, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        ELIMINARTARJETA(tarjeta._id);
                    }
                })
            });
            celdaAcciones.appendChild(botonEliminar);
            celdaAcciones.appendChild(botonModificar);
        }
    });
};

if (sessionStorage.getItem('usuarioConectado')) {
    correo = JSON.parse(sessionStorage.getItem('correo'));
} else {
    window.location.href = 'index.html';
};
LLENARTABLATARJETAS();
BTNAGRETARJETA.addEventListener('click', () => {
    window.location.href = 'P59-agregar-tarjeta.html';
})