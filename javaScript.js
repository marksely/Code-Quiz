var startButton = document.querySelector('.start-button');
var timerEl = document.querySelector('.timer');
var question = document.querySelector('.question');
var firstAns = document.querySelector('.answer1');
var secondAns = document.querySelector('.answer2');
var thirdAns = document.querySelector('.answer3');
var fourthAns = document.querySelector('.answer4');


var timer;
var secondsLeft = 59;

function startGame() {
    isWin = false;
    startButton.disabled = true;
    timerCount = 59;
    question1();
}

startButton.addEventListener('click', startTimer);
startButton.addEventListener('click', startGame);

function startTimer() {
    var timerClock = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = 'Time left: ' + secondsLeft;
        if(secondsLeft === 0) {
            if(isWin && secondsLeft >= 0) {
                clearInterval(timerClock);
                winGame();
            }
        }
        
        if(secondsLeft === 0) {
            lostGame();
        }
    },1000);
}

function question1() {
    question.textContent = 'Commonly used data types do NOT include: ';
    firstAns.textContent = 'strings';
    secondAns.textContent = 'booleans';
    thirdAns.textContent = 'alerts';
    fourthAns.textContent = 'numbers';
    thirdAns.addEventListener('click', function() {
        console.log('Correct');
    })
    question2();
}

function question2() {
    question.textContent = 'The condition in an if/else statement is enclosed within _________ ?';
    firstAns.textContent = 'parentheses';
    secondAns.textContent = 'curly brackets';
    thirdAns.textContent = 'quotes';
    fourthAns.textContent = 'square brackets';
    // create condition to check answer 
    question3();
}

function question3() {
    question.textContent = 'Array in JavaScript can be used to store';
    firstAns.textContent = 'numbers';
    secondAns.textContent = 'strings';
    thirdAns.textContent = 'booleans';
    fourthAns.textContent = 'all of the above';
    // create condition to check answer 
    question4();
}

function question4() {
    question.textContent = 'String values must be enclosed within ________ when being assigned to variables.';
    firstAns.textContent = 'commas';
    secondAns.textContent = 'curly brackets';
    thirdAns.textContent = 'quotes';
    fourthAns.textContent = 'parentheses';
    // create condition to check answer 
}

function question5() {
    question.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:';
    firstAns.textContent = 'JavaScript';
    secondAns.textContent = 'console.log';
    thirdAns.textContent = 'terminal/bash';
    fourthAns.textContent = 'for loops';
    // create condition to check answer 
}

function winGame() {

}

function lostGame() {

}

function setQuestion() {

}