import { Injectable } from '@angular/core';

import { MovieThumbnail, Movie } from './movie';

@Injectable()
export class MovieExtractService {

  constructor() { }

  extractThumbnails(json):MovieThumbnail[] {
    let results:MovieThumbnail[] = [];

    json.results.forEach((data) => {
      results.push(this.extractThumbnailData(data));
    });

    return results;
  }

  extractThumbnailData(json):MovieThumbnail {
    let thumbnail = new MovieThumbnail();
    thumbnail.id = json.id;
    thumbnail.title = json.title;
    thumbnail.releaseDate = json.release_date;
    thumbnail.image = json.poster_path;

    return thumbnail;
  }

  extractDetailData(json):Movie {
    let result:Movie = new Movie();
    let thumbnail:MovieThumbnail = this.extractThumbnailData(json); // TODO better?
    result.id = thumbnail.id; 
    result.image = thumbnail.image;
    result.releaseDate = thumbnail.releaseDate;
    result.title = thumbnail.title;
    result.adult = json.adult;
    result.budget = json.badget;
    result.homepage = json.homepage;
    result.popularity = json.popularity;
    result.genres = json.genres.map(genre => genre.name);

    return result;
  }

}
