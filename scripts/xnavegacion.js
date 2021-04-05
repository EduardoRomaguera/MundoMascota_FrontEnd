'use strict';

let usuario;
const btnIniciarSesion = document.querySelector('#btn-iniciar-sesion');
const btnCerrarSesion = document.querySelector('#btn-cerrar-sesion');
const cerrarSesion = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = 'P01-homepage.html';
};


if (sessionStorage.getItem('usuarioConectado')) {
    usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    btnIniciarSesion.classList.add('ocultar');
} else {
    window.location.href = 'P01-homepage.html';
}


btnCerrarSesion.addEventListener('click', () => {
    cerrarSesion();
});
