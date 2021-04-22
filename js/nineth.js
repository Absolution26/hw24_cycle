"use script"

let result = 0;
for (let i = 2; i <= 9; i++) {
    for (let a = 1; a <= 10; a++) {
        result = i * a;
        console.log(i + '*' + a + '=' + result);
    }
}
