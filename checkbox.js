document.querySelector('#runbox').checked = localStorage.getItem("enabled");
document.addEventListener('DOMContentLoaded', function () {
	var runbox = document.querySelector('#runbox')
	runbox.addEventListener('change', changeHandler);
});

function changeHandler(){
	localStorage.setItem("enabled", runbox.checked);
	console.log(localStorage.getItem("enabled"));
}