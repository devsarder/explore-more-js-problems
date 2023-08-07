const shoppingList = [
  { name: "shirt", quantity: 3, price: 2200 },
  { name: "shoes", quantity: 4, price: 2500 },
  { name: "pants", quantity: 5, price: 1800 },
];

function totalCost(cost) {
    let totalPrice = 0;
    for (let i = 0; i < cost.length; i++){
        let product = cost[i];
        let totalProductPrice = product.price * product.quantity;
        totalPrice += totalProductPrice
    }
    return totalPrice;
}

const totalExpenses = totalCost(shoppingList);
console.log(totalExpenses);