const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    let price = parseFloat(item.price);
    if (isNaN(price) || price < 0) {
      console.error("Invalid price. Price must be a valid positive number.");
      return;
    }

    const validItem = {
      name: item.name || "Unnamed Item",
      price: price,
    };

    this.items.push(validItem);
    this.total += price;
    console.log(`Added: ${validItem.name} for $${price.toFixed(2)}`);
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  },
};

checkout.addItem({ name: "Coffee Maker", price: "99.95" });
checkout.addItem({ name: "Milk", price: 3.5 });
checkout.addItem({ name: "Invalid Item", price: "abc" });

console.log(checkout.getTotal());
