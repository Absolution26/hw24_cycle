"use script"

let week = [
    "Воскресение", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
];
let i = 0;
let question = '';
for (i = 0; i < Infinity; i++) {
    let nextDay = week[0 + i];
    question = confirm(nextDay + ". Хотите увидеть следующий день недели?");
    if (i >= 6) {
        i = -1;
    } else if (question == false) {
        break;
    }
}




