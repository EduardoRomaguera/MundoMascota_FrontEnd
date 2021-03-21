'use strict'
let razaSeleccionado;
const INPUTNOMBRE = document.querySelector('#txt-nombre-rz');
const INPUTESPECIE = document.querySelector('#txt-especie-rz');
const INPUTESTADO = document.querySelector('#txt-estado-rz');

const LLENARFORMULARIO = () => {
    INPUTNOMBRE.value = razaSeleccionado.nombre;
    INPUTESPECIE.value = razaSeleccionado.especie;
    INPUTESTADO.value = razaSeleccionado.estado;
};

const VALIDAR = () => {
    let error = false;
    let inputsRequeridos = document.querySelectorAll('.fomulario: required');

    inputsRequeridos.forEach(input => {
            if (input.value == '') {
                error = true;
                input.classList.add('error');
            } else {
                input.classList.remove('error');

            }
        }
    });
if (error == false) {
    Swal.fire({
        'icon': 'success',
        'title': 'Usuario modificado',
        'text': 'La información fue actualizada correctamente',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'usuarios.html';
    });
} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'No se pudo modificar el usuario',
        'text': 'Por favor revise los campos resaltados',
        'confirmButtonText': 'Entendido'
    });

};
btnGuardar.addEventListener('click', VALIDAR);