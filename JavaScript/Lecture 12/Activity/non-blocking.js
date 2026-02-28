// Non-Blocking Example - Order Processing System (Asynchronous)

console.log("System Started");

// Simulate async payment processing
function processPayment(callback) {
    console.log("Processing Payment...");

    setTimeout(() => {
        console.log("Payment Completed");
        callback();
    }, 3000);
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

processPayment(() => {
    generateInvoice();
    sendEmail();
    console.log("Order Process Finished");
});

console.log("System Ready for Next Customer");