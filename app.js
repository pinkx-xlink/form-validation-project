const email = document.getElementById("email");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter an EMAIL, silly!");
    } else {
        email.setCustomValidity("")
    }
});

// const password = document.getElementById("password");

// const confirmPassword = document.getElementById("confirm-password");

function validatePassword(form) {
    password = form.password.value;
    confirmPassword = form.confirmPassword.value;

    if (password == '')
        alert("Please enter ur password babe");
    else if (confirmPassword == '')
        alert(Please confirm password babe!);
    else if(password != confirmPassword) {
        alert("passwords don't match, babe...")
        return false;
    } else {
        alert("Passwords match - welcome!")
        return true;
    }
}

// confirmPassword.addEventListener("input", (event) => {
//     if (confirmPassword === password) {
//         confirmPassword.setCustomValidity("");
//     } else {
//         confirmPassword.setCustomValidity("try again")
//     }
// });


window.onload = () => {
    document.getElementById("email").oninput = checkEmail;
    document.getElementById("password").oninput = validatePassword;
    document.getElementById("confirmPassword").oninput = validatePassword;
}