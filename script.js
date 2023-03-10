'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!✍';

document.querySelector('.number').textContent= 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random()*20)+1;
// console.log(number);
// document.querySelector('.number').textContent =secretNumber ;
 
let score = document.querySelector('.score').textContent ;

let highscr=document.querySelector('.highscore').textContent ;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        // document.querySelector('.message').textContent = '⛔No Number!';
        displayMessage('⛔No Number!')
    }
    else if (guess === secretNumber ){
        displayMessage(' Correct Number!'); 
        document.querySelector('.number').textContent =secretNumber ;

        if(score > highscr ){
            highscr = score
        document.querySelector('.highscore').textContent = highscr;
        }

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';


    }else if(guess !== secretNumber){
        if(score>1){
        displayMessage((guess > secretNumber) ? 'Too high' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
            }else{
            document.querySelector('.message').textContent = 'You lose the game';
            }

    }
    
    // else if(guess > secretNumber){
    //     if(score>1){
    //     document.querySelector('.message').textContent = 'Too high';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }else{
    //     document.querySelector('.message').textContent = 'You lose the game';
    //     }
    // }else{
    //     if(score>1){
    //     document.querySelector('.message').textContent = 'Too low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'You lose the game';
    //         }
    // }

});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});