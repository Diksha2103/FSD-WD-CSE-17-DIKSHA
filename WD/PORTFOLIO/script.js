// Show Current Time
function showTime() {
  const time = new Date().toLocaleTimeString();
  document.getElementById("timeDisplay").innerText = "Current Time: " + time;
}

// Form Validation
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let msg = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    msg.style.color = "red";
    msg.innerText = "⚠️ Please fill all fields!";
    return false;
  } else {
    msg.style.color = "green";
    msg.innerText = "✅ Message sent successfully!";
    return false; // prevent actual form submission
  }
}

// Dark Mode Toggle
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
