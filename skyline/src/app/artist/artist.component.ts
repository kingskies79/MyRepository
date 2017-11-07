import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Jsonp} from '@angular/http';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  private artist: any;

  constructor(private route: ActivatedRoute, private jsonp: Jsonp) {
   // console.log(this.route.parent.params['artistId']);
    this.route.params.subscribe(params => {
      console.log('ArtistComponent' + params['artistId']);
    this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&callback=JSONP_CALLBACK`)
    .toPromise()
      .then(res => {
        console.log(res.json());
        this.artist = res.json().results[0];
        console.log(this.artist);
      });
  });
}

  ngOnInit() {
  }

}
