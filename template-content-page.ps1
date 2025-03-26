# Template for individual content pages
$templateContentPage = @"
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light dark">
    <title>Content Page</title>
    <!-- Critical dark mode styles - loaded first -->
    <link rel="stylesheet" href="../../darkmode.css">
    <!-- Dark mode initialization script - must execute immediately -->
    <script src="../../darkmode.js"></script>
    <!-- Main stylesheet -->
    <link rel="stylesheet" href="../../style.css">
</head>
<body>
    <header>
        <h1>Page Content</h1>
        <div class="theme-switch-wrapper">
            <label class="theme-switch" for="darkModeToggle">
                <input type="checkbox" id="darkModeToggle">
                <div class="slider round"></div>
            </label>
            <span id="themeText">Light Mode</span>
        </div>
    </header>
    
    <main class="subject-container">
        <!-- Content goes here -->
        
        <div class="navigation-buttons">
            <button id="prevPage">Poprzednia strona</button>
            <a href="../index.html"><button>Spis treści</button></a>
            <a href="../../index.html"><button>Strona główna</button></a>
            <button id="nextPage">Nastepna strona</button>
        </div>
    </main>

    <script src="../../content-navigation.js"></script>
</body>
</html>
"@

# How to use this template:
# 1. Copy this file to your PowerShell script
# 2. Modify the template if needed
# 3. Run a script that uses this template to generate content pages:
#
# Example:
# $pageNumber = "42" 
# $subject = "matematyka"
# New-Item -Path "$subject/$pageNumber" -ItemType Directory -Force
# Set-Content -Path "$subject/$pageNumber/index.html" -Value $templateContentPage -Force 
