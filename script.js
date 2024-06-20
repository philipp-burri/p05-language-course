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