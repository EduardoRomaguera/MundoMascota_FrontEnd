"use strict"
const TABLAACTIVIDADCLIENTE = document.querySelector("#tbl-actividad");

const MOSTRARACTIVIDAD = () => {
    listaActividadUsuarios.forEach(actividad => {

        let fila = TABLAACTIVIDADCLIENTE.insertRow();
        fila.insertCell().innerHTML = actividad.Cliente;
        fila.insertCell().innerHTML = actividad.Servicio;
        fila.insertCell().innerHTML = actividad.Fecha;
        fila.insertCell().innerHTML = actividad.Proveedor;

    });
};

MOSTRARACTIVIDAD();