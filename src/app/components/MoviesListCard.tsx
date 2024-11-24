import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import Link from "next/link";
import PosterPreview from "@/app/components/PosterPreview";
import StarsRating from "@/app/components/StarsRating";
import GenreBadge from "@/app/components/GenreBadge";
type Props={
    movie:IMovie
}
const MoviesListCard:FC<Props>= ({movie}) => {
    console.log('card',movie.genre_ids);
    return (
        <div>
           <div className="movie-card">
            <Link href={'/movies/' + movie.id}> <PosterPreview image={movie.poster_path} /></Link>
               <div className="movie-info">
                   <h3 className="movie-title"><Link href={'/movies/' + movie.id}>{movie.title}</Link></h3>
                   <StarsRating rating={movie.vote_average}/>
                       <GenreBadge genresId={movie.genre_ids}/>
               </div>
           </div>
        </div>
    );
};

export default MoviesListCard;