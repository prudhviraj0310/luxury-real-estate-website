# Oblong Realties - Luxury Real Estate Website

A world-class, modern, and responsive website for Oblong Realties, built with React, Vite, and Tailwind CSS. Features smooth animations, project showcases, and premium UI/UX design inspired by luxury real estate brands.

![Oblong Realties](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.5.0-38B2AC)

---

## ✨ Features

### Core Functionality
- 🏠 **Homepage** - Hero section with video/image background, animated statistics, featured projects carousel
- 🏢 **Projects Page** - Interactive filters (All/Ongoing/Completed/Upcoming), search functionality
- 📄 **Project Details** - Full property information, amenities, virtual tour links, download brochures
- ℹ️ **About Page** - Company mission, vision, values, leadership team, and statistics
- 📞 **Contact Page** - Form with validation, Google Maps integration, contact information
- 💬 **WhatsApp Integration** - Floating button for instant communication
- 📱 **Fully Responsive** - Mobile-first design that works on all devices

### Design & UX
- 🎨 **Premium Design** - Navy blue, white, and gold color palette
- ✨ **Smooth Animations** - Framer Motion powered transitions
- 🖼️ **Glassmorphism Effects** - Modern card designs with backdrop blur
- 🎯 **SEO-Friendly** - Semantic HTML structure
- ⚡ **Fast Performance** - Optimized with Vite bundler

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
```bash
cd "/Users/prudhviraj/real esteat"
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:5173
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
oblong-realties/
├── public/
│   ├── images/              # Property images
│   │   ├── hero-sample.jpg
│   │   ├── the-bay.jpg
│   │   ├── ashwood.jpg
│   │   └── ...
│   └── brochures/           # Downloadable PDF brochures
│       ├── bay.pdf
│       └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with active states
│   │   ├── Hero.jsx         # Homepage hero section
│   │   ├── ProjectCard.jsx  # Reusable project card
│   │   ├── Footer.jsx       # Site footer
│   │   └── WhatsAppButton.jsx  # Floating WhatsApp button
│   ├── pages/
│   │   ├── Home.jsx         # Homepage
│   │   ├── Projects.jsx     # Projects listing with filters
│   │   ├── ProjectDetail.jsx # Individual project page
│   │   ├── About.jsx        # About company
│   │   └── Contact.jsx      # Contact form
│   ├── data/
│   │   ├── projects.json    # Project data (read by app)
│   │   └── projects.csv     # Source CSV data
│   ├── App.jsx              # Main app component with routes
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind
├── package.json
├── vite.config.js
├── tailwind.config.cjs
└── README.md
```

---

## 🎨 Design System

### Colors
- **Navy** (#0b2240) - Primary brand color
- **Gold** (#cfa94a) - Accent color
- **White** (#ffffff) - Background
- **Slate** (Tailwind slate variants) - Text and borders

### Typography
- **Headings** - Poppins (600, 700)
- **Body** - Inter (300, 400, 600, 700)

### Components
All components use:
- Framer Motion for animations
- Tailwind CSS for styling
- React Router for navigation

---

## 📊 Data Management

### Projects Data
The website uses `src/data/projects.json` for project information. Each project includes:

```json
{
  "id": 1,
  "title": "Project Name",
  "location": "City",
  "status": "Ongoing|Completed|Upcoming",
  "price": "₹X Cr",
  "property_type": "Apartment|Villa|Commercial|Plots",
  "area_sqft": 1650,
  "bedrooms": 3,
  "amenities": ["Pool", "Gym", "Security"],
  "image_url": "/images/project.jpg",
  "brochure_url": "/brochures/project.pdf",
  "video_url": "https://youtu.be/...",
  "description": "...",
  "map_embed": "<iframe>...</iframe>"
}
```

### Adding New Projects
1. Edit `src/data/projects.json`
2. Add corresponding images to `public/images/`
3. Add brochures to `public/brochures/`
4. Save and refresh - no rebuild needed in dev mode!

---

## 🖼️ Adding Images

### Required Images
Place these in `public/images/`:
- `hero-sample.jpg` - Homepage hero background
- `the-bay.jpg` - The Bay Residences project
- `ashwood.jpg` - Ashwood Villas project
- `lotus.jpg` - Lotus Commercial Park project
- `greenfield.jpg` - Greenfield Plots project
- `azure.jpg` - Azure Heights project
- `serene.jpg` - Serene Enclave project
- `placeholder.jpg` - Fallback image
- `team-1.jpg`, `team-2.jpg`, `team-3.jpg` - Leadership team

### Image Guidelines
- **Format**: JPG or PNG
- **Size**: 1920x1080 for hero, 800x600 for project cards
- **Quality**: High-quality, professional photography
- **Optimization**: Compress images before uploading (use tools like TinyPNG)

---

## 🔧 Configuration

### WhatsApp Number
Update in multiple files:
- `src/components/WhatsAppButton.jsx` - Line 5
- `src/pages/ProjectDetail.jsx` - Line 12
- `src/pages/Contact.jsx` - Contact info section

Current number: `+91 98765 43210`

### Contact Information
Edit in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

### Google Maps
Add your actual Google Maps embed code in:
- `src/data/projects.json` - Update `map_embed` field for each project

---

## 🚀 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Or connect your Git repository for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Or connect via [Vercel Dashboard](https://vercel.com)

### Environment Variables
No environment variables required for this version. All data is stored in JSON files.

---

## 🛠️ Technologies Used

- **React 18.2** - UI library
- **React Router 6** - Client-side routing
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 3.5** - Utility-first CSS
- **Framer Motion 10** - Animation library
- **PapaParse 5** - CSV parser (for future use)

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

This is a client project. For updates or modifications:
1. Create a new branch
2. Make your changes
3. Test thoroughly
4. Submit for review

---

## 📝 License

Proprietary - © 2025 Oblong Realties. All rights reserved.

---

## 📞 Support

For technical support or questions:
- Email: hello@oblongrealties.com
- Phone: +91 98765 43210
- WhatsApp: [Chat Now](https://wa.me/919876543210)

---

## 🎯 Future Enhancements

- [ ] Admin dashboard for content management
- [ ] Blog section for real estate insights
- [ ] Customer testimonials and reviews
- [ ] 360° virtual tours integration
- [ ] Property comparison tool
- [ ] EMI calculator
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Advanced search with filters
- [ ] Email newsletter integration

---

**Built with ❤️ for Oblong Realties**
