// greift data vom local storage
let firstName = localStorage.getItem("firstName");
let lastName = localStorage.getItem("lastName");
let selectedCourse = localStorage.getItem("selectedCourse");
let selectedLanguage = localStorage.getItem("selectedLanguage");
let languageLevel = localStorage.getItem("languageLevel");
let startDate = localStorage.getItem("startDate");

// erzeugt success message
let successMessage = `Congratulations ${firstName} ${lastName}! You've successfully booked the ${selectedCourse} course: ${selectedLanguage} ${languageLevel}. Your course will start on ${startDate}.`;

// zeigt success message an
let successMessageElement = document.querySelector(".success-message");
successMessageElement.textContent = successMessage;

// return link
let returnLink = document.createElement("a");
returnLink.href = "index.html";
returnLink.className = "return-link";
returnLink.innerHTML = `
  <svg class="return-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
  Return to Home
`;

// return link delay
setTimeout(() => {
  successMessageElement.parentNode.insertBefore(returnLink, successMessageElement.nextSibling);
}, 3500);