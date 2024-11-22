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
    return (
        <div>
           <div className="movie-card">
            <Link href={'/movies/' + movie.id}> <PosterPreview image={movie.poster_path} /></Link>
               <div className="movie-info">
                   <h3 className="movie-title"><Link href={'/movies/' + movie.id}>{movie.title}</Link></h3>
                   <p className="movie-rating"><StarsRating rating={movie.vote_average}/></p>
                       <GenreBadge genres={movie.genre_ids}/>
               </div>
           </div>
        </div>
    );
};

export default MoviesListCard;