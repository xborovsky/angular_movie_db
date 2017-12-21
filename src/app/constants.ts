export class Constants {
    public static API_KEY = 'c264f8b2a5a6ecf66e5b42cfc2df737b';
    public static BASE_URL = 'https://api.themoviedb.org/3';
    public static SEARCH_URL = `${Constants.BASE_URL}/search/movie?api_key=${Constants.API_KEY}&query=`;
    public static MOVIE_URL = `${Constants.BASE_URL}/movie`;
    public static POPULAR_MOVIES_URL = `${Constants.MOVIE_URL}/popular?api_key=${Constants.API_KEY}`;
    public static NOW_PLAYING_MOVIES_URL = `${Constants.MOVIE_URL}/now_playing?api_key=${Constants.API_KEY}`;
}
