const mail = document.getElementById("mail");
const mail_error = document.getElementById("mail-error-message");
const message = document.getElementById("message");
const text_char_count = document.getElementById("text-char-count");
const text_error_message = document.getElementById("text-error-message");

/************************** Email input validation **************************/

function sendMessage() {
  //Mail input validation for @
  if (mail.value.indexOf("@") == -1) {
    //if @ sign doesn't exists
    mail_error.className = "invalid";
    mail_error.textContent = "Incorrect email, try something@something.com";
  } else if (mail_error.className == "invalid") {
    mail_error.textContent = "";
    mail_error.className = "";
  }

  //TextArea validation for empty
  if (message.textLength == 0) {
    text_error_message.textContent = "Message cannot be empty";
  } else {
    text_error_message.textContent = "";
  }
}

/************************** TextArea input validation **************************/

//****** Start Update the character counter when deleting  ********/
message.addEventListener("keyup", (e) => {
  if (e.key == "Backspace") {
    if (message.textLength == 0) {
      text_char_count.textContent = `0/100`;
    }
  }
});
message.addEventListener("keydown", (e) => {
  if (e.key == "Backspace") {
    text_char_count.textContent = `${message.textLength}/100`;
  }
});
//****** End Update the character counter when deleting  ********/

//****** Start Update the character counter when writing  ********/
message.addEventListener("keyup", () => {
  text_char_count.textContent = `${message.textLength}/100`;
});
//****** End Update the character counter when writing  ********/

//Necessary update for constant pressing on key or backspace
message.addEventListener("keypress", () => {
  text_char_count.textContent = `${message.textLength}/100`;
});
