const form = document.querySelector("form");



form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("nameValue").value;
  const number = document.getElementById("cnum").value;
  const email = document.getElementById("email").value;
  const appType = document.getElementById("appType").value;
  const msg = document.getElementById("msg").value;
  console.log("clicked")
  console.log(name, number, email, appType, msg)
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "devdio1316@gmail.com",
    Password: "56DD9BC48267CEDA79CB325B9A1EE0516F0F",
    To: ["mitalichougule21@gmail.com","terkar.piyush3@gmail.com","kedarkhedkar2001@gmail.com", "saurabhpl14@gmail.com"],
    From: "devdio1316@gmail.com",
    Subject: `Client Request for ${appType}`,
    Body: `Customer Info, 
    Name : ${name}, 
    Contact Number: ${number}, 
    Email: ${email}, 
    App Type: ${appType}, 
    Other Info: ${msg}`
  }).then((message) => alert(message));
  console.log("sent");
});
