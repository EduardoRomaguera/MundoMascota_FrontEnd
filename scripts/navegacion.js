'use strict';
window.onload = function() {OcultarInicioSesionBoton()};

let usuario;
const btnIniciarSesion = document.querySelector('#btn-iniciar-sesion');
const btnCerrarSesion = document.querySelector('#btn-cerrar-sesion');
const cerrarSesion = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = 'P01-homepage.html';
};

const OcultarInicioSesionBoton = () => {
    console.log("hello");
    if (sessionStorage.getItem('usuarioConectado')) {
        usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
        btnIniciarSesion.classList.add('ocultar');
    } else {
        window.location.href = 'P01-homepage.html';
    }
};

const MOSTRARPAGINA = () => {
    switch (usuario.tipo) {
        case 'Administrador':
            window.location.href = 'P49-principal-administrador.html';
            break;

        case 'Proveedor':
            window.location.href = 'P19-principal-proveedor.html';
            break;

        case 'Cliente':
            window.location.href = 'P09-principal-cliente.html';
            break;
    }
};


btnCerrarSesion.addEventListener('click', () => {
    cerrarSesion();
});