const API_URL = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = '97e61de868edcdd36000e3f85bf165dd';

export const getMovies = async ( page = 1 ) => {
    // const skip = (page - 1) * limit;
try{
        const response = await fetch(
            `${API_URL}?api_key=${API_KEY}&language=uk-UA&sort_by=popularity.desc&page=${page}&limit=10`
        )

        const data = await response.json();
        return data;
} catch (error) {
    console.error('Login error:', error);
    throw error;
}

};
