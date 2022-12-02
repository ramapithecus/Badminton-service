//declaring variables
var body = document.body;
body.classList.add('theme');
var gridContainer = document.createElement('div');
body.appendChild(gridContainer);
var serviceRide1T = 1;
var serviceRide2T = 1;
// var matchTimeCount;
var matchMinutes, matchSeconds, matchHours, matchTime;
matchSeconds = 0;
matchMinutes = 0;
matchHours = 0;
matchTime = 0;
//players objects
/*function Player() {
}
var player1 = new Player();
player1.Fname = 'sergei';
player1.Lname = 'bubkow';*/
//head
var headContainer = document.createElement('div');
headContainer.classList.add('head');
gridContainer.appendChild(headContainer);
//team1
var para1T = document.createElement('p');
para1T.setAttribute('id', 'paraTeam-1');
para1T.innerHTML = 'Team 1 :';
var span1Score = document.createElement('span');
span1Score.setAttribute('id', 'score1');
span1Score.classList.add('scoreSpans');
span1Score.innerHTML = parseInt(0);
var setScore1T = document.createElement('span');
setScore1T.setAttribute('id', 'set_1T')
setScore1T.innerText = parseInt(0);
setScore1T.classList.add('scoreSets');
headContainer.appendChild(para1T);
para1T.appendChild(setScore1T);
para1T.appendChild(span1Score);
//team2
var para2T = document.createElement('p');
para2T.setAttribute('id', 'paraTeam-2');
para2T.innerHTML = 'Team 2 :';
var span2Score = document.createElement('span');
span2Score.setAttribute('id', 'score2')
span2Score.innerHTML = parseInt(0);
span2Score.classList.add('scoreSpans');
var setScore2T = document.createElement('span');
setScore2T.setAttribute('id', 'set_2T')
setScore2T.innerHTML = parseInt(0);
setScore2T.classList.add('scoreSets');
headContainer.appendChild(para2T);
para2T.appendChild(setScore2T);
para2T.appendChild(span2Score);

//matchTimer
var paraMatchTimer = document.createElement('p');
headContainer.appendChild(paraMatchTimer);
paraMatchTimer.setAttribute('id', 'pTimer');
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
var pauseBtn = document.createElement('button');
    pauseBtn.innerText = '||';
    pauseBtn.setAttribute('id','pause-Btn');
    pauseBtn.addEventListener('click', pausingGame);          
function pausingGame(){
    matchTime = 0;
    pauseBtn.innerText = '>>';
    pauseBtn.removeEventListener('click', pausingGame);
    pauseBtn.addEventListener('click', continueGame);    
  };
function continueGame(){
    matchTime = 1;
    pauseBtn.innerText = '||';
    pauseBtn.removeEventListener('click', continueGame);
    pauseBtn.addEventListener('click', pausingGame);    
}
var btnInstaWin1T = document.createElement('button');
    btnInstaWin1T.classList.add('btnTry');
//    btnInstaWin1T.addEventListener('click', instantWin1T);
    btnInstaWin1T.addEventListener('click', winnerOfSet);
    btnInstaWin1T.innerText = 'instant win 1T ';
    headContainer.appendChild(btnInstaWin1T);
var btnInstaWin2T = document.createElement('button');
    btnInstaWin2T.classList.add('btnTry');
//    btnInstaWin2T.addEventListener('click', instantWin2T);
    btnInstaWin2T.addEventListener('click', winnerOfSet);
    btnInstaWin2T.innerText = 'instant win 2T';
    headContainer.appendChild(btnInstaWin2T);
// functions
function instantWin1T() {
    var pointsScore1T = document.getElementById('score1');
    var pointAdder1T = parseInt(pointsScore1T.innerHTML);
    pointAdder1T = parseInt(pointAdder1T + 20);
    pointsScore1T.innerHTML = parseInt(pointAdder1T);
}
 function instantWin2T(){
    var pointsScore2T = document.getElementById('score2');
    var pointAdder2T = parseInt(pointsScore2T.innerHTML);
    pointAdder2T = parseInt(pointAdder2T + 20);
    pointsScore2T.innerHTML = parseInt(pointAdder2T);
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
    matchSeconds = -1;
    matchTime = 1;
    matchTimer();
    btnInstaWin1T.addEventListener('click', instantWin1T);
    btnInstaWin2T.addEventListener('click', instantWin2T);
    headContainer.appendChild(pauseBtn);    
}
   

function showingSetResults(){
//     setScore1T.innerHTML =  scoreSet1T;
     var scoreResultFinishedSet1T = document.createElement('span');
     var scoreResultFinishedSet2T = document.createElement('span');
//     var setScorer1T = document.querySelector('#score1');
//     var setScorer2T = document.querySelector('#score2');
      scoreResultFinishedSet1T.classList.add('result_of_sets');
      scoreResultFinishedSet2T.classList.add('result_of_sets'); 
      var setResult1T = span1Score.innerHTML;    
      var setResult2T = span2Score.innerHTML;
      scoreResultFinishedSet1T.innerHTML = setResult1T; 
      scoreResultFinishedSet2T.innerHTML = setResult2T; 
      setScore1T.appendChild(scoreResultFinishedSet1T);
      setScore2T.appendChild(scoreResultFinishedSet2T);
//      para1T.appendChild(scoreResultFinishedSet1T);
//      para2T.appendChild(scoreResultFinishedSet2T);
     }
function winnerOfSet() {
  var score1T = document.getElementById('score1').innerHTML;
  var score2T = document.getElementById('score2').innerHTML; 
  var scoreSet1T = parseInt(document.querySelector('#set_1T').innerHTML);
  var scoreSet2T = parseInt(document.querySelector('#set_2T').innerHTML);   
  var winner, loser;
     
 if (parseInt(score1T) - parseInt(score2T) >= 2 && parseInt(score1T) >= 21 || parseInt(score1T) == 30 )
{   
    matchTime = 0;
    winner = ' kokoti from team 1';
    loser = ' team 2';
    gridContainer.appendChild(divWinn);
    scoreSet1T++;
    setScore1T.innerHTML =  scoreSet1T;
    paraWinnerInfo.innerHTML = `${winner} has won`;
    showingSetResults(); 
     }
   if (parseInt(score2T) - parseInt(score1T) >= 2 && parseInt(score2T) >= 21 || parseInt(score2T) == 30 )
 {   
     matchTime = 0;
     winner = 'kokoti from team 2';
     loser = 'team 1';
     gridContainer.appendChild(divWinn);
     paraWinnerInfo.innerText = `${winner} has won`;
     scoreSet2T++;
     setScore2T.innerHTML = scoreSet2T ;
     showingSetResults();
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
    matchTime = 1;
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
        matchTime = 0;
        winner = 'team1';
        loser = team2;
        paraIntvalInfo.innerHTML = `${winner} is winner of interval ` ;
         intvalTimer();  
         btn1T.removeEventListener('click',intvalPause);
         btn2T.removeEventListener('click',intvalPause);
    }
   else if(parseInt(scoreT2) == 11 && parseInt(scoreT2) > parseInt(scoreT1)){
        gameContainer.appendChild(intvalBreak);
        matchTime = 0;
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
    matchTime = 1;
}
}
function matchTimer(){
   matchTimeCount = setTimeout(matchTimer,1000);
//   matchSeconds++ ;
    var text;
if( matchTime == 1){ 
//    var matchTimeCount = setInterval(matchTimer,1000);
    matchSeconds++ ;
if (matchMinutes < 1 && matchHours == 0){    
    text = `${matchSeconds}s `;
}
else if(matchMinutes >= 1 && matchHours == 0 ){
text =` ${matchMinutes}m  ${matchSeconds}s `;    
}    
else if (matchMinutes <= 1 && matchHours > 0){ 
    text =` ${matchHours}h  ${matchMinutes}m  ${matchSeconds}s `;
}
else if (matchSeconds == 60){
matchSeconds = 0;
matchMinutes++;
} 
else if (matchMinutes == 60){
matchMinutes = 0;
matchHours++;
}
 if( matchTime == 0) {
    clearTimeout(matchTimeCount);
}
paraMatchTimer.innerHTML = text;     
}
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
