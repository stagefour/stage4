
(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var c = 0;
var firstLetter = " ";

for (c; c<names.length; c++) {
  firstLetter = names[c].charAt(0);
  firstLetter = firstLetter.toLowerCase();

  if (firstLetter === "j") {
   byeSpeaker.speak(names[c])
  } else {
   helloSpeaker.speak(names[c])
  };
}
})()