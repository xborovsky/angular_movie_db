import { Component, Input } from '@angular/core';
import { MovieThumbnail } from './../movie';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MovieThumbnailComponent {

  @Input()
  public movieData:MovieThumbnail;

  constructor() { }

}
