function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


function postChargement(){

	var vars = getUrlVars();
	//Defination du pseudo
	

	
	//Gestion du timer
	var minutes = vars.minutes;
	if(minutes == null){
		minutes = 5;
	}
	end.setTime(end.getTime() + minutes * 60000)
	timer = setInterval(showRemaining, 10);
	showRemaining();
	ScrollWin();
}


	var end = new Date(); // inscrire la date d'expiration
	
	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour *24
	var timer;
	
	function showRemaining()
	{
	    var now = new Date();
	    var distance = end - now;
	    if (distance < 0 ) {
	       clearInterval( timer ); // on arrête le décompte une fois que c'est terminé        
	       return; // on stop tout
	    }
	    var days = Math.floor(distance / _day);
	    var hours = Math.floor( (distance % _day ) / _hour );
	    var minutes = Math.floor( (distance % _hour) / _minute );
	    var seconds = Math.floor( (distance % _minute) / _second );
	    var milliseconds = Math.floor( (distance % _second)/10 );
		if(minutes < 10){ minutes = "0" + minutes}
		if(seconds < 10){ seconds = "0" + seconds}
		if(milliseconds < 10){ milliseconds = "0" + milliseconds}
	    document.getElementById('countdown').innerHTML = '<span class="minutes">' + minutes + '</span>';
	    document.getElementById('countdown').innerHTML += '<span class="seconds">:' + seconds + '</span>';
	    document.getElementById('countdown').innerHTML += '<span class="milliseconds">:' + milliseconds + '</span>';
	}
	
	
	Scroleto = 0;
	function ScrollWin()
	{
		while(Scroleto!=700)
		{
			this.scroll(1,Scroleto)
			Scroleto++;
		}
	}