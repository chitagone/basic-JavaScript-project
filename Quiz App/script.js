// Define an array of objects representing questions, each containing the question itself and an array of possible answers.
const question = [{
        question: "which is largest animal in the world?",
        answers: [
            { Text: "shark", correct: false },
            { Text: "Bule whale", correct: true },
            { Text: "Elephant", correct: false },
            { Text: "Giraffe", correct: false },
        ]
    },
    {
        question: "which is largest country in the world?",
        answers: [
            { Text: "Vatica city", correct: true },
            { Text: "Bhutan", correct: false },
            { Text: "Nepal", correct: false },
            { Text: "Shri Lanka", correct: false },
        ]
    },
    {
        question: "which is largest desert in the world?",
        answers: [
            { Text: "kalahari", correct: false },
            { Text: "Gobi", correct: false },
            { Text: "Sahara", correct: false },
            { Text: "Antarctica", correct: true },
        ]
    },
    {
        question: "which is smallest continent in the world?",
        answers: [
            { Text: "Asia", correct: false },
            { Text: "Australia", correct: true },
            { Text: "Arctic", correct: false },
            { Text: "Africa", correct: false },
        ]
    }
];

// Get references to HTML elements by their IDs.
const questionElement = document.getElementById("question"); // Get reference to the element with ID "question".
const answerButton = document.getElementById("answer-button"); // Get reference to the element with ID "answer-button".
const nextButton = document.getElementById("next-btn"); // Get reference to the element with ID "next-btn".

// Initialize variables to track current question index and score.
let currentQuestionIndex = 0; // Initialize the current question index to 0.
let score = 0; // Initialize the score to 0.

// Function to start the quiz.
function startQuiz() {
    currentQuestionIndex = 0; // Reset current question index to start from the first question.
    score = 0; // Reset score to 0.
    nextButton.innerHTML = "Next"; // Set the text content of the next button to "Next".
    showQuestion(); // Call the function to display the first question.
}

// Function to display the current question.
function showQuestion() {
    resetState(); // Call the function to reset the state of the quiz (clear answer buttons, etc.).
    let currentQuestion = question[currentQuestionIndex]; // Get the current question object.
    let questionNo = currentQuestionIndex + 1; // Calculate the question number (index + 1).
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Display the question text.

    // Loop through each answer in the current question's answers array.
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); // Create a button element.
        button.innerHTML = answer.Text; // Set the button's text content to the answer text.
        button.classList.add("btn"); // Add a CSS class to the button.
        answerButton.appendChild(button); // Append the button to the answer button container.
        if (answer.correct) { // If the answer is correct,
            button.dataset.correct = answer.correct; // Set a custom data attribute to indicate correctness.
        }
        button.addEventListener("click", selectAnswer); // Add a click event listener to the button.
    });
}

// Function to reset the state of the quiz.
function resetState() {
    nextButton.style.display = "none"; // Hide the next button.
    while (answerButton.firstChild) { // Loop through each child element of the answer button container.
        answerButton.removeChild(answerButton.firstChild); // Remove each child element.
    }
}

// Function to handle when an answer is selected.
function selectAnswer(e) {
    const selectedBtn = e.target; // Get the button that was clicked.
    const isCorrect = selectedBtn.dataset.correct === "true"; // Check if the selected answer is correct.
    if (isCorrect) { // If the selected answer is correct,
        selectedBtn.classList.add("correct"); // Add a CSS class to indicate correctness.
        score++; // Increment the score.
    } else { // If the selected answer is incorrect,
        selectedBtn.classList.add("incorrect"); // Add a CSS class to indicate incorrectness.
    }
    // Loop through each answer button.
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") { // If the button represents a correct answer,
            button.classList.add("correct"); // Add a CSS class to indicate correctness.
        }
        button.disabled = true; // Disable the button to prevent further interaction.
    });
    nextButton.style.display = "block"; // Display the next button.
}

// Function to display the final score.
function showScore() {
    resetState(); // Call the function to reset the state of the quiz.
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`; // Display the score.
    nextButton.innerHTML = "Play Again"; // Set the text content of the next button to "Play Again".
    nextButton.style.display = "block"; // Display the next button.
}

// Function to handle the next button click.
function handleNextButton() {
    currentQuestionIndex++; // Increment the current question index.
    if (currentQuestionIndex < question.length) { // If there are more questions remaining,
        showQuestion(); // Display the next question.
    } else { // If all questions have been answered,
        showScore(); // Display the final score.
    }
}

// Add a click event listener to the next button.
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) { // If there are more questions remaining,
        handleNextButton(); // Handle the next button click.
    } else { // If all questions have been answered,
        startQuiz(); // Start the quiz again.
    }
});

// Start the quiz when the page loads.
startQuiz(); // Call the startQuiz function to initialize the quiz.