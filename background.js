// chrome.extension.onMessage.addListener(
// 	function(message, sender, sendResponse) { console.log("got message");
// 		if(message.type == "Bing"){
// 			localStorage.setItem("bingIndex", sender.tab.id);
// 			sendResponse({msg: "got bing tab index"});
// 		}
// 	}};



chrome.extension.onMessage.addListener(
	function(message, sender, sendResponse) {
		if(message.type === "Google"){
			chrome.tabs.query({url:"http://www.bing.com/*"}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {searchTerm: message.searchTerm}, function(response) {
					console.log(response.msg);
				});
			});
			sendResponse({ msg: "got search term from google tab" });
		} 
	}
	);
