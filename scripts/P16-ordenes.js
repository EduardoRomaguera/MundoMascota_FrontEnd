'use strict';
const btnCancelar = document.querySelector("#btn3");
const validar = () => {
    Swal.fire({
        'icon': 'warning',
        'title': 'No se pudo iniciar sesión',
        'text': 'Por favor revise los campos resaltados',
        'confirmButtonText': 'Entendido'
    });

}
btnCancelar.addEventListener("click", validar);