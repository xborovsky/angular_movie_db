import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { Movie, MovieThumbnail } from './movie';

const API_KEY = 'c264f8b2a5a6ecf66e5b42cfc2df737b';
const BASE_URL = 'https://api.themoviedb.org/3/';
const SEARCH_URL = `${BASE_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_MOVIES_URL = `${BASE_URL}movie/popular?api_key=${API_KEY}`;

@Injectable()
export class MovieDbService {

  constructor(private http:Http) { }

  searchMovie(searchText:string):Observable<Movie[]> {
    const url = `${SEARCH_URL}${searchText}`;
    return this.http.get(url)
      .map(res => {
        console.log(res.json());
        return null;
      });
  }
  
  getPopularMovies():Observable<MovieThumbnail[]> {
    return this.http.get(POPULAR_MOVIES_URL)
      .map(res => {
        return this.extractThumbnailData(res.json());
      });
  }

  private extractData(res:Response):Movie[] {
    return [];
  }

  private extractThumbnailData(json):MovieThumbnail[] {
    let results:MovieThumbnail[] = [];

    json.results.forEach((data) => {
      let thumbnail = new MovieThumbnail();
      thumbnail.title = data.title;
      thumbnail.releaseDate = data.release_date;
      thumbnail.image = data.poster_path;

      results.push(thumbnail);
    });

    return results;
  }

}
