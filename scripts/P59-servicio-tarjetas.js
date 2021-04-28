'use strict';

const REGISTRARTARJETA = async(pnombre, pespecie, pestado) => {

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
                window.location.href = 'P42-vacunas-mantenimiento.html';

            });

        }).catch((response) => {
            Swal.fire({
                'title': response.msj,
                'icon': 'error',
                'text': response.err
            })
        })
};

const LISTARTARJETAS = async() => {
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


const MODIFICARTARJETA = async(pid, pnombre, pespecie, pestado) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-vacuna',
        responseType: 'json',
        data: {
            _id: pid,
            nombre: pnombre,
            especie: pespecie,
            estado: pestado
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

const ELIMINARTARJETA = async(pid) => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-vacuna',
            responseType: 'json',
            data: {
                _id: pid
            }
        })
        .then((response) => {
            Swal.fire({
                    'title': 'La vacuna ha sido eliminada',
                    'icon': 'success',
                    'text': response.msj
                }

            ).then(() => {
                window.location.href = 'P42-vacunas-mantenimiento.html';
            });
        })
        .catch((error) => {
            console.log(error)
        });
};