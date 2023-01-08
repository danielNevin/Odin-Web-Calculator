/* Declaring variable array for calculation and tickers for changing function behaviour */
let processArray = ["",""];

let displayState = 0;

let clickState = 0;

let returnState = 0;

/* Declaring basic mathematci functions (avoiding math() stuff) */

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
	return a * b;
};

function divide(a, b) {
	return a / b;
};

/* Takes string from button div and writes it to the display div on click */

function onClickString(btn) {
	if (displayState >= 1) {
		document.getElementById("calcDisplay").innerHTML = "";
		displayState--;
		var theDiv = document.getElementById("calcDisplay");
		var content = document.createTextNode(btn.textContent || btn.innerText);
		theDiv.appendChild(content);
	} else {
		var theDiv = document.getElementById("calcDisplay");
		var content = document.createTextNode(btn.textContent || btn.innerText);
		theDiv.appendChild(content);
	}
}

/* Sets all variables and tickers to 0 or "" to clear calculator memory */

function onClickClear() {
	document.getElementById("calcDisplay").innerHTML = "";
	processArray.splice(0, 1, 0);
	processArray.splice(1, 1, 0);
	tempValue = 0;
	clickState = 0;
	displayState = 0;
	returnState = 0;
}

/* Calculates the product/sum of the previously given operator and variables to emulate calculator return */

function onClickReturn() {
	if (returnState < 1) {
		processArray.splice(1, 1, parseInt(document.getElementById("calcDisplay").innerHTML));
		tempValue = operation(processArray[0], processArray[1]);
		document.getElementById("calcDisplay").innerHTML = tempValue;
		processArray.splice(0, 1, tempValue);
		displayState++;
		returnState++;
	} else {
		tempValue = operation(processArray[0], processArray[1]);
		document.getElementById("calcDisplay").innerHTML = tempValue;
		processArray.splice(0, 1, tempValue);
		displayState++;
		returnState++;
	};
}

/* Takes operator from button press and runs respective function to calculate sum/product */
/* Calculations from functions are stored in tempValue and written to the first position in the variable array */
/* clickState controls how the calculations are performed based on whether only the first array variable is calc'd, or if a calculation has already been done */

function operate(id) {
	if (clickState < 1) {
		processArray.splice(0, 1, parseInt(document.getElementById("calcDisplay").innerHTML));
		document.getElementById("calcDisplay").innerHTML = "";
		operation = id;
		clickState++;
	} else if (clickState >= 1) {
		if ((document.getElementById("calcDisplay").innerHTML == processArray[0]) && (processArray[1] > 0)) {
			processArray.splice(1, 1, processArray[1]);
			document.getElementById("calcDisplay").innerHTML = "";
			tempValue = operation(processArray[0], processArray[1]);
			operation = id;
			processArray.splice(0, 1, tempValue);
			document.getElementById("calcDisplay").innerHTML = parseInt(processArray[0]);
			displayState++;
		} else {
			processArray.splice(1, 1, parseInt(document.getElementById("calcDisplay").innerHTML));
			document.getElementById("calcDisplay").innerHTML = "";
			tempValue = operation(processArray[0], processArray[1]);
			operation = id;
			processArray.splice(0, 1, tempValue);
			document.getElementById("calcDisplay").innerHTML = parseInt(processArray[0]);
			displayState++;
		};
	};
}