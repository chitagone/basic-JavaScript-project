// Get the input element with id "date"
let userInput = document.getElementById("date");

// Set the maximum value of the input to today's date
userInput.max = new Date().toISOString().split("T")[0];

// Get the result element where we'll display the calculated age
let result = document.getElementById("result");

// Function to calculate age
function calculateAge() {
    // Get the birth date from the input value
    let birthDate = new Date(userInput.value);

    // Extract day, month, and year components from the birth date
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // JavaScript months are zero-based, so we add 1
    let y1 = birthDate.getFullYear();

    // Get today's date
    let today = new Date();

    // Extract day, month, and year components from today's date
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1; // JavaScript months are zero-based, so we add 1
    let y2 = today.getFullYear();

    // Initialize variables to store age components
    let d3, m3, y3;

    // Calculate years
    y3 = y2 - y1;

    // Calculate months
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        // If current month is less than birth month, decrement years by 1 and adjust months
        y3--;
        m3 = 12 + m2 - m1;
    }

    // Calculate days
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        // If current day is less than birth day, adjust months and days accordingly
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    // If months are negative, adjust years and months
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    // Display the calculated age in the result element
    result.innerHTML = `you are <span>${y3}</span> year, <span>${m3}</span> month and <span>${d3}</span> days old`;
}

// Function to get the number of days in a month
function getDaysInMonth(year, month) {
    // Create a new Date object with the given year and month
    // Set day to 0 to get the last day of the previous month
    return new Date(year, month, 0).getDate();
}