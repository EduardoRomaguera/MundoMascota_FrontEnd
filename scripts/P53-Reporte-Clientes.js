'use strict';
// Funciones para conexión al backend /////////////////////////////////////////////////////////////////////
const listarProveedoresPendientes = async() => {
    console.log("Informacion de proveedores pendientes solicitada al backend")
    let listaProveedores;
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-clientes',
        responseType: 'json'
    }).then((response) => {
        console.log("hubo respuesta")
        listaProveedores = response.data.clientes;
        console.log(listaProveedores)
    }).catch((error) => {
        console.log("retorno error")
        console.log(error)
    });

    return listaProveedores;
};

const aprobarProveedoresPendientes = async(pcorreo) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/cambiar-cliente',
        responseType: 'json',
        data: {
            correo: pcorreo,
            estado: "bloqueado"
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'El cliente se bloqueó correctamente',
            'text': response.msj
        }).then(() => {
            window.location.href = 'P53-reporte-clientes.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'Error',
            'icon': 'error',
            'text': "Hubo un error en el servidor"
        })
    });
};

const rechazarProveedoresPendientes = async(pcorreo) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/borrar-cliente',
        responseType: 'json',
        data: {
            correo: pcorreo,
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'El cliente se borró correctamente',
            'text': response.msj
        }).then(() => {
            window.location.href = 'P53-reporte-clientes.html';
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
    console.log(listaProveedores);
    mostrarTablaProveedoresPendientes();
};

//Función que agrega las celdas de especies a la tabla
const mostrarTablaProveedoresPendientes = async => {
    let filtro = filtroProveedoresPendientes.value.toLowerCase();
    tablaProveedoresPendientes.innerHTML = '';
    console.log(listaProveedores);
    listaProveedores.forEach(proveedor => {
        if (proveedor.nombre.toLowerCase().includes(filtro) && (proveedor.estado != "bloqueado")) {

            let nombreCompleto = proveedor.nombre;
            nombreCompleto = nombreCompleto.concat(" ");
            nombreCompleto = nombreCompleto.concat(proveedor.apellido1);
            nombreCompleto = nombreCompleto.concat(" ");
            nombreCompleto = nombreCompleto.concat(proveedor.apellido2);
            console.log(nombreCompleto);

            let provincia = proveedor.provincia;
            switch (provincia) {
            case 'sanjose':
                provincia = "San José";
                break;
            case 'heredia':
                provincia = "Heredia";
                break;
            case 'alajuela':
                provincia = "Alajuela";
                break;
            case 'cartago':
                provincia = "Cartago";
                break;
            case 'guanacaste':
                provincia = "Guanacaste";
                break;
            case 'puntarenas':
                provincia = "Puntarenas";
                break;
            case 'limon':
                provincia = "Limón";
                break;
            }

            let fila = tablaProveedoresPendientes.insertRow();
            fila.insertCell().innerHTML = nombreCompleto;
            fila.insertCell().innerHTML = proveedor.correo;
            fila.insertCell().innerHTML = provincia;
            fila.insertCell().innerHTML = proveedor.estado;

            let celdaAcciones = fila.insertCell();

            let btnAceptar = document.createElement('button');
            btnAceptar.innerText = 'Bloquear';

            btnAceptar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea bloquear al cliente?',
                    'showCancelButton': true,
                    'confirmButtonText': 'Sí estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        aprobarProveedoresPendientes(proveedor.correo);

                    }
                })
            });
            

            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = "Eliminar";

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea eliminar al cliente, esta acción es irreversible?',
                    'showCancelButton': true,
                    'confirmButtonText': 'Sí estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                    rechazarProveedoresPendientes(proveedor.correo);
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