document.querySelector(".btn").onclick = function() {validation()};


function validation() {

	var email = document.querySelector(".email-box").value;
	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	if (pattern.test(email)) {
		document.querySelector(".text").innerHTML = "";
	}
	else {
		document.querySelector(".text").innerHTML = "Please provide a valid email";
		document.querySelector(".email-box").className = "error-image";
		changeButton();
		return false;
	}
}


function changeButton(){
	document.querySelector(".btn").style.backgroundImage = "linear-gradient(135deg, hsl(0, 80%, 95%), hsl(0, 80%, 86%))";
	document.querySelector(".btn").style.boxShadow = "0 12px 10px 0 hsla(0, 36%, 70%, 0.5)";
}