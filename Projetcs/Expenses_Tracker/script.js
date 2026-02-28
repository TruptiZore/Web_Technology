const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

let transactions = [];

// Add transaction
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const transaction = {
        id: Date.now(),
        text: text.value,
        amount: +amount.value
    };

    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();

    text.value = "";
    amount.value = "";
});

// Add transaction to DOM
function addTransactionDOM(transaction) {
    const li = document.createElement("li");

    li.classList.add(transaction.amount < 0 ? "minus" : "plus");

    li.innerHTML = `
        ${transaction.text} 
        <span>₹${transaction.amount}</span>
    `;

    list.appendChild(li);
}

// Update balance, income, expense
function updateValues() {
    const amounts = transactions.map(t => t.amount);

    const total = amounts.reduce((acc, item) => acc + item, 0);
    const inc = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => acc + item, 0);
    const exp = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => acc + item, 0);

    balance.innerText = total;
    income.innerText = inc;
    expense.innerText = Math.abs(exp);
}