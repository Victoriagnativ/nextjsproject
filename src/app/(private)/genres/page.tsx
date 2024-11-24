'use client'
import React, { useEffect, useState } from 'react';
import { getGenres } from '@/app/services/service.api.genre';
import { IGenre } from '@/app/models/IGenre';
import Link from "next/link";


const Page = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getGenres()
            .then(data => setGenres(data))
            .catch(err => setError(err.message));
    }, []);

    if (error) {
        return <div>Помилка: {error}</div>;
    }
     console.log('page', genres)
    return (
        <div className ='container-add'>
         <div className ="genres-list">
            {genres.map((genre: IGenre) => (
                <div className ="genre-item" key={genre.id}>
                    <Link href={'/genres/' + genre.id}>{genre.name}</Link>
                </div>



            ))}
        </div>

        </div>
    );
};

export default Page;
