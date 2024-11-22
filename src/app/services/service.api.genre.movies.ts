export const getMoviesByGenre = async (id: string | string[], page = 1) => {
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '97e61de868edcdd36000e3f85bf165dd';

    const response = await fetch(`${API_URL}discover/movie?api_key=${API_KEY}&language=uk-UA&with_genres=${id}&sort_by=popularity.desc&page=${page}`);
    const data = await response.json();
    return data.results; // Повертаємо список фільмів
};
