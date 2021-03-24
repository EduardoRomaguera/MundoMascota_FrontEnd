'use strict'
const INPUTCLIETE = document.querySelector('#txt-cliente-denunciar');
const INPUTESLT = document.querySelector('#slt-motivo-denuncia');
const INPUTTEXTAREA = document.querySelector('#txt-descripcion-denuncia"');
const BTNENVIAR = document.querySelector('#btn-enviar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');


const VALIDAR = () => {
    let error = false;
    if (INPUTCLIETE.value == '') {
        error = true;
        INPUTCLIETE.classList.add('error');
    } else {
        INPUTCLIETE.classList.remove('error');
    }

    if (INPUTESLT.value == '') {
        error = true;
        INPUTESLT.classList.add('error');
    } else {
        INPUINPUTESLTTESPECIE.classList.remove('error');
    }

    if (INPUTTEXTAREA.value == '') {
        error = true;
        INPUTTEXTAREA.classList.add('error');
    } else {
        INPUTTEXTAREA.classList.remove('error');
    }
    if (error == false) {
        Swal.fire({
            'icon': 'success',
            'title': 'El reporte ha sido enviado',
            'text': 'La información fue guardada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'P26-historial-ordenes.html';
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo enviar la denuncia,
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    };
};
BTNENVIAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P26-historial-ordenes.html';
})