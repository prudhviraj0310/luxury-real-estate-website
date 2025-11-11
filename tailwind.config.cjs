module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0b2240',
        gold: '#cfa94a',
        luxury: {
          purple: '#a78bfa',
          gold: '#fbbf24',
          rose: '#fda4af',
          cream: '#fef3c7',
          midnight: '#1e1b4b',
          champagne: '#fef9e7'
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        luxury: ['Cormorant Garamond', 'serif']
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'royal-gradient': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'champagne-gradient': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
      }
    }
  },
  plugins: []
}
