function discountCalculation(ticketQuantities) {
  const first100Tickets = 100;
  const second100Tickets = 90;
  const third100Tickets = 80;
  if (ticketQuantities <= 100) {
    const first100Price = first100Tickets * ticketQuantities;
    return first100Price;
  } else if (ticketQuantities <= 200) {
    const first100Price = 100 * first100Tickets;
    const theRestTickets = ticketQuantities - 100;
    const theRestPrice = theRestTickets * 90;
    const totalSeconds100Cost = first100Price + theRestPrice;
    return totalSeconds100Cost;
  } else {
    if (ticketQuantities > 200) {
      const first100Price = 100 * first100Tickets;
      const second100Price = 100 * second100Tickets;
      const restQuantity = ticketQuantities - 200;
      const restPrice = restQuantity * third100Tickets;
      const totalExpenses = first100Price + second100Price + restPrice;
      return totalExpenses;
    }
  }
}

const discount = discountCalculation(120);
console.log(discount);
