'use strict'
let vacunaSeleccionado;
let _id;
const INPUTNOMBRE = document.querySelector('#txt-nombre-vc');
const INPUTESPECIE = document.querySelector('#slt-especie-vc');
const INPUTESTADO = document.querySelector('#slt-estado-vc');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');

const VALIDAR = () => {
    let error = false;
    let inputsRequeridos = document.querySelectorAll('.input-formularios :required');
    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (error == false) {
        CAMBIARVACUNA();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo modificar la vacuna',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};

//Funcion que obtiene los datos del formulario
const CAMBIARVACUNA = () => {
    let nombre = INPUTNOMBRE.value;
    let estado = INPUTESTADO.value;
    MODIFICARVACUNA(nombre, especie, estado);
}

if (localStorage.getItem('vacunaSeleccionado')) {
    especieSeleccionado = JSON.parse(localStorage.getItem('vacunaSeleccionado'));
    INPUTNOMBRE.value = vacunaSeleccionado.nombre;
    INPUTESTADO.value = vacunaSeleccionado.estado;
    _id = vacunaSeleccionado._id;
    console.log(vacunaSeleccionado);
} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar primero una vacuna'
    }).then(() => {
        window.location.href = 'P43-mantenimiento-especies';
    });
}

BTNGUARDAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P42-mantenimiento-vacunas.html';
})