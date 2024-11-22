'use client';

import React, { useEffect, useState } from "react";
import { IMovie } from "@/app/models/IMovie";
import {getMovie} from "@/app/services/service.api.movie";
import {useParams} from "next/navigation";

import MovieInfo from "@/app/components/MovieInfo";



const MovieDetails = () => {
    const id = useParams().id;
    const [movie, setMovie] = useState<IMovie | null>(null);

    useEffect(() => {
        if ( id ) {
            getMovie(id)
                .then(data => setMovie(data))
                .catch(error => console.error("Error fetching movie:", error));
        }
    }, [id]);

    if (!id) return <p>Loading...</p>;

    return (
        <div>
            {/*<h1>{movie?.title}</h1>*/}
            {/*<p>{movie?.overview}</p>*/}
            {/*<p>Рейтинг: {movie?.vote_average}</p>*/}
            {/* <StarsRating rating={movie?.vote_average || 0} />*/}
            {movie && <MovieInfo movie={movie}/>}

        </div>
    );
};

export default MovieDetails;

