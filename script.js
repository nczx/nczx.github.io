// Handle page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add any additional functionality for the main page here
    // Note: dark mode functionality is now in darkmode.js
});

// Navigation helper for GitHub Pages compatibility
function navigateTo(path) {
    window.location.href = baseUrl + '/' + path;
}

// Link generation functionality
function generateLink(baseDirectory, inputId) {
    var inputTopic = document.getElementById(inputId).value;
    if (!inputTopic) {
        // Redirect to the subject index page if no topic is provided
        navigateTo(baseDirectory + 'index.html');
        return;
    }
    
    var directory = baseUrl + '/' + baseDirectory + inputTopic + '/';
    window.location.href = directory;
}
