document.addEventListener('DOMContentLoaded', () => {
    const bookCallButton = document.getElementById("bookacall");

    // Select the target section
    const selectDateSection = document.querySelector(".select-date-section");

    // Add an event listener for smooth scrolling
    bookCallButton.addEventListener('click', () => {
        if (selectDateSection) {
            selectDateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error('Select Date section not found!');
        }
    });

    const submitDone = document.querySelector(".submit");

    submitDone.addEventListener("click", () => {
        const emailInput = document.querySelector("#email");
        const dateInput = document.querySelector("#calendar");

        if (!emailInput.value || !dateInput.value) {
            alert("Please fill in all fields correctly");
        } else {
            alert("Form submitted successfully");
        }
    });

    // New functionality to redirect to aboutme.html
    const profileImage = document.querySelector('.profile-image-container img'); // Adjust the selector as necessary

    if (profileImage) {
        profileImage.addEventListener('click', () => {
            window.location.href = 'aboutme.html';
        });
    } else {
        console.error('Profile image not found!');
    }
});
