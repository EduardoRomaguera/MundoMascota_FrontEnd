'use strict';

const REGISTRARVACUNA = async(pnombre, pespecie, pestado) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-vacuna',
            responType: 'json',
            data: {
                nombre: pnombre,
                especie: pespecie,
                estado: pestado
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La vacuna ha sido registrada correctamente',
                'text': response.msj
            }).then(() => {
                if (response.data.usuario.estado == 'Cambio de contrasenna') {
                    window.location.href = 'inicio-sesion.html';
                }

            });

        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar la vacuna',
                'text': 'Ocurrio el siguiente error {error}',
                'icon': 'error'
            })
        })
};

const LISTARVACUNAS = async() => {
    let listaVacunas;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-vacunas',
            reponse: 'json',
        })
        .then((response) => {
            listaVacunas = response.data.vacunas;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaVacunas;
};