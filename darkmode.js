// Immediate dark mode application
(function() {
    // Apply dark mode immediately if previously selected
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark-mode');
        document.documentElement.style.backgroundColor = '#121212';
        
        // Set color-scheme meta
        let metaColorScheme = document.querySelector('meta[name="color-scheme"]');
        if (metaColorScheme) {
            metaColorScheme.setAttribute('content', 'dark');
        } else {
            metaColorScheme = document.createElement('meta');
            metaColorScheme.setAttribute('name', 'color-scheme');
            metaColorScheme.setAttribute('content', 'dark');
            document.head.appendChild(metaColorScheme);
        }
    }
    
    // Add preload class to prevent transitions during page load
    document.documentElement.classList.add('preload');
    
    // Remove preload class after page loads
    window.addEventListener('load', function() {
        document.documentElement.classList.remove('preload');
    });
})();

// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Variables for dark mode
    const toggleSwitch = document.getElementById('darkModeToggle');
    const themeText = document.getElementById('themeText');
    
    if (!toggleSwitch) return;
    
    // Function to toggle dark mode theme
    function toggleDarkMode(isDarkMode) {
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode');
            document.body.setAttribute('data-theme', 'dark');
            if (themeText) themeText.textContent = 'Dark Mode';
            
            // Update meta color-scheme
            let metaColorScheme = document.querySelector('meta[name="color-scheme"]');
            if (metaColorScheme) {
                metaColorScheme.setAttribute('content', 'dark');
            }
        } else {
            document.documentElement.classList.remove('dark-mode');
            document.body.removeAttribute('data-theme');
            if (themeText) themeText.textContent = 'Light Mode';
            
            // Update meta color-scheme
            let metaColorScheme = document.querySelector('meta[name="color-scheme"]');
            if (metaColorScheme) {
                metaColorScheme.setAttribute('content', 'light');
            }
        }
    }
    
    // Function to handle dark mode toggle change
    function handleDarkModeToggleChange() {
        const isDarkMode = toggleSwitch.checked;
        localStorage.setItem('darkMode', isDarkMode);
        toggleDarkMode(isDarkMode);
    }
    
    // Function to check and set dark mode preference
    function checkDarkModePreference() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        toggleSwitch.checked = isDarkMode;
        toggleDarkMode(isDarkMode);
    }
    
    // Initialize event listener for dark mode toggle
    toggleSwitch.addEventListener('change', handleDarkModeToggleChange);
    
    // Check dark mode preference
    checkDarkModePreference();
}); 
