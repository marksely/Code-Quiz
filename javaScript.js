var startButton = document.querySelector('.start-button');
var timerEl = document.querySelector('.timer');
var question = document.querySelector('#question');

var firstAns = document.querySelector('.answer1');
var secondAns = document.querySelector('.answer2');
var thirdAns = document.querySelector('.answer3');
var fourthAns = document.querySelector('.answer4');

var instructions = document.querySelector('#instructions');
var hideBtn = document.querySelector('#hide');
var ansNote = document.querySelector('ans-note');

var timer;
var secondsLeft = 59;

firstAns.style.display = "none";
secondAns.style.display = "none";
thirdAns.style.display = "none";
fourthAns.style.display = "none";

function startGame() {
    isWin = false;
    startButton.disabled = true;
    timerCount = 59;
    document.querySelector('#hide').style.display = 'none';
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
            clearInterval(timerClock);
            lostGame();
        }
    },1000);
}

function question1() {
    firstAns.style.display = "block";
    secondAns.style.display = "block";
    thirdAns.style.display = "block";
    fourthAns.style.display = "block";
    question.textContent = 'Commonly used data types do NOT include: ';
    firstAns.textContent = 'strings';
    secondAns.textContent = 'booleans';
    thirdAns.textContent = 'alerts';
    fourthAns.textContent = 'numbers';
    thirdAns.addEventListener('click', function() {
        console.log('Correct');
        question2();
    })
}

function question2() {
    firstAns.style.display = "block";
    secondAns.style.display = "block";
    thirdAns.style.display = "block";
    fourthAns.style.display = "block";
    question.textContent = 'The condition in an if/else statement is enclosed within _________ ?';
    firstAns.textContent = 'quotes';
    secondAns.textContent = 'curly brackets';
    thirdAns.textContent = 'parentheses';
    fourthAns.textContent = 'square brackets';
    // create condition to check answer 
    if(firstAns.clicked) {
        ansNote.textContent = 'Correct!'
        question3();
    } else {
        //console.log("wrong")
        secondsLeft -= 8;
        
    }
    
}

function question3() {
    ansNote.textContent = "";
    firstAns.style.display = "block";
    secondAns.style.display = "block";
    thirdAns.style.display = "block";
    fourthAns.style.display = "block";
    question.textContent = 'Array in JavaScript can be used to store';
    firstAns.textContent = 'numbers';
    secondAns.textContent = 'strings';
    thirdAns.textContent = 'booleans';
    fourthAns.textContent = 'all of the above';
    // create condition to check answer 
    question4();
}

function question4() {
    firstAns.style.display = "block";
    secondAns.style.display = "block";
    thirdAns.style.display = "block";
    fourthAns.style.display = "block";
    question.textContent = 'String values must be enclosed within ________ when being assigned to variables.';
    firstAns.textContent = 'commas';
    secondAns.textContent = 'curly brackets';
    thirdAns.textContent = 'quotes';
    fourthAns.textContent = 'parentheses';
    // create condition to check answer 
}

function question5() {
    firstAns.style.display = "block";
    secondAns.style.display = "block";
    thirdAns.style.display = "block";
    fourthAns.style.display = "block";
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
    window.alert("GAME OVER!");
}