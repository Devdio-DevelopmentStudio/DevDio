const form = document.querySelector("form");
const modal = new bootstrap.Modal(document.getElementById("feedbackModal"), {
  keyboard: false,
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    modal.show();
  }
  // Email.send({
  //   Host: "smtp.elasticemail.com",
  //   Username: "ddms@gmail.com",
  //   Password: "45BE6C673FE3A81068EEBDBF17DD94770915",
  //   To: "terkar.piyush3@gmail.com",
  //   From: "mitalichougule21@gmail.com",
  //   Subject: "This is the subject",
  //   Body: "And this is the body",
  // }).then((message) => alert(message));
  // console.log("sent");
});
