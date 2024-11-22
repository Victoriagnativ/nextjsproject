import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import MoviesListCard from "@/app/components/MoviesListCard";
type Props ={
    movies:IMovie[]
}
const MoviesList:FC<Props> = ({ movies }) => {

    return (
        <div>
            <ul>
                {
                    movies.map(movie => <MoviesListCard  key={movie.id} movie={movie}/>)
                }
            </ul>
        </div>
    );
};

export default MoviesList;