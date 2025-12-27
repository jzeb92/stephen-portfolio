# Stephen Carlick — Portfolio Website

A minimal, editorial, typography-led portfolio site built with vanilla HTML, CSS, and JavaScript.

## Features

- **Stripped-back design**: Near-white background, near-black text, muted neon-lime accent
- **Typography-forward**: Instrument Serif for headings, DM Sans for body
- **Tasteful microinteractions**: Hover reveals, scroll-linked navigation, magnetic buttons
- **Accessible**: Respects `prefers-reduced-motion`, high contrast, focus states, keyboard navigation
- **Dark mode**: Automatic via `prefers-color-scheme`
- **CMS-like content**: All projects, testimonials, and content editable in `data.js`
- **Lightbox**: Image viewer with keyboard navigation
- **Print-friendly**: Optimized print styles

## Project Structure

```
stephen/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── app.js          # Interactions and content rendering
├── data.js         # CMS-like content configuration
├── README.md       # This file
└── images/         # Create this folder for images
```

## Quick Start

### Option 1: Open directly

Simply open `index.html` in a modern web browser.

### Option 2: Local development server

Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js:
```bash
# Install serve globally
npm install -g serve

# Run server
serve .
```

Using PHP:
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Customizing Content

All content is managed in `data.js`. Edit this file to update:

### Personal Information
```javascript
name: "Stephen Carlick",
title: "Copywriter / Editor / Content Lead",
email: "stephencarlick@gmail.com",
phone: "+44 7500 657389",
linkedin: "https://linkedin.com/in/stephencarlick",
```

### Projects
Each project has the following structure:
```javascript
{
  id: "unique-id",           // Used for anchors and accordion IDs
  title: "Project Name",
  subtitle: "Optional subtitle",
  role: "Your Role",
  years: "2020–2023",
  summary: "Brief description of the project...",
  focus: [                    // Bullet points
    "Focus area 1",
    "Focus area 2"
  ],
  links: [                    // External links to work
    { text: "Link text", url: "https://...", featured: true }
  ],
  artefacts: [                // Images for lightbox
    { type: "image", src: "/images/example.jpg", alt: "Description", placeholder: false }
  ]
}
```

### Testimonials
```javascript
{
  quote: "The testimonial text...",
  author: "Person's Name",
  role: "Their Title",
  company: "Company Name",
  expanded: "Optional longer quote for 'Read more'"  // Optional
}
```

## Adding Images

1. Create an `images/` folder in the project root
2. Add your images (JPEG, PNG, or WebP recommended)
3. Update the `artefacts` array in `data.js` with correct paths
4. Set `placeholder: false` to display actual images

Recommended image sizes:
- Project artefacts: 800×600px (4:3 ratio)
- Optimize for web (aim for <200KB per image)

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub/GitLab
2. Connect repository to Netlify
3. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `.` or `/`

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Framework preset: Other
4. Deploy

### GitHub Pages

1. Push to GitHub repository
2. Go to Settings → Pages
3. Source: Deploy from a branch
4. Branch: main / (root)
5. Save

### Manual Hosting

Upload all files to any static hosting provider:
- AWS S3 + CloudFront
- Cloudflare Pages
- Firebase Hosting
- Any standard web server

## Placeholders to Update

Search for these placeholders in `data.js`:

- `#` — Replace with actual URLs
- `/images/...` — Add real image paths
- LinkedIn URL — Update with actual profile
- PDF download — Add actual portfolio PDF path

## Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome for Android)

## Performance Notes

- No build step required
- Minimal JavaScript (~10KB uncompressed)
- Google Fonts loaded with `display=swap`
- Images lazy-loaded
- Print stylesheet included

## Customization

### Changing the accent color

In `styles.css`, update the `--color-accent` custom property:
```css
:root {
  --color-accent: #c4f52a; /* Change this */
}
```

### Changing fonts

1. Update the Google Fonts link in `index.html`
2. Update `--font-display` and `--font-body` in `styles.css`

### Disabling dark mode

Remove the `@media (prefers-color-scheme: dark)` block in `styles.css`.

## License

Personal portfolio site for Stephen Carlick. Content © Stephen Carlick 2025.

---

Built with care. No frameworks, no bloat, just clean code.

