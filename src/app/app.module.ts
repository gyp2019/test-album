import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SpotifySearchService } from './spotify-search.service';
import { HotlistComponent } from './hotlist/hotlist.component';
import { ViewCountPipe } from './view-count.pipe';
import { TopbarComponent } from './topbar/topbar.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'hotlist', component: HotlistComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HotlistComponent,
    ViewCountPipe,
    TopbarComponent,
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
