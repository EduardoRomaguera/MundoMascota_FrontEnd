'use strict'
let vacunaSeleccionado;
const INPUTNOMBRE = document.querySelector('#txt-nombre-vc');
const INPUTESPECIE = document.querySelector('#slt-especie-vc');
const INPUTESTADO = document.querySelector('#slt-estado-vc');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');


const AGREGARVACUNA = () => {
    let nombre = INPUTNOMBRE.value;
    let especie = INPUTESPECIE.value;
    let estado = INPUTESTADO.value;

    REGISTRARVACUNA(nombre, especie, estado);
    ACCIONUSUARIO('Agregar vacuna');
};
const LLENARFORMULARIO = () => {

    INPUTNOMBRE.value = vacunaSeleccionado.nombre;
    INPUTESPECIE.value = vacunaSeleccionado.especie;
    INPUTESTADO.value = vacunaSeleccionado.estado;


};

const VALIDARINPUTS = () => {
    INPUTNOMBRE.value = vacunaSeleccionado.nombre;
    if (!INPUTNOMBRE.value == '') {
        error.style.display = 'none';
    }
    INPUTESPECIE.value = vacunaSeleccionado.especie;
    if (!INPUTESPECIE.value == '') {
        INPUTESPECIE.style.display = 'none';
    }

    INPUTESTADO.value = vacunaSeleccionado.estado;
    if (!INPUTESTADO.value == '') {
        INPUTESTADO.style.display = 'none';
    }
};

const VALIDAR = () => {

    let error = false;
    if (INPUTNOMBRE.value == '') {
        error = true;
        INPUTNOMBRE.classList.add('error');
    } else {
        INPUTNOMBRE.classList.remove('error');
    }

    if (INPUTESPECIE.value == '') {
        error = true;
        INPUTESPECIE.classList.add('error');
    } else {
        INPUTESPECIE.classList.remove('error');
    }

    if (INPUTESTADO.value == '') {
        error = true;
        INPUTESTADO.classList.add('error');
    } else {
        INPUTESTADO.classList.remove('error');
    }
    if (error == false) {
        AGREGARVACUNA();
        Swal.fire({
            'icon': 'success',
            'title': 'Vacuna agregada',
            'text': 'La información fue guardada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'P39-mantenimiento-catalogos.html';
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo guardar la vacuna',
            'text': 'Por favor revisar los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    };
};

const OBTENERDATOS = () => {
    let nombre = INPUTNOMBRE.value;
    let especie = INPUTESPECIE.value;
    let estado = INPUTESTADO.value;

};

const MODIFICARVACUNAF = () => {

};

const ACCIONUSUARIO = (pNombreAccion) => {
    let nombre = pNombreAccion;
    let usuario;
    let tipo = 'Administrador';
    let fecha = Date.now();

    REGISTRARACCION = async(nombre, usuario, tipo, fecha)
        //Falta conseguir el id del usuario//
};

BTNGUARDAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
        window.location.href = 'P42-mantenimiento-vacunas.html';
    })
    //VALIDARINPUTS();