export const searchMovies = async (query:string) => {
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '97e61de868edcdd36000e3f85bf165dd';

    const response = await fetch(`${API_URL}search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
};
