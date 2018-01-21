'use strict';

//must contain at least 5 yes or no questions.
//requires 2 uses of .toUpperCase or .toLowerCase

var stars = 0;

var guest = prompt('Hi there!.  I\'m Phil and I would like you to take a quick questionaire! Let\'s start off by asking you what your name is!');

console.log('The guest name');

alert(guest + ', it is nice to meet you!');

//question 1
function question1() {
  var tvShow = prompt('Ok, ' + guest + ', let\'s start by asking if you like to watch TV shows?  Please enter yes or no for your response.').toLowerCase();

  console.log('TV Show question');

  if(tvShow === 'yes' || tvShow === 'y'){
    alert('Me too!');
    stars++;
  } else {
    alert('Ah, you don\'t?  I love to binge watch!');
  }


  alert(guest + ', you currently have ' + stars + ' stars.');
}

//question 2
function question2() {
  var pacific = prompt('Ok, ' + guest + ', do you like the Pacific northwest?', 'Please use yes or no.').toLowerCase();

  console.log('Pacific Northwest question');

  if(pacific === 'yes' || pacific === 'y'){
    alert('I love the Pacific Northwest!');
    stars++;
  } else{
    alert('Really?  But it\'s so cool here?');
  }


  alert(guest + ', you currently have ' + stars + ' stars.');
}

//question 3
function question3() {
  var game = prompt('So, do you like to play video games, ' + guest +'?', 'Please use yes or no').toLowerCase();

  console.log('Video game question');

  if(game === 'yes' || game === 'y'){
    alert('Sweet! We should play sometime!');
    stars++;
  } else{
    alert('I understand.  Some of my good friends don\'t play videos games at all!');
  }


  alert(guest + ', you currently have ' + stars + ' stars.');
}

//question 4
function question4() {
  var tennis = prompt('Well, ' + guest + ', do you enjoy playing tennis?', 'Please use yes or no.').toLowerCase();

  console.log('Tennis question');

  if(tennis === 'yes' || tennis === 'y'){
    alert('Really?  I love playing tennis.  I haven\'t played in a while, but we should sometime.');
    stars++;
  } else{
    alert('Not your kind of sport?  That\'s ok, I\'m sure we could something soon.');
  }


  alert(guest + ', you currently have ' + stars + ' stars.');
}

//question 5
function question5() {
  var animation = prompt('Do you like animated movies, ' + guest + '?').toLowerCase();

  console.log('Animation question');

  if(animation === 'yes' || animation === 'y'){
    alert('Yeah! Animation is awesome!');
    stars++;
  } else{
    alert('That\'s a shame.  I really like animated movies.');
  }

  alert(guest + ', you currently have ' + stars + ' stars.');
}

question1();
question2();
question3();
question4();
question5();

//question 6
var countries = prompt('How many countries do you think I have been to?  Hint: it\'s less than 10', 'Use numerical values for your answer.');

console.log('Countries visited question');

while(countries !== '5') {
  if(countries < '5') {
    alert('I have visited more than that');
    countries = prompt('How many countries do you think I have been to?  You have 5 attempts to guess.  Hint: it\'s less than 10', 'Use numerical values for your answer.');
  }
  if(countries > '5') {
    alert('I wish I have been to that many countries!');
    countries = prompt('How many countries do you think I have been to?  You have 5 attempts to guess.  Hint: it\'s less than 10', 'Use numerical values for your answer.');
  }
  if(countries === '5') {
    alert('That\'s right!  I\'ve been to 5 countries!');
    stars++; }
}

alert(guest + ', you currently have ' + stars + ' stars.');

//question 7
var live = prompt('Ok, ' + guest + ', try to list a state other than Washington that I have visited/lived in.').toLowerCase();

console.log('Other states questions');

var states = ['oregon', 'california', 'florida', 'louisiana', 'new york', 'idaho', 'massachusetts', 'virginia', 'illinois'];

for(var i = 5; i > 0; i--) {
  for(var j = 0; j < states.length; j++){
    if(live === states[j]) {
      console.log(live);
      alert('Yes! You are correct!');
      stars++;
      j = states.length;
      i = 0;
    }
  }
  if(i > 0) {
    alert('Sorry, I have not been there before.  You have ' + i + ' attempts left!');
    live = prompt('Ok, ' + guest + ', try another state!');
  }
}

alert(guest + ', you currently have ' + stars + ' stars.');

if(stars >= 4){
  alert('Wow! We have so much in common!');
} else{
  alert('Looks like we don\'t have much in common.  That\'s ok.');
}

//done!
