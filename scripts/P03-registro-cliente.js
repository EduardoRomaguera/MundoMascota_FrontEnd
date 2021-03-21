//'use strict';
//Validación de espacios de registro de cliente
const inputNombreCl = document.querySelector('#txt-nombre-cl');
const inputApellido1Cl = document.querySelector('#txt-apellido1-cl');
const inputApellido2Cl = document.querySelector('#txt-apellido2-cl');
const inputTipoIdCl = document.querySelector('#txt-tipo-id-cl');
const inputIdentificacionCl = document.querySelector('#txt-identificacion-cl');
const inputNacimientoCl = document.querySelector('#txt-nacimiento-cl');
const inputCorreoCl = document.querySelector('#txt-correo-cl');
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

    //Validación de formato de correo electrónico
    let inputXCorreoCl = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;
    if (inputXCorreoCl.test(inputCorreoCl.value) == false) {
        error = true;
        inputCorreoCl.classList.add('error');
    } else {
        inputCorreoCl.classList.remove('error');
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

    if (inputApellido2Cl.value == '') {
        error = true;
        inputApellido2Cl.classList.add('error');
    } else {
        inputApellido2Cl.classList.remove('error');
    }

    if (inputTipoIdCl.value == '') {
        error = true;
        inputTipoIdCl.classList.add('error');
    } else {
        inputTipoIdCl.classList.remove('error');
    }

    if (inputIdentificacionCl.value == '') {
        error = true;
        inputIdentificacionCl.classList.add('error');
    } else {
        inputIdentificacionCl.classList.remove('error');
    }

    if (inputNacimientoCl.value == '') {
        error = true;
        inputNacimientoCl.classList.add('error');
    } else {
        inputNacimientoCl.classList.remove('error');
    }

    if (inputCorreoCl.value == '') {
        error = true;
        inputCorreoCl.classList.add('error');
    } else {
        inputCorreoCl.classList.remove('error');
    }

    if (inputCantonCl.value == '') {
        error = true;
        inputCantonCl.classList.add('error');
    } else {
        inputCantonCl.classList.remove('error');
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
        text: "Dejaste un espacio vacio",
        confirmButtonText: "Intentar de nuevo"
        }); 
    } else{
        imprimir("Todo bien");
    }
};

btnCompletarRegistro.addEventListener('click', validar);

//Codigo para Selects dinámicos de canton, cantón y distrito//
//Cantones//
var cantones_1=new Array("","San José","Escazú","Desamparados","Puriscal","Tarrazú","Aserrí","Mora","Goicoechea","Santa Ana","Alajuelita","Vázquez De Coronado","Acosta","Tibás","Moravia","Montes De Oca","Turrubares","Dota","Curridabat","Pérez Zeledón","León Cortés");
var cantones_2=new Array("","Heredia","Barva","Santo Domingo","Santa Bárbara","San Rafael","San Isidro","Belén","Flores","San Pablo","Sarapiquí");
var cantones_3=new Array("","Alajuela","San Ramón","Grecia","San Mateo","Atenas","Naranjo","Palmares","Poás","Orotina","San Carlos","Zarcero","Sarchí","Upala","Los Chiles","Guatuso","Río Cuarto");
var cantones_4=new Array("","Cartago","Paraíso","La Unión","Jiménez","Turrialba","Alvarado","Oreamuno","El Guarco");
var cantones_5=new Array("","Liberia","Nicoya","Santa Cruz","Bagaces","Carrillo","Cañas","Abangares","Tilarán","Nandayure","La Cruz","Hojancha");
var cantones_6=new Array("","Puntarenas","Esparza","Buenos Aires","Montes De Oro","Osa","Quepos","Golfito","Coto Brus","Parrita","Corredores","Garabito");
var cantones_7=new Array("","Limón","Pococí","Siquirres","Talamanca","Matina","Guácimo");
var todascantones = [
    [],
    cantones_1,
    cantones_2,
    cantones_3,
    cantones_4,
];

function cambiaCanton(){
    let cantonesCR, numCantones, i, inputCanton;
    inputCanton = document.f1.txt[document.f1.txt.selectedIndex].value

    if (inputCanton != 0) {
        cantonesCR=todascantones[inputCanton]
        numCantones = cantonesCR.length
        document.f1.canton.length = numCantones

        for(i=0;i<numCantones;i++){
        document.f1.canton.options[i].value=cantonesCR[i]
        document.f1.canton.options[i].text=cantonesCR[i]
        }
        
    }else{
        document.f1.canton.length = 1
        document.f1.canton.options[0].value = ""
        document.f1.canton.options[0].text = ""
    }
        document.f1.canton.options[0].selected = true
}

//Distritos//
var distritos_1=new Array("","San José","Escazú","Desamparados","Puriscal","Tarrazú","Aserrí","Mora","Goicoechea","Santa Ana","Alajuelita","Vázquez De Coronado","Acosta","Tibás","Moravia","Montes De Oca","Turrubares","Dota","Curridabat","Pérez Zeledón","León Cortés");
var distritos_2=new Array("","Heredia","Barva","Santo Domingo","Santa Bárbara","San Rafael","San Isidro","Belén","Flores","San Pablo","Sarapiquí");
var distritos_3=new Array("","Alajuela","San Ramón","Grecia","San Mateo","Atenas","Naranjo","Palmares","Poás","Orotina","San Carlos","Zarcero","Sarchí","Upala","Los Chiles","Guatuso","Río Cuarto");
var distritos_4=new Array("","Cartago","Paraíso","La Unión","Jiménez","Turrialba","Alvarado","Oreamuno","El Guarco");
var distritos_5=new Array("","Liberia","Nicoya","Santa Cruz","Bagaces","Carrillo","Cañas","Abangares","Tilarán","Nandayure","La Cruz","Hojancha");
var distritos_6=new Array("","Puntarenas","Esparza","Buenos Aires","Montes De Oro","Osa","Quepos","Golfito","Coto Brus","Parrita","Corredores","Garabito");
var distritos_7=new Array("","Limón","Pococí","Siquirres","Talamanca","Matina","Guácimo");
var todasdistritos = [
    [],
    distritos_1,
    distritos_2,
    distritos_3,
    distritos_4,
];

function cambiaDistrito(){
    let distritosCR, numdistritos, i, inputdistrito;
    inputdistrito = document.f1.txt[document.f1.txt.selectedIndex].value 

    if (inputdistrito != 0) { 
        distritosCR=todasdistritos[inputdistrito]
        numdistritos = distritosCR.length 
        document.f1.distrito.length = numdistritos 

        for(i=0;i<numdistritos;i++){ 
        document.f1.distrito.options[i].value=distritosCR[i] 
        document.f1.distrito.options[i].text=distritosCR[i] 
        }
        
    }else{ 
        document.f1.distrito.length = 1 
        document.f1.distrito.options[0].value = "" 
        document.f1.distrito.options[0].text = "" 
    } 
        document.f1.distrito.options[0].selected = true 
}

// PRUEBA 2
function slctr(texto,valor){
	this.texto = texto
	this.valor = valor
}
var sanjose=new Array()
    sanjose[0] = new slctr("Cantón","")
    sanjose[1] = new slctr("San José","sanJose2")
    sanjose[2] = new slctr("Escazú","escazu2")
    sanjose[3] = new slctr("Desamparados","desamparados2")
    sanjose[4] = new slctr("Puriscal","puriscal2")
    sanjose[5] = new slctr("Tarrazú","tarrazu2")
    sanjose[6] = new slctr("Aserrí","aserri2")
    sanjose[7] = new slctr("Mora","mora2")
    sanjose[8] = new slctr("Goicoechea","goicoechea2")
    sanjose[9] = new slctr("Santa Ana","santaAna2")
    sanjose[10] = new slctr("Alajuelita","alajuelita2")
    sanjose[11] = new slctr("Vázquez De Coronado","vázquezDeCoronado2")
    sanjose[12] = new slctr("Acosta","acosta2")
    sanjose[13] = new slctr("Tibás","tibas2")
    sanjose[14] = new slctr("Moravia","moravia2")
    sanjose[15] = new slctr("Montes De Oca","montesDeOca2")
    sanjose[16] = new slctr("Turrubares","turrubares2")
    sanjose[17] = new slctr("Dota","dota2")
    sanjose[18] = new slctr("Curridabat","curridabat2")
    sanjose[19] = new slctr("Pérez Zeledón","perezZeledon2")
    sanjose[20] = new slctr("León Cortés","leonCortes2")
    
var heredia=new Array()
    heredia[0] = new slctr("Cantón","")
    heredia[1] = new slctr("Heredia","heredia2")
    heredia[2] = new slctr("Barva","barva2")
    heredia[3] = new slctr("Santo Domingo","santoDomingo2")
    heredia[4] = new slctr("Santa Bárbara","santaBarbara2")
    heredia[5] = new slctr("San Rafael","sanRafael2")
    heredia[6] = new slctr("San Isidro","sanIsidro2")
    heredia[7] = new slctr("Belén","belen2")
    heredia[8] = new slctr("Flores","flores2")
    heredia[9] = new slctr("San Pablo","sanPablo2")
    heredia[10] = new slctr("Sarapiquí","sarapiqui2")

var alajuela=new Array()
    alajuela[0] = new slctr("Cantón","")
    alajuela[1] = new slctr("Alajuela","alajuela2")
    alajuela[2] = new slctr("San Ramón","sanRamon2")
    alajuela[3] = new slctr("Grecia","grecia2")
    alajuela[4] = new slctr("San Mateo","sanMateo2")
    alajuela[5] = new slctr("Atenas","atenas2")
    alajuela[6] = new slctr("Naranjo","naranjo2")
    alajuela[7] = new slctr("Palmares","palmares2")
    alajuela[8] = new slctr("Poás","poas2")
    alajuela[9] = new slctr("Orotina","orotina2")
    alajuela[10] = new slctr("San Carlos","sanCarlos2")
    alajuela[11] = new slctr("Zarcero","zarcero2")
    alajuela[12] = new slctr("Sarchí","sarchi2")
    alajuela[13] = new slctr("Upala","upala2")
    alajuela[14] = new slctr("Los Chiles","losChiles2")
    alajuela[15] = new slctr("Guatuso","guatuso2")
    alajuela[16] = new slctr("Río Cuarto","rioCuarto2")

var cartago=new Array()
    cartago[0] = new slctr("Cantón","")
    cartago[1] = new slctr("Cartago","cartago2")
    cartago[2] = new slctr("Paraíso","paraiso2")
    cartago[3] = new slctr("La Unión","laUnion2")
    cartago[4] = new slctr("Jiménez","jimenez2")
    cartago[5] = new slctr("Turrialba","turrialba2")
    cartago[6] = new slctr("Alvarado","alvarado2")
    cartago[7] = new slctr("Oreamuno","oreamuno2")
    cartago[8] = new slctr("El Guarco","elGuarco2")

var guanacaste=new Array()
    guanacaste[0] = new slctr("Cantón","")
    guanacaste[1] = new slctr("Liberia","liberia2")
    guanacaste[2] = new slctr("Nicoya","nicoya2")
    guanacaste[3] = new slctr("Santa Cruz","santaCruz2")
    guanacaste[4] = new slctr("Bagaces","bagaces2")
    guanacaste[5] = new slctr("Carrillo","carrillo2")
    guanacaste[6] = new slctr("Cañas","cannas2")
    guanacaste[7] = new slctr("Abangares","abangares2")
    guanacaste[8] = new slctr("Tilarán","tilaran2")
    guanacaste[9] = new slctr("Nandayure","nandayure2")
    guanacaste[10] = new slctr("La Cruz","laCruz2")
    guanacaste[11] = new slctr("Hojancha","hojancha2")

var puntarenas=new Array()
    puntarenas[0] = new slctr("Cantón","")
    puntarenas[1] = new slctr("Puntarenas","puntarenas2")
    puntarenas[2] = new slctr("Esparza","esparza2")
    puntarenas[3] = new slctr("Buenos Aires","buenosAires2")
    puntarenas[4] = new slctr("Montes De Oro","montesDeOro2")
    puntarenas[5] = new slctr("Osa","osa2")
    puntarenas[6] = new slctr("Quepos","quepos2")
    puntarenas[7] = new slctr("Golfito","golfito2")
    puntarenas[8] = new slctr("Coto Brus","cotoBrus2")
    puntarenas[9] = new slctr("Parrita","parrita2")
    puntarenas[10] = new slctr("Corredores","corredores2")
    puntarenas[11] = new slctr("Garabito","garabito2")


var limon=new Array()
    limon[0] = new slctr("Cantón","")
    limon[1] = new slctr("Limón","limon2")
    limon[2] = new slctr("Pococí","pococi2")
    limon[3] = new slctr("Siquirres","siquirres2")
    limon[4] = new slctr("Talamanca","talamanca2")
    limon[5] = new slctr("Matina","matina2")
    limon[6] = new slctr("Guácimo","guácimo2")

// Nivel 3, Distritos
var sanJose2=new Array()
    sanJose2[0] = new slctr("Cantón")
    sanJose2[1] = new slctr("San José")
    sanJose2[2] = new slctr("Carmen")
    sanJose2[3] = new slctr("Merced")
    sanJose2[4] = new slctr("Hospital")
    sanJose2[5] = new slctr("Catedral")
    sanJose2[6] = new slctr("Zapote")
    sanJose2[7] = new slctr("San Francisco de Dos Ríos")
    sanJose2[8] = new slctr("Uruca")
    sanJose2[9] = new slctr("Mata Redonda")
    sanJose2[10] = new slctr("Pavas")
    sanJose2[11] = new slctr("Hatillo ")
    sanJose2[12] = new slctr("San Sebastián     ")
var escazu2=new Array()
    escazu2[1] = new slctr("Cantón")
    escazu2[1] = new slctr("Escazú  ")
    escazu2[2] = new slctr("San Antonio       ")
    escazu2[3] = new slctr("San Rafael        ")
var desamparados2=new Array()
    desamparados2[0] = new slctr("Cantón")
    desamparados2[1] = new slctr("Desamparados      ")
    desamparados2[2] = new slctr("San Miguel        ")
    desamparados2[3] = new slctr("San Juan de Dios  ")
    desamparados2[4] = new slctr("San Rafael Arriba")
    desamparados2[5] = new slctr("San Antonio       ")
    desamparados2[6] = new slctr("Frailes ")
    desamparados2[7] = new slctr("Patarrá")
    desamparados2[8] = new slctr("San Cristóbal     ")
    desamparados2[9] = new slctr("Rosario ")
    desamparados2[10] = new slctr("Damas  ")
    desamparados2[11] = new slctr("San Rafael Abajo  ")
    desamparados2[12] = new slctr("Gravilias         ")
    desamparados2[13] = new slctr("Los Guido")
    desamparados2[14] = new slctr("Santiago")
    desamparados2[15] = new slctr("Mercedes Sur      ")
    desamparados2[16] = new slctr("Barbacoas         ")
    desamparados2[17] = new slctr("San Rafael        ")
    desamparados2[18] = new slctr("Candelarita       ")
    desamparados2[19] = new slctr("San Antonio       ")
    desamparados2[20] = new slctr("Chires  ")
    desamparados2[21] = new slctr("San Marcos        ")
    desamparados2[22] = new slctr("San Lorenzo       ")
    desamparados2[23] = new slctr("San Carlos        ")
var aserri2=new Array()
    aserri2[0] = new slctr("Cantón")
    aserri2[1] = new slctr("Aserrí  ")
    aserri2[2] = new slctr("Tarbaca     ")
    aserri2[3] = new slctr("Vuelta de Jorco   ")
    aserri2[4] = new slctr("San Gabriel       ")
    aserri2[5] = new slctr("Legua ")
    aserri2[6] = new slctr("Salitrillos       ")
var mora2=new Array()
    mora2[0] = new slctr("Cantón")
    mora2[1] = new slctr("Colón  ")
    mora2[2] = new slctr("Guayabo ")
    mora2[3] = new slctr("Tabarcia")
    mora2[4] = new slctr("Piedras Negras    ")
    mora2[5] = new slctr("Picagres")
    mora2[6] = new slctr("Jaris")
var goicoechea2=new Array()
    goicoechea2[0] = new slctr("Cantón")
    goicoechea2[1] = new slctr("Guadalupe         ")
    goicoechea2[2] = new slctr("San Francisco     ")
    goicoechea2[3] = new slctr("Calle Blancos     ")
    goicoechea2[4] = new slctr("Mata de Plátano   ")
    goicoechea2[5] = new slctr("Ipís   ")
    goicoechea2[6] = new slctr("Rancho Redondo    ")
    goicoechea2[7] = new slctr("Purral  ")
var santaAna2=new Array()
    santaAna2[0] = new slctr("Cantón")
    santaAna2[1] = new slctr("Santa Ana         ")
    santaAna2[2] = new slctr("Salitral")
    santaAna2[3] = new slctr("Pozos   ")
    santaAna2[4] = new slctr("Uruca")
    santaAna2[5] = new slctr("Piedades")
    santaAna2[6] = new slctr("Brasil  ")
var alajuelita2=new Array()
    alajuelita2[0] = new slctr("Cantón")
    alajuelita2[1] = new slctr("Alajuelita")
    alajuelita2[2] = new slctr("San Josecito      ")
    alajuelita2[3] = new slctr("San Antonio       ")
    alajuelita2[4] = new slctr("Concepción        ")
    alajuelita2[5] = new slctr("San Felipe        ")
var vázquezDeCoronado2=new Array()
    vázquezDeCoronado2[0] = new slctr("Cantón")
    vázquezDeCoronado2[1] = new slctr("San Isidro        ")
    vázquezDeCoronado2[2] = new slctr("San Rafael        ")
    vázquezDeCoronado2[3] = new slctr("Dulce Nombre de Jesús")
    vázquezDeCoronado2[4] = new slctr("Patalillo         ")
    vázquezDeCoronado2[5] = new slctr("Cascajal")
var acosta2=new Array()
    acosta2[0] = new slctr("Cantón")
    acosta2[1] = new slctr("San Ignacio       ")
    acosta2[2] = new slctr("Guaitil ")
    acosta2[3] = new slctr("Cangrejal         ")
    acosta2[4] = new slctr("Sabanillas        ")
var tibas2=new Array()
    tibas2[0] = new slctr("Cantón")
    tibas2[1] = new slctr("San Juan")
    tibas2[2] = new slctr("Cinco Esquinas    ")
    tibas2[3] = new slctr("Anselmo Llorente  ")
    tibas2[4] = new slctr("León XIII     ")
    tibas2[5] = new slctr("Colima  ")
var moravia2=new Array()
    moravia2[0] = new slctr("Cantón")
    moravia2[1] = new slctr("San Vicente       ")
    moravia2[2] = new slctr("San Jerónimo      ")
    moravia2[3] = new slctr("La Trinidad       ")
var montesDeOca2=new Array()
    montesDeOca2[0] = new slctr("Cantón")
    montesDeOca2[1] = new slctr("San Pedro         ")
    montesDeOca2[2] = new slctr("Sabanilla         ")
    montesDeOca2[3] = new slctr("Mercedes")
    montesDeOca2[4] = new slctr("San Rafael        ")
var turrubares2=new Array()
    turrubares2[0] = new slctr("Cantón")
    turrubares2[1] = new slctr("San Pablo         ")
    turrubares2[2] = new slctr("San Pedro         ")
    turrubares2[3] = new slctr("San Juan de Mata  ")
    turrubares2[4] = new slctr("Carara")
var dota2=new Array()
    dota2[0] = new slctr("Cantón")
    dota2[1] = new slctr("Santa María       ")
    dota2[2] = new slctr("Jardín  ")
    dota2[3] = new slctr("Copey  ")
var curridabat2=new Array()
    curridabat2[0] = new slctr("Cantón")
    curridabat2[1] = new slctr("Curridabat        ")
    curridabat2[2] = new slctr("Granadilla        ")
    curridabat2[3] = new slctr("Sánchez ")
    curridabat2[4] = new slctr("Tirrases")
var perezZeledon2=new Array()
    perezZeledon2[0] = new slctr("Cantón")
    perezZeledon2[1] = new slctr("San Isidro de El General")
    perezZeledon2[2] = new slctr("El General        ")
    perezZeledon2[3] = new slctr("Daniel Flores     ")
    perezZeledon2[4] = new slctr("Rivas  ")
    perezZeledon2[5] = new slctr("San Pedro         ")
    perezZeledon2[6] = new slctr("Platanares        ")
    perezZeledon2[7] = new slctr("Pejibaye")
    perezZeledon2[8] = new slctr("Cajón  ")
    perezZeledon2[9] = new slctr("Barú   ")
    perezZeledon2[10] = new slctr("Río Nuevo         ")
    perezZeledon2[11] = new slctr("Páramo  ")
    perezZeledon2[12] = new slctr("La Amistad")
var leonCortes2=new Array()
    leonCortes2[0] = new slctr("Cantón")
    leonCortes2[1] = new slctr("San Pablo         ")
    leonCortes2[2] = new slctr("San Andrés        ")
    leonCortes2[3] = new slctr("Llano Bonito      ")
    leonCortes2[4] = new slctr("San Isidro        ")
    leonCortes2[5] = new slctr("Santa Cruz        ")
    leonCortes2[6] = new slctr("San Antonio       ")
var heredia2=new Array()
    heredia2[0] = new slctr("Cantón")
    heredia2[1] = new slctr("Heredia           ")
    heredia2[2] = new slctr("Mercedes          ")
    heredia2[3] = new slctr("San Francisco     ")
    heredia2[4] = new slctr("Ulloa            ")
    heredia2[5] = new slctr("Vara Blanca       ")
var barva2=new Array()
    barva2[0] = new slctr("Cantón")
    barva2[1] = new slctr("Barva            ")
    barva2[2] = new slctr("San Pedro         ")
    barva2[3] = new slctr("San Pablo         ")
    barva2[4] = new slctr("San Roque         ")
    barva2[5] = new slctr("Santa Lucía       ")
    barva2[6] = new slctr("San José de la Montaña")
var santoDomingo2=new Array()
    santoDomingo2[0] = new slctr("Cantón")
    santoDomingo2[1] = new slctr("Santo Domingo     ")
    santoDomingo2[2] = new slctr("San Vicente       ")
    santoDomingo2[3] = new slctr("San Miguel        ")
    santoDomingo2[4] = new slctr("Paracito          ")
    santoDomingo2[5] = new slctr("Santo Tomás       ")
    santoDomingo2[6] = new slctr("Santa Rosa        ")
    santoDomingo2[7] = new slctr("Tures            ")
    santoDomingo2[8] = new slctr("Pará            ")
var santaBarbara2=new Array()
    santaBarbara2[0] = new slctr("Cantón")
    santaBarbara2[1] = new slctr("Santa Bárbara     ")
    santaBarbara2[2] = new slctr("San Pedro         ")
    santaBarbara2[3] = new slctr("San Juan          ")
    santaBarbara2[4] = new slctr("Jesús            ")
    santaBarbara2[5] = new slctr("Santo Domingo")
    santaBarbara2[6] = new slctr("Purabá            ")
var sanRafael2=new Array()
    sanRafael2[0] = new slctr("Cantón")
    sanRafael2[1] = new slctr("San Rafael        ")
    sanRafael2[2] = new slctr("San Josecito      ")
    sanRafael2[3] = new slctr("Santiago          ")
    sanRafael2[4] = new slctr("Ángeles           ")
    sanRafael2[5] = new slctr("Concepción        ")
var sanIsidro2=new Array()
    sanIsidro2[0] = new slctr("Cantón")
    sanIsidro2[1] = new slctr("San Isidro        ")
    sanIsidro2[2] = new slctr("San José          ")
    sanIsidro2[3] = new slctr("Concepción        ")
    sanIsidro2[4] = new slctr("San Francisco     ")
var belen2=new Array()
    belen2[0] = new slctr("Cantón")
    belen2[1] = new slctr("San Antonio       ")
    belen2[2] = new slctr("La Ribera         ")
    belen2[3] = new slctr("La Asunción       ")
var flores2=new Array()
    flores2[0] = new slctr("Cantón")
    flores2[1] = new slctr("San Joaquín       ")
    flores2[2] = new slctr("Barrantes         ")
    flores2[3] = new slctr("Llorente          ")
var sanPablo2=new Array()
    sanPablo2[5] = new slctr("Cantón")
    sanPablo2[6] = new slctr("San Pablo         ")
    sanPablo2[7] = new slctr("Rincón Sabanilla")
var sarapiqui2=new Array()
    sarapiqui2[0] = new slctr("Cantón")
    sarapiqui2[1] = new slctr("Puerto Viejo      ")
    sarapiqui2[2] = new slctr("La Virgen         ")
    sarapiqui2[3] = new slctr("Las Horquetas     ")
    sarapiqui2[4] = new slctr("Llanuras del Gaspar")
    sarapiqui2[5] = new slctr("Cureña            ")
var alajuela2=new Array()
    alajuela2[0] = new slctr("Cantón")
    alajuela2[1] = new slctr("Alajuela          ")
    alajuela2[2] = new slctr("San José          ")
    alajuela2[3] = new slctr("Carrizal          ")
    alajuela2[4] = new slctr("San Antonio       ")
    alajuela2[5] = new slctr("Guácima           ")
    alajuela2[6] = new slctr("San Isidro        ")
    alajuela2[7] = new slctr("Sabanilla         ")
    alajuela2[8] = new slctr("San Rafael        ")
    alajuela2[9] = new slctr("Río Segundo       ")
    alajuela2[10] = new slctr("Desamparados      ")
    alajuela2[11] = new slctr("Turrúcares        ")
    alajuela2[12] = new slctr("Tambor            ")
    alajuela2[13] = new slctr("Garita          ")
    alajuela2[14] = new slctr("Sarapiquí         ")
var sanRamon2=new Array()
    sanRamon2[0] = new slctr("Cantón")
    sanRamon2[1] = new slctr("San Ramón         ")
    sanRamon2[2] = new slctr("Santiago          ")
    sanRamon2[3] = new slctr("San Juan          ")
    sanRamon2[4] = new slctr("Piedades Norte    ")
    sanRamon2[5] = new slctr("Piedades Sur      ")
    sanRamon2[6] = new slctr("San Rafael        ")
    sanRamon2[7] = new slctr("San Isidro        ")
    sanRamon2[8] = new slctr("Ángeles           ")
    sanRamon2[9] = new slctr("Alfaro")
    sanRamon2[10] = new slctr("Volio            ")
    sanRamon2[11] = new slctr("Concepción        ")
    sanRamon2[12] = new slctr("Zapotal           ")
    sanRamon2[13] = new slctr("Peñas Blancas")
    sanRamon2[14] = new slctr("San Lorenzo")
var grecia2=new Array()
    grecia2[0] = new slctr("Cantón")
    grecia2[1] = new slctr("Grecia            ")
    grecia2[2] = new slctr("San Isidro        ")
    grecia2[3] = new slctr("San José          ")
    grecia2[4] = new slctr("San Roque         ")
    grecia2[5] = new slctr("Tacares           ")
    grecia2[6] = new slctr("Río Cuarto        ")
    grecia2[7] = new slctr("Puente de Piedra  ")
    grecia2[8] = new slctr("Bolívar           ")
var sanMateo2=new Array()
    sanMateo2[0] = new slctr("Cantón")
    sanMateo2[1] = new slctr("San Mateo         ")
    sanMateo2[2] = new slctr("Jesús María       ")
    sanMateo2[3] = new slctr("Labrador")
var atenas2=new Array()
    atenas2[0] = new slctr("Cantón")
    atenas2[1] = new slctr("Atenas            ")
    atenas2[2] = new slctr("Jesús            ")
    atenas2[3] = new slctr("Mercedes          ")
    atenas2[4] = new slctr("San Isidro        ")
    atenas2[5] = new slctr("Concepción        ")
    atenas2[6] = new slctr("San José          ")
    atenas2[7] = new slctr("Santa Eulalia     ")
    atenas2[8] = new slctr("Escobal")
var naranjo2=new Array()
    naranjo2[0] = new slctr("Cantón")
    naranjo2[1] = new slctr("Naranjo           ")
    naranjo2[2] = new slctr("San Miguel        ")
    naranjo2[3] = new slctr("San José          ")
    naranjo2[4] = new slctr("Cirrí Sur         ")
    naranjo2[5] = new slctr("San Jerónimo      ")
    naranjo2[6] = new slctr("San Juan          ")
    naranjo2[7] = new slctr("El Rosario        ")
    naranjo2[8] = new slctr("Palmitos")
var palmares2=new Array()
    palmares2[0] = new slctr("Cantón")
    palmares2[1] = new slctr("Palmares          ")
    palmares2[2] = new slctr("Zaragoza          ")
    palmares2[3] = new slctr("Buenos Aires      ")
    palmares2[4] = new slctr("Santiago          ")
    palmares2[5] = new slctr("Candelaria        ")
    palmares2[6] = new slctr("Esquipulas        ")
    palmares2[7] = new slctr("La Granja         ")
var poas2=new Array()
    poas2[0] = new slctr("Cantón")
    poas2[1] = new slctr("San Pedro         ")
    poas2[2] = new slctr("San Juan          ")
    poas2[3] = new slctr("San Rafael        ")
    poas2[4] = new slctr("Carrillos         ")
    poas2[5] = new slctr("Sabana Redonda    ")
var orotina2=new Array()
    orotina2[0] = new slctr("Cantón")
    orotina2[1] = new slctr("Orotina           ")
    orotina2[2] = new slctr("El Mastate        ")
    orotina2[3] = new slctr("Coyolar           ")
    orotina2[4] = new slctr("La Ceiba          ")
var sanCarlos2=new Array()
    sanCarlos2[0] = new slctr("Cantón")
    sanCarlos2[1] = new slctr("Quesada           ")
    sanCarlos2[2] = new slctr("Florencia         ")
    sanCarlos2[3] = new slctr("Buenavista        ")
    sanCarlos2[4] = new slctr("Aguas Zarcas      ")
    sanCarlos2[5] = new slctr("Venecia           ")
    sanCarlos2[6] = new slctr("Pital            ")
    sanCarlos2[7] = new slctr("La Fortuna        ")
    sanCarlos2[8] = new slctr("La Tigra          ")
    sanCarlos2[9] = new slctr("La Palmera        ")
    sanCarlos2[10] = new slctr("Venado            ")
    sanCarlos2[11] = new slctr("Cutris            ")
    sanCarlos2[12] = new slctr("Monterrey         ")
    sanCarlos2[13] = new slctr("Pocosol           ")
var zarcero2=new Array()
    zarcero2[0] = new slctr("Cantón")
    zarcero2[1] = new slctr("Zarcero           ")
    zarcero2[2] = new slctr("Laguna            ")
    zarcero2[3] = new slctr("Tapesco           ")
    zarcero2[4] = new slctr("Guadalupe         ")
    zarcero2[5] = new slctr("Palmira           ")
    zarcero2[6] = new slctr("Zapote            ")
    zarcero2[7] = new slctr("Brisas          ")
var sarchi2=new Array()
    sarchi2[0] = new slctr("Cantón")
    sarchi2[1] = new slctr("Sarchí Norte      ")
    sarchi2[2] = new slctr("Sarchí Sur        ")
    sarchi2[3] = new slctr("Toro Amarillo     ")
    sarchi2[4] = new slctr("San Pedro         ")
    sarchi2[5] = new slctr("Rodríguez         ")
var upala2=new Array()
    upala2[0] = new slctr("Cantón")
    upala2[1] = new slctr("Upala            ")
    upala2[2] = new slctr("Aguas Claras      ")
    upala2[3] = new slctr("San José (Pizote)")
    upala2[4] = new slctr("Bijagua           ")
    upala2[5] = new slctr("Delicias          ")
    upala2[6] = new slctr("Dos Ríos          ")
    upala2[7] = new slctr("Yolillal          ")
    upala2[8] = new slctr("Canalete")
var losChiles2=new Array()
    losChiles2[0] = new slctr("Cantón")
    losChiles2[1] = new slctr("Los Chiles        ")
    losChiles2[2] = new slctr("Caño Negro        ")
    losChiles2[3] = new slctr("El Amparo         ")
    losChiles2[4] = new slctr("San Jorge         ")
var guatuso2=new Array()
    guatuso2[0] = new slctr("Cantón")
    guatuso2[1] = new slctr("San Rafael        ")
    guatuso2[2] = new slctr("Buenavista        ")
    guatuso2[3] = new slctr("Cote             ")
    guatuso2[4] = new slctr("Katira")
var rioCuarto2=new Array()
    rioCuarto2[0] = new slctr("Cantón")
    rioCuarto2[1] = new slctr("Rio Cuarto")
    rioCuarto2[2] = new slctr("Santa Rita")
    rioCuarto2[3] = new slctr("Santa Isabel")
var cartago2=new Array()
    cartago2[0] = new slctr("Cantón")
    cartago2[1] = new slctr("Oriental          ")
    cartago2[2] = new slctr("Occidental        ")
    cartago2[3] = new slctr("Carmen          ")
    cartago2[4] = new slctr("San Nicolás       ")
    cartago2[5] = new slctr("Agua Caliente (San Francisco)")
    cartago2[6] = new slctr("Guadalupe (Arenilla)")
    cartago2[7] = new slctr("Corralillo        ")
    cartago2[8] = new slctr("Tierra Blanca     ")
    cartago2[9] = new slctr("Dulce Nombre      ")
    cartago2[10] = new slctr("Llano Grande      ")
    cartago2[11] = new slctr("Quebradilla       ")
var paraiso2=new Array()
    paraiso2[0] = new slctr("Cantón")
    paraiso2[1] = new slctr("Paraíso           ")
    paraiso2[2] = new slctr("Santiago          ")
    paraiso2[3] = new slctr("Orosi            ")
    paraiso2[4] = new slctr("Cachí            ")
    paraiso2[5] = new slctr("Llanos de Santa Lucía")
var laUnion2=new Array()
    laUnion2[0] = new slctr("Cantón")
    laUnion2[1] = new slctr("Tres Ríos         ")
    laUnion2[2] = new slctr("San Diego         ")
    laUnion2[3] = new slctr("San Juan          ")
    laUnion2[4] = new slctr("San Rafael        ")
    laUnion2[5] = new slctr("Concepción        ")
    laUnion2[6] = new slctr("Dulce Nombre      ")
    laUnion2[7] = new slctr("San Ramón         ")
    laUnion2[8] = new slctr("Río Azul          ")
var jimenez2=new Array()
    jimenez2[0] = new slctr("Cantón")
    jimenez2[1] = new slctr("Juan Viñas        ")
    jimenez2[2] = new slctr("Tucurrique        ")
    jimenez2[3] = new slctr("Pejibaye          ")
var turrialba2=new Array()
    turrialba2[0] = new slctr("Cantón")
    turrialba2[1] = new slctr("Turrialba         ")
    turrialba2[2] = new slctr("La Suiza          ")
    turrialba2[3] = new slctr("Peralta           ")
    turrialba2[4] = new slctr("Santa Cruz        ")
    turrialba2[5] = new slctr("Santa Teresita    ")
    turrialba2[6] = new slctr("Pavones           ")
    turrialba2[7] = new slctr("Tuis             ")
    turrialba2[8] = new slctr("Tayutic           ")
    turrialba2[9] = new slctr("Santa Rosa        ")
    turrialba2[10] = new slctr("Tres Equis        ")
    turrialba2[11] = new slctr("La Isabel")
    turrialba2[12] = new slctr("Chirripó")
var alvarado2=new Array()
    alvarado2[0] = new slctr("Cantón")
    alvarado2[1] = new slctr("Pacayas           ")
    alvarado2[2] = new slctr("Cervantes         ")
    alvarado2[3] = new slctr("Capellades        ")
var oreamuno2=new Array()
    oreamuno2[0] = new slctr("Cantón")
    oreamuno2[1] = new slctr("San Rafael        ")
    oreamuno2[2] = new slctr("Cot             ")
    oreamuno2[3] = new slctr("Potrero Cerrado   ")
    oreamuno2[4] = new slctr("Cipreses          ")
    oreamuno2[5] = new slctr("Santa Rosa        ")
var elGuarco2=new Array()
    elGuarco2[0] = new slctr("Cantón")
    elGuarco2[1] = new slctr("El Tejar          ")
    elGuarco2[2] = new slctr("San Isidro        ")
    elGuarco2[3] = new slctr("Tobosi            ")
var liberia2=new Array()
    liberia2[0] = new slctr("Cantón")
    liberia2[1] = new slctr("Liberia           ")
    liberia2[2] = new slctr("Cañas Dulces      ")
    liberia2[3] = new slctr("Mayorga           ")
    liberia2[4] = new slctr("Nacascolo         ")
    liberia2[5] = new slctr("Curubandé         ")
var nicoya2=new Array()
    nicoya2[0] = new slctr("Cantón")
    nicoya2[1] = new slctr("Nicoya            ")
    nicoya2[2] = new slctr("Mansión           ")
    nicoya2[3] = new slctr("San Antonio       ")
    nicoya2[4] = new slctr("Quebrada Honda    ")
    nicoya2[5] = new slctr("Sámara            ")
    nicoya2[6] = new slctr("Nosara            ")
    nicoya2[7] = new slctr("Belén de Nosarita")
var santaCruz2=new Array()
    santaCruz2[0] = new slctr("Cantón")
    santaCruz2[1] = new slctr("Santa Cruz        ")
    santaCruz2[2] = new slctr("Bolsón            ")
    santaCruz2[3] = new slctr("Veintisiete de Abril")
    santaCruz2[4] = new slctr("Tempate           ")
    santaCruz2[5] = new slctr("Cartagena         ")
    santaCruz2[6] = new slctr("Cuajiniquil       ")
    santaCruz2[7] = new slctr("Diriá            ")
    santaCruz2[8] = new slctr("Cabo Velas        ")
    santaCruz2[9] = new slctr("Tamarindo         ")
var bagaces2=new Array()
    bagaces2[0] = new slctr("Cantón")
    bagaces2[1] = new slctr("Bagaces           ")
    bagaces2[2] = new slctr("La Fortuna        ")
    bagaces2[3] = new slctr("Mogote            ")
var carrillo2=new Array()
    carrillo2[0] = new slctr("Cantón")
    carrillo2[1] = new slctr("Filadelfia        ")
    carrillo2[2] = new slctr("Palmira           ")
    carrillo2[3] = new slctr("Sardinal          ")
    carrillo2[4] = new slctr("Belén            ")
var cannas2=new Array()
    cannas2[0] = new slctr("Cantón")
    cannas2[1] = new slctr("Cañas            ")
    cannas2[2] = new slctr("Palmira           ")
    cannas2[3] = new slctr("San Miguel        ")
    cannas2[4] = new slctr("Bebedero          ")
    cannas2[5] = new slctr("Porozal           ")
var abangares2=new Array()
    abangares2[0] = new slctr("Cantón")
    abangares2[1] = new slctr("Las Juntas        ")
    abangares2[2] = new slctr("Sierra            ")
    abangares2[3] = new slctr("San Juan          ")
    abangares2[4] = new slctr("Colorado          ")
var tilaran2=new Array()
    tilaran2[0] = new slctr("Cantón")
    tilaran2[1] = new slctr("Tilarán           ")
    tilaran2[2] = new slctr("Quebrada Grande   ")
    tilaran2[3] = new slctr("Tronadora         ")
    tilaran2[4] = new slctr("Santa Rosa        ")
    tilaran2[5] = new slctr("Líbano            ")
    tilaran2[6] = new slctr("Tierras Morenas   ")
    tilaran2[7] = new slctr("Arenal            ")
var nandayure2=new Array()
    nandayure2[0] = new slctr("Cantón")
    nandayure2[1] = new slctr("Carmona           ")
    nandayure2[2] = new slctr("Santa Rita        ")
    nandayure2[3] = new slctr("Zapotal           ")
    nandayure2[4] = new slctr("San Pablo         ")
    nandayure2[5] = new slctr("Porvenir          ")
    nandayure2[6] = new slctr("Bejuco            ")
var laCruz2=new Array()
    laCruz2[0] = new slctr("Cantón")
    laCruz2[1] = new slctr("La Cruz           ")
    laCruz2[2] = new slctr("Santa Cecilia     ")
    laCruz2[3] = new slctr("Santa Elena       ")
var hojancha2=new Array()
    hojancha2[0] = new slctr("Cantón")
    hojancha2[1] = new slctr("Hojancha          ")
    hojancha2[2] = new slctr("Puerto Carrillo   ")
    hojancha2[3] = new slctr("Huacas")
var puntarenas2=new Array()
    puntarenas2[0] = new slctr("Cantón")
    puntarenas2[1] = new slctr("Puntarenas        ")
    puntarenas2[2] = new slctr("Pitahaya          ")
    puntarenas2[3] = new slctr("Chomes            ")
    puntarenas2[4] = new slctr("Lepanto           ")
    puntarenas2[5] = new slctr("Paquera           ")
    puntarenas2[6] = new slctr("Manzanillo        ")
    puntarenas2[7] = new slctr("Guacimal          ")
    puntarenas2[8] = new slctr("Barranca          ")
    puntarenas2[9] = new slctr("Monte Verde       ")
    puntarenas2[10] = new slctr("Cóbano            ")
    puntarenas2[11] = new slctr("Chacarita         ")
    puntarenas2[12] = new slctr("Chira        ")
    puntarenas2[13] = new slctr("Acapulco          ")
    puntarenas2[14] = new slctr("El Roble          ")
    puntarenas2[15] = new slctr("Arancibia         ")
var esparza2=new Array()
    esparza2[0] = new slctr("Cantón")
    esparza2[1] = new slctr("Espíritu Santo    ")
    esparza2[2] = new slctr("San Juan Grande   ")
    esparza2[3] = new slctr("Macacona          ")
    esparza2[4] = new slctr("San Rafael        ")
    esparza2[5] = new slctr("San Jerónimo      ")
    esparza2[6] = new slctr("Caldera")
var buenosAires2=new Array()
    buenosAires2[0] = new slctr("Cantón")
    buenosAires2[1] = new slctr("Buenos Aires      ")
    buenosAires2[2] = new slctr("Volcán            ")
    buenosAires2[3] = new slctr("Potrero Grande    ")
    buenosAires2[4] = new slctr("Boruca            ")
    buenosAires2[5] = new slctr("Pilas            ")
    buenosAires2[6] = new slctr("Biolley           ")
    buenosAires2[7] = new slctr("Brunka            ")
var montesDeOro2=new Array()
    montesDeOro2[0] = new slctr("Cantón")
    montesDeOro2[1] = new slctr("Miramar           ")
    montesDeOro2[2] = new slctr("La Unión          ")
    montesDeOro2[3] = new slctr("San Isidro        ")
var osa2=new Array()
    osa2[0] = new slctr("Cantón")
    osa2[1] = new slctr("Puerto Cortés     ")
    osa2[2] = new slctr("Palmar            ")
    osa2[3] = new slctr("Sierpe            ")
    osa2[4] = new slctr("Bahía Ballena     ")
    osa2[5] = new slctr("Piedras Blancas   ")
    osa2[6] = new slctr("Bahía Drake")
var quepos2=new Array()
    quepos2[0] = new slctr("Cantón")
    quepos2[1] = new slctr("Quepos            ")
    quepos2[2] = new slctr("Savegre           ")
    quepos2[3] = new slctr("Naranjito         ")
var golfito2=new Array()
    golfito2[0] = new slctr("Cantón")
    golfito2[1] = new slctr("Golfito           ")
    golfito2[2] = new slctr("Puerto Jiménez    ")
    golfito2[3] = new slctr("Guaycará          ")
    golfito2[4] = new slctr("Pavón")
var cotoBrus2=new Array()
    cotoBrus2[0] = new slctr("Cantón")
    cotoBrus2[1] = new slctr("San Vito          ")
    cotoBrus2[2] = new slctr("Sabalito          ")
    cotoBrus2[3] = new slctr("Aguabuena         ")
    cotoBrus2[4] = new slctr("Limoncito         ")
    cotoBrus2[5] = new slctr("Pittier           ")
var parrita2=new Array()
    parrita2[0] = new slctr("Cantón")
    parrita2[1] = new slctr("Parrita           ")
var corredores2=new Array()
    corredores2[0] = new slctr("Cantón")
    corredores2[1] = new slctr("Corredor          ")
    corredores2[2] = new slctr("La Cuesta         ")
    corredores2[3] = new slctr("Canoas            ")
    corredores2[4] = new slctr("Laurel            ")
var garabito2=new Array()
    garabito2[0] = new slctr("Cantón")
    garabito2[1] = new slctr("Jacó             ")
    garabito2[2] = new slctr("Tárcoles          ")
var limon2=new Array()
    limon2[0] = new slctr("Cantón")
    limon2[1] = new slctr("Limón")
    limon2[2] = new slctr("Valle La Estrella")
    limon2[3] = new slctr("Río Blanco        ")
    limon2[4] = new slctr("Matama            ")
var pococi2=new Array()
    pococi2[0] = new slctr("Cantón")
    pococi2[1] = new slctr("Guápiles          ")
    pococi2[2] = new slctr("Jiménez           ")
    pococi2[3] = new slctr("Rita             ")
    pococi2[4] = new slctr("Roxana            ")
    pococi2[5] = new slctr("Cariari           ")
    pococi2[6] = new slctr("Colorado          ")
    pococi2[7] = new slctr("La Colonia")
var siquirres2=new Array()
    siquirres2[0] = new slctr("Cantón")
    siquirres2[1] = new slctr("Siquirres         ")
    siquirres2[2] = new slctr("Pacuarito         ")
    siquirres2[3] = new slctr("Germania          ")
    siquirres2[4] = new slctr("El Cairo          ")
    siquirres2[5] = new slctr("La Alegría        ")
var talamanca2=new Array()
    talamanca2[0] = new slctr("Cantón")
    talamanca2[1] = new slctr("Bratsi            ")
    talamanca2[2] = new slctr("Sixaola           ")
    talamanca2[3] = new slctr("Cahuita           ")
var matina2=new Array()
    matina2[0] = new slctr("Cantón")
    matina2[1] = new slctr("Matina            ")
    matina2[2] = new slctr("Batán            ")
    matina2[3] = new slctr("Carrandi          ")
var guácimo2=new Array()
    guácimo2[0] = new slctr("Cantón")
    guácimo2[1] = new slctr("Guácimo           ")
    guácimo2[2] = new slctr("Mercedes          ")
    guácimo2[3] = new slctr("Pocora            ")
    guácimo2[4] = new slctr("Río Jiménez       ")
    guácimo2[5] = new slctr("Duacarí           ")

//Funcion que realmente hace el trabajo
function slctryole(cual,donde){
	if(cual.selectedIndex != 0){
		donde.length=0
		cual = eval(cual.value)
		for(m=0;m<cual.length;m++){
			var nuevaOpcion = new Option(cual[m].texto);
			donde.options[m] = nuevaOpcion;
			if(cual[m].valor != null){
				donde.options[m].value = cual[m].valor
			}
			else{
				donde.options[m].value = cual[m].texto
			}
		}
	}
}