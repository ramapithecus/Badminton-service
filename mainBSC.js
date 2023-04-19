//declaring variables
var body = document.body;
body.classList.add('theme');
var gridContainer = document.createElement('div');
body.appendChild(gridContainer);
var serviceRide1T = 1;
var serviceRide2T = 1;
//var styleOfCourts = document.querySelector('.courts');
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
var divT1 = document.createElement('div');
headContainer.appendChild(divT1);
divT1.classList.add('teamResults');
var para1T = document.createElement('div');
para1T.setAttribute('id', 'nameTeam-1');
para1T.innerHTML = 'Team 1 :';
divT1.appendChild(para1T);
var matchScore1T = document.createElement('div');
matchScore1T.setAttribute('id', 'set_1T');
matchScore1T.innerText = parseInt(0);
matchScore1T.classList.add('result_items');
//matchScore1T.classList.add('scoreSets');
divT1.appendChild(matchScore1T);
var scoreActual1T = document.createElement('div');
scoreActual1T.setAttribute('id', 'score1');
scoreActual1T.classList.add('result_items');
scoreActual1T.innerHTML = parseInt(0);
divT1.appendChild(scoreActual1T);
//headContainer.appendChild(para1T);
//para1T.appendChild(matchScore1T);
//para1T.appendChild(scoreActual1T);
//team2
var divT2 = document.createElement('div');
headContainer.appendChild(divT2);
divT2.classList.add('teamResults');
var para2T = document.createElement('div');
para2T.setAttribute('id', 'nameTeam-2');
para2T.innerHTML = 'Team 2 :';
divT2.appendChild(para2T);
var matchScore2T = document.createElement('div');
matchScore2T.setAttribute('id', 'set_2T');
matchScore2T.innerHTML = parseInt(0);
//matchScore2T.classList.add('scoreSets');
matchScore2T.classList.add('result_items');
divT2.appendChild(matchScore2T);
var scoreActual2T = document.createElement('div');
scoreActual2T.setAttribute('id', 'score2')
scoreActual2T.classList.add('result_items');
scoreActual2T.innerHTML = parseInt(0);
divT2.appendChild(scoreActual2T);
//headContainer.appendChild(para2T);
//para2T.appendChild(matchScore2T);
//para2T.appendChild(scoreActual2T);

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
//game container
var gameContainer = document.createElement('div');
gameContainer.classList.add('game');
gridContainer.appendChild(gameContainer);
var courtYardTeamOne = document.createElement('div');
courtYardTeamOne.classList.add('courts');
var courtYardTeamTwo = document.createElement('div');
courtYardTeamTwo.classList.add('courts');
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
gameContainer.appendChild(courtYardTeamOne);
courtYardTeamOne.appendChild(topLeftPosition);
courtYardTeamOne.appendChild(topRightPosition);
var netLine = document.createElement('div');
netLine.classList.add('netLine');
gameContainer.appendChild(netLine);
gameContainer.appendChild(courtYardTeamTwo);
courtYardTeamTwo.appendChild(bottomLeftPosition);
courtYardTeamTwo.appendChild(bottomRightPosition);
// divWin container
var divWinn = document.createElement('div');
divWinn.classList.add('divWinner');
var paraWinnerInfo = document.createElement('p');
paraWinnerInfo.setAttribute('id','pInfowin');
divWinn.appendChild(paraWinnerInfo);
var rstButt = document.createElement('button');
rstButt.classList.add('butt');
rstButt.classList.add('rstButt');
rstButt.innerText = ' next set?';
rstButt.addEventListener('click',nextSet);
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

// functions
function instantWin1T() {
    var pointsScore1T = document.getElementById('score1');
    var pointAdder1T = parseInt(pointsScore1T.innerHTML);
    pointAdder1T = parseInt(pointAdder1T + 20);
//    addScore1T();
//    changing1T();
    pointsScore1T.innerHTML = parseInt(pointAdder1T);
    winnerOfSet();
}
 function instantWin2T(){
    var pointsScore2T = document.getElementById('score2');
    var pointAdder2T = parseInt(pointsScore2T.innerHTML);
    pointAdder2T = parseInt(pointAdder2T + 20);
//    addScore2T();
//    changing2T();
    pointsScore2T.innerHTML = parseInt(pointAdder2T);
    winnerOfSet(); 
 }
//adding and reducing score functions
function addScore1T() {
  var scoreSpan = document.getElementById('score1');
  var scoreAdder = parseInt(scoreSpan.innerHTML);
  var cockShuttle = document.getElementById('cock');
    scoreAdder ++;
  scoreSpan.innerHTML = parseInt(scoreAdder);
serviceRide2T = parseInt(0);
 serviceRide1T++;
   changing1T();
    if(serviceRide1T > parseInt(1) ){  
 switchingSides1T();  
}
}
function changing1T(){
   var score1Span =document.getElementById('score1');
   var score2Span =document.getElementById('score2');
   var scoreAdder = score1Span.innerHTML ;
   var cockShuttle = document.getElementById('cock');
   if (parseInt(scoreAdder) % 2 == 0) {
      topLeftPosition.appendChild(cockShuttle);
      }
    else {
      topRightPosition.appendChild(cockShuttle);
        } 
}
function changing2T(){
   var score1Span =document.getElementById('score1');
   var score2Span =document.getElementById('score2');
   var scoreAdder = parseInt(score2Span.innerHTML);
   var cockShuttle = document.getElementById('cock');
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
   changing2T() ;
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
   var score1Span =document.getElementById('score1');
   var score2Span =document.getElementById('score2');
    var cockShuttle = document.querySelector('#cock');
    var scoreReducer = parseInt(score1Span.innerHTML);
    scoreReducer--;
    score1Span.innerHTML = parseInt(scoreReducer);
    changing1T();
   switchingSides1T();
}
function reduceScore2T() {
   var score1Span =document.getElementById('score1');
   var score2Span =document.getElementById('score2');
    var cockShuttle = document.querySelector('#cock');
    var scoreReducer = parseInt(score2Span.innerHTML);
    scoreReducer--;
    score2Span.innerHTML = parseInt(scoreReducer);
    changing2T();
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
//functions of deciding results
function cockCreate() {
    var score1T = document.getElementById('score1'); 
    var score2T = document.getElementById('score2');
    var starter = document.getElementById('starterButt');
    var pointButtons = document.querySelectorAll('.butt');
    pointButtons.forEach(function(pointButton){
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
    matchTimer();
    matchTime = 1;
    btnInstaWin1T.addEventListener('click', instantWin1T);
    btnInstaWin2T.addEventListener('click', instantWin2T);
    headContainer.appendChild(pauseBtn);    
}
  function showingSetResults(){
     var scoreResultFinishedSet1T = document.createElement('div');
     var scoreResultFinishedSet2T = document.createElement('div');
      scoreResultFinishedSet1T.classList.add('result_items');
      scoreResultFinishedSet2T.classList.add('result_items'); 
      scoreResultFinishedSet1T.innerHTML = scoreActual1T.innerHTML; 
      scoreResultFinishedSet2T.innerHTML = scoreActual2T.innerHTML;
      divT1.removeChild(scoreActual1T);
      divT2.removeChild(scoreActual2T);
      divT1.appendChild(scoreResultFinishedSet1T);
      divT2.appendChild(scoreResultFinishedSet2T);
      scoreActual1T.innerHTML = parseInt(0);
      scoreActual2T.innerHTML = parseInt(0);
      divT1.appendChild(scoreActual1T);
      divT2.appendChild(scoreActual2T);
      if (parseInt(scoreResultFinishedSet1T.innerHTML) > parseInt(scoreResultFinishedSet2T.innerHTML) ){
    scoreActual1T.innerHTML = -1;
//    reduceScore1T()
    addScore1T();
//    changing1T();
    btn1T.addEventListener('click',intvalPause);
    btn2T.addEventListener('click',intvalPause);
}
else{
    scoreActual2T.innerHTML = -1;
//    reduceScore2T()
    addScore2T();
//    changing2T();
    btn1T.addEventListener('click',intvalPause);
    btn2T.addEventListener('click',intvalPause);
}   
      
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
    matchScore1T.innerHTML =  scoreSet1T;
    paraWinnerInfo.innerHTML = `${winner} had won, ${loser} had lost, ${score1T} : ${score2T}`;
    showingSetResults(); 
    winnerOfTheMatch()
     }
   if (parseInt(score2T) - parseInt(score1T) >= 2 && parseInt(score2T) >= 21 || parseInt(score2T) == 30 )
 {   
     matchTime = 0;
     winner = 'kokoti from team 2';
     loser = 'team 1';
     gridContainer.appendChild(divWinn);
     scoreSet2T++;
     matchScore2T.innerHTML = scoreSet2T ;
     paraWinnerInfo.innerHTML = `${winner} has won, ${loser} had lost, ${score2T} : ${score1T}`;
     showingSetResults();
     winnerOfTheMatch()
    }
  }
function winnerOfTheMatch(){
  var scoreSet1T = parseInt(document.querySelector('#set_1T').innerHTML);
  var scoreSet2T = parseInt(document.querySelector('#set_2T').innerHTML); 
  var winner, loser;
   if( scoreSet1T == 2 || scoreSet2T == 2){
      matchTime = 0; 
      divT1.removeChild(scoreActual1T);
      divT2.removeChild(scoreActual2T);
   
    if(scoreSet1T > scoreSet2T ){
     winner = 'team 1';
     loser = 'team 2'    
    }
    else{
     winner = 'team 2';
     loser = 'team 1'     
    }   
     paraWinnerInfo.innerHTML = `${winner} has won the match, ${loser} had lost`;  
    rstButt.innerText = 'restart match ?';
//    rstButt.removeEventListener('click',nextSet); 
    rstButt.addEventListener('click',function(){
        location.reload();
    }
    );   
   } 
    
}
function nextSet() {
 var scoreSet1T = document.getElementById('set_1T');
  var score1T = document.getElementById('score1');
//  var previousSet1T = document.querySelector();      
  var scoreSet2T = document.getElementById('set_2T');
  var score2T = document.getElementById('score2');
//  var previousSet1T = document.querySelector();    
  var winner, loser; 
  gridContainer.removeChild(divWinn);
    matchTime = 1;
changingCourts();
}
function changingCourts(){    
//var styleOfCourts = document.querySelectorAll('.courts');
let styleOfGameContainer = window.getComputedStyle(gameContainer); 
let courtOrientation =  styleOfGameContainer.getPropertyValue('flex-direction');
if (courtOrientation == 'column' ){
      gameContainer.style.flexDirection = 'column-reverse'; 
//      styleOfCourts.style.flexDirection = 'row-reverse'; 
    changingRowToRowReverseInCourts();
} 
else{
   gameContainer.style.flexDirection = 'column'
   changingRowReverseToRowInCourts();
}   
}
function changingRowToRowReverseInCourts(){
    var styleOfCourts = document.querySelectorAll('.courts');
    styleOfCourts.forEach(function(styleOfCourt){
    styleOfCourt.style.flexDirection = 'row-reverse';    
    });
    }
function changingRowReverseToRowInCourts(){
    var styleOfCourts = document.querySelectorAll('.courts');
    styleOfCourts.forEach(function(styleOfCourt){
    styleOfCourt.style.flexDirection = 'row';    
    });
    }

function intvalPause() {
    var ScoreOfTheMatch2T = document.querySelector('#set_2T').innerHTML;
    var ScoreOfTheMatch1T = document.querySelector('#set_1T').innerHTML;
    var spanScoreT1 = document.querySelector('#score1');
    var scoreT1 = spanScoreT1.innerHTML;
    var team1 = document.getElementById('nameTeam-1').innerText;
    var spanScoreT2 = document.querySelector('#score2');
    var scoreT2 = spanScoreT2.innerHTML;
    var team2 = document.getElementById('nameTeam-2').innerHTML;
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
      if(parseInt(ScoreOfTheMatch1T) == 1 && parseInt(ScoreOfTheMatch2T) == 1){
          changingCourts();
      }  
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
     if(parseInt(ScoreOfTheMatch1T) == 1 && parseInt(ScoreOfTheMatch2T) == 1){
         changingCourts();
     }  
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
  var matchTimeCount = setTimeout(matchTimer,1000);
//   matchSeconds++ ;
    var text;
if( matchTime == 1){ 
    matchSeconds++ ;
    text = `${matchSeconds}s `;
if (matchSeconds == 60 ){
matchSeconds = 0;
matchMinutes++;
}
if(matchMinutes > 0){    
text =` ${matchMinutes}m  ${matchSeconds}s `;       
} 
if(matchMinutes == 60 ){
matchMinutes = 0;
matchSeconds = 0;
matchHours++;
}
if (matchHours > 0){   
 text =` ${matchHours}h  ${matchMinutes}m  ${matchSeconds}s `;    
}
 if( matchTime == 0) {
    clearTimeout(matchTimeCount);
}
paraMatchTimer.innerHTML = text;     
}
}

