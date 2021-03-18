'use strict';
//Validación de espacios de registro de cliente
'use strict';
const inputNombreCl = document.querySelector('#txt-nombre-cl');
const inputApellido1Cl = document.querySelector('#txt-apellido1-cl');
const inputApellido2Cl = document.querySelector('#txt-apellido2-cl');
const inputTipoIdCl = document.querySelector('#txt-tipo-id-cl');
const inputIdentificacionCl = document.querySelector('#txt-identificacion-cl');
const inputNacimientoCl = document.querySelector('#txt-nacimiento-cl');
const inputCorreoCl = document.querySelector('#txt-correo-cl');
const inputProvinciaCl = document.querySelector('#txt-provincia-cl');
const inputCantonCl = document.querySelector('#txt-canton-cl');
const inputDistritoCl = document.querySelector('#txt-distrito-cl');
const inputSennasCl = document.querySelector('#txt-sennas-cl');
const inputNombreMs = document.querySelector('#txt-nombre-ms');
const selectEspecieMs = document.querySelector('#txt-especie-ms');
const selectRazaMs = document.querySelector('#txt-raza-ms');
const inputTelefonoMs = document.querySelector('#txt-telefono-ms');
const btnCompletarRegistro = document.querySelector('#btn-completar-registro');

const validar = () => {
    let error = false;

    //Validación de formato de correo electrónico
    let inputXCorreoCl = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;
    if (inputXCorreoCl.test(inputCorreoCl.value) == false) {
        error = true;
        inputCorreoCl.classList.add('error');
    } else {
        inputCorreoCl.classList.remove('error');
    }

    //Validación de espacios vacios
    if (inputNombreCl.value == '') {
        error = true;
        inputNombreCl.classList.add('error');
    } else {
        inputNombreCl.classList.remove('error');
    }

    if (inputApellido1Cl.value == '') {
        error = true;
        inputApellido1Cl.classList.add('error');
    } else {
        inputApellido1Cl.classList.remove('error');
    }

    if (inputApellido2Cl.value == '') {
        error = true;
        inputApellido2Cl.classList.add('error');
    } else {
        inputApellido2Cl.classList.remove('error');
    }

    if (inputTipoIdCl.value == '') {
        error = true;
        inputTipoIdCl.classList.add('error');
    } else {
        inputTipoIdCl.classList.remove('error');
    }

    if (inputIdentificacionCl.value == '') {
        error = true;
        inputIdentificacionCl.classList.add('error');
    } else {
        inputIdentificacionCl.classList.remove('error');
    }

    if (inputNacimientoCl.value == '') {
        error = true;
        inputNacimientoCl.classList.add('error');
    } else {
        inputNacimientoCl.classList.remove('error');
    }

    if (inputCorreoCl.value == '') {
        error = true;
        inputCorreoCl.classList.add('error');
    } else {
        inputCorreoCl.classList.remove('error');
    }

    if (inputProvinciaCl.value == '') {
        error = true;
        inputProvinciaCl.classList.add('error');
    } else {
        inputProvinciaCl.classList.remove('error');
    }

    if (inputCantonCl.value == '') {
        error = true;
        inputCantonCl.classList.add('error');
    } else {
        inputCantonCl.classList.remove('error');
    }

    if (inputDistritoCl.value == '') {
        error = true;
        inputDistritoCl.classList.add('error');
    } else {
        inputDistritoCl.classList.remove('error');
    }

    if (inputSennasCl.value == '') {
        error = true;
        inputSennasCl.classList.add('error');
    } else {
        inputSennasCl.classList.remove('error');
    }

    if (inputNombreMs.value == '') {
        error = true;
        inputNombreMs.classList.add('error');
    } else {
        inputNombreMs.classList.remove('error');
    }

    if (selectEspecieMs.value == '') {
        error = true;
        selectEspecieMs.classList.add('error');
    } else {
        selectEspecieMs.classList.remove('error');
    }

    if (selectRazaMs.value == '') {
        error = true;
        selectRazaMs.classList.add('error');
    } else {
        selectRazaMs.classList.remove('error');
    }

    if (inputTelefonoMs.value == '') {
        error = true;
        inputTelefonoMs.classList.add('error');
    } else {
        inputTelefonoMs.classList.remove('error');
    }

    if (error == false) {
        imprimir();
    } else {
        Swal.fire({
            imageUrl: "images/error.png",
            title: "¡OOPS! Algo pasó aqui",
            text: "Dejaste un espacio vacio",
            confirmButtonText: "Intentar de nuevo"
        });
    }
};

const calcularEdad = (nacimiento) => {
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - nacimiento.getFullYear();

    if (fechaActual.getMonth() < nacimiento.getMonth()) {
        edad = edad - 1;
    } else {
        if ((fechaActual.getMonth() == nacimiento.getMonth()) && (fechaActual.getUTCDate() < nacimiento.getUTCDate())) {
            edad = edad - 1;
        }
    }
    return edad;
};

const imprimir = () => {
    let correo = inputCorreo.value;
    let nombre = inputNombre.value;
    let nacimiento = new Date(inputNacimiento.value);
    let sexo = selectSexo.value;

    let edad = calcularEdad(nacimiento);

    // Temporal
    console.log(correo, nombre, nacimiento, sexo, edad);

    Swal.fire({
        'icon': 'success',
        'title': 'Su cuenta se registro con éxito',
        'text': 'Por favor revise su correo electrónico',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'inicio-sesion.html';
    });

};

btnCompletarRegistro.addEventListener('click', validar);