var q1 = document.getElementById("q1");
var q1result = document.getElementById("q1result");
var s1 = document.getElementById("s1");

function checkq1(){
	if (q1.value == "basket ball"){
		q1result.innerHTML = "correct";
	}
	
	else{
		document.getElementById("q1result").innerHTML = "incorrect"
	}
}
	s1.addEventListener("click", checkq1);
	
