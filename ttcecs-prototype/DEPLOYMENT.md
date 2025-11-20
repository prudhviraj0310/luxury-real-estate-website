# Deployment Guide

## Deploy to Vercel (Recommended)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ttcecs-prototype)

### Manual Deploy

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd /Users/prudhviraj/ttcecs-prototype
   vercel
   ```

4. **Add Environment Variables**
   
   In your Vercel dashboard, add these environment variables:
   - `HF_TOKEN` - Your Hugging Face API token (for sentiment analysis)
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - Your Formspree endpoint ID

5. **Production Deploy**
   ```bash
   vercel --prod
   ```

---

## Deploy to Netlify

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=.next
   ```

---

## Deploy to Railway

1. Visit [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add environment variables in Railway dashboard
5. Railway will auto-deploy on every push

---

## Deploy to AWS Amplify

1. Visit AWS Amplify Console
2. Connect your Git repository
3. Set build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
4. Add environment variables
5. Deploy

---

## Environment Variables Required

Create these in your deployment platform:

```bash
# Hugging Face API for sentiment analysis
HF_TOKEN=your_huggingface_api_token_here

# Formspree endpoint (public, safe to expose)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_id
```

---

## Post-Deployment Checklist

- [ ] Test all pages and components
- [ ] Verify API endpoints (`/api/metrics`, `/api/sentiment`)
- [ ] Check contact form submission
- [ ] Test chatbot with sentiment analysis
- [ ] Verify Lottie animations load correctly
- [ ] Test Smart Card demo interactions
- [ ] Check Google Maps embed
- [ ] Validate SEO meta tags
- [ ] Test dark/light theme toggle
- [ ] Verify mobile responsiveness
- [ ] Run Lighthouse audit (aim for 90+ score)

---

## Domain Setup

### Custom Domain on Vercel

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain (e.g., `ttcecs.com`)
4. Update DNS records as instructed
5. Vercel will auto-provision SSL certificate

### DNS Records

Point your domain to Vercel:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## CI/CD Setup

### GitHub Actions (Auto-deploy on push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Performance Optimization

- ✅ Images are optimized via Next.js Image component
- ✅ Code splitting enabled by default
- ✅ Static generation for faster loads
- ✅ API routes cached appropriately
- ✅ Animations use GPU acceleration
- ✅ Lazy loading for heavy components

---

## Monitoring & Analytics

### Add Vercel Analytics

```bash
npm install @vercel/analytics
```

In `_app.js`:
```javascript
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

---

## Support

For deployment issues:
- Vercel: https://vercel.com/docs
- Next.js: https://nextjs.org/docs/deployment
- Contact: support@ttcecs.com
