// 1. Setup and Initial Code Structure
document.addEventListener('DOMContentLoaded', function () {

    // Task 2: Form Selection and Feedback Division Selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Form Submission and Event Prevention
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Task 3: Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Task 4: Validation Logic
        let isValid = true;
        let messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation:
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password Validation:
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Task 5: Feedback Display Logic
        feedbackDiv.style.display = 'block'; // Show feedback division
        
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Display validation errors
            feedbackDiv.style.color = "#dc3545"; // Red color for error
        }
    });
});
