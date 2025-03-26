// Content page navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get navigation buttons
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    
    // Check if buttons exist
    if (!prevButton && !nextButton) return;
    
    // Function to navigate to previous page
    function navigateToPreviousPage() {
        let url = window.location;
        let urlObject = new URL(url);
        let path = urlObject.pathname;
        let segments = path.split('/');
        
        // Get the current page number
        let currentPage = parseInt(segments[segments.length - 2]);
        
        // Go to previous page if not on first page
        if (currentPage > 1) {
            segments[segments.length - 2] = currentPage - 1;
            let newPath = segments.join('/');
            urlObject.pathname = newPath;
            window.location.href = urlObject.toString();
        }
    }
    
    // Function to navigate to next page
    function navigateToNextPage() {
        let url = window.location;
        let urlObject = new URL(url);
        let path = urlObject.pathname;
        let segments = path.split('/');
        
        // Get the current page number
        let currentPage = parseInt(segments[segments.length - 2]);
        
        // Go to next page
        segments[segments.length - 2] = currentPage + 1;
        let newPath = segments.join('/');
        urlObject.pathname = newPath;
        window.location.href = urlObject.toString();
    }
    
    // Add event listeners
    if (prevButton) prevButton.addEventListener('click', navigateToPreviousPage);
    if (nextButton) nextButton.addEventListener('click', navigateToNextPage);
}); 
