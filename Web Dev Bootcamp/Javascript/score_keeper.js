var b1Button = document.querySelector('#b1');
var b2Button = document.getElementById('b2');
var resetB = document.getElementById('reset');

var p1Display = document.querySelector('#p1Display');
var p2Display = document.getElementById('p2Display');

var winningScoreDispay = document.querySelector('p span');
var numInput = document.querySelector('input');
var p1Score = 0;
var p2Score = 0;

var winningScore = 5;
var gameOver = false;

b1Button.addEventListener('click', function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add('winner');
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

b2Button.addEventListener('click', function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add('winner');
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetB.addEventListener('click', function() {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner');
    p2Display.classList.remove('winner');
    gameOver = false;
};

numInput.addEventListener('change', function() {
    winningScoreDispay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});
