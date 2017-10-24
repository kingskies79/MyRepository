import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;
  @Output () jokeRemove = new EventEmitter <Joke>();
  constructor( ) {

   }

  deleteJoke(j) {
    this.jokeRemove.emit(j);
  }

  ngOnInit() {
  }

}
