const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ddms@gmail.com",
    Password: "45BE6C673FE3A81068EEBDBF17DD94770915",
    To: "terkar.piyush3@gmail.com",
    From: "mitalichougule21@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
  console.log("sent");
});
