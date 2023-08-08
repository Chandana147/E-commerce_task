// Fetching all the radio buttons
const radioButtons = document.querySelectorAll(
    '.option-content input[type="radio"]'
);
const boxes = document.querySelectorAll(".product-box");

// Function to handle the radio button selection
function handleRadioClick(event) {
    // Hiding all .reveal-if-active divs
    const revealDivs = document.querySelectorAll(".reveal-if-active");
    revealDivs.forEach((div) => {
        div.classList.remove("visible");
        // While iterating through all the revealDivs.
        div.closest(".product-box").classList.remove("selected");
    });

    // Showing the .reveal-if-active div associated with the clicked radio button
    const parentBox = event.target.closest(".product-box");

    if (parentBox) {
        const revealDiv = parentBox.querySelector(".reveal-if-active");
        revealDiv.classList.add("visible");

        //Selected class to the box containing the radio that was clicked
        parentBox.classList.add("selected");

        // to check the radio button inside this box
        const radioButton = parentBox.querySelector(
            '.option-content input[type="radio"]'
        );
        if (radioButton) {
            radioButton.checked = true;
        }
    }
}

//Event listener to all the radio buttons
radioButtons.forEach((radio) =>
    radio.addEventListener("click", handleRadioClick)
);

// the box clicks to select the radio button inside
boxes.forEach((box) => {
    box.addEventListener("click", (event) => {
        // If the clicked element wasn't the radio button itself
        if (event.target.type !== "radio") {
            const radioButton = box.querySelector(
                '.option-content input[type="radio"]'
            );
            if (radioButton) {
                radioButton.click(); // This triggers the handleRadioClick function due to event delegation
            }
        }
    });
});
