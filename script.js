
let over=document.getElementById("over");
let score=document.getElementById("totscore");
var wicket=document.getElementById("weco");
let ball=document.getElementById("ball");
let runtot=document.querySelector(".animi h1");
var currentValue = parseInt(wicket.innerHTML);
let bat =document.querySelector(".bat");
let bal =document.querySelector(".bol");
let bona=document.querySelector(".b1");
let ball_act=document.querySelector(".balaction");
let bm0=document.querySelector(".bm1");
let bm1=document.querySelector(".bm2");
let bat_act=document.querySelector(".bataction");
var over_tot=0;
var ball_tot=0;

function  bowling(){
  

    let action=["In Swinger","Out Swinger","Reverse Swing"," Bouncer","Slower Ball","Yorker","Knuckle Ball","The Googly","Top Spinner ","The Flipper","The Slider","The Carrom Ball","The Doosra"];
   let bon=Math.floor(Math.random()*action.length);
    ball_act.innerHTML=action[bon];
    if(parseInt(wicket.innerHTML)>11){
      alert("Game Over Thank You");
      window.location.reload();
    }
}

document.addEventListener("DOMContentLoaded", function() {
  let timerElement = document.getElementById("timer");
  
  let countdown = 5;
  let countdownInterval;
  let clickbat=true;

  function updateTimer() {
    timerElement.innerText = countdown;

    if (countdown <1){
      ball_tot=ball_tot+1;
  over.innerHTML=over_tot;
  ball.innerHTML=ball_tot;
  let bowler=["M Shami","Jasprit Bumrah"," Y Chahal","N Saini", "M Siraj","R Ashwin","Kuldeep Yadav","Umesh Yadav"];
  let batsman0=["R Sharma","H Pandya","S Gill","V Kohli","S Iyer","MS Dhoni"];
  let batsman1=["KL Rahul","R Jadeja","I Kishan","S Yadav","A Patel","S Samson"];
  let rbatman0=Math.floor(Math.random()*batsman0.length);
  let rbatman1=Math.floor(Math.random()*batsman1.length);
  if(ball_tot==6){
      over_tot=over_tot+1;
      ball_tot=0;
     
  }
  else if(ball_tot==1){
    let bown=Math.floor(Math.random()*bowler.length);
      bona.innerHTML=bowler[bown];
  
      
  }
      bat.removeAttribute("disabled");
    } else {
      bat.setAttribute("disabled", "true");
    }

    if (countdown > 0) {
      countdown--;
    } else {
      clearInterval(countdownInterval); 
      countdownInterval = undefined;
      
    }
  }

  bal.addEventListener("click", function() {
    if (!countdownInterval) { 
      countdown = 5; 
      updateTimer();
      countdownInterval = setInterval(updateTimer, 1000); 
    }
  });

  bat.addEventListener("click", function() {
    if (countdown <=2) {
      bat.setAttribute("disabled", "true"); 
      
    }
  });
});

function run(){
  let bataction=["Stoke","Backfoot","Cover Drive ","Pull Shot","Reverse Sweep","Switch Hit","Late Cut"];
  let batsman0=["R Sharma","H Pandya","S Gill","V Kohli","S Iyer","MS Dhoni"];
  let batsman1=["KL Rahul","R Jadeja","I Kishan","S Yadav","A Patel","S Samson"];
    let runs=["0","1","2","3","4","6","Bowled!","Hit wicket!","Caught!","Run out!","Stumping!","LBW!"];
    let demo_run=Math.floor(Math.random()*runs.length);
    let tot_run=runs[demo_run];
    console.log(tot_run.length);
    if (tot_run.length <= 1) {
      let run1=tot_run.concat(" ","Run");
      runtot.innerHTML=run1;
      console.log(run1)
    }
    else{
      runtot.innerHTML=tot_run;
    }
    let batac=Math.floor(Math.random()*bataction.length);
    bat_act.innerHTML=bataction[batac];
 
    
    if (tot_run.charAt(tot_run.length - 1) === "!") {
       let str="batsman"
       let sp="bm"
       let batlist="rbatman"
        var newvalue = parseInt(wicket.innerHTML) + 1;
        wicket.innerHTML = newvalue; 
        let batsm=Math.floor(Math.random()*2);
        let selectedBatsmanName = (batsm === 0) ? batsman0[Math.floor(Math.random() * batsman0.length)] : batsman1[Math.floor(Math.random() * batsman1.length)];
        if (batsm === 0) {
          bm0.innerHTML = selectedBatsmanName;
        } else {
          bm1.innerHTML = selectedBatsmanName;
        }
      }
      
    else{
        var newscore= parseInt(score.innerHTML) +Number(tot_run);
        score.innerHTML=newscore;
    }

 }
