pathToData = "chatTranscript.lines";

var updateCallback = function(data) {
console.log("***updateCallback****");
console.log(JSON.stringify(data));
var path = data.key;
var value = data.newValue;
var index = value.length - 1;
let queryObj = value[index];
let updatedQueryObjText = "";
console.log("***index****", index);
console.log("***index****", JSON.stringify(queryObj));
};

var queryString = window.location.search;
console.log(queryString);
var urlParams = new URLSearchParams(queryString);
var customerName = urlParams.get('CustomerName');
//alert(customerName);
let userText = "Please verify your Express Payment information is correct: </br> Your Name:" +customerName+ " </br>Your Payment Amount: PAYMENT </br>Your Payment Posting Date: PAYMENTDATE";

//if(customerName != ""){
document.getElementById("userDetails").innerHTML = userText;
//}

var readQuery = function(){
	//let queryText = document.getElementById("userDetails").value;
	var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
	var data = {text: userText};
    lpTag.agentSDK.command(cmdName, data);
	
}

lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData,updateCallback);
