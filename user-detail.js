document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");  
    const userDetail = document.getElementById("user-detail");
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())  
        .then(user => {
            //แสดงข้อมูลผู้ใช้
        })
});