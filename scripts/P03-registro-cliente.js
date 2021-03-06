//'use strict';
//Validación de espacios de registro de cliente
const inputNombreCl = document.querySelector('#txt-nombre-cl');
const inputApellido1Cl = document.querySelector('#txt-apellido1-cl');
const inputApellido2Cl = document.querySelector('#txt-apellido2-cl');
const inputTipoIdCl = document.querySelector('#txt-tipo-id-cl');
const inputIdentificacionCl = document.querySelector('#txt-identificacion-cl');
const inputNacimientoCl = document.querySelector('#txt-nacimiento-cl');
const inputCorreoCl = document.querySelector('#txt-correo-cl');
const inputProvinciaCl = document.querySelector('#txt-provincia-cl');
const inputCantonCl = document.querySelector('#txt-canton-cl');
const inputDistritoCl = document.querySelector('#txt-distrito-cl');
const inputSennasCl = document.querySelector('#txt-sennas-cl');
const inputNombreMs = document.querySelector('#txt-nombre-ms');
const selectEspecieMs = document.querySelector('#txt-especie-ms');
const selectRazaMs = document.querySelector('#txt-raza-ms');
const inputTelefonoMs = document.querySelector('#txt-telefono-ms');
const btnCompletarRegistro = document.querySelector('#btn-completar-registro');

const validar = () => {
    let error = false;
    let errorCorreo = false;
    let errorIdentificacion = false;

    //Validación de formato de correo electrónico
    let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;

    if (inputCorreoCl.value == '') {
        error = true;
        inputCorreoCl.classList.add('error');
    } else {
        inputCorreoCl.classList.remove('error');
        if (regexCorreo.test(inputCorreoCl.value) == false) {
            errorCorreo = true;
            inputCorreoCl.classList.add('error');
        } else {
            inputCorreoCl.classList.remove('error');
        }
    }

    //   Algo pasa con el Regex: /^[0-9]{9}$/
    //Validación de formato de cédula
    let regexIdentificacion = /^[0-9]{9}$/;
    if (inputIdentificacionCl.value == '') {
        error = true;
        inputIdentificacionCl.classList.add('error');
    } else {
        inputIdentificacionCl.classList.remove('error');
        // En la línea siguiente no está habilitada la validacion, hay que devolverlo a true el error y ponerle add error
        if (regexIdentificacion.test(inputIdentificacionCl.value) == false) {
            errorIdentificacion = true;
            inputIdentificacionCl.classList.add('error');
        } else {
            inputIdentificacionCl.classList.remove('error');
        }
    }

    //Validación de espacios vacios
    if (inputNombreCl.value == '') {
        error = true;
        inputNombreCl.classList.add('error');
    } else {
        inputNombreCl.classList.remove('error');
    }

    if (inputApellido1Cl.value == '') {
        error = true;
        inputApellido1Cl.classList.add('error');
    } else {
        inputApellido1Cl.classList.remove('error');
    }

    if (inputTipoIdCl.value == '') {
        error = true;
        inputTipoIdCl.classList.add('error');
    } else {
        inputTipoIdCl.classList.remove('error');
    }

    if (inputNacimientoCl.value == '') {
        error = true;
        inputNacimientoCl.classList.add('error');
    } else {
        inputNacimientoCl.classList.remove('error');
    }

    if (inputProvinciaCl.value == '') {
        error = true;
        inputProvinciaCl.classList.add('error');
    } else {
        inputProvinciaCl.classList.remove('error');
    }

    if (inputCantonCl.value == '') {
        error = true;
        inputCantonCl.classList.add('error');
    } else {
        inputCantonCl.classList.remove('error');
    }

    if (inputDistritoCl.value == '') {
        error = true;
        inputDistritoCl.classList.add('error');
    } else {
        inputDistritoCl.classList.remove('error');
    }

    if (inputSennasCl.value == '') {
        error = true;
        inputSennasCl.classList.add('error');
    } else {
        inputSennasCl.classList.remove('error');
    }

    if (error == true) {
        Swal.fire({
            imageUrl: "images/error.png",
            title: "¡OOPS! Algo pasó aqui",
            text: "Dejo un espacio vacio",
            confirmButtonText: "Intentar de nuevo"
        });
    } else {}

    if (errorCorreo == true) {
        Swal.fire({
            imageUrl: "images/error.png",
            title: "¡OOPS! Algo pasó aqui",
            text: "El correo no es válido",
            confirmButtonText: "Intentar de nuevo"
        });
    } else {}

    if (errorIdentificacion == true) {
        Swal.fire({
            imageUrl: "images/error.png",
            title: "¡OOPS! Algo pasó aqui",
            text: "La identificación no es válida",
            confirmButtonText: "Intente de nuevo"
        });
    }

    let nacimiento = new Date(inputNacimientoCl.value);
    let edad = calcularEdad(nacimiento);
    console.log(edad);
    //Validación de edad
    if (edad < 18) {
        inputNacimientoCl.classList.add('error');
        error = true;
        Swal.fire({
            imageUrl: "images/error.png",
            title: "Espera",
            text: "Solo se permite el registro de mayores de 18 años",
            confirmButtonText: "Regresar"
        });
    }
    if (error == false && errorCorreo == false && errorIdentificacion == false) {
        registrar();
        console.log("Se envió el registro al backend");
    }
};

const calcularEdad = (nacimiento) => {
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - nacimiento.getFullYear();

    if (fechaActual.getMonth() < nacimiento.getMonth()) {
        edad = edad - 1;
    } else {
        if ((fechaActual.getMonth() == nacimiento.getMonth()) && (fechaActual.getUTCDate() < nacimiento.getUTCDate())) {
            edad = edad - 1;
        }
    }
    return edad;
};


const registrar = () => {
    let nombre = inputNombreCl.value;
    let apellido1 = inputApellido1Cl.value;
    let apellido2 = inputApellido2Cl.value;
    let correo = inputCorreoCl.value;
    let tipoId = inputTipoIdCl.value;
    let identificacion = inputIdentificacionCl.value;
    let nacimiento = new Date(inputNacimientoCl.value);
    let provincia = inputProvinciaCl.value;
    let canton = inputCantonCl.value;
    let distrito = inputDistritoCl.value;
    let sennas = inputSennasCl.value;
    registrarCliente(nombre, apellido1, apellido2, correo, tipoId, identificacion, nacimiento, provincia, canton, distrito, sennas);
};
btnCompletarRegistro.addEventListener('click', function() { validar() });

//Codigo para Selects dinámicos de canton, cantón y distrito//
function lista(texto, valor) {
    this.texto = texto
    this.valor = valor
}
let sanjose = new Array()
sanjose[0]  =  new  lista("Cantón", "")
sanjose[1]  =  new  lista("San José", "sanJose2")
sanjose[2]  =  new  lista("Escazú", "escazu2")
sanjose[3]  =  new  lista("Desamparados", "desamparados2")
sanjose[4]  =  new  lista("Puriscal", "puriscal2")
sanjose[5]  =  new  lista("Tarrazú", "tarrazu2")
sanjose[6]  =  new  lista("Aserrí", "aserri2")
sanjose[7]  =  new  lista("Mora", "mora2")
sanjose[8]  =  new  lista("Goicoechea", "goicoechea2")
sanjose[9]  =  new  lista("Santa Ana", "santaAna2")
sanjose[10]  =  new  lista("Alajuelita", "alajuelita2")
sanjose[11]  =  new  lista("Vázquez De Coronado", "vázquezDeCoronado2")
sanjose[12]  =  new  lista("Acosta", "acosta2")
sanjose[13]  =  new  lista("Tibás", "tibas2")
sanjose[14]  =  new  lista("Moravia", "moravia2")
sanjose[15]  =  new  lista("Montes De Oca", "montesDeOca2")
sanjose[16]  =  new  lista("Turrubares", "turrubares2")
sanjose[17]  =  new  lista("Dota", "dota2")
sanjose[18]  =  new  lista("Curridabat", "curridabat2")
sanjose[19]  =  new  lista("Pérez Zeledón", "perezZeledon2")
sanjose[20]  =  new  lista("León Cortés", "leonCortes2")

let heredia = new Array()
heredia[0]  =  new  lista("Cantón", "")
heredia[1]  =  new  lista("Heredia", "heredia2")
heredia[2]  =  new  lista("Barva", "barva2")
heredia[3]  =  new  lista("Santo Domingo", "santoDomingo2")
heredia[4]  =  new  lista("Santa Bárbara", "santaBarbara2")
heredia[5]  =  new  lista("San Rafael", "sanRafael2")
heredia[6]  =  new  lista("San Isidro", "sanIsidro2")
heredia[7]  =  new  lista("Belén", "belen2")
heredia[8]  =  new  lista("Flores", "flores2")
heredia[9]  =  new  lista("San Pablo", "sanPablo2")
heredia[10]  =  new  lista("Sarapiquí", "sarapiqui2")

let alajuela = new Array()
alajuela[0]  =  new  lista("Cantón", "")
alajuela[1]  =  new  lista("Alajuela", "alajuela2")
alajuela[2]  =  new  lista("San Ramón", "sanRamon2")
alajuela[3]  =  new  lista("Grecia", "grecia2")
alajuela[4]  =  new  lista("San Mateo", "sanMateo2")
alajuela[5]  =  new  lista("Atenas", "atenas2")
alajuela[6]  =  new  lista("Naranjo", "naranjo2")
alajuela[7]  =  new  lista("Palmares", "palmares2")
alajuela[8]  =  new  lista("Poás", "poas2")
alajuela[9]  =  new  lista("Orotina", "orotina2")
alajuela[10]  =  new  lista("San Carlos", "sanCarlos2")
alajuela[11]  =  new  lista("Zarcero", "zarcero2")
alajuela[12]  =  new  lista("Sarchí", "sarchi2")
alajuela[13]  =  new  lista("Upala", "upala2")
alajuela[14]  =  new  lista("Los Chiles", "losChiles2")
alajuela[15]  =  new  lista("Guatuso", "guatuso2")
alajuela[16]  =  new  lista("Río Cuarto", "rioCuarto2")

let cartago = new Array()
cartago[0]  =  new  lista("Cantón", "")
cartago[1]  =  new  lista("Cartago", "cartago2")
cartago[2]  =  new  lista("Paraíso", "paraiso2")
cartago[3]  =  new  lista("La Unión", "laUnion2")
cartago[4]  =  new  lista("Jiménez", "jimenez2")
cartago[5]  =  new  lista("Turrialba", "turrialba2")
cartago[6]  =  new  lista("Alletado", "alletado2")
cartago[7]  =  new  lista("Oreamuno", "oreamuno2")
cartago[8]  =  new  lista("El Guarco", "elGuarco2")

let guanacaste = new Array()
guanacaste[0]  =  new  lista("Cantón", "")
guanacaste[1]  =  new  lista("Liberia", "liberia2")
guanacaste[2]  =  new  lista("Nicoya", "nicoya2")
guanacaste[3]  =  new  lista("Santa Cruz", "santaCruz2")
guanacaste[4]  =  new  lista("Bagaces", "bagaces2")
guanacaste[5]  =  new  lista("Carrillo", "carrillo2")
guanacaste[6]  =  new  lista("Cañas", "cannas2")
guanacaste[7]  =  new  lista("Abangares", "abangares2")
guanacaste[8]  =  new  lista("Tilarán", "tilaran2")
guanacaste[9]  =  new  lista("Nandayure", "nandayure2")
guanacaste[10]  =  new  lista("La Cruz", "laCruz2")
guanacaste[11]  =  new  lista("Hojancha", "hojancha2")

let puntarenas = new Array()
puntarenas[0]  =  new  lista("Cantón", "")
puntarenas[1]  =  new  lista("Puntarenas", "puntarenas2")
puntarenas[2]  =  new  lista("Esparza", "esparza2")
puntarenas[3]  =  new  lista("Buenos Aires", "buenosAires2")
puntarenas[4]  =  new  lista("Montes De Oro", "montesDeOro2")
puntarenas[5]  =  new  lista("Osa", "osa2")
puntarenas[6]  =  new  lista("Quepos", "quepos2")
puntarenas[7]  =  new  lista("Golfito", "golfito2")
puntarenas[8]  =  new  lista("Coto Brus", "cotoBrus2")
puntarenas[9]  =  new  lista("Parrita", "parrita2")
puntarenas[10]  =  new  lista("Corredores", "corredores2")
puntarenas[11]  =  new  lista("Garabito", "garabito2")


let limon = new Array()
limon[0]  =  new  lista("Cantón", "")
limon[1]  =  new  lista("Limón", "limon2")
limon[2]  =  new  lista("Pococí", "pococi2")
limon[3]  =  new  lista("Siquirres", "siquirres2")
limon[4]  =  new  lista("Talamanca", "talamanca2")
limon[5]  =  new  lista("Matina", "matina2")
limon[6]  =  new  lista("Guácimo", "guácimo2")

// Nivel 3, Distritos
let sanJose2 = new Array()
sanJose2[0]  =  new  lista("Distrito", "")
sanJose2[1]  =  new  lista("San José")
sanJose2[2]  =  new  lista("Carmen")
sanJose2[3]  =  new  lista("Merced")
sanJose2[4]  =  new  lista("Hospital")
sanJose2[5]  =  new  lista("Catedral")
sanJose2[6]  =  new  lista("Zapote")
sanJose2[7]  =  new  lista("San Francisco de Dos Ríos")
sanJose2[8]  =  new  lista("Uruca")
sanJose2[9]  =  new  lista("Mata Redonda")
sanJose2[10]  =  new  lista("Pavas")
sanJose2[11]  =  new  lista("Hatillo ")
sanJose2[12]  =  new  lista("San Sebastián     ")
let escazu2 = new Array()
escazu2[0]  =  new  lista("Distrito", "")
escazu2[1]  =  new  lista("Escazú  ")
escazu2[2]  =  new  lista("San Antonio       ")
escazu2[3]  =  new  lista("San Rafael        ")
let desamparados2 = new Array()
desamparados2[0]  =  new  lista("Distrito", "")
desamparados2[1]  =  new  lista("Desamparados")
desamparados2[2]  =  new  lista("San Miguel")
desamparados2[3]  =  new  lista("San Juan de Dios")
desamparados2[4]  =  new  lista("San Rafael Arriba")
desamparados2[5]  =  new  lista("San Antonio")
desamparados2[6]  =  new  lista("Frailes ")
desamparados2[7]  =  new  lista("Patarrá")
desamparados2[8]  =  new  lista("San Cristóbal")
desamparados2[9]  =  new  lista("Rosario")
desamparados2[10]  =  new  lista("Damas")
desamparados2[11]  =  new  lista("San Rafael Abajo")
desamparados2[12]  =  new  lista("Gravilias")
desamparados2[13]  =  new  lista("Los Guido")
desamparados2[14]  =  new  lista("Santiago")
desamparados2[15]  =  new  lista("Mercedes Sur      ")
desamparados2[16]  =  new  lista("Barbacoas         ")
desamparados2[17]  =  new  lista("San Rafael        ")
desamparados2[18]  =  new  lista("Candelarita       ")
desamparados2[19]  =  new  lista("San Antonio       ")
desamparados2[20]  =  new  lista("Chires  ")
desamparados2[21]  =  new  lista("San Marcos        ")
desamparados2[22]  =  new  lista("San Lorenzo       ")
desamparados2[23]  =  new  lista("San Carlos        ")
let puriscal2 = new Array()
puriscal2[0]  =  new  lista("Distrito", "")
puriscal2[1]  =  new  lista("Santiago          ")
puriscal2[2]  =  new  lista("Mercedes Sur      ")
puriscal2[3]  =  new  lista("Barbacoas         ")
puriscal2[4]  =  new  lista("San Rafael        ")
puriscal2[5]  =  new  lista("Candelarita       ")
puriscal2[6]  =  new  lista("San Antonio       ")
puriscal2[7]  =  new  lista("Chires            ")
let tarrazu2 = new Array()
tarrazu2[0]  =  new  lista("Distrito", "")
tarrazu2[1]  =  new  lista("San Marcos        ")
tarrazu2[2]  =  new  lista("San Lorenzo       ")
tarrazu2[3]  =  new  lista("San Carlos        ")
let aserri2 = new Array()
aserri2[0]  =  new  lista("Distrito", "")
aserri2[1]  =  new  lista("Aserrí  ")
aserri2[2]  =  new  lista("Tarbaca     ")
aserri2[3]  =  new  lista("Vuelta de Jorco   ")
aserri2[4]  =  new  lista("San Gabriel       ")
aserri2[5]  =  new  lista("Legua ")
aserri2[6]  =  new  lista("Salitrillos       ")
let mora2 = new Array()
mora2[0]  =  new  lista("Distrito", "")
mora2[1]  =  new  lista("Colón  ")
mora2[2]  =  new  lista("Guayabo ")
mora2[3]  =  new  lista("Tabarcia")
mora2[4]  =  new  lista("Piedras Negras    ")
mora2[5]  =  new  lista("Picagres")
mora2[6]  =  new  lista("Jaris")
let goicoechea2 = new Array()
goicoechea2[0]  =  new  lista("Distrito", "")
goicoechea2[1]  =  new  lista("Guadalupe         ")
goicoechea2[2]  =  new  lista("San Francisco     ")
goicoechea2[3]  =  new  lista("Calle Blancos     ")
goicoechea2[4]  =  new  lista("Mata de Plátano   ")
goicoechea2[5]  =  new  lista("Ipís   ")
goicoechea2[6]  =  new  lista("Rancho Redondo    ")
goicoechea2[7]  =  new  lista("Purral  ")
let santaAna2 = new Array()
santaAna2[0]  =  new  lista("Distrito", "")
santaAna2[1]  =  new  lista("Santa Ana         ")
santaAna2[2]  =  new  lista("Salitral")
santaAna2[3]  =  new  lista("Pozos   ")
santaAna2[4]  =  new  lista("Uruca")
santaAna2[5]  =  new  lista("Piedades")
santaAna2[6]  =  new  lista("Brasil  ")
let alajuelita2 = new Array()
alajuelita2[0]  =  new  lista("Distrito", "")
alajuelita2[1]  =  new  lista("Alajuelita")
alajuelita2[2]  =  new  lista("San Josecito      ")
alajuelita2[3]  =  new  lista("San Antonio       ")
alajuelita2[4]  =  new  lista("Concepción        ")
alajuelita2[5]  =  new  lista("San Felipe        ")
let vázquezDeCoronado2 = new Array()
vázquezDeCoronado2[0]  =  new  lista("Distrito", "")
vázquezDeCoronado2[1]  =  new  lista("San Isidro        ")
vázquezDeCoronado2[2]  =  new  lista("San Rafael        ")
vázquezDeCoronado2[3]  =  new  lista("Dulce Nombre de Jesús")
vázquezDeCoronado2[4]  =  new  lista("Patalillo         ")
vázquezDeCoronado2[5]  =  new  lista("Cascajal")
let acosta2 = new Array()
acosta2[0]  =  new  lista("Distrito", "")
acosta2[1]  =  new  lista("San Ignacio       ")
acosta2[2]  =  new  lista("Guaitil ")
acosta2[3]  =  new  lista("Cangrejal         ")
acosta2[4]  =  new  lista("Sabanillas        ")
let tibas2 = new Array()
tibas2[0]  =  new  lista("Distrito", "")
tibas2[1]  =  new  lista("San Juan")
tibas2[2]  =  new  lista("Cinco Esquinas    ")
tibas2[3]  =  new  lista("Anselmo Llorente  ")
tibas2[4]  =  new  lista("León XIII     ")
tibas2[5]  =  new  lista("Colima  ")
let moravia2 = new Array()
moravia2[0]  =  new  lista("Distrito", "")
moravia2[1]  =  new  lista("San Vicente       ")
moravia2[2]  =  new  lista("San Jerónimo      ")
moravia2[3]  =  new  lista("La Trinidad       ")
let montesDeOca2 = new Array()
montesDeOca2[0]  =  new  lista("Distrito", "")
montesDeOca2[1]  =  new  lista("San Pedro         ")
montesDeOca2[2]  =  new  lista("Sabanilla         ")
montesDeOca2[3]  =  new  lista("Mercedes")
montesDeOca2[4]  =  new  lista("San Rafael        ")
let turrubares2 = new Array()
turrubares2[0]  =  new  lista("Distrito", "")
turrubares2[1]  =  new  lista("San Pablo         ")
turrubares2[2]  =  new  lista("San Pedro         ")
turrubares2[3]  =  new  lista("San Juan de Mata  ")
turrubares2[4]  =  new  lista("Carara")
let dota2 = new Array()
dota2[0]  =  new  lista("Distrito", "")
dota2[1]  =  new  lista("Santa María       ")
dota2[2]  =  new  lista("Jardín  ")
dota2[3]  =  new  lista("Copey  ")
let curridabat2 = new Array()
curridabat2[0]  =  new  lista("Distrito", "")
curridabat2[1]  =  new  lista("Curridabat        ")
curridabat2[2]  =  new  lista("Granadilla        ")
curridabat2[3]  =  new  lista("Sánchez ")
curridabat2[4]  =  new  lista("Tirrases")
let perezZeledon2 = new Array()
perezZeledon2[0]  =  new  lista("Distrito", "")
perezZeledon2[1]  =  new  lista("San Isidro de El General")
perezZeledon2[2]  =  new  lista("El General        ")
perezZeledon2[3]  =  new  lista("Daniel Flores     ")
perezZeledon2[4]  =  new  lista("Rivas  ")
perezZeledon2[5]  =  new  lista("San Pedro         ")
perezZeledon2[6]  =  new  lista("Platanares        ")
perezZeledon2[7]  =  new  lista("Pejibaye")
perezZeledon2[8]  =  new  lista("Cajón  ")
perezZeledon2[9]  =  new  lista("Barú   ")
perezZeledon2[10]  =  new  lista("Río Nuevo         ")
perezZeledon2[11]  =  new  lista("Páramo  ")
perezZeledon2[12]  =  new  lista("La Amistad")
let leonCortes2 = new Array()
leonCortes2[0]  =  new  lista("Distrito", "")
leonCortes2[1]  =  new  lista("San Pablo         ")
leonCortes2[2]  =  new  lista("San Andrés        ")
leonCortes2[3]  =  new  lista("Llano Bonito      ")
leonCortes2[4]  =  new  lista("San Isidro        ")
leonCortes2[5]  =  new  lista("Santa Cruz        ")
leonCortes2[6]  =  new  lista("San Antonio       ")
let heredia2 = new Array()
heredia2[0]  =  new  lista("Distrito", "")
heredia2[1]  =  new  lista("Heredia           ")
heredia2[2]  =  new  lista("Mercedes          ")
heredia2[3]  =  new  lista("San Francisco     ")
heredia2[4]  =  new  lista("Ulloa            ")
heredia2[5]  =  new  lista("leta Blanca       ")
let barva2 = new Array()
barva2[0]  =  new  lista("Distrito", "")
barva2[1]  =  new  lista("Barva            ")
barva2[2]  =  new  lista("San Pedro         ")
barva2[3]  =  new  lista("San Pablo         ")
barva2[4]  =  new  lista("San Roque         ")
barva2[5]  =  new  lista("Santa Lucía       ")
barva2[6]  =  new  lista("San José de la Montaña")
let santoDomingo2 = new Array()
santoDomingo2[0]  =  new  lista("Distrito", "")
santoDomingo2[1]  =  new  lista("Santo Domingo     ")
santoDomingo2[2]  =  new  lista("San Vicente       ")
santoDomingo2[3]  =  new  lista("San Miguel        ")
santoDomingo2[4]  =  new  lista("Paracito          ")
santoDomingo2[5]  =  new  lista("Santo Tomás       ")
santoDomingo2[6]  =  new  lista("Santa Rosa        ")
santoDomingo2[7]  =  new  lista("Tures            ")
santoDomingo2[8]  =  new  lista("Pará            ")
let santaBarbara2 = new Array()
santaBarbara2[0]  =  new  lista("Distrito", "")
santaBarbara2[1]  =  new  lista("Santa Bárbara     ")
santaBarbara2[2]  =  new  lista("San Pedro         ")
santaBarbara2[3]  =  new  lista("San Juan          ")
santaBarbara2[4]  =  new  lista("Jesús            ")
santaBarbara2[5]  =  new  lista("Santo Domingo")
santaBarbara2[6]  =  new  lista("Purabá            ")
let sanRafael2 = new Array()
sanRafael2[0]  =  new  lista("Distrito", "")
sanRafael2[1]  =  new  lista("San Rafael        ")
sanRafael2[2]  =  new  lista("San Josecito      ")
sanRafael2[3]  =  new  lista("Santiago          ")
sanRafael2[4]  =  new  lista("Ángeles           ")
sanRafael2[5]  =  new  lista("Concepción        ")
let sanIsidro2 = new Array()
sanIsidro2[0]  =  new  lista("Distrito", "")
sanIsidro2[1]  =  new  lista("San Isidro        ")
sanIsidro2[2]  =  new  lista("San José          ")
sanIsidro2[3]  =  new  lista("Concepción        ")
sanIsidro2[4]  =  new  lista("San Francisco     ")
let belen2 = new Array()
belen2[0]  =  new  lista("Distrito", "")
belen2[1]  =  new  lista("San Antonio       ")
belen2[2]  =  new  lista("La Ribera         ")
belen2[3]  =  new  lista("La Asunción       ")
let flores2 = new Array()
flores2[0]  =  new  lista("Distrito", "")
flores2[1]  =  new  lista("San Joaquín       ")
flores2[2]  =  new  lista("Barrantes         ")
flores2[3]  =  new  lista("Llorente          ")
let sanPablo2 = new Array()
sanPablo2[0]  =  new  lista("Distrito", "")
sanPablo2[1]  =  new  lista("San Pablo         ")
sanPablo2[2]  =  new  lista("Rincón Sabanilla")
let sarapiqui2 = new Array()
sarapiqui2[0]  =  new  lista("Distrito", "")
sarapiqui2[1]  =  new  lista("Puerto Viejo      ")
sarapiqui2[2]  =  new  lista("La Virgen         ")
sarapiqui2[3]  =  new  lista("Las Horquetas     ")
sarapiqui2[4]  =  new  lista("Llanuras del Gaspar")
sarapiqui2[5]  =  new  lista("Cureña            ")
let alajuela2 = new Array()
alajuela2[0]  =  new  lista("Distrito", "")
alajuela2[1]  =  new  lista("Alajuela          ")
alajuela2[2]  =  new  lista("San José          ")
alajuela2[3]  =  new  lista("Carrizal          ")
alajuela2[4]  =  new  lista("San Antonio       ")
alajuela2[5]  =  new  lista("Guácima           ")
alajuela2[6]  =  new  lista("San Isidro        ")
alajuela2[7]  =  new  lista("Sabanilla         ")
alajuela2[8]  =  new  lista("San Rafael        ")
alajuela2[9]  =  new  lista("Río Segundo       ")
alajuela2[10]  =  new  lista("Desamparados      ")
alajuela2[11]  =  new  lista("Turrúcares        ")
alajuela2[12]  =  new  lista("Tambor            ")
alajuela2[13]  =  new  lista("Garita          ")
alajuela2[14]  =  new  lista("Sarapiquí         ")
let sanRamon2 = new Array()
sanRamon2[0]  =  new  lista("Distrito", "")
sanRamon2[1]  =  new  lista("San Ramón         ")
sanRamon2[2]  =  new  lista("Santiago          ")
sanRamon2[3]  =  new  lista("San Juan          ")
sanRamon2[4]  =  new  lista("Piedades Norte    ")
sanRamon2[5]  =  new  lista("Piedades Sur      ")
sanRamon2[6]  =  new  lista("San Rafael        ")
sanRamon2[7]  =  new  lista("San Isidro        ")
sanRamon2[8]  =  new  lista("Ángeles           ")
sanRamon2[9]  =  new  lista("Alfaro")
sanRamon2[10]  =  new  lista("Volio            ")
sanRamon2[11]  =  new  lista("Concepción        ")
sanRamon2[12]  =  new  lista("Zapotal           ")
sanRamon2[13]  =  new  lista("Peñas Blancas")
sanRamon2[14]  =  new  lista("San Lorenzo")
let grecia2 = new Array()
grecia2[0]  =  new  lista("Distrito", "")
grecia2[1]  =  new  lista("Grecia            ")
grecia2[2]  =  new  lista("San Isidro        ")
grecia2[3]  =  new  lista("San José          ")
grecia2[4]  =  new  lista("San Roque         ")
grecia2[5]  =  new  lista("Tacares           ")
grecia2[6]  =  new  lista("Río Cuarto        ")
grecia2[7]  =  new  lista("Puente de Piedra  ")
grecia2[8]  =  new  lista("Bolílet           ")
let sanMateo2 = new Array()
sanMateo2[0]  =  new  lista("Distrito", "")
sanMateo2[1]  =  new  lista("San Mateo         ")
sanMateo2[2]  =  new  lista("Jesús María       ")
sanMateo2[3]  =  new  lista("Labrador")
let atenas2 = new Array()
atenas2[0]  =  new  lista("Distrito", "")
atenas2[1]  =  new  lista("Atenas            ")
atenas2[2]  =  new  lista("Jesús            ")
atenas2[3]  =  new  lista("Mercedes          ")
atenas2[4]  =  new  lista("San Isidro        ")
atenas2[5]  =  new  lista("Concepción        ")
atenas2[6]  =  new  lista("San José          ")
atenas2[7]  =  new  lista("Santa Eulalia     ")
atenas2[8]  =  new  lista("Escobal")
let naranjo2 = new Array()
naranjo2[0]  =  new  lista("Distrito", "")
naranjo2[1]  =  new  lista("Naranjo           ")
naranjo2[2]  =  new  lista("San Miguel        ")
naranjo2[3]  =  new  lista("San José          ")
naranjo2[4]  =  new  lista("Cirrí Sur         ")
naranjo2[5]  =  new  lista("San Jerónimo      ")
naranjo2[6]  =  new  lista("San Juan          ")
naranjo2[7]  =  new  lista("El Rosario        ")
naranjo2[8]  =  new  lista("Palmitos")
let palmares2 = new Array()
palmares2[0]  =  new  lista("Distrito", "")
palmares2[1]  =  new  lista("Palmares          ")
palmares2[2]  =  new  lista("Zaragoza          ")
palmares2[3]  =  new  lista("Buenos Aires      ")
palmares2[4]  =  new  lista("Santiago          ")
palmares2[5]  =  new  lista("Candelaria        ")
palmares2[6]  =  new  lista("Esquipulas        ")
palmares2[7]  =  new  lista("La Granja         ")
let poas2 = new Array()
poas2[0]  =  new  lista("Distrito", "")
poas2[1]  =  new  lista("San Pedro         ")
poas2[2]  =  new  lista("San Juan          ")
poas2[3]  =  new  lista("San Rafael        ")
poas2[4]  =  new  lista("Carrillos         ")
poas2[5]  =  new  lista("Sabana Redonda    ")
let orotina2 = new Array()
orotina2[0]  =  new  lista("Distrito", "")
orotina2[1]  =  new  lista("Orotina           ")
orotina2[2]  =  new  lista("El Mastate        ")
orotina2[3]  =  new  lista("Coyolar           ")
orotina2[4]  =  new  lista("La Ceiba          ")
let sanCarlos2 = new Array()
sanCarlos2[0]  =  new  lista("Distrito", "")
sanCarlos2[1]  =  new  lista("Quesada           ")
sanCarlos2[2]  =  new  lista("Florencia         ")
sanCarlos2[3]  =  new  lista("Buenavista        ")
sanCarlos2[4]  =  new  lista("Aguas Zarcas      ")
sanCarlos2[5]  =  new  lista("Venecia           ")
sanCarlos2[6]  =  new  lista("Pital            ")
sanCarlos2[7]  =  new  lista("La Fortuna        ")
sanCarlos2[8]  =  new  lista("La Tigra          ")
sanCarlos2[9]  =  new  lista("La Palmera        ")
sanCarlos2[10]  =  new  lista("Venado            ")
sanCarlos2[11]  =  new  lista("Cutris            ")
sanCarlos2[12]  =  new  lista("Monterrey         ")
sanCarlos2[13]  =  new  lista("Pocosol           ")
let zarcero2 = new Array()
zarcero2[0]  =  new  lista("Distrito", "")
zarcero2[1]  =  new  lista("Zarcero           ")
zarcero2[2]  =  new  lista("Laguna            ")
zarcero2[3]  =  new  lista("Tapesco           ")
zarcero2[4]  =  new  lista("Guadalupe         ")
zarcero2[5]  =  new  lista("Palmira           ")
zarcero2[6]  =  new  lista("Zapote            ")
zarcero2[7]  =  new  lista("Brisas          ")
let sarchi2 = new Array()
sarchi2[0]  =  new  lista("Distrito", "")
sarchi2[1]  =  new  lista("Sarchí Norte      ")
sarchi2[2]  =  new  lista("Sarchí Sur        ")
sarchi2[3]  =  new  lista("Toro Amarillo     ")
sarchi2[4]  =  new  lista("San Pedro         ")
sarchi2[5]  =  new  lista("Rodríguez         ")
let upala2 = new Array()
upala2[0]  =  new  lista("Distrito", "")
upala2[1]  =  new  lista("Upala            ")
upala2[2]  =  new  lista("Aguas Claras      ")
upala2[3]  =  new  lista("San José (Pizote)")
upala2[4]  =  new  lista("Bijagua           ")
upala2[5]  =  new  lista("Delicias          ")
upala2[6]  =  new  lista("Dos Ríos          ")
upala2[7]  =  new  lista("Yolillal          ")
upala2[8]  =  new  lista("Canalete")
let losChiles2 = new Array()
losChiles2[0]  =  new  lista("Distrito", "")
losChiles2[1]  =  new  lista("Los Chiles        ")
losChiles2[2]  =  new  lista("Caño Negro        ")
losChiles2[3]  =  new  lista("El Amparo         ")
losChiles2[4]  =  new  lista("San Jorge         ")
let guatuso2 = new Array()
guatuso2[0]  =  new  lista("Distrito", "")
guatuso2[1]  =  new  lista("San Rafael        ")
guatuso2[2]  =  new  lista("Buenavista        ")
guatuso2[3]  =  new  lista("Cote             ")
guatuso2[4]  =  new  lista("Katira")
let rioCuarto2 = new Array()
rioCuarto2[0]  =  new  lista("Distrito", "")
rioCuarto2[1]  =  new  lista("Rio Cuarto")
rioCuarto2[2]  =  new  lista("Santa Rita")
rioCuarto2[3]  =  new  lista("Santa Isabel")
let cartago2 = new Array()
cartago2[0]  =  new  lista("Distrito", "")
cartago2[1]  =  new  lista("Oriental          ")
cartago2[2]  =  new  lista("Occidental        ")
cartago2[3]  =  new  lista("Carmen          ")
cartago2[4]  =  new  lista("San Nicolás       ")
cartago2[5]  =  new  lista("Agua Caliente (San Francisco)")
cartago2[6]  =  new  lista("Guadalupe (Arenilla)")
cartago2[7]  =  new  lista("Corralillo        ")
cartago2[8]  =  new  lista("Tierra Blanca     ")
cartago2[9]  =  new  lista("Dulce Nombre      ")
cartago2[10]  =  new  lista("Llano Grande      ")
cartago2[11]  =  new  lista("Quebradilla       ")
let paraiso2 = new Array()
paraiso2[0]  =  new  lista("Distrito", "")
paraiso2[1]  =  new  lista("Paraíso           ")
paraiso2[2]  =  new  lista("Santiago          ")
paraiso2[3]  =  new  lista("Orosi            ")
paraiso2[4]  =  new  lista("Cachí            ")
paraiso2[5]  =  new  lista("Llanos de Santa Lucía")
let laUnion2 = new Array()
laUnion2[0]  =  new  lista("Distrito", "")
laUnion2[1]  =  new  lista("Tres Ríos         ")
laUnion2[2]  =  new  lista("San Diego         ")
laUnion2[3]  =  new  lista("San Juan          ")
laUnion2[4]  =  new  lista("San Rafael        ")
laUnion2[5]  =  new  lista("Concepción        ")
laUnion2[6]  =  new  lista("Dulce Nombre      ")
laUnion2[7]  =  new  lista("San Ramón         ")
laUnion2[8]  =  new  lista("Río Azul          ")
let jimenez2 = new Array()
jimenez2[0]  =  new  lista("Distrito", "")
jimenez2[1]  =  new  lista("Juan Viñas        ")
jimenez2[2]  =  new  lista("Tucurrique        ")
jimenez2[3]  =  new  lista("Pejibaye          ")
let turrialba2 = new Array()
turrialba2[0]  =  new  lista("Distrito", "")
turrialba2[1]  =  new  lista("Turrialba         ")
turrialba2[2]  =  new  lista("La Suiza          ")
turrialba2[3]  =  new  lista("Peralta           ")
turrialba2[4]  =  new  lista("Santa Cruz        ")
turrialba2[5]  =  new  lista("Santa Teresita    ")
turrialba2[6]  =  new  lista("Pavones           ")
turrialba2[7]  =  new  lista("Tuis             ")
turrialba2[8]  =  new  lista("Tayutic           ")
turrialba2[9]  =  new  lista("Santa Rosa        ")
turrialba2[10]  =  new  lista("Tres Equis        ")
turrialba2[11]  =  new  lista("La Isabel")
turrialba2[12]  =  new  lista("Chirripó")
let alletado2 = new Array()
alletado2[0]  =  new  lista("Distrito", "")
alletado2[1]  =  new  lista("Pacayas           ")
alletado2[2]  =  new  lista("Cervantes         ")
alletado2[3]  =  new  lista("Capellades        ")
let oreamuno2 = new Array()
oreamuno2[0]  =  new  lista("Distrito", "")
oreamuno2[1]  =  new  lista("San Rafael        ")
oreamuno2[2]  =  new  lista("Cot             ")
oreamuno2[3]  =  new  lista("Potrero Cerrado   ")
oreamuno2[4]  =  new  lista("Cipreses          ")
oreamuno2[5]  =  new  lista("Santa Rosa        ")
let elGuarco2 = new Array()
elGuarco2[0]  =  new  lista("Distrito", "")
elGuarco2[1]  =  new  lista("El Tejar          ")
elGuarco2[2]  =  new  lista("San Isidro        ")
elGuarco2[3]  =  new  lista("Tobosi            ")
let liberia2 = new Array()
liberia2[0]  =  new  lista("Distrito", "")
liberia2[1]  =  new  lista("Liberia           ")
liberia2[2]  =  new  lista("Cañas Dulces      ")
liberia2[3]  =  new  lista("Mayorga           ")
liberia2[4]  =  new  lista("Nacascolo         ")
liberia2[5]  =  new  lista("Curubandé         ")
let nicoya2 = new Array()
nicoya2[0]  =  new  lista("Distrito", "")
nicoya2[1]  =  new  lista("Nicoya            ")
nicoya2[2]  =  new  lista("Mansión           ")
nicoya2[3]  =  new  lista("San Antonio       ")
nicoya2[4]  =  new  lista("Quebrada Honda    ")
nicoya2[5]  =  new  lista("Sámara            ")
nicoya2[6]  =  new  lista("Nosara            ")
nicoya2[7]  =  new  lista("Belén de Nosarita")
let santaCruz2 = new Array()
santaCruz2[0]  =  new  lista("Distrito", "")
santaCruz2[1]  =  new  lista("Santa Cruz        ")
santaCruz2[2]  =  new  lista("Bolsón            ")
santaCruz2[3]  =  new  lista("Veintisiete de Abril")
santaCruz2[4]  =  new  lista("Tempate           ")
santaCruz2[5]  =  new  lista("Cartagena         ")
santaCruz2[6]  =  new  lista("Cuajiniquil       ")
santaCruz2[7]  =  new  lista("Diriá            ")
santaCruz2[8]  =  new  lista("Cabo Velas        ")
santaCruz2[9]  =  new  lista("Tamarindo         ")
let bagaces2 = new Array()
bagaces2[0]  =  new  lista("Distrito", "")
bagaces2[1]  =  new  lista("Bagaces           ")
bagaces2[2]  =  new  lista("La Fortuna        ")
bagaces2[3]  =  new  lista("Mogote            ")
let carrillo2 = new Array()
carrillo2[0]  =  new  lista("Distrito", "")
carrillo2[1]  =  new  lista("Filadelfia        ")
carrillo2[2]  =  new  lista("Palmira           ")
carrillo2[3]  =  new  lista("Sardinal          ")
carrillo2[4]  =  new  lista("Belén            ")
let cannas2 = new Array()
cannas2[0]  =  new  lista("Distrito", "")
cannas2[1]  =  new  lista("Cañas            ")
cannas2[2]  =  new  lista("Palmira           ")
cannas2[3]  =  new  lista("San Miguel        ")
cannas2[4]  =  new  lista("Bebedero          ")
cannas2[5]  =  new  lista("Porozal           ")
let abangares2 = new Array()
abangares2[0]  =  new  lista("Distrito", "")
abangares2[1]  =  new  lista("Las Juntas        ")
abangares2[2]  =  new  lista("Sierra            ")
abangares2[3]  =  new  lista("San Juan          ")
abangares2[4]  =  new  lista("Colorado          ")
let tilaran2 = new Array()
tilaran2[0]  =  new  lista("Distrito", "")
tilaran2[1]  =  new  lista("Tilarán           ")
tilaran2[2]  =  new  lista("Quebrada Grande   ")
tilaran2[3]  =  new  lista("Tronadora         ")
tilaran2[4]  =  new  lista("Santa Rosa        ")
tilaran2[5]  =  new  lista("Líbano            ")
tilaran2[6]  =  new  lista("Tierras Morenas   ")
tilaran2[7]  =  new  lista("Arenal            ")
let nandayure2 = new Array()
nandayure2[0]  =  new  lista("Distrito", "")
nandayure2[1]  =  new  lista("Carmona           ")
nandayure2[2]  =  new  lista("Santa Rita        ")
nandayure2[3]  =  new  lista("Zapotal           ")
nandayure2[4]  =  new  lista("San Pablo         ")
nandayure2[5]  =  new  lista("Porvenir          ")
nandayure2[6]  =  new  lista("Bejuco            ")
let laCruz2 = new Array()
laCruz2[0]  =  new  lista("Distrito", "")
laCruz2[1]  =  new  lista("La Cruz           ")
laCruz2[2]  =  new  lista("Santa Cecilia     ")
laCruz2[3]  =  new  lista("Santa Elena       ")
let hojancha2 = new Array()
hojancha2[0]  =  new  lista("Distrito", "")
hojancha2[1]  =  new  lista("Hojancha          ")
hojancha2[2]  =  new  lista("Puerto Carrillo   ")
hojancha2[3]  =  new  lista("Huacas")
let puntarenas2 = new Array()
puntarenas2[0]  =  new  lista("Distrito", "")
puntarenas2[1]  =  new  lista("Puntarenas        ")
puntarenas2[2]  =  new  lista("Pitahaya          ")
puntarenas2[3]  =  new  lista("Chomes            ")
puntarenas2[4]  =  new  lista("Lepanto           ")
puntarenas2[5]  =  new  lista("Paquera           ")
puntarenas2[6]  =  new  lista("Manzanillo        ")
puntarenas2[7]  =  new  lista("Guacimal          ")
puntarenas2[8]  =  new  lista("Barranca          ")
puntarenas2[9]  =  new  lista("Monte Verde       ")
puntarenas2[10]  =  new  lista("Cóbano            ")
puntarenas2[11]  =  new  lista("Chacarita         ")
puntarenas2[12]  =  new  lista("Chira        ")
puntarenas2[13]  =  new  lista("Acapulco          ")
puntarenas2[14]  =  new  lista("El Roble          ")
puntarenas2[15]  =  new  lista("Arancibia         ")
let esparza2 = new Array()
esparza2[0]  =  new  lista("Distrito", "")
esparza2[1]  =  new  lista("Espíritu Santo    ")
esparza2[2]  =  new  lista("San Juan Grande   ")
esparza2[3]  =  new  lista("Macacona          ")
esparza2[4]  =  new  lista("San Rafael        ")
esparza2[5]  =  new  lista("San Jerónimo      ")
esparza2[6]  =  new  lista("Caldera")
let buenosAires2 = new Array()
buenosAires2[0]  =  new  lista("Distrito", "")
buenosAires2[1]  =  new  lista("Buenos Aires      ")
buenosAires2[2]  =  new  lista("Volcán            ")
buenosAires2[3]  =  new  lista("Potrero Grande    ")
buenosAires2[4]  =  new  lista("Boruca            ")
buenosAires2[5]  =  new  lista("Pilas            ")
buenosAires2[6]  =  new  lista("Biolley           ")
buenosAires2[7]  =  new  lista("Brunka            ")
let montesDeOro2 = new Array()
montesDeOro2[0]  =  new  lista("Distrito", "")
montesDeOro2[1]  =  new  lista("Miramar           ")
montesDeOro2[2]  =  new  lista("La Unión          ")
montesDeOro2[3]  =  new  lista("San Isidro        ")
let osa2 = new Array()
osa2[0]  =  new  lista("Distrito", "")
osa2[1]  =  new  lista("Puerto Cortés     ")
osa2[2]  =  new  lista("Palmar            ")
osa2[3]  =  new  lista("Sierpe            ")
osa2[4]  =  new  lista("Bahía Ballena     ")
osa2[5]  =  new  lista("Piedras Blancas   ")
osa2[6]  =  new  lista("Bahía Drake")
let quepos2 = new Array()
quepos2[0]  =  new  lista("Distrito", "")
quepos2[1]  =  new  lista("Quepos            ")
quepos2[2]  =  new  lista("Savegre           ")
quepos2[3]  =  new  lista("Naranjito         ")
let golfito2 = new Array()
golfito2[0]  =  new  lista("Distrito", "")
golfito2[1]  =  new  lista("Golfito           ")
golfito2[2]  =  new  lista("Puerto Jiménez    ")
golfito2[3]  =  new  lista("Guaycará          ")
golfito2[4]  =  new  lista("Pavón")
let cotoBrus2 = new Array()
cotoBrus2[0]  =  new  lista("Distrito", "")
cotoBrus2[1]  =  new  lista("San Vito          ")
cotoBrus2[2]  =  new  lista("Sabalito          ")
cotoBrus2[3]  =  new  lista("Aguabuena         ")
cotoBrus2[4]  =  new  lista("Limoncito         ")
cotoBrus2[5]  =  new  lista("Pittier           ")
let parrita2 = new Array()
parrita2[0]  =  new  lista("Distrito", "")
parrita2[1]  =  new  lista("Parrita           ")
let corredores2 = new Array()
corredores2[0]  =  new  lista("Distrito", "")
corredores2[1]  =  new  lista("Corredor          ")
corredores2[2]  =  new  lista("La Cuesta         ")
corredores2[3]  =  new  lista("Canoas            ")
corredores2[4]  =  new  lista("Laurel            ")
let garabito2 = new Array()
garabito2[0]  =  new  lista("Distrito", "")
garabito2[1]  =  new  lista("Jacó             ")
garabito2[2]  =  new  lista("Tárcoles          ")
let limon2 = new Array()
limon2[0]  =  new  lista("Distrito", "")
limon2[1]  =  new  lista("Limón")
limon2[2]  =  new  lista("Valle La Estrella")
limon2[3]  =  new  lista("Río Blanco        ")
limon2[4]  =  new  lista("Matama            ")
let pococi2 = new Array()
pococi2[0]  =  new  lista("Distrito", "")
pococi2[1]  =  new  lista("Guápiles          ")
pococi2[2]  =  new  lista("Jiménez           ")
pococi2[3]  =  new  lista("Rita             ")
pococi2[4]  =  new  lista("Roxana            ")
pococi2[5]  =  new  lista("Cariari           ")
pococi2[6]  =  new  lista("Colorado          ")
pococi2[7]  =  new  lista("La Colonia")
let siquirres2 = new Array()
siquirres2[0]  =  new  lista("Distrito", "")
siquirres2[1]  =  new  lista("Siquirres         ")
siquirres2[2]  =  new  lista("Pacuarito         ")
siquirres2[3]  =  new  lista("Germania          ")
siquirres2[4]  =  new  lista("El Cairo          ")
siquirres2[5]  =  new  lista("La Alegría        ")
let talamanca2 = new Array()
talamanca2[0]  =  new  lista("Distrito", "")
talamanca2[1]  =  new  lista("Bratsi            ")
talamanca2[2]  =  new  lista("Sixaola           ")
talamanca2[3]  =  new  lista("Cahuita           ")
let matina2 = new Array()
matina2[0]  =  new  lista("Distrito", "")
matina2[1]  =  new  lista("Matina            ")
matina2[2]  =  new  lista("Batán            ")
matina2[3]  =  new  lista("Carrandi          ")
let guácimo2 = new Array()
guácimo2[0]  =  new  lista("Distrito", "")
guácimo2[1]  =  new  lista("Guácimo           ")
guácimo2[2]  =  new  lista("Mercedes          ")
guácimo2[3]  =  new  lista("Pocora            ")
guácimo2[4]  =  new  lista("Río Jiménez       ")
guácimo2[5]  =  new  lista("Duacarí           ")

//Funcion que realmente hace el trabajo
function seleccionar(cual, donde) {
    if (cual.selectedIndex != 0) {
        donde.length = 0
        cual = eval(cual.value)
        for (m = 0; m < cual.length; m++) {
            let nuevaOpcion = new Option(cual[m].texto);
            donde.options[m] = nuevaOpcion;
            if (cual[m].valor != null) {
                donde.options[m].value = cual[m].valor
            } else {
                donde.options[m].value = cual[m].texto
            }
        }
    }
}