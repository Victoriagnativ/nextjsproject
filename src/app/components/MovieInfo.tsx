
import React from 'react';
import StarsRating from './StarsRating';
import { IMovie } from '@/app/models/IMovie';
import PosterPreview from "@/app/components/PosterPreview";
import GenreBadge from "@/app/components/GenreBadge";

interface MovieInfoProps {
    movie: IMovie;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
    const genreIds = movie.genres.map(genre => genre.id);
    console.log(genreIds)
    return (
        <div>
            <div className="movie-card2">
                <div className="poster">
                    <PosterPreview image={movie.poster_path}/>
                </div>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <p>Дорослий контент: {movie.adult ? "Так" : "Ні"}</p>
                    <p>Популярність: {movie.popularity}</p>
                    <p>Рейтинг: {movie.vote_average}</p>
                    <StarsRating rating={movie.vote_average}/>
                    <GenreBadge genresId={genreIds}/>

                </div>
            </div>
        </div>

    );
};

export default MovieInfo;
