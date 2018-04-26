import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, JsonpModule } from '@angular/http';
import {Routes, RouterModule, RouterLink} from '@angular/router';
import {SearchService} from './search-service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';


const routes: Routes=[
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'find', redirectTo:'search', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'search', component:SearchComponent},
  {path:'artist/:artistId', component:ArtistComponent,
children:[{path:'', redirectTo:'tracks', pathMatch:'full'},
{path:'tracks', component:ArtistTrackListComponent},
{path:'albums', component:ArtistAlbumListComponent},
]
  },
  {path:'**', component:HomeComponent},
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
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
