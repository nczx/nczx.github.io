$htmlContent = @"
<button id="prevPage" style="background-color: #47e2b4; color: white; font-size: 16px; padding: 15px 32px; margin: 10px 2px; border: none; border-radius: 4px; cursor: pointer;">Poprzednia strona</button>
<button id="nextPage" style="background-color: #01d1e0; color: white; font-size: 16px; padding: 15px 32px; margin: 10px 2px; border: none; border-radius: 4px; cursor: pointer;">Nastepna strona</button>

<script>
    function PageUp(){
        let url = window.location;
        console.log(url.href);
        let urlObject = new URL(url);
        let path = urlObject.pathname;
        let segments = path.split('/');
        segments[segments.length - 2]++;
        let newPath = segments.join('/');
        urlObject.pathname = newPath;
        let newUrl = urlObject.toString();
        console.log(newUrl);
        window.location.href = newUrl;
    }
  
    function PageDown(){
        let url = window.location;
        console.log(url.href);
        let urlObject = new URL(url);
        let path = urlObject.pathname;
        let segments = path.split('/');
        segments[segments.length - 2]--;
        let newPath = segments.join('/');
        urlObject.pathname = newPath;
        let newUrl = urlObject.toString();
        console.log(newUrl);
        window.location.href = newUrl;
    }

    // Get buttons
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');

    // Set event listeners
    prevButton.addEventListener('click', PageDown);
    nextButton.addEventListener('click', PageUp);
</script>
"@

Get-ChildItem -Path . -Recurse -Filter *.html | ForEach-Object {
    Add-Content -Path $_.FullName -Value $htmlContent
}
