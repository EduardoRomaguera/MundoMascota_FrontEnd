'use strict'
let razaSeleccionado;
const INPUTNOMBRE = document.querySelector('#txt-nombre-pd');
const INPUTESPECIE = document.querySelector('#txt-especie-pd');
const INPUTESTADO = document.querySelector('#txt-estado-pd');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');

const LLENARFORMULARIO = () => {
    INPUTNOMBRE.value = padecimientoSeleccionado.nombre;
    INPUTESPECIE.value = padecimientoSeleccionado.especie;
    INPUTESTADO.value = padecimientoSeleccionado.estado;
};

const VALIDAR = () => {
    let error = false;
    if (INPUTNOMBRE.value == '') {
        error = true;
        INPUTNOMBRE.classList.add('error');
    } else {
        INPUTNOMBRE.classList.remove('error');
    }

    if (INPUTESPECIE.value == '') {
        error = true;
        INPUTESPECIE.classList.add('error');
    } else {
        INPUTESPECIE.classList.remove('error');
    }

    if (INPUTESTADO.value == '') {
        error = true;
        INPUTESTADO.classList.add('error');
    } else {
        INPUTESTADO.classList.remove('error');
    }
    if (error == false) {
        Swal.fire({
            'icon': 'success',
            'title': 'Padecimiento agregado',
            'text': 'La información fue guardada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'P39-mantenimiento-catalogos.html';
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo guardar el padecimiento',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    };
};
BTNGUARDAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P39-mantenimiento-catalogos.html';
})