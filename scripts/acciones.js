'use strict';


const REGISTRARACCION = async(pnombre, pusuario, ptipo, pfecha) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-accion',
            responType: 'json',
            data: {
                nombre: pnombre,
                usuario: pusuario,
                tipo: ptipo,
                fecha: pfecha
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La accion ha sido registrada correctamente',
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
    let listaAcciones = [];

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-acciones',
        responseType: 'json'
    }).then((response) => {
        listaAcciones = response.data.acciones;
    }).catch((response) => {

    });

    return listaAcciones;
};