var readQuery = function(){
	let queryText = document.getElementById("queryText").value;
	let changedString = queryText.replace(/>/g, "LPGT");
	changedString = changedString.replace(/</g, "LPLT");
	

	var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
        var data = {text: changedString};
	lpTag.agentSDK.command(cmdName, data);
	
}

lpTag.agentSDK.init({});
