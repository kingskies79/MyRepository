import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Joke} from '../joke';
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input('joke') datas: Joke;
  @Output () deletedJoke = new EventEmitter<Joke>();
  constructor() { }

  ngOnInit() {
  }
  deleteItem(joke) {
    this.deletedJoke.emit(this.datas);
  }
}
