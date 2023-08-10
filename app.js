const email = document.getElementById("email");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter an EMAIL, silly!");
    } else {
        email.setCustomValidity("")
    }
});

let check = function() {
    if(document.getElementById('password').value ==
        document.getElementById('confirm-password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
    }
}

window.onload = () => {
    document.getElementById("email").oninput = checkEmail;
}