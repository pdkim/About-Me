'use strict';

//must contain at least 5 yes or no questions.
//requires 2 uses of .toUpperCase or .toLowerCase

var stars = 0;

var guest = prompt('Hi there!.  I\'m Phil and I would like you to take a quick questionaire! Let\'s start off by asking you what your name is!');

alert(guest + ', it is nice to meet you!');

var tvShow = prompt('Ok, ' + guest + ', let\'s start by asking if you like to watch TV shows?  Please enter yes or no for your response.');

console.log(tvShow);
if(tvShow === 'yes' || tvShow === 'y'){
    stars++;
} else {
    alert('Ah, you don\'t?  I love to binge watch!');
};

alert(guest + ', you currently have ' + stars + ' stars.');

var pacific = prompt('Ok, ' + guest + ', do you like the Pacific northwest?  Please use yes or no.');

console.log(pacific);
if(pacific === 'yes' || pacific === 'y'){
    stars++;
} else{
    alert('Really?  But it\'s so cool here?');
};

alert(guest + ', you currently have ' + stars + ' stars.');

var game = prompt('So, do you like to play video games, ' + guest +'? Please use yes or no');

console.log(game);
if(game === 'yes' || game === 'y'){
    stars++;
} else{
    alert('That\'s ok.  I understand.');
}

alert(guest + ', you currently have ' + stars + ' stars.');

var exercise = prompt('Well, ' + guest + ', do you like to workout?  Please use yes or no.');
console.log(exercise);
if(exercise === 'no' || exercise === 'n'){
    stars++;
} else{
    alert('That\'s good, but unfortunately, I\'m too lazy.');
}

alert(guest + ', you currently have ' + stars + ' stars.');

var animation = prompt('Do you like animated movies, ' + guest + '?');
console.log(animation);
if(animation === 'yes' || animation === 'y'){
    stars++;
} else{
    alert('That\'s a shame.  I really like animated movies.');
}

if(stars > 3){
    alert('Wow!, we have so much in common!');
} else{
    alert('Looks like we don\'t have much in common.  That\'s ok.');
}
