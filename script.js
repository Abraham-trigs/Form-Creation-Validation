    // 1. Setup and Initial Code Structure
document.addEventListener('DOMContentLoaded', function () {

    // Task 2: Form Selection and Feedback Division Selection
        const form = document.getElementById('registration-form');

    // 3. Feedback Division Selection
        const feedbackDiv = document.getElementById('form-feedback');

    // Form Submission and Event Prevention
        form.addEventListener('submit', function(event) {
         event.preventDefault();
         // Proceed with form validation logic
        });

    // Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

    //   Validation Logic
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

    // Feedback display
        feedbackDiv.style.display = 'block';
        if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
    }

    // Display Validation Errors
    if (!isValid) {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = "#dc3545";
    }
    

});
