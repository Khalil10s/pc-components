// Function to toggle details visibility
function toggleDetails(button) {
    const details = button.previousElementSibling;
    details.classList.toggle("expanded");
    button.textContent = details.classList.contains("expanded") ? "Visa mindre" : "Visa mer";
}

// Function to filter components based on search input
function filterComponents() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const components = document.querySelectorAll(".component");

    components.forEach(component => {
        const name = component.getAttribute("data-name");
        if (name.includes(searchTerm)) {
            component.classList.remove("hidden");
        } else {
            component.classList.add("hidden");
        }
    });
}

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
    // No need to attach click listeners since we use buttons now
});