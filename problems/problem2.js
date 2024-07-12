
const priceRadioSelector = document.querySelector('input[data-variant-id="40413600219254"]');
const priceContainerSelector = document.getElementById('shopify-section-template--15460275060854__sticky-atc');

const message = document.createElement('div');
message.id = 'promotion-message';
message.className = 'promotion-message'
message.style.marginTop = '10px'
message.style.marginBottom = '10px';
message.style.backgroundColor = 'aqua';

priceContainerSelector.appendChild(message);

let currentQuantity = 0;
let check = false;

function checkQuantity() {
    if (currentQuantity === 1) {
        message.textContent = "Add 2 of this product and the third one is free!";
    } else if (currentQuantity === 2) {
        message.textContent = "Add another one free to your cart.";
    } else if (currentQuantity >= 3) {
        message.textContent = "Congrats! Add to cart now!";
    } else {
        message.textContent = "";
    }
}

const minusButton = document.querySelector('button[data-minus="true"]');
const plusButton = document.querySelector('button[data-plus="true"]');

//no pude acceder directmnte al selector de la cantidad
minusButton.addEventListener('click', function() {
    if(check && currentQuantity>1){
        currentQuantity--;
        checkQuantity();
    }

});

plusButton.addEventListener('click', function() {
    if(check && currentQuantity<3){
        currentQuantity++;
        checkQuantity();
    }
});

priceRadioSelector.addEventListener('change', function(event) {
    if (event.target.checked) {
        check = event.target.checked
        if(currentQuantity === 0){
            currentQuantity = 1;
        }
        checkQuantity();
    }
});