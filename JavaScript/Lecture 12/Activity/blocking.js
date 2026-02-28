// Blocking Example - Order Processing System (Synchronous)

console.log("System Started");

// Simulate heavy payment processing (blocking)
function processPayment() {
    console.log("Processing Payment...");

    let start = Date.now();

    // Blocking delay (3 seconds busy wait)
    while (Date.now() - start < 3000) {
        // waiting...
    }

    console.log("Payment Completed");
}

// Simulate invoice generation
function generateInvoice() {
    console.log("Generating Invoice...");
}

// Simulate email sending
function sendEmail() {
    console.log("Sending Confirmation Email...");
}

// Main flow
console.log("Customer placed order");

processPayment();     // BLOCKING

generateInvoice();
sendEmail();

console.log("Order Process Finished");