pathToData = "chatTranscript.lines";

var updateCallback =function(data) {
console.log("***updateCallback****");// Do something with the returning data// 
console.log(JSON.stringify(data));// 
var path = data.key;
var value = data.newValue;
var index = value.length - 1;
var messageObj =value[index];
if (messageObj.source=== "visitor") {
fetch("https://www.omdbapi.com?t="+ messageObj.text +"&apikey=a5599b52")
.then(response=> response.json())
.then(res=> {
// console.log(res)
if (res.Response=== "True") {
	document.getElementById("Title").innerHTML = res.Title;
	document.getElementById("Year").innerHTML = res.Year;
	document.getElementById("Rated").innerHTML = res.Rated;
	document.getElementById("Actors").innerHTML = res.Actors;
	document.getElementById("Genre").innerHTML = res.Genre;
	document.getElementById("Plot").innerHTML = res.Plot;
	document.getElementById("Released").innerHTML = res.Released;
	document.getElementById("Runtime").innerHTML = res.Runtime;
	document.getElementById("Director").innerHTML = res.Director;
	document.getElementById("Awards").innerHTML = res.Awards;
	document.getElementById("imdbRating").innerHTML = res.imdbRating;
} else {
appDiv.innerHTML= res.Error;
}
}).catch(err=> {
console.log(err);
});
}
// called each time the value is updated.
// If there's an existing value when bind is called - this callback
// will be called with the existing value};
const notifyWhenDone =function(err) {
if (err){
// Do something with the error
console.log("error",err);
}
// called when the bind is completed successfully,
// or when the action terminated with an error.
};
lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData,updateCallback, notifyWhenDone);



