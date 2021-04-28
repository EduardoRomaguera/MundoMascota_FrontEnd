'use strict'
let razaSeleccionado;
let _idRaza;
const INPUTNOMBRE = document.querySelector('#txt-nombre-rz');
const INPUTESPECIE = document.getElementById('slt-especie-rz');
const INPUTESTADO = document.querySelector('#slt-estado-rz');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');
const INPUTSREQUERIDOS = document.querySelectorAll(':required');
let lista = [];

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
        CAMBIARRAZA();

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo guardar la raza',
            'text': 'Por favor revisar los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};


const ESPECIESDESPLEGABLE = async() => {

    lista = await LISTARESPECIES();
    AGREGAROPCION();
}
const AGREGAROPCION = async() => {

    lista.forEach(especie => {
        let opcion = document.createElement('option');
        opcion.innerText = especie.nombre;
        opcion.id = especie.id;
        INPUTESPECIE.add(opcion)

    });
};

//Funcion que obtiene los datos del formulario
const CAMBIARRAZA = () => {
    let nombre = INPUTNOMBRE.value;
    let especie = INPUTESPECIE.value;
    let estado = INPUTESTADO.value;
    MODIFICARRAZA(_idRaza, nombre, especie, estado);
    console.log(razaSeleccionado);

};

if (localStorage.getItem('razaSeleccionado')) {
    razaSeleccionado = JSON.parse(localStorage.getItem('razaSeleccionado'));
    INPUTNOMBRE.value = razaSeleccionado.nombre;
    INPUTESPECIE.value = razaSeleccionado.especie;
    INPUTESTADO.value = razaSeleccionado.estado;
    _idRaza = razaSeleccionado._id;
    console.log(razaSeleccionado);
} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar primero una vacuna'
    }).then(() => {
        window.location.href = 'P40-mantenimiento-razas.html';
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

window.onload = function() { ESPECIESDESPLEGABLE() }
BTNGUARDAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P40-mantenimiento-razas.html';
})