'use strict';

const TABLAORDENES = document.querySelector('#tbl-ordenes tbody');

const FILTROORDENES = document.querySelector('#txt-filtro-ordenes');

const BTNDENUNCIA = document.querySelector('#btn-denuncia');

//Función que agrega las celdas de ordenes a la tabla
const MOSTRARTABLAORDENES = () => {
    let filtro = FILTROORDENES.value.toLowerCase();
    TABLAORDENES.innerHTML = '';
    listaHistorialOrdenes.forEach(ordenes => {
        if (ordenes.servicio.toLowerCase().includes(filtro)) {

            let fila = TABLAORDENES.insertRow();
            fila.insertCell().innerHTML = ordenes.cliente;
            fila.insertCell().innerHTML = ordenes.mascota;
            fila.insertCell().innerHTML = ordenes.especie;
            fila.insertCell().innerHTML = ordenes.raza;
            fila.insertCell().innerHTML = ordenes.servicio;

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

            let botonDenunciar = document.createElement('button');
            botonDenunciar.innerText = 'Denunciar';

            botonDenunciar.addEventListener('click', () => {
                window.location.href = 'P29-reportar-denuncias.html';
            })

            celdaAcciones.appendChild(botonDenunciar);
            celdaAcciones.appendChild(botonModificar);

        }
    });
};


MOSTRARTABLAORDENES();
FILTROORDENES.addEventListener('keyup', MOSTRARTABLAORDENES);