'use strict';

const registrarPatrocinador = async(pnombre, pfrase, pimagen) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-patrocinador',
        responseType: 'json',
        data: {
            nombre: pnombre,
            frase: pfrase,
            imagen: pimagen
        }
    }).then((response) => {
        Swal.fire({
            'title': 'El patrocinador ha sido registrado',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            window.location.href = 'P57-mantenimiento-patrocinadores';
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};

const listarPatrocinador = async() => {
    let lista_patrocinadores = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-patrocinadores',
        responseType: 'json'
    }).then((response) => {
        lista_patrocinadores = response.data.patrocinadores;
    }).catch((response) => {

    });

    return lista_patrocinadores;
};

const modificar_ejercicio = async(_id, nombre, zona) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-ejercicio2',
        responseType: 'json',
        data: {
            _id: _id,
            nombre: nombre,
            zona: zona
        }
    }).then((response) => {
        Swal.fire({
            'title': 'El ejercicio se modificó correctamente',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            mostrar_ejercicios();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};

const cambiar_estado = async(_id, estado) => {
    let url;
    if (estado == 'Inactivo') {
        url = 'http://localhost:3000/api/activar-ejercicio';
    } else {
        url = 'http://localhost:3000/api/desactivar-ejercicio';
    };

    await axios({
        method: 'put',
        url: url,
        responseType: 'json',
        data: {
            _id: _id
        }
    }).then((response) => {
        Swal.fire({
            'title': 'El estado del ejercicio se modificó correctamente',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            mostrar_ejercicios();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};