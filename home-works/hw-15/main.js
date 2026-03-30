const usersList = document.getElementById("usersList");

const res = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not get users");
    }

    return response.json();
  })
  .then((users) => {
    console.log(users);
    users.forEach((user) => {
      usersList.insertAdjacentHTML(
        "beforeend",
        `
            <div class='users'>
                <p>${user.id} | </p>
                <p>${user.username} | </p>
                <p>${user.email} | </p>
                <p>${user.address.city} | </p>
                <p>${user.phone} | </p>
                <p>${user.company.name} | </p>
            </div>
            
            `,
      );
    });
  });
