var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomColorValue = document.getElementById("color");
var body = document.getElementById("gradient");
var generate = document.getElementById("generate");
var save = document.getElementById("save");


// copied from StackOverFlow
function getRandomColor () { 
    var AllowedLetters = '0123456789ABCDEF';
    var Color = '#';
    for (var i = 0; i < 6; i++ )
    {
        Color += AllowedLetters[Math.floor(Math.random() * 16)];
    }
    return Color;
}
// copied from StackOverFlow

function saveGradient() {
  alert(color1.value + ", " + color2.value);
}

function getRandomGradient() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}


getRandomGradient();

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

generate.addEventListener("click", getRandomGradient);

save.addEventListener("click", saveGradient);