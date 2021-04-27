'use strict'
let servicioSeleccionado;
let _id;
const INPUTNOMBRE = document.getElementById('slt-nombre-sv');
const INPUTDESCRIPCION = document.querySelector('#txt-descripcion-sv');
const INPUTCOSTO = document.querySelector('#num-costo-sv');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');
const INPUTSREQUERIDOS = document.querySelectorAll(':required');
let lista = [];



//Funcion que llena los servicios

const SERVICIODESPLEGABLE = async() => {

    lista = await LISTARSERVICIOS();
    AGREGAROPCION();
}
const AGREGAROPCION = async() => {

    lista.forEach(servicioCatalogo => {
        let opcion = document.createElement('option');
        opcion.innerText = servicioCatalogo.nombre;
        opcion.id = servicioCatalogo.id;
        INPUTNOMBRE.add(opcion)
    });
};

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
    let costo = INPUTCOSTO.value;
    MODIFICARSERVICIO(_id, nombre, descripcion, costo);
    console.log(servicioSeleccionado);

}

if (localStorage.getItem('servicioSeleccionado')) {
    servicioSeleccionado = JSON.parse(localStorage.getItem('servicioSeleccionado'));
    INPUTNOMBRE.value = servicioSeleccionado.nombre;
    INPUTDESCRIPCION.value = servicioSeleccionado.descripcion;
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

window.onload = function() { SERVICIODESPLEGABLE() }
BTNGUARDAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P22-mis-servicios.html';
})