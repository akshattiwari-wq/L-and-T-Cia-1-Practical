fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  })
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error("Error fetching user details:", error.message);
  });
