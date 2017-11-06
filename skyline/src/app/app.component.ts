import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/RX';
import {SearchService} from './search-service';
import {URLSearchParams, Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  private loading: boolean;


  constructor (private itunes: SearchService) {

  }
doSearch(term: string) {
  this.loading = true;
  this.itunes.search(term).then(_ => this.loading = false);

}
}
