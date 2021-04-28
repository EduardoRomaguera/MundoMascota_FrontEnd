'use strict';

const registrarPadecimiento = async(pnombre, pespecie, pestado) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-padecimiento',
            responseType: 'json',
            data: {
                nombre: pnombre,
                especie: pespecie,
                estado: pestado,
            }
        })
        .then((response) => {
            Swal.fire({
                title: "Se registro el nuevo padecimiento",
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
                    window.location.href = 'P41-mantenimiento-padecimientos.html';
                });
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el padecimiento',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};