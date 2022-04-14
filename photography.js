var b1 = document.getElementById("jolla");
var b2 = document.getElementById("lines");
var b3 = document.getElementById("tennis");
var b4 = document.getElementById("minnesota");
var b5 = document.getElementById("georgia");
var b6 = document.getElementById("inhale");
var b7 = document.getElementById("portrait 80s");
var b8 = document.getElementById("sunday motel");
var b9 = document.getElementById("skate board");
var b10 = document.getElementById("butterfly");
var image = document.getElementById("photos");

function changePhoto1() {
	image.src = "images/la jolla.jpg";	
}
function changePhoto2() {
	image.src = "images/Lines.jpg";
}
function changePhoto3() {
	image.src = "images/Tennis in Practice.jpg";
}
function changePhoto4() {
	image.src = "images/minnesota.jpg";
}
function changePhoto5() {
	image.src = "images/georgia.jpg";
}
function changePhoto6() {
	image.src = "images/inhale.jpg";
}
function changePhoto7() {
	image.src = "images/portrait 80s.jpg";
}
function changePhoto8() {
	image.src = "images/sunday motel.jpg";
}
function changePhoto9() {
	image.src = "images/skate board.jpg";
}
function changePhoto10() {
	image.src = "images/butterfly.jpg";
}

b1.addEventListener("click", changePhoto1);
b2.addEventListener("click", changePhoto2);
b3.addEventListener("click", changePhoto3);
b4.addEventListener("click", changePhoto4);
b5.addEventListener("click", changePhoto5);
b6.addEventListener("click", changePhoto6);
b7.addEventListener("click", changePhoto7);
b8.addEventListener("click", changePhoto8);
b9.addEventListener("click", changePhoto9);
b10.addEventListener("click", changePhoto10);





