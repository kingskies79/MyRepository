import { Component, OnInit } from '@angular/core';
import {JokeComponent} from '../joke/joke.component';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke [];

  constructor() {
    this.jokes = [
      new Joke(
         'Disse la vacca al mulo oggi ti puzza il culo !!!',
         'Disse il mulo alla vacca ho appena fatto la cacca !!!',
         true
        ),
      new Joke(
         'Disse la vacca al mulo oggi ti puzza il culo 2!!!',
         'Disse il mulo alla vacca ho appena fatto la cacca 2!!!',
         false
      ),
      new Joke(
         'Disse la vacca al mulo oggi ti puzza il culo 3!!!',
        'Disse il mulo alla vacca ho appena fatto la cacca 3!!!',
        true
      )
    ];
    console.log(this.jokes);
  }

addJoke(j) {
  this.jokes.unshift(j);
}
removeJoke(j) {
  const  index = this.jokes.indexOf(j, 0);
  this.jokes.splice(index, 1);
}
ngOnInit() {
  }

}
