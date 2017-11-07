import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/RX';
import {FormControl} from '@angular/forms';
import {SearchService} from './search-service';
import {SearchItem} from './search-item';
import {Routes, RouterModule, ActivatedRoute} from '@angular/router';
import {URLSearchParams, Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {





  constructor () {

  }


ngOnInit () {

}
}
