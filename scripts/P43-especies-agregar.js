'use strict';

const INPUTNOMBRE = document.querySelector('#txt-nombre-especie');
const INPUTESTADO = document.querySelector('#slt-estado-especie');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');

//Funcion que registra la especie 
const AGREGARESPECIE = () => {
    let nombre = INPUTNOMBRE.value;
    let estado = INPUTESTADO.value;
    REGISTRARESPECIE(nombre, estado);
    // ACCIONUSUARIO('Agregar especie');
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

        AGREGARESPECIE();

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo guardar la especie',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};

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