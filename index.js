pathToData = "visitorInfo.visitorName";

var userText;
var visitorName;
var visitorId;

var updateCallback = function(data) {
	console.log("***updateCallback****");
	console.log(JSON.stringify(data));
	var path = data.key;
	var value = data.newValue;
	visitorName = value;
	console.log("***visitorName****", visitorName);

	//calling the second method to read the second variable
	doNextCallback();
	

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
pathtoDataVisitorId = "visitorInfo.visitorId";

//Second callback function to retrieve second variable
var doNextCallback = function(){
	var updateCallbackVisitorId = function(data) {
	console.log("***updateCallback****");
	console.log(JSON.stringify(data));
	var path = data.key;
	var value = data.newValue;
	visitorId = value;
	console.log("***visitorId****", visitorId);
	userText = "Please verify your Express Payment information is correct: </br> Your Name:" +visitorName+ " </br>Your Payment Amount: "+visitorId+"."
	document.getElementById("userDetails").innerHTML = userText;
};


 var notifyWhenDoneVisitorId = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the bind is completed successfully,
        // or when the action terminated with an error.
};
lpTag.agentSDK.bind(pathtoDataVisitorId, updateCallbackVisitorId, notifyWhenDoneVisitorId);
}
//Function to copy text to chat window
var readQuery = function(){
	var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
	var data = {text: userText};
    lpTag.agentSDK.command(cmdName, data);
	
}

lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData,updateCallback);
