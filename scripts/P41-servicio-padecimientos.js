'use strict';

const REGISTRARPADECIMIENTO = async(pnombre, pespecie, pestado) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-padecimiento',
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
                'title': 'El padecimiento ha sido registrado correctamente',
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

const LISTARPADECIMIENTOS = async() => {
    let listaPadecimientos;

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-padecimientos',
        responseType: 'json'
    }).then((response) => {
        listaPadecimientos = response.data.padecimientos;
    }).catch((error) => {
        console.log(error)
    });

    return listaPadecimientos;
};


const MODIFICARPADECIMIENTO = async(_id, nombre, tipo, estado) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-padecimiento',
        responseType: 'json',
        data: {
            _id: _id,
            nombre: nombre,
            tipo: tipo,
            estado: estado
        }
    }).then((response) => {
        Swal.fire({
            'title': 'El padecimiento  se modificó correctamente',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            mostrar_padecimientos();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};


const BUSCARPADECIMIENTO = async() => {
    let padecimiento;

    await axios({
        method: 'get',
        params: { _id: localStorage.getItem('padecimiento-seleccionado') },
        url: 'http://localhost:3000/api/buscar-padecimiento-id',
        responseType: 'json'
    }).then((response) => {
        padecimiento = response.data.padecimiento;
    }).catch((response) => {

    });

    return padecimiento;
};

const ELIMINARPADECIMIENTO = async(_id) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/eliminar-padecimiento',
        responseType: 'json',
        data: {
            _id: _id
        }
    }).then((response) => {
        Swal.fire({
            'title': 'El padecimiento ha sido eliminado',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            mostrar_padecimientos();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        });
    });
};