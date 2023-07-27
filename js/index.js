function invokeAppScheme() {
    var appScheme = document.getElementById("appSchemeInput").value;
    var payload = document.getElementById("payloadInput").value;
    if (appScheme) {
      if (payload) {
        appScheme += "?" + payload;
      }
      // Attempt to open the app
      window.location.href = appScheme;
      // Timeout to redirect to app store if the app is not installed
      setTimeout(function () {
        window.location.href = "https://your-app-store-link"; // Replace with your app's store link
      }, 2000); // Adjust the timeout duration (milliseconds) as needed
    } else {
      alert("Please enter an app scheme!");
    }
  }
  // Show instructions on page load
  document.addEventListener("DOMContentLoaded", function () {
    var instructions = document.querySelector(".instructions");
    instructions.style.display = "block";
  });