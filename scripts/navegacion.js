'use strict';

let usuario;
const bntCerrarSesion = document.querySelector('#btn-cerrar-sesion');
const cerrarSesion = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = 'index.html';
};

bntCerrarSesion.addEventListener('click', () => {
    cerrarSesion();
});



if (sessionStorage.getItem('usuarioConectado')) {
    usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
} else {
    window.location.href = 'P01-homepage.html';
}