# Call Law App Website

A modern, responsive React-based website for Call Law App - providing accessible legal services, bail bond coverage, and attorney network access. 

## Project Overview

Call Law App (CLA) is a legal service platform designed to provide accessible legal resources to underserved individuals. This website showcases the platform's features, coverage options, and services.

## Features

- **Responsive Design**: Mobile-first approach with full responsiveness across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Coverage Plans**: Display of multiple coverage options (30-Day Travel, Single, Family, Group)
- **Legal Services**: Information about bail bonds, attorney network, and legal assistance
- **AI Assistant**: Introduction to L.I.S.A. (Legal Intelligence System Analysis)
- **Body Camera Coverage**: Information about CLA's personal body camera service
- **Blog Section**: Latest legal insights and resources
- **Attorney Network**: Application form for attorneys to join the network

## Technology Stack

- **React 18**: Modern JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Lucide Icons**: Beautiful, consistent icon library
- **Framer Motion**: Animation library for smooth transitions

## Project Structure

```
call-law-app/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   ├── cla_logo.png
│   │   ├── cla_app_banner_new.png
│   │   ├── lisa_ai_bot.webp
│   │   ├── usb_device_branded_final.png
│   │   ├── otg_connection_enhanced.png
│   │   ├── handcuffs_image_refined.png
│   │   └── freed_person.png
│   ├── components/        # Reusable React components
│   │   └── ui/           # shadcn/ui components
│   ├── App.jsx           # Main application component
│   ├── App.css           # Application styles
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md            # This file
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm package manager

### Installation Steps

1. **Clone or extract the project**
   ```bash
   cd call-law-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173/`
   - The page will automatically reload on file changes

## Building for Production

To create an optimized production build:

```bash
pnpm run build
# or
npm run build
```

This generates a `dist/` folder with optimized, minified files ready for deployment.

## Key Sections

### Hero Section
- Compelling headline about legal services
- Download buttons for Android and iOS
- Professional imagery

### What is CALL LAW APP?
- Overview of the platform
- Key features (24/7 Access, Bail Bond Coverage, Attorney Network, Direct Communication)
- Target audience information

### CLA App Interface Banner
- Visual showcase of the mobile app interface
- Multiple phone mockups displaying app features

### L.I.S.A. AI Assistant
- Introduction to the AI legal assistant
- Highlights of capabilities and benefits

### Coverage Plans
- 30-Day Travel Coverage
- Single Coverage (Most Popular)
- Family Coverage
- Group Coverage

### Body Camera Coverage
- Information about CLA's personal body camera
- Product images and specifications
- Purchase button

### Bail Bonds Services
- Details about bail bond coverage (up to $500)
- Quick request process
- CLA Smart Client Program

### Attorney Network
- Information for attorneys interested in joining
- Application form

### Blog Section
- Latest legal articles and resources
- Multiple blog post previews

### About Us
- Company mission and history
- Commitment to underserved individuals

### Footer
- Contact information
- Quick links
- Social media links
- Legal links

## Customization

### Colors
The website uses a professional blue color scheme. To customize colors, modify the Tailwind CSS classes in `App.jsx` or update the theme in `tailwind.config.js`.

### Content
Update text content directly in `App.jsx`. The component uses hardcoded data for coverage options and blog posts that can be easily modified.

### Images
Replace images in the `src/assets/` directory. Update import paths in `App.jsx` if you add new images.

### Styling
Global styles are in `src/index.css` and `src/App.css`. Component-specific styles use Tailwind CSS classes.

## Deployment

### Deploy to Manus
```bash
# The website can be deployed using the Manus platform
# Follow the deployment instructions provided
```

### Deploy to Other Platforms

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**GitHub Pages:**
1. Update `vite.config.js` with your repository name
2. Run `npm run build`
3. Deploy the `dist/` folder

## Performance Optimization

- Images are optimized and compressed
- CSS is minified and tree-shaken
- JavaScript is bundled and minified
- Lazy loading for images
- Smooth animations with hardware acceleration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Responsive text sizing

## SEO

- Meta tags for description and keywords
- Semantic HTML elements
- Proper heading hierarchy
- Image alt text
- Mobile-friendly design

## Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
pnpm run dev -- --port 3000
```

### Build Errors
Clear node_modules and reinstall:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Images Not Loading
Ensure all image files are in `src/assets/` and paths are correct in `App.jsx`.

## License

© 2021 Call Law App LLC. All rights reserved.

## Support

For support or questions about the website, contact:
- Phone: 888-CLA-LAW1
- Address: 401 East 8th Street, Sioux Falls, South Dakota 57103

## Version History

- **v2.0** - Current version with L.I.S.A. AI assistant and body camera coverage
- **v1.0** - Initial release with basic coverage plans and attorney network

---

**Last Updated:** October 2025
**Built with:** React, Vite, Tailwind CSS
