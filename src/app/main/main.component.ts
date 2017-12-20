import { MovieDbService } from './../movie-db.service';
import { Component, OnInit } from '@angular/core';

import {  MovieThumbnail } from './../movie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public popularMovies:MovieThumbnail[] = [];

  constructor(private movieDbService:MovieDbService) { }

  ngOnInit() {
    this.movieDbService.getPopularMovies()
      .subscribe((movies:MovieThumbnail[]) => this.popularMovies = movies);
  }

}
