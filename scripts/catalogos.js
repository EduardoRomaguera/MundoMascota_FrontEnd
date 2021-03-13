'use strict';

const tabla = () =>{
    listarRazas.forEach(raza => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = raza.titulo;
        fila.insertCell().innerHTML = raza.descripcion;

        let celdaAcciones = fila.insertCell();

        let radioBSelect = document.createElement('radiobutton');
        
    })
}