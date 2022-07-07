var body = document.body;
body.classList.add('green');
var gridContainer = document.createElement('div');
body.appendChild(gridContainer);
//head
var headContainer = document.createElement('div');
headContainer.classList.add('head');
gridContainer.appendChild(headContainer);
//heading
var para1T = document.createElement('p');
para1T.innerHTML = 'Team1 :';
var span1Score = document.createElement('span');
span1Score.setAttribute('id','score1');
span1Score.innerHTML = parseInt(0);
headContainer.appendChild(para1T);
headContainer.appendChild(span1Score);  
var para2T = document.createElement('p');
para2T.innerHTML= 'Team2 :';
headContainer.appendChild(para2T);
var span2Score = document.createElement('span');
span2Score.setAttribute('id','score2')
span2Score.innerHTML = parseInt(0);
headContainer.appendChild(span2Score);
//buttons
var btn1T = document.createElement('button');
btn1T.classList.add('butt');
btn1T.innerText ='Team1';
headContainer.appendChild(btn1T);
btn1T.addEventListener('click',addScore1T);
btn1T.addEventListener('click',winnerOfSet);
var btn2T = document.createElement('button');
btn2T.classList.add('butt');
btn2T.innerText = 'Team2';
btn2T.addEventListener('click',addScore2T);
btn2T.addEventListener('click',winnerOfSet);
headContainer.appendChild(btn2T);

var btnStart = document.createElement('button');
btnStart.classList.add('startButt');
btnStart.setAttribute('id','starterButt');
btnStart.innerText = `let's start`;
btnStart.addEventListener('click', cockCreate);
headContainer.appendChild(btnStart);

var btnInstaWin = document.createElement('button');
btnInstaWin.classList.add('btnInstaWin');
btnInstaWin.addEventListener('click',instantWin);
btnInstaWin.addEventListener('click',winnerOfSet);
btnInstaWin.innerText = 'instant Win';
headContainer.appendChild(btnInstaWin);
// functions
function instantWin(){
  var pointsScore = document.getElementById('score1');
  var pointAdder = parseInt(pointsScore.innerHTML);
  pointAdder = parseInt(pointAdder + 20);
  pointsScore.innerHTML= parseInt(pointAdder);
}
function addScore1T(){
  var scoreSpan =document.getElementById('score1');
  var ScoreAdder = parseInt(scoreSpan.innerHTML);
  var cockShuttle = document.getElementById('cock');
    ScoreAdder = parseInt(ScoreAdder+1);
  scoreSpan.innerHTML = parseInt(ScoreAdder);
   if (parseInt(ScoreAdder) % 2 == 0) {
      player1.appendChild(cockShuttle);
    }
    else {
      player2.appendChild(cockShuttle);
    }
}
function addScore2T(){
  var cockShuttle = document.getElementById('cock');
  var scoreSpan = document.getElementById('score2');
  var ScoreAdder = parseInt(scoreSpan.innerHTML);
  ScoreAdder = parseInt(ScoreAdder +  1);
  scoreSpan.innerHTML = parseInt(ScoreAdder);
  if(parseInt(ScoreAdder)%2==0){
    player4.appendChild(cockShuttle);
  }
  else{
    player3.appendChild(cockShuttle);
  }
}
function cockCreate(){
    var score1T = document.getElementById('score1'); 
    var score2T = document.getElementById('score2');
    var starter = document.getElementById('starterButt');
    var pointAddbuttons = document.querySelectorAll('.butt');
    console.log(pointAddbuttons);
     pointAddbuttons[0].style.visibility = 'visible';
     pointAddbuttons[1].style.visibility = 'visible';
    
   var cockImg = document.createElement('div');
  cockImg.classList.add('imgCock');
  cockImg.setAttribute('id','cock');
    if( score1T == parseInt(0) && score2T == parseInt(0)){
  starter.style.visibility = 'hidden';
  player1.appendChild(cockImg);
    }
    else{ 
      starter.style.visibility = 'hidden';
      score2T.innerHTML= parseInt(0);
      score1T.innerHTML = parseInt(0);
     player1.appendChild(cockImg); 
    }
   btn1T.addEventListener('click',addScore1T);
   btn2T.addEventListener('click',addScore2T);
   btnInstaWin.addEventListener('click',instantWin);
}
function winnerOfSet(){
  var score1T = document.getElementById('score1').innerHTML;
  var score2T = document.getElementById('score2').innerHTML;
  var paraWinnerInfo = document.querySelector('#pinfowin');
    
  var winner, loser;
 if (parseInt(score1T) - parseInt(score2T) >= 2 && parseInt(score1T) >= 21 || parseInt(score1T) == 30 )
{
    winner = ' kokoti from Team 1';
    loser = ' team 2';
     gridContainer.appendChild(divWinn);
     paraWinnerInfo.innerHTML = `${winner} has won`;
 }
   if (parseInt(score2T) - parseInt(score1T) >= 2 && parseInt(score2T) >= 21 || parseInt(score2T) == 30 )
 { 
     winner = 'kokoti from Team 2';
      loser = 'team 1';
  gridContainer.appendChild(divWinn);
 paraWinnerInfo.innerText = `${winner} has won`;
    }
  }
function nextSet(){
  var score1T = document.getElementById('score1');
  var score2T = document.getElementById('score2');
  var winner, loser;  
  gridContainer.removeChild(divWinn);
    score1T.innerHTML = parseInt(0);
    score2T.innerHTML = parseInt(0);
}
// divWin container
var divWinn = document.createElement('div');
divWinn.classList.add('divWinner');
var paraWinnerInfo = document.createElement('p');
paraWinnerInfo.setAttribute('id','pinfowin');
divWinn.appendChild(paraWinnerInfo);
var rstButt = document.createElement('button');
rstButt.classList.add('butt');
rstButt.innerText = 'restart match ?';
rstButt.addEventListener('click',nextSet);
/*rstButt.addEventListener('click',function(){
    gridContainer.removeChild(divWinn);
   var cockShuttle = document.getElementById('cock');
    document.removeChild(cockShuttle);
}
);*/
divWinn.appendChild(rstButt);

//game container
var gameContainer = document.createElement('div');
gameContainer.classList.add('game');
gridContainer.appendChild(gameContainer);
var player1 = document.createElement('div');
//player1.setAttribute('name','player1');
player1.setAttribute('id','oneer')
player1.classList.add('players');
player1.innerText = 1;
var player2 = document.createElement('div');
player2.setAttribute('id','twoer');
player2.innerText = 2;
player2.classList.add('players');
var player3 = document.createElement('div');
player3.setAttribute('id','dreier');
player3.innerText= 3;
player3.classList.add('players');
var player4 = document.createElement('div');
player4.setAttribute('id','fourer');
player4.innerText= 4;
player4.classList.add('players');
gameContainer.appendChild(player1);
gameContainer.appendChild(player2);
var pause1 = document.createElement('br');
var netLine = document.createElement('div');
netLine.classList.add('netLine');
gameContainer.appendChild(netLine);
gameContainer.appendChild(pause1);
gameContainer.appendChild(player3);
gameContainer.appendChild(player4);


