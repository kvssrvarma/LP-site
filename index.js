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
if (queryObj.source === "visitor") {
let queryObjText = queryObj.text;
let updated = false;
if(queryObjText.includes("LPGT")){
updatedQueryObjText = queryObjText.replace(/LPGT/g, ">");
updated = true;
if(updatedQueryObjText.includes("LPLT")){
updatedQueryObjText = updatedQueryObjText.replace(/LPLT/g, "<");
}
}
else if(queryObjText.includes("LPLT")){
updatedQueryObjText = queryObjText.replace(/LPLT/g, "<");
updated = true;
}
	
var readQuery = function(){
	let queryText = document.getElementById("queryText").value;
	let changedString = queryText.replace(/>/g, "LPGT");
	changedString = changedString.replace(/</g, "LPLT");
	

	var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
        var data = {text: changedString};
	lpTag.agentSDK.command(cmdName, data);
	
}

lpTag.agentSDK.init({});
