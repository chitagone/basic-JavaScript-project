let imgBox = document.getElementById("imgBox"); // Getting a reference to the div element with id "imgBox"
let qrImage = document.getElementById("qrImage"); // Getting a reference to the img element with id "qrImage"
let qrText = document.getElementById("qrText"); // Getting a reference to the input element with id "qrText"

function gernerateQR() { // Defining a function named "generateQR"

    if (qrText.value.length > 0) { // Checking if the input field has some value
        // Generating the QR code URL using the input value and setting the src attribute of the image element
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img"); // Adding the "show-img" class to the imgBox element to display it
    } else {
        qrText.classList.add("error"); // Adding the "error" class to the input field if it's empty
        setTimeout(() => { // Setting a timeout function to remove the "error" class after 1000 milliseconds (1 second)
            qrText.classList.remove("error"); // Removing the "error" class from the input field
        }, 1000);
    }
}