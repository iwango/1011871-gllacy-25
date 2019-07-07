var btnFeedbackClick = document.querySelector(".btn-feedback");
var popupFulscreenClick = document.querySelector(".full-screen-field");
var popup = document.querySelector(".feedback");
var popupFulscreen = document.querySelector(".full-screen-field");
var btnFeedbackClose = document.querySelector(".feedback-close");
var inputFeedback = document.querySelector(".input-feedback");

btnFeedbackClick.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  popupFulscreen.classList.add("modal-show");
  inputFeedback.focus();
});

popupFulscreenClick.addEventListener("click", function () {
  popup.classList.remove("modal-show");
  popupFulscreen.classList.remove("modal-show");
});

btnFeedbackClose.addEventListener("click", function () {
  popup.classList.remove("modal-show");
  popupFulscreen.classList.remove("modal-show");
});
