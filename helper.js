
var N = 10;
var V = 0;
var S = 0;
var t = 3;

var score = document.getElementById('item5');
var vr = document.getElementById('item3');

var tr = document.getElementById('item2');
tr.innerHTML=`No of turns left : ${N}` ;

vr.innerHTML =` Selected variable : ${V}`;

var pic = document.getElementById('img2');
pic.src= "dice-1.png"
score.innerHTML= ` Current score got : 00`;

var timer = document.getElementById('item7')

var caption = document.getElementById('item8');
function handleclick(item)
{
  clearSelection()
     var element = document.getElementById(item.id)
     element.style.backgroundColor = "darkslategrey";
     V = element.innerHTML;
     vr.innerHTML =` Selected variable : ${V}`;
    console.log(item.id);
    
}
function  changediceAndCheck()
{

   var dice = Math.floor(Math.random()*6)+1;
   
   setTimeout(()=>{
   for( let i=1 ;i<=6;i++)
   { pic.src =`dice-${i}.png`;

   }
   pic.src =`dice-${dice}.png`;
  
},300)

   setTimeout(()=>{
       if(V==0)
       {caption.innerHTML ="No number Selected"}
       else
       {
        if(dice == V )
        {
            caption.innerHTML ="Your Guess was right!";
            S += 10;
            score.innerHTML = `Current score got : ${S}`
        }
        else{
            caption.innerHTML ="Your Guess was wrong!";
        }
       }
   
     
   },500)

}
function clearSelection()
{  var x= document.getElementsByClassName("btn");

for( let i =0 ;i<x.length ;i++)
{
   x[i].style.backgroundColor = "#ddd";
  
}
V=0;
vr.innerHTML =` Selected variable : ${V}`;
}
for( let i=1; i<=N ;i++)
{   
setTimeout(() => {  
    let turnleft = N-i+1 ;
    clearSelection();

    tr.innerHTML=`No of turns left : ${turnleft}` ;
     
      timer.innerHTML =  `The dice will change in 3 seconds` ;
      setTimeout(() => {  
        timer.innerHTML =  `The dice will change in 2 seconds` ;

                       }, 1000)
      setTimeout(() => {  
        timer.innerHTML =  `The dice will change in 1 seconds` ;

                       }, 2000)
      setTimeout(() => {  
        timer.innerHTML =  `The dice will change in 0 seconds` ;
          changediceAndCheck();
           
                       }, 3000);
               }, (i-1)*4000);

}
