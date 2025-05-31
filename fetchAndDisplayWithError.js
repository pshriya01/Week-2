async function fetchAndDisplayProducts() {
  const apiURL = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const products = await response.json();

    products.forEach((product) => {
      console.log(`Title: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image URL: ${product.image}`);
      console.log(`----------------------`);
    });

    const totalPrice = products.reduce(
      (sum, product) => sum + product.price,
      0
    );
    console.log(`Total Price of all products: $${totalPrice.toFixed(2)}`);
  } catch (error) {
    console.error("Failed to fetch products. Please try again later.");
    console.error("Error:", error.message);
  }
}

fetchAndDisplayProducts();
