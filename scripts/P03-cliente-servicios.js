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
let selectedUser;
const CAMBIOESTADO = () => {


};

const MODIFICARCLIENTE = async(pid, pinputNombreCl, pinputApellido1Cl, inputApellido2Cl, inputIdentificacionCl, inputNacimientoCl, inputCorreoCl, inputProvinciaCl, inputCantonCl, inputDistritoCl, inputSennasCl, inputNombreMs, selectRazaMs, inputTelefonoMs) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-vacuna',
        responseType: 'json',
        data: {
            _id: pid,
            inputNombreCl: pinputNombreCl,
            inputApellido1Cl: pinputApellido1Cl,
            inputApellido2Cl: pinputApellido1Cl,
            inputIdentificacionCl: pinputIdentificacionCl
            inputNacimientoCl
            inputCorreoCl
            inputProvinciaCl
            inputCantonCl
            inputDistritoCl
            inputSennasCl
            inputNombreMs
            selectRazaMs
            inputTelefonoMs

        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'La vacuna se modificó correctamente',
            'text': response.msj
        }).then(() => {
            window.location.href = 'P42-vacunas-mantenimiento.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': error
        })
    });

};