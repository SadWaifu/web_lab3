function get_ready() {
	alert((confirm('Are you ready?')) ? '❤' : '☹');
}

function get_age() {
	var age = prompt('What is your age?', 10);
	
	if(isNaN(age)) {
		alert("Wrong! Not a number!");
	}
	else if(age >= 18) {
		alert("U are allowed to continue but I'm take no responsibility");
		alert("Good Luck!");
	}
	else {
		alert("You're still too young :c");
	}
}

function get_sqrt() {
	var num = document.getElementById('input_id').value;
	
	if(isNaN(num) || !num) {
		alert("Please enter a number");
	}
	else {
		alert(Math.sqrt(num));
	}
}