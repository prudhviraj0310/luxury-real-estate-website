# Coolify Deployment Guide

This guide will help you deploy the Luxury Real Estate Website on Coolify.

## Prerequisites

1. A Coolify instance (self-hosted or cloud)
2. GitHub repository access
3. Domain name (optional, but recommended)

## Deployment Steps

### 1. Connect Your Repository to Coolify

1. Log in to your Coolify dashboard
2. Click on **"+ New"** → **"Resource"**
3. Select **"Public Repository"** or connect your **GitHub account**
4. Enter repository URL: `https://github.com/prudhviraj0310/luxury-real-estate-website`
5. Select the `main` branch

### 2. Configure Build Settings

In the Coolify resource settings:

**Build Pack**: Docker

**Port**: 80 (nginx will serve on this port)

**Environment Variables** (if needed):
- None required for basic deployment
- Add custom variables if you integrate APIs later

### 3. Docker Configuration

Coolify will automatically detect the `Dockerfile` in your repository. The build process will:

1. Install Node.js dependencies
2. Build the React + Vite application
3. Serve static files using Nginx

**Build Command**: Automatic (handled by Dockerfile)

**Start Command**: Automatic (handled by Dockerfile CMD)

### 4. Domain Configuration

1. In Coolify, go to your resource's **Domains** tab
2. Add your domain (e.g., `yourdomain.com`)
3. Coolify will automatically provision SSL certificates via Let's Encrypt
4. Update your DNS records:
   - Type: `A` Record
   - Name: `@` (or subdomain)
   - Value: Your Coolify server IP

### 5. Deploy

1. Click **"Deploy"** in Coolify
2. Monitor the build logs
3. Once deployed, access your site at the configured domain

## Manual Deployment (Alternative)

If you prefer manual Docker deployment:

```bash
# Build the Docker image
docker build -t luxury-real-estate .

# Run the container
docker run -d -p 80:80 --name luxury-real-estate-app luxury-real-estate

# Or use docker-compose
docker-compose up -d
```

## Environment Variables (Optional)

If you add backend integrations later:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_CONTACT_EMAIL=contact@yourdomain.com
```

Add these in Coolify under **Environment Variables** tab.

## Troubleshooting

### Build Fails

- Check that all dependencies in `package.json` are correct
- Verify Node.js version compatibility (using Node 18 in Dockerfile)

### Routing Issues (404 on refresh)

- The nginx.conf handles SPA routing automatically
- Ensure nginx.conf is copied correctly in Dockerfile

### Performance Optimization

- Images are already optimized in the build
- Gzip compression is enabled in nginx.conf
- Static assets have 1-year cache headers

## Post-Deployment

1. **Test all routes**: Navigate through all pages
2. **Check mobile responsiveness**: Test on different devices
3. **Verify contact forms**: Ensure forms work (add backend if needed)
4. **Monitor logs**: Use Coolify's log viewer for any errors
5. **Set up analytics**: Add Google Analytics or similar (optional)

## Continuous Deployment

Coolify can automatically deploy on git push:

1. In Coolify, enable **"Auto Deploy"**
2. Select **"On Push"** trigger
3. Every push to `main` branch will trigger a new deployment

## Support

For Coolify-specific issues:
- Coolify Docs: https://coolify.io/docs
- Coolify Discord: https://discord.gg/coolify

For application issues:
- Repository: https://github.com/prudhviraj0310/luxury-real-estate-website
