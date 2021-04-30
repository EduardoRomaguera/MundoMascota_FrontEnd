'use strict';


const REGISTRARMASCOTA = async(pcorreoUsuario, pnombre, ptelefono, pespecie, praza, pestado, pimagen) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-mascota',
            responType: 'json',
            data: {
                correoUsuario: pcorreoUsuario,
                nombre: pnombre,
                telefono: ptelefono,
                especie: pespecie,
                raza: praza,
                estado: pestado
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La mascota ha sido registrada correctamente',
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