import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];
  constructor() {
    this.jokes = [
      new Joke('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum cupiditate corrupti ipsa eaque quisquam.!'
        ,
        'Non lo so'
        ,
        true),

      new Joke('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum cupiditate corrupti ipsa eaque quisquam.2!'
        ,
        'Non lo so. 2'
        ,
        true),

      new Joke('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum cupiditate corrupti ipsa eaque quisquam.3!'
        ,
        'Non lo so. 3'
        ,
        true)

    ];
  }

  ngOnInit() {
  }

  insertJoke(Joke) {
    this.jokes.unshift(Joke);

  }
  delJoke(joke) {
    const indexToDelete = this.jokes.indexOf(joke);
    if (indexToDelete !== -1) {
      this.jokes.splice(indexToDelete, 1);
    }
  }

}
