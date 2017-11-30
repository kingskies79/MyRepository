import { Component, OnInit } from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  public jokes: Joke[];
  constructor() {
    this.jokes = [
      new Joke ('Testo 1', 'Risposta 1', true),
      new Joke ('Testo 2', 'Risposta 2', true),
      new Joke ('Testo 3', 'Risposta 3', true)
    ];
  }
 addJoke(j) {
   this.jokes.unshift(j);
 }
 delJoke(j) {
 this.jokes = [];
 }
  ngOnInit() {
  }

}
