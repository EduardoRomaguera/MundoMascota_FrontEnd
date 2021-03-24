'use strict'
let razaSeleccionado;
const INPUTNOMBRE = document.querySelector('#txt-nombre-sv');
const INPUTDESCRIPCION = document.querySelector('#txt-descripcion-sv');
const INPUTCOSTO = document.querySelector('#num-costo-sv');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');

const LLENARFORMULARIO = () => {
    INPUTNOMBRE.value = servicioSeleccionado.nombre;
    INPUTDESCRIPCION.value = servicioSeleccionado.descripcion;
    INPUTCOSTO.value = servicioSeleccionado.costo;
};

const VALIDAR = () => {
    let error = false;
    if (INPUTNOMBRE.value == '') {
        error = true;
        INPUTNOMBRE.classList.add('error');
    } else {
        INPUTNOMBRE.classList.remove('error');
    }

    if (INPUTDESCRIPCION.value == '') {
        error = true;
        INPUTDESCRIPCION.classList.add('error');
    } else {
        INPUTDESCRIPCION.classList.remove('error');
    }

    if (INPUTCOSTO.value == '') {
        error = true;
        INPUTCOSTO.classList.add('error');
    } else {
        INPUTCOSTO.classList.remove('error');
    }
    if (error == false) {
        Swal.fire({
            'icon': 'success',
            'title': 'Servicio agregado',
            'text': 'La información fue guardada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'P22-mis-servicios.html';
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo guardar el servicio',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    };
};
BTNGUARDAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P22-mis-servicios.html';
})