/***********************************
 * Interactive Part of the Website *
 **********************************/

//AOS Plugin
AOS.init({
	duration : 1200
});

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

//Pickr

// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
	el                    : ".color-picker",
	theme                 : "classic", // or 'monolith', or 'nano'

	defaultRepresentation : "RGBA",
	closeWithKey          : "Escape",
	default               : "rgba(17, 17, 17, 0.6)",

	//prettier-ignore
	swatches              : [ 

							"rgba(17, 17, 17, 0.6)",
							"#222",
							"rgba(225, 225, 225, 0.5)"

							],

	components            : {
		// Main components
		preview     : true,
		opacity     : true,
		hue         : true,

		// Input / output Options
		interaction : {
			hex   : true,
			rgba  : true,
			input : true,
			save  : true
		}
	}
});

var bgColors = `rgba(17, 17, 17, 0.6)`;
//prettier-ignore
pickr.on("save", (color, instance) => {
		//console.log(color.toRGBA());

		var bgColor = color.toRGBA();

		//$(".panel").css("background-color", `rgba(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}, ${bgColor[3]})`);

		pickr.hide();

		console.log("Card Background Color Picked - " + `RGBA(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}, ${bgColor[3]})`)

		return bgColors = `RGBA(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}, ${bgColor[3]})`


	}).on("swatchselect", (color, instance) => {
		console.log(color.toRGBA());
	}).on("change", (color, instance) => {
		pickr.on("hide", (instance) => {
		console.log(color.toRGBA());
		
	})
	});

/***************************
* Add Button For New Board *
****************************/

$("img.addBtn").on("click", function() {
	console.log("test!");
	$(this).css("display", "none");
	$(".addNewPanel").css("display", "inline");
	$("#inputDiv").css("display", "inline");
	$(".headingText").css("display", "none");
	$(".changeTextDiv").css("display", "none");
});

/******************
 * Adds New Panel *
 ******************/

var uniqueNum = 0;
var headingPicked;
var headingText;
var paragraphText;

//Select Heading - 1
function headingSelected() {
	if ($("#headerSelect").val() !== "undefined") {
		console.log($("select").val());
		$("#inputDiv").css("display", "none");
		$(".headingText").css("display", "inline");
		return (headingPicked = $("select").val());
	} else {
		alert("Please Pick A Heading Type");
	}
}

//Select Heading Text - 2
function headingTextSelected() {
	if ($("#headingInput").val() !== "") {
		$(".headingText").css("display", "none");
		$(".changeTextDiv").css("display", "inline");
		$(".addPanelSpan").css("display", "inline");
		return (headingText = $("#headingInput").val());
	} else {
		$(".headingText").css("display", "none");
		$(".changeTextDiv").css("display", "inline");
		$(".addPanelSpan").css("display", "inline");
		return (headingText = "Heading");
	}
}

//Select Paragraph Text - 3
function paragraphTextSelected() {
	if ($("#panelText").val() !== "") {
		$(".changeTextDiv").css("display", "none");
		return (paragraphText = $("#panelText").val());
	} else {
		$(".changeTextDiv").css("display", "none");
		//placeholder
		//prettier-ignore
		return (paragraphText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Elementum nibh tellus molestie nunc non blandit massa enim nec. Id semper risus in hendrerit gravida rutrum. Vitae tempus quam pellentesque nec. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Dolor morbi non arcu risus quis varius quam quisque id. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Id aliquet risus feugiat in ante metus dictum at. Est velit egestas dui id ornare. Nec nam aliquam sem et tortor consequat id porta.");
	}
}


function addPanel() {
	paragraphTextSelected();
	var uniqueDivClass = "newCard" + uniqueNum + " newPanels";
	var divClassToAppend = "newCard" + uniqueNum;
	var uniqueHeadingClass = "newHeading" + uniqueNum;
	var uniqueParagraphClass = "newParagraph" + uniqueNum;
	var headingType = "<" + headingPicked + ">";

	//New Div
	var newCard = $("<div></div>").addClass(uniqueDivClass);

	//Adds Heading to The Div
	var newHeading = $(headingType).addClass(uniqueHeadingClass);

	$(newHeading).text(headingText);

	$(newCard).append(newHeading);
	console.log(headingType);

	//Adds Paragraph to The Div
	var panelParagraph = $("<p>").addClass(uniqueParagraphClass);

	$(panelParagraph).text(paragraphText);

	$(newCard).append(panelParagraph);
	console.log(paragraphText);

	//adds div
	console.log(bgColors);
	$(newCard).css("background-color", bgColors);

	$("#newPanelContainer").append(newCard);

	uniqueNum++;

	$(".addPanelSpan").css("display", "none");
	$(".addBtn").css("display", "inline");
	$(".addNewPanel").css("display", "none");
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
