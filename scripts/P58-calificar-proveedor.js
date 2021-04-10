'use strict';
//Validación de espacios de inicio de sesión
const btnEditar = document.querySelector('#btn-calificar');
const inputCalificacion = document.querySelector('#txt-calificacion');


const calificar = () => {
    let error = false;
    if (inputCalificacion.value == '') {
        error = true;
        inputCalificacion.classList.add('error');
        Swal.fire({
            imageUrl: "images/error.png",
            title: "¡OOPS! Algo pasó aqui",
            text: "Se dejó un espacio en blanco",
            confirmButtonText: "Intentar de nuevo"
        });
    } else {
        inputCalificacion.classList.remove('error');
        Swal.fire({
            imageUrl: "images/cute-pets.jpg",
            title: "Gracias por tu calificación",
            confirmButtonText: "Regresar"
        }).then(function() {
            window.location.href = 'P16-mis-ordenes.html';
        });
    }
};

btnEditar.addEventListener('click', calificar);