'use strict';

//must contain at least 5 yes or no questions.
//requires 2 uses of .toUpperCase or .toLowerCase

var stars = 0;

var guest = prompt('Hi there!.  I\'m Phil and I would like you to take a quick questionaire! Let\'s start off by asking you what your name is!');

alert(guest + ', it is nice to meet you!');

var tvShow = prompt('Ok, ' + guest + ', let\'s start by asking if you like to watch TV shows?  Please enter yes or no for your response.').toLowerCase();

console.log('Do you like to watch TV shows?');

if(tvShow === 'yes' || tvShow === 'y'){
    alert('Me too!')
    stars++;
} else {
    alert('Ah, you don\'t?  I love to binge watch!');
};

alert(guest + ', you currently have ' + stars + ' stars.');

var pacific = prompt('Ok, ' + guest + ', do you like the Pacific northwest?  Please use yes or no.').toUpperCase();

console.log('Do you like the Pacific Northwest?');

if(pacific === 'Yes' || pacific === 'Y'){
    alert('I love the Pacific Northwest!')
    stars++;
} else{
    alert('Really?  But it\'s so cool here?');
};

alert(guest + ', you currently have ' + stars + ' stars.');

var game = prompt('So, do you like to play video games, ' + guest +'? Please use yes or no').toUpperCase();

console.log('Do you like playing video games?');

if(game === 'Yes' || game === 'Y'){
    alert('Sweet! We should play sometime!')
    stars++;
} else{
    alert('That\'s ok.  I understand.');
}

alert(guest + ', you currently have ' + stars + ' stars.');

var exercise = prompt('Well, ' + guest + ', do you like to workout?  Please use yes or no.').toLowerCase();

console.log('Do you enjoy exercising?');

if(exercise === 'no' || exercise === 'n'){
    alert('It\'s good to know I\'m not the only one who doesn\'t like to work out.');
    stars++;
} else{
    alert('That\'s good, but unfortunately, I\'m too lazy.');
}

alert(guest + ', you currently have ' + stars + ' stars.');

var animation = prompt('Do you like animated movies, ' + guest + '?').toUpperCase();

console.log('Do you like animation or animated movies?');

if(animation === 'Yes' || animation === 'Y'){
    alert('Yeah, animation is awesome!')
    stars++;
} else{
    alert('That\'s a shame.  I really like animated movies.');
}

if(stars > 3){
    alert('Wow! We have so much in common!');
} else{
    alert('Looks like we don\'t have much in common.  That\'s ok.');
}
