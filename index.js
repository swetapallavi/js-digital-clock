function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    if(hours >= 12 ){
        document.getElementById("am-pm").innerHTML="pm"; 
   }
   else{
       document.getElementById("am-pm").innerHTML="am";
   }
    if(hours>12) {
        hours = hours-12;
    }
    document.getElementById("hours").innerHTML = hours;
    let minutes = date.getMinutes();
    document.getElementById("minutes").innerHTML = minutes;
    let seconds = date.getSeconds();
    document.getElementById("seconds").innerHTML = seconds;
}

digitalClock();

setInterval(digitalClock, 1000);
