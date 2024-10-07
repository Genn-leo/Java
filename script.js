// Function to toggle the visibility of the password input field
function togglePassword() {
  // Get the password input field and the toggle password text element
  const passwordInput = document.getElementById('password');
  const togglePasswordText = document.querySelector('.toggle-password');
  
  // Check the current type of the password input field
  if (passwordInput.type === 'password') {
      // Change the type to text to show the password
      passwordInput.type = 'text';
      // Update the toggle text to "Hide"
      togglePasswordText.textContent = 'Hide';
  } else {
      // Change the type back to password to hide the password
      passwordInput.type = 'password';
      // Update the toggle text to "Show"
      togglePasswordText.textContent = 'Show';
  }
}
