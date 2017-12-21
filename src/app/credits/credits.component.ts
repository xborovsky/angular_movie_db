import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieDbService } from '../movie-db.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {
  private sub:any;
  cast:any[];

  constructor(private activatedRoute:ActivatedRoute, private movieDbService:MovieDbService) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      const id:string = params['id'];
      this.movieDbService.getCredits(id)
        .subscribe(credits => {
          this.cast = credits.cast;
        });
    });
  }

}
