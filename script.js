document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        // โค้ดสำหรับแสดงผู้ใช้
    })
});