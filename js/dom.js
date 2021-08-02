function burguer() {
    var botonera = document.getElementById('navegacion');
    if (botonera.style.display === 'block') {
        botonera.style.display = 'none';
    } else {
        botonera.style.display = 'block';
    }
}