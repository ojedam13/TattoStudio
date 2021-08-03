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

// function mostrar() {
//     var img = document.getElementsById('img_trabajo');
//     img.style.display = 'block';

// function ocultar() {
//     var img2 = document.getElementById('img_trabajo');
//     img2.style.display = 'none';
// }


// }
window.addEventListener('scroll', mostrarScroll);

let animado = document.querySelectorAll('.animado');

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado > scrollTop) {
            animado[i].style.opacity = 1;
        }
    }
}

// window.addEventListener('scroll', function(){
//     var img = document.getElementsByClassName('contenedor_trabajos');
// var altura = window.innerHeight/1.3;

// var distancia = img.getBoundingClientRect().top;

// if (distancia <= altura) {
//     img.classList.add('aparece');
// } else {
//     img.classList.remove('aparece');
// }

// })