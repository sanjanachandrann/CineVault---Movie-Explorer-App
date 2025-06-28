# 🚀 Complete Setup Instructions for CineVault

Follow these step-by-step instructions to get your CineVault project up and running on GitHub!

## 📋 Prerequisites

- Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- Git - [Download here](https://git-scm.com/)
- GitHub account - [Sign up here](https://github.com/)
- OMDB API Key - [Get free key here](http://www.omdbapi.com/apikey.aspx)

## 🛠️ Step-by-Step Setup

### 1. Create React App

```bash
# Create a new React application
npx create-react-app cinevault-movie-explorer
cd cinevault-movie-explorer
```

### 2. Install Dependencies

```bash
# Install required packages
npm install lucide-react

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install GitHub Pages deployment tool
npm install --save-dev gh-pages
```

### 3. Replace Files

Replace the following files with the provided code:

- `src/App.js` - Main application component
- `src/App.css` - Custom styles and animations
- `src/index.css` - Tailwind imports and base styles
- `src/index.js` - Entry point
- `src/reportWebVitals.js` - Performance monitoring
- `package.json` - Dependencies and scripts
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `public/index.html` - HTML template
- `public/manifest.json` - PWA manifest

### 4. Create Additional Files

Create these new files in your project:

- `.gitignore` - Git ignore rules
- `LICENSE` - MIT license
- `README.md` - Project documentation
- `CONTRIBUTING.md` - Contribution guidelines

### 5. Get OMDB API Key

1. Visit [OMDB API](http://www.omdbapi.com/apikey.aspx)
2. Sign up for a free API key
3. Replace the API key in `src/App.js`:

```javascript
// Find this line in src/App.js
const API_KEY = 'b8f3b5a'; // Replace with your actual API key
```

### 6. Test Locally

```bash
# Start the development server
npm start
```

Your app should open at `http://localhost:3000`

### 7. Create GitHub Repository

1. Go to [GitHub](https://github.com/) and sign in
2. Click "New repository"
3. Name it `cinevault-movie-explorer`
4. Add description: "A modern React app for discovering movies and TV series"
5. Make it public
6. Don't initialize with README (we have our own)
7. Click "Create repository"

### 8. Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: CineVault Movie Explorer"

# Add GitHub remote (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/cinevault-movie-explorer.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 9. Deploy to GitHub Pages

```bash
# Deploy to GitHub Pages
npm run deploy
```

Your app will be available at: `https://yourusername.github.io/cinevault-movie-explorer`

### 10. Update Repository Settings

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Source should be set to "Deploy from a branch"
5. Branch should be "gh-pages"
6. Click "Save"

## 🎨 Customization Options

### Change Theme Colors

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      'custom-primary': '#your-color',
      'custom-secondary': '#your-color',
    }
  }
}
```

### Add Your Information

Update these files with your details:

- `package.json` - Change author name and repository URLs
- `README.md` - Update contact information and GitHub username
- `LICENSE` - Add your name and year
- `public/index.html` - Update meta tags

### Add Screenshots

Create a `screenshots` folder and add:

- `home.png` - Homepage screenshot
- `search.png` - Search results screenshot
- `favorites.png` - Favorites page screenshot
- `mobile.png` - Mobile view screenshot

## 🔧 Environment Variables (Optional)

For better security, you can use environment variables:

1. Create `.env` file in root:
```
REACT_APP_OMDB_API_KEY=your_api_key_here
```

2. Update `src/App.js`:
```javascript
const API_KEY = process.env.REACT_APP_OMDB_API_KEY || 'fallback_key';
```

3. Add `.env` to `.gitignore` (already included)

## 📱 Progressive Web App (PWA)

Your app is already PWA-ready! Users can install it on their devices.

## 🚨 Troubleshooting

### Common Issues:

1. **API Key Issues**: Make sure you have a valid OMDB API key
2. **Tailwind Not Working**: Check if postcss.config.js is properly configured
3. **Deployment Fails**: Ensure gh-pages package is installed
4. **Images Not Loading**: Check if OMDB API is returning valid poster URLs

### Getting Help:

- Check the [Issues](https://github.com/yourusername/cinevault-movie-explorer/issues) section
- Read the [Contributing Guide](CONTRIBUTING.md)
- Contact: your.email@example.com

## 🎉 You're Done!

Your professional movie explorer app is now live on GitHub! Share the link and showcase your work to potential employers and collaborators.

### Next Steps:

- Add more features (user authentication, reviews, etc.)
- Improve accessibility
- Add more APIs (TMDb, etc.)
- Create mobile app version
- Add analytics

Good luck with your project! 🍿🎬
