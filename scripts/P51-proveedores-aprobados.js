'use strict';
// Funciones para conexión al backend /////////////////////////////////////////////////////////////////////
const listarProveedoresPendientes = async() => {
    console.log("Informacion de proveedores pendientes solicitada al backend")
    let listaProveedores;
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-proveedores-pendientes',
        responseType: 'json'
    }).then((response) => {
        console.log("hubo respuesta")
        listaProveedores = response.data.usuarios;
        console.log(listaProveedores)
    }).catch((error) => {
        console.log("retorno error")
        console.log(error)
    });

    return listaProveedores;
};

const rechazarProveedoresPendientes = async(pcorreo, pnombreNegocio) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/cambiar-proveedores',
        responseType: 'json',
        data: {
            correo: pcorreo,
            nombreNegocio: pnombreNegocio,
            estado: "bloqueado"
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'El proveedor se bloqueó correctamente',
            'text': response.msj
        }).then(() => {
            window.location.href = 'P51-proveedores-aprobados.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'Error',
            'icon': 'error',
            'text': "Hubo un error en el servidor"
        })
    });
};

const borrar = async(pcorreo) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/borrar-proveedor',
        responseType: 'json',
        data: {
            correo: pcorreo,
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'El proveedor se borró correctamente',
            'text': response.msj
        }).then(() => {
            window.location.href = 'P51-proveedores-aprobados.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'Error',
            'icon': 'error',
            'text': "Hubo un error en el servidor"
        })
    });
};

// Fin de funciones de conexión al back end /////////////////////////////////////////////////////////////////////

// Inicia código del Front End /////////////////////////////////////////////////////////////////////

const tablaProveedoresPendientes = document.querySelector('#tbl-ordenes tbody');
const filtroProveedoresPendientes = document.querySelector('#txt-filtro-ordenes');
let listaProveedores = [];


const LLENARtablaProveedoresPendientes = async() => {
    console.log("Se va a solicitar la informacion de proveedores pendientes")
    listaProveedores = await listarProveedoresPendientes();
    mostrarTablaProveedoresPendientes();
};

//Función que agrega las celdas de especies a la tabla
const mostrarTablaProveedoresPendientes = async => {
    let filtro = filtroProveedoresPendientes.value.toLowerCase();
    tablaProveedoresPendientes.innerHTML = '';
    console.log(listaProveedores);
    listaProveedores.forEach(proveedor => {
        if (proveedor.nombreNegocio.toLowerCase().includes(filtro) && ((proveedor.estado == "preactivo2") || (proveedor.estado == "activo"))) {

            let nombreCompleto = proveedor.nombre;
            nombreCompleto = nombreCompleto.concat(" ");
            nombreCompleto = nombreCompleto.concat(proveedor.apellido1);
            nombreCompleto = nombreCompleto.concat(" ");
            nombreCompleto = nombreCompleto.concat(proveedor.apellido2);
            console.log(nombreCompleto);

            let fila = tablaProveedoresPendientes.insertRow();
            fila.insertCell().innerHTML = proveedor.nombreNegocio;
            fila.insertCell().innerHTML = nombreCompleto;
            fila.insertCell().innerHTML = proveedor.correo;
            fila.insertCell().innerHTML = proveedor.telefono;

            let celdaAcciones = fila.insertCell();

            let btnAceptar = document.createElement('button');
            btnAceptar.innerText = 'Eliminar';

            btnAceptar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea eliminar al proveedor, esta acción es irreversible?',
                    'showCancelButton': true,
                    'confirmButtonText': 'Sí estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        borrar(proveedor.correo);

                    }
                })
            });
            
            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Bloquear';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea bloquear al proveedor?',
                    'showCancelButton': true,
                    'confirmButtonText': 'Sí estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        rechazarProveedoresPendientes(proveedor.correo, proveedor.nombreNegocio);
                    }
                })
            });
            
            celdaAcciones.appendChild(botonEliminar);
            celdaAcciones.appendChild(btnAceptar);
        }
    });
};

LLENARtablaProveedoresPendientes();
filtroProveedoresPendientes.addEventListener('keyup', mostrarTablaProveedoresPendientes)
// BTNAGREGARESPECIE.addEventListener('click', () => {
//     window.location.href = 'P43-especies-agregar.html';
// })