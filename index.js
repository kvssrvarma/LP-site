var updateCallback = function(data) {
console.log("***updateCallback****");
console.log(JSON.stringify(data));
var path = data.key;
var value = data.newValue;
var index = value.length - 1;
let queryObj = value[index];
console.log("***index****", index);
console.log("***index****", JSON.stringify(movieObj));
if (queryObj.source === "visitor") {
let updatedQueryObj = queryObj.replace(/< >/g, "<>");
document.getElementById("queryText").innerHTML = updatedQueryObj;
}
};
var readQuery = function(){
	alert("hi");
	//alert(document.getElementsByName("queryText").value);
	let queryText = document.getElementById("queryText").value;
	alert(queryText);
	let changedString = queryText.replace(/<>/g, "< >");
	alert(changedString);
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
}
lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData,updateCallback, notifyWhenDone);
