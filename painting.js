


document.addEventListener("DOMContentLoaded", function(event) { 
  gsap.from("#root", {duration: 2, opacity: 0});
});

function onMouseClick() {
  transitionIn.play();
  setTimeout("window.location.href = 'index.html';", 3000);
}
