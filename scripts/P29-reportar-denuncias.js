'use strict'
const DENUNCIADO = document.querySelector('#txt-cliente-denunciar');
const RAZON = document.querySelector('#slt-motivo-denuncia');
const EXPLICACION = document.querySelector('#txt-descripcion-denuncia');
const BTNENVIAR = document.querySelector('#btn-enviar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');

const VALIDAR = () => {
    let error = false;
    if (DENUNCIADO.value == '') {
        error = true;
        DENUNCIADO.classList.add('error');
    } else {
        DENUNCIADO.classList.remove('error');
    }

    if (RAZON.value == '') {
        error = true;
        RAZON.classList.add('error');
    } else {
        RAZON.classList.remove('error');
    }

    if (EXPLICACION.value == '') {
        error = true;
        EXPLICACION.classList.add('error');
    } else {
        EXPLICACION.classList.remove('error');
    }

    if (error == false) {
        registrar();
        console.log("Se envió el registro al backend");
        Swal.fire({
            'icon': 'success',
            'title': 'El reporte ha sido enviado',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'P16-mis-ordenes.html';
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo enviar la denuncia',
            'text': 'Por favor revisar los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    };
};
const registrar = () => {
    let denunciado = DENUNCIADO.value;
    let razon = RAZON.value;
    let explicacion = EXPLICACION.value;
    registrarDenuncia(denunciado, razon, explicacion);
};
BTNENVIAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P16-mis-ordenes.html';
})