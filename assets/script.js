const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");

option1.addEventListener("change", updatecolor);
option2.addEventListener("change", updatecolor);

let option;

function updatecolor() {
  if (option1.checked) {
    document.querySelector(".option_1").style.backgroundColor =
      "hsl(148, 38%, 91%)";
    document.querySelector(".option_1").style.borderColor =
      "hsl(169, 82%, 27%)";
    document.querySelector(".option_2").style.backgroundColor = "white";
    document.querySelector(".option_2").style.borderColor =
      "hsl(186, 15%, 59%)";
  }
  if (option2.checked) {
    document.querySelector(".option_2").style.backgroundColor =
      "hsl(148, 38%, 91%)";
    document.querySelector(".option_2").style.borderColor =
      "hsl(169, 82%, 27%)";
    document.querySelector(".option_1").style.backgroundColor = "white";
    document.querySelector(".option_1").style.borderColor =
      "hsl(186, 15%, 59%)";
  }
}

document.querySelector(".firstname_field").style.display = "none";
document.querySelector(".lastname_field").style.display = "none";
document.querySelector(".email_field").style.display = "none";
document.querySelector(".query_field").style.display = "none";
document.querySelector(".message_field").style.display = "none";
document.querySelector(".checkbox_field").style.display = "none";

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const firstname = document.querySelector("#firstname").value;
  const lastname = document.querySelector("#lastname").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  const checkbox = document.querySelector("#checkbox");

  let isvalidfirstname = false;
  let isvalidlastname = false;
  let isvalidemail = false;
  let isvalidmessage = false;
  let isvalidoptions = false;
  let isvalidcheckbox = false;

  if (firstname == "") {
    document.querySelector("#firstname").style.borderColor = "hsl(0, 66%, 54%)";
    document.querySelector(".firstname_field").style.display = "block";
    isvalidfirstname = false;
  } else {
    document.querySelector("#firstname").style.borderColor =
      "hsl(187, 24%, 22%)";
    document.querySelector(".firstname_field").style.display = "none";
    isvalidfirstname = true;
  }

  if (lastname == "") {
    document.querySelector("#lastname").style.borderColor = "hsl(0, 66%, 54%)";
    document.querySelector(".lastname_field").style.display = "block";
    isvalidlastname = false;
  } else {
    document.querySelector("#lastname").style.borderColor =
      "hsl(187, 24%, 22%)";
    document.querySelector(".lastname_field").style.display = "none";
    isvalidlastname = true;
  }
  let emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email == "") {
    document.querySelector("#email").style.borderColor = "hsl(0, 66%, 54%)";
    document.querySelector(".email_field").style.display = "block";
    isvalidemail = false;
    if (emailcheck.test(email)) {
      document.querySelector("#email").style.borderColor = "hsl(0, 66%, 54%)";
      document.querySelector(".email_field").style.display = "block";
    }
  } else {
    document.querySelector("#email").style.borderColor = "hsl(187, 24%, 22%)";
    document.querySelector(".email_field").style.display = "none";
    isvalidemail = true;
  }

  if (message == "") {
    document.querySelector("#message").style.borderColor = "hsl(0, 66%, 54%)";
    document.querySelector(".message_field").style.display = "block";
    isvalidmessage = false;
  } else {
    document.querySelector("#message").style.borderColor = "hsl(187, 24%, 22%)";
    document.querySelector(".message_field").style.display = "none";
    isvalidmessage = true;
  }

  if (!option1.checked && !option2.checked) {
    document.querySelector(".query_field").style.display = "block";
    isvalidoptions = false;
  } else {
    document.querySelector(".query_field").style.display = "none";
    isvalidoptions = true;
  }

  if (!checkbox.checked) {
    document.querySelector(".checkbox_field").style.display = "block";
    isvalidcheckbox = false;
  } else {
    document.querySelector(".checkbox_field").style.display = "none";
    isvalidcheckbox = true;
  }

  if (
    isvalidfirstname &&
    isvalidlastname &&
    isvalidemail &&
    isvalidoptions &&
    isvalidmessage &&
    isvalidcheckbox
  ) {
    document.querySelector(".success_msg").style.display = "flex";
    setTimeout(() => {
      document.querySelector(".success_msg").style.display = "none";
      window.location.reload();
    }, 2000);
  }
});
