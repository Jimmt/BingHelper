// alert(document.getElementById("lst-ib").value);


chrome.runtime.sendMessage({type: "Google", searchTerm: document.getElementById("lst-ib").value}, function(response) {
});

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//   console.log(response.msg);
// });