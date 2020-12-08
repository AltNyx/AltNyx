console.log("It's working");

let themeDot = document.getElementsByClassName("theme-dot");

for (let i = 0; i < themeDot.length; i++) {
	themeDot[i].addEventListener("click", function () {
		let mode = this.dataset.mode;
		setTheme(mode);
	});
}

function setTheme(mode) {
	if (mode === "white") {
		document.getElementById("theme-style").href = "default.css";
	} else if (mode === "blue") {
		document.getElementById("theme-style").href = "blue.css";
	} else if (mode === "purple") {
		document.getElementById("theme-style").href = "purple.css";
	}
}
