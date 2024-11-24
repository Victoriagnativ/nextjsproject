// 'use client';
// import React, { useEffect, useState } from 'react';
// import {IMovie} from "@/app/models/IMovie";
// import {getMovies} from "@/app/services/service.api";
// import MoviesList from "@/app/components/MoviesList";
// import Header from "@/app/components/header/Header";
//
//
//
// const MoviesPage = () => {
//
//     const [movies, setMovies] = useState<IMovie[]>([]);
//     const [error, setError] = useState<string | null>(null);
//     const [page, setPage] = useState(1);
//
//     useEffect(() => {
//         getMovies(page)
//             .then(data =>{
//                 setMovies(data.results);
//             }).catch(reason => setError(reason));
//
//     }, [page]);
//
//     if (error) {
//         return <p>{error}</p>;
//     }
//
//     return (
//         <div>
//             <Header/>
//             <MoviesList movies={movies}/>
//
//         </div>
//     );
// };
//
// export default MoviesPage;
