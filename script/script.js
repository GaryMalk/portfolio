function showIntasc() {
    var x = document.getElementById("subnav-content");
    var currentDisplay = window.getComputedStyle(x).display;

    if (currentDisplay === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}