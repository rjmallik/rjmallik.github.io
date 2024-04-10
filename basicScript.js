document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Attach click event to each navigation link
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Get the href attribute of the clicked link
            const targetPage = this.getAttribute('href');

            // Load the new page
            loadPage(targetPage);
        });
    });

    // Function to load the specified page
    function loadPage(page) {
        // Use a simple page redirection for demonstration
        window.location.href = page;
    }
});s