var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var q7 = document.getElementById("q7");
var q8 = document.getElementById("q8");
var q9 = document.getElementById("q9");
var q10 = document.getElementById("q10");
var submit = document.getElementById("submit");
var score = document.getElementById("score");
var result = 0;

function calculate() {
	if (q1.value == "to magnify objects"){
		result = result + 1;
	}
	if (q2.value == "60 fps"){
		result = result + 1;
	}
	if (q3.value == "4:3"){
		result = result + 1;
	}
	if (q4.value == "Apature"){
		result = result + 1;
	}
	if (q5.value == "photoshop"){
		result = result + 1;
	}
	if (q6.value == "Microsoft"){
		result = result + 1;
	}
	if (q7.value == "Log preset"){
		result = result + 1;
	}
	if (q8.value == "Shutter Speed"){
		result = result + 1;
	}
	if (q9.value == "37"){
		result = result + 1;
	}
	if (q10.value == "it makes the bokeh circles more round"){
		result = result + 1;
}

q1.addEventListener("click", calculate);
q2.addEventListener("click", calculate);
q3.addEventListener("click", calculate);
q4.addEventListener("click", calculate);
q5.addEventListener("click", calculate);
q6.addEventListener("click", calculate);
q7.addEventListener("click", calculate);
q8.addEventListener("click", calculate);
q9.addEventListener("click", calculate);
q10.addEventListener("click", calculate);
submit.addEventListener("click", calculate);
score.addEventListener("click", calculate);
result.addEventListener("click", calculate);



