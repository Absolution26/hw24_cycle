//Запросить 2 числа и найти только наибольший общий делитель.
"use strict"

let a = prompt("Введите первое число");
let b = prompt("Введите второе число");
let nod = 0;

for (let i = 1; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
        nod = i;
    }
}
console.log(nod);