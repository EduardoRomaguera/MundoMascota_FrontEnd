'use strict';
  const correoConectado = (JSON.parse(sessionStorage.getItem('usuarioConectado'))).correo;
  let datos

  window.onload = function() {cargarDatos(correoConectado), sustituirDatos()};

  const sustituirDatos = () => {


    const inputnombre = document.querySelector('#txt-nombre');
    const inputnombre2 = document.querySelector('#txt-nombre2');
    const inputapellido1 = document.querySelector('#txt-apellido1');
    const inputtipoId = document.querySelector('#txt-tipoId');
    const inputidentificacion = document.querySelector('#txt-identificacion');
    const inputnacimiento = document.querySelector('#txt-nacimiento');
    const inputedad = document.querySelector('#txt-edad');
    const inputcorreo = document.querySelector('#txt-correo');
    const inputtelefono = document.querySelector('#txt-telefono');
    const inputprovincia = document.querySelector('#txt-provincia');
    const inputcanton = document.querySelector('#txt-canton');
    const inputdistrito = document.querySelector('#txt-distrito');
    const inputotrasSennas = document.querySelector('#txt-otrasSennas');
    
    
    
    
    
    
    
    
    

    //Representante legal
    const inputNombreRepPr = document.querySelector('#txt-nombre-rep-pr');
    const inputApellido1RepPr = document.querySelector('#txt-apellido1-rep-pr');
    const inputCorreoRepPr = document.querySelector('#txt-correo-rep-pr');

    datos = JSON.parse(sessionStorage.getItem('datosCliente'));
    
    inputnombre.innerHTML = datos.nombre;
    let apellidos = datos.apellido1;
    apellidos = apellidos.concat(" ");
    apellidos = apellidos.concat(datos.apellido2);
    inputapellido1.innerHTML = apellidos;
    let nombreCompleto = datos.nombre.concat(" ");
    nombreCompleto = nombreCompleto.concat(apellidos);
    inputnombre2.innerHTML = nombreCompleto;
    let tipoId = datos.tipoID;
    switch (tipoId) {
      case 'fisica':
        tipoId = "Física";
          break;
      case 'juridica':
        tipoId = "Jurídica";
          break;
      case 'DIMEX':
        tipoId = "DIMEX";
          break;
    }
    inputtipoId.innerHTML = tipoId;
    inputidentificacion.innerHTML = datos.identificacion;
    let nacimiento = datos.nacimiento;
    let nacimientoSplit = nacimiento.split("T")
    nacimiento = nacimientoSplit[0];

    function cambiarFecha (input) {
      var datePart = input.match(/\d+/g),
      anno = datePart[0].substring(0), // get only two digits
      mes = datePart[1], day = datePart[2];
      return day+'/'+mes+'/'+anno;
    }
    
    nacimiento = cambiarFecha (nacimiento);
    inputnacimiento.innerHTML = nacimiento;
    inputcorreo.innerHTML  = datos.correo;


    let provincia = datos.provincia;
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
    inputprovincia.innerHTML = provincia;
    let canton = datos.canton;
    switch (canton) {
      case "sanJose2": canton = "San José"; break;
      case "escazu2": canton = "Escazú"; break;
      case "desamparados2": canton = "Desamparados"; break;
      case "puriscal2": canton = "Puriscal"; break;
      case "tarrazu2": canton = "Tarrazú"; break;
      case "aserri2": canton = "Aserrí"; break;
      case "mora2": canton = "Mora"; break;
      case "goicoechea2": canton = "Goicoechea"; break;
      case "santaAna2": canton = "Santa Ana"; break;
      case "alajuelita2": canton = "Alajuelita"; break;
      case "vázquezDeCoronado2": canton = "Vázquez De Coronado"; break;
      case "acosta2": canton = "Acosta"; break;
      case "tibas2": canton = "Tibás"; break;
      case "moravia2": canton = "Moravia"; break;
      case "montesDeOca2": canton = "Montes De Oca"; break;
      case "turrubares2": canton = "Turrubares"; break;
      case "dota2": canton = "Dota"; break;
      case "curridabat2": canton = "Curridabat"; break;
      case "perezZeledon2": canton = "Pérez Zeledón"; break;
      case "leonCortes2": canton = "León Cortés"; break;
      case "heredia2": canton = "Heredia"; break;
      case "barva2": canton = "Barva"; break;
      case "santoDomingo2": canton = "Santo Domingo"; break;
      case "santaBarbara2": canton = "Santa Bárbara"; break;
      case "sanRafael2": canton = "San Rafael"; break;
      case "sanIsidro2": canton = "San Isidro"; break;
      case "belen2": canton = "Belén"; break;
      case "flores2": canton = "Flores"; break;
      case "sanPablo2": canton = "San Pablo"; break;
      case "sarapiqui2": canton = "Sarapiquí"; break;
      case "alajuela2": canton = "Alajuela"; break;
      case "sanRamon2": canton = "San Ramón"; break;
      case "grecia2": canton = "Grecia"; break;
      case "sanMateo2": canton = "San Mateo"; break;
      case "atenas2": canton = "Atenas"; break;
      case "naranjo2": canton = "Naranjo"; break;
      case "palmares2": canton = "Palmares"; break;
      case "poas2": canton = "Poás"; break;
      case "orotina2": canton = "Orotina"; break;
      case "sanCarlos2": canton = "San Carlos"; break;
      case "zarcero2": canton = "Zarcero"; break;
      case "sarchi2": canton = "Sarchí"; break;
      case "upala2": canton = "Upala"; break;
      case "losChiles2": canton = "Los Chiles"; break;
      case "guatuso2": canton = "Guatuso"; break;
      case "rioCuarto2": canton = "Río Cuarto"; break;
      case "cartago2": canton = "Cartago"; break;
      case "paraiso2": canton = "Paraíso"; break;
      case "laUnion2": canton = "La Unión"; break;
      case "jimenez2": canton = "Jiménez"; break;
      case "turrialba2": canton = "Turrialba"; break;
      case "alletado2": canton = "Alletado"; break;
      case "oreamuno2": canton = "Oreamuno"; break;
      case "elGuarco2": canton = "El Guarco"; break;
      case "liberia2": canton = "Liberia"; break;
      case "nicoya2": canton = "Nicoya"; break;
      case "santaCruz2": canton = "Santa Cruz"; break;
      case "bagaces2": canton = "Bagaces"; break;
      case "carrillo2": canton = "Carrillo"; break;
      case "cannas2": canton = "Cañas"; break;
      case "abangares2": canton = "Abangares"; break;
      case "tilaran2": canton = "Tilarán"; break;
      case "nandayure2": canton = "Nandayure"; break;
      case "laCruz2": canton = "La Cruz"; break;
      case "hojancha2": canton = "Hojancha"; break;
      case "puntarenas2": canton = "Puntarenas"; break;
      case "esparza2": canton = "Esparza"; break;
      case "buenosAires2": canton = "Buenos Aires"; break;
      case "montesDeOro2": canton = "Montes De Oro"; break;
      case "osa2": canton = "Osa"; break;
      case "quepos2": canton = "Quepos"; break;
      case "golfito2": canton = "Golfito"; break;
      case "cotoBrus2": canton = "Coto Brus"; break;
      case "parrita2": canton = "Parrita"; break;
      case "corredores2": canton = "Corredores"; break;
      case "garabito2": canton = "Garabito"; break;
      case "limon2": canton = "Limón"; break;
      case "pococi2": canton = "Pococí"; break;
      case "siquirres2": canton = "Siquirres"; break;
      case "talamanca2": canton = "Talamanca"; break;
      case "matina2": canton = "Matina"; break;
      case "guácimo2": canton = "Guácimo"; break;
      case "matina2": canton = "Matina"; break;
      case "guácimo2": canton = "Guácimo"; break;
    }
    inputcanton.innerHTML = canton;
    inputdistrito.innerHTML = datos.distrito;
    inputotrasSennas.innerHTML = datos.sennas;

  }


  const BtnEditar = document.querySelector('#btn-editar');

  BtnEditar.addEventListener('click', () => {
    window.location.href = 'P10b-modificar-perfil-cliente.html';
});


// INICIA Funciones para conexión al backend /////////////////////////////////////////////////////////////////////

const cargarDatos = async(pcorreo) => {
  console.log("Informacion del proveedor logueado solicitada al backend")
  let datos;
  await axios({
      method: 'post',
      url: 'http://localhost:3000/api/cargar-datos-cliente',
      responseType: 'json',
      data: {
        correo: pcorreo
      }
  }).then((response) => {
      console.log("hubo respuesta")
      datos = response.data.usuario;
      sessionStorage.setItem('datosCliente', JSON.stringify(datos));
      console.log(datos.nombreNegocio)
  }).catch((error) => {
      console.log("retorno error")
      console.log(error)
  });
  return datos;
  }

// FIN DE Funciones para conexión al backend /////////////////////////////////////////////////////////////////////
