pathToData = "visitorInfo.visitorName";

var userText;
var visitorName;
var consumerId;
var updateCallback = function(data) {
console.log("***updateCallback****");
console.log(JSON.stringify(data));
var path = data.key;
var value = data.newValue;
visitorName = value;
console.log("***visitorName****", visitorName);



//var queryString = window.location.search;
//console.log(queryString);
//var urlParams = new URLSearchParams(queryString);
//var customerName = urlParams.get('CustomerName');
//alert(customerName);
//userText = "Please verify your Express Payment information is correct: </br> Your Name:" +visitorName+ " </br>Your Payment Amount: PAYMENT </br>Your Payment Posting Date: PAYMENTDATE";

doNextCallback();

//if(customerName != ""){
document.getElementById("userDetails").innerHTML = userText;
//}
};


 var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the bind is completed successfully,
        // or when the action terminated with an error.
};
lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);

pathtoDataConsumer = "visitorInfo.visitorId";


var doNextCallback = function(){
	

///////////////////

var updateCallbackConsumer = function(data) {
console.log("***updateCallback****");
console.log(JSON.stringify(data));
var path = data.key;
var value = data.newValue;
consumerId = value;
console.log("***consumerId****", consumerId);



//var queryString = window.location.search;
//console.log(queryString);
//var urlParams = new URLSearchParams(queryString);
//var customerName = urlParams.get('CustomerName');
//alert(customerName);


//if(customerName != ""){

//}
userText = "Please verify your Express Payment information is correct: </br> Your Name:" +visitorName+ " </br>Your Payment Amount: "+consumerId+" </br>Your Payment Posting Date: PAYMENTDATE";
document.getElementById("userDetails").innerHTML = userText;
};


 var notifyWhenDoneConsumer = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the bind is completed successfully,
        // or when the action terminated with an error.
};
lpTag.agentSDK.bind(pathtoDataConsumer, updateCallbackConsumer, notifyWhenDoneConsumer);
}
//////////////////





//document.getElementById("userDetails").innerHTML = userText;

var readQuery = function(){
	//let queryText = document.getElementById("userDetails").value;
	var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
	var data = {text: userText};
    lpTag.agentSDK.command(cmdName, data);
	
}

lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData,updateCallback);
