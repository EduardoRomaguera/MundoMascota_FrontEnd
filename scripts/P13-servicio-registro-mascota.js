'use strict';


const REGISTRARMASCOTA = async(pcorreoUsuario, pnombre, ptelefono, pespecie, praza, pimagen) => {

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
                imagen: pimagen
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La mascota ha sido registrada correctamente',
                'text': response.msj
            }).then(() => {
                window.location.href = 'P47-mis-mascotas.html';

            });

        }).catch((response) => {
            Swal.fire({
                'title': response.msj,
                'icon': 'error',
                'text': response.err
            })
        })
};


const LISTARMASCOTAS = async() => {
    let listaMascotas = [];

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-mascotas',
        responseType: 'json'
    }).then((response) => {
        listaMascotas = response.data.mascotas;
    }).catch((error) => {
        console.log(error)
    });

    return listaMascotas;
};

const ELIMINARMASCOTA = async(pid) => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-mascota',
            responseType: 'json',
            data: {
                _id: pid
            }
        })
        .then((response) => {
            Swal.fire({
                    'title': 'La mascota ha sido eliminada',
                    'icon': 'success',
                    'text': response.msj
                }

            ).then(() => {
                window.location.href = 'P47-mis-mascotas.html';
            });
        })
        .catch((error) => {
            console.log(error)
        });
};