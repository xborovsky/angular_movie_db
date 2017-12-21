import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { routes } from './routes';

import { MovieDbService } from './movie-db.service';
import { MovieDbThumbnailService } from './movie-db-thumbnail.service';
import { MovieExtractService } from './movie-extract.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { DetailComponent } from './detail/detail.component';
import { CreditsComponent } from './credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    MovieThumbnailComponent,
    DetailComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [MovieDbThumbnailService, MovieDbService, MovieExtractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
