'use strict';

//Validación de espacios de inicio de sesión
const inputNombre = document.querySelector('#txt-nombre');
const btnCompletar = document.querySelector('#btn-completar');

const validarInicioSesion = () => {
    let error = false;

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error');
    } else {
        inputNombre.classList.remove('error');
    }

    if (error == true) {
        Swal.fire({
          imageUrl: "images/error.png",
          title: "¡OOPS! Algo pasó aqui",
          text: "Dejaste un espacio vacio",
          confirmButtonText: "Intentar de nuevo"
        });
    } 


    
};
btnCompletar.addEventListener('click', validarInicioSesion);