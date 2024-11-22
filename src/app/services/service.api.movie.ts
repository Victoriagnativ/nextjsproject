import {IMovie} from "@/app/models/IMovie";

export const getMovie = async (id: string | string[]): Promise<IMovie> => {
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '97e61de868edcdd36000e3f85bf165dd';

    try {
        const response = await fetch(`${API_URL}movie/${id}?api_key=${API_KEY}&language=uk-UA`)

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Помилка отримання фільму:', error);
        throw error;
    }
};

