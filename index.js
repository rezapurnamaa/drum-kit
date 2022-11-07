var drums = document.querySelectorAll(".drum")

drums.forEach(drum => {
    drum.addEventListener("click", handleClick);

});
function handleClick() {
    alert("Click")

}