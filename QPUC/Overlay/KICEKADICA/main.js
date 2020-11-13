function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var nbrSecondes;
var timerEnFonction = false;
var timer;
var timerPaused = false;
function postChargement(){
	var vars = getUrlVars();
	
	/*Mise en route du timer*/
	var divClicable3 = document.getElementById("divClicable3");
	divClicable3.style.cursor = 'pointer';
	divClicable3.onclick = function() {
		if(!timerEnFonction)
		{
			nbrSecondes = 7;
			timer = window.setInterval("onTimer_Tick()", 1000);
			timerEnFonction = true;
		}else{
			timerPaused = !timerPaused;
		}
	};
	/*********************************/

}


function onTimer_Tick()
{
	var timerElem = document.getElementById("timer");
	
	if(nbrSecondes > 0){
		if(!timerPaused)
		{
			nbrSecondes --;
			timerElem.innerHTML = nbrSecondes;
		}
	}else{
		timerElem.innerHTML = "FIN";
	}
}


