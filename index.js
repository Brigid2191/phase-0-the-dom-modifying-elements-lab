// Remove the <main> element with id "main"
document.querySelector("main#main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set its id to "victory"
newHeader.id = "victory";

// Set its content to "YOUR-NAME is the champion"
newHeader.textContent = "BRIGID is the champion"; // Replace YOUR-NAME with your actual name

// Append the newHeader to the body
document.body.appendChild(newHeader);

