'use strict';

const REGISTRARTARJETA = async(pidUsuario, pnombreTarjeta, pnumero, pmesExpiracion, pannoExpiracion, pcodigoSeguridad) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-tarjeta',
            responType: 'json',
            data: {
                idUsuario: pidUsuario,
                nombreTarjeta: pnombreTarjeta,
                numero: pnumero,
                mesExpiracion: pmesExpiracion,
                annoExpiracion: pannoExpiracion,
                codigoSeguridad: pcodigoSeguridad
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La tarjeta ha sido registrada correctamente',
                'text': response.msj
            }).then(() => {
                window.location.href = 'P56-gestion-pago';

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
    let listaTarjetas = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-tarjetas',
        responseType: 'json'
    }).then((response) => {
        listaTarjetas = response.data.tarjetas;
    }).catch((error) => {
        console.log(error)
    });

    return listaTarjetas;
};


const MODIFICARTARJETA = async(pidUsuario, pnombreTarjeta, pnumero, pmesExpiracion, pannoExpiracion, pcodigoSeguridad) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-tarjeta',
        responseType: 'json',
        data: {
            idUsuario: pidUsuario,
            nombreTarjeta: pnombreTarjeta,
            numero: pnumero,
            mesExpiracion: pmesExpiracion,
            annoExpiracion: pannoExpiracion,
            codigoSeguridad: pcodigoSeguridad

        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'La tarjeta se modificó correctamente',
            'text': response.msj
        }).then(() => {
            window.location.href = 'P56-gestion-pago.html';
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
            url: 'http://localhost:3000/api/eliminar-tarjeta',
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
                window.location.href = 'P56-gestion-pago.html';
            });
        })
        .catch((error) => {
            console.log(error)
        });
};