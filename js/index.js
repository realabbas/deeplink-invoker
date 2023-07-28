function invokeAppScheme() {
  var appScheme = document.getElementById("appSchemeInput").value;
  var payload = document.getElementById("payloadInput").value;
  var androidAppStoreLink = document.getElementById("androidAppStoreLinkInput").value;
  var iosAppStoreLink = document.getElementById("iosAppStoreLinkInput").value;

  if (appScheme) {
      if (payload) {
          appScheme += "?" + payload;
      }

      // Attempt to open the app
      window.location.href = appScheme;

      // Timeout to redirect to app store if the app is not installed
      setTimeout(function() {
          var isAndroid = /Android/i.test(navigator.userAgent);
          if (isAndroid) {
              window.location.href = androidAppStoreLink;
          } else {
              window.location.href = iosAppStoreLink;
          }
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