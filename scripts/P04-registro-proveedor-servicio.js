'use strict';

const registrarUsuario = async(pnombreNegocio, pnombre, papellido1, papellido2, ptipoId, pidentificacion, pnacimiento, pedad, pcorreo, ptelefono, pprovincia, pcanton, pdistrito, potrasSenas, phorario, penlaceFacebook, penlaceInstagram, penlaceTiktok) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-usuario-proveedor',
            responseType: 'json',
            data: {
                nombreNegocio: pnombreNegocio,
                nombre: pnombre,
                apellido1: papellido1,
                apellido2: papellido2,
                tipoId: ptipoId,
                identificacion: pidentificacion,
                nacimiento: pnacimiento,
                edad: pedad,
                correo: pcorreo,
                telefono: ptelefono,
                provincia: pprovincia,
                canton: pcanton,
                distrito: pdistrito,
                otrasSenas: potrasSenas,
                horario: phorario,
                enlaceFacebook: penlaceFacebook,
                enlaceInstagram: penlaceInstagram,
                enlaceTiktok: penlaceTiktok,
            }
        })
        .then((response) => {
            Swal.fire({
                title: "Revise su correo electrónico",
                text: "Se enviarán instrucciones para completar el proceso de registro.",
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
                    window.location.href = 'P05-inicio-sesion.html';
                });
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el usuario',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};