import {IGenre} from "@/app/models/IGenre";

export const getGenres = async (): Promise<IGenre[]> => {
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '97e61de868edcdd36000e3f85bf165dd';

    const response = await fetch(`${API_URL}genre/movie/list?api_key=${API_KEY}&language=uk-UA`);

    if (!response.ok) {
        throw new Error('Не вдалося отримати жанри');
    }

    const data = await response.json();
    return data.genres;
};
