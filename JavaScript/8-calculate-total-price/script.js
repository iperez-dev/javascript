document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateTotalPrice);

function calculateTotalPrice() {
  const items = [
    { name: "item1", price: 10, quantity: 2 },
    { name: "item2", price: 5, quantity: 3 },
  ];

  let totalPrice = 0;

  // Calculate total price
  items.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  const totalPriceElement = document.getElementById("totalPrice");
  totalPriceElement.textContent = `Total Price: $${totalPrice}`;
}
