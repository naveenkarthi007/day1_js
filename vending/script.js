let madStock = 10;
function madplus() {
  if (madStock > 0) {
    madStock--;
    document.getElementById("madStock").innerHTML =
    `A1: MADANGLES &nbsp;&nbsp; STOCK: ${madStock} &nbsp;&nbsp; PRICE: $20`;
      addToCart("MADANGLES", 20);
  } else {
    alert("Out of stock!");
  }
}
function madminus() {
  if (madStock < 10) {
    madStock++;
    document.getElementById("madStock").innerHTML =
    `A1: MADANGLES &nbsp;&nbsp; STOCK: ${madStock} &nbsp;&nbsp; PRICE: $20`;
      addToCart("MADANGLES", 20);
  }
}
let cakeStock = 10;
function cakeplus() {
  if (cakeStock > 0) {
    cakeStock--;
    document.getElementById("cakeStock").innerHTML =
      `A2: SLICECAKE &nbsp;&nbsp; STOCK: ${cakeStock} &nbsp;&nbsp; PRICE: $10`;
      addToCart("SLICECAKE",10)
  } else {
    alert("Out of stock!");
  }
}
function cakeminus() {
  if (cakeStock < 10) {
    cakeStock++;
    document.getElementById("cakeStock").innerHTML =
      `A2: SLICECAKE &nbsp;&nbsp; STOCK: ${cakeStock} &nbsp;&nbsp; PRICE: $10`;
      addToCart("SLICECAKE",10)
  }
}
let chocoStock = 10;
function chocoplus() {
  if (chocoStock > 0) {
    chocoStock--;
    document.getElementById("chocoStock").innerHTML =
      `A3: CHOCOLATES &nbsp;&nbsp; STOCK: ${chocoStock} &nbsp;&nbsp; PRICE: $30`;
      addToCart("CHOCOLATE",30)
  } else {
    alert("Out of stock!");
  }
}
function chocominus() {
  if (chocoStock < 10) {
    chocoStock++;
    document.getElementById("chocoStock").innerHTML =
      `A3: CHOCOLATES &nbsp;&nbsp; STOCK: ${chocoStock} &nbsp;&nbsp; PRICE: $30`;
      addToCart("CHOCOLATE",30)
  }
}
let bigStock = 10;
function bigplus() {
  if (bigStock > 0) {
    bigStock--;
    document.getElementById("bigStock").innerHTML =
      `B1:BINGO &nbsp;&nbsp; STOCK: ${bigStock} &nbsp;&nbsp; PRICE: $20`;
      addToCart("BINGO",20)
  } else {
    alert("Out of stock!");
  }
}
function bigminus() {
  if (bigStock < 10) {
    bigStock++;
    document.getElementById("browStock").innerHTML =
      `B1:BINGO &nbsp;&nbsp; STOCK: ${bigStock} &nbsp;&nbsp; PRICE: $20`;
        addToCart("BINGO",20)
  }
}
let goStock = 10;
function goplus() {
  if (goStock > 0) {
    goStock--;
    document.getElementById("goStock").innerHTML =
      `B2:BINGO &nbsp;&nbsp; STOCK: ${goStock} &nbsp;&nbsp; PRICE: $30`;
        addToCart("BINGO",30)
  } else {
    alert("Out of stock!");
  }
}
function gominus() {
  if (goStock < 10) {
    goStock++;
    document.getElementById("goStock").innerHTML =
      `B2:BINGO &nbsp;&nbsp; STOCK: ${goStock} &nbsp;&nbsp; PRICE: $30`;
        addToCart("BINGO",30)
  }
}
let fanStock = 10;
function fanplus() {
  if (fanStock > 0) {
    fanStock--;
    document.getElementById("fanStock").innerHTML =
      `C1:FANTA  &nbsp;&nbsp; STOCK: ${fanStock} &nbsp;&nbsp; PRICE: $30`;
      addToCart("FANTA",30)
  } else {
    alert("Out of stock!");
  }
}
function fanminus() {
  if (fanStock < 10) {
    fanStock++;
    document.getElementById("fanStock").innerHTML =
      `C1:FANTA  &nbsp;&nbsp; STOCK: ${fanStock} &nbsp;&nbsp; PRICE: $30`;
      addToCart("FANTA",30)
  }
}
let bingoStock = 10;
function bingoplus() {
  if (bingoStock> 0) {
    bingoStock--;
    document.getElementById("bingoStock").innerHTML =
      `C2:BINGO &nbsp;&nbsp; STOCK: ${bingoStock} &nbsp;&nbsp; PRICE: 10`;
       addToCart("BINGO",10)
  } else {
    alert("Out of stock!");
  }
}
function bingominus() {
  if (bingoStock < 10) {
    bingoStock++;
    document.getElementById("bingoStock").innerHTML =
      `C2:BINGO &nbsp;&nbsp; STOCK: ${bingoStock} &nbsp;&nbsp; PRICE: $10`;
       addToCart("BINGO",10)
  }
}
let browStock = 10;
function browplus() {
  if (browStock > 0) {
    browStock--;
    document.getElementById("browStock").innerHTML =
      `C3:BROWNIE &nbsp;&nbsp; STOCK: ${browStock} &nbsp;&nbsp; PRICE: $30`;
      addToCart("BROWINE",30)
  } else {
    alert("Out of stock!");
  }
}
function browminus() {
  if (browStock < 10) {
    browStock++;
    document.getElementById("browStock").innerHTML =
      `C3:BROWNIE &nbsp;&nbsp; STOCK: ${browStock} &nbsp;&nbsp; PRICE: $30`;
       addToCart("BROWINE",30)
  }
}
let cowaferStock = 10;
function cowaferplus() {
  if (cowaferStock > 0) {
    cowaferStock--;
    document.getElementById("cowaferStock").innerHTML =
      `D3:CHOCOWAFER &nbsp;&nbsp; STOCK: ${cowaferStock} &nbsp;&nbsp; PRICE: $30`;
      addToCart("CHOCOWAFER",30)
  } else {
    alert("Out of stock!");
  }
}
function cowaferminus() {
  if (cowaferStock < 10) {
    cowaferStock++;
    document.getElementById("cowaferStock").innerHTML =
      `D3:CHOCOWAFER &nbsp;&nbsp; STOCK: ${cowaferStock} &nbsp;&nbsp; PRICE: $30`;
       addToCart("CHOCOWAFER",30)
  }
}
let kurStock = 10;
function kurplus() {
  if (kurStock > 0) {
    kurStock--;
    document.getElementById("kurStock").innerHTML =
      `B3:KURKURE &nbsp;&nbsp; STOCK: ${kurStock} &nbsp;&nbsp; PRICE: $40`;
      addToCart("KURKURE",40)
  } else {
    alert("Out of stock!");
  }
}
function kurminus() {
  if (kurStock < 10) {
    kurStock++;
    document.getElementById("kurStock").innerHTML =
    `B3:KURKURE &nbsp;&nbsp; STOCK: ${kurStock} &nbsp;&nbsp; PRICE: $40`;
    addToCart("KURKURE",40)
  }
}
let waferStock = 10;
function waferplus() {
  if (waferStock> 0) {
    waferStock--;
    document.getElementById("waferStock").innerHTML =
      `D1:WAFER &nbsp;&nbsp; STOCK: ${waferStock} &nbsp;&nbsp; PRICE: $20`;
      addToCart("WAFER",20)
  } else {
    alert("Out of stock!");
  }
}
function waferminus() {
  if (waferStock < 10) {
    waferStock++;
    document.getElementById("waferStock").innerHTML =
      `D1:WAFER &nbsp;&nbsp; STOCK: ${waferStock} &nbsp;&nbsp; PRICE: $20`;
      addToCart("WAFER",20)
  }
}
let munchStock = 10;
function munchplus() {
  if (munchStock> 0) {
    munchStock--;
    document.getElementById("munchStock").innerHTML =
      `D2:MUNCH  &nbsp;&nbsp; STOCK: ${munchStock} &nbsp;&nbsp; PRICE: $10`;
      addToCart("MUNCH",10)
    } else {
      alert("Out of stock!");
    }
  }
  function munchminus() {
  if (munchStock< 10) {
    munchStock++;
    document.getElementById("munchStock").innerHTML =
      `D2:MUNCH  &nbsp;&nbsp; STOCK: ${munchStock} &nbsp;&nbsp; PRICE: $10`;
 addToCart("MUNCH",10)
    }
}
 


let cart = JSON.parse(localStorage.getItem("cart")) || [];
// || operator 
function addToCart(name, price) {
  let item = cart.find(i => i.name === name);
  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 }); /// [{name: "Kurkure", price: "$20", qty: 2},{name: "milkyway",}]
  }
  console.log(cart) // 
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}