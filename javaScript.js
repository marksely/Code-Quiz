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

var chosenAns = thirdAns;
var timer;
var secondsLeft = 59;
var highscore = [];

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
        timerEl.textContent = 'Time left: ' + secondsLeft;
        if(secondsLeft >= 0) {
            secondsLeft--;
        } 
        if(secondsLeft === 0) {
            lostGame();
            clearInterval(timerClock);
        }
        if(isWin && secondsLeft) {
            clearInterval(timerClock);
            winGame();
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
    if(firstAns.clicked === true || secondAns.clicked === true || thirdAns.clicked === true) {
        timerCount -= 5;
    }

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
    if(firstAns.clicked || secondAns.clicked || thirdAns.clicked) {
        secondsLeft -= 5;
    }

    thirdAns.addEventListener('click', function() {
        console.log('Correct');
        question3();
    })
    
}

function question3() {
    firstAns.style.display = "block";
    secondAns.style.display = "block";
    thirdAns.style.display = "block";
    fourthAns.style.display = "block";
    question.textContent = 'Array in JavaScript can be used to store';
    firstAns.textContent = 'numbers';
    secondAns.textContent = 'strings';
    thirdAns.textContent = 'all of the answers are true';
    fourthAns.textContent = 'booleans';
    if(firstAns.clicked || secondAns.clicked || thirdAns.clicked) {
        secondsLeft -= 5;
    }

    thirdAns.addEventListener('click', function() {
        console.log('Correct');
        question4();
    })
    // create condition to check answer 
    //question4();
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
    if(firstAns.clicked || secondAns.clicked || fourthAns.clicked) {
        secondsLeft -= 5;
    }

    thirdAns.addEventListener('click', function() {
        console.log('Correct');
        question5();
    })
    // create condition to check answer 
}
function question5() {
    firstAns.style.display = "block";
    secondAns.style.display = "block";
    thirdAns.style.display = "block";
    fourthAns.style.display = "block";
    question.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:';
    firstAns.textContent = 'JavaScript';
    secondAns.textContent = 'terminal/bash';
    thirdAns.textContent = 'console.log';
    fourthAns.textContent = 'for loops';
    // create condition to check answer 
    thirdAns.addEventListener('click', function(){
        winGame();
        checkWin();
    })
}

function checkWin() {
    if(chosenAns === thirdAns) {
        isWin = true;
    }
}
function winGame() {
    var score = secondsLeft;
    var name = window.prompt('You have completed the quiz! Enter your initials to be added to the highscores list!')
    console.log(name + ':' + score);
}

function lostGame() {
   
}