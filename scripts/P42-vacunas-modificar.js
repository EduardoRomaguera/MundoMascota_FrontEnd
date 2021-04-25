'use strict'
let vacunaSeleccionado;
let _id;
const INPUTNOMBRE = document.querySelector('#txt-nombre-vc');
const INPUTESPECIE = document.getElementById('slt-especie-vc');
const INPUTESTADO = document.querySelector('#slt-estado-vc');
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
const CAMBIARVACUNA = () => {
    let nombre = INPUTNOMBRE.value;
    let especie = INPUTESPECIE.value;
    let estado = INPUTESTADO.value;
    MODIFICARVACUNA(_id, nombre, especie, estado);
    console.log(vacunaSeleccionado);

}

if (localStorage.getItem('vacunaSeleccionado')) {
    vacunaSeleccionado = JSON.parse(localStorage.getItem('vacunaSeleccionado'));
    INPUTNOMBRE.value = vacunaSeleccionado.nombre;
    INPUTESPECIE.value = vacunaSeleccionado.especie;
    INPUTESTADO.value = vacunaSeleccionado.estado;
    _id = vacunaSeleccionado._id;
    console.log(vacunaSeleccionado);
} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar primero una vacuna'
    }).then(() => {
        window.location.href = 'P42-vacunas-mantenimiento.html';
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
INPUTESPECIE.addEventListener(window.onload = function() { ESPECIESDESPLEGABLE() })
BTNGUARDAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P42-vacunas-mantenimiento.html';
})