function talk() {
	var know ={
		"hi" : "hello enter the recipie name you are going to order",
		"bamboo chicken" : "good its nice selection, enter quantity:)",
		"1" : "ok enter your mobile number",
		"9390532606" : "order placed. we will contact you soon",
		"bye" : "have a nice day :)"

	};
	var user = document.getElementById('userbox').value;
	document.getElementById('chatlog').innerHTML = user + "<br>";
	if (user in know){
		document.getElementById('chatlog').innerHTML = know[user] + "<br>";
	}else{
		document.getElementById('chatlog').innerHTML = "sorry i didnot undeerstand <br>";
	}
}