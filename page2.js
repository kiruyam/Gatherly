document.getElementById('nextButton').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else if (username && email && password) {
        window.location.href = "Page4.html";
    } else {
        alert("Please fill all fields!");
    }
});

document.getElementById('loginLink').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "Page3.html";
});
