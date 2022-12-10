const form = document.querySelector("form");
const modal = new bootstrap.Modal(document.getElementById("feedbackModal"), {
  keyboard: false,
});

const failureModal = new bootstrap.Modal(
  document.getElementById("failureModal"),
  {
    keyboard: false,
  }
);

form.addEventListener("submit", (event) => {
  const name = document.getElementById("nameValue").value;
  const number = document.getElementById("cnum").value;
  const email = document.getElementById("email").value;
  const appType = document.getElementById("appType").value;
  const msg = document.getElementById("msg").value;
  event.preventDefault();
  if (form.checkValidity()) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "devdio1316@gmail.com",
      Password: "56DD9BC48267CEDA79CB325B9A1EE0516F0F",
      To: [
        "mitalichougule21@gmail.com",
        "terkar.piyush3@gmail.com",
        "kedarkhedkar2001@gmail.com",
        "saurabhpl14@gmail.com",
      ],
      From: "devdio1316@gmail.com",
      Subject: `Client Request for ${appType}`,
      Body: `Customer Info, 
      Name : ${name}, 
      Contact Number: ${number}, 
      Email: ${email}, 
      App Type: ${appType}, 
      Other Info: ${msg}`,
    }).then((message) => {
      message = message.toLowerCase();
      console.log(message);
      if (message.includes("ok")) {
        modal.show();
      } else {
        failureModal.show();
      }
    });
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
