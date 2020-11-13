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
	//Mise en place du texte principal
	
	var pseudo = vars.pseudo;
	document.getElementById("textWait").innerHTML = pseudo + " arrive ! <br /> Ne bougez pas !"
	
	var videoOn = vars.video;
	if(videoOn != '0'){
		
		//Chargement du XML avec les videos
		var Connect = new XMLHttpRequest();
		var choosenRep = "";
		choosenRep = vars.folder;
		Connect.open("GET", "videos.xml", false);
		Connect.setRequestHeader("Content-Type", "text/xml");
		Connect.send(null);
		
		//Lecture du xml
		var TheDocument = Connect.responseXML;
		var repVideos = TheDocument.childNodes[0];
		if(typeof choosenRep === "undefined" || choosenRep == "")
		{
			// TODO A tester !
			vidNode = repVideos.getElementsByTagName("video"); 
		}
		else
		{
			for (var i = 0; i < repVideos.children.length; i++)
			{
				var repNode = repVideos.children[i];
				var rep = repNode.getAttribute('rep');
				if(rep == choosenRep)
				{	
					//Récupération du bon noeud
					vidNode = repNode.children;
				}
			}
		}
		
		
		//On lance la première vidéo
		var videoLoader = document.getElementById('videoPlayer');
		vidNode = shuffle(vidNode);
		indexVideo = 0;
		var typeVid = vidNode[indexVideo].getAttribute('type');
		var pathVid = vidNode[indexVideo].getAttribute('path');
		videoLoader.type = typeVid;
		videoLoader.src = pathVid;
		
		var audioLvl = vars.audioLvl;
		if(audioLvl != null){
			videoLoader.volume = audioLvl/100;
		}else{
			videoLoader.volume = 0.05;
		}
		
		videoLoader.addEventListener("loadedmetadata", onMetaDateVideoLoad);
		videoLoader.onended = onEndVid;
		videoLoader.onclick = onVideoLoaderClick;
	}
}

function onEndVid(){
	var videoLoader = document.getElementById('videoPlayer');
	var sourceNextVideo = document.createElement("source");
	indexVideo++;
	if(indexVideo == vidNode.length)
	{
		//Fin de playlist sélectionné, on repart du début
		indexVideo = 0;
	}
	
	var typeVid = vidNode[indexVideo].getAttribute('type');
	var pathVid = vidNode[indexVideo].getAttribute('path');

	if(isStreamerReady){
		//Le streamer à cliqué sur la page, on lance la vidéo d'intro Fureur en FullScreen
		document.body.appendChild(videoLoader);
		videoLoader.style.width = "1920px";
		videoLoader.style.height = "1080px";
		videoLoader.style.zIndex = "10";
		videoLoader.type = "video/webm";
		videoLoader.src = "../video/intro/intro.webm";
	}else{
		videoLoader.type = typeVid;
		videoLoader.src = pathVid;
	}
}
function onMetaDateVideoLoad(){
	
}

function onVideoLoaderClick(){
	isStreamerReady = true;
}

function onFrameXmlLoad(){
	var frameXml = document.getElementById("frameXml");
	var t = "1";
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}