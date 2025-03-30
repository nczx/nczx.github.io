// Handle page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add any additional functionality for the main page here
    // Note: dark mode functionality is now in darkmode.js
});

// Navigation helper for GitHub Pages compatibility
function navigateTo(path) {
    // Remove leading slash if present
    if (path.startsWith('/')) {
        path = path.substring(1);
    }
    // Construct the full URL
    var fullUrl = window.location.origin + baseUrl + '/' + path;
    console.log('Navigating to:', fullUrl);
    window.location.href = fullUrl;
}

// Link generation functionality
function generateLink(baseDirectory, inputId) {
    var inputTopic = document.getElementById(inputId).value;
    if (!inputTopic) {
        // Redirect to the subject index page if no topic is provided
        navigateTo(baseDirectory + 'index.html');
        return;
    }
    
    // Remove trailing slash if present
    if (baseDirectory.endsWith('/')) {
        baseDirectory = baseDirectory.substring(0, baseDirectory.length - 1);
    }
    
    // Construct the full URL
    var fullUrl = window.location.origin + baseUrl + '/' + baseDirectory + '/' + inputTopic + '/';
    console.log('Navigating to:', fullUrl);
    window.location.href = fullUrl;
}
