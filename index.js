pathToData = "chatTranscript.lines";

var updateCallback = function(data) {
console.log("***updateCallback****");
console.log(JSON.stringify(data));
var path = data.key;
var value = data.newValue;
var index = value.length - 1;
let queryObj = value[index];
console.log("***index****", index);
console.log("***index****", JSON.stringify(queryObj));
if (queryObj.source === "visitor") {
let queryObjText = queryObj.text;
let updated = false;
if(queryObjText.includes("gt1")){
let updatedQueryObjText = queryObjText.replace(/gt1/g, ">");
updated = true;
if(updatedQueryObjText.includes("lt1")){
let updatedQueryObjText = updatedQueryObjText.replace(/lt1/g, "<");
}
}
else if(queryObjText.includes("lt1")){
let updatedQueryObjText = queryObjText.replace(/lt1/g, "<");
updated = true;
}

if(updated){
document.getElementById("updatedQuery").innerHTML = updatedQueryObjText;
}
}
};
var readQuery = function(){
	let queryText = document.getElementById("queryText").value;
	let changedString = queryText.replace(/>/g, "gt1");
	changedString = changedString.replace(/</g, "lt1");
	
	var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the command is completed successfully,
        // or when the action terminated with an error.
    };
	var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
    	var data = {text: changedString};
	lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
	lpTag.hooks.push({
	name: "BEFORE_SEND_VISITOR_LINE",
	callback: function(options) {
	}
});
}
var notifyWhenDone =function(err) {
if (err){
// Do something with the error
console.log("error",err);
}
// called when the bind is completed successfully,
// or when the action terminated with an error.
};
lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData,updateCallback, notifyWhenDone);
