'use strict';

//must contain at least 5 yes or no questions.
//require .toUpperCase or .toLowerCase

var stars = 0;

console.log('Hello! I\'m Phil and I would like you to try out my questionaire!')

alert('This will be a few yes or no questions to see how similar we are.  Each thing we have in common will give you a star, indicating how many things we both enjoy.');

var guest = prompt('First, I need to know who you are.  Let\'s start off by asking you what your name is!');

alert(guest + ', it is nice to meet you!');

var tvShow = prompt('Ok, ' + guest + ', let\'s start by asking if you like to watch TV shows?  Please enter yes or no for your response.').toUpperCase;

console.log(tvShow);

if(tvShow === 'yes' || tvShow === 'y'){
    stars++;
} else {
    alert('Ah, you don\'t?  I love to binge watch!');
};

alert(guest + ', you currently have ' + stars + ' stars.');

var pacific = prompt('Ok, ' + guest + ', do you like the Pacific northwest?  Please use yes or no.').toLowerCase;

console.log(pacific);

if(pacific === 'yes' || pacific === 'y'){
    stars++;
} else{
    alert('Really?  But it\'s so cool here?');
};

alert(guest + ', you currently have ' + stars + ' stars.');

var game = prompt('So, do you like to play video games, ' + guest +'? Please use yes or no').toUpperCase;

console.log(game);

if(game === 'yes' || game === 'y'){
    stars++;
} else{
    alert('That\'s ok.  I understand.');
}

var exercise = prompt('Well, ' + guest + ', do you like to workout?  Please use yes or no.').toLowerCase;

