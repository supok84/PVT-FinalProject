$(document).ready(function() {
    $("#carousel-example-generic").carousel({interval: 50000});
});

function changePriceLeft(){
    var elem1 = document.getElementsByClassName("carousel-indicators-item");
    var elem2 = document.getElementById("carRental__bottom_price");
    if(elem1[0].getAttribute('class') == 'carousel-indicators-item active'){elem2.innerHTML = elem1[2].getAttribute('data-price');}
    if(elem1[1].getAttribute('class') == 'carousel-indicators-item active'){elem2.innerHTML = elem1[0].getAttribute('data-price');}
    if(elem1[2].getAttribute('class') == 'carousel-indicators-item active'){elem2.innerHTML = elem1[1].getAttribute('data-price');}
}

function changePriceRight(){
    var elem1 = document.getElementsByClassName("carousel-indicators-item");
    var elem2 = document.getElementById("carRental__bottom_price");
    if(elem1[0].getAttribute('class') == 'carousel-indicators-item active'){elem2.innerHTML = elem1[1].getAttribute('data-price');}
    if(elem1[1].getAttribute('class') == 'carousel-indicators-item active'){elem2.innerHTML = elem1[2].getAttribute('data-price');}
    if(elem1[2].getAttribute('class') == 'carousel-indicators-item active'){elem2.innerHTML = elem1[0].getAttribute('data-price');}
}

leftControl.addEventListener("click", changePriceLeft);
rightControl.addEventListener("click", changePriceRight);