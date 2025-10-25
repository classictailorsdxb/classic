// form-validation.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(event) {
        let isValid = true;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;

        // Clear previous error messages
        clearErrors();

        // Validate name
        if (name.trim() === "") {
            showError("name", "Name is required.");
            isValid = false;
        }

        // Validate email
        if (email.trim() === "") {
            showError("email", "Email is required.");
            isValid = false;
        } else if (!validateEmail(email)) {
            showError("email", "Please enter a valid email address.");
            isValid = false;
        }

        // Validate message
        if (message.trim() === "") {
            showError("message", "Message cannot be empty.");
            isValid = false;
        }

        // Validate phone (basic)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            showError("phone", "Please enter a valid 10-digit phone number.");
            isValid = false;
        }

        // Validate service
        if (service.trim() === "") {
            showError("service", "Please select a service.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
        } else {
            // Here you would typically send the data to your server
            console.log('Form submitted:', { name, email, phone, service, message });
            alert('Thank you for your enquiry. We will contact you soon!');
            form.reset();
        }
    });

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = document.createElement("div");
        error.className = "error-message";
        error.innerText = message;
        field.parentNode.insertBefore(error, field.nextSibling);
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(function(error) {
            error.remove();
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});