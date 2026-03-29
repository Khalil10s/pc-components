// Function to toggle details visibility
function toggleDetails(button) {
    const details = button.previousElementSibling;
    details.classList.toggle("expanded");
    button.textContent = details.classList.contains("expanded") ? "Visa mindre" : "Visa mer";
}

// Function to filter components based on search input
function filterComponents() {
    const searchTerm = document.getElementById("search").value.toLowerCase().trim();
    const components = document.querySelectorAll(".component");

    if (searchTerm === "") {
        // Show all components if search is empty
        components.forEach(component => {
            component.classList.remove("hidden");
        });
        return;
    }

    components.forEach(component => {
        const name = component.getAttribute("data-name").toLowerCase();
        const title = component.querySelector("h2").textContent.toLowerCase();
        const description = component.querySelector(".details").textContent.toLowerCase();
        const specs = component.querySelector(".specs").textContent.toLowerCase();

        // Check if search term matches any of the component data
        const matches = name.includes(searchTerm) ||
                        title.includes(searchTerm) ||
                        description.includes(searchTerm) ||
                        specs.includes(searchTerm);

        if (matches) {
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