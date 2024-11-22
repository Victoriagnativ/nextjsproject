import React, {FC} from 'react';

type Props ={
    genres:number[]
}
const GenreBadge:FC<Props> = ({genres}) => {
    return (
        <div>
            {genres}
        </div>
    );
};

export default GenreBadge;