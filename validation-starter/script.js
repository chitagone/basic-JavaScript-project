let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");


function vailidateName() {
    let name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required'
        return false
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name'
        return false

    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function vailidatePhone() {
    let phone = document.getElementById("contact-phone").value;
    if (phone.length == 0) {
        phoneError.innerHTML("Phone is requried")
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "phone no should be 10 digits"
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = " Only digits please"
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function vailidateEmail() {
    let email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }

    if (!email.match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;


}

function vailidateMessage() {
    let message = document.getElementById("contact-meaasge").value;
    let required = 30;
    let left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + 'More character required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!vailidateName() || !vailidatePhone() || !vailidateEmail() || !vailidateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the error to submit';
        setTimeout(function() { submitError.style.display = 'none'; }, 3000);
        return false
    }
}