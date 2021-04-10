'use strict';

const btnPagar = document.querySelector('#btn-pagar');
const inputCvv = document.querySelector('#txt-cvv');


const validar = () => {
    let error = false;
    if (inputCvv.value == '') {
        error = true;
        inputCvv.classList.add('error');
    } else {
        inputCvv.classList.remove('error');
    }
    if (error == true) {
        Swal.fire({
            imageUrl: "images/error.png",
            title: "¡OOPS! Algo pasó aqui",
            text: "Se dejó un espacio en blanco",
            confirmButtonText: "Intentar de nuevo"
        });
    } else {
        if (inputCvv.value == "457") {
            error = false;
            Swal.fire({
                icon: "warning",
                title: "¿Dese realizar el pago?",
                showCancelButton: true,
                confirmButtonText: "Sí, pagar",
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar',
            }).then(() => {
                window.location.href = 'P54-tienda.html';
            });

        } else {
            Swal.fire({
                imageUrl: "images/error.png",
                title: "¡OOPS! Algo pasó aqui",
                text: "El pago no se ha podido procesar, hay un dato incorrecto con el método de pago",
                confirmButtonText: "Intentar de nuevo"
            });
        }
    }
};
btnPagar.addEventListener('click', () => validar());