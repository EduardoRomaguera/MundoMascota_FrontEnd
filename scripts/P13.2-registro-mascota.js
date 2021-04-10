'use strict';

//Validación de espacios de inicio de sesión
const inputNombre = document.querySelector('#txt-nombre');
const sltEspecie = document.querySelector('#slt-especie');
const sltRaza = document.querySelector('#slt-raza');
const inputTelefono = document.querySelector('#txt-telefono');
const sltVacuna = document.querySelector('#slt-vacuna');
const sltVacuna2 = document.querySelector('#slt-vacuna2');
const sltPadecimiento = document.querySelector('#slt-padecimiento');
const sltPadecimiento2 = document.querySelector('#slt-padecimiento2');
const btnRegistro = document.querySelector('#btn-registro');

const validarRegistro = () => {
    let error = false;

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error');
    } else {
        inputNombre.classList.remove('error');
    }

    if (sltEspecie.value == '') {
        error = true;
        sltEspecie.classList.add('error');
    } else {
        sltEspecie.classList.remove('error');
    }

    if (sltRaza.value == '') {
        error = true;
        sltRaza.classList.add('error');
    } else {
        sltRaza.classList.remove('error');
    }

    if (inputTelefono.value == '') {
        error = true;
        inputTelefono.classList.add('error');
    } else {
        inputTelefono.classList.remove('error');
    }

    if (sltVacuna.value == '') {
        error = true;
        sltVacuna.classList.add('error');
    } else {
        sltVacuna.classList.remove('error');
    }

    if (sltVacuna2.value == '') {
        error = true;
        sltVacuna2.classList.add('error');
    } else {
        sltVacuna2.classList.remove('error');
    }

    if (sltPadecimiento.value == '') {
        error = true;
        sltPadecimiento.classList.add('error');
    } else {
        sltPadecimiento.classList.remove('error');
    }

    if (sltPadecimiento2.value == '') {
        error = true;
        sltPadecimiento2.classList.add('error');
    } else {
        sltPadecimiento2.classList.remove('error');
    }

    if (error == false) {
        window.location.href = 'P47.2-mis-mascotas.html';
    } else {
        Swal.fire({
            imageUrl: "images/error.png",
            title: "¡OOPS! Algo pasó aqui",
            text: "Se dejó un espacio vacio",
            confirmButtonText: "Intentar de nuevo"
        });
    }
};

btnRegistro.addEventListener('click', validarRegistro);