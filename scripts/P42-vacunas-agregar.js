'use strict';

const INPUTNOMBRE = document.querySelector('#txt-nombre-vc');
const INPUTESTADO = document.querySelector('#slt-estado-vc');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');
const INPUTSREQUERIDOS = document.querySelectorAll(':required');
const INPUTESPECIE = document.getElementById('slt-especie-vc');
let lista = [];

//Funcion que registra la especie 
const AGREGARVACUNA = () => {
    let nombre = INPUTNOMBRE.value;
    let especie = INPUTESPECIE.value;
    let estado = INPUTESTADO.value;
    REGISTRARVACUNA(nombre, especie, estado);
    // ACCIONUSUARIO('Agregar especie');
};

//Funcion que llena las especies

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
        AGREGARVACUNA();

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo guardar la vacuna',
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
INPUTESPECIE.addEventListener('click', ESPECIESDESPLEGABLE)
BTNGUARDAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P42-vacunas-mantenimiento.html';
})