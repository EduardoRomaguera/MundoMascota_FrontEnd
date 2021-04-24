'use strict';

const registrarCliente = async(pnombre, papellido1, papellido2, pcorreo, ptipoID, pidentificacion, pnacimiento, pprovincia, pcanton, pdistrito, psennas) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-usuario-cliente',
            responseType: 'json',
            data: {
                nombre: pnombre,
                apellido1: papellido1,
                apellido2: papellido2,
                correo: pcorreo,
                tipoID: ptipoID,
                identificacion: pidentificacion,
                nacimiento: pnacimiento,
                provincia: pprovincia,
                canton: pcanton,
                distrito: pdistrito,
                sennas: psennas,
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

// const obtenerUsuarios = async() => {
//     let listaUsuarios;

//     await axios({
//             method: 'get',
//             url: 'http://localhost:3000/api/listar-usuarios',
//             responseType: 'json'
//         })
//         .then((response) => {
//             listaUsuarios = response.data.usuarios;
//         })
//         .catch((error) => {
//             console.log(error)
//         });

//     return listaUsuarios;
// };

// const modificarUsuario = async(pcorreo, pnombre, pnacimiento, psexo, ptipo, pestado) => {

//     await axios({
//             method: 'put',
//             url: 'http://localhost:3000/api/modificar-usuario',
//             responseType: 'json',
//             data: {
//                 correo: pcorreo,
//                 nombre: pnombre,
//                 nacimiento: pnacimiento,
//                 sexo: psexo,
//                 tipo: ptipo,
//                 estado: pestado
//             }
//         })
//         .then((response) => {
//             Swal.fire({
//                 'icon': 'success',
//                 'title': 'Usuario modificado',
//                 'text': 'La información fue actualizada correctamente',
//                 'confirmButtonText': 'Entendido'
//             }).then(() => {
//                 window.location.href = 'usuarios.html';
//             });
//         })
//         .catch((error) => {
//             Swal.fire({
//                 'title': 'No se pudo registrar el usuario',
//                 'text': `Ocurrió el siguiente error {error}`,
//                 'icon': 'error'
//             })
//         });
// };

// const eliminarUsuario = async(pcorreo) => {
//     await axios({
//             method: 'delete',
//             url: 'http://localhost:3000/api/eliminar-usuario',
//             responseType: 'json',
//             data: {
//                 correo: pcorreo
//             }
//         })
//         .then((response) => {
//             Swal.fire(
//                 '',
//                 'El usuario ha sido eliminado',
//                 'success'
//             ).then(() => {
//                 window.location.href = 'usuarios.html';
//             });
//         })
//         .catch((error) => {
//             console.log(error)
//         });
// };

// const iniciarSesion = async(pcorreo, pcontrasenna) => {
//     await axios({
//             method: 'post',
//             url: 'http://localhost:3000/api/validar-credenciales',
//             responseType: 'json',
//             data: {
//                 correo: pcorreo,
//                 contrasenna: pcontrasenna
//             }
//         })
//         .then((response) => {
//             if (response.data.estado == 'No encontrado') {
//                 Swal.fire({
//                     'icon': 'warning',
//                     'title': 'No ha podido iniciar sesión',
//                     'text': 'Usuario o contraseña incorrectos',
//                     'confirmButtonText': 'Entendido'
//                 });
//             } else {

//                 Swal.fire({
//                     'icon': 'success',
//                     'title': 'Bienvenido',
//                     'text': 'Ha iniciado sesión correctamente',
//                     'confirmButtonText': 'Entendido'
//                 }).then(() => {
//                     if (response.data.usuario.estado == 'Cambio contraseña') {
//                         window.location.href = 'modificar-contrasenna.html';
//                     } else {
//                         sessionStorage.setItem('usuarioConectado', JSON.stringify(response.data.usuario));
//                         window.location.href = 'dashboard.html';
//                     }
//                 });
//             }
//         })
//         .catch((error) => {
//             console.log(error)
//         });
// };