document.addEventListener('DOMContentLoaded', function() {
  let selectedLanguage = localStorage.getItem("selectedLanguage");
  let selectedCourse = localStorage.getItem("selectedCourse");

  let languageElement = document.getElementById("selected-language");
  if (selectedLanguage) {
    languageElement.textContent = selectedLanguage;
  }

  let courseElement = document.getElementById("selected-course");
  if (selectedCourse) {
    courseElement.textContent = selectedCourse.trim();
  }

  // localstorage
  function saveFormData() {
    localStorage.setItem("firstName", document.getElementById("first-name").value);
    localStorage.setItem("lastName", document.getElementById("last-name").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("phone", document.getElementById("phone").value);
    localStorage.setItem("languageLevel", document.getElementById("language-level").value);
    localStorage.setItem("startDate", document.getElementById("start-date").value);
  }

  // Form validation und Submit
  let contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
    


    if (validateForm()) {
      saveFormData();
      window.location.href = "success.html";
    }
  });

  function validateForm() {
    let isValid = true;

    // Validate First Name
    let firstName = document.getElementById("first-name");
    if (firstName.value.trim() === '') {
      showError(firstName, 'First name is required');
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(firstName.value.trim())) {
      showError(firstName, 'First name should contain only letters');
      isValid = false;
    } else {
      removeError(firstName);
    }

    // Validate Last Name
    let lastName = document.getElementById("last-name");
    if (lastName.value.trim() === '') {
      showError(lastName, 'Last name is required');
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(lastName.value.trim())) {
      showError(lastName, 'Last name should contain only letters');
      isValid = false;
    } else {
      removeError(lastName);
    }

    // Validate Start Date
    let startDate = document.getElementById("start-date");
    if (startDate.value === '') {
      showError(startDate, 'Please select a start date');
      isValid = false;
    } else if (new Date(startDate.value) < new Date()) {
      showError(startDate, 'Start date cannot be in the past');
      isValid = false;
    } else {
      removeError(startDate);
    }

    return isValid;
  }

  function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const error = formGroup.querySelector('.error-message') || document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    if (!formGroup.querySelector('.error-message')) {
      formGroup.appendChild(error);
    }
    input.className = 'invalid';
  }

  function removeError(input) {
    const formGroup = input.closest('.form-group');
    const error = formGroup.querySelector('.error-message');
    if (error) {
      formGroup.removeChild(error);
    }
    input.className = '';
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});

// Dropdown
let dropdownButtons = document.querySelectorAll(".dropdown #courses-language-btn");
let dropdownContents = document.querySelectorAll(".dropdown-content");

dropdownButtons.forEach(function(button, index) {
  button.addEventListener("click", function() {
    dropdownContents[index].classList.toggle("show");
  });
});

window.onclick = function(event) {
  if (!event.target.matches('#courses-language-btn')) {
    dropdownContents.forEach(function(content) {
      if (content.classList.contains('show')) {
        content.classList.remove('show');
      }
    });
  }
}

let languageLinks = document.querySelectorAll(".dropdown-content a");
languageLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    let selectedLanguage = this.getAttribute("data-lang");
    let dropdown = this.closest(".dropdown");
    let button = dropdown.querySelector("#courses-language-btn");
    button.textContent = selectedLanguage;
    let content = dropdown.querySelector(".dropdown-content");
    content.classList.remove("show");
    let startButton = dropdown.parentElement.querySelector("#courses-started-btn");
    startButton.classList.add("animate");
    setTimeout(function() {
      startButton.classList.remove("animate");
    }, 2000);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  });
});

let getStartedButtons = document.querySelectorAll("#courses-started-btn");
getStartedButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    let selectedCourse = this.closest("section").querySelector("h3").textContent;
    localStorage.setItem("selectedCourse", selectedCourse);
  });
});
