document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var city = document.getElementById('city').value;

    var message = document.getElementById('message');

    // Regex patterns for validation
    var namePattern = /^[A-Za-z]+$/;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check if first name and last name are alphabetic
    if (!namePattern.test(firstname)) {
        message.textContent = "First name should contain only alphabets!";
        message.style.color = "red";
        return;
    }

    if (!namePattern.test(lastname)) {
        message.textContent = "Last name should contain only alphabets!";
        message.style.color = "red";
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    // Check password complexity
    if (!passwordPattern.test(password)) {
        message.textContent = "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character!";
        message.style.color = "red";
        return;
    }

    // Mock AJAX request for registration
    setTimeout(function() {
        // Assuming registration is successful
        message.textContent = "Registration successful!";
        message.style.color = "green";

        // Reset the form
        document.getElementById('registrationForm').reset();
    }, 1000);
});