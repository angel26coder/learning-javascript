function greetCustomer(customerName) {
    console.log("Welcome, " + customerName + "! What magical item are you looking for today?");
}

function calculateTotalCost(item1Price, item2Price, item3Price) {
    let total = item1Price + item2Price + item3Price;
    return total;
}

function processPurchase(customerName, item1Price, item2Price, item3Price) {
    greetCustomer(customerName);
    let totalCost = calculateTotalCost(item1Price, item2Price, item3Price);
    if (totalCost >= 100) {
        console.log("Thank you, " + customerName + "! Your total is " + totalCost + " coins. Enjoy your magical items!")
    } else if (totalCost < 100) { console.log("Sorry, " + customerName + ", your coins are " + totalCost + ". You need at least 100 coins to purchase these items.") }
}

console.log(processPurchase("George", 50, 60, 10))
console.log(processPurchase("Luisana", 10, 10, 15))
console.log(processPurchase("Paul", 5, 79, 8))
console.log(processPurchase("Luisa", 80, 10, 5))
