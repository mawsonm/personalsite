document.body.onkeyup = function(event){
	console.log(event.keyCode);
	if(event.keyCode == 68){
		document.body.classList.toggle("dark");
	}
}