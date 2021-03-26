'use strict';

let usuario;
const btnIniciarSesion = document.querySelector('#btn-iniciar-sesion');
const btnCerrarSesion = document.querySelector('#btn-cerrar-sesion');
const btnPerfil = document.querySelector('#btn-perfil');
const cerrarSesion = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = 'P01-homepage.html';
};


if (sessionStorage.getItem('usuarioConectado')) {
    usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    btnIniciarSesion.classList.add('ocultar');
} else {
    btnCerrarSesion.classList.add('ocultar');
    btnPerfil.classList.add('ocultar');
}


btnCerrarSesion.addEventListener('click', () => {
    cerrarSesion();
});