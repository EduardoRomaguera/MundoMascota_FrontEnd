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

const LISTARRAZAS = async() => {
    let listaRazas = [];

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-razas',
        responseType: 'json'
    }).then((response) => {
        listaRazas = response.data.razas;
    }).catch((response) => {

    });

    return listaRazas;
};


const MODIFICARRAZA = async(_id, nombre, tipo, estado) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-raza',
        responseType: 'json',
        data: {
            _id: _id,
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
            mostrar_razas();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};