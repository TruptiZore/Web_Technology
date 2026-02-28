// 1. Gallery Event: Shows an alert when an image is clicked
function showInfo(placeName) {
    alert("You clicked on " + placeName + "! Great choice for a vacation.");
}

// 2. Form Validation: Checks if inputs are empty
function validateForm() {
    // Get values from HTML inputs
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let destination = document.getElementById("destination").value;
    let errorMsg = document.getElementById("error-msg");

    // Simple Check: Are they empty?
    if (name === "" || phone === "" || destination === "") {
        errorMsg.innerText = "Please fill in all fields!";
        return false; // Stop form from submitting
    }

    // Check if phone number is valid (simple length check)
    if (phone.length < 10) {
        errorMsg.innerText = "Please enter a valid phone number.";
        return false;
    }

    // If everything is okay
    alert("Thank you, " + name + "! Your trip to " + destination + " is booked.");
    return true; // Allow submission
}