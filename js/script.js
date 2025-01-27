// Declaring the variables
// Variables for the features section
const firstButton = document.getElementById("features-button-1");
const secondButton = document.getElementById("features-button-2");
const thirdButton = document.getElementById("features-button-3");
const imageContainer = document.querySelector(".features__info-containerImg");
const textContainer = document.querySelector(".features__info-text");

let image = document.querySelector(".features__info-containerImg-image");
let textTitle = document.getElementById("features__text-title");
let textParagraph = document.getElementById("features__text-paragraph");

// Variables for the faq section
const faqButtons = document.querySelectorAll(".faq__accordion-item");
const accordionBtns = document.querySelectorAll(".faq__accordion-btn");

// Variables for the join us section
const joinUsForm = document.querySelector(".joinUs__form-input");
const joinInput = document.querySelector(".joinUs__form-inputEmail");
const joinBtn = document.querySelector(".joinUs__form-button");

// Creating the object with the info
const contentData = [
  {
    image: "./images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    paragraph:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    image: "./images/illustration-features-tab-2.svg",
    title: "Intelligent Search",
    paragraph:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    image: "./images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    paragraph:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

// Function that will remove the animations
function removeAnimations(event) {
  event.target.classList.remove(
    "slide-left",
    "slide-right",
    "fade-in-left",
    "fade-in-right"
  );
}

// Adding listeners for the text elements
imageContainer.addEventListener("animationend", removeAnimations);
textContainer.addEventListener("animationend", removeAnimations);

// Creating the function that will change the text
function changeContent(tab) {
  // First we change the active for the right button
  const featuresBtns = document.querySelectorAll(".features__list-button");
  featuresBtns.forEach((btn) => btn.classList.remove("--active"));

  if (tab === 0) {
    firstButton.classList.add("--active");
  } else if (tab === 1) {
    secondButton.classList.add("--active");
  } else if (tab === 2) {
    thirdButton.classList.add("--active");
  }

  // We put the animations for exiting the page
  imageContainer.classList.add("slide-left");
  textContainer.classList.add("slide-right");

  // We wait for the animations to finish
  setTimeout(() => {
    const currentContent = contentData[tab];

    // We change the content
    image.src = currentContent.image;
    textTitle.innerText = currentContent.title;
    textParagraph.innerText = currentContent.paragraph;

    // We add the animations for entering the page
    imageContainer.classList.add("fade-in-left");
    textContainer.classList.add("fade-in-right");
  }, 450);
}

// Function that will change the view when the accordion is clicked
function accordionClick(btn) {
  // First will remove the active class from all the buttons and the border from the accordion
  faqButtons.forEach((btn) => btn.classList.add("close"));
  faqButtons.forEach((btn) => btn.classList.remove("active"));
  accordionBtns.forEach((btn) => (btn.style.borderBottom = "none"));

  // We add the active class to the clicked button and the border to the accordion
  setTimeout(() => {
    btn.classList.add("active");
    btn.style.borderBottom = "1px solid var(--lines)";
    faqButtons.forEach((btn) => btn.classList.remove("close"));
  }, 500);
}

// Functions for the Join Us form 
function resetInput() {
  joinInput.value = "";
}

function validateEmail() {
    var email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (joinInput.value.match(email)) {
      joinUsForm.classList.remove("error");
      resetInput();
    } else {
      joinUsForm.classList.add("error");
      resetInput();
    }
}

// Adding the listeners for the buttons
firstButton.addEventListener("click", () => changeContent(0));
secondButton.addEventListener("click", () => changeContent(1));
thirdButton.addEventListener("click", () => changeContent(2));

faqButtons.forEach((btn) =>
  btn.addEventListener("click", () => accordionClick(btn))
);

joinBtn.addEventListener("click", validateEmail);
