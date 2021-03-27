'use strict';

const TABLAORDENES1 = document.querySelector('#tbl-ordenes1 tbody');
const TABLAORDENES2 = document.querySelector('#tbl-ordenes2 tbody');
const TABLAORDENES3 = document.querySelector('#tbl-ordenes3 tbody');


const FILTROORDENES1 = document.querySelector('#txt-filtro-ordenes1');
const FILTROORDENES2 = document.querySelector('#txt-filtro-ordenes2');
const FILTROORDENES3 = document.querySelector('#txt-filtro-ordenes3');



//Función que agrega las celdas de ordenes a la tabla
const MOSTRARTABLAORDENES1 = () => {
    let filtro = FILTROORDENES1.value.toLowerCase();
    TABLAORDENES1.innerHTML = '';
    listaMisOrdenes1.forEach(ordenes => {
        if (ordenes.servicio.toLowerCase().includes(filtro)) {

            let fila = TABLAORDENES1.insertRow();
            fila.insertCell().innerHTML = ordenes.mascota;
            fila.insertCell().innerHTML = ordenes.proveedor;
            fila.insertCell().innerHTML = ordenes.servicio;
            fila.insertCell().innerHTML = ordenes.costo;
            fila.insertCell().innerHTML = ordenes.estado;

            let celdaAcciones = fila.insertCell();


            let botonCalificar = document.createElement('button');
            botonCalificar.innerText = 'Calificar';

            botonCalificar.addEventListener('click', () => {
                window.location.href = 'P58-calificar-proveedor.html';
            })

            let botonPagar = document.createElement('button');
            botonPagar.innerText = 'Pagar';

            botonPagar.addEventListener('click', () => {
                window.location.href = 'P17-pago-orden.html';
            })


            let botonDenunciar = document.createElement('button');
            botonDenunciar.innerText = 'Denunciar';

            botonDenunciar.addEventListener('click', () => {
                window.location.href = 'P29.1-reportar-denuncias.html';
            })



        }
    });
};


//Función que agrega las celdas de ordenes a la tabla
const MOSTRARTABLAORDENES2 = () => {
    let filtro = FILTROORDENES2.value.toLowerCase();
    TABLAORDENES2.innerHTML = '';
    listaMisOrdenes2.forEach(ordenes => {
        if (ordenes.servicio.toLowerCase().includes(filtro)) {

            let fila = TABLAORDENES2.insertRow();
            fila.insertCell().innerHTML = ordenes.mascota;
            fila.insertCell().innerHTML = ordenes.proveedor;
            fila.insertCell().innerHTML = ordenes.servicio;
            fila.insertCell().innerHTML = ordenes.costo;
            fila.insertCell().innerHTML = ordenes.estado;

            let celdaAcciones = fila.insertCell();


            let botonCalificar = document.createElement('button');
            botonCalificar.innerText = 'Calificar';

            botonCalificar.addEventListener('click', () => {
                window.location.href = 'P58-calificar-proveedor.html';
            })

            let botonPagar = document.createElement('button');
            botonPagar.innerText = 'Pagar';

            botonPagar.addEventListener('click', () => {
                window.location.href = 'P17-pago-orden.html';
            })


            let botonDenunciar = document.createElement('button');
            botonDenunciar.innerText = 'Denunciar';

            botonDenunciar.addEventListener('click', () => {
                window.location.href = 'P29.1-reportar-denuncias.html';
            })

            celdaAcciones.appendChild(botonPagar);


        }
    });
};


//Función que agrega las celdas de ordenes a la tabla
const MOSTRARTABLAORDENES3 = () => {
    let filtro = FILTROORDENES3.value.toLowerCase();
    TABLAORDENES3.innerHTML = '';
    listaMisOrdenes3.forEach(ordenes => {
        if (ordenes.servicio.toLowerCase().includes(filtro)) {

            let fila = TABLAORDENES3.insertRow();
            fila.insertCell().innerHTML = ordenes.mascota;
            fila.insertCell().innerHTML = ordenes.proveedor;
            fila.insertCell().innerHTML = ordenes.servicio;
            fila.insertCell().innerHTML = ordenes.costo;
            fila.insertCell().innerHTML = ordenes.estado;

            let celdaAcciones = fila.insertCell();


            let botonCalificar = document.createElement('button');
            botonCalificar.innerText = 'Calificar';

            botonCalificar.addEventListener('click', () => {
                window.location.href = 'P58-calificar-proveedor.html';
            })

            let botonPagar = document.createElement('button');
            botonPagar.innerText = 'Pagar';

            botonPagar.addEventListener('click', () => {
                window.location.href = 'P17-pago-orden.html';
            })


            let botonDenunciar = document.createElement('button');
            botonDenunciar.innerText = 'Denunciar';

            botonDenunciar.addEventListener('click', () => {
                window.location.href = 'P29.1-reportar-denuncias.html';
            })


            celdaAcciones.appendChild(botonCalificar);
            celdaAcciones.appendChild(botonDenunciar);

        }
    });
};




if (sessionStorage.getItem('usuarioConectado')) {
    let usuario;
    usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    sessionStorage.getItem('usuarioConectado')
    switch (usuario.tipo) {
        case 'Proveedor':
            window.location.href = 'P26-historial-ordenes.html';
            break;
    }
};




MOSTRARTABLAORDENES1();
MOSTRARTABLAORDENES2();
MOSTRARTABLAORDENES3();


FILTROORDENES1.addEventListener('keyup', MOSTRARTABLAORDENES1);
FILTROORDENES2.addEventListener('keyup', MOSTRARTABLAORDENES2);
FILTROORDENES3.addEventListener('keyup', MOSTRARTABLAORDENES3);