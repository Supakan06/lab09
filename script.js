document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const userElement = document.createElement("div");
            userElement.classList.add("user");
  
            userElement.innerHTML = `
              <a href="user-detail.html?id=${user.id}" class="user-link">
                <div class="user-card">
                  <h3>${user.name}</h3>
                  <p>${user.email}</p>
                </div>
              </a>
            `;
            userList.appendChild(userElement);
          });
    })
    .catch(error => console.error("Error fetching users:", error));
});