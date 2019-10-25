var link = document.querySelector(".modal-show-btn");
var popup = document.querySelector(".write-us-popup");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".close-form-btn");
var nickName = popup.querySelector("[name=name-field]");
var email = popup.querySelector("[name=email-field]");
var message = popup.querySelector("[name=letter-field]");
var form = popup.querySelector("form");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("nickName");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener( "click", function(evt) {
	evt.preventDefault();	
	popup.classList.add("modal-show");
	overlay.classList.add("overlay-show");
	if (storage) {
    nickName.value = storage;
    email.focus();
  } else {
  		nickName.focus();	
  	}	
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
  });

form.addEventListener("submit", function (evt) {    
    if(!nickName.value || !email.value || !message.value) {
    	evt.preventDefault();
    	popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
    	popup.classList.add("modal-error");	
    } else {
    		if (isStorageSupport) {
    		localStorage.setItem("nickName", nickName.value);
    		}
    	}
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("overlay-show");
      }
    }
  });

overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
  });

