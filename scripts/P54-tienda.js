'use strict';

// Codigo para tabla de servicios, copiado de P22-Mis servicios

const TABLASERVICIOSSTEPH = document.querySelector('#tbl-serviciosSteph tbody');
const TABLASERVICIOSPACO = document.querySelector('#tbl-serviciosPaco tbody');
const TABLASERVICIOSLAURA = document.querySelector('#tbl-serviciosLaura tbody');
const TABLASERVICIOSPAO = document.querySelector('#tbl-serviciosPao tbody');
const TABLASERVICIOSPITUFO = document.querySelector('#tbl-serviciosPitufo tbody');
const TABLASERVICIOSANDREA = document.querySelector('#tbl-serviciosAndrea tbody');

//const FILTROSERVICIOS = document.querySelector('#txt-filtro-servicios');

//Función que agrega las celdas de servicios a la tabla
const MOSTRARTABLASERVICIOSSTEPH = () => {
    //    let filtro = FILTROSERVICIOS.value.toLowerCase();
    TABLASERVICIOSSTEPH.innerHTML = '';
    listaMisServicios.forEach(servicios => {
        //        if (servicios.nombre.toLowerCase().includes(filtro)) {

        let fila = TABLASERVICIOSSTEPH.insertRow();
        fila.insertCell().innerHTML = servicios.nombre;
        fila.insertCell().innerHTML = servicios.descripcion;
        fila.insertCell().innerHTML = servicios.costo;

        let celdaAcciones = fila.insertCell();

        let botonComprar = document.createElement('button');
        botonComprar.innerText = "🛒";

        celdaAcciones.appendChild(botonComprar);

        botonComprar.setAttribute('class', 'btn-comprar');

        botonComprar.addEventListener('click', () => {
            Swal.fire({
                'icon': 'question',
                'text': '¿Adquirir servicio?',
                'showCancelButton': true,
                'confirmButtonText': '   Sí    ',
                'confirmButtonColor': '#007552',
                'cancelButtonColor': '#d33',
                'cancelButtonText': 'Cancelar',
            })
        });


    })
};

const MOSTRARTABLASERVICIOSPACO = () => {
    //    let filtro = FILTROSERVICIOS.value.toLowerCase();
    TABLASERVICIOSPACO.innerHTML = '';
    listaServiciosPaco.forEach(servicios => {
        //        if (servicios.nombre.toLowerCase().includes(filtro)) {

        let fila = TABLASERVICIOSPACO.insertRow();
        fila.insertCell().innerHTML = servicios.nombre;
        fila.insertCell().innerHTML = servicios.descripcion;
        fila.insertCell().innerHTML = servicios.costo;

        let celdaAcciones = fila.insertCell();

        let botonComprar = document.createElement('button');
        botonComprar.innerText = "🛒";

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

const MOSTRARTABLASERVICIOSLAURA = () => {
    //    let filtro = FILTROSERVICIOS.value.toLowerCase();
    TABLASERVICIOSLAURA.innerHTML = '';
    listaServiciosLaura.forEach(servicios => {
        //        if (servicios.nombre.toLowerCase().includes(filtro)) {

        let fila = TABLASERVICIOSLAURA.insertRow();
        fila.insertCell().innerHTML = servicios.nombre;
        fila.insertCell().innerHTML = servicios.descripcion;
        fila.insertCell().innerHTML = servicios.costo;

        let celdaAcciones = fila.insertCell();

        let botonComprar = document.createElement('button');
        botonComprar.innerText = "🛒";

        celdaAcciones.appendChild(botonComprar);

        botonComprar.setAttribute('class', 'btn-comprar');

        botonComprar.addEventListener('click', () => {
            Swal.fire({
                'icon': 'question',
                'text': '¿adquirir este servicio?',
                'showCancelButton': true,
                'confirmButtonText': '   Sí    ',
                'confirmButtonColor': '#007552',
                'cancelButtonColor': '#d33',
                'cancelButtonText': 'Cancelar',
            })
        });


    })
};

const MOSTRARTABLASERVICIOSPAO = () => {
    //    let filtro = FILTROSERVICIOS.value.toLowerCase();
    TABLASERVICIOSPAO.innerHTML = '';
    listaServiciosPao.forEach(servicios => {
        //        if (servicios.nombre.toLowerCase().includes(filtro)) {

        let fila = TABLASERVICIOSPAO.insertRow();
        fila.insertCell().innerHTML = servicios.nombre;
        fila.insertCell().innerHTML = servicios.descripcion;
        fila.insertCell().innerHTML = servicios.costo;

        let celdaAcciones = fila.insertCell();

        let botonComprar = document.createElement('button');
        botonComprar.innerText = "🛒";

        celdaAcciones.appendChild(botonComprar);

        botonComprar.setAttribute('class', 'btn-comprar');

        botonComprar.addEventListener('click', () => {
            Swal.fire({
                'icon': 'question',
                'text': '¿Adquirir este servicio?',
                'showCancelButton': true,
                'confirmButtonText': '   Sí    ',
                'confirmButtonColor': '#007552',
                'cancelButtonColor': '#d33',
                'cancelButtonText': 'Cancelar',
            })
        });


    })
};

const MOSTRARTABLASERVICIOPITUFO = () => {
    //    let filtro = FILTROSERVICIOS.value.toLowerCase();
    TABLASERVICIOSPITUFO.innerHTML = '';
    listaServiciosPitufo.forEach(servicios => {
        //        if (servicios.nombre.toLowerCase().includes(filtro)) {

        let fila = TABLASERVICIOSPITUFO.insertRow();
        fila.insertCell().innerHTML = servicios.nombre;
        fila.insertCell().innerHTML = servicios.descripcion;
        fila.insertCell().innerHTML = servicios.costo;

        let celdaAcciones = fila.insertCell();

        let botonComprar = document.createElement('button');
        botonComprar.innerText = "🛒";

        celdaAcciones.appendChild(botonComprar);

        botonComprar.setAttribute('class', 'btn-comprar');

        botonComprar.addEventListener('click', () => {
            Swal.fire({
                'icon': 'question',
                'text': '¿Adquirir este servicio?',
                'showCancelButton': true,
                'confirmButtonText': '   Sí    ',
                'confirmButtonColor': '#007552',
                'cancelButtonColor': '#d33',
                'cancelButtonText': 'Cancelar',
            })
        });


    })
};


const MOSTRARTABLASERVICIOANDREA = () => {
    //    let filtro = FILTROSERVICIOS.value.toLowerCase();
    TABLASERVICIOSANDREA.innerHTML = '';
    listaServiciosAndrea.forEach(servicios => {
        //        if (servicios.nombre.toLowerCase().includes(filtro)) {

        let fila = TABLASERVICIOSANDREA.insertRow();
        fila.insertCell().innerHTML = servicios.nombre;
        fila.insertCell().innerHTML = servicios.descripcion;
        fila.insertCell().innerHTML = servicios.costo;

        let celdaAcciones = fila.insertCell();

        let botonComprar = document.createElement('button');
        botonComprar.innerText = "🛒";

        celdaAcciones.appendChild(botonComprar);

        botonComprar.setAttribute('class', 'btn-comprar');

        botonComprar.addEventListener('click', () => {
            Swal.fire({
                'icon': 'question',
                'text': '¿Adquirir este servicio?',
                'showCancelButton': true,
                'confirmButtonText': '   Sí    ',
                'confirmButtonColor': '#007552',
                'cancelButtonColor': '#d33',
                'cancelButtonText': 'Cancelar',
            })
        });


    })
};

MOSTRARTABLASERVICIOSSTEPH();
MOSTRARTABLASERVICIOSPACO();
MOSTRARTABLASERVICIOSLAURA();
MOSTRARTABLASERVICIOSPAO();
MOSTRARTABLASERVICIOPITUFO();
MOSTRARTABLASERVICIOANDREA();

//🛒
//●