# TTCECS Prototype — Next.js + Tailwind

Modern, production-quality homepage for **TTCECS** (Thiruvalluvar Transport Cooperative Employees Credit Society).

## Features

### 🎯 Core Features
- **Fixed Deposit 14.40%** hero with particle background
- **Smart Card** QR + OTP services with Lottie animation
- Glassmorphism UI with deep navy → electric blue gradient
- Framer Motion scroll animations
- Contact form (Formspree integration)
- Google Maps embed
- JSON-LD structured data for SEO
- Dark/Light theme toggle
- Mobile-first, accessible (WCAG AA)

### 🤖 AI-Powered
- **Intelligent Chatbot** with sentiment analysis (Hugging Face API)
- Real-time emotion detection (POSITIVE/NEGATIVE/NEUTRAL)
- Context-aware responses based on user sentiment
- Intent detection for FD, loans, Smart Card queries

### 📊 Live Metrics
- **API-driven Impact counters** (`/api/metrics`)
- Auto-refreshes every 30 seconds
- Real-time kWh saved, installations, CO₂ reduced

### 🎨 Interactive Components
- **Lottie animations** for Smart Card demo
- Step-by-step QR + OTP flow visualization
- Smooth transitions and micro-interactions

## Tech Stack

- **Next.js 13** — React framework with API routes
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Smooth animations & transitions
- **tsparticles** — Hero particle background
- **Lottie React** — Smart Card animation
- **Hugging Face API** — Sentiment analysis (DistilBERT model)
- **Formspree** — Contact form handling

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables (optional)

Create a `.env.local` file:

```bash
cp .env.local.example .env.local
```

Then add your own:
- `HF_TOKEN` — Hugging Face API token (for sentiment analysis, if integrating chatbot)
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — Your Formspree form ID

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
ttcecs-prototype/
├── components/
│   ├── Header.js       # Sticky header with theme toggle
│   ├── Hero.js         # Particle background hero
│   ├── Services.js     # 4 service cards
│   ├── Projects.js     # Featured projects grid
│   ├── Impact.js       # Animated counters
│   ├── Contact.js      # Formspree form + map
│   └── Footer.js       # Site footer
├── pages/
│   ├── _app.js         # Next.js app wrapper
│   └── index.js        # Homepage
├── styles/
│   └── globals.css     # Tailwind + custom styles
├── package.json
├── tailwind.config.cjs
└── postcss.config.cjs
```

## API Endpoints

### `/api/metrics` (GET)
Returns live impact metrics:
```json
{
  "kwhSaved": 125000,
  "installations": 528,
  "carbonReduced": 3200,
  "timestamp": "2025-11-06T..."
}
```

### `/api/sentiment` (POST)
Analyzes text sentiment using Hugging Face:
```json
{
  "text": "I love the Fixed Deposit rates!"
}
```
Response:
```json
{
  "sentiment": "POSITIVE",
  "score": 0.9987,
  "mock": false
}
```

## Next Steps

- [x] ✅ Live metrics API endpoint
- [x] ✅ AI chatbot with sentiment analysis
- [x] ✅ Lottie Smart Card animation
- [x] ✅ Vercel deployment configuration
- [ ] Replace Formspree placeholder with your actual form endpoint
- [ ] Add real Google Maps coordinates for branches
- [ ] Connect to production database for metrics
- [ ] Add your Hugging Face API token in `.env.local`
- [ ] Deploy to Vercel (see DEPLOYMENT.md)

## Security Note

**Never commit API tokens** to version control. Keep them in `.env.local` and add that file to `.gitignore`.

## License

© 2025 TTCECS. All rights reserved.
