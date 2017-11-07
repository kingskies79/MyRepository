import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/RX';
import {FormControl} from '@angular/forms';
import {SearchService} from './search-service';
import {SearchItem} from './search-item';
import {URLSearchParams, Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  private loading: boolean;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;


  constructor (private itunes: SearchService) {

  }
doSearch(term: string) {
 console.log (term);
  this.itunes.search(term);

}
ngOnInit () {
this.searchField = new FormControl();
this.results = this.searchField.valueChanges
.debounceTime(400)
.distinctUntilChanged()
.do(_ => this.loading = true)
.switchMap(term => this.itunes.search(term))
.do(_ => this.loading = false)
}
}
