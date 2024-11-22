// MovieInfo.tsx
import React from 'react';
import StarsRating from './StarsRating';
import { IMovie } from '@/app/models/IMovie';
import PosterPreview from "@/app/components/PosterPreview";

interface MovieInfoProps {
    movie: IMovie;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
    return (
        <div>
            <div className="movie-card">
            <PosterPreview image={movie.poster_path} />
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Рейтинг: {movie.vote_average}</p>
            <StarsRating rating={movie.vote_average} />
        </div>
        </div>
    );
};

export default MovieInfo;
