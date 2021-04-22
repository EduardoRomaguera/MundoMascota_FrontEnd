'use strict'

const INPUTNOMBRE = document.querySelector('#txt-nombre-especie');
const INPUTESTADO = document.querySelector('#slt-estado-especie');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');
let especieSeleccionado;

const CAMBIARESPECIE = () => {
    let nombre = INPUTNOMBRE.value;
    let estado = INPUTESTADO.value;
    MODIFICARESPECIE(nombre, estado);
}

//Valida que los inputs no esten vacios.
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

    //validaciones de formato
    if (error == false) {
        CAMBIARESPECIE();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo modificar la especie',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};

if (localStorage.getItem('especieSeleccionado')) {
    especieSeleccionado = JSON.parse(localStorage.getItem('especieSeleccionado'));
    INPUTNOMBRE.value = especieSeleccionado.nombre;
    INPUTESTADO.value = especieSeleccionado.estado;
} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar primero una especie'
    }).then(() => {
        window.location.href = 'P43-mantenimiento-especies';
    });
}

//const ACCIONUSUARIO = (pNombreAccion) => {
//  let nombre = pNombreAccion;
//let usuario;
//let tipo = 'Administrador';
//let fecha = Date.now();

//REGISTRARACCION = async(nombre, usuario, tipo, fecha)
//Falta conseguir el id del usuario//
//};
BTNGUARDAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P43-especies-mantenimiento.html';
})