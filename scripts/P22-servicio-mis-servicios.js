const REGISTRARSERVICIO = async(pnombre, pdescricion, pcosto) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-servicio',
            responType: 'json',
            data: {
                nombre: pnombre,
                descripcion: pdescricion,
                costo: pcosto
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El servicio ha sido registrado correctamente',
                'text': response.msj
            }).then(() => {
                window.location.href = 'P22-mis-servicios.html';

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
        url: 'http://localhost:3000/api/listar-servicios',
        responseType: 'json'
    }).then((response) => {
        listaServicios = response.data.servicios;
    }).catch((error) => {
        console.log(error)
    });

    return listaServicios;
};


const MODIFICARSERVICIO = async(pid, pnombre, pdescricion, pcosto) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-servicio',
        responseType: 'json',
        data: {
            _id: pid,
            nombre: pnombre,
            descripcion: pdescricion,
            costo: pcosto
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'El servicio se modificó correctamente',
            'text': response.msj
        }).then(() => {
            window.location.href = 'P22-mis-servicios.html';
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
            url: 'http://localhost:3000/api/eliminar-servicio',
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
                window.location.href = 'P22-mis-servicios.html';
            });
        })
        .catch((error) => {
            console.log(error)
        });
};