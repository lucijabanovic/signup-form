let inputs = document.querySelectorAll("input");

inputs.forEach(function(node) {
    node.addEventListener("input", () => {
        if (node.value != '') {
            node.nextElementSibling.classList.add("active");
            node.style.border = '2px solid #e38ddd';
        } else {
            node.nextElementSibling.classList.remove("active");
            node.style.border = '2px solid #e3ade0';
        }
    });
});

let firstName = document.querySelector("#first-name > input");
let lastName = document.querySelector("#last-name > input");
let email = document.querySelector("#email > input");
let number = document.querySelector("#phone-number > input");
let pass = document.querySelector("#password > input");
let confirm = document.querySelector("#confirm-password > input");

let weak = document.querySelector("#weak");
let okay = document.querySelector("#okay");
let strong = document.querySelector("#strong");
let strength = document.querySelector("#strength");
let passStatus = document.querySelector("#status");

firstName.addEventListener("focus", () => {
    if (firstName.value == '') {
        firstName.placeholder = "e.g. John";
    }
});

lastName.addEventListener("focus", () => {
    if (lastName.value == '') {
        lastName.placeholder = "e.g. Doe";
    }
});

email.addEventListener("focus", () => {
    if (email.value == '') {
        email.placeholder = "e.g. john.doe@example.com";
    }
});

number.addEventListener("focus", () => {
    if (number.value == '') {
        number.placeholder = "e.g. (123) 456-7890";
    }
});

pass.addEventListener("focus", () => {
    strength.style.display = "flex";
});

pass.addEventListener("input", () => {
    let val = pass.value;

    let hasUpperCase = /[A-Z]/.test(val);
    let hasNumber = /\d/.test(val);
    let isLong = (val.length >= 8);

    let checks = [hasUpperCase, hasNumber, isLong];
    let filtered = checks.filter(x => x == true)

    if (filtered.length == 0) {
        weak.classList.remove("red");
        okay.classList.remove("orange");
        strong.classList.remove("green");
        passStatus.textContent = '';
    } else if (filtered.length == 1) {
        okay.classList.remove("orange");
        strong.classList.remove("green");
        weak.classList.add("red");
        passStatus.textContent = "Weak";
    } else if (filtered.length == 2) {
        strong.classList.remove("green");
        okay.classList.add("orange");
        passStatus.textContent = "Okay";
    } else if (filtered.length == 3) {
        weak.classList.add("red");
        okay.classList.add("orange");
        strong.classList.add("green");
        passStatus.textContent = "Strong";
    }
});

pass.addEventListener("blur", () => {
    if (pass.value == '') {
        strength.style.display = "none";
    }
});

inputs.forEach((node) => {
    node.addEventListener("blur", () => {
        node.placeholder = '';
    });
});

function validatePasswordMatch() {
    if (confirm.value === '') {
        confirm.setCustomValidity('');
        return;
    }

    if (confirm.value !== pass.value) {
        confirm.setCustomValidity("Passwords do not match!");
    } else {
        confirm.setCustomValidity('');
    }
}

confirm.addEventListener("input", validatePasswordMatch);
pass.addEventListener("input", validatePasswordMatch);
