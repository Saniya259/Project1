document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // You can add validation or authentication logic here if needed
    
    // Redirect to index.html after submission
    window.location.href = "index.html"; // Redirects the user to the index page
});
