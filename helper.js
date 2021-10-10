
var NoTurns = 10; //Number of turns
var varSelect = 0; //variable selected
var cur_Score = 0; // Current score

var turn = document.getElementById('item2');
var variable = document.getElementById('item3');
var pic = document.getElementById('img2');
var score = document.getElementById('item5');
var timer = document.getElementById('item7')
var caption = document.getElementById('item8');


turn.innerHTML=`Number of turns left : ${NoTurns}` ;
variable.innerHTML =` Selected Variable : ${varSelect}`;
pic.src= "dice-1.png"
score.innerHTML= ` Current score  : 00`;

function clearSelection() // clear previous selection 
{  var x= document.getElementsByClassName("btn");

    for( let i =0 ;i<x.length ;i++)
    {
      x[i].style.backgroundColor = null;
      
    }
varSelect=0;
variable.innerHTML =` Selected Variable : ${varSelect}`;

}

function handleclick(item)
{
     clearSelection();
     var element = document.getElementById(item.id);
     element.style.backgroundColor = "#111010";
     varSelect = element.innerHTML;
     variable.innerHTML =` Selected Variable : ${varSelect}`;  
}

function  changediceAndCheck(turnleft) // core function responsible for rolling the dice and  equality check  
{

   var dice = Math.floor(Math.random()*6)+1;
   
      setTimeout(()=>{
      pic.src =`dice-${dice}.png`;    
                     },300);

   setTimeout(()=>{
       if(varSelect==0)
       {caption.innerHTML ="No variable Selected" ;}
       else
       {
            if(dice == varSelect )
            {
                caption.innerHTML ="Your Guess was right!";
                cur_Score += 10;
                score.innerHTML = `Current score  : ${cur_Score}`;
            }
            else{
                caption.innerHTML ="Your Guess was wrong!";
            }
       }
   
      if(turnleft == 1)
      {  clearSelection();
        caption.innerHTML =`Your Total Score is ${cur_Score}!`;
        caption.style.backgroundColor= '#d69e02';
        turn.innerHTML=`Number of turns left : 0` ;
       
      }
   },500)

}
// Main function i.e will run through out the execution of program;

 function mainFun(){
for( let i=1; i<=NoTurns ;i++)
{  
setTimeout(() => {  

    let turnleft = NoTurns-i+1 ;
    clearSelection();
    caption.innerHTML ="Select a Variable!";
    turn.innerHTML=`Number of turns left : ${turnleft}` ;
     
      timer.innerHTML =  `The dice will change in 3 seconds.` ;
      setTimeout(() => {  
        timer.innerHTML =  `The dice will change in 2 seconds.` ;

                       }, 1000)
      setTimeout(() => {  
        timer.innerHTML =  `The dice will change in 1 seconds.` ;

                       }, 2000)
      setTimeout(() => {  
        timer.innerHTML =  `The dice will change in 0 seconds.` ;
          changediceAndCheck(turnleft);
           
                       }, 3000);


               }, (i-1)*4000);
      
}}
setTimeout(()=>{
mainFun();
},1000)