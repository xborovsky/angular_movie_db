import { Component, Output, EventEmitter } from '@angular/core';

import { MovieDbThumbnailService } from './../movie-db-thumbnail.service';
import { MovieThumbnail } from './../movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output()
  onSearchResult = new EventEmitter<MovieThumbnail[]>();

  constructor(private movieDbService:MovieDbThumbnailService) { }

  searchMovies(searchText:string) {
    this.movieDbService.searchMovie(searchText)
      .subscribe((movies:MovieThumbnail[]) => {
        this.onSearchResult.emit(movies);
      });
  }

}
