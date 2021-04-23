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
                window.location.href = 'P42-mantenimiento-vacunas.html';

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
    }).catch((error) => {
        console.log(error)
    });

    return listaVacunas;
};


const MODIFICARVACUNA = async(pid, pnombre, pestado) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-vacuna',
        responseType: 'json',
        data: {
            _id: pid,
            nombre: pnombre,
            estado: pestado
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'La vacuna se modificó correctamente',
            'text': response.msj
        }).then(() => {
            window.location.href = 'P42-mantenimiento-vacunas.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': error
        })
    });

};