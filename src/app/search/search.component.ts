import { Component } from '@angular/core';

import { MovieDbThumbnailService } from './../movie-db-thumbnail.service';
import { Movie } from './../movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private movieDbService:MovieDbThumbnailService) { }

  searchMovies(searchText:string) {
    console.log('search movies...');
    this.movieDbService.searchMovie(searchText)
      .subscribe((movies:Movie[]) => {
        console.log(movies);
      });
  }

}
