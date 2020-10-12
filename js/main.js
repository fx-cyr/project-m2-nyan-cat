// We create an instance of the Engine class. Looking at our index.html,
// we see that it has a div with an id of `"app"`
const gameEngine = new Engine(document.getElementById("app"));

// keydownHandler is a variable that refers to a function. The function has one parameter
// (does the parameter name matter?) which is called event. As we will see below, this function
// will be called every time the user presses a key. The argument of the function call will be an object.
// The object will contain information about the key press, such as which key was pressed.
const keydownHandler = (event) => {
  // event.code contains a string. The string represents which key was press. If the
  // key is left, then we call the moveLeft method of gameEngine.player (where is this method defined?)
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft();
  }

  // If `event.code` is the string that represents a right arrow keypress,
  // then move our hamburger to the right
  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight();
  }
};
// We add an event listener to document. document the ancestor of all DOM nodes in the DOM.
let startButton = document.getElementById("startGame");
startButton.style.position = "absolute";
startButton.style.background =
  "linear-gradient(to bottom right, #ff0000 0%, #ff9900 100%)";
startButton.innerText = "START";
startButton.style.border = "1px solid white";
startButton.style.fontFamily = "Lato";
startButton.style.color = "white";
startButton.innerText = "Play";
startButton.style.borderRadius = "28px";
startButton.style.fontSize = "16px";
startButton.style.width = "100px";
startButton.style.height = "50px";
startButton.style.top = "270";
startButton.style.left = "280";
startButton.style.zIndex = "150";

let gameIntro = document.getElementById("gameIntro");
gameIntro.classList.add("blink_me");

gameIntro.style.position = "absolute";
gameIntro.style.top = "40";
gameIntro.style.left = "180";
gameIntro.style.zIndex = "850";

let startGame = (event) => {
  gameEngine.gameLoop();
  startButton.removeEventListener("click", startGame);
  startButton.style.display = "none";
  gameIntro.style.display = "none";
};

startButton.addEventListener("click", startGame);
document.addEventListener("keydown", keydownHandler);
