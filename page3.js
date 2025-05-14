document.getElementById('nextButton').addEventListener('click', function () {
    const emailUsername = document.getElementById('emailUsername').value;
    const password = document.getElementById('password').value;

    if (emailUsername && password) {
        window.location.href = "Page4.html";
    } else {
        alert("Please fill in both fields!");
    }
});

document.getElementById('signupLink').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "Page2.html";
});