'use strict';

//Validación de espacios de inicio de sesión
const INPUTNOMBRE = document.querySelector('#txt-nombre');
const SLTESPECIES = document.querySelector('#slt-especie');
const SLTRAZAS = document.querySelector('#slt-raza');
const INPUTTELEFONO = document.querySelector('#num-telefono');
const SLTVACUNA = document.querySelector('#slt-vacuna');
const SLTVACUNA2 = document.querySelector('#slt-vacuna2');
const SLTPADECIMIENTO = document.querySelector('#slt-padecimiento');
const SLTPADECIMIENTO2 = document.querySelector('#slt-padecimiento2');
const BTNREGISTRO = document.querySelector('#btn-registro');

const validarRegistro = () => {
    let error = false;

    if (INPUTNOMBRE.value == '') {
        error = true;
        INPUTNOMBRE.classList.add('error');
    } else {
        INPUTNOMBRE.classList.remove('error');
    }

    if (SLTESPECIES.value == '') {
        error = true;
        SLTESPECIES.classList.add('error');
    } else {
        SLTESPECIES.classList.remove('error');
    }

    if (SLTRAZAS.value == '') {
        error = true;
        SLTRAZAS.classList.add('error');
    } else {
        SLTRAZAS.classList.remove('error');
    }

    if (INPUTTELEFONO.value == '') {
        error = true;
        INPUTTELEFONO.classList.add('error');
    } else {
        INPUTTELEFONO.classList.remove('error');
    }

    if (SLTVACUNA.value == '') {
        error = true;
        SLTVACUNA.classList.add('error');
    } else {
        SLTVACUNA.classList.remove('error');
    }

    if (SLTVACUNA2.value == '') {
        error = true;
        SLTVACUNA2.classList.add('error');
    } else {
        SLTVACUNA2.classList.remove('error');
    }

    if (SLTPADECIMIENTO.value == '') {
        error = true;
        SLTPADECIMIENTO.classList.add('error');
    } else {
        SLTPADECIMIENTO.classList.remove('error');
    }

    if (SLTPADECIMIENTO2.value == '') {
        error = true;
        SLTPADECIMIENTO2.classList.add('error');
    } else {
        SLTPADECIMIENTO2.classList.remove('error');
    }

    if (error == false) {
        window.location.href = 'P47-mis-mascotas1.html';
    } else {
        Swal.fire({
            imageUrl: "images/error.png",
            title: "¡OOPS! Algo pasó aqui",
            text: "Dejaste un espacio vacio",
            confirmButtonText: "Intentar de nuevo"
        });
    }
};

BTNREGISTRO.addEventListener('click', validarRegistro);