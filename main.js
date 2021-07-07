var arrayOverlay = [
	{
		id: "break1",
		src: "./BreakV1/overlay.html",
	},
	{
		id: "break2",
		src: "./BreakV2/overlay.html",
	},
	{
		id: "breakSolo",
		src: "./BreakSolo/overlay.html",
	},
	{
		id: "ingame",
		src: "./InGame/overlay.html",
	},
	{
		id: "ingameSolo",
		src: "./InGameSolo/overlay.html",
	},
	{
		id: "intro",
		src: "./Intro/overlay.html",
	},
	{
		id: "introSolo",
		src: "./IntroSolo/overlay.html",
	},
	{
		id: "lobby",
		src: "./Lobby/overlay.html",
	},
	{
		id: "timer",
		src: "./TimerOnly/overlay.html",
	},
];

var arrayParam = [
	{
		id: "twitch",
		paramsOver: "twitch",
	},
	{
		id: "twitter",
		paramsOver: "tt",
	},
	{
		id: "twitter",
		paramsOver: "TW",
	},
	{
		id: "pseudo",
		paramsOver: "pseudo",
	},
	{
		id: "audioLvl",
		paramsOver: "audioLvl",
	},
	{
		id: "minutes",
		paramsOver: "minutes",
	},
	{
		id: "FB",
		paramsOver: "FB",
	},
	{
		id: "RS",
		paramsOver: "RS",
	},
	{
		id: "ratioCam",
		paramsOver: "ratioCam",
	},
	{
		id: "repVid",
		paramsOver: "folder",
	},
];

function onloadDefault() {
	//définition des valeurs pas défault
	document.getElementById("twitch").value = "default_Twitch";
	document.getElementById("twitter").value = "default_Twitter";
	document.getElementById("pseudo").value = "d_Pseudo";
	document.getElementById("audioLvl").value = 0;
	document.getElementById("minutes").value = 5;
	document.getElementById("FB").value = "default_FB";
	document.getElementById("RS").value = 3;
	document.getElementById("ratioCam").value = "16.9";

	onClickRefresh();
}

function onClickRefresh() {
	chaineParamsURL = "";
	arrayParam.forEach((params) => {
		const valeur = document.getElementById(params.id).value;
		chaineParamsURL += `${params.paramsOver}=${valeur}&`;
	});
	console.log(chaineParamsURL);
	const rootPath = `${window.location.host}/`;
	let chainSpan = "";
	arrayOverlay.forEach((overlay) => {
		chainSpan += `${overlay.id}:<br/>${rootPath}${overlay.src.substr(2)}?${chaineParamsURL.slice(
			0,
			-1
		)}<br/>`;
		const elem = (document.getElementById(overlay.id).src = `${overlay.src}?${chaineParamsURL}`);
	});

	document.getElementById("spanLinkOverlays").innerHTML = chainSpan;
}

function generateLinksOverlays() {}
