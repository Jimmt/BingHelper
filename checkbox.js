// chrome.storage.sync.clear();
document.addEventListener('DOMContentLoaded', function () {
	var enableButton = document.getElementById("enableButton");
	var disableButton = document.getElementById("disableButton");
	enableButton.addEventListener("click", enable);
	disableButton.addEventListener("click", disable);
});

function changeHandler(){ 
	saveEnabled();
}

function saveEnabled(){
	chrome.storage.sync.set({"enabled": runbox.checked}, function() {
	});
}