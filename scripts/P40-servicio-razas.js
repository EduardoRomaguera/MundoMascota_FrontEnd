'use strict';

const REGISTRARRAZA = async(pnombre, pespecie, pestado) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-raza',
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
                'title': 'La raza ha sido registrada correctamente',
                'text': response.msj
            }).then(() => {
                window.location.href = 'P40-mantenimiento-razas.html';

            });

        }).catch((response) => {
            Swal.fire({
                'title': response.msj,
                'icon': 'error',
                'text': response.err
            })
        })
};

const LISTARRAZAS = async() => {
    let listaRazas;

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-razas',
        responseType: 'json'
    }).then((response) => {
        listaRazas = response.data.razas;
    }).catch((error) => {
        console.log(error)
    });

    return listaRazas;
};


const MODIFICARRAZA = async(pid, nombre, tipo, estado) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-raza',
        responseType: 'json',
        data: {
            _id: pid,
            nombre: nombre,
            tipo: tipo,
            estado: estado
        }
    }).then((response) => {
        Swal.fire({
            'title': 'La raza se modificó correctamente',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            window.location.href = 'P40-mantenimiento-razas.html';
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};

const ELIMINARRAZA = async(pid) => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-raza',
            responseType: 'json',
            data: {
                _id: pid
            }
        })
        .then((response) => {
            Swal.fire({
                    'title': 'La raza ha sido eliminada',
                    'icon': 'success',
                    'text': response.msj
                }

            ).then(() => {
                window.location.href = 'P40-mantenimiento-razas.html';
            });
        })
        .catch((error) => {
            console.log(error)
        });
};