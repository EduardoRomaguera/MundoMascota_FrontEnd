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

const listarServicios = async() => {
    let listaServicios = [];

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-servicios',
        responseType: 'json'
    }).then((response) => {
        listaServicios = response.data.servicios;
    }).catch((error) => {
        console.log(error)
    });

    return listaServicios;
};

// const listarServicios = async() => {
//     console.log("Informacion de proveedores pendientes solicitada al backend")
//     let listaProveedores;
//     await axios({
//         method: 'get',
//         url: 'http://localhost:3000/api/listar-servicios',
//         responseType: 'json'
//     }).then((response) => {
//         console.log("hubo respuesta")
//         listaProveedores = response.data.usuarios;
//         console.log(listaProveedores)
//     }).catch((error) => {
//         console.log("retorno error")
//         console.log(error)
//     });

//     return listaProveedores;
// };

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
            let celdaServicios = fila.insertCell();

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
            botonEliminar.innerText = 'Comprar';

            botonEliminar.addEventListener('click', () => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Agregando servicio'
                  })
            });
            
            let tablaServicios = document.createElement('table');
            tablaServicios.innerText = "prueba";
            // FUNCION PARA TABLA DENTRO DE TABLA

            tablaServicios.innerHTML = '';
            console.log();


            let listaServicios = [];
            const LLENARtablaServicios = async() => {
                console.log("Se va a solicitar la informacion de servicios")
                listaServicios = await listarServicios();
                console.log(listaServicios);
            };
            LLENARtablaServicios();
            listaServicios = ["Servicio : casa", "Volvo", "BMW","x"];
            console.log(listaServicios);
            listaServicios.forEach(Servicio => {
                // if (proveedor.nombreNegocio.toLowerCase().includes(filtro) && ((proveedor.estado == "preactivo2") || (proveedor.estado == "activo"))) {
        
                    let fila = tablaServicios.insertRow();
                    let celdaAcciones1 = fila.insertCell();
        
        
                    let celdaAcciones2 = fila.insertCell();

        
                    let btnAceptar = document.createElement('button');
                    btnAceptar.innerText = 'Eliminar';
                    let servicio = document.createElement('div');
                    servicio.innerText = "Servicio";
        
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
                    
                    let botonEliminar2 = document.createElement('button');
                    botonEliminar2.innerText = 'Comprar';
        
                    botonEliminar2.addEventListener('click', () => {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 1000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                          })
                          
                          Toast.fire({
                            icon: 'success',
                            title: 'Agregando servicio'
                          })
                    });
                    
                    celdaAcciones2.appendChild(botonEliminar2);
                    celdaAcciones1.appendChild(servicio);
                    // celdaAcciones2.appendChild(btnAceptar);
        
            });

            ///


        //     <table id="tbl-ordenes" class="tabla">
        //     <thead>
        //         <tr>
        //             <th>Nombre negocio</th>
        //             <th>Nombre</th>
        //             <th>Correo</th>
        //             <th>Teléfono</th>
        //             <th>Servicios</th>
        //             <th>        </th>
        //         </tr>
        //     </thead>
        //     <tbody>

        //     </tbody>
        // </table>




            celdaServicios.appendChild(tablaServicios);
            // celdaAcciones.appendChild(botonEliminar);
            // celdaAcciones.appendChild(btnAceptar);
            
        }
    });
};

// const LLENARtablaProveedoresPendientes2 = async() => {
//     console.log("Se va a solicitar la informacion de proveedores pendientes")
//     listaProveedores = await listarProveedoresPendientes();
//     mostrarTablaProveedoresPendientes();
// };

//Función que agrega las celdas de especies a la tabla
const mostrarServicios = async => {
    // let filtro = filtroProveedoresPendientes.value.toLowerCase();

};



LLENARtablaProveedoresPendientes();
filtroProveedoresPendientes.addEventListener('keyup', mostrarTablaProveedoresPendientes)
// BTNAGREGARESPECIE.addEventListener('click', () => {
//     window.location.href = 'P43-especies-agregar.html';
// })