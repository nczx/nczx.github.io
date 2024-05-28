$htmlContent = @"
<button id="prevPage">Poprzednia strona</button>
<button id="nextPage">Nastepna strona</button>

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
