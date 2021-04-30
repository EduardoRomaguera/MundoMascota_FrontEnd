'use strict';

//Validación de espacios de inicio de sesión
const INPUTNOMBRE = document.querySelector('#txt-nombre');
const INPUTESPECIE = document.getElementById('slt-especie-ms');
const INPUTRAZA = document.getElementById('slt-raza-ms');
const INPUTTELEFONO = document.querySelector('#num-telefono');
const INPUTVACUNA = document.getElementById('slt-raza-ms');
const INPUTPADECIMIENTO = document.getElementById('slt-padecimiento-ms');
const BTNREGISTRO = document.querySelector('#btn-registro');
const BTNCANCELAR = document.querySelector('#btn-cancelar');
const INPUTSREQUERIDOS = document.querySelectorAll(':required');


let listaVacunasMs = [];
let listaPadecimientoMs = [];
let listaEspeciesMs = [];
let listaRazasMs = [];


const DESPLEGABLES = async() => {


    listaEspeciesMs = await LISTARESPECIES();
    listaVacunasMs = await LISTARVACUNAS();
    listaPadecimientoMs = await LISTARPADECIMIENTOS();
    listaRazasMs = await LISTARRAZAS();

    console.log(listaEspeciesMs);
    console.log(listaVacunasMs);
    console.log(listaPadecimientoMs);
    console.log(listaRazasMs);
    AGREGAROPCIONESPECIE();
    AGREGAROPCIONVACUNAS();
    AGREGAROPCIONPADECIMIENTOS();
    AGREGAROPCIONRAZAS();

}

const AGREGAROPCIONESPECIE = async() => {
    listaEspeciesMs.forEach(especie => {
        let opcion = document.createElement('option');
        opcion.innerText = especie.nombre;
        opcion.id = especie.id;
        console.log(opcion);
        INPUTESPECIE.add(opcion)
    });
};


const AGREGAROPCIONVACUNAS = async() => {
    listaVacunasMs.forEach(vacuna => {
        let opcion = document.createElement('option');
        opcion.innerText = vacuna.nombre;
        opcion.id = vacuna.id;
        INPUTVACUNA.add(opcion)

    });
};

const AGREGAROPCIONPADECIMIENTOS = async() => {
    listaPadecimientoMs.forEach(padecimiento => {
        let opcion = document.createElement('option');
        opcion.innerText = padecimiento.nombre;
        opcion.id = padecimiento.id;
        INPUTPADECIMIENTO.add(opcion)

    });
};

const AGREGAROPCIONRAZAS = async() => {
    listaRazasMs.forEach(raza => {
        let opcion = document.createElement('option');
        opcion.innerText = raza.nombre;
        opcion.id = raza.id;
        INPUTRAZA.add(opcion)

    });
};


//Funcion que registra la vacuna 
const AGREGARMASCOTA = () => {
    let nombre = INPUTNOMBRE.value;
    let especie = INPUTESPECIE.value;
    let raza = INPUTRAZA.value;
    let telefono = INPUTTELEFONO.value;

    REGISTRARMASCOTA(nombre, especie, estado);
    // ACCIONUSUARIO('Agregar especie');
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
        AGREGARMASCOTA();

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo guardar la vacuna',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};
//Cambia el remarcado rojo cuando hay error
INPUTSREQUERIDOS.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value == '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
});


window.onload = function() { DESPLEGABLES() }
BTNREGISTRO.addEventListener('click', VALIDAR);
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P42-vacunas-mantenimiento.html';
})