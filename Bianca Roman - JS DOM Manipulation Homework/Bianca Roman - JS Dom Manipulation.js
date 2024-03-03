  var contactForm = document.querySelector("#contactForm");
  var confirmationBanner = document.querySelector("#confirmationBanner");
  var confirmationMessage = document.querySelector("#confirmationMessage");
  var closeBtn = document.querySelector(".close");
  var genderError = document.querySelector(".gender-error");
  var genderMale = document.getElementById("male");
  var genderFemale = document.getElementById("female");
  var firstNameInput = document.querySelector("#firstName");
  var lastNameInput = document.querySelector("#lastName");
  var messageInput = document.querySelector("#message");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    validateForm(firstNameInput, lastNameInput, messageInput);
  });

  genderMale.addEventListener("change", function() {
    genderError.style.display = 'none';
  });

  genderFemale.addEventListener("change", function() {
    genderError.style.display = 'none';
  });

  firstNameInput.addEventListener("input", function() {
    if (this.value.trim() !== "") {
      this.classList.remove("error");
    }
  });

  lastNameInput.addEventListener("input", function() {
    if (this.value.trim() !== "") {
      this.classList.remove("error");
    }
  });

  messageInput.addEventListener("input", function() {
    if (this.value.trim() !== "") {
      this.classList.remove("error");
    }
  });

  function validateForm(firstNameInput, lastNameInput, messageInput) {
    var isValid = true;

    if (firstNameInput.value.trim() === "") {
      firstNameInput.classList.add("error");
      isValid = false;
    }

    if (lastNameInput.value.trim() === "") {
      lastNameInput.classList.add("error");
      isValid = false;
    }

    if (messageInput.value.trim() === "") {
      messageInput.classList.add("error");
      isValid = false;
    }

    if (!genderMale.checked && !genderFemale.checked) {
      genderError.style.display = 'block';
      isValid = false;
    }

    if (isValid) {
      showConfirmation(firstNameInput.value);
      console.log("First Name: " + firstNameInput.value);
      console.log("Last Name: " + lastNameInput.value);
      console.log("Gender: " + (genderMale.checked ? "Male" : "Female"));
      console.log("Message: " + messageInput.value);
      contactForm.reset();
    }
  }

  function showConfirmation(firstName) {
    confirmationMessage.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check" style="font-size: 23px; margin-right: 10px;"></i>' + " " + "<strong>Thank you for contacting us, " + firstName + "</strong>";
    confirmationBanner.style.display = "block";
    confirmationBanner.style.marginBottom = "20px";
    confirmationBanner.style.width = "850px";
    confirmationBanner.style.color = "green";
    confirmationBanner.style.backgroundColor = "rgba(144, 238, 144, 0.3)";
    confirmationBanner.style.border = "none";
  }

  closeBtn.addEventListener("click", function() {
    confirmationBanner.style.display = "none";
  });
  var closeBtn = document.querySelector(".confirmation .close");
  closeBtn.style.fontSize = "21px"; 
