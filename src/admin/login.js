document.querySelector(".login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission for demo purposes

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        // Replace this with actual login logic
        alert(`Welcome, ${username}!`);
        // Redirect to a page in the same domain
        window.location.href = "/src/admin/admin.html";
    }
});
