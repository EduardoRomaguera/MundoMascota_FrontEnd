'use strict';

const REGISTRARESPECIE = async(pnombre, pestado) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-especie',
            responType: 'json',
            data: {
                nombre: pnombre,
                estado: pestado
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La especie ha sido registrada correctamente',
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

const LISTARESPECIES = async() => {
    let listaEspecies = [];

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-especies',
        responseType: 'json'
    }).then((response) => {
        listaEspecies = response.data.especies;
    }).catch((response) => {

    });

    return listaEspecies;
};


const MODIFICARESPECIE = async(_id, nombre, estado) => {
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