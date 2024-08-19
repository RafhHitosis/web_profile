document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section-animated");

    function checkSectionInView() {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // Ensure the section is mostly in view before marking it as visible
            if (rect.top < windowHeight - 100 && rect.bottom > 100) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", checkSectionInView);
    checkSectionInView(); // Check on load
});
