import { MovieDbService } from './movie-db.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { routes } from './routes';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    MovieThumbnailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [MovieDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
