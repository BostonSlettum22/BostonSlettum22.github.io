var count = 0; 

function minusOne() {
	count = count -1;
	document.getElementById("total").innerHTML = count;
	
		
		if (count == 68) {
		document.getElementById("total").style.color = "NICE";
	}

}

function addOne() {
	count = count +1;
	document.getElementById("total").innerHTML = count;
	
	if (count == 68) {
		document.getElementById("total").style.color = "NICE";
	}
}

function addTen() {
	count = count +10;
	document.getElementById("total").innerHTML = count;
}

function minusTen() {
	count = count -10;
	document.getElementById("total").innerHTML = count;
}

function multiTen() {
	count = count *10;
	document.getElementById("total").innerHTML = count;
}

function divideTen() {
	count = count /10;
	document.getElementById("total").innerHTML = count;
}

function add100() {
	count = count *100;
	document.getElementById("total").innerHTML = count;
}


document.getElementById("minus").addEventListener("click",minusOne);
minusOne()
document.getElementById("plus").addEventListener("click",addOne);
addOne()
document.getElementById("10").addEventListener("click",addTen);
addTen()
document.getElementById("minus10").addEventListener("click",minusTen);
minusTen()
document.getElementById("times10").addEventListener("click",multiTen);
multiTen()
document.getElementById("divide10").addEventListener("click",divideTen);
divideTen()
document.getElementById("plus100").addEventListener("click",add100);
add100()


