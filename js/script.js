const passwordInput = document.querySelector("input#user-password");
const passwordConfirmInput = document.querySelector("input#user-password-confirm");
const errorMessage = document.querySelector("span.password-message");

passwordConfirmInput.addEventListener("focus", (event) => {
    errorMessage.textContent = "";
});

passwordConfirmInput.addEventListener("blur", (event) => {
    const password = passwordInput.value;
    const passwordConfirm = passwordConfirmInput.value;
    if ((password.length > 0) && (password !== passwordConfirm)) {
        errorMessage.textContent = "* Passwords do not match";
    }
});

