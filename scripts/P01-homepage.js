var slideIndex = [1, 1];
var slideId = ["mySlidesA", "mySlidesB"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";

}

if (sessionStorage.getItem('usuarioConectado')) {
    let usuario;
    usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    sessionStorage.getItem('usuarioConectado')
    if (usuario.estado == "bloqueado" || usuario.estado == "rechazado" ) {
    } else {
    switch (usuario.tipo) {
        case 'Administrador':
            window.location.href = 'P49-principal-administrador.html';
            break;
        case 'Cliente':
            window.location.href = 'P09-principal-cliente.html';
            break;
        case 'Proveedor':
            window.location.href = 'P19-principal-proveedor.html';
            break;
    };
};
};