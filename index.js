var p1, p2;
function reset()
{
 p1=prompt("Enter first player name");
 p2=prompt("Enter second player name");

document.querySelector("#playerName1").textContent=p1;
document.querySelector("#playerName2").textContent=p2;
 dicePlay(p1 ,p2);
}

function dicePlay(p1,p2)
{
var x=Math.random();
x=x*2;
x=Math.floor(x) + 1;
console.log(x);


var y=Math.random();
y=y*6;
y=Math.floor(y) + 1;
console.log(y);

switch (x) {
    case 1:
      document.querySelector(".image1").innerHTML="<img src='images/dice1.png' alt='loading..'>"
      break;
    case 2:
        document.querySelector(".image1").innerHTML="<img src='images/dice2.png' alt='loading..'>"
      break;
    case 3:
        document.querySelector(".image1").innerHTML="<img src='images/dice3.png' alt='loading..'>"
      break;
    case 4:
        document.querySelector(".image1").innerHTML="<img src='images/dice4.png' alt='loading..'>"
      break;
    case 5:
        document.querySelector(".image1").innerHTML="<img src='images/dice5.png' alt='loading..'>"
      break;
    case 6:
        document.querySelector(".image1").innerHTML="<img src='images/dice6.png' alt='loading...'>"
}

  switch (y) {
    case 1:
      document.querySelector(".image2").innerHTML="<img src='images/dice1.png' alt='loading..'>"
      break;
    case 2:
        document.querySelector(".image2").innerHTML="<img src='images/dice2.png' alt='loading..'>"
      break;
    case 3:
        document.querySelector(".image2").innerHTML="<img src='images/dice3.png' alt='loading..'>"
      break;
    case 4: 
        document.querySelector(".image2").innerHTML="<img src='images/dice4.png' alt='loading..'>"
      break;
    case 5:
        document.querySelector(".image2").innerHTML="<img src='images/dice5.png' alt='loading..'>"
      break;
    case 6:
        document.querySelector(".image2").innerHTML="<img src='images/dice6.png' alt='loading..'>"
  }

  if(x>y)
  {
      document.querySelector("h1").innerHTML= p1 +" Wins"
  }
  else if(x<y)
  {
    document.querySelector("h1").innerHTML= p2 + " Wins"
  }
else{
    document.querySelector("h1").innerHTML=" <h1> Draw !</h1>"
}

 }


