function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


function postChargement(){
	var vars = getUrlVars();
	//Redimensiond e la cam pour du 4/3
	var ratioCam = vars.ratioCam;
	if( ratioCam != "" && ratioCam == "4.3"){
		document.getElementById("cadreCam").src ="../img/cadre-cam43.png";
	}
	//Chaine Twitch streameur
	var twitchStreameur = vars.twitch;
	document.getElementById("txtTwitchStreameur").innerHTML = twitchStreameur;
	
	//Twitter Streameur
	var ttStreameur = vars.tt;
	document.getElementById("txtTwitterStreameur").innerHTML = ttStreameur;
}
