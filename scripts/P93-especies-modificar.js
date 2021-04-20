'use strict'
let especieSeleccionado;
const INPUTNOMBRE = document.querySelector('#txt-nombre-especie');
const INPUTESPECIE = document.querySelector('#slt-especie-especie');
const INPUTESTADO = document.querySelector('#slt-estado-especie');
const BTNGUARDAR = document.querySelector('#btn-guardar');
const BTNCANCELAR = document.querySelector('#btn-cancelar');

const LLENARFORMULARIO = () => {
    INPUTNOMBRE.value = especieSeleccionado.nombre;
    INPUTESTADO.value = especieSeleccionado.estado;
    VALIDARINPUTS();
};

const AGREGARESPECIE = () => {
    let nombre = INPUTNOMBRE.value;
    let estado = INPUTESTADO.value;

    REGISTRARESPECIE(nombre, estado);
    // ACCIONUSUARIO('Agregar especie');
};

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

const VALIDAR = () => {

    let error = false;
    if (INPUTNOMBRE.value == '') {
        error = true;
        INPUTNOMBRE.classList.add('error');
    } else {
        INPUTNOMBRE.classList.remove('error');
    }
    if (INPUTESTADO.value == '') {
        error = true;
        INPUTESTADO.classList.add('error');
    } else {
        INPUTESTADO.classList.remove('error');
    }
    if (error == false) {
        OBTENERESPECIE();
        Swal.fire({
            'icon': 'success',
            'title': 'Especie agregada',
            'text': 'La información fue guardada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'P43-mantenimiento-especies.html';
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo guardar la especie',
            'text': 'Por favor revisar los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    };
};

const MODIFICARESPECIE1 = async(_id, nombre, estado) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-especie',
        responseType: 'json',
        data: {
            _id: _id,
            nombre: nombre,
            estado: estado
        }
    }).then((response) => {
        Swal.fire({
            'title': 'La especie se modificó correctamente',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            mostrarEspecies();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};

// Función para obtener los datos del formulario
const OBTENERESPECIE = () => {
    let nombre = inputNombre.value;
    let estado = selectEstado.value;

    MODIFICARESPECIE1(nombre, estado);
};



//const ACCIONUSUARIO = (pNombreAccion) => {
//  let nombre = pNombreAccion;
//let usuario;
//let tipo = 'Administrador';
//let fecha = Date.now();

//REGISTRARACCION = async(nombre, usuario, tipo, fecha)
//Falta conseguir el id del usuario//
//};
LLENARFORMULARIO();
BTNGUARDAR.addEventListener('click', VALIDAR)
BTNCANCELAR.addEventListener('click', () => {
    window.location.href = 'P43-mantenimiento-especies.html';
});