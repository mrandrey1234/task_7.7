function numberToText(number) {
    let text = '';
    
    if (number < 0) {
        return `минус ${numberToText(-number)}`;
    }

    switch (true) {
        case (number <= 20):
            switch (number) {
                case 0: text = "ноль"; break;
                case 1: text = "один"; break;
                case 2: text = "два"; break;
                case 3: text = "три"; break;
                case 4: text = "четыре"; break;
                case 5: text = "пять"; break;
                case 6: text = "шесть"; break;
                case 7: text = "семь"; break;
                case 8: text = "восемь"; break;
                case 9: text = "девять"; break;
                case 10: text = "десять"; break;
                case 11: text = "одиннадцать"; break;
                case 12: text = "двенадцать"; break;
                case 13: text = "тринадцать"; break;
                case 14: text = "четырнадцать"; break;
                case 15: text = "пятнадцать"; break;
                case 16: text = "шестнадцать"; break;
                case 17: text = "семнадцать"; break;
                case 18: text = "восемнадцать"; break;
                case 19: text = "девятнадцать"; break;
                case 20: text = "двадцать"; break;
            }
            break;
        
        case (number < 100):
            const tens = Math.floor(number / 10) * 10;
            const units = number % 10;
            switch (tens) {
                case 20: text = "двадцать"; break;
                case 30: text = "тридцать"; break;
                case 40: text = "сорок"; break;
                case 50: text = "пятьдесят"; break;
                case 60: text = "шестьдесят"; break;
                case 70: text = "семьдесят"; break;
                case 80: text = "восемьдесят"; break;
                case 90: text = "девяносто"; break;
            }
            if (units > 0) {
                text += " " + numberToText(units);
            }
            break;
        
        case (number <= 999):
            const hundreds = Math.floor(number / 100) * 100;
            const remainder = number % 100;
            switch (hundreds) {
                case 100: text = "сто"; break;
                case 200: text = "двести"; break;
                case 300: text = "триста"; break;
                case 400: text = "четыреста"; break;
                case 500: text = "пятьсот"; break;
                case 600: text = "шестьсот"; break;
                case 700: text = "семьсот"; break;
                case 800: text = "восемьсот"; break;
                case 900: text = "девятьсот"; break;
            }
            if (remainder > 0) {
                text += " " + numberToText(remainder);
            }
            break;
        
        default:
            text = number.toString();
    }
    return text;
}

function formatNumberOutput(number) {
    const text = numberToText(number);
    return text.length <= 20 ? text : number;
}

let minValue = parseInt(prompt('Минимальное знание числа для игры','0'))  || 0;
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
minValue = (minValue < -999) ? minValue = -999: minValue;
maxValue = (maxValue > 999) ? maxValue = 999: maxValue;
alert(`Загадайте любое целое число от ${formatNumberOutput(minValue)} до ${formatNumberOutput(maxValue)}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
    minValue = (minValue < -999) ? minValue = -999: minValue;
    maxValue = (maxValue > 999) ? maxValue = 999: maxValue;
    alert(`Загадайте любое целое число от ${formatNumberOutput(minValue)} до ${formatNumberOutput(maxValue)}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${formatNumberOutput(answerNumber)}?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 3);
            const answerPhrase = (phraseRandom === 0) ?
                `Я думаю это ${formatNumberOutput(answerNumber)}` :
                (phraseRandom === 1) ?
                `Скорее всего это ${formatNumberOutput(answerNumber)}`:
                `Возможно это число ${formatNumberOutput(answerNumber)}`;
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 3);
            const answerPhrase = (phraseRandom === 0) ?
                `Наверное, это число ${formatNumberOutput(answerNumber)}` :
                (phraseRandom === 1) ?
                `Это легко, это число ${formatNumberOutput(answerNumber)}`:
                `Легче легкого, это число ${formatNumberOutput(answerNumber)}`;
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 3);
            const answerPhrase = (phraseRandom === 0) ?
                `Я всегда угадываю\n\u{1F60E}` :
                (phraseRandom === 1) ?
                `Я угадал\n\u{1F605}`:
                `Я так рад, что я угадал\n\u{1F643}`;
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

