fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    const userList = document.getElementById("userList");
    const status = document.getElementById("status");
    status.textContent = "";

    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.name;
      userList.appendChild(li);
    });
  })

  .catch((error) => {
    const status = document.getElementById("status");
    status.textContent = "データの取得に失敗しました";
    console.error(error);
  });