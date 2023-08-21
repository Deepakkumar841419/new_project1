'use strict';
document.querySelector('.check').style.backgroundColor='#ff6969'

var score=0;
var ms=0;
let highscore=0;
let numb=Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent='?';
document.querySelector('.check').addEventListener('click',function()
{
   const guess=Number(document.querySelector('.guess').value);
   if(!guess)
   {
    document.querySelector('.message').textContent='💢 not a number';
   }
   else if(guess===numb){
      document.querySelector('body').style.backgroundColor='#60b347';
      document.querySelector('.message').textContent='㊗️ correct number';
      score++;
      document.querySelector('.score').textContent=score>0?score:0;
      if(score>highscore)
      {
         highscore=score;
         document.querySelector('.highscore').textContent=highscore;
      }

      
   }
   else if(guess>numb)
   {
      document.querySelector('.message').textContent='to high';
      
      score>1?score--:score=0;
      document.querySelector('.score').textContent=score>0?score:0;
   }
   else if(guess<numb)
   {
      document.querySelector('.message').textContent='to low';
      score>1?score--:score=0;
      document.querySelector('.score').textContent=score>0?score:0;
   }
   
   
    
    
});

// again
document.querySelector('.again').addEventListener('click',function(){
   score=0;
   numb=Math.trunc(Math.random()*20)+1;
   document.querySelector('.message').textContent='start guising...';
   document.querySelector('.score').textContent=score;
   document.querySelector('.number').textContent='?';
   document.querySelector('body').style.backgroundColor='#222';



})





