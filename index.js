var flowers = ["daisys", "tulips", "roses", "orchids", "lilys", "carnations"];
var words = $('#origionalMessage');
var button = $('button');

//for (var i = 0; i <= 5; i++) {
//console.log("Cool, my favorite flowers are " + (flowers[i]) + "!");
//}

button.on("click",doSomething);
function doSomething() {
  var random = Math.random() * flowers.length;
  var rounded = Math.floor(random);
  var idea = flowers[rounded];
  words.text(`Cool, my favorite flowers are ${idea}!`);

}
