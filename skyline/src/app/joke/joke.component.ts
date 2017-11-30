import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import {Joke} from '../joke';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit, OnChanges {
  @Input() joke: Joke;
  @Output() deletedJoke= new EventEmitter<Joke>();

  constructor() { }
  removeJoke(joke) {

    this.deletedJoke.emit(joke);
  }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.joke.setup}`);
    for (let key in changes) {
      if (key) {
        console.log(key);
      console.log(`${key} changed. Curent: ${changes[key].currentValue}. Previous Value : ${changes[key].previousValue}`);
      }
    }

  }

}
