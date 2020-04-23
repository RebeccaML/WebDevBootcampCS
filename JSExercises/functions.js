// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(100));

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

function kebabToSnake(text) {
    return text.replace(/-/g, "_");
}

console.log(kebabToSnake("hello-world-now"));