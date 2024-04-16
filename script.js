const toggleSwitch = document.getElementById('darkModeToggle');

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme() {
    if (toggleSwitch.checked) {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }
}
function toggleDarkMode(isDarkMode) {
    if (isDarkMode) {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }
}

// Function to toggle dark mode theme
function toggleDarkMode(isDarkMode) {
    if (isDarkMode) {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }
}

// Function to check and set dark mode preference
function checkDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    toggleDarkMode(isDarkMode);
    // Set the state of the dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.checked = isDarkMode;
}

// Function to handle dark mode toggle change
function handleDarkModeToggleChange() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const isDarkMode = darkModeToggle.checked;
    localStorage.setItem('darkMode', isDarkMode);
    toggleDarkMode(isDarkMode);
}

// Add event listener for dark mode toggle change
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', handleDarkModeToggleChange);

// Check dark mode preference on page load
checkDarkModePreference();
