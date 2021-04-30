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

const aprobarProveedoresPendientes = async(pcorreo, pnombreNegocio) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/aceptar-proveedores-pendientes',
        responseType: 'json',
        data: {
            correo: pcorreo,
            nombreNegocio: pnombreNegocio,
            estado: "preactivo2"
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'El proveedor se aprobó correctamente',
            'text': response.msj
        }).then(() => {
            window.location.href = 'P50-solicitudes-proveedores.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'Error',
            'icon': 'error',
            'text': "Hubo un error en el servidor"
        })
    });
};

const rechazarProveedoresPendientes = async(pcorreo, pnombreNegocio) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/rechazar-proveedores-pendientes',
        responseType: 'json',
        data: {
            correo: pcorreo,
            nombreNegocio: pnombreNegocio,
            estado: "rechazado"
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'El proveedor se rechazó correctamente',
            'text': response.msj
        }).then(() => {
            window.location.href = 'P50-solicitudes-proveedores.html';
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
        if (proveedor.nombreNegocio.toLowerCase().includes(filtro) && (proveedor.estado == "pendiente")) {

            let fila = tablaProveedoresPendientes.insertRow();
            fila.insertCell().innerHTML = proveedor.nombreNegocio;
            fila.insertCell().innerHTML = proveedor.nombre;
            fila.insertCell().innerHTML = proveedor.correo;
            fila.insertCell().innerHTML = proveedor.telefono;

            let celdaAcciones = fila.insertCell();

            let btnAceptar = document.createElement('button');
            btnAceptar.innerText = 'Aceptar';

            btnAceptar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea aceptar al proveedor?',
                    'showCancelButton': true,
                    'confirmButtonText': 'Sí estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        aprobarProveedoresPendientes(proveedor.correo, proveedor.nombreNegocio);

                    }
                })
            });
            
            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Rechazar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea rechazar al proveedor?',
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
            celdaAcciones.appendChild(btnAceptar);
            celdaAcciones.appendChild(botonEliminar);
        }
    });
};

LLENARtablaProveedoresPendientes();
filtroProveedoresPendientes.addEventListener('keyup', mostrarTablaProveedoresPendientes)
// BTNAGREGARESPECIE.addEventListener('click', () => {
//     window.location.href = 'P43-especies-agregar.html';
// })