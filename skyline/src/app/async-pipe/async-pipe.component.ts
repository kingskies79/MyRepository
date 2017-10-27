import { Component, OnInit, OnDestroy } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Observable} from 'rxjs/RX';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit, OnDestroy {
  observableData: number;
  subscription: Object ;

  constructor() {
    this.subscribeObservable();
  }
  getObservable() {
    return Observable
          .interval(1000)
          .take(10)
          .map ((v) => v * v);
  }
    subscribeObservable() {
      this.subscription = this.getObservable()
      .subscribe( v => this.observableData = v);
    }

  ngOnInit() {
  }
  ngOnDestroy() {


  }

}
