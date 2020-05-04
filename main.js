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
randomMargin();

/*************************
 * Random Code Additions *
 *************************/

//Links in About Page all go to new Tab
$(".aboutPageDiv a").attr("target", "_blank");

/***************************
 * Random Stars Generation *
 ***************************/

function starGeneration() {
	let randomPosition = [ "left", "right" ];

	for (let i = 1; i <= 150; i++) {
		let randomTopNum = Math.floor(Math.random() * 1200) + 10;
		let randomPosNum = Math.floor(Math.random() * 700) + 10;
		let xPosition = Math.round(Math.random());
		let positionName = randomPosition[xPosition];

		//Random number for star scale
		let randomScaleNum = Math.random() * 0.2 + 1;
		console.log(randomScaleNum);

		//creates the span element for the stars
		let starSpan = $(`<span class="stars star${i}"></span>`);

		$(starSpan).css("top", randomTopNum);
		$(starSpan).css(positionName, randomPosNum);
		$(starSpan).css("transform", `scale(${randomScaleNum})`);

		$("div.starContainer").append(starSpan);
	}
}
/******************************
 * Random Numbers for Margins *
 *****************************/
function randomMargin() {
	//picks margin-left or margin-right
	let marginText = [
		"right",
		"left",
		"right",
		"left",
		"right",
		"left",
		"right",
		"left",
		"right",
		"left",
		"right",
		"left",
		"right"
	];

	let marginText2 = [
		"left",
		"right",
		"left",
		"right",
		"left",
		"right",
		"left",
		"right",
		"left",
		"right",
		"left",
		"right",
		"left"
	];

	//Element Classes
	let elementClasses = [
		".introduction",
		".interesting",
		".funStuff",
		".mistakes",
		".thanksYou",
		".aboutMe",
		".beforeStart",
		".jQueryUse",
		".AOSUse",
		".prismSyntaxHighlight",
		".editorUsed",
		".sourceCode",
		".otherStuff"
	];

	//generates random number value for the margin and applies margin to each element
	let randomNum2 = [];
	let randomNum = [];
	for (let i = 0; i < elementClasses.length; i++) {
		randomNum.push(Math.floor(Math.random() * 200) + 150);
		randomNum2.push(Math.floor(Math.random() * 100) + 5);

		$(elementClasses[i]).css("margin-" + marginText[i], randomNum[i]);
		$(elementClasses[i]).css("margin-" + marginText2[i], randomNum2[i]);
	}
}
/*********************************
 * Local Storage To Set Some CSS *
 *********************************/

localStorage.key("backgroundImgSet");

if (localStorage.getItem("backgroundImgSet") === "On") {
	$("#bgImg").css("visibility", "visible");
	localStorage.setItem("backgroundImgSet", "On");
} else if (localStorage.getItem("backgroundImgSet") === "Off") {
	$("#bgImg").css("visibility", "hidden");
	$("#bgVideoToggle").text("Turn On");
	localStorage.setItem("backgroundImgSet", "Off");
} else {
	localStorage.setItem("backgroundImgSet", "On");
}

/***********************************
 * Checks What Page the User is In *
 ***********************************/
userCurrentPage();

function userCurrentPage() {
	const CURRENT_URL = $(location).attr("href");
	const CURRENT_PAGE = encodeURIComponent(CURRENT_URL);
	const PAGE_REGEX = /index|about|interactive|scene/gi;
	const HOME = CURRENT_PAGE.match(PAGE_REGEX);
	const navColor = "#000";

	console.log(CURRENT_PAGE + " " + HOME);
	if (HOME == null) {
		backgroundImg();
		starGeneration();
		$("#home span").css("opacity", "1").css("color", navColor);
		$("#home").css("color", navColor);
	} else if (HOME[0] == "index") {
		backgroundImg();
		console.log("index");
		starGeneration();
		$("#home span").css("opacity", "1").css("color", navColor);
		$("#home").css("color", navColor);
	} else if (HOME[0] == "about") {
		console.log("Im in about");
		$("#about span").css("opacity", "1").css("color", navColor);
		$("#about").css("color", navColor);
	} else if (HOME[0] == "interactive") {
		console.log("im in interactive");
		$("#interactive span").css("opacity", "1").css("color", navColor);
		$("#interactive").css("color", navColor);
	} else if (HOME[0] == "Scene") {
		$("#scene span").css("opacity", "1").css("color", navColor);
		$("#scene").css("color", navColor);
	}
}

/*****************
 * Nav Bar Hover *
 *****************/
for (let cont of document.querySelectorAll("[data-link-hover]")) {
	let hoverTimeout = null;
	for (let elem of cont.children) {
		elem.addEventListener(
			"mouseenter",
			() => {
				if (hoverTimeout) {
					clearTimeout(hoverTimeout);
					hoverTimeout = null;
				}
				for (let child of cont.children) child.style.opacity = "0.4";

				elem.style.opacity = "1";
			},
			false
		);
		elem.addEventListener(
			"mouseleave",
			() => {
				hoverTimeout = setTimeout(() => {
					hoverTimeout = null;
					for (let child of cont.children) child.style.opacity = "1";
				}, 200);
			},
			false
		);
	}
}

/*************
 * Greetings *
 *************/
//Creates local storage key
localStorage.key("rememberUserName");
localStorage.key("userName");
var userNameStore = localStorage.getItem("userName");
var rememberNameStore = localStorage.getItem("rememberUserName");

//Checks if there is a local storage named "rememberUserName" with a value of "yes"
//and a local storage named "userName" with a string value and is not empty nor null nor undefined
if (rememberNameStore === "Yes" && userNameStore !== "" && userNameStore !== null && userNameStore !== undefined) {
	//if the condition is correct, then this block will run
	$("#userName").text(userNameStore);
} else {
	//if not, its going to ask the user for name
	var userName = window.prompt("Before We Start, What is your name?");
	userNameStore = localStorage.setItem("userName", userName);
	console.log(userName !== "" + "hello");

	//checks if there is a string value for the prompt
	if (userName !== "" && userName !== null && userName !== undefined) {
		//if there is, then this block will run
		console.log(userName);
		$("#userName").text(userName + "!");

		//ask user if they want the browser to store their name
		if (confirm("Do you want your browser to remember your name for the next time you visit this website?")) {
			//yes they do
			localStorage.setItem("rememberUserName", "Yes");
		} else {
			//no they don't, they are going to be asked again on the next visit of index.html
			localStorage.setItem("rememberUserName", "No");
		}
	} else {
		//if user did not enter a string, then this block will run
		console.log("User Name is not Entered");
		$("#userName").text("Anonymous User!");
		localStorage.setItem("userName", "Anonymous User!");
	}
}

//prettier-ignore
$("#userName").hover(function () {
	//prettier-ignore
	localStorage.setItem("userNameChange", userNameStore);
	var userNameChange = localStorage.getItem("userNameChange")
	$(this).text("Change Name").addClass("hoverToChange");
}, function() {
	var userNameStore = localStorage.getItem("userName")
	console.log(userNameStore);
	$(this).text(userNameStore).removeClass("hoverToChange");
		
	
})

function changeUserName() {
	var userName = window.prompt("What is your name?");
	userNameStore = localStorage.setItem("userName", userName);

	if (userName === "" || userName === null || userName === undefined) {
		$("#userName").text("Anonymous User!");
		localStorage.setItem("userName", "Anonymous User!");
	} else {
		$("#userName").text(userName);

		if (confirm("Do you want the browser to save your name for your next visit?")) {
			localStorage.setItem("rememberUserName", "Yes");
			console.log(userName);
			localStorage.setItem("userName", userName);
		} else {
			console.log(userName);
			localStorage.setItem("rememberUserName", "No");
			localStorage.setItem("userName", userName);
		}
	}
}

var switchText = document.getElementById("innerSwitch");
var navBar = document.getElementsByTagName("nav");
var introDiv = document.querySelectorAll(".introductions");
var spotifySnippet = document.getElementById("spotifySnippet");

/**************************
 * Dark Mode - Turned Off *
 **************************/
/*
//function run when the dark mode button is pressed
function darkSwitch() {
	var darkSwitchMode = document.getElementById("innerSwitch").innerHTML;
	//changes the text and the mode according to the text value on the button
	if (darkSwitchMode === "OFF") {
		localStorage.setItem("websiteTheme", "dark"); //sets the local storage
		//checkDevice();
		console.log("Website Theme is changed to " + localStorage.getItem("websiteTheme")); //logs the theme change
	} else {
		//checkDevice();
		localStorage.setItem("websiteTheme", "light"); //sets local storage to light
		console.log("Website Theme is changed to " + localStorage.getItem("websiteTheme") + " mode"); //logs the theme change
	}
}


//turned off
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
*/
/*********************************************************
 * Reusable Function For "Enter" Keypress event listener *
 *********************************************************
function ifEnterIsPressed(elementPicked, funcCallback) {
	elementPicked.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			funcCallback();
			console.log("function " + funcCallBack + "is executed");
		}
	});
}*/

function ifEnterIsPressed(elementSelector, funcCallback) {
	$(elementSelector).on("keyup", (event) => {
		if (event.keyCode === 13) {
			event.preventDefault();
			funcCallback();
			console.log(`Enter is pressed in ${elementSelector}, ${funcCallback} function is executed`);
		}
	});
}

/*******************************************
 * Background Image on Introduction Toggle *
 *******************************************/

function bgVideo() {
	let bgVisible = $("#bgImg").css("visibility");

	if (bgVisible === "hidden") {
		$("#bgImg").css("visibility", "visible");
		$("#bgVideoToggle").text("Turn Off");
		localStorage.setItem("backgroundImgSet", "On");
	} else {
		$("#bgImg").css("visibility", "hidden");
		$("#bgVideoToggle").text("Turn On");
		localStorage.setItem("backgroundImgSet", "Off");
	}
}

/***************************
 * Background Image Change *
 ***************************/
function backgroundImg() {
	var urlInput = document.getElementById("bgImgInput");
	var urlInputValue = $(urlInput).val();
	var urlConfirm = document.getElementById("urlInputConfirm");
	var validationMsg = $("#validationMsg");

	function bgImgChange() {
		var urlValue = $("#bgImgInput").val();
		var urlCheck = is_url(urlValue);

		if (urlCheck === true) {
			$("#bgImg").attr("src", urlValue);
			$("#validationMsg").css("display", "none");
			bgImgInputRmv();
		} else {
			$("#validationMsg").css("display", "inline");
		}
	}

	ifEnterIsPressed(urlInput, bgImgChange);

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

function alertMessage() {
	let alertInput = $("#alertInput").val();
	let alertBtn = document.getElementById("alertBtn");

	alert(alertInput);
	console.log("Alert Message Prompted");
	alertInput.value = " ";
}
