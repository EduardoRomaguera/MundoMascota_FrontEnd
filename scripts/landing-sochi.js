'use strict';
const btnIniciar = document.querySelector('#btn');
const redireccionar = () => {
    window.location.href = 'index.html'
}
btnIniciar.addEventListener('click', () => {
    redireccionar();
});