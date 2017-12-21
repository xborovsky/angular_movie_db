import { Component, OnInit } from '@angular/core';

import { MovieThumbnail } from './../movie';
import { MovieDbThumbnailService } from './../movie-db-thumbnail.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public popularMovies:MovieThumbnail[] = [];
  public nowPlayingMovies:MovieThumbnail[] = [];

  constructor(private movieDbService:MovieDbThumbnailService) { }

  ngOnInit() {
    this.movieDbService.getPopularMovies()
      .subscribe((movies:MovieThumbnail[]) => this.popularMovies = movies);

    this.movieDbService.getNowPlayingMovies()
      .subscribe((movies:MovieThumbnail[]) => this.nowPlayingMovies = movies);
  }

}
