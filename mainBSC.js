var body = document.body;
body.classList.add('theme');
var gridContainer = document.createElement('div');
body.appendChild(gridContainer);
//head
var headContainer = document.createElement('div');
headContainer.classList.add('head');
gridContainer.appendChild(headContainer);
//team1
var para1T = document.createElement('p');
para1T.setAttribute('id','team1');
para1T.innerHTML = 'Team1 :';
var span1Score = document.createElement('p');
span1Score.setAttribute('id', 'score1');
span1Score.innerHTML = parseInt(0);
headContainer.appendChild(para1T);
headContainer.appendChild(span1Score); 
//team2
var para2T = document.createElement('p');
para2T.setAttribute('id','team2');
para2T.innerHTML = 'Team2 :';
var span2Score = document.createElement('span');
span2Score.setAttribute('id', 'score2')
span2Score.innerHTML = parseInt(0);
headContainer.appendChild(para2T);
headContainer.appendChild(span2Score);
//buttons point+
var btn1T = document.createElement('button');
btn1T.classList.add('butt');
btn1T.classList.add('pointbutt');
btn1T.innerText = 'Team1';
headContainer.appendChild(btn1T);
btn1T.addEventListener('click', addScore1T);
btn1T.addEventListener('click', winnerOfSet);
btn1T.addEventListener('click',intvalPause);
var btn2T = document.createElement('button');
btn2T.classList.add('butt');
btn2T.classList.add('pointbutt');
btn2T.innerText = 'Team2';
btn2T.addEventListener('click', addScore2T);
btn2T.addEventListener('click', winnerOfSet);
btn2T.addEventListener('click',intvalPause);
headContainer.appendChild(btn2T);
//bttons point-
var btn1TRed = document.createElement('button');
btn1TRed.classList.add('butt');
btn1TRed.addEventListener('click', reduceScore1T);
btn1TRed.addEventListener('click', negativeScoreAlert);
headContainer.appendChild(btn1TRed);
btn1TRed.innerText = 'point ↓T1';
var btn2TRed = document.createElement('button');
btn2TRed.classList.add('butt');
btn2TRed.addEventListener('click', reduceScore2T);
btn2TRed.addEventListener('click', negativeScoreAlert);
headContainer.appendChild(btn2TRed);
btn2TRed.innerText = 'point ↓ T2 ';
//other buttons
var btnStart = document.createElement('button');
btnStart.classList.add('startButt');
btnStart.setAttribute('id', 'starterButt');
btnStart.innerText = 'let us start' ;
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
function reduceScore1T(){
    var scoreSpan = document.querySelector('#score1');
    var cockShuttle = document.querySelector('#cock');
    var scoreReducer = parseInt(scoreSpan.innerHTML);
    scoreReducer = parseInt(scoreReducer)-1;
    scoreSpan.innerHTML = parseInt(scoreReducer);
     if (parseInt(scoreReducer) % 2 == 0) {
      player1.appendChild(cockShuttle);
    }
    else {
      player2.appendChild(cockShuttle);
    }
   
}
function reduceScore2T(){
    var scoreSpan = document.querySelector('#score2');
    var cockShuttle = document.querySelector('#cock');
    var scoreReducer = parseInt(scoreSpan.innerHTML);
    scoreReducer = parseInt(scoreReducer)-1;
    scoreSpan.innerHTML = parseInt(scoreReducer);
     if (parseInt(scoreReducer) % 2 == 0) {
      player4.appendChild(cockShuttle);
    }
    else {
      player3.appendChild(cockShuttle);
    }
    } 
function negativeScoreAlert(){
  var spanScoreT1 = document.querySelector('#score1');
  var spanScoreT2 = document.querySelector('#score2');
    if( parseInt(spanScoreT1.innerHTML)< 0 ){ 
        alert('Score cannot be under 0 ! ');
        spanScoreT1.innerHTML = 0;
    }
    else if (parseInt(spanScoreT2.innerHTML)< 0){
     alert(`Score cannot be under 0 ! `);
        spanScoreT2.innerHTML = 0;
    }
}
function cockCreate(){
    var score1T = document.getElementById('score1'); 
    var score2T = document.getElementById('score2');
    var starter = document.getElementById('starterButt');
    const pointButtons = document.querySelectorAll('.butt');
    pointButtons.forEach(function (pointButton){
        pointButton.style.visibility = 'visible';
    });
//        pointButtons[0].style.visibility = 'visible';
//        pointButtons[1].style.visibility = 'visible';
    
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
  var winner, loser;
 if (parseInt(score1T) - parseInt(score2T) >= 2 && parseInt(score1T) >= 21 || parseInt(score1T) == 30 )
{
    winner = ' kokoti from team 1';
    loser = ' team 2';
     gridContainer.appendChild(divWinn);
     paraWinnerInfo.innerHTML = `${winner} has won`;
 }
   if (parseInt(score2T) - parseInt(score1T) >= 2 && parseInt(score2T) >= 21 || parseInt(score2T) == 30 )
 { 
     winner = 'kokoti from team 2';
      loser = 'team 1';
  gridContainer.appendChild(divWinn);
 paraWinnerInfo.innerText = `${winner} has won`;
    }
    divWinn.appendChild(paraWinnerInfo);
  }
function nextSet(){
  var score1T = document.getElementById('score1');
  var score2T = document.getElementById('score2');
  var winner, loser;  
  gridContainer.removeChild(divWinn);
    score1T.innerHTML = parseInt(0);
    score2T.innerHTML = parseInt(0);
    btn1T.addEventListener('click',intvalPause);
    btn2T.addEventListener('click',intvalPause);
}
function intvalPause(){
    var spanScoreT1 = document.querySelector('#score1');
    var scoreT1 = spanScoreT1.innerHTML;
    var team1 = document.getElementById('team1').innerHTML;
    var spanScoreT2 = document.querySelector('#score2');
    var scoreT2 = spanScoreT2.innerHTML;
    var team2 = document.getElementById('team2').innerHTML;
    var winner, loser;
    if(parseInt(scoreT1) == 11 && parseInt(scoreT1) > parseInt(scoreT2)){
        gameContainer.appendChild(intvalBreak);
        winner = team1;
        loser = team2;
         paraIntvalInfo.innerHTML = `${winner} is winner of interval ` ;
//         var  intPauseSetter = setInterval(closeIntvalBreak,1000);  
         btn1T.removeEventListener('click',intvalPause);
         btn2T.removeEventListener('click',intvalPause);
    }
   else if(parseInt(scoreT2) == 11 && parseInt(scoreT2) > parseInt(scoreT1)){
        gameContainer.appendChild(intvalBreak);
        winner = team2;
        loser = team1;
        paraIntvalInfo.innerHTML = `${winner} is winner of interval ` ;
//        var  intPauseSetter =  setInterval(closeIntvalBreak,1000);  
        btn1T.removeEventListener('click',intvalPause);
        btn2T.removeEventListener('click',intvalPause);
    }  
//    if( parseInt(paraIntvalTimer.innerHTML) == 0){
//        clearInterval(intPauseSetter);
//    }
   }
function closeIntvalBreak(){
    var pIntvalTime = document.querySelector('#pIntvalTimer');
    var intvalTimeleft = parseInt(pIntvalTime.innerHTML);
//    intvalTimeLeft = parseInt(60);
    intvalTimeleft = parseInt(intvalTimeleft.innerHTML)-1;
//     setInterval(closeIntvalBreak,1000);   

    if(parseInt(intvalTimeleft) == 0 ){
        clearInterval(closeIntvalBreak);
         gameContainer.removeChild(intvalBreak);    
    }
    }
// setInterval(closeIntvalBreak,1000);   

//game container
var gameContainer = document.createElement('div');
gameContainer.classList.add('game');
gridContainer.appendChild(gameContainer);
var player1 = document.createElement('div');
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

// divWin container
var divWinn = document.createElement('div');
divWinn.classList.add('divWinner');
var paraWinnerInfo = document.createElement('p');
paraWinnerInfo.setAttribute('id','pinfowin');
divWinn.appendChild(paraWinnerInfo);
var rstButt = document.createElement('button');
rstButt.classList.add('butt');
rstButt.classList.add('rstButt');
rstButt.innerText = 'restart match ?';
rstButt.addEventListener('click',nextSet);
rstButt.addEventListener('click',function(){
    gridContainer.removeChild(divWinn);
   var cockShuttle = document.getElementById('cock');
    document.removeChild(cockShuttle);
}
);
divWinn.appendChild(rstButt);
// intervalBreak container
var intvalBreak = document.createElement('div');
intvalBreak.classList.add('intval');
var paraIntvalTimer= document.createElement('p');
paraIntvalTimer.setAttribute('id','pIntvalTimer');
paraIntvalTimer.innerHTML = parseInt(60);
var paraIntvalInfo = document.createElement('p');
paraIntvalInfo.setAttribute('id', 'pIntvalInfo');
var paraIntvalSign = document.createElement('h3');
paraIntvalSign.innerHTML = ' interval break';
paraIntvalSign.classList.add('intvalHeader');
var btnIntvalClose = document.createElement('button');
btnIntvalClose.innerText = 'close interval pause';
//intvalBreak.addEventListener('load', closeIntvalBreak);
//btnIntvalClose.addEventListener('load', closeIntvalBreak);
btnIntvalClose.addEventListener('click', function(){
     gameContainer.removeChild(intvalBreak); 
 });
      
intvalBreak.appendChild(paraIntvalSign);
intvalBreak.appendChild(paraIntvalInfo);
intvalBreak.appendChild(paraIntvalTimer);
intvalBreak.appendChild(btnIntvalClose);