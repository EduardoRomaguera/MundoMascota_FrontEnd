'use strict';

const INPUTNOMBRE = document.querySelector('#txt-nombre-vc');
const INPUTESTADO = document.querySelector('#slt-estado-vc');
const INPUTESPECIE = document.querySelector('#slt-especie-vc')
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');
const INPUTSREQUERIDOS = document.querySelectorAll(':required');

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
    window.location.href = 'P42-vacunas-mantenimiento.html';
})