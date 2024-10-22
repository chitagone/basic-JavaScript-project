// This line retrieves the HTML element with the id "password" and assigns it to the variable 'passwordBox'.
const passwordBox = document.getElementById("password");

// This variable 'length' holds the desired length of the password.
const length = 12;

// These variables store sets of characters to be used in generating the password.
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{><?-=";

// This variable combines all the character sets into one string.
const allChars = upperCase + lowerCase + number + symbol; // There seems to be a typo here, "number" is concatenated twice.

// This function generates a password using the character sets and desired length.
function createPassword() {
    // Initialize an empty string to store the generated password.
    let password = "";

    // Append one random uppercase letter to the password string.
    password += upperCase[Math.floor(Math.random() * upperCase.length)];

    // Append one random lowercase letter to the password string.
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

    // Append one random number to the password string.
    password += number[Math.floor(Math.random() * number.length)];

    // Append one random symbol to the password string.
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // While the length of the password is less than the desired length...
    while (length > password.length) {
        // Append one random character from the combined character set to the password string.
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Set the generated password as the value of the HTML input element with id "password".
    passwordBox.value = password;
}

// This function selects the text inside the password input field and copies it to the clipboard.
function copyPassword() {
    passwordBox.select(); // Select the text inside the password input field.
    document.execCommand("copy"); // Copy the selected text to the clipboard.
}