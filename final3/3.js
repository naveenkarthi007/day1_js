let selectedItems = [];
let stock = {
  Coke: 10,
  Pepsi: 10,
  Sprite: 10,
  Fanta: 10,
  chips:10,
  chocolate:10,
  Nachos:10,
  Sandwich:10,
  Coffee:10,
  Tea:10,
  Juice:10,
  Water:10,
  Candy:10,
  Gem:10,
  Biscuit:10,
  EnergyDrink:10
};

function selectItem(elem) {
  const name = elem.dataset.name;
  const price = Number(elem.dataset.price) || 0;
  const img = elem.querySelector('img')?.src || '';

  if (stock[name] <= 0) {
    document.getElementById('message').innerText = `${name} is out of stock!`;
    return;
  }

  stock[name]--;

  const stockDisplay = elem.querySelector('.stock');
  if (stockDisplay) {
    stockDisplay.textContent = `Stock: ${stock[name]}`;
  }

  const item = selectedItems.find(i => i.name === name);

  if (item) {
    item.quantity += 1;
  } else {
    selectedItems.push({
      element: elem,
      name: name,
      price: price,
      img: img,
      quantity: 1
    });
  }

  elem.classList.add('selected');

  const names = selectedItems.map(i => `${i.name} x${i.quantity}`).join(', ');
  const totalPrice = selectedItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  document.getElementById('selectedInfo').innerText = `Selected: ${names || '—'}`;
  document.getElementById('priceInfo').innerText = `Total Price: ₹${totalPrice}`;
  document.getElementById('message').innerText = '';
  document.getElementById('moneyInput').focus();
}

