function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var isStreamerReady = false;
var vidNode;
var indexVideo;


function postChargement(){
	var vars = getUrlVars();
	
	var ttStreameur = vars.tt;
	var twitchStreameur = vars.twitch;
	
	//Info du Steameur
	document.getElementById("twitchStreameur").innerHTML = twitchStreameur;
	document.getElementById("ttStreameur").innerHTML = ttStreameur;
	
	//ration de la Cam
	var ratioCam = vars.ratioCam;
	if( ratioCam != "" && ratioCam == "4.3"){
		document.getElementById("cadreCam").src = "../img/cadre-cam43.png";
	}
	
}
