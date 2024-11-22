import React, {FC} from 'react';
type Props={
    image:string
}
const PosterPreview:FC<Props> = ({image}) => {

    return (
        <div>
            <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${image}`} alt="Movie Poster"/>
        </div>
    );
};

export default PosterPreview;