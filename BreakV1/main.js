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
	var streamerTwitter = vars.TW;
	var streamerFB = vars.FB;
	//TODO ajouté un param num (1 2 3 4) pour afficher certain RS et pas d'autre
	
	var elemFB = document.getElementById("pseudoFaceBook");
	var elemTW = document.getElementById("pseudoTwitter");
	elemFB.innerHTML = streamerFB;
	elemTW.innerHTML = streamerTwitter;
		
	
	
	//Gestion Affichage des RS
	var flagRS = vars.RS;
	gesDisplayRS(flagRS);
	//Gestion de la musique
	var audioLvl = vars.audioLvl;
	var audioElement = document.getElementById('audioElem');
	if(audioLvl != null){
		audioElement.volume = audioLvl/100;
	}else{
		audioElement.volume = 0.05;
	}
	audioElement.play();
	
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
	
	
	
	function gesDisplayRS(flagRS){
		if(flagRS == null){
			var element = document.getElementById("reseauSocStreamer");
			element.parentNode.removeChild(element);
		}
		var elemSupp;
		var logoSupp;
		if(flagRS == 1){
			elemSupp = "pseudoFaceBook";
			logoSupp = "logoFaceBook";
		}else if(flagRS == 2){
			logoSupp = "logoTwitter";
			elemSupp = "pseudoTwitter";
		}
		if(elemSupp != null){
			
			var elem = document.getElementById(elemSupp);
			elem.parentNode.removeChild(elem);
			
			elem = document.getElementById(logoSupp);
			elem.parentNode.removeChild(elem);
			
			elem = document.getElementById("spacerRS");
			elem.parentNode.removeChild(elem);
			
			
		}
		
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