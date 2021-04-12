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
            text: "Se dejó un espacio vacio",
            confirmButtonText: "Intentar de nuevo"
        });
    }
};

BTNREGISTRO.addEventListener('click', validarRegistro);

function add_vacunas() {
    var container = document.getElementById('div-vacuna'),
        input = document.createElement('select');
    input.classList.add('input-formularios2');

    input.innerHTML = document.getElementById('slt-vacuna').innerHTML;
    input.setAttribute('type', 'select');

    var btns = document.createElement("input");

    btns.setAttribute("type", "button");
    btns.setAttribute("value", "Borrar");
    btns.setAttribute("name", "dlete");

    container.appendChild(input);
    container.appendChild(btns);

    btns.onclick = function remove_field() {
        input.parentNode.removeChild(input);
        btns.parentNode.removeChild(btns);
    }

};

function add_padecimientos() {
    var container = document.getElementById('div-padecimiento'),
        input = document.createElement('select');
    input.classList.add('input-formularios2');

    input.innerHTML = document.getElementById('slt-padecimiento').innerHTML;
    input.setAttribute('type', 'select');

    var btns = document.createElement("input");

    btns.setAttribute("type", "button");
    btns.setAttribute("value", "Borrar");
    btns.setAttribute("name", "dlete");

    container.appendChild(input);
    container.appendChild(btns);

    btns.onclick = function remove_field() {
        input.parentNode.removeChild(input);
        btns.parentNode.removeChild(btns);
    }

};

function add_fotografia() {
    var container = document.getElementById('div-fotografia'),
        input = document.createElement('input');

    input.setAttribute("type", "file");
    input.setAttribute("id", "subir-foto");
    input.setAttribute("accept", "Image/*");
    input.setAttribute("name", "img");

    var btns = document.createElement("input");

    btns.setAttribute("type", "button");
    btns.setAttribute("value", "Borrar");
    btns.setAttribute("name", "dlete");

    container.appendChild(input);
    container.appendChild(btns);

    btns.onclick = function remove_field() {
        input.parentNode.removeChild(input);
        btns.parentNode.removeChild(btns);
    }

};