function checkCashRegister(price, cash, cid) {
  const units = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ]

  let change = cash - price;
  let changeDue = change;

  // Summing total amount in cash-in-drawer;
  const cidTotal = cid.reduce((total, [, amount]) => total + amount, 0);

  // Seeing if have enough cash in the register to provide the required change;
  if (cidTotal < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (cidTotal === change) {
    // Return CLOSED with cash-in-drawer as the value for the key change if it is equal to the change due;
    return {status: "CLOSED", change: cid};
  }

  // An empty array to store the change;
  const changeArr = [];
  // Looping the units array from the highest denomination to the lowest. 
  // Giving change using the highest denominations first and extract the currency name and value;
  for (let i = units.length - 1; i >= 0; i--) {
    const currencyName = units[i][0];
    const currencyValue = units[i][1];
    let currencyAvailable = cid[i][1];
    let currencyCount = 0;
    // Subtracting the currencyValue from the change, rounding it to two decimal places, subtracting the currencyValue from the available amount in the cid and adding the currencyValue to the currencyCount;
    while (change >= currencyValue && currencyAvailable > 0) {
      change -= currencyValue;
      change = Math.round(change * 100) / 100;
      currencyAvailable -= currencyValue;
      currencyCount += currencyValue;
    }
    // If able to give some change in that currency denomination. Push an array containing the currencyName and currencyCount to the changeArr array;
    if (currencyCount > 0) {
      changeArr.push([currencyName, currencyCount]);
    }
  }
  // Return INSUFFICIENT_FUNDS if cash-in-drawer is less than the change due, or if you cannot return the exact change;
  if (change > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  // Return OPEN with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key;
  return {status: "OPEN", change: changeArr };
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]
  ])
);