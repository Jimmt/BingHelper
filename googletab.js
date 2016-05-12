// alert(document.getElementById("lst-ib").value);
console.log(localStorage.getItem("enabled"));
if(localStorage.getItem("enabled")){
	chrome.runtime.sendMessage({type: "Google", searchTerm: document.getElementById("lst-ib").value}, function(response) {
		console.log(response.msg);
	});
}
// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//   console.log(response.msg);
// });