'use strict'
const inputNombre = document.querySelector('#txt-nombre');
const inputDescripcion = document.querySelector('#txt-frase');
const inputImagen = document.querySelector('#foto-patrocinador');
const btnGuardar = document.querySelector('#btn-guardar');
const btnCancelar = document.querySelector('#btn-cancelar');

//Funcion que registra Patrocinador 
const AGREGARPATROCINADOR = () => {
    let nombre = inputNombre.value;
    let frase = inputDescripcion.value;
    let imagen = inputImagen.src;

    registrarPatrocinador(nombre, frase, imagen);

};

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

    if (inputImagen.value == '') {
        error = true;
        inputImagen.classList.add('error');
    } else {
        inputImagen.classList.remove('error');
    }
    if (error == false) {
        AGREGARPATROCINADOR();
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