'use strict';

const LISTARCLIENTES = async() => {
    let listaClientes = [];

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-clientes',
        responseType: 'json'
    }).then((response) => {
        listaClientes = response.data.Cliente;
    }).catch((response) => {

    });

    return listaClientes;
};