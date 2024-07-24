var click=0
var increase=1
var autoClickInterval
var costForUpgrade=1000

function clicked(){
click+=increase
document.getElementById("click").innerText = click
}

function autoClick(){
autoClickInterval = setInterval(clicked, 10);
setTimeout(stopAutoClick, 1000);
}

function stopAutoClick(){
clearInterval(autoClickInterval);
}

function upgrade(){
if (click >= 1000){
click-=1000
increase+=1
document.getElementById("click").innerText = click
}
}
