// var tl = gsap.timeline({yoyo: true});
// tl.to("#square", {x: "20px", duration: 1, ease: "power1.inOut"});
// tl.to("#square", {y: "100px", height: "100px", width: "100px", 
//   duration: 1, ease: "power1.inOut"});
//   tl.to("#square", {x: "-100px", y: "100px", height: "75px", width: "75px", 
//   rotation: "45deg", duration: 1, ease: "power1.inOut"});

// var text = gsap.timeline();
// text.from("#text1", {y: "100%", duration: 1, ease: "power1.inOut"});

const paintingNameText = document.getElementById("paintingName");
const transitionIn = document.getElementById("transitionIn");


document.addEventListener("DOMContentLoaded", function(event) { 
  gsap.from("#root", {duration: 1, opacity: 0});
});




var intervalRewind;

function onHoverVideo(element, name) {
  element.currentTime = 0;
  element.play();
  clearInterval(intervalRewind);
  // element.play();

  paintingNameText.textContent = name;
  paintingTL.play();
  console.log("HOVER")
}

function onMouseLeave(element) {
  // element.currentTime = 0;
  paintingTL.reverse();
  intervalRewind = setInterval(function(){
    element.pause();
    element.currentTime -= 0.1
    if(element.currentTime == 0){
        clearInterval(intervalRewind);
    }
  },25);
}

function onMouseClick(element, name) {
  transitionIn.play();
  console.log("YES")
  setTimeout("window.location.href = 'turumba.html';", 3000);
}

paintingTL = gsap.timeline({paused:true});
paintingTL.from(".paintingDescription", {opacity: 0, x: "-=100px", duration: 1, ease: "power1.inOut"});