import { MovieExtractService } from './movie-extract.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { Movie, MovieThumbnail } from './movie';
import { Constants } from './constants';

@Injectable()
export class MovieDbThumbnailService {

  constructor(private http:Http, private dataExtractService:MovieExtractService) { }

  searchMovie(searchText:string):Observable<MovieThumbnail[]> {
    const url = `${Constants.SEARCH_URL}${searchText}`;
    return this.http.get(url)
      .map(res => {
        return this.dataExtractService.extractThumbnails(res.json());
      });
  }
  
  getPopularMovies():Observable<MovieThumbnail[]> {
    return this.http.get(Constants.POPULAR_MOVIES_URL)
      .map(res => {
        return this.dataExtractService.extractThumbnails(res.json());
      });
  }

  getNowPlayingMovies():Observable<MovieThumbnail[]> {
    return this.http.get(Constants.NOW_PLAYING_MOVIES_URL)
      .map(res => {
        return this.dataExtractService.extractThumbnails(res.json());
      });
  }

  getUpcomingMovies():Observable<MovieThumbnail[]> {
    return this.http.get(Constants.UPCOMING_MOVIES_URL)
      .map(res => {
        return this.dataExtractService.extractThumbnails(res.json());
      });
  }

}
