var storeDrumButton = document.querySelectorAll(".Drum-keys").length;

for (var i = 0; i < storeDrumButton; i++) {
  
  document.querySelectorAll(".Drum-keys") [i].addEventListener("click", function () {

   
      var buttons = this.innerHTML;
      
      makesound(buttons);
      animation(buttons);
  
      
    }
    )
    }
    


document.addEventListener("keydown",function(){
  var keyboard=event.key;
  makesound(keyboard);
  animation(keyboard);
      

     
  }
)



function makesound(keys){
  switch (keys) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

      break;

    case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

      break;

    case "s":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();

      break;

    case "d":
      var snare = new Audio("sounds/snare.mp3");
     snare.play();

      break;

    case "j":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;

    case "k":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      break;

    case "l":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

      break;

    default:
      (button);
      break;
}
}




function animation(currentkeys){
  
 var activeButton=document.querySelector("."+currentkeys)
 
 activeButton.classList.add("pressed")
 setTimeout( function(){

activeButton.classList.remove("pressed");
(150);

 })
  
}




