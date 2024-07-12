## Version Node ->  v22.2.0

Maqueta:
COMANDOS:

npm i

npm run start | npm start

Tambien se puede visuazliar en 

https://andreanicte02.github.io/carful_test/q2


Segunda parte:

Problemas:

Se encuentran en la carpeta problems

```js

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
``` 
Problema 2:

```js
const questionList = [
    {
        questionId: 1,
        questionName: 'What is your favorite color?',
        answers: [
            {answerName: 'Red', answerId: 11},
            {answerName: 'Blue', answerId: 12},
            {answerName: 'Pink', answerId: 13},
        ]
    },
    {
        questionId: 2,
        questionName: 'Are you a flat-earther?',
        answers: [
            {answerName: 'Yes', answerId: 21},
            {answerName: 'No', answerId: 22}
        ]
    }
];

console.log('First answer:')
console.log(questionList.reduce((previousValue, currentValue) => previousValue * currentValue.answers.length, 1));


const headers = questionList.reduce((previousValue, currentValue) => {
    previousValue.push(currentValue.questionName);
    return previousValue;
}, [])


let problem3 = [];

const generateCombinations = (list, index) => {
    if (index === questionList.length) {
        problem3.push(list.join(', '));
        return;
    }

    for (let i = 0; i < questionList[index].answers.length; i++) {
        generateCombinations([...list, questionList[index].answers[i].answerName], index + 1);
        console.log([...list, questionList[index].answers[i].answerName] )
        console.log(index)
    }
}

generateCombinations([], 0);

console.log('Second answer:')
const lineHeaders = headers.join(',');
const linesBody = problem3.join('\n')
console.log(lineHeaders + '\n' + linesBody);
//xd
```
