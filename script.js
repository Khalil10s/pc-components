// Khalil: funktion för att visa eller dölja text

function toggle(element) {
    const details = element.querySelector(".details");

    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}