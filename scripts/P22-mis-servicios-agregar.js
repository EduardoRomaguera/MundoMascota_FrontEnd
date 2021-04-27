'use strict';

const INPUTNOMBRE = document.getElementById('slt-nombre-sv');
const INPUTDESCRIPCION = document.querySelector('#txt-descripcion-sv');
const INPUTCOSTO = document.querySelector('#num-costo-sv');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');
const INPUTSREQUERIDOS = document.querySelectorAll(':required');
let lista = [];

//Funcion que registra el servicio 
const AGREGARMISERVICIO = () => {
    let nombre = INPUTNOMBRE.value;
    let descripcion = INPUTDESCRIPCION.value;
    let costo = INPUTCOSTO.value;
    REGISTRARMISSERVICIO(nombre, descripcion, costo);

};

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


//Valida que los inputs no esten vacios.
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
        AGREGARMISERVICIO();

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo agregar el servicio',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};
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