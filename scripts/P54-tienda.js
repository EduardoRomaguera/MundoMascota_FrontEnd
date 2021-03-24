'use strict';

// Codigo para tabla de servicios, copiado de P22-Mis servicios

const TABLASERVICIOS = document.querySelector('#tbl-servicios tbody');

//const FILTROSERVICIOS = document.querySelector('#txt-filtro-servicios');

//Función que agrega las celdas de servicios a la tabla
const MOSTRARTABLASERVICIOS = () => {
//    let filtro = FILTROSERVICIOS.value.toLowerCase();
    TABLASERVICIOS.innerHTML = '';
    listaMisServicios.forEach(servicios => {
//        if (servicios.nombre.toLowerCase().includes(filtro)) {

            let fila = TABLASERVICIOS.insertRow();
            fila.insertCell().innerHTML = servicios.nombre;
            fila.insertCell().innerHTML = servicios.descripcion;
            fila.insertCell().innerHTML = servicios.costo;
            let celdaAcciones = fila.insertCell();

            let botonComprar = document.createElement('button');
            botonComprar.innerText = "●";
            celdaAcciones.appendChild(botonComprar);
            botonComprar.setAttribute('class', 'btn-comprar');
            botonComprar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'question',
                    'text': '¿Deseas adquirir este servicio?',
                    'showCancelButton': true,
                    'confirmButtonText': '   Sí    ',
                    'confirmButtonColor': '#007552',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                })
            });


        })
    };
MOSTRARTABLASERVICIOS();