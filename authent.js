document.addEventListener('DOMContentLoaded', function() {
    // Select the signup form
    const signupForm = document.querySelector('form[action="#"]');

    // Add event listener for form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get user input values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Create user object
        const user = {
            username: username,
            email: email,
            password: password
        };

        // Check if the user already exists in localStorage
        const existingUser = JSON.parse(localStorage.getItem('user'));

        if (existingUser) {
            // If user already exists, show an error message
            alert('User already exists. Please choose a different username.');
        } else {
            // Save user object to localStorage
            localStorage.setItem('user', JSON.stringify(user));

            // Redirect to a different page or show a success message
            alert('Signup successful!');
            window.location.href = 'index.html';
        }

        // Clear the form
        signupForm.reset();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Select the login form
    const loginForm = document.querySelector('form[action="#"]');

    // Add event listener for form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get user input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Retrieve user object from localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));

        // Check if user exists and password is correct
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            // Optional: Redirect to a different page or show a success message
            alert('Login successful!');
            window.location.href = 'index.html';
        } else {
            // Optional: Show an error message for incorrect credentials
            alert('Invalid username or password');
        }

        // Clear the form
        loginForm.reset();
    });
});
