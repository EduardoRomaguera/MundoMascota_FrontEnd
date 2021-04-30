const LISTARPATROCINADOR = async() => {
    let listaPatrocinador;

    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/listar-patrocinadores',
        responseType: 'json'
    }).then((response) => {
        listaPatrocinador = response.data;

    }).catch((error) => {
        console.log(error)
    });

    return listaPatrocinador;
};

const ELIMINARPATROCIANDOR = async(pid) => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-patrocinador',
            responseType: 'json',
            data: {
                _id: pid
            }
        })
        .then((response) => {
            Swal.fire({
                'title': 'La especie ha sido eliminada',
                'icon': 'success',
                'text': response.msj
            }).then(() => {
                window.location.href = 'P43-especies-mantenimiento.html';
            });
        })
        .catch((error) => {
            console.log(error)
        });
};