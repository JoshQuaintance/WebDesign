/*************************************
 * Interactive Website for Web Design *
 *                                    *
 *         by: Joshua Pelealu         *
 *************************************/

/********************
 * Back-End Scripts * 
 ********************/

//AOS Plugin
AOS.init({
	duration : 1200
});

/**********************
 * Checks User Device *
 **********************/

//prettier-ignore

function checkDevice() {
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	
	$(".WebsiteCSS").attr("href", "device-mobile.css");
	if (/Android/i.test(navigator.userAgent)){
		console.log("User Device - Android") 
	} else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)){
		console.log("User Device - iOS")
	} else if (/Kindle/i.test(navigator.userAgent)) {
		console.log("User Agent Device - Kindle")
	}
	console.log("Using " + $(".WebsiteCSS").attr("href") + " for Website Style");
	return "Android";
	
} else {
	$(".WebsiteCSS").attr("href", "main.css");
	console.log("User Agent Detected - PC or Mac")
	console.log("Using " + $(".WebsiteCSS").attr("href") + " for Website Style");
	return "PC";
 }
}

checkDevice();

if (checkDevice === "Android") {
	$(".darkSwitch-Mobile").css("display", "inline");
	$(".darkSwitch-PC").css("display", "none");
	$(".navBarSeparator").css("display", "inline");
} else {
	$(".darkSwitch-PC").css("display", "inline");
	$(".darkSwitch-Mobile").css("display", "none");
}

/*****************************************
 * Detect User Browser Using Duck-Typing *
 *****************************************/

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== "undefined";

//prettier-ignore
// Safari 3.0+ "[object HTMLElementConstructor]"
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/ false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
var isEdgeChromium = isChrome && navigator.userAgent.indexOf("Edg") != -1;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

function duckTypeTest(browserType, browserName) {
	if (browserType === true) {
		console.log("User Agent Browser Detected - " + browserName);
	}
}

/*******************************************
 *  Console.Logs for Each Browser Detected *
 *******************************************/
if (
	isChrome === true ||
	isSafari === true ||
	isFirefox === true ||
	isEdge === true ||
	isEdgeChromium === true ||
	isOpera === true ||
	isIE === true ||
	isBlink === true
) {
	//Chrome
	duckTypeTest(isChrome, "Google Chrome");

	//Safari
	duckTypeTest(isSafari, "Apple Safari");

	//FireFox
	duckTypeTest(isFirefox, "Mozilla Firefox");

	//Edge
	duckTypeTest(isEdge, "Microsoft Edge");

	//Edge (Based on Chromium)
	duckTypeTest(isEdgeChromium, "Microsoft Edge Using Chromium");

	//Opera
	duckTypeTest(isOpera, "Opera Browser");

	//Internet Explorer
	duckTypeTest(isIE, "Microsoft Internet Explorer");

	//Blink Engine
	duckTypeTest(isBlink, "Blink Engine");
} else {
	console.log("User Agent Browser Unknown / Not Detected");
}

/****************************
 * Start of Front-EndScript *
 ****************************/

var body = document.body;


/*************************
 * Random Code Additions *
 *************************/

//Links in About Page all go to new Tab

$(".aboutPageDiv a").attr("target", "_blank");


/******************************
 * Website Theme (Dark/Light) *
 ******************************/

localStorage.key("websiteTheme");
console.log("Current Website Theme is Set as " + localStorage.getItem("websiteTheme") + " mode");

var switchText = document.getElementById("innerSwitch");
var navBar = document.getElementsByTagName("nav");
var introDiv = document.querySelectorAll(".introductions");
var spotifySnippet = document.getElementById("spotifySnippet");

if (localStorage.getItem("websiteTheme") === "dark") {
	darkModeOn();
} else {
	darkModeOff();
}

//function run when the dark mode button is pressed
function darkSwitch() {
	var darkSwitchMode = document.getElementById("innerSwitch").innerHTML;
	//changes the text and the mode according to the text value on the button
	if (darkSwitchMode === "OFF") {
		darkModeOn();
		localStorage.setItem("websiteTheme", "dark"); //sets the local storage
		//checkDevice();
		console.log("Website Theme is changed to " + localStorage.getItem("websiteTheme")); //logs the theme change
	} else {
		darkModeOff();
		//checkDevice();
		localStorage.setItem("websiteTheme", "light"); //sets local storage to light
		console.log("Website Theme is changed to " + localStorage.getItem("websiteTheme") + " mode"); //logs the theme change
	}
}

//function that will change the colors of the website | reusable
function darkModeOn() {
	$("#innerSwitch, #innerSwitch").text("ON"); //text on the button
	body.classList.add("dark-mode");
	navBar[0].classList.add("darkModeNav"); // changes navbar theme
	//changes the introductions on Home Page to dark mode
	$(".introductions").addClass("darkModeIntro");
	$(".aboutPage").addClass("aboutPageDark");
	$("#alertInput").css({ "background-color": "#222", color: "inherit", border: "3px solid rgba(63, 63, 63, 0.5)" });
	localStorage.setItem("websiteTheme", "dark"); //sets the local storage
}

//function that will change the colors of the website | reusable
function darkModeOff() {
	$("#innerSwitch, #innerSwitch").text("OFF"); //text on the button
	body.classList.remove("dark-mode");
	navBar[0].classList.remove("darkModeNav"); //changes navBar theme
	$(".container div").removeClass("darkModeIntro");
	$(".aboutPage").removeClass("aboutPageDark");
	$("#alertInput").css({
		"background-color" : "#a3a3a3",
		color              : "inherit",
		border             : "3px solid rgba(156, 156, 156, 0.5)"
	});
	localStorage.setItem("websiteTheme", "light"); //sets local storage to light
}

/*********************************************************
 * Reusable Function For "Enter" Keypress event listener *
 *********************************************************/
function ifEnterIsPressed(elementPicked, funcCallback) {
	elementPicked.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			funcCallback();
		}
	});
}

/*******************************************
 * Background Image on Introduction Toggle *
 *******************************************/
//! STILL NOT WORKING
function bgVideo() {
	var bgVisible = $("#bgImg").css("visibility");

	if (bgVisible === "hidden") {
		$("#bgImg").css("visibility", "visible");
		$("#bgVideoToggle").text("Turn Off");
	} else {
		$("#bgImg").css("visibility", "hidden");
		$("#bgVideoToggle").text("Turn On");
	}
}

/***************************
 * Background Image Change *
 ***************************/
var urlInput = document.getElementById("bgImgInput");
var urlInputValue = urlInput.value;
var urlConfirm = document.getElementById("urlInputConfirm");
var validationMsg = $("#validationMsg");

function bgImgChange() {
	var urlInputValue = document.getElementById("bgImgInput").value;
	var urlCheck = is_url(urlInputValue);
	console.log(urlCheck);
	if (urlCheck === true) {
		bgImgInputRmv();
		$("#validationMsg").css("display", "none");
	} else {
		$("#validationMsg").css("display", "inline");
	}
}

ifEnterIsPressed(urlInput, bgImgInputRmv);

function bgImgInput() {
	$("#bgImgInput").css("display", "inline");
	$("#urlInputConfirm").css("display", "inline");
}

function bgImgInputRmv() {
	$("bgImg").attr("src", urlInputValue);
	$("#bgImgInput").css("display", "none");
	$("#urlInputConfirm").css("display", "none");
}

//checks url validity
function is_url(str) {
	var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

	if (regexp.test(str)) {
		return true;
	} else {
		return false;
	}
}

/********************
 * Spotify Playlist *
 ********************/
function spotifyPlaylist() {
	if ($(".spotifyDiv").css("display") === "none") {
		$(".spotifyDiv").css("display", "inline");
	} else {
		$(".spotifyDiv").css("display", "none");
	}
}

function spotifyExplainTgl() {
	if ($(".spotifyExp").css("display") === "none") {
		$(".spotifyExp").css("display", "inline");
	} else {
		$(".spotifyExp").css("display", "none");
	}
}

function jqueryTgl() {
	if ($("#jQueryTgl").text() === "With jQuery") {
		$("#jQueryTgl").text("Normal JS");
		$(".withJQuery").attr("data-aos", "slide-left");
		$(".normalJS").css("display", "none");
		$(".withJQuery").css("display", "inline");
	} else {
		$("#jQueryTgl").text("With jQuery");
		$(".withJQuery").css("display", "none");
		$(".normalJS").css("display", "inline");
	}
}
/**********************
 * Alert Text Message *
 **********************/

var alertInput = document.getElementById("alertInput");
var alertBtn = document.getElementById("alertBtn");
function alertMessage() {
	alert(alertInput.value);
	console.log("Alert Message Prompted");
	alertInput.value = " ";
}
