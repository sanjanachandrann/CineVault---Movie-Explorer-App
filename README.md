# 🎬 CineVault - Movie Explorer

<div align="center">
  <h3>A modern, feature-rich React application for discovering movies and TV series</h3>
  
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![OMDB API](https://img.shields.io/badge/OMDB-API-orange?style=for-the-badge)
  
  [🚀 Live Demo](https://yourusername.github.io/cinevault-movie-explorer) | [📋 Report Bug](https://github.com/yourusername/cinevault-movie-explorer/issues) | [✨ Request Feature](https://github.com/yourusername/cinevault-movie-explorer/issues)
</div>

---

## 📸 Screenshots

### 🏠 Home Page
[Screenshot 2025-06-29 021001](https://github.com/user-attachments/assets/84e4bab7-a530-4534-8ef9-41594971889a)


### 🔍 Search Results
[Screenshot 2025-06-29 021046](https://github.com/user-attachments/assets/9d0d4629-91f1-4ab4-99b7-f1672a38b3a5)


### ❤️ Favorites
[Screenshot 2025-06-29 021046](https://github.com/user-attachments/assets/d4da8eb2-2f53-4b44-9cfe-66d445ce22b9)



---

## ✨ Features

- **🔍 Advanced Search**: Search for movies, TV series, and episodes using the OMDB API
- **❤️ Favorites System**: Save and manage your favorite movies with persistent storage
- **📋 Detailed Views**: View comprehensive movie information including plot, cast, ratings, and more
- **📱 Responsive Design**: Seamlessly works across all devices and screen sizes
- **🎨 Modern UI**: Beautiful dark theme with smooth animations and hover effects
- **⚡ Fast Performance**: Optimized React components with efficient state management
- **🔄 Pagination**: Navigate through extensive search results
- **💫 Smooth Animations**: Engaging user experience with CSS transitions and hover effects

---

## 🛠️ Built With

- **Frontend Framework**: React 18 with Hooks
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: OMDB (Open Movie Database)
- **State Management**: React useState and useEffect hooks
- **Deployment**: GitHub Pages

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OMDB API key (free from [omdbapi.com](http://www.omdbapi.com/apikey.aspx))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cinevault-movie-explorer.git
   cd cinevault-movie-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your OMDB API Key**
   - Visit [OMDB API](http://www.omdbapi.com/apikey.aspx)
   - Sign up for a free API key
   - Replace the API key in `src/App.js`:
   ```javascript
   const response = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${encodeURIComponent(term)}&page=${page}`);
   ```

4. **Install Tailwind CSS**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

5. **Configure Tailwind CSS**
   
   Update `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

   Add to `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. **Start the development server**
   ```bash
   npm start
   ```

7. **Open your browser**
   - Navigate to `http://localhost:3000`

---

## 📁 Project Structure

```
cinevault-movie-explorer/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── SearchBar.js
│   │   └── MovieModal.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── screenshots/
│   ├── home.png
│   ├── search.png
│   ├── favorites.png
│   └── mobile.png
├── package.json
├── README.md
└── tailwind.config.js
```

---

## 🎯 Usage

1. **Search for Movies**: Use the search bar to find movies, TV series, or episodes
2. **View Details**: Click "View Details" on any movie card to see comprehensive information
3. **Add to Favorites**: Click the heart icon to save movies to your favorites
4. **Browse Favorites**: Click the "Favorites" button to view your saved movies
5. **Navigate Results**: Use pagination buttons to browse through search results

---

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/cinevault-movie-explorer",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Set up continuous deployment with your GitHub repository

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Set build command to `npm run build`
3. Set output directory to `build`
4. Deploy automatically on every push

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

Sanjana C K - 23202041@rmd.ac.in

Project Link: 

---

## 🙏 Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for providing the movie database
- [Tailwind CSS](https://tailwindcss.com/) for the amazing utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [React](https://reactjs.org/) for the powerful frontend framework

---

<div align="center">
  Made with ❤️ by Sanjana C K
  
  ⭐ Star this repo if you found it helpful!
</div>
