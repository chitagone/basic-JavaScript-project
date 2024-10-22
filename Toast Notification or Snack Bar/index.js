// Get the element with id "toastBox"
let toastBox = document.getElementById("toastBox");

// Define different messages for success, error, and invalid inputs
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

// Function to display toast messages
function showToash(msg) {
    // Create a new div element for the toast message
    let toast = document.createElement('div');
    // Add the "toast" class to the created div element
    toast.classList.add("toast");
    // Set the innerHTML of the toast to the provided message
    toast.innerHTML = msg;
    // Append the toast to the toastBox container
    toastBox.appendChild(toast);

    // Check if the message includes 'error', then add the 'error' class to the toast
    if (msg.includes('error')) {
        toast.classList.add('error');
    }
    // Check if the message includes 'Invalid', then add the 'Invalid' class to the toast
    if (msg.includes('Invalid')) {
        toast.classList.add('Invalid');
    }

    // Set a timeout to remove the toast after 5 seconds
    setTimeout(() => {
        toast.remove();
    }, 5000)
}