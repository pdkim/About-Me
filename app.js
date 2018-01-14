'use strict';

//must contain at least 5 yes or no questions.
//requires 2 uses of .toUpperCase or .toLowerCase

var stars = 0;

var guest = prompt('Hi there!.  I\'m Phil and I would like you to take a quick questionaire! Let\'s start off by asking you what your name is!');

console.log('The guest name');

alert(guest + ', it is nice to meet you!');

/*var tvShow = prompt('Ok, ' + guest + ', let\'s start by asking if you like to watch TV shows?  Please enter yes or no for your response.').toLowerCase();

console.log('TV Show question');

if(tvShow === 'yes' || tvShow === 'y'){
  alert('Me too!');
  stars++;
} else {
  alert('Ah, you don\'t?  I love to binge watch!');
}

alert(guest + ', you currently have ' + stars + ' stars.');

var pacific = prompt('Ok, ' + guest + ', do you like the Pacific northwest?  Please use yes or no.').toUpperCase();

console.log('Pacific Northwest question');

if(pacific === 'Yes' || pacific === 'Y'){
  alert('I love the Pacific Northwest!');
  stars++;
} else{
  alert('Really?  But it\'s so cool here?');
}

alert(guest + ', you currently have ' + stars + ' stars.');

var game = prompt('So, do you like to play video games, ' + guest +'? Please use yes or no').toUpperCase();

console.log('Video game question');

if(game === 'Yes' || game === 'Y'){
  alert('Sweet! We should play sometime!');
  stars++;
} else{
  alert('I understand.  Some of my good friends don\'t play videos games at all!');
}

alert(guest + ', you currently have ' + stars + ' stars.');

var tennis = prompt('Well, ' + guest + ', do you enjoy playing tennis?  Please use yes or no.').toLowerCase();

console.log('Tennis question');

if(tennis === 'yes' || tennis === 'y'){
  alert('Really?  I love playing tennis.  I haven\'t played in a while, but we should sometime.');
  stars++;
} else{
  alert('Not your kind of sport?  That\'s ok, I\'m sure we could something soon.');
}

alert(guest + ', you currently have ' + stars + ' stars.');

var animation = prompt('Do you like animated movies, ' + guest + '?').toUpperCase();

console.log('Animation question');

if(animation === 'Yes' || animation === 'Y'){
  alert('Yeah! Animation is awesome!');
  stars++;
} else{
  alert('That\'s a shame.  I really like animated movies.');
}

alert(guest + ', you currently have ' + stars + ' stars.');*/

//question 6
var countries = prompt('How many countries do you think I have been to?  Hint: it\'s less than 10', 'Use numerical values for your answer.');

console.log('Countries visited question');

while(countries !== '5') {
  alert('incorrect');
  console.log(countries);
  if(countries !== '5') {
    countries = prompt('How many countries do you think I have been to?  You have 5 attempts to guess.  Hint: it\'s less than 10', 'Use numerical values for your answer.');
    console.log(countries);
  }
  if(countries === '5') {
    alert('That\'s right!  I\'ve been to 5 countries!');
    stars++; }
}

alert(guest + ', you currently have ' + stars + ' stars.');

//question 7
//var live = prompt('Ok, ' + guest + ', try to list a state other than Washington that I have visited/lived in.');

//console.log('Other states questions');

//var states =['Oregon', 'California', 'Louisiana', 'Florida', 'New York', 'Virgina', 'Idaho', 'Nevada', 'Massachusetts'];


/*if(stars > 3){
  alert('Wow! We have so much in common!');
} else{
  alert('Looks like we don\'t have much in common.  That\'s ok.');
}*/