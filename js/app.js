'use strict';

// console.log('hey girl, hey!');

// get username and give greeting
var userName = prompt('Hi! What is your name?');
alert('Hey ' + userName + ', glad you\'re here!');

var userScore = 0;



function questionOne(){
  var responseOne = prompt('Am I originally from Seattle, WA?').toLowerCase();

  if (responseOne === 'no' || responseOne === 'n') {
    // console.log('You are right!');
    alert('You are right!');
    userScore++;
  } else {
    alert('Womp womp...that\'s wrong');
  }
}

questionOne();



function questionTwo(){
  var responseTwo = prompt('Do I have a daughter?').toLowerCase();

  if (responseTwo === 'yes' || responseTwo === 'y') {
    // console.log('Correct!');
    alert('Correct!');
    userScore++;
  } else {
    alert('Sorry, incorrect!');
  }
}

questionTwo();


function questionThree(){
  var responseThree = prompt('Do I have an obession with celebrities?').toLowerCase();

  if (responseThree === 'yes' || responseThree === 'y') {
    // console.log('you betcha! no shame in it here');
    alert('You betcha! No shame in it here');
    userScore++;
  } else {
    alert('Sorry, incorrect!');
  }
}

questionThree();

function questionFour(){
  var responseFour = prompt('Do I try to act younger and hipper than I really am?').toLowerCase();

  if (responseFour === 'yes' || responseFour === 'y') {
    // console.log('Yass Queen!');
    alert('Yass Queen!');
    userScore++;
  } else {
    alert('Womp womp..that\'s wrong');
  }
}

questionFour();



function questionFive(){
  var responseFive = prompt('Do I have more tattoos than I can count on one hand?').toLowerCase();

  if (responseFive === 'yes' || responseFive === 'y') {
    // console.log('That\'s right ' + userName + '!');
    alert('That\'s right!');
    userScore++;
  } else {
    alert('Sorry, incorrect!');
  }
}

questionFive();


function questionSix(){
  var responseSixGuesses = 4;
  var myTattooCount = 17;
  var tattooNumberGuess = parseInt(prompt('Enter a number and guess many tattoos do I have'));
  // console.log(tattooNumberGuess + ' is the visitor\'s guess');
  var i;
  for (i = 0; i < responseSixGuesses; i++){
    if(tattooNumberGuess === myTattooCount){
      alert(`Thats right! ${tattooNumberGuess} is exactly how many tattoos I have!`);
      userScore++;
      break;
    // learn about boolean flags - ask Ryan
    } else if(tattooNumberGuess < myTattooCount){
      tattooNumberGuess = parseInt(prompt('Too low, try again'));
    } else if(tattooNumberGuess > myTattooCount){
      tattooNumberGuess = parseInt(prompt('That\'s way too many...my mama would kill me!'));
    } else{
      tattooNumberGuess = parseInt(prompt('Enter a number and guess many tattoos do I have'));
    }
  }
  if(i === responseSixGuesses){
    alert(`You're out of guesses, but ${myTattooCount} was the correct answer`);
  }
}

questionSix();


function questionSeven(){
  var favoriteBoyBands = ['bts', 'backstreet boys', 'one direction', 'boyz 2 men', '98 degrees'];
  var correctGuess = false;
  var numOfGuesses = 6;
  
  while(numOfGuesses > 0 && !correctGuess){
    var boyBandGuess = prompt(`Can you guess one of my favorite boy bands? You get ${numOfGuesses} guesses!`).toLowerCase();
    for (var j = 0; j < favoriteBoyBands.length; j++){
      if(boyBandGuess === favoriteBoyBands[j]){
      //console.log('user guessed right');
        alert(`OMG! Yes, I love ${favoriteBoyBands[j]}!`);
        correctGuess = true;
        userScore++;
        break;
      }
    }
    numOfGuesses--;
    if(numOfGuesses === 0){
      alert('You\'re out of guesses, but you could have chosen BTS, Backstreet Boys, One Direction, Boyz 2 Men, or 98 Degrees');
    }
  }
}

questionSeven();

alert(`${userName} you got ${userScore} out 7 questions right! Thanks for playing!`);
