// Function to toggle details visibility
function toggle(element) {
    const details = element.querySelector(".details");
    details.classList.toggle("expanded");
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

// Add click event listeners to components
document.addEventListener("DOMContentLoaded", () => {
    const components = document.querySelectorAll(".component");
    components.forEach(component => {
        component.addEventListener("click", () => toggle(component));
    });
});