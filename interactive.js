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

function addPanelNow() {
	console.log("fastHey");
	$("img.addBtn").css("display", "none");
	$(".addNewPanel").css("display", "inline");
	$("#inputDiv").css("display", "inline");
	$(".headingText").css("display", "none");
	$(".changeTextDiv").css("display", "none");
}

$("img.addBtn").on("click", () => {
	$("img.addBtn").css("animation", "rotation 0.4s linear infinite");
	$("img.addBtn").removeClass("addBtnH");
	setTimeout(addPanelNow, 500);
});

/******************
 * Adds New Panel *
 ******************/

var uniqueNum = 0;
var headingPicked;
var headingText;
var paragraphText;
var deletePanelText = "<h2>Delete Panel</h2>";

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
		//placeholder text
		//prettier-ignore
		return (paragraphText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Elementum nibh tellus molestie nunc non blandit massa enim nec. Id semper risus in hendrerit gravida rutrum. Vitae tempus quam pellentesque nec. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Dolor morbi non arcu risus quis varius quam quisque id. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Id aliquet risus feugiat in ante metus dictum at. Est velit egestas dui id ornare. Nec nam aliquam sem et tortor consequat id porta.");
	}
}

function addPanel() {
	paragraphTextSelected();
	var uniqueDivClass = "newCard" + uniqueNum + " newPanels";
	var divClassToDel = "newCard" + uniqueNum;
	var uniqueHeadingClass = "newHeading" + uniqueNum;
	var uniqueParagraphClass = "newParagraph" + uniqueNum;
	let parDivClass = "div_newParagraph" + uniqueNum;
	let par = uniqueParagraphClass;
	var headingType = "<" + headingPicked + ">";
	var deletePanelImg = $("<img>");
	let dotMenu = $(
		//prettier-ignore
		"<div class='dot-menu dot" + par + "'" +
			'onmouseover="dotHovered(' +"'" + par +"'" +')" onmouseout="dotNotHovered(' +"'" + par +"'" +')">' +
			"<img src='dot-fill.svg'  id='dot-menu' class='dot1'>" +
			"<img src='dot-fill.svg' id='dot-menu' class='dot2'>" +
			"<img src='dot-fill.svg' id='dot-menu' class='dot3'>" +
			"</div><br>"
	);

	//New Div
	var newCard = $("<div></div>").addClass(uniqueDivClass);

	//Adds Heading to The Div
	//prettier-ignore
	var newHeading = $(headingType).addClass(uniqueHeadingClass);

	//prettier-ignore
	newHeading = $(newHeading).attr({
		onmouseover : "headingHovered(" + "'" + uniqueHeadingClass + "'" + ")",
		onmouseout  : "headingNotHovered(" + "'" + uniqueHeadingClass + "'" + ")",
		onclick : "editPanelHeading(" + "'" + uniqueHeadingClass + "'" + ")",
		onchange: "headingChanged(" + "'" + uniqueHeadingClass + "'" + ")"
	}).addClass("panelHeadings");

	$(newHeading).text(headingText);

	$(newCard).append(newHeading);

	//Adds 3 dot menu after the heading for paragraph edit
	$(dotMenu).insertAfter(newHeading);

	//Adds Paragraph to The Div
	let parDiv = $("<div>").addClass(parDivClass)
	var panelParagraph = $("<p>").addClass(uniqueParagraphClass);

	$(parDiv).append(panelParagraph)
	$(panelParagraph).text(paragraphText);

	console.log("Testing1" + dotMenu);
	$(newCard).append(parDiv);

	console.log(paragraphText);

	//adds div
	console.log(bgColors);
	$(newCard).css("background-color", bgColors);

	$("#newPanelContainer").append(newCard);

	console.log(newCard);
	//prettier-ignore
	//adds delete panel cross image
	deletePanelImg = $(deletePanelImg).addClass("deletePanelCrossImg " + "deletePanelNum" + uniqueNum).attr({
			onclick: "deleteSelectedPanel(" + "'" + "newCard" + uniqueNum + "'" + ")",
			src: "exit_icon.svg"

		});

	//var returnFunction = () => (uniqueHeadingClass = uniqueHeadingClass);
	//appends it on the top of the panel
	//$(newCard).prepend(deletePanelText);
	$(newCard).prepend(deletePanelImg);

	uniqueNum++;

	$(".addPanelSpan").css("display", "none");
	$("img.addBtn").css("animation", "none");
	$("img.addBtn").addClass("addBtnH");
	$(".addBtn").css("display", "inline");
	$(".addNewPanel").css("display", "none");
}

/**********************************
 * Animation when text is changed *
 **********************************/
function headingChanged(headingNum) {
	let headingClass = "." + headingNum;
	$(headingClass).css("animation", "changeHappened 1s");
	console.log("something changed");
}

/************************
 * Heading Edit Options *
 ************************/

//Heading is hovered
let headingHovered = (headingNum) => {
	let headingClass = "." + headingNum;
	
	var headingText = $(headingClass).text();
	console.log(headingText);

	//console.log($(headingClass).css("width"));
	$(headingClass).text("Edit Heading").addClass("headingHovered");
	return (headingTextBack = headingText);
};

//heading is not hovered
let headingNotHovered = (headingNum) => {
	let headingClass = "." + headingNum;
	$(headingClass).text(headingTextBack).removeClass("headingHovered");
};

/*******************************
 * Edit Panel Option Container *
 *******************************/
//Opens Up the Container When A heading Is Open
function editPanelHeading(headingNum) {
	$(".editHeadingPanelContainer").addClass("editPanelContainerOn");

	let headingUniqueNum = headingNum.match(/(\d+)/);
	let headingX = headingUniqueNum[0];
	let headingI = Number(headingX);
	let headingNumSpan = headingI + 1;
	console.log(headingNumSpan);

	//Changes Number For Editing Panel
	$("#headingNum").text(headingNumSpan);

	return (currentlyEditHeading = headingNum);
}

function closeHeadingEditPanel() {
	let headingX = currentlyEditHeading;
	let headingY = "." + headingX;
	let originalH = headingTextBack;
	console.log(originalH);

	$(headingY).text(originalH).css("animation", "changeHappened .7s");
	$(".editHeadingPanelContainer").removeClass("editPanelContainerOn");

	$(".newHeadingInput").val("");
	console.log($(".newHeadingInput").val());
}

function grabNewHeading() {
	let newHeading = $(".newHeadingInput").val();
	let headingX = currentlyEditHeading;
	let headingY = "." + headingX;

	$(headingY).text(newHeading).css("animation", "changeHappened .7s");

	setTimeout(() => {
		$(headingY).text(newHeading).css("animation", "");
		console.log("run");
	}, 710);
	//$().text(newHeading);
}

function saveHeadingEdit() {
	let newHeading = $(".newHeadingInput").val();
	let headingX = currentlyEditHeading;
	let headingY = "." + headingX;

	$(headingY).text(newHeading).css("animation", "changeHappened .7s");
	$(".editHeadingPanelContainer").removeClass("editPanelContainerOn");
}

/**************************
 * Paragraph Edit Options *
 **************************/
let drawPencil = (parNum) => {
	let parClass = "." + parNum;
	let parDivClass = ".div_" + headingNum;
	let x = $("<div id=\"parEditOptions\">" + 
	"<div id=\"editDatPencil\"" +  
	"onmouseover=\"pencilHovered(" + "\'" + parNum + "\')\"" +
	"onmouseout=\"pencilNotHovered(" + "\'" + parNum + "\')\">" +
	"<img src='pencil.svg' id='pencilEdit'" +  "onmouseover=\"pencilHovered(" + "\'" + parNum + "\')\"" +
	"onmouseout=\"pencilNotHovered(" + "\'" + parNum + "\')\">" +
	"<img src='copy_icon.svg' id='parCopy'" +
	"onmouseover=\"copyHovered(" + "\'" + parNum + "\')\"" +
	"onmouseout=\"copyNotHovered(" + "\'" + parNum + "\')\">" +
	"</div></div>");
	x = x.css("z-index", "1000");

	if ($("#pencilEdit").length){
	} else {
		$(x).insertBefore(parClass);
	}
};

var dotHovered = (parNum) => {
	let parClass = "." + parNum;
	console.log("dot hovered")
	
	$(parClass).addClass("dotHoverActive");
	$(parClass).attr({
		onmouseover : "hoverPar(" + "'" + parNum + "')", 
		onmouseout  : "notHoverPar(" + "'" + parNum + "')"
	});

	drawPencil(parNum);
};

let dotNotHovered = (parNum) => {
	let parClass = "." + parNum;

	$(parClass).removeClass("dotHoverActive");

	if ($(parClass).is(":hover")) {
		
	} else {
		$(parClass).attr({
			onmouseover : "", 
			onmouseout  : ""
		});
	}

	$("#parEditOptions").remove();
};

let hoverPar = (parNum) => {
	let parClass = "." + parNum;
	let dotClass = ".dot" + parNum;

	$(dotClass).addClass("hover");
	$(parClass).addClass("parHoverActive");

	drawPencil(parNum);
};

let notHoverPar = (parNum) => {
	let parClass = "." + parNum;
	let dotClass = ".dot" + parNum;


	if ($("#parEditOptions").length) {
			
			if ($("#parEditOptions").is(":hover") === true) {
				console.log("hovering Pencil")
			} else {
				$("#parEditOptions").remove();
				$(parClass).attr({
					onmouseover : "",
					onmouseout  : ""
				});
			}
		
	}

	$("#editDatPencil")
	$(dotClass).removeClass("hover");
	$(parClass).removeClass("parHoverActive");
	

};

let pencilHovered = (parNum) => {
	let parClass = "." + parNum;
	hoverPar(parNum)
	//$(dotClass).addClass("hover");
}

let pencilNotHovered = (parNum) => {
	let parClass = "." + parNum;

	if ($(parClass).hasClass("parHoverActive")) {
		hoverPar(parNum);
	} else {
		notHoverPar(parNum);
	}
}
/*****************************
 * Delete Panel With Warning *
 *****************************/
let deleteSelectedPanel = (panelNum) => {
	panelNum = "." + panelNum;
	$(panelNum).attr("data-aos", "fade-out-screen");

	setTimeout(deletedSelectedPanel, 1000);
	return (panelNumDel = panelNum);
};

let deletedSelectedPanel = () => {
	console.log(panelNumDel + "deleting");
	//panelNum = "." + panelNum;
	$(panelNumDel).css("display", "none");
	console.log($(panelNumDel));
};

/*********************************************************
* Reusable Function For "Enter" Keypress event listener *
*********************************************************/
function ifEnterIsPressed(elementPicked, funcCallback) {
	elementPicked.addEventListener("keyup", (event) => {
		if (event.keyCode === 13) {
			event.preventDefault();
			funcCallback();
		}
	});
}
