import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/RX';
import {URLSearchParams, Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  apiRoot = 'http://httpbin.org';
  constructor (private http: Http) {

  }
  doGet () {
    console.log('GET');
    const url = `${this.apiRoot}/get`;
    const search = new URLSearchParams();
    search.set('foo', 'moo') ;
    search.set('limit', '25');
    this.http.get(url, {search: search}).subscribe(res => console.log(res.json()));
    // this.http.get(url).subscribe(res => console.log(res.text()));
    // this.http.get(url).subscribe(res => console.log(res.json()));
  }
  doPost() {
    console.log('POST');
    const url = `${this.apiRoot}/post`;
    const search = new URLSearchParams();
    this.http.post(url, {moo: 'foo', goo: 'loo'}).subscribe(res => console.log(res.json()));
  }
  doPut() {
    console.log('PUT');
  }
  doDelete() {
    console.log('DELETE');
    const url = `${this.apiRoot}/delete`;
    const search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.delete(url, {search: search}).subscribe(res => console.log(res.json()));
  }
  doGETAsPromise() {
    console.log('Get as Promise');
    const url = `${this.apiRoot}/get`;
    this.http.get(url)
    .toPromise()
    .then(res => console.log(res.json()));
  }
  doGETAsPromiseError() {
    console.log('Get as Promise Error');
    const url = `${this.apiRoot}/post`;
    this.http.get(url)
    .toPromise()
    .then(res => console.log(res.json()), msg => console.error (`Error: ${msg.status} ${msg.statusText}`));
  }
  doGETAsObservableError() {
    console.log('Get as Observable Error');
    console.log('Get as Promise Error');
    const url = `${this.apiRoot}/post`;
    this.http.get(url).subscribe(res => console.log(res.json()), msg => console.error(`Error: ${msg.status} ${msg.statusText}`));
  }
  doGETWithHeaders() {
    console.log('Get with Headers');
    const headers: Headers = new Headers();
    headers.append('Authorization', btoa('username:password'));
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url = `${this.apiRoot}/get`;
    this.http.get(url, opts).subscribe(res => console.log(res.json()), msg => console.error (`Error: ${msg.status} ${msg.statusText}`));
  }
}
