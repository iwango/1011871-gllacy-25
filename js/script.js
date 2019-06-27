var btnFeedbackClick = document.querySelector(".btn-feedback");
var popupFulscreenClick = document.querySelector(".full-screen-field")
var popup = document.querySelector(".feedback");
var popupFulscreen = document.querySelector(".full-screen-field");
var btnFeedbackClose = document.querySelector(".feedback-close");


btnFeedbackClick.addEventListener("click", function () {
  console.log("клик по кнопке");
  popup.classList.add("modal-show");
  popupFulscreen.classList.add("modal-show")
});

popupFulscreenClick.addEventListener("click", function () {
  popup.classList.remove("modal-show");
  popupFulscreen.classList.remove("modal-show");
});

btnFeedbackClose.addEventListener("click", function () {
  popup.classList.remove("modal-show");
  popupFulscreen.classList.remove("modal-show");
});



