
if(localStorage.getItem("enabled")){
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			console.log(request);
			document.getElementById("sb_form_q").value = request.searchTerm;
			document.getElementById("sb_form_go").click();
			sendResponse({ msg: "got this from the bing tab" });
		});}