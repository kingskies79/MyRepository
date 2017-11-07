import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import { NgModule, OpaqueToken, Inject } from '@angular/core';
import {Http, JsonpModule, Response, RequestOptions, Headers, HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {SearchService} from './search-service';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import {AlwaysAuthGuard} from './always-auth-guard';

const routes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artist/:artistId/tracks', component: ArtistTrackListComponent, canActivate: [AlwaysAuthGuard]},
  {path: 'artist/:artistId/albums', component: ArtistAlbumListComponent, canActivate: [AlwaysAuthGuard]},
  {path: 'artist/:artistId', component: ArtistComponent, canActivate: [AlwaysAuthGuard]},

  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,


  ],

  imports: [BrowserModule, JsonpModule,  ReactiveFormsModule, FormsModule, RouterModule.forRoot(routes, {useHash: true})],

  providers: [SearchService, AlwaysAuthGuard ],

  bootstrap: [AppComponent]
})
export class AppModule { }
