"use script"
// C заданием помогла Аня, а именно построить логику выполнения действий
// снизу оставил свой один из четырех кривых вариантов угадывания числа, который пытался сделать сам

let min = 0;
let max = 100;
let num = 0;
let game = true;
while (game) {
    num = min + ((max - min) / 2);
    if (confirm(`Ваше число больше ${num.toFixed()} ?`)) {
        min = num + 1;
    } else if (confirm(`Ваше число меньше ${num.toFixed()} ?`)) {
        max = num - 1;
    } else if (confirm(`Ваше число равно ${num.toFixed()} ?`)) {
        alert(`Ваше число ${num.toFixed()}! Спасибо за игру^_^`);
        break;
    }
}

//alert("Загадайте число от 0 до 100");
// let num = 50;
// let res = 0;

// for (let i = 0; i <= 100; i++) {
//     let question = prompt("Ваше число больше(>), меньше(<) или равно(=) " + num.toFixed() + " ?");

//     if (question == ">") {
//         num = num + ((100 - num) / 2);
//     } else if (question == "<") {
//         num = num - ((100 - num) / 2);
//     } else if (question == "=") {
//         alert("Угадал, молодец)");
//         break;
//     }
// }