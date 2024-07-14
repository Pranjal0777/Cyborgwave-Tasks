function validateForm() {
    // Clear previous error message
    document.getElementById("errorMessage").innerText = "";

    // Get form values
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Validate username
    if (username === "") {
        displayError("Username is required.");
        return false;
    }

    // Validate email
    if (email === "") {
        displayError("Email is required.");
        return false;
    } else if (!isValidEmail(email)) {
        displayError("Please enter a valid email address.");
        return false;
    }

    // Validate password
    if (password === "") {
        displayError("Password is required.");
        return false;
    } else if (password.length < 6) {
        displayError("Password must be at least 6 characters long.");
        return false;
    }

    // Validate confirm password
    if (confirmPassword === "") {
        displayError("Please confirm your password.");
        return false;
    } else if (password !== confirmPassword) {
        displayError("Passwords do not match.");
        return false;
    }

    // If all validations pass
    alert("Signup successful!");
    return true;
}

function displayError(message) {
    document.getElementById("errorMessage").innerText = message;
}

function isValidEmail(email) {
    // Simple email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
