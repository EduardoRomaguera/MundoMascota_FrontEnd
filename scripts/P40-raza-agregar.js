'use strict'
let razaSeleccionado;
const INPUTNOMBRE = document.querySelector('#txt-nombre-rz');
const INPUTESPECIE = document.querySelector('#slt-especie-rz');
const INPUTESTADO = document.querySelector('#slt-estado-rz');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');

//Funcion que registra la raza 
const AGREGARRAZA = () => {
    let nombre = INPUTNOMBRE.value;
    let especie = INPUTESPECIE.value;
    let estado = INPUTESTADO.value;

    REGISTRARRAZA(nombre, estado);
    // ACCIONUSUARIO('Agregar especie');
};
const VALIDAR = () => {

    let error = false;
    let inputsRequeridos = document.querySelectorAll('.input-formularios :required');
    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (error == false) {
        AGREGARRAZA();

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo guardar la raza',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};
BTNGUARDAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P39-mantenimiento-catalogos.html';
})