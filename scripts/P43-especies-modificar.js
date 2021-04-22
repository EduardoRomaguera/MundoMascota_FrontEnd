'use strict'
let especieSeleccionado;
const INPUTNOMBRE = document.querySelector('#txt-nombre-especie');
const INPUTESTADO = document.querySelector('#slt-estado-especie');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');

//Funcion que llena el formulario con la info de la especie seleccionada
const LLENARFORMULARIO = () => {
    INPUTNOMBRE.value = especieSeleccionado.nombre;
    INPUTESTADO.value = especieSeleccionado.estado;
};

//Funcion que registra la especie 
const AGREGARESPECIE = () => {
    let nombre = INPUTNOMBRE.value;
    let estado = INPUTESTADO.value;
    REGISTRARESPECIE(nombre, estado);
    // ACCIONUSUARIO('Agregar especie');
};


//Falta revisar este*******
const VALIDARINPUTS = () => {
    INPUTNOMBRE.value = especieSeleccionado.nombre;
    if (!INPUTNOMBRE.value == '') {
        error.style.display = 'none';
    }
    INPUTESTADO.value = especieSeleccionado.estado;
    if (!INPUTESTADO.value == '') {
        INPUTESTADO.style.display = 'none';
    }
};

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

        OBTENERESPECIE();

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo modificar la especie',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};

const OBTENERESPECIE = () => {
    let nombre = especieSeleccionado.nombre;
    let estado = especieSeleccionado.estado;
    MODIFICARESPECIE(nombre, estado);
}

if (localStorage.getItem('especieSeleccionado')) {
    especieSeleccionado = JSON.parse(localStorage.getItem('especieSeleccionado'));
    LLENARFORMULARIO();
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
    window.location.href = 'P43-mantenimiento-especies.html';
});