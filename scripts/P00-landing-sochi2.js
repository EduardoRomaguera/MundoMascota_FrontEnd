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
    document.getElementById("overlay").className = "blanco";

} else {
    document.getElementById("romano").style.display = "inline";
    // Linea 18 con none para ocultar y luego mostrar el texto en japo
    document.getElementById("somo").className =  "negro";
    document.getElementById("overlay").className = "negro";

}
}

var vid = document.getElementById("video");
vid.playbackRate = 0.8;