var numOfBoxes = document.querySelectorAll(".box").length;
// var ar = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];

// Detecting button click
for (var i = 0; i < numOfBoxes; i++) {
  document.querySelectorAll(".box")[i].addEventListener("click", function() {
    var innerWord = this.querySelector("h2").innerHTML; //this corresponds to the button clicked
    // alert(innerWord);
    playSound(innerWord);
    animation(innerWord);
  });

}

// Adding keyboard press event listener to the entre document
document.addEventListener("keypress", function(event) {
  // console.log(event);
  playSound(event.key);
  animation(event.key);
});

//function which handles both the eventListeners
function playSound(keyChar) {
  var audio;
  switch (keyChar) {
    case 'w':
      audio = new Audio("sounds/crash.mp3");
      break;
    case 'a':
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case 's':
      audio = new Audio("sounds/snare.mp3");
      break;
    case 'd':
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case 'j':
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case 'k':
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case 'l':
      audio = new Audio("sounds/tom-4.mp3");
      break;
  }
  audio.play();
}

//animation adding function
function animation(keychar) {
  var pressedBtn = document.querySelector("." + keychar);
  pressedBtn.classList.add("flash");
  //timeout function for adding animation like effect
  setTimeout(function(){
    pressedBtn.classList.remove("flash");
  },200);
}
