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
    }).catch((error) => {

    });

    return listaEspecies;
};


const MODIFICARESPECIE = async(pnombre, pestado) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-especie',
        responseType: 'json',
        data: {
            nombre: pnombre,
            estado: pestado
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'La especie se modificó correctamente',
            'text': response.msj
        }).then(() => {

        });
    }).catch((error) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};

const ELIMINARESPECIE = async() => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-especie',
            responseType: 'json',
            data: {
                _id: sessionStorage.getItem(objEspecie._id),
            }
        })
        .then((response) => {
            Swal.fire(
                '',
                'La especie ha sido eliminada',
                'success'
            ).then(() => {
                window.location.href = 'P43-mantenimiento-especies.html';
            });
        })
        .catch((error) => {
            console.log(error)
        });
};