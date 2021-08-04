// menu hamburguesa

function burguer() {
    var botonera = document.getElementById('navegacion');
    if (botonera.style.display === 'block') {
        botonera.style.display = 'none';
    } else {
        botonera.style.display = 'block';
    }
}

// mostrar texto

function mostrar() {
    
    var txt = document.getElementById('txt-artista');
    txt.style.opacity = '1';

}
    function ocultar() {
        var txt2 = document.getElementById('txt-artista');
        txt2.style.opacity = '0';
}

// mostrar img

// function scroll() {
//     var img = document.getElementById('img_trabajo');
//     img.style.opacity = '1';

// }

// function noScroll() {
//     var img2 = document.getElementById('img_trabajo');
//     img2.style.opacity = '0';
// }

