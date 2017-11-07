import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Jsonp} from '@angular/http';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent implements OnInit {

  private albums: any[];

    constructor(private route: ActivatedRoute, private jsonp: Jsonp) {
      this.route.params.subscribe(params => {
        console.log('ArtistAlbumListComponent' + params['artistId']);
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=album&callback=JSONP_CALLBACK`)
      .toPromise()
        .then(res => {
          console.log(res.json());
          this.albums = res.json().results.slice(1);
        });
    });
  }

  ngOnInit() {
  }

}
