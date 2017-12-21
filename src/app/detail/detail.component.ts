import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import { Movie } from './../movie';
import { MovieDbService } from './../movie-db.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  private sub:any;
  movie:Movie = null;

  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieDbService) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      const id:string = params['id'];
      this.movieService.getMovieDetail(id)
        .subscribe((movie:Movie) => this.movie = movie);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
