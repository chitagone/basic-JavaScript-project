let imgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");

originalImg = document.getElementById("originalImg");

line = document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";

let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function(e) {
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;

}