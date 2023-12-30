const d1=document.querySelector("#da1");
const h1=document.querySelector("#hr1");
const m1=document.querySelector("#mi1");
const s1=document.querySelector("#se1");
const text=document.querySelector("#h");
const counterr=document.querySelector(".counter");

const second=1000,
 minute=60*second,
 hour=60*minute,
 day=24*hour;

 const timerFunction = ()=>{

    let now=new Date();
    let dd= String(now.getDate()).padStart(2,"0"),
     mm= String(now.getMonth()+1).padStart(2,"0"),
     yyyy= now.getFullYear();

    const enteredDay= prompt("Enter Day").padStart(2,"0");
    const enteredMonth= prompt("Enter Month").padStart(2,"0");


    now= `${mm}/${dd}/${yyyy}`;


    let targetDate= `${enteredMonth}/${enteredDay}/${yyyy}`;
   
    if(now > targetDate)
    targetDate=` ${enteredMonth}/${enteredDay}/${yyyy+1}`;
   
    const interv =setInterval(()=>{

    const timer=new Date(targetDate).getTime();
    const today = new Date().getTime();
    const diff=timer-today;

      
    const d=Math.floor(diff/day);
    const hr=Math.floor((diff % day)/hour);
    const min=Math.floor((diff % hour)/minute);
    const sec=Math.floor((diff % minute)/second);
    
    d1.innerText=d;
    h1.innerText=hr;
    m1.innerText=min;
    s1.innerText=sec;

   if(diff < 0)
   {
    counterr.style.display="none";
    text.innerText="Time's Up";
    clearInterval(interv);
   }

   
     } , 0);
    

 };

 timerFunction();