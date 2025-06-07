// Toggles visibility of payment input fields based on selected method
function togglePaymentDetails(e) {
  const theForm = document.querySelector("#checkoutForm");
  const creditCardContainer = document.getElementById("creditCardNumberContainer");
  const paypalContainer = document.getElementById("paypalUsernameContainer");

  // Hide both containers
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");

  // Remove required attribute to prevent validation errors
  theForm.creditCardNumber.required = false;
  theForm.paypalUsername.required = false;

  // Show the selected payment container and set required
  if (theForm.paymentMethod.value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    theForm.creditCardNumber.required = true;
  } else if (theForm.paymentMethod.value === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalUsername.required = true;
  }
}

// Validates form before submission
function validateForm(event) {
  const theForm = event.target;
  const errors = [];
  let isValid = true;

  // Only allow credit card number 1234123412341234
  if (theForm.paymentMethod.value === "creditCard") {
    if (theForm.creditCardNumber.value !== "1234123412341234") {
      isValid = false;
      errors.push("Invalid Credit Card Number");
    }
  }

  // Only allow name 'Bob'
  if (theForm.fullName.value !== "Bob") {
    isValid = false;
    errors.push("Your name is not Bob");
  }

  // If errors found, prevent submission and display messages
  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}

// Displays error messages to the user
function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

// Listen for changes in payment method to toggle input fields
document
  .querySelector("#paymentMethod")
  .addEventListener("change", togglePaymentDetails);

// Listen for form submission to validate input
document
  .querySelector("#checkoutForm")
  .addEventListener("submit", validateForm);
