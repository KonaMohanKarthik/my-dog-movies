import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';

const fetchMovies = async (query) => {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await response.json();
    return data.docs;
};


const App = () => {
    const [movies, setMovies] = useState([]);

    const handleSearch = async (query) => {
        const results = await fetchMovies(query);
        setMovies(results);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div className="movie-list">
                {movies.map(movie => (
                    <MovieCard key={movie.key} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default App;
