'use client';
import React, { useEffect, useState } from 'react';
import {IMovie} from "@/app/models/IMovie";
import {getMovies} from "@/app/services/service.api";
import MoviesList from "@/app/components/MoviesList";
import {useSearchParams} from "next/navigation";
import Pagination from "@/app/components/Pagination";


const MoviesPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [error, setError] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    useEffect(() => {
        getMovies(currentPage)
            .then(data =>{
                setMovies(data.results);
            }).catch(reason => setError(reason));

    }, [currentPage]);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
        <div className= "container">

                <MoviesList  movies={movies}/>

        </div>
            <div className= "pagination"><Pagination/></div>

        </div>
    );
};

export default MoviesPage;
