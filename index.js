function togglePassword() {
    const passwordInput = document.getElementById("password");
    const passwordToggle = document.querySelector(".password-toggle");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.textContent = "⦿";
    } else {
        passwordInput.type = "password";
        passwordToggle.textContent = "⦾";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    
    loginButton.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "Ejay" && password === "Autajay") {
            alert("Login successful!");
            window.location.assign('homepage.html');
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});

