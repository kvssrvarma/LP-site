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

	//calling the second method to read the second variable
	doNextCallback();
	document.getElementById("userDetails").innerHTML = userText;

};
//Can be used to handle error scenario
 var notifyWhenDone = function(err) {
	if (err) {
		// Do something with the error
	}
	// called when the bind is completed successfully,
	// or when the action terminated with an error.
};

lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);

//path to the second variable
pathtoDataConsumer = "visitorInfo.visitorId";

//Second callback function to retrieve second variable
var doNextCallback = function(){
	var updateCallbackConsumer = function(data) {
	console.log("***updateCallback****");
	console.log(JSON.stringify(data));
	var path = data.key;
	var value = data.newValue;
	consumerId = value;
	console.log("***consumerId****", consumerId);
	userText = "Please verify your Express Payment information is correct: </br> Your Name:" +visitorName+ " </br>Your Payment Amount: "+consumerId+" </br>Your Payment Posting Date: PAYMENTDATE";
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
//Function to copy text to chat window
var readQuery = function(){
	var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
	var data = {text: userText};
    lpTag.agentSDK.command(cmdName, data);
	
}

lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData,updateCallback);
