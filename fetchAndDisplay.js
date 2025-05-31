// Function to fetch users and log their names
function fetchAndDisplayUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        console.log(user.name);
      });
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });
}

fetchAndDisplayUsers();
