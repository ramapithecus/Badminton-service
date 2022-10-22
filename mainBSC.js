//declaring variables
var body = document.body;
body.classList.add('theme');
var gridContainer = document.createElement('div');
body.appendChild(gridContainer);
var serviceRide1T = 1;
var serviceRide2T = 1;  

//players objects

function Player() {
      
}
var player1 = new Player();
    player1.Fname = 'sergei';
    player1.Lname = 'bubkow';
//head
var headContainer = document.createElement('div');
headContainer.classList.add('head');
gridContainer.appendChild(headContainer);
//team1
var para1T = document.createElement('p');
para1T.setAttribute('id', 'paraTeam-1');
para1T.innerHTML = 'Team1 :';
var span1Score = document.createElement('span');
span1Score.setAttribute('id', 'score1');
span1Score.classList.add('scoreSpans');
span1Score.innerHTML = parseInt(0);
headContainer.appendChild(para1T);
para1T.appendChild(span1Score);
//team2
var para2T = document.createElement('p');
para2T.setAttribute('id', 'paraTeam-2');
para2T.innerHTML = 'Team2 :';
var span2Score = document.createElement('span');
span2Score.setAttribute('id', 'score2')
span2Score.innerHTML = parseInt(0);
span2Score.classList.add('scoreSpans');
headContainer.appendChild(para2T);
para2T.appendChild(span2Score);
//buttons point+
var btn1T = document.createElement('button');
btn1T.classList.add('butt');
btn1T.classList.add('pointbutt');
btn1T.innerText = 'Team1';
headContainer.appendChild(btn1T);
btn1T.addEventListener('click', addScore1T);
btn1T.addEventListener('click', winnerOfSet);
btn1T.addEventListener('click', intvalPause);
var btn2T = document.createElement('button');
btn2T.classList.add('butt');
btn2T.classList.add('pointbutt');
btn2T.innerText = 'Team2';
btn2T.addEventListener('click', addScore2T);
btn2T.addEventListener('click', winnerOfSet);
btn2T.addEventListener('click', intvalPause);
headContainer.appendChild(btn2T);
//buttons point-
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
btnStart.innerText =  'start a match' ;
btnStart.addEventListener('click', cockCreate);
headContainer.appendChild(btnStart);
var btnInstaWin = document.createElement('button');
btnInstaWin.classList.add('btnTry');
btnInstaWin.addEventListener('click', instantWin);
//btnInstaWin.addEventListener('click', winnerOfSet);
btnInstaWin.innerText = 'instant win';
headContainer.appendChild(btnInstaWin);
// functions
function instantWin() {
    var pointsScore = document.getElementById('score1');
    var pointAdder = parseInt(pointsScore.innerHTML);
    pointAdder = parseInt(pointAdder + 20);
    pointsScore.innerHTML = parseInt(pointAdder);
}
//adding and reducing score functions
function addScore1T() {
  var scoreSpan = document.getElementById('score1');
  var scoreAdder = parseInt(scoreSpan.innerHTML);
  var cockShuttle = document.getElementById('cock');
    scoreAdder ++;
  scoreSpan.innerHTML = parseInt(scoreAdder);
    changingTop();
serviceRide2T = parseInt(0);
 serviceRide1T++;   
    if(serviceRide1T > parseInt(1) ){  
 switchingSides1T();  
}
}
function changingTop(){
   var scoreSpan =document.getElementById('score1');
   var scoreAdder = parseInt(scoreSpan.innerHTML);
   var cockShuttle = document.getElementById('cock');
  scoreSpan.innerHTML = parseInt(scoreAdder);
   if (parseInt(scoreAdder) % 2 == 0) {
      topLeftPosition.appendChild(cockShuttle);
      }
    else {
      topRightPosition.appendChild(cockShuttle);
        } 
}
function changingBottom(){
   var scoreSpan =document.getElementById('score2');
   var scoreAdder = parseInt(scoreSpan.innerHTML);
   var cockShuttle = document.getElementById('cock');
  scoreSpan.innerHTML = parseInt(scoreAdder);
   if (parseInt(scoreAdder) % 2 == 0) {
      bottomRightPosition.appendChild(cockShuttle);
      }
    else {
      bottomLeftPosition.appendChild(cockShuttle);
        } 
}
function addScore2T() {
   var cockShuttle = document.getElementById('cock');
   var scoreSpan = document.getElementById('score2');
   var scoreAdder = parseInt(scoreSpan.innerHTML);
    scoreAdder++;
  scoreSpan.innerHTML = parseInt(scoreAdder);
   changingBottom() ;
   serviceRide1T = parseInt(0); 
   serviceRide2T++;   
if( serviceRide2T > parseInt(1) ){  
 switchingSides2T();  
}
}
function switchingSides1T(){
     topLeftPosition.classList.toggle('twoer');
     topRightPosition.classList.add('oneer');
     topRightPosition.classList.toggle('twoer');
   }
function switchingSides2T(){
     bottomRightPosition.classList.toggle('fourer');
     bottomRightPosition.classList.add('dreier');
     bottomLeftPosition.classList.add('dreier');
     bottomLeftPosition.classList.toggle('fourer');  
}
function reduceScore1T() {
    var scoreSpan = document.querySelector('#score1');
    var cockShuttle = document.querySelector('#cock');
    var scoreReducer = parseInt(scoreSpan.innerHTML);
    scoreReducer--;
    scoreSpan.innerHTML = parseInt(scoreReducer);
    changingTop();
   switchingSides1T();
}
function reduceScore2T() {
    var scoreSpan = document.querySelector('#score2');
    var cockShuttle = document.querySelector('#cock');
    var scoreReducer = parseInt(scoreSpan.innerHTML);
    scoreReducer--;
    scoreSpan.innerHTML = parseInt(scoreReducer);
    changingBottom();
    switchingSides2T();
    } 
function negativeScoreAlert() {
  var spanScoreT1 = document.querySelector('#score1');
  var spanScoreT2 = document.querySelector('#score2');
    if( parseInt(spanScoreT1.innerHTML)< 0 ){ 
        alert('Score cannot be under 0 ! ');
        spanScoreT1.innerHTML = -1;
        addScore1T();
    }
    else if (parseInt(spanScoreT2.innerHTML)< 0){
     alert('Score cannot be under 0 ! ');
        spanScoreT2.innerHTML = -1;
        addScore2T();
    }
}
function cockCreate() {
    var score1T = document.getElementById('score1'); 
    var score2T = document.getElementById('score2');
    var starter = document.getElementById('starterButt');
    var pointButtons = document.querySelectorAll('.butt');
    pointButtons.forEach(function (pointButton){
        pointButton.style.visibility = 'visible';
    });
   var cockImg = document.createElement('div');
  cockImg.classList.add('imgCock');
  cockImg.setAttribute('id','cock');
    if( score1T == parseInt(0) && score2T == parseInt(0)){
  starter.style.visibility = 'hidden';
  topLeftPosition.appendChild(cockImg);
    }
    else{ 
      starter.style.visibility = 'hidden';
      score2T.innerHTML= parseInt(0);
      score1T.innerHTML = parseInt(0);
     topLeftPosition.appendChild(cockImg); 
    }
}
function winnerOfSet() {
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
    
  }
function nextSet() {
  var score1T = document.getElementById('score1');
  var score2T = document.getElementById('score2');
  var winner, loser;  
  gridContainer.removeChild(divWinn);
if (parseInt(score1T.innerHTML) > parseInt(score2T.innerHTML) ){
score1T.innerHTML = parseInt(-1);
    addScore1T();
}
else{
    score2T.innerHTML = parseInt(-1);
    addScore2T();    
}    
    score1T.innerHTML = parseInt(0);
    score2T.innerHTML = parseInt(0);
    btn1T.addEventListener('click',intvalPause);
    btn2T.addEventListener('click',intvalPause);
}
function intvalPause() {
    var spanScoreT1 = document.querySelector('#score1');
    var scoreT1 = spanScoreT1.innerHTML;
    var team1 = document.getElementById('paraTeam-1').innerText;
    var spanScoreT2 = document.querySelector('#score2');
    var scoreT2 = spanScoreT2.innerHTML;
    var team2 = document.getElementById('paraTeam-2').innerHTML;
    paraIntvalTimer.innerHTML = parseInt(60);
    var winner, loser;
     
    if(parseInt(scoreT1) == 11 && parseInt(scoreT1) > parseInt(scoreT2)){
        gameContainer.appendChild(intvalBreak);
        winner = 'team1';
        loser = team2;
        paraIntvalInfo.innerHTML = `${winner} is winner of interval ` ;
         intvalTimer();  
         btn1T.removeEventListener('click',intvalPause);
         btn2T.removeEventListener('click',intvalPause);
    }
   else if(parseInt(scoreT2) == 11 && parseInt(scoreT2) > parseInt(scoreT1)){
        gameContainer.appendChild(intvalBreak);
        winner = 'team2';
        loser = team1;
        paraIntvalInfo.innerHTML = `${winner} is winner of interval ` ;
        intvalTimer();  
        btn1T.removeEventListener('click',intvalPause);
        btn2T.removeEventListener('click',intvalPause);
    }  
   }
function intvalTimer() {
 var  intPauseSetter = setTimeout(intvalTimer,1000); 
  var pIntvalTime = document.querySelector('#pIntvalTimer');
  var intvalTimeleft = pIntvalTime.innerHTML;
    pIntvalTime.innerHTML = parseInt(intvalTimeleft) - 1; 
if( parseInt(pIntvalTime.innerHTML) <= 0){
        clearTimeout(intPauseSetter);
    gameContainer.removeChild(intvalBreak);
}
}
function matchTimer(){
    var matchTimeCount = setTimeout(matchTimer,1000);
}
//game container
var gameContainer = document.createElement('div');
gameContainer.classList.add('game');
gridContainer.appendChild(gameContainer);
var topLeftPosition = document.createElement('div');
topLeftPosition.setAttribute('class','oneer')
topLeftPosition.classList.add('players');
topLeftPosition.innerText = 1;
//topLeftPosition.innerText = `${player1.name}`;
var topRightPosition = document.createElement('div');
topRightPosition.setAttribute('class','twoer');
topRightPosition.innerText = 2;
topRightPosition.classList.add('players');
var bottomLeftPosition = document.createElement('div');
bottomLeftPosition.setAttribute('class','dreier');
bottomLeftPosition.innerText= 3;
bottomLeftPosition.classList.add('players');
var bottomRightPosition = document.createElement('div');
bottomRightPosition.setAttribute('class','fourer');
bottomRightPosition.innerText= 4;
bottomRightPosition.classList.add('players');
gameContainer.appendChild(topLeftPosition);
gameContainer.appendChild(topRightPosition);
var netLine = document.createElement('div');
netLine.classList.add('netLine');
gameContainer.appendChild(netLine);
gameContainer.appendChild(bottomLeftPosition);
gameContainer.appendChild(bottomRightPosition);
// divWin container
var divWinn = document.createElement('div');
divWinn.classList.add('divWinner');
var paraWinnerInfo = document.createElement('p');
paraWinnerInfo.setAttribute('id','pInfowin');
divWinn.appendChild(paraWinnerInfo);
var rstButt = document.createElement('button');
rstButt.classList.add('butt');
rstButt.classList.add('rstButt');
rstButt.innerText = 'restart match ?';
rstButt.addEventListener('click',nextSet);
rstButt.addEventListener('click',function(){
    gridContainer.removeChild(divWinn);
}
);
divWinn.appendChild(rstButt);
// intervalBreak container
var intvalBreak = document.createElement('div');
intvalBreak.classList.add('intval');
var paraIntvalTimer= document.createElement('p');
paraIntvalTimer.setAttribute('id','pIntvalTimer');
var paraIntvalInfo = document.createElement('p');
paraIntvalInfo.setAttribute('id', 'pIntvalInfo');
var paraIntvalSign = document.createElement('h3');
paraIntvalSign.innerHTML = ' interval break';
paraIntvalSign.classList.add('intvalHeader');
var btnIntvalClose = document.createElement('button');
btnIntvalClose.innerText = 'close interval pause';
 btnIntvalClose.addEventListener('click', function() {
paraIntvalTimer.innerHTML = parseInt(1);});
intvalBreak.appendChild(paraIntvalSign);
intvalBreak.appendChild(paraIntvalInfo);
intvalBreak.appendChild(paraIntvalTimer);
intvalBreak.appendChild(btnIntvalClose);
