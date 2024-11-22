
'use client';

import React, { useEffect, useState } from 'react';
import { IMovie } from '@/app/models/IMovie';
import {getMoviesByGenre} from "@/app/services/service.api.genre.movies";
import {useParams, useSearchParams} from "next/navigation";
import MoviesListCard from "@/app/components/MoviesListCard";
import Pagination from "@/app/components/Pagination";

const MoviesByGenre = () => {
    const { id } = useParams();
    const searchParams = useSearchParams();
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [error, setError] = useState<string | null>(null);

    const page = searchParams.get('page') || '1';
    useEffect(() => {
        if(id){
            getMoviesByGenre(id,+page)
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                setError('Не вдалося завантажити фільми');
                console.error(error);
            });}

    }, [id,page]);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
        <div className='container'>
            <ul>
            {movies.length === 0 ? (
                <p>Фільми не знайдені для цього жанру</p>
            ) : (
                movies.map((movie) => <MoviesListCard key={movie.id} movie={movie}/>))}
        </ul>

        </div>
            <div className='pagination'> <Pagination /></div>

        </div>

    );
};

export default MoviesByGenre;
