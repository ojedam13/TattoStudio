// menu hamburguesa

function burguer() {
    var botonera = document.getElementById('navegacion');
    if (botonera.style.display === 'block') {
        botonera.style.display = 'none';
    } else {
        botonera.style.display = 'block';
    }
}

// scrool imagenes

function mostrar() {
    
    var txt = document.getElementById('txt-artista');
    txt.style.opacity = '1';

}
    function ocultar() {
        var txt2 = document.getElementById('txt-artista');
        txt2.style.opacity = '0';
}
    
function scroll() {
    alert();
    // var img = document.getElementById('img_trabajo');
    // txt.style.display = 'block';

}
    // function noScroll() {
    //     var img2 = document.getElementById('img_trabajo');
    //     txt2.style.display = 'none';
    // }

