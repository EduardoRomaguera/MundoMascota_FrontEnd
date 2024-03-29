'use strict';

const INPUTNOMBRE = document.querySelector('#txt-nombre');
const INPUTESPECIE = document.getElementById('slt-especie-ms');
const INPUTRAZA = document.getElementById('slt-raza-ms');
const INPUTTELEFONO = document.querySelector('#num-telefono');
const INPUTVACUNA = document.getElementById('slt-vacunas-ms');
const INPUTPADECIMIENTO = document.getElementById('slt-padecimiento-ms');
const BTNREGISTRO = document.querySelector('#btn-registro');
const BTNCANCELAR = document.querySelector('#btn-cancelar');
const INPUTSREQUERIDOS = document.querySelectorAll(':required');
const INPUTESTADO = document.getElementById('slt-estado-ms');
const DIVFOTO = document.querySelector('#foto');
let usuarioConectado;
let correoUsuario;
let id;
let mascotaSeleccionada;
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


//Funcion que modifica la mascota
const CAMBIARMASCOTA = () => {
    let nombre = INPUTNOMBRE.value;
    let especie = INPUTESPECIE.value;
    let raza = INPUTRAZA.value;
    let telefono = INPUTTELEFONO.value;
    let estado = INPUTESTADO.value;
    MODIFICARMASCOTA(correoUsuario, nombre, telefono, especie, raza, estado, DIVFOTO.scr);
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
        CAMBIARMASCOTA();

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo modificar la mascota',
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


if (sessionStorage.getItem('usuarioConectado')) {
    usuarioConectado = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    correoUsuario = usuarioConectado.correo;
    console.log(correoUsuario);

} else {
    //
}

if (localStorage.getItem('mascotaSeleccionada')) {
    mascotaSeleccionada = JSON.parse(localStorage.getItem('mascotaSeleccionada'));
    id = mascotaSeleccionada.idUsuario;
    INPUTNOMBRE.value = mascotaSeleccionada.nombre;
    INPUTESPECIE.value = mascotaSeleccionada.especie;
    INPUTRAZA.value = mascotaSeleccionada.raza;
    INPUTTELEFONO.value = mascotaSeleccionada.telefono;
    id = mascotaSeleccionada._id;


} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar primero una mascota'
    }).then(() => {
        window.location.href = 'P22-mis-servicios.html';
    });
}



window.onload = function() { DESPLEGABLES() }
BTNREGISTRO.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P47-mis-mascotas.html';
})