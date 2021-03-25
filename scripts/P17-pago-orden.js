'use strict';

const btnPagar = document.querySelector('#btn2');

const pendiente = () => {
    Swal.fire({
        imageUrl: "images/cute-pets.jpg",
        title: "Nuestro equipo aún está trabajando en eso",
        text: "Mientras tanto puedes ver esos lindos cachorros",
        confirmButtonText: "Regresar"
    });
}
btnPagar.addEventListener('click', pendiente);