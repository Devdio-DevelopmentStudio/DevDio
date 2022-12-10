const select = document.querySelector("select");

const desktop = document.querySelector("#desktop");
const webApp = document.querySelector("#webapp");
const mobile = document.querySelector("#mobile");
const ecosystem = document.querySelector("#ecosystem");

desktop.addEventListener("click", () => {
  select.value = "Desktop App";
  select.classList.add("is-valid");
});

webApp.addEventListener("click", () => {
  select.value = "Web App";
  select.classList.add("is-valid");
});

mobile.addEventListener("click", () => {
  select.value = "Mobile App";
  select.classList.add("is-valid");
});

ecosystem.addEventListener("click", () => {
  select.value = "Software Ecosystem";
  select.classList.add("is-valid");
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".validated-form");

  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
