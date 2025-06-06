function isCardNumberValid(number) {
  return number === '1234123412341234';
}

function displayError(msg) {
  document.querySelector('.errorMsg').textContent = msg;
}

function submitHandler(event) {
  event.preventDefault();
  let errorMsg = '';
  const number = this.cardNumber.value.replace(/\s+/g, '');

  displayError('');

  if (isNaN(number)) {
    errorMsg = 'Card number is not a valid number';
  } else if (!isCardNumberValid(number)) {
    errorMsg = 'Card number is not a valid card number';
  }

  const month = parseInt(this.expMonth.value);
  const year = parseInt('20' + this.expYear.value);
  const now = new Date();
  const expiryDate = new Date(year, month - 1);

  if (expiryDate <= now) {
    errorMsg += '\nCard expiration date must be in the future';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return false;
  }

  alert('Form submitted successfully!');
  return true;
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler);
