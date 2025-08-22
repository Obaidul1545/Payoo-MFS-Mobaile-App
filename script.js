// Login button functionality
document.getElementById('login-button').addEventListener('click', function (e) {
  e.preventDefault();
  const mobileNumber = 12345678910;
  const pinDigit = 1234;
  const mobileNumberValue = parseInt(
    document.getElementById('mobile-number').value
  );
  const pinDigitValue = parseInt(document.getElementById('pin-digit').value);

  if (mobileNumberValue === mobileNumber && pinDigit === pinDigitValue) {
    window.location.href = './home.html';
  } else {
    alert('Your input is invalid');
  }
});
