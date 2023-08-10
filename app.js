const email = document.getElementById("email");

email.addEventListener("input", (event) => {
    if(email.validity.typeMismatch) {
        email.setCustomValidity("Please enter an EMAIL, silly!");
    } else {
        email.setCustomValidity("")
    }
});