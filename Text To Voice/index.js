// Create a new instance of SpeechSynthesisUtterance for speech synthesis
let speech = new SpeechSynthesisUtterance();

// Initialize an empty array to store available voices
let voices = [];

// Select the <select> element from the HTML document
let voiceSelect = document.querySelector("select");

// Event handler for when the list of available voices changes
window.speechSynthesis.onvoiceschanged = () => {
    // Update the array of available voices
    voices = window.speechSynthesis.getVoices();

    // Set the default voice to the first voice in the array
    speech.voice = voices[0];

    // Populate the dropdown menu with voice options
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// Event listener for when the user changes the selected voice in the dropdown menu
voiceSelect.addEventListener("change", () => {
    // Set the voice of the speech utterance to the selected voice
    speech.voice = voices[voiceSelect.value];
});

// Event listener for when the user clicks the button to initiate speech synthesis
document.querySelector("button").addEventListener("click", () => {
    // Set the text to be spoken to the value entered in the textarea
    speech.text = document.querySelector("textarea").value;

    // Initiate speech synthesis with the configured utterance
    window.speechSynthesis.speak(speech);
});