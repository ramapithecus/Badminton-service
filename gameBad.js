//defining variables
var body = document.querySelector('body');
  body.setAttribute('class','kurtik');
var gridContainer = document.createElement('div');
body.append(gridContainer);
//console.log(gridContainer);
var headContainer = document.createElement('div');
headContainer.classList.add('head');
var team2Score = document.createElement('p');
team2Score.innerHTML = ' Team 2 :';
var team2Btn = document.createElement('button');
headContainer.appendChild(team2Score);
headContainer.appendChild(team2Btn);
var team1Btn = document.createElement('button');
var team1Score = document.createElement('p');
team1Score.innerHTML =  'Team 1 :' ;
var team1rsl = document.createElement('span');

headContainer.appendChild(team1Score);
headContainer.appendChild(team1Btn);

gridContainer.append(headContainer);

var gameContainer = document.createElement('div');
gridContainer.appendChild(gameContainer);
gameContainer.classList.add('game');
/*var playImg = document.createElement('img');
playImg.setAttribute('src','court.webp');
gameContainer.appendChild(playImg);*/

var ball1 = document.createElement('div');
ball1.setAttribute('class','red');
ball1.classList.add('player');
ball1.innerText= '1';
var ball2 = document.createElement('div');
ball2.classList.add('player','blue');
ball2.innerText= '2';
var ball3  = document.createElement('div');
ball3.classList.add('player','orange');
ball3.innerText= '3';
var ball4  = document.createElement('div');
ball4.classList.add('yell','player');
ball4.innerText= '4';
gameContainer.appendChild(ball1);
gameContainer.appendChild(ball2);
gameContainer.appendChild(ball3);
gameContainer.appendChild(ball4);



 