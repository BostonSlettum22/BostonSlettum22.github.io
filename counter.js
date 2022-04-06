var count = 0; 

function minusOne() {
	count = count -1;
	document.getElementById("total").inner = count;
}

function addOne() {
	count = count -1;
	document.getElementById("total").inner = count;
}

document.getElementById("minus").addEventListener("click",minusOne);
minusOne()
document.getElementById("plus").addEventListener("click",addOne);
addOne()

