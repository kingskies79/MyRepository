import { Component, OnInit, OnDestroy } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Observable, Subscriber, Subscription } from 'rxjs/RX';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit, OnDestroy {
  promise: Promise<string>;
  observable: Observable<number>;
  subscription: Subscription;
  observableData: number;

  constructor() {
    this.promise = this.getPromise();
    this.observable = this.getObservable();

    this.subscribeObservable();

  }
  getObservable() {
    return Observable
      .interval(1000)
      .take(10)
      .map((v) => v * v);
  }
  subscribeObservable() {
    this.subscription = this.getObservable()
      .subscribe(v => this.observableData = v);
  }
  getPromise() {
    return new Promise((resolve, reject) => { setTimeout(() => resolve('Promise Complete!'), 3000); });
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.subscribeObservable) {
      this.subscription.unsubscribe();
      console.log('subscription.unsubscribe');
    }

  }

}
