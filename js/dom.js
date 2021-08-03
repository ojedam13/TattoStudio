function burguer() {
    var botonera = document.getElementById('navegacion');
    if (botonera.style.display === 'block') {
        botonera.style.display = 'none';
    } else {
        botonera.style.display = 'block';
    }
}



function ocultar() {
    var img2 = document.getElementById('img_trabajo');
    img2.style.display = 'none'
}

function mostrar() {
    var img = document.getElementsById('img_trabajo');
    img.style.display = 'block';
}