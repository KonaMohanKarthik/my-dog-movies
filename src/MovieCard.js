import React, { useEffect, useState } from 'react';

const MovieCard = ({ movie }) => {
    const [dogImage, setDogImage] = useState('');

    useEffect(() => {
        const fetchDogImage = async () => {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            setDogImage(data.message);
        };

        fetchDogImage();
    }, []);

    return (
        <div className="movie-card">
            <h3>{movie.title}</h3>
            <img src={dogImage} alt="Random Dog" />
            <p>Author: {movie.author_name && movie.author_name.join(', ')}</p>
            <p>First Published: {movie.first_publish_year}</p>
        </div>
    );
};

export default MovieCard;
