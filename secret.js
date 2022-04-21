



function checkpass() {
	if (document.getElementById("password").value == "password"){
	document.getElementById("access"). innerHTML = "access granted";
	}


	else{
		document.getElementsById("access").innerHTML = "the password " +
		document.getElementById("password").value + "was the wrong password";
	}
}

document.getElementById("submit").addEventListener("click", checkpass);