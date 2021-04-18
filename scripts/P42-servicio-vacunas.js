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
            //

        });

    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    })
};

const LISTARVACUNAS = async() => {
    let listaVacunas = [];

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-vacunas',
        responseType: 'json'
    }).then((response) => {
        listaVacunas = response.data.vacunas;
    }).catch((response) => {

    });

    return listaVacunas;
};


const MODIFICARVACUNA = async(_id, nombre, tipo, estado) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-vacuna',
        responseType: 'json',
        data: {
            _id: _id,
            nombre: nombre,
            tipo: tipo,
            estado: estado
        }
    }).then((response) => {
        Swal.fire({
            'title': 'La vacuna se modificó correctamente',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            mostrar_vacunas();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};