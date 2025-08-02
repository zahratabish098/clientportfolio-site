document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple form validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      e.preventDefault(); // Stop form submission
      return;
    }

    // Optional: Regex to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }

    // Optional: Show thank-you message on successful submission
    alert("Thank you! Your message has been sent.");
    // Form will submit if action is configured (e.g., Formspree)
  });
});
