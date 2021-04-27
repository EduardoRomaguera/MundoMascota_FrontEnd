const REGISTRARSERVICIO = async(pnombre, pdescricion, pcosto) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-servicioCatalogo',
            responType: 'json',
            data: {
                nombre: pnombre,
                descripcion: pdescricion
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El servicio ha sido registrado correctamente',
                'text': response.msj
            }).then(() => {
                window.location.href = 'P44-catalogo-servicios.html';

            });

        }).catch((response) => {
            Swal.fire({
                'title': response.msj,
                'icon': 'error',
                'text': response.err
            })
        })
};

const LISTARSERVICIOS = async() => {
    let listaServicios = [];

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-serviciosCatalogo',
        responseType: 'json'
    }).then((response) => {
        listaServicios = response.data.serviciosCatalogo;
    }).catch((error) => {
        console.log(error)
    });

    return listaServicios;
};


const MODIFICARSERVICIO = async(pid, pnombre, pdescricion) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-servicioCatalogo',
        responseType: 'json',
        data: {
            _id: pid,
            nombre: pnombre,
            descripcion: pdescricion,
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'El servicio se modificó correctamente',
            'text': response.msj
        }).then(() => {
            window.location.href = 'P44-catalogo-servicios.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': error
        })
    });

};

const ELIMINARSERVICIO = async(pid) => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-servicioCatalogo',
            responseType: 'json',
            data: {
                _id: pid
            }
        })
        .then((response) => {
            Swal.fire({
                    'title': 'El servicio ha sido eliminado',
                    'icon': 'success',
                    'text': response.msj
                }

            ).then(() => {
                window.location.href = 'P44-catalogo-servicios.html';
            });
        })
        .catch((error) => {
            console.log(error)
        });
};