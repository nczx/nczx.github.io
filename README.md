# Subject Study Website

This is a simple website for organizing study materials by subject and page numbers.

## Features

- Dark mode/light mode toggle with persistent preference
- Responsive design for various screen sizes
- Navigation between content pages
- Subject directory organization

## GitHub Pages Deployment

To deploy this site on GitHub Pages:

1. Create a new GitHub repository
2. Push all the files to your repository
3. Go to your repository settings
4. Under the "Pages" section, select the branch you want to deploy (usually `main` or `master`)
5. The site will be available at `https://[your-username].github.io/[repository-name]/`

## Development

All pages include automatic handling for GitHub Pages paths. The site detects when it's on GitHub Pages and adjusts all navigation links accordingly.

### Directory Structure

```
/
├── index.html               # Main entry page
├── style.css                # Main stylesheet
├── darkmode.css             # Critical dark mode styles
├── darkmode.js              # Dark mode initialization
├── content-navigation.js    # Navigation script for content pages
├── [subject-name]/          # Subject directories
│   ├── index.html           # Subject topic listing
│   └── [page-number]/       # Individual content pages
│       └── index.html
└── test/                    # Test pages for GitHub Pages compatibility
```

### Scripts

- `update-all-subject-dirs.ps1` - Updates all subject directories with the latest template
- `template-content.html` - Template for content pages

## Testing

The `/test` directory contains sample pages to test GitHub Pages compatibility. These pages show the current path and base URL for debugging purposes. 
