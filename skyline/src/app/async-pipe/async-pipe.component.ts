import { Component, OnInit, OnDestroy } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit, OnDestroy {
  promiseData: Object;

  constructor() {
    this.getPromise().then(v => this.promiseData = v);
  }
  getPromise() {
    return new Promise((resolve, reject) => { setTimeout(() => resolve('Promise complete!'), 3000); });
  }

  ngOnInit() {
  }
  ngOnDestroy() {

  }

}
