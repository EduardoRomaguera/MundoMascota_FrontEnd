'use strict'
let razaSeleccionado;
const inputNombre = document.querySelector('#txt-nombre');
const inputDescripcion = document.querySelector('#txt-descripcion');
const inputFile = document.querySelector('#file');
const btnGuardar = document.querySelector('#btn-guardar');
const btnCancelar = document.querySelector('#btn-cancelar');

//const LLENARFORMULARIO = () => {
//    inputNombre.value = razaSeleccionado.nombre;
//    inputDescripcion.value = razaSeleccionado.especie;
//    inputFile.value = razaSeleccionado.estado;
//};

const VALIDAR = () => {
    let error = false;
    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error');
    } else {
        inputNombre.classList.remove('error');
    }

    if (inputDescripcion.value == '') {
        error = true;
        inputDescripcion.classList.add('error');
    } else {
        inputDescripcion.classList.remove('error');
    }

    if (inputFile.value == '') {
        error = true;
        inputFile.classList.add('error');
    } else {
        inputFile.classList.remove('error');
    }
    if (error == false) {
        Swal.fire({
            'icon': 'success',
            'title': 'Patrocinador agregado',
            'text': 'La información se guardó correctamente',
            'confirmButtonText': 'OK'
        }).then(() => {
            window.location.href = 'P57-mantenimiento-patrocinadores.html';
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo guardar el patrocinador',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    };
};
btnGuardar.addEventListener('click', VALIDAR)
btnCancelar.addEventListener('click', () => {
    window.location.href = 'P57-mantenimiento-patrocinadores.html';
})