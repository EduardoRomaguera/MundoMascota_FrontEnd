const LISTARPATROCINADOR = async() => {
    let listaPatrocinador;

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-patrocinadores',
        responseType: 'json'
    }).then((response) => {
        listaPatrocinador = response.data.patrocinador;
    }).catch((error) => {
        console.log(error)
    });

    return listaPatrocinador;
};