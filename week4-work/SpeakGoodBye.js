(function (window){
var speakWord = "Good Bye";
var byeSpeaker = new Object ();
byeSpeaker.speak = function speak(name) {
	console.log(speakWord + " " + name)};
window.byeSpeaker = byeSpeaker;
})(window);

