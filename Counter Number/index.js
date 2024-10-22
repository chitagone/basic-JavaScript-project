const decreaseBtn = document.getElementById("decrease-btn");
const increaseBtn = document.getElementById("increase-btn");
const reset = document.getElementById("reset-btn");
const countLabel = document.getElementById("counter-label");
let counter = 0;

increaseBtn.onclick = function() {
    counter++;
    countLabel.textContent = counter;
}

decreaseBtn.onclick = function() {
    counter--;
    countLabel.textContent = counter;

}

reset.onclick = function() {
    counter = 0;
    countLabel.textContent = counter;
}