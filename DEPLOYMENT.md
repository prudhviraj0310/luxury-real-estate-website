# Oblong Realties - Deployment Guide

## Quick Deploy Checklist

Before deploying to production, complete these steps:

### 1. Content Updates
- [ ] Replace all placeholder images in `public/images/`
- [ ] Add PDF brochures to `public/brochures/`
- [ ] Update contact information in:
  - `src/components/Footer.jsx`
  - `src/pages/Contact.jsx`
  - `src/components/WhatsAppButton.jsx`
  - `src/pages/ProjectDetail.jsx`
- [ ] Add real Google Maps embeds in `src/data/projects.json`
- [ ] Verify all project data in `src/data/projects.json`

### 2. Build & Test
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test on http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

### 3. Performance Optimization
- [ ] Compress all images (use TinyPNG or ImageOptim)
- [ ] Ensure images are properly sized (hero: 1920x1080, projects: 800x600)
- [ ] Test on multiple devices and browsers
- [ ] Check page load speed with Lighthouse

### 4. SEO Optimization
- [ ] Add meta descriptions to each page
- [ ] Create `robots.txt` file
- [ ] Create `sitemap.xml`
- [ ] Add Open Graph tags for social sharing
- [ ] Set up Google Analytics (optional)

## Deploy to Netlify

### Option 1: Drag & Drop (Easiest)
1. Run `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist` folder
4. Done! Your site is live

### Option 2: Git Integration (Recommended)
1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 or higher
4. Deploy automatically on every push

### Custom Domain
1. Go to Netlify > Domain Settings
2. Add your custom domain
3. Update DNS records as instructed
4. Enable HTTPS (automatic)

## Deploy to Vercel

### Using Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
cd "/Users/prudhviraj/real esteat"
vercel

# Follow the prompts
```

### Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy

## Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/oblong-realties",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.mjs`:
```javascript
export default defineConfig({
  base: '/oblong-realties/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

## Environment Variables (if needed)

Create `.env` file in root:
```
VITE_API_URL=https://api.yourdomain.com
VITE_WHATSAPP_NUMBER=919876543210
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Post-Deployment

### Testing
- [ ] Test all pages and navigation
- [ ] Verify all images load correctly
- [ ] Test contact form submission
- [ ] Check WhatsApp integration
- [ ] Test on mobile devices
- [ ] Verify brochure downloads work

### Monitoring
- Set up Google Analytics
- Monitor with Netlify/Vercel analytics
- Set up error tracking (Sentry, optional)

### Backup
- Keep a copy of the production build
- Document any custom configurations
- Save all original image files

## Troubleshooting

### Images not loading
- Check file paths are correct (`/images/filename.jpg`)
- Ensure files are in `public/images/`
- Clear browser cache

### Build fails
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (should be 16+)
- Review error messages in console

### WhatsApp not working
- Verify phone number format: `919876543210` (country code + number, no +)
- Test the link manually
- Check browser console for errors

### Styles not applying
- Ensure Tailwind is properly configured
- Check PostCSS is running
- Clear cache and rebuild

## Support

For deployment issues:
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- GitHub Pages: [pages.github.com](https://pages.github.com)

For code issues, refer to the main README.md

---

**Ready to go live? Follow this guide step by step!** 🚀
