'use client'
import React, {FC, useEffect, useState} from 'react';
import {IGenre} from "@/app/models/IGenre";
import {getGenres} from "@/app/services/service.api.genre";
import Link from "next/link";

type Props ={
    genresId:number[]
}
const GenreBadge:FC<Props> = ({genresId}) => {
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

    return (

            <div className="genres-badge-container">
                {genres
                    .filter(item => genresId.includes(item.id))
                    .map(item => (
                        <Link href={`/genres/${item.id}`} key={item.id} className="genre-badge">
                            {item.name}
                        </Link>
                    ))}
        </div>
    );
};

export default GenreBadge;