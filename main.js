function changeRed() {
	document.getElementById("hello").style.backgroundColor
	document.getElementById("hello").inner = "RED";
}




function pizza() {
	document.getElementById("hello").innerHTML = "pizza";
}

function colorblue() {
	document.getElementById("hello").style.backgroundColor = "blue";
}

function time() {
	document.getElementById("hello").innerHTML = "time";
}

function colorRed() {
	document.getElementById("hello").style.backgroundColor = "red";
}

function cool() {
	document.getElementById("hello").innerHTML = "cool";
}

function colorGreen() {
	document.getElementById("hello").style.backgroundColor = "Green";
}



document.getElementById("button").addEventListener("click", pizza);
pizza();
document.getElementById("button").addEventListener("click", colorblue);
colorblue();
document.getElementById("button").addEventListener("click", time);
document.getElementById("button").addEventListener("click", colorRed);
document.getElementById("button").addEventListener("click", cool);
document.getElementById("button").addEventListener("click", colorGreen);