'use strict'
let servicioSeleccionado;
let _id;
const INPUTNOMBRE = document.querySelector('#txt-nombre-sv');
const INPUTDESCRIPCION = document.querySelector('#txt-descripcion-sv');
const INPUTESTADO = document.querySelector('#slt-estado-sv');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');
const INPUTSREQUERIDOS = document.querySelectorAll(':required');

let lista = [];
const VALIDAR = () => {
    let error = false;
    let inputRequeridos = INPUTSREQUERIDOS;
    inputRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (error == false) {
        CAMBIARSERVICIO();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo modificar el servicio',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};

//Funcion que obtiene los datos del formulario
const CAMBIARSERVICIO = () => {
    let nombre = INPUTNOMBRE.value;
    let descripcion = INPUTDESCRIPCION.value;
    let estado = INPUTESTADO.value;
    MODIFICARSERVICIO(_id, nombre, descripcion, estado);
    console.log(servicioSeleccionado);

}

if (localStorage.getItem('servicioSeleccionado')) {
    servicioSeleccionado = JSON.parse(localStorage.getItem('servicioSeleccionado'));
    INPUTNOMBRE.value = servicioSeleccionado.nombre;
    INPUTDESCRIPCION.value = servicioSeleccionado.descripcion;
    INPUTESTADO.value = servicioSeleccionado.estado;
    _id = servicioSeleccionado._id;

} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar primero un servicio'
    }).then(() => {
        window.location.href = 'P22-mis-servicios.html';
    });
}
INPUTSREQUERIDOS.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value == '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
});

BTNGUARDAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P44-catalogo-servicios.html';
})