let selectField = document.getElementById("selectField");

let selectText = document.getElementById("selectText");

let options = document.querySelectorAll(".options");

let list = document.getElementById("list");

let arrowIcon = document.getElementById("arrowIcon");

selectField.addEventListener("click", () => {

    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");

});


options.forEach(option => {
    option.addEventListener("click", () => {
        selectText.innerHTML = option.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    });
});