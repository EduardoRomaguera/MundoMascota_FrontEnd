'use strict';
const correoConectado = (JSON.parse(sessionStorage.getItem('usuarioConectado'))).correo;

window.onload = function() {cargarDatos(correoConectado)};
let datos;
datos = JSON.parse(sessionStorage.getItem('datosProveedor'));

// INICIA Funciones para conexión al backend /////////////////////////////////////////////////////////////////////

const cargarDatos = async(pcorreo) => {
  console.log("Informacion del proveedor logueado solicitada al backend")
  let datos;
  await axios({
      method: 'post',
      url: 'http://localhost:3000/api/cargar-datos-proveedor',
      responseType: 'json',
      data: {
        correo: pcorreo
      }
  }).then((response) => {
      console.log("hubo respuesta")
      datos = response.data.usuario;
      sessionStorage.setItem('datosProveedor', JSON.stringify(datos));
      console.log(datos.nombreNegocio)
  }).catch((error) => {
      console.log("retorno error")
      console.log(error)
  });
  return datos;
  }

// FIN DE Funciones para conexión al backend /////////////////////////////////////////////////////////////////////