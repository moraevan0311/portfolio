document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if(document.body.classList.contains("dark-mode")){
            toggle.textContent = "☀️"; // show sun in dark mode
        } else {
            toggle.textContent = "🌙"; // show moon in light mode
        }
    });
});