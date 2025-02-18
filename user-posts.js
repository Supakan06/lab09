document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
    const postsList = document.getElementById("posts-list");
    const userNameElement = document.getElementById("user-name");
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json()) 
    .then(user => {
        userNameElement.textContent = user.name;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())  
    .then(posts => {
        posts.forEach(post => {
            const postElement = document.createElement("div");    
            postElement.classList.add("post");
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button class="toggle-comments" data-post-id="${post.id}">ดูความคิดเห็น</button>
                <div class="comments" id="comments-${post.id}" style="display: none;"></div>
            `;
            postsList.appendChild(postElement);
        });
        document.querySelectorAll(".toggle-comments").forEach(button => {
            button.addEventListener("click", (event) => {
                const postId = event.target.dataset.postId;
                const commentsDiv = document.getElementById(`comments-${postId}`);
                if (commentsDiv.style.display === "none") {
                    // ดึงความคิดเห็นและแสดง
                } else {
                    commentsDiv.style.display = "none";
                    event.target.textContent = "ดูความคิดเห็น";
                }
                
            });
});
});
});
})