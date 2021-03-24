window.onscroll = function() {mostrar(), sochi()};

function mostrar() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 510) {
    document.getElementById("nav").style.top = "0";
} else {
    document.getElementById("nav").style.top = "-60px";
}
}

function sochi() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 180) {
    document.getElementById("romano").style.display = "inline";
    document.getElementById("somo").className = "blanco";
} else {
    document.getElementById("romano").style.display = "none";
    document.getElementById("somo").className =  "negro";
}
}