/***********************************
 * Interactive Part of the Website *
 **********************************/

/********************
 * Back-End Scripts * 
 ********************/

//AOS Plugin
AOS.init({
	duration : 1200
});

/****************************
 * Start of Front-EndScript *
 ****************************/

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
		console.log("Website Theme is changed to " + localStorage.getItem("websiteTheme") + " mode"); //logs the theme change
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

/*******************
 * Change the HTML  *
 *******************/

//function that will be run when the "Confirm" button is pressed
function textButton() {
	var removeBox = document.getElementById("inputDiv");
	var textValue = document.getElementById("textInput").value;
	document.getElementById("prototype").innerHTML = textValue;
	document.getElementById("myInput").value = "";
	document.getElementById("myInput").innerHTML = "";
	removeBox.remove();
}

/*************************
 * Change the text color  *
 *************************/
var colorInput = document.getElementById("colorPlace");
var colorToggle = document.getElementById("textColorToggle");
var stylesBtn = document.getElementById("stylesButton");

//function that will toggle the color settings
function textColorToggle() {
	document.getElementById("colorInput").style.display = "block";
	document.getElementById("textColorToggle").style.display = "none";
}

//function that will be run when the "Confirm" button is pressed
function styleButton() {
	var coloring = document.getElementById("colorPlace").value;
	document.getElementById("prototype").style.color = coloring;
	document.getElementById("colorInput").style.display = "none";
	colorToggle.style.display = "inline";
	document.getElementById("colorPlace").value = "";
}

ifEnterIsPressed(colorInput, styleButton);

/*******************
 * Change Font Size *
 *******************/

var sizeInput = $("#fontSizeInput");

//Button to make the text size settings appear
function fontChangeTgl() {
	$("#fontSizeTgl").css("display", "none");
	$("#fontChangeDiv").css("display", "inline");
}

//Button when makes the settings disappear and the toggle button re-appear | Also changes the font size of the text displayed.
function fontSizeConfirm() {
	var theSize = $("#fontSizeInput").val();
	$("#prototype").css("font-size", theSize + "px");
	//document.getElementById("prototype").style.fontSize = theSize + "px";
	$("#fontSizeTgl").css("display", "inline");
	$("#fontChangeDiv").css("display", "none");
}

//when the user presses the "Enter", it will click the button automatically

ifEnterIsPressed(sizeInput, fontSizeConfirm);
