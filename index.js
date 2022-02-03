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
	
var readQuery = function(){
	let queryText = document.getElementById("queryText").value;
	var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
    lpTag.agentSDK.command(cmdName, queryText);
	
}

lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData,updateCallback);
