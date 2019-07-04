import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SpotifySearchService } from './spotify-search.service';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    SpotifySearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
