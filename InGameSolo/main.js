function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var pseudo ;
function postChargement(){
	var vars = getUrlVars();
	//Defination du pseudo
	//document.getElementById("pseudo").textContent = vars.pseudo;
	pseudo = vars.pseudo;
	
	var divRS = document.getElementById("mediaPopUpDiv");
	var iframe = document.createElement('iframe');
	var TW = vars.tt;
	var FB = vars.FB;
	var urlIframe = "MediaPopUp/_left-social-media-popup-v2.html?";
	if(TW != null){
		urlIframe = urlIframe + "TW=" + TW;
	}
	if(FB != null){
		urlIframe = urlIframe + "&FB=" + FB;
	}
	iframe.frameBorder = "0";
	iframe.src=urlIframe;
	iframe.width = "600px";
	iframe.height = "200px";
	divRS.appendChild(iframe);
	
	
	//Gestion de la taille de la webcam
		var userSize = vars.webcamSize;
	
	var cadreCam = document.getElementById("cadreCam");
	var cadreCamImg = document.getElementById("imgCadre");
	
	//Redimension de la cam pour du 4/3
	var ratioCam = vars.ratioCam;
	if( ratioCam != "" && ratioCam == "4.3"){
		cadreCamImg.src = "../img/cadre-cam43.png";
	}
	
	if(userSize != ""){
		cadreCam.height = userSize;
		cadreCam.style.maxHeight = userSize;
		cadreCamImg.height = userSize;
		cadreCamImg.style.maxHeight = userSize;
		cadreCam.width = cadreCamImg.width;
		cadreCam.style.maxWidth = cadreCamImg.width;
	}
	//Placement du cadre de la webcam
	
	var xCam = vars.xCam;
	var yCam = vars.yCam;
	if(xCam != "" && yCam != ""){
		cadreCam.style.left = xCam + "px";
		cadreCam.style.bottom = yCam + "px";
	}
	document.fonts.load('10pt "fureurOffi"').then(renderText);
	
}

function renderText() {
	var c = document.getElementById("canPseudo");
	var ctx = c.getContext("2d");
	ctx.font="17px fureurOffi";
	ctx.textBaseline="alphabetic";
	ctx.fillStyle = 'white';
	ctx.fillText(pseudo, c.width - c.width*0.9, c.height - c.height * 0.03);
}
