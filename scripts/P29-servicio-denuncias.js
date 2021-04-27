'use strict';

const registrarDenuncia = async(pdenunciado, prazon, pexplicacion) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-denuncia',
            responseType: 'json',
            data: {
                pdenunciado: pdenunciado,
                prazon: prazon,
                pexplicacion: pexplicacion,
            }
        })
        .then((response) => {
            Swal.fire({
                title: "Reporte enviado con exito",
                text: "Gracias por tu reporte, nos ayuda a mejorar la comunidad",
                confirmButtonText: "OK"
            }).then(() => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Completando registo'
                }).then(() => {
                    window.location.href = 'P09-principal-cliente.html';
                });
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar su denuncia',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};