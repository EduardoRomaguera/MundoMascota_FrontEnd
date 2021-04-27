'use strict';

const INPUTNOMBRE = document.querySelector('#txt-nombre-sv');
const INPUTDESCRIPCION = document.querySelector('#txt-descripcion-sv');
const INPUTCOSTO = document.querySelector('#num-costo-sv');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');
const INPUTSREQUERIDOS = document.querySelectorAll(':required');
const INPUTESPECIE = document.getElementById('slt-especie-vc');
let lista = [];

//Funcion que registra el servicio 
const AGREGARSERVICIO = () => {
    let nombre = INPUTNOMBRE.value;
    let descripcion = INPUTDESCRIPCION.value;
    REGISTRARSERVICIO(nombre, descripcion);

};

//Valida que los inputs no esten vacios.
const VALIDAR = () => {

    let error = false;
    let inputRequeridos = INPUTSREQUERIDOS;
    inputRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (error == false) {
        AGREGARSERVICIO();

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo agregar el servicio',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};
INPUTSREQUERIDOS.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value == '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
});

BTNGUARDAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P44-catalogo-servicios.html';
})