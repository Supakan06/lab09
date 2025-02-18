document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
    const postsList = document.getElementById("posts-list");
    const userNameElement = document.getElementById("user-name");
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json()) 
    .then(user => {
        // เเสดงชื่อผู้ใช้
    })
})