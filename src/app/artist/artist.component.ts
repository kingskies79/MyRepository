import { Component, OnInit } from '@angular/core';
import { Jsonp } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
private artist:any;
  constructor(private jsonp: Jsonp, private route: ActivatedRoute) {

    this.route.params.subscribe(params=> {
       this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=song&callback=JSONP_CALLBACK`)
      .toPromise()
      .then(res=> this.artist=res.json().results[0]);
    });
   }

  ngOnInit() {
  }

}
