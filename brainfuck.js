document.querySelector('#textfield').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(event.target.value);
    }
});

function myFunction() {
}