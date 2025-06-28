import React, { useState, useEffect } from 'react';
import { Search, Heart, Star, Calendar, Clock, Film, User, Award, TrendingUp, X } from 'lucide-react';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('movieFavorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('movieFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const searchMovies = async (term, page = 1) => {
    if (!term.trim()) return;
    
    setLoading(true);
    try {
      // Replace 'YOUR_API_KEY' with your actual OMDB API key
      const API_KEY = 'b8f3b5a'; // Get your free API key from http://www.omdbapi.com/apikey.aspx
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(term)}&page=${page}`);
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovies(data.Search || []);
        setTotalResults(parseInt(data.totalResults) || 0);
        setCurrentPage(page);
      } else {
        setMovies([]);
        setTotalResults(0);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    }
    setLoading(false);
  };

  const getMovieDetails = async (imdbID) => {
    try {
      const API_KEY = 'b8f3b5a'; // Replace with your API key
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`);
      const data = await response.json();
      if (data.Response === 'True') {
        setSelectedMovie(data);
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const toggleFavorite = (movie) => {
    const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID);
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      searchMovies(searchTerm);
      setShowFavorites(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const MovieCard = ({ movie, isDetailed = false }) => {
    const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID);
    
    return (
      <div className={`bg-gray-900 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20 ${isDetailed ? 'w-full max-w-4xl' : ''}`}>
        <div className={`${isDetailed ? 'md:flex' : ''}`}>
          <div className={`${isDetailed ? 'md:w-1/3' : ''} relative group`}>
            <img 
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} 
              alt={movie.Title}
              className={`w-full ${isDetailed ? 'h-96 md:h-full' : 'h-80'} object-cover`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <button
              onClick={() => toggleFavorite(movie)}
              className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
                isFavorite 
                  ? 'bg-red-500 text-white shadow-lg' 
                  : 'bg-black/50 text-white hover:bg-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>
          
          <div className={`p-6 ${isDetailed ? 'md:w-2/3' : ''}`}>
            <h3 className={`font-bold text-white mb-2 ${isDetailed ? 'text-3xl' : 'text-xl'}`}>
              {movie.Title}
            </h3>
            
            <div className="flex items-center gap-4 mb-4 text-gray-300">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{movie.Year}</span>
              </div>
              {movie.Type && (
                <div className="flex items-center gap-1">
                  <Film className="w-4 h-4" />
                  <span className="text-sm capitalize">{movie.Type}</span>
                </div>
              )}
              {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">{movie.imdbRating}</span>
                </div>
              )}
            </div>

            {isDetailed && (
              <div className="space-y-4">
                {movie.Plot && movie.Plot !== 'N/A' && (
                  <p className="text-gray-300 leading-relaxed">{movie.Plot}</p>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {movie.Director && movie.Director !== 'N/A' && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-gray-300">
                        <strong>Director:</strong> {movie.Director}
                      </span>
                    </div>
                  )}
                  
                  {movie.Runtime && movie.Runtime !== 'N/A' && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">
                        <strong>Runtime:</strong> {movie.Runtime}
                      </span>
                    </div>
                  )}
                  
                  {movie.Genre && movie.Genre !== 'N/A' && (
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-300">
                        <strong>Genre:</strong> {movie.Genre}
                      </span>
                    </div>
                  )}
                  
                  {movie.Actors && movie.Actors !== 'N/A' && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-orange-400" />
                      <span className="text-sm text-gray-300">
                        <strong>Actors:</strong> {movie.Actors}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {!isDetailed && (
              <button
                onClick={() => getMovieDetails(movie.imdbID)}
                className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                View Details
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Film className="w-8 h-8 text-cyan-400" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                CineVault
              </h1>
            </div>
            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300"
            >
              <Heart className="w-5 h-5" />
              Favorites ({favorites.length})
            </button>
          </div>
          
          <div className="relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search for movies, series, episodes..."
                className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-xl border border-gray-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <MovieCard movie={selectedMovie} isDetailed={true} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {showFavorites ? (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-500" />
              Your Favorites
            </h2>
            {favorites.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No favorites yet. Start adding some!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favorites.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            {loading && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
              </div>
            )}

            {!loading && movies.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No movies found. Try a different search term.</p>
              </div>
            )}

            {!loading && movies.length === 0 && !searchTerm && (
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">Search for your favorite movies and series!</p>
              </div>
            )}

            {movies.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Search Results ({totalResults.toLocaleString()})
                  </h2>
                  <div className="flex gap-2">
                    {currentPage > 1 && (
                      <button
                        onClick={() => searchMovies(searchTerm, currentPage - 1)}
                        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        Previous
                      </button>
                    )}
                    {currentPage * 10 < totalResults && (
                      <button
                        onClick={() => searchMovies(searchTerm, currentPage + 1)}
                        className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                      >
                        Next
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
