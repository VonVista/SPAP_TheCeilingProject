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

const paintings = document.getElementsByClassName("painting")


document.addEventListener("DOMContentLoaded", function(event) { 
  gsap.from("#root", {duration: 1, opacity: 0});
});

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function triggerPaintings() {
  await sleep(3000);
  for(let painting of paintings){
    painting.play()

    await sleep(500);
  }

}

triggerPaintings()




var intervalRewind;

var intervals = new Map();

function onHoverVideo(element, name) {
  element.currentTime = 0;
  element.play();
  //clearInterval(intervalRewind);
  // element.play();
  gsap.to("#" + element.id, {scale: 0.98, duration: 0.5, ease: "power1.inOut"});

  paintingNameText.textContent = name;
  paintingTL.play();
  // console.log("HOVER")
}

function onMouseLeave(element) {
  // element.currentTime = 0;
  paintingTL.reverse();
  gsap.to("#" + element.id, {scale: 1, duration: 0.5, ease: "power1.inOut"});

  intervals.set(element.id, setInterval(function(){
    element.pause();
    element.currentTime -= 0.1
    if(element.currentTime <= 0){
        clearInterval(intervals.get(element.id));
        intervals.delete(element.id);
    }
  },25));
}

function onMouseClick(element, name) {
  transitionIn.play();
  console.log("YES")
  setTimeout("window.location.href = 'turumba.html';", 3000);
}

paintingTL = gsap.timeline({paused:true});
paintingTL.from(".paintingDescBox", {opacity: 0, y: "+=100px", duration: 1, ease: "power1.inOut"});


// setInterval(function(){
//   console.log(intervals)
// }, 200);