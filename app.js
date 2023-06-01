const sendBtn = document.querySelector(".btn");
const errorMsg = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".error");
const form =document.querySelector(".form");
const email = document.querySelector(".emailadd");

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeoutFunc = setInterval(() => {
  errorMsg.style.display = "none";
  errorIcon.style.display = "none";
  email.style.border="1px solid  hsl(0, 36%, 70%)"
}, 3000);

sendBtn.addEventListener("click", function () {
  if (email.value.length === 0 || !email.value.match(emailValidation)) {
    errorMsg.style.display = "inline";
    errorIcon.style.display = "inline";
    errorMsg.style.color = "red";
    email.style.border="2px solid hsl(0, 93%, 68%)";
    errorMsg.textContent = "Please provide a valid email address";
    return timeoutFunc;
  } else {
    errorMsg.style.display = "inline";
    errorMsg.style.color = "green";
    errorMsg.textContent = "Thank you for subscribing to our newsletter!";
    return timeoutFunc;
  }
});
