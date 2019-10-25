var mapSmall = document.querySelector(".map");
var mapPopup = document.querySelector(".map-popup");
var overlayMap = document.querySelector(".overlay");
var closeMap = document.querySelector(".close-map-btn");


mapSmall.addEventListener( "click", function(evt) {
	evt.preventDefault();	
	mapPopup.classList.add("modal-show");
	overlayMap.classList.add("overlay-show");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    overlayMap.classList.remove("overlay-show");
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
    	overlayMap.classList.remove("overlay-show");
      }
    }
  });

overlayMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    overlayMap.classList.remove("overlay-show");
  });
















