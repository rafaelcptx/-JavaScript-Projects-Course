const MONEY_TABLE = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  }

function checkCashRegister(price, cash, cid) {

  const change = cash - price;
  let changeInCents = change * 100;

  let moneyInRB = 0;
  // map para somar todo dinheiro da registradora em centavos.
  cid.map(typeMoney => moneyInRB += typeMoney[1] * 100);

  if (moneyInRB === changeInCents){
    return {status: "CLOSED", change: cid}
  }

  // reverter a cid.
  let changeInHand = cid.reverse().map(([name, valueInSlot]) => {
    // inicia variavel para receber o total de troco daquela nota/moeda.
    let total = 0;

    // define valor em cents de cada nota/moeda.
    const typeMoney = MONEY_TABLE[name];

    let valueInCents = Math.round(valueInSlot * 100);

    // loop
    while(valueInCents > 0 && typeMoney <= changeInCents){

      // adiciona um punhado do typeMoney ao total.
      total += typeMoney;

      // subtrai esse punhado do troco.
      changeInCents -= typeMoney;

      // substrai esse punhado da nota/moeda em questão.
      valueInCents -= typeMoney;
    }
    return [name, total / 100];
  });

  // filter para obter objeto apenas com tipo de moeda de troco que será retornado.
  changeInHand = changeInHand.filter(([, value]) => value > 0);

 // se o dinheiro na registradora for menor que o troco ou não der pra dar o troco:
  if(changeInCents > 0){
    return {status: "INSUFFICIENT_FUNDS", change: []}

  } else {
    return {status: "OPEN", change: changeInHand}
  }
}