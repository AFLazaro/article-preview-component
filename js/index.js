// SELECTORS
const bubble = document.querySelector(".share-menu");
const button = document.querySelector(".share-btn");
const icon = document.querySelector(".icon-share");
const tail = document.querySelector(".share-menu__bubble-tail");

// TOGGLE FUNCTION DECLARATION
function toggleClasses (bubble, tail) {
    bubble.classList.toggle("hide");
    tail.classList.toggle("hide");
};

// TOGGLE CLASS ON CLICK
button.addEventListener("click", () => {
    if (bubble.classList.contains("hide")) {
        toggleClasses(bubble, tail);
        bubble.style.opacity = 1;
        tail.style.opacity = 1;
    } else {
        bubble.style.opacity = 0;
        tail.style.opacity = 0;
        setTimeout(() => {
            toggleClasses (bubble, tail);
        }, 1000);
    };
    icon.classList.toggle("filter-white");
    button.classList.toggle("background-dark");
});
