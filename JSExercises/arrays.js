// function printReverse(numbers) {
//     let reversed = numbers.slice().reverse();
//     reversed.forEach(function (number) {
//         console.log(number);
//     });
// }

function printReverse(numbers) {
    for (let i = numbers.length-1; i >= 0; i--) {
        console.log(numbers[i]);
    }
}

printReverse([1, 2, 3, 4, 5])

function isUniform(test) {
    let first = test[0];
    for (let i = 0; i < test.length; i++) {
        if (test[i] !== first) {
            return false;
        }
    }
    return true
}

console.log(isUniform([1, 1, 1, 1, 1]));

function sumArray(numbers) {
    let result = 0;
    numbers.forEach(function(number) {
        result += number;
    });
    console.log(result);
}

sumArray([1, 2, 3, 4, 5]);

function max(numbers) {
    let max = 0;
    numbers.forEach(function(number) {
        if (number > max) {
            max = number;
        }
    });
    console.log(max);
}

max([5, 2, 8, 55, 3, 2 ,6]);