var slider = $('#slider');
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-' + 100 + '%');

function moverDerecha() {
    slider.animate({
        marginLeft: '-' + 200 + '%'
    }, 700, function() {
        $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
        slider.css('margin-left', '-' + 100 + '%');
    });
}

function moverIzquierda() {
    slider.animate({
        marginLeft: 0
    }, 700, function() {
        $('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
        slider.css('margin-left', '-' + 100 + '%');
    });
}
//hacer que el slider sea automático
function autoplay() {
    interval = setInterval(function() {
        moverDerecha();
    }, 5000);
}

siguiente.on('click', function() {
    moverDerecha();
    clearInterval(interval);
    autoplay();
});

anterior.on('click', function() {
    moverIzquierda();
    clearInterval(interval);
    autoplay();
});

autoplay();