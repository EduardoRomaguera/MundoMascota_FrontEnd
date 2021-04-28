'use strict';
const LISTARDENUNCIAS = async() => {
    let listaDenuncias = [];

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-denuncias',
        responseType: 'json'
    }).then((response) => {
        listaDenuncias = response.data.denuncias;
    }).catch((response) => {

    });

    return listaDenuncias;
};