'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import MoviesList from '@/app/components/MoviesList';
import { IMovie } from '@/app/models/IMovie';
import {searchMovies} from "@/app/services/service.api.search";

const SearchPage = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        searchMovies(query)
            .then(data=>{
                setMovies(data);
            })


    }, [query]);

    return (
        <div className='container'>
            <MoviesList movies={movies} />
        </div>
    );
};

export default SearchPage;
