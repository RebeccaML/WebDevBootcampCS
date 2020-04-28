let p1Button = document.querySelector("#p1");
let p2Button = document.querySelector("#p2");
let resetButton = document.querySelector("#reset");
let p1Display = document.querySelector("#p1Display");
let winningDisplay = document.querySelector("#winDisplay")
let numInput = document.querySelector("input");

let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
    else {
        console.log("Game is now over, you have to rest the score.")
    }
});

p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
    else {
        console.log("Game is now over, you have to rest the score.")
    }
});

resetButton.addEventListener("click", function() {
    reset();
})

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p1Display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function() {
    winningDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});