function checkpass() {
	if (document.getElementById("password").value == "password"){
	document.getElementById("access"). innerHTML = "access granted";
	}


	else{
		document.getElementsById("access").innerHTML = "access denied";
	}
}

document.getElementById("submit").addEventListener("click", checkpass);