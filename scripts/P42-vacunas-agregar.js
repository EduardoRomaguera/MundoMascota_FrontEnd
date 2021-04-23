'use strict';

const INPUTNOMBRE = document.querySelector('#txt-nombre-vc');
const INPUTESTADO = document.querySelector('#slt-estado-vc');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');

//Funcion que registra la especie 
const AGREGARVACUNA = () => {
    let nombre = INPUTNOMBRE.value;
    let estado = INPUTESTADO.value;
    REGISTRARVACUNA(nombre, especie, estado);
    // ACCIONUSUARIO('Agregar especie');
};

//Valida que los inputs no esten vacios.
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
        AGREGARVACUNA();

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo guardar la vacuna',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};