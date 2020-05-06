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

//turned OFF

localStorage.key("websiteTheme");
console.log("Current Website Theme is Set as " + localStorage.getItem("websiteTheme") + " mode");

var switchText = document.getElementById("innerSwitch");
var navBar = document.getElementsByTagName("nav");
var introDiv = document.querySelectorAll(".introductions");
var spotifySnippet = document.getElementById("spotifySnippet");

/*
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
*/

/*********
 * Pickr *
 *********/

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
	console.log("buttonClickde");
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
	let uniqueHeadingClass = "newHeading" + uniqueNum;
	var uniqueParagraphClass = "newParagraph" + uniqueNum;
	let parDivClass = "div_newParagraph" + uniqueNum;
	let par = uniqueParagraphClass;
	let headingType = `<${headingPicked}></${headingPicked}>`;
	let headingDiv = `<div class="${uniqueHeadingClass}Div ${headingPicked}"> </div>`;
	var deletePanelImg = $("<img>");
	let dotMenu = $(
		//prettier-ignore
		`<div class='dot-menu dot${par}'onmouseover="dotHovered('${par}')" onmouseout="dotNotHovered('${par}') onclick="dotClicked('${par}')"><img src='svg/dot-fill.svg'  id='dot-menu' class='dot1'><img src='svg/dot-fill.svg' id='dot-menu' class='dot2'><img src='svg/dot-fill.svg' id='dot-menu' class='dot3'></div><br>`
	);

	//New Div
	var newCard = $("<div></div>").addClass(uniqueDivClass);

	//Adds Heading to The Div
	//prettier-ignore
	let newHeading = $(headingType).addClass(uniqueHeadingClass);

	//prettier-ignore
	newHeading = $(headingType).attr({
		onmouseover : `headingHovered('${uniqueHeadingClass}')`,
		onmouseout  : `headingNotHovered('${uniqueHeadingClass}')`,
		onchange: `headingChanged('${uniqueHeadingClass}')`
	}).addClass(`panelHeadings ${uniqueHeadingClass}`);

	$(newHeading).text(headingText);

	let newHeadingDiv = $(headingDiv).append(newHeading);

	$(newCard).append(newHeadingDiv);

	//Adds 3 dot menu after the heading for paragraph edit
	$(dotMenu).insertAfter(newHeadingDiv);

	//Adds Paragraph to The Div
	let parDiv = $("<div>").addClass(parDivClass);
	let panelParagraph = $("<p>").addClass(uniqueParagraphClass);

	$(parDiv).append(panelParagraph);
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
			onclick: `deleteSelectedPanel('newCard${uniqueNum}')`,
			src: "svg/exit_icon.svg"

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
	savePageFormat();
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
function headingHovered(headingNum) {
	let headingClass = "." + headingNum;

	/* prettier-ignore */
	let x = $(`<div class="headingEditOptions options${headingNum}">`+

	`<img src="svg/pencil.svg" id="headingPencil" onclick="editCurrentHeading('${headingNum}')">` +

	`<img src="svg/tools.svg" id="headingOthers"  onclick="headingOtherOptions('${headingNum}')">` +

	`</div>`)
	console.log(x);

	if ($(`.options${headingNum}`).length === 0) {
		$(headingClass).append(x);
	}
}

function headingNotHovered(headingNum) {
	if ($(`.options${headingNum}`).is(":hover") == true) {
		console.log("nothing really happened");
	} else {
		console.log("it is done");
		$(`.options${headingNum}`).remove();
	}
}

function editCurrentHeading(headingNum) {
	let headingClass = `.${headingNum}`;
	let headingDivClass = `.${headingNum}Div`;
	let headingText = $(headingClass).text();
	let headingWidth = $(headingClass).width() + 5;
	console.log(headingWidth);
	let headingHeight = $(headingClass).height();
	let headingFontSize = $(headingClass).css("font-size");
	let headingFontFamily = $(headingClass).css("font-family");

	let newHeadingInput = $(
		`<textarea name="New Heading Input" class="newPanelHeadingInput headingInput${headingNum}" onclick="this.select(); this.onclick=null;">${headingText}</textarea> `
	).css({
		width         : headingWidth,
		height        : headingHeight,
		"font-family" : headingFontFamily,
		"font-size"   : headingFontSize
	});

	let headingConfirm = $(
		`<span class="btn confirmHeadingChange confirm${headingNum}" onclick="currentHeadingChanged('${headingNum}')">Confirm Heading Change</span>`
	);

	$(headingDivClass).append(newHeadingInput);
	$(headingConfirm).insertAfter(newHeadingInput);
	$(headingClass).remove();
}

function currentHeadingChanged(headingNum) {
	let headingClass = `.${headingNum}`;
	let headingInputClass = `.headingInput${headingNum}`;
	let headingInputConfirm = `.confirm${headingNum}`;
	let newHeadingText = $(headingInputClass).val();
	let headingDivClass = `.${headingNum}Div`;
	let headingType = $(headingDivClass).attr("class");
	let d = headingType.match(/h[0-9]+/);
	let newPanelHeading = $(`<${d}></${d}>`);

	console.log(`${d} ${newPanelHeading}`);

	$(newPanelHeading).addClass(`${headingNum} panelHeadings`).text(newHeadingText);

	$(newPanelHeading).attr({
		onmouseover : `headingHovered('${headingNum}')`,
		onmouseout  : `headingNotHovered('${headingNum}')`,
		onchange    : `headingChanged('${headingNum}')`
	});

	$(headingInputClass).remove();
	$(headingInputConfirm).remove();

	$(headingDivClass).append(newPanelHeading);
	savePageFormat();
}

/**************************
 * Paragraph Edit Options *
 **************************/
let drawPencil = (parNum) => {
	let parClass = "." + parNum;
	//let parDivClass = ".div_" + parNum;
	/* prettier-ignore */
	let x = $(`<div id="parEditOptions">` +
	`<div id="editDatPencil" onmouseover="pencilHovered('${parNum}')" onmouseout="pencilNotHovered('${parNum}')" >` +

	`<img src='svg/pencil.svg' id='pencilEdit'  onmouseover="pencilHovered('${parNum}')" onmouseout="pencilNotHovered('${parNum}')" onclick="editCurrentParagraph('${parNum}')">` + 

	`<img src='svg/tools.svg' id='otherEdit' onmouseover="toolsHovered('${parNum}')" onmouseout="toolsNotHovered('${parNum}')" onclick="otherParOptions('${parNum}')">` +
	
	`<img src='svg/copy_icon.svg' id='parCopy' onmouseover="copyHovered('${parNum}')" onmouseout="copyNotHovered('${parNum}')" onclick="copyCurrentParagraph('${parNum}')">` +

	`</div></div>`);

	x = x.css("z-index", "1000");

	//makes sure to only make 1 div
	if ($("#pencilEdit").length) {
	} else {
		$(x).insertBefore(parClass);
	}
};

/*********************************
 * 3 Dot on top of the paragraph *
 *********************************/

var dotHovered = (parNum) => {
	let parClass = "." + parNum;
	console.log("dot hovered");

	$(parClass).addClass("dotHoverActive");
	$(parClass).attr({
		onmouseover : `hoverPar('${parNum}')`,
		onmouseout  : `notHoverPar('${parNum}')`
	});

	drawPencil(parNum);
};

let dotNotHovered = (parNum) => {
	let parClass = "." + parNum;

	$(parClass).removeClass("dotHoverActive");

	$("#parEditOptions").remove();
};

function dotClicked(parNum) {
	let parClass = `.${parNum}`;

	$(parClass).addClass("dotHoverActive");
	$(parClass).attr({
		onmouseover : `hoverPar('${parNum}')`,
		onmouseout  : `notHoverPar('${parNum}')`
	});
}

/*******************************
 * When hovering the paragraph *
 *******************************/

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

	if ($(dotClass).is(":hover")) {
		dotHovered();
	}

	if ($("#parEditOptions").length) {
		if ($("#parEditOptions").is(":hover") === true) {
		} else {
			$(parClass).removeClass("dotHoverActive");
			$("#parEditOptions").remove();
			$(parClass).attr({
				onmouseover : "",
				onmouseout  : ""
			});
		}
	}

	$("#editDatPencil");
	$(dotClass).removeClass("hover");
	$(parClass).removeClass("parHoverActive");
};

/************************
 * When hovering pencil *
 ************************/

let pencilHovered = (parNum) => {
	let parClass = "." + parNum;
	hoverPar(parNum);
	//$(dotClass).addClass("hover");
};

let pencilNotHovered = (parNum) => {
	let parClass = "." + parNum;

	if ($(parClass).hasClass("parHoverActive")) {
		hoverPar(parNum);
	} else {
		notHoverPar(parNum);
	}
};

/**********************
 * Edit Text on Panel *
 **********************/
function editCurrentParagraph(parNum) {
	$("#parEditOptions").remove();
	dotNotHovered(parNum);
	let parClass = `.${parNum}`;
	let parDivClass = `.div_${parNum}`;
	let currentParText = $(parClass).text();
	let parHeight = $(parClass).height();
	let parWidth = $(parClass).width();
	let parFontSize = $(parClass).css("font-size");
	let parFontFamily = $(parClass).css("font-family");
	let parLineHeight = $(parClass).css("line-height");

	let inputConfirm = $(
		`<span class="btn confirmParChange confirm${parNum}" onclick="currentParagraphChanged('${parNum}')">Confirm Paragraph Change</span>`
	);

	let newParInput = $(
		`<textarea name="New Paragraph Input" id="newPanelText" class="input${parNum}" maxlength="1500" onclick="this.select(); this.onclick=null;">${currentParText}</textarea>`
	).css({
		height             : parHeight,
		width              : parWidth,
		"font-size"        : parFontSize,
		"font-family"      : parFontFamily,
		"line-height"      : parLineHeight,
		"background-color" : "rgba(25, 25, 25, 0.5)",
		color              : "white"
	});

	$(parClass).remove();

	//makes sure it only makes 1
	if ($(`.input${parNum}`).length === 0) {
		$(parDivClass).append(newParInput);
		$(inputConfirm).insertBefore(`.input${parNum}`);
		$(`.input${parNum}`).click();
	}
}

//Text Changed
function currentParagraphChanged(parNum) {
	let parDivClass = `.div_${parNum}`;
	let panelParagraph = $("<p>").addClass(parNum);
	let inputText = $(`.input${parNum}`).val();
	let newText = $(panelParagraph).text(inputText);
	console.log(inputText);
	console.log("Hello" + $(newText).text());

	$(`.input${parNum}`).remove();
	$(`.confirm${parNum}`).remove();

	$(parDivClass).append(newText);
	$(`.dot${parNum}`).removeClass("hover");
	savePageFormat();
}

/***************
 * Copy Button *
 ***************/

function copyHovered(parNum) {
	hoverPar(parNum);
}

function copyNotHovered(parNum) {
	let parClass = `.${parNum}`;

	if ($(parClass).hasClass("parHoverActive")) {
		hoverPar(parNum);
	} else {
		notHoverPar(parNum);
	}
}

function copyCurrentParagraph(parNum) {
	let parClass = `.${parNum}`;
	let simpleRegex = /[0-9]+/;
	let panelNum = parNum.match(simpleRegex);
	let x = panelNum + 1;

	let paragraphText = $(parClass).text();
	let dummyInput = $(`<input id="dummyInput">`).val(paragraphText).appendTo("body").select();

	document.execCommand("copy");
	$("#dummyInput").remove();

	alert(`Copied Text Paragraph From Panel ${x}`);
	parNotHovered();
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
	$(panelNumDel).remove();
	console.log($(panelNumDel));
	savePageFormat();
};

/****************
 * Test chamber *
 ****************/
function savePageFormat() {
	let x = document.getElementById("newPanelContainer");
	let newPageFormat = x.innerHTML;
	let g = localStorage.getItem("pageFormat");
	localStorage.key("pageFormat");
	localStorage.setItem("pageFormat", newPageFormat);
	console.log(localStorage.key("pageFormat"));
}



function applyPageFormat() {
	let x = document.getElementById("newPanelContainer");
	let g = localStorage.getItem("pageFormat")
	console.log(g)
	$(x).append(g);
}


if (localStorage.getItem("pageFormat") == null || localStorage.getItem("pageFormat") == "") {
	savePageFormat();
} else {
	applyPageFormat();
}


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
