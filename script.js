document.addEventListener("DOMContentLoaded", function() {
    // Select all buttons and section elements
    const buttons = document.querySelectorAll(".icon-btn");
    const sections = {
        "Profile": "#profile",
        "Work Experience": "#work-experience",
        "Projects": "#projects",
        "Achievements": "#achievements",
        "Extra-curriculars": "#extracurriculars"
    };

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const sectionId = this.getAttribute("title");
            if (sections[sectionId]) {
                document.querySelector(sections[sectionId]).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
