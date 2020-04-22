console.log("Print all numbers between -10 and 19");

for (let i = -10; i <= 19; i++) {
    console.log(i);
}

console.log("Print all even numbers between 10 and 40");

for (let i = 10; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Print all odd numbers between 300 and 333");

for (let i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("Print all number between 5 and 50 that are divisible by both 3 and 5");

for (let i = 5; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}