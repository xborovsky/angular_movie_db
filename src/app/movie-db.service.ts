import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Movie } from './movie';
import { Constants } from './constants';
import { MovieExtractService } from './movie-extract.service';

@Injectable()
export class MovieDbService {

  constructor(private http:Http, private movieExtractService:MovieExtractService) { }

  getMovieDetail(id:string):Observable<Movie> {
    return this.http.get(`${Constants.MOVIE_URL}/${id}?api_key=${Constants.API_KEY}`)
      .map(res => this.movieExtractService.extractDetailData(res.json()));
  }

}
