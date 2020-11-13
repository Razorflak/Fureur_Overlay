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
	
	
	var hole3 = getInfoClippyElement(0,0,600,450);
	var chaineCoor = createClippy([hole3]);
	var el = document.getElementById("videoID");
	var chaine = 'polygon('+chaineCoor+')';
	//el.style.clipPath = 'polygon(0px 0px,50px 0px,50px 50px,50px 100px,100px 100px,100px 50px,50px 50px,200px 50px,200px 200px,200px 300px,300px 300px,300px 200px,200px 200px,200px 50px,50px 50px,50px 0px,100% 0px,100% 100%,0px 100%)';
	el.style.clipPath = chaine;
	
	timer = setInterval(refreshDate, 100);
	refreshDate();
	
	test = document.getElementById("barreTache");
	test.addEventListener("click", function(e) {
		e.preventDefault;
		etqTT = document.getElementById("etiquetteTwitter");
		etqFB = document.getElementById("etiquetteFB");
		etqTwitch = document.getElementById("etiquetteTwitch");
		etqTT.classList.remove("slideTopEtiquetteTT");
		etqFB.classList.remove("slideTopEtiquetteFB");
		etqTwitch.classList.remove("slideTopEtiquetteTwitch");
		//void etq.offsetWidth;
		etqTT.classList.add("slideTopEtiquetteTT");
		etqFB.classList.add("slideTopEtiquetteFB");
		etqTwitch.classList.add("slideTopEtiquetteTwitch");
	}, false);
	
}

function refreshDate(){
	var date = new Date();
	//var result = date.getHours() + ":" + date.getMinutes() + "</br>" + date.getDay() + "/" + date.getMonth() + "/" + date.getYear();
	var result = ('0'+date.getHours()).slice(-2) + ":" + ('0'+date.getMinutes()).slice(-2) + "</br>" + date.toLocaleDateString("fr-FR");
	document.getElementById("currentDate").innerHTML = result;
}
