function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();

      if (randomNumber > 0.5) {
        resolve("Data fetched successfully!");
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 1000);
  });
}

async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log("Fetched data successfully!");
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

// Call the handler to simulate workflow
fetchDataHandler();
