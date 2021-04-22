// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример,
// вывести результат и спросить, хочет ли он решить еще один пример. 
// И так до тех пор, пока пользователь не откажется.

let res = 0;

for (; ;) {
    let a = +prompt("Введите первое число");
    let b = +prompt("Введите второе число");
    let sign = prompt("Введите действие");
    switch (sign) {
        case '+':
            res = a + b;
            alert(res);
            break;
        case '-':
            res = a - b;
            alert(res);
            break;
        case '*':
            res = a * b;
            alert(res);
            break;
        case '/':
            res = a / b;
            alert(res);
            break;
        default:
            alert("Enter correct values");
            break;
    }
    question = confirm("Вы хотите решить пример?");
    if (question == false) {
        break;
    }
}


