
// Load in button for each card on page load
document.addEventListener("DOMContentLoaded", function(){
    const cards = document.querySelectorAll(".card");

    cards.forEach((item, index) => {
        const button = document.createElement("button");
        const buttonClass = `button-${index + 1}`;
        button.classList.add("button", buttonClass);
        item.appendChild(button);
    });

});