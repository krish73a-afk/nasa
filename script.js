function showPopup(event) {
    event.preventDefault();

    // Show popup
    document.getElementById("popup").style.display = "flex";

    // Fade out page
    document.body.classList.add("fade-out");

    // OPTIONAL: redirect after 2 sec
    setTimeout(() => {
        window.location.href = "index.html"; // change page if you want
    }, 200000);
}
