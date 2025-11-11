# Favicon Guidelines

Add your favicon files to this directory:

## Required Files

- `favicon.ico` (16x16, 32x32, 48x48 multi-size)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

## Generate Favicons

Use online tools to generate all required sizes:
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Favicon.io](https://favicon.io/)

## Update index.html

After adding favicon files, add these lines to the `<head>` section of `index.html`:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

## Design Tips

- Use the "OR" logo or company initial
- Keep it simple and recognizable at small sizes
- Use navy (#0b2240) as the primary color
- Ensure good contrast against browser tab backgrounds
