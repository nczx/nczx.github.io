// Handle page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add any additional functionality for the main page here
    // Note: dark mode functionality is now in darkmode.js
});

// Link generation functionality
function generateLink(baseDirectory, inputId) {
    var inputTopic = document.getElementById(inputId).value;
    if (!inputTopic) return;
    
    var directory = baseDirectory + inputTopic + '/';
    window.location.href = directory;
}
