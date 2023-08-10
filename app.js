const email = document.getElementById("email");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter an EMAIL, silly!");
    } else {
        email.setCustomValidity("")
    }
});

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirm-password");

confirmPassword.addEventListener("input", (event) => {
    if (confirmPassword === password) {
        confirmPassword.setCustomValidity("");
    } else {
        confirmPassword.setCustomValidity("try again")
    }
});


window.onload = () => {
    document.getElementById("email").oninput = checkEmail;
}