'use strict';

const TABLAORDENES = document.querySelector('#tbl-ordenes tbody');

const FILTROORDENES = document.querySelector('#txt-filtro-ordenes');

//Función que agrega las celdas de ordenes a la tabla
const MOSTRARTABLAORDENES = () => {
    let filtro = FILTROORDENES.value.toLowerCase();
    TABLAORDENES.innerHTML = '';
    listaMisOrdenes.forEach(ordenes => {
        if (ordenes.servicio.toLowerCase().includes(filtro)) {

            let fila = TABLAORDENES.insertRow();
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




MOSTRARTABLAORDENES();
FILTROORDENES.addEventListener('keyup', MOSTRARTABLAORDENES);