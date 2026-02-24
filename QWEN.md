# ahmedvhashem.dev - Personal Dev Blog

## Project Overview

This is a personal developer blog and portfolio website for Ahmed Hashem, built with Next.js 13. The site serves as both a personal brand showcase and a platform for offering free mentorship sessions. The site is deployed as a static export to GitHub Pages with the custom domain ahmedvhashem.dev.

The application follows the Next.js App Router convention and includes:
- A home page featuring personal information, social media links, and mentorship booking options
- A dedicated mentee reviews page displaying feedback from mentoring sessions
- Responsive design with modern CSS styling
- Integration with ADPList for mentorship booking and reviews

## Technologies Used

- Next.js 13 (App Router)
- React 18
- CSS Modules
- react-modal for modal dialogs
- ESLint for code linting
- Google Fonts (Inter)

## Directory Structure

```
ahmedvhashem.github.io/
├── app/                    # Next.js App Router pages
│   ├── mentee-reviews/     # Dedicated reviews page
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout with navigation
│   ├── page.js             # Home page
│   ├── page.module.css     # Component-specific styles
│   ├── reviews.js          # Reviews modal component
│   └── ...                 # Icons and other assets
├── public/                 # Static assets (images, icons)
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
└── ...
```

## Building and Running

### Development
```bash
npm run dev
```
This starts the development server with hot reloading.

### Production Build
```bash
npm run build
```
This creates an optimized production build.

### Static Export
The site is configured for static export (output: "export" in next.config.js) which generates a static version suitable for hosting on GitHub Pages.

### Linting
```bash
npm run lint
```
This checks the codebase for linting issues.

## Key Features

1. **Mentorship Integration**: Links to ADPList for booking free mentor sessions
2. **Reviews Display**: Shows mentee feedback via embedded ADPList widgets
3. **Social Media Links**: Quick access to LinkedIn, GitHub, Medium, and Twitter profiles
4. **Responsive Design**: Mobile-friendly layout using CSS Grid and Flexbox
5. **Custom Domain**: Deployed with the custom domain ahmedvhashem.dev

## Development Conventions

- Uses Next.js App Router with file-based routing
- Component styling with CSS Modules to prevent style conflicts
- Client-side rendering for interactive elements like the reviews modal
- Semantic HTML and accessibility considerations
- Modern ES6+ JavaScript syntax

## Deployment

The site is configured for GitHub Pages deployment with:
- Static export enabled in next.config.js
- Custom domain configured in the CNAME file
- Optimized for performance with image optimization and code splitting